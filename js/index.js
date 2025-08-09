// ------------------------------------------------------------------------ VARIABLES
let ORIENTATION = "Origin";
let CURR_PAGE = "Title";
let ON_404 = false;
let FIRST_LOAD = true;

let iframe = document.getElementById('iframe');

let box_shadow = "-1px -3px 0 2px #000 inset, -2px -4px 0 3px rgba(0, 0, 0, 0.5) inset, 1px 0px 0 1px rgba(255, 255, 255, 0.75) inset, 2px 1px 0 2px rgba(255, 255, 255, 0.3) inset";
let background_color = "rgba(255, 255, 255, 0.2)";

var BLINK_GIF = new Image();
BLINK_GIF.src = "img/index/transition/blink.gif";

let BACK_FORWARDS = false;

// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- private

// Runs on website open
function init() {
  pruneNavbar(); // Take away icons blacklisted in global.js
  scrolled(0); // register we are at the top of the page
  adjustSize(); // essentially called updateSource()
}

// Goes through and removes (or hides) each page icon we don't want users to be able to navigate to
// PAGES is the map of allowable pages in global.js
function pruneNavbar() {
  if (!PAGES.get("Thoughts")) {
    document.getElementById("ThoughtsLink").style.display = "none";
  }
  if (!PAGES.get("Writing")) {
    document.getElementById("WritingLink").style.display = "none";
  }
  if (!PAGES.get("Art")) {
    document.getElementById("ArtLink").style.display = "none";
  }
  if (!PAGES.get("Accretion")) {
    document.getElementById("AccretionLink").style.display = "none";
  }
  if (!PAGES.get("Runoff")) {
    document.getElementById("RunoffLink").style.display = "none";
  }
  if (!PAGES.get("Community")) {
    document.getElementById("CommunityLink").style.display = "none";
  }
}

// NAV CLICKS ----------------------------------------------------------------------------------------------------

// Called whenever the user resizes the window (& on initial website load)
// Only useful when I have mobile versions of each page
// Until I have mobile up, this just calls updateSource()
function adjustSize() {
// Adjusts navbar and page called depending on orientation
  if (window.innerHeight > window.innerWidth && ORIENTATION !== "Portrait") {
    document.getElementById("Navbar").style.height = "50px";
    ORIENTATION = "Portrait";
    updateSource(CURR_PAGE);
  } else if (window.innerHeight <= window.innerWidth && ORIENTATION !== "Landscape") {
    document.getElementById("Navbar").style.height = "135px";
    ORIENTATION = "Landscape";
    updateSource(CURR_PAGE);
  }
}

// Called when user clicks on page icon on navbar
// Starts blink animation, removes highlight from all icons, and calls updateSource()
async function navClick(source) {
  document.getElementById("Blink").src = BLINK_GIF.src;
  if (source !== CURR_PAGE) {
    setAllBlack();
    setTimeout(updateSource, 300, source);
  }
}

function updateSource(source){
  // Trigger blink on first navbar click (but not on initial website load)
  if (FIRST_LOAD) {
    FIRST_LOAD = false;
  } else if (document.getElementById("TransitionContainer").style.display !== "initial") {
    document.getElementById("TransitionContainer").style.display = "initial";
  }

  // Init for iframe source
  src = "";
  
  // PAGES is the map in global.js that denotes which pages are allowed to be accessed
  // If user somehow navigates to these (which they shouldn't be able to due to pruneNavbar()) we stop here as a second safety mechanism
  if (!PAGES.get(source)) {
    return;
  }

  // Register that we will be at the top of the new page
  scrolled(0);

  // Switch the source of the iframe
  CURR_PAGE = source;
  switch (source) {
    case "Title":
      src=(ORIENTATION === "Landscape" ? "title.html": "title.html");
      updateAesthetics("HomePic", "Invasive Website", "magenta");
      deactivateArrows();
      break;
    case "Art":
      src=(ORIENTATION === "Landscape" ? "art.html": "art.html");
      updateAesthetics("ArtPic", "Invasive Art", "purple");
      activateArrow("ArrowDown");
      break;
    case "Community":
      src=(ORIENTATION === "Landscape" ? "community.html": "community.html");
      updateAesthetics("CommunityPic", "Invasive Community", "cyan");
      deactivateArrows();
      break;
    case "Writing":
      src=(ORIENTATION === "Landscape" ? "writing.html": "writing.html");
      updateAesthetics("WritingPic", "Invasive Dreams", "blue");
      deactivateArrows();
      break;
    case "Thoughts":
      src=(ORIENTATION === "Landscape" ? "thoughts.html": "thoughts.html");
      updateAesthetics("ThoughtsPic", "Invasive Thoughts", "yellow");
      activateArrow("ArrowDown");
      break;
    case "Accretion":
      src=(ORIENTATION === "Landscape" ? "accretion.html": "accretion.html");
      updateAesthetics("AccretionPic", "Invasive Accretion", "coral");
      deactivateArrows();
      break;
    case "Runoff":
      src=(ORIENTATION === "Landscape" ? "runoff.html": "runoff.html");
      updateAesthetics("RunoffPic", "Invasive Runoff", "orange");
      activateArrow("ArrowDown");
      break;
    default: 
      src="/404.html";
      document.getElementById("Title").innerHTML = "Missing";
      break;
  }

  // If website is under construction, fuck whatever we did above!
  // We keep the tab title and navbar color, but send users to under (if title) or missing (if anywhere else)
  if (CONSTRUCTION) {
    switch (source) {
      case "Title":
        src="under.html";
        document.getElementById("Title").innerHTML = "Under";
        break;
      default:
        src="404.html";
        document.getElementById("Title").innerHTML = "Missing";
        break;
    }
    deactivateArrows();
  }

  // This surrounding if statement prevents double-loading on back/forward button navigation
  if (!BACK_FORWARDS) {
    // update source and send users on their way
    iframe.src = src;
  }
  BACK_FORWARDS = false;
}

// Called whenever the iframe loads a new page
// On standard nav clicks, this does nothing
// If user pressed back/forwards button, there will be a discrepancy between shown page and logged page
// (read: discrepancy between iframe src and internal iframe document URL)
// This updates all visual information to be consistent with displayed page
function verifyURL() {
  var curr_source = urlToSource();
  if (curr_source !== CURR_PAGE) {
    BACK_FORWARDS = true;
    setAllBlack();
    updateSource(curr_source);
  }
}

// Gets the INTERNAL url of the iframe and returns the shorthand equivalent
// This is bc iframe src and internal iframe document URL become desynced when back/forward button is used to navigate
function urlToSource() {
  var new_source = "";
  var curr_source = iframe.contentWindow.document.URL;
  if (curr_source.includes("title")) {
    new_source = "Title";
  } else if (curr_source.includes("writing")) {
    new_source = "Writing";
  } else if (curr_source.includes("art")) {
    new_source = "Art";
  } else if (curr_source.includes("community")) {
    new_source = "Community";
  } else if (curr_source.includes("thoughts")) {
    new_source = "Thoughts";
  } else if (curr_source.includes("accretion")) {
    new_source = "Accretion";
  } else if (curr_source.includes("runoff")) {
    new_source = "Runoff";
  } else {
    new_source = "404";
  }
  return new_source;
}

// NAV STYLE ----------------------------------------------------------------------------------------------------

// Removes the "highlight" box from everywhere
function setAllBlack() {
  document.getElementById("HomePic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("HomePic").style.boxShadow = ``;
  
  document.getElementById("ArtPic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("ArtPic").style.boxShadow = ``;
  
  document.getElementById("CommunityPic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("CommunityPic").style.boxShadow = ``;
  
  document.getElementById("WritingPic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("WritingPic").style.boxShadow = ``;
  
  document.getElementById("ThoughtsPic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("ThoughtsPic").style.boxShadow = ``;
  
  document.getElementById("AccretionPic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("AccretionPic").style.boxShadow = ``;
  
  document.getElementById("RunoffPic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("RunoffPic").style.boxShadow = ``;
}

// Updates tab title, navbar color, and where the highlight is placed
function updateAesthetics(highlighted_pic, title, navbar_color) {
  document.getElementById("Title").innerHTML = title;
  document.getElementById('Right').src = "img/index/nav_bgs/" + navbar_color + ".png";
  document.getElementById(highlighted_pic).style.backgroundColor = background_color;
  document.getElementById(highlighted_pic).style.boxShadow = box_shadow;
}

// ARROWS & SCROLLING ----------------------------------------------------------------------------------------------------

// This is called by the arrows, just serves as an intermediary to call the goToTop in global.js
function goToTop() {
  iframe.contentWindow.goToTop();
}
// This is called by the arrows, just serves as an intermediary to call the goToBottom in global.js
function goToBottom() {
  iframe.contentWindow.goToBottom();
}

// Remove both arrows lol
function deactivateArrows() {
  deactivateArrow("ArrowDown");
  deactivateArrow("ArrowUp");
}

// Make specified arrow show up
function activateArrow(id) {
  let arrow = document.getElementById(id);

  arrow.style.pointerEvents = "auto";
  arrow.style.transform = 'translateY(0px)';
  
  arrow.addEventListener('mouseenter', () => { bobArrowUp(id); }, true);
  arrow.addEventListener('mouseleave', () => { bobArrowDown(id); }, true);
  arrow.addEventListener('mouseup', () => { deactivateArrow(id); }, true);
}

// Hide specified arrow
function deactivateArrow(id) {
  let arrow = document.getElementById(id);

  arrow.style.pointerEvents = "none";

  arrow.removeEventListener('mouseenter', () => { bobArrowUp(id); }, true);
  arrow.removeEventListener('mouseleave', () => { bobArrowDown(id); }, true);
  arrow.removeEventListener('mouseup', () => { deactivateArrow(id); }, true);

  arrow.style.transform = "translateY(200px)";
}

// Used for arrow haptics
function bobArrowUp(id) {
  document.getElementById(id).style.transform = 'translateY(-25px)';
}

// Used for arrow haptics
function bobArrowDown(id) {
  document.getElementById(id).style.transform = 'translateY(0px)';
}

// Called on initial website load
// And from global.js whenever iframe is scrolled
function scrolled(position) {
  switch (position) {
    case 0:
      // at top
      activateArrow("ArrowDown");
      deactivateArrow("ArrowUp");
      break;
    case 1:
      // At bottom
      activateArrow("ArrowUp");
      deactivateArrow("ArrowDown");
      break;
    case 2:
      activateArrow("ArrowDown");
      activateArrow("ArrowUp");
      break;
  }
}


// ---------------------------------------------- public
// ------------------------------------------------------------------------ LISTENERS
window.addEventListener('resize', adjustSize); // Register that we adjust window size (for when mobile is implemented)

document.getElementById('ArrowDown').addEventListener('mouseenter', () => {
  document.getElementById('ArrowDown').style.transform = 'translateY(-25px)';
});
document.getElementById('ArrowDown').addEventListener('mouseleave', () => {
  document.getElementById('ArrowDown').style.transform = 'translateY(0px)';
});

document.getElementById('ArrowUp').addEventListener('mouseenter', () => {
  document.getElementById('ArrowUp').style.transform = 'translateY(-25px)';
});
document.getElementById('ArrowUp').addEventListener('mouseleave', () => {
  document.getElementById('ArrowUp').style.transform = 'translateY(0px)';
});

// ------------------------------------------------------------------------
init();
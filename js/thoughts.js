// ------------------------------------------------------------------------ VARIABLES
INTRO_LEFT = `<div id="Horizontal"></div>
<div id="LeftJust"><div id="TextDiv">`

INTRO_RIGHT = `<div id="Horizontal"></div>
<div id="RightJust"><div id="TextDiv">`

ENDING = "</div></div>"

let MAX_PAGE_NUM = 5;
let PAGE_NUM = MAX_PAGE_NUM;
// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- public
// ---------------------------------------------- private
function init() {
  injectText();
}

async function injectText() {
  document.getElementById("ProcessingImport").innerHTML = "";
  document.getElementById("CurrPageNum").innerHTML = PAGE_NUM.toString();
  let thoughts = await getJSON("/json/thoughts/processing" + PAGE_NUM.toString() + ".json");
  var innerHTML = "";
  
  for (let i = 0; i < thoughts.length; i++) {
    innerHTML += (i%2===0 ? INTRO_LEFT : INTRO_RIGHT) + thoughts[i].text + "\n" + ENDING + "\n"; 
  }
  
  innerHTML += `<div id="Horizontal"></div>`;
  
  document.getElementById("ProcessingImport").innerHTML += innerHTML;
}

function navigate(isForward) {
  if (isForward && PAGE_NUM < MAX_PAGE_NUM) {
    PAGE_NUM += 1;
    if (PAGE_NUM === MAX_PAGE_NUM) {
      document.getElementById("NavigateBackward").style.filter = "brightness(0.5)";
    } else {
      document.getElementById("NavigateForward").style.filter = "brightness(1)";
      document.getElementById("NavigateBackward").style.filter = "brightness(1)";
    }
    injectText();
  } else if (!isForward && PAGE_NUM > 1) {
    PAGE_NUM -= 1;
    if (PAGE_NUM === 1) {
      document.getElementById("NavigateForward").style.filter = "brightness(0.5)";
    } else {
      document.getElementById("NavigateBackward").style.filter = "brightness(1)";
      document.getElementById("NavigateForward").style.filter = "brightness(1)";
    }
    injectText();
  }
}
// ---------------------------------------------- utility
// ------------------------------------------------------------------------ LISTENERS
// ------------------------------------------------------------------------ RUNNERS
pageInit();
init();
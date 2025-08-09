// ------------------------------------------------------------------------ VARIABLES
// let GLOBALS = getJSON("/json/global.json"); // await???
let CONSTRUCTION = false;
let PAGES = new Map([
    ["Title", true],
    ["Thoughts", true],
    ["Writing", true],
    ["Art", true],
    ["Accretion", false],
    ["Runoff", false],
    ["Community", true],
]);
// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- public
function pageInit() {
  document.body.innerHTML = "<div id=\"AllContainer\"><div onscroll=\"scrolled()\" id=\"PageContainer\">" + document.body.innerHTML + "</div><div id=\"NavSpacer\" style=\"pointer-events:none;\"></div></div>";
}

async function getJSON(url) {
  const response = await fetch(url);
  return await response.json();
}

function goToTop() {
  let divElement = document.getElementById('PageContainer');
  divElement.scrollTop = 0;
  scrolled();
} 

function goToBottom() {
  let divElement = document.getElementById('PageContainer');
  divElement.scrollTop = divElement.scrollHeight;
  scrolled();
} 

function scrolled() {
  if (window.top !== window) {
  let curr_height = document.getElementById('PageContainer').scrollTop;
  let max_height = document.getElementById('PageContainer').scrollHeight - document.getElementById('PageContainer').offsetHeight;
    if (curr_height <= 5) {
      // At top
      window.top.scrolled(0);
    } else if (curr_height >= max_height-5) {
      // At bottom
      window.top.scrolled(1);
    } else {
      // Middle
      window.top.scrolled(2);
    }
  }
}

function disableScrolling() {
  document.getElementById('PageContainer').style.overflowY = "hidden";
}
// ---------------------------------------------- private
// ---------------------------------------------- utility

// Used for processing 404s and stuff
// Unused rn but kept in case bc i don't wanna figure this logic out again
async function ifUrlExist(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "HEAD"
        }).then(response => {
            resolve(response.status.toString()[0] === "2")
        }).catch(error => {
            reject(false)
        })
    })
}

// lets me delay all processing for some time i think
const delay = millis => new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), millis)
});

// ------------------------------------------------------------------------ RUNNERS
// ------------------------------------------------------------------------ LISTENERS
window.addEventListener("load", window.top.endTransition);
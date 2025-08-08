// ------------------------------------------------------------------------ VARIABLES

// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- private
async function blink() {
  await delay(Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000);


  document.getElementById("LeftEye").style.filter = 'brightness(0)';
  document.getElementById("RightEye").style.filter = 'brightness(0)';
  await delay(100);
  document.getElementById("LeftEye").style.filter = 'brightness(1)';
  document.getElementById("RightEye").style.filter = 'brightness(1)';
}

// ---------------------------------------------- utility
const delay = millis => new Promise((resolve, reject) => {
  setTimeout(_ => resolve(), millis)
});

// ---------------------------------------------- public
// ------------------------------------------------------------------------ LISTENERS
// ------------------------------------------------------------------------ RUNNERS
pageInit();
blink();
setInterval(blink, 2000);
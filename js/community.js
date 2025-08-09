// ------------------------------------------------------------------------ VARIABLES
// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- public
// ---------------------------------------------- private
function init() {
  prettify();
}

function prettify() {
  let link_pic = document.getElementById("LinktreePic")
  link_pic.addEventListener('mouseenter', () => {
    link_pic.style.filter = 'brightness(1.5)';
  });
  link_pic.addEventListener('mousedown', () => {
    link_pic.style.filter = 'brightness(0.7)';
  });
  link_pic.addEventListener('mouseleave', () => {
    link_pic.style.filter = 'brightness(1)';
  });

  let guest_pic = document.getElementById("GuestbookPic")
  guest_pic.addEventListener('mouseenter', () => {
    guest_pic.style.transform = 'rotate(7deg)';
  });
  guest_pic.addEventListener('mouseleave', () => {
    guest_pic.style.transform = 'rotate(-3deg)';
  });
  
  let seed_pic = document.getElementById("SeedboxPic")
  seed_pic.addEventListener('mouseenter', () => {
    seed_pic.style.transform = 'rotate(-20deg)';
  });
  seed_pic.addEventListener('mouseleave', () => {
    seed_pic.style.transform = 'rotate(-10deg)';
  });
}

// ---------------------------------------------- utility
// ------------------------------------------------------------------------ LISTENERS
// ------------------------------------------------------------------------ RUNNERS
pageInit();
init();
// ------------------------------------------------------------------------ VARIABLES
// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- public
// ---------------------------------------------- private
function init() {
  loadArt();
}

async function loadArt() {
  let pictures = await getJSON("/json/art.json");
  let innerHTML = "<br>";

  for (let i = 0; i < pictures.length; i++) {
    let isvideo = (pictures[i].url.substr(pictures[i].url.length - 3) === "mp4")

    innerHTML += "<div><h2>" + pictures[i].title + "</h2></div>";
    if (isvideo) {
      innerHTML += "<div><a href=\"" + pictures[i].url + "\" target=\"_blank\"><video src=\"" + pictures[i].url + "\" type=\"video/mp4\" autoplay=\"true\" loop=\"true\" class=\"ArtPicture\"></a></div>";
    } else {
      innerHTML += "<div><a href=\"" + pictures[i].url + "\" target=\"_blank\"><img src=\"" + pictures[i].url + "\" class=\"ArtPicture\"></a></div>";
    }

    innerHTML += "<div class=\"Caption\"><p><i>" + pictures[i].desc + "</i></p></div>";
    innerHTML += (i === pictures.length-1 ? "" : "<br><hr><br>");
  }

  document.getElementById("ArtContent").innerHTML = innerHTML;
}
// ---------------------------------------------- utility
// ------------------------------------------------------------------------ LISTENERS
// ------------------------------------------------------------------------ RUNNERS
pageInit();
init();
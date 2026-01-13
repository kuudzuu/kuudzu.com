// ------------------------------------------------------------------------ VARIABLES
var IS_HIDDEN = [
    true, // 1
    true, // 2
    true,
    true
];

var IS_BOBBED = [
    false, // 1
    false, // 2
    false,
    false,
]
// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- public
// ---------------------------------------------- private

async function init() {
    let Content1 = await getTextFile("json/runoff/rainworld.txt");
    Content1 = spaceText(Content1) + "<br><br><br><br><br><br><br>";
    document.getElementById("Content1").innerHTML = Content1;

    let Content2 = await getTextFile("json/runoff/theocean.txt");
    Content2 = spaceText(Content2) + "<br><br><br><br><br><br><br>";
    document.getElementById("Content2").innerHTML = Content2;

    let Content3 = await getTextFile("json/runoff/goosecall.txt");
    Content3 = spaceText(Content3) + "<br><br><br><br><br><br><br>";
    document.getElementById("Content3").innerHTML = Content3;

    let Content4 = await getTextFile("json/runoff/berserk.txt");
    Content4 = spaceText(Content4) + "<br><br><br><br><br><br><br>";
    document.getElementById("Content4").innerHTML = Content4;
}

// Can I be honest im fucking sorry for this one
// Cutouts with odd number are on left
// Cutouts with even number are on right
// Makes them bob a little on mouseover to indicate closing/opening
function bobCutout(id_num) {
    var cutout = document.getElementById('Cutout' + id_num.toString());
    var isBobbed = IS_BOBBED[id_num-1];
    var isClosed = IS_HIDDEN[id_num-1];
    if (isBobbed) {
        if (id_num % 2 === 0) {
            // even (right)
            if (isClosed) {
                cutout.style.transform = "translateX(0)";
            }
        } else {
            // odd (left)
            if (isClosed) {
                cutout.style.transform = "translateX(0)";
            }
        }
        IS_BOBBED[id_num-1] = false;
    } else {
        if (id_num % 2 === 0) {
            // even (right)
            if (isClosed) {
                cutout.style.transform = "translateX(-3vw)";
            }
        } else {
            // odd (left)
            if (isClosed) {
                cutout.style.transform = "translateX(3vw)";
            }
        }
        IS_BOBBED[id_num-1] = true;
    }
}

// Closes/opens cutout when rubble picture is clicked
// Odd numbered cutouts are on left
// Even numbered cutouts are on right
function moveCutout(id_num) {
    var cutout = document.getElementById('Cutout' + id_num.toString());
    var isOpening = IS_HIDDEN[id_num-1];
    if (isOpening) {
        if (id_num % 2 === 0) {
            // even (right)
            cutout.style.transform = "translateX(-53vw)";
        } else {
            // odd (left)
            cutout.style.transform = "translateX(53vw)";
        }
        IS_HIDDEN[id_num-1] = false;
    } else {
        cutout.style.transform = "translateX(0)";
        IS_HIDDEN[id_num-1] = true;
    }
}
// ---------------------------------------------- utility

function adjustContainerHeight() {
    const container = document.getElementById('Rope');
    const items = container.querySelectorAll('.item');

    let maxBottom = 0;

    items.forEach(item => {
        const bottom = item.offsetTop + item.offsetHeight;
        if (bottom > maxBottom) {
            maxBottom = bottom;
        }
    });
    container.style.height = (maxBottom + 50) + 'px';
}
// ------------------------------------------------------------------------ RUNNERS
pageInit();
init();
// ------------------------------------------------------------------------ LISTENERS
document.getElementById('Rubble1').addEventListener('mouseenter', function() { bobCutout(1); }, true);
document.getElementById('Rubble2').addEventListener('mouseenter', function() { bobCutout(2); }, true);
document.getElementById('Rubble3').addEventListener('mouseenter', function() { bobCutout(3); }, true);
document.getElementById('Rubble4').addEventListener('mouseenter', function() { bobCutout(4); }, true);

document.getElementById('Rubble1').addEventListener('mouseleave', function() { bobCutout(1); }, true);
document.getElementById('Rubble2').addEventListener('mouseleave', function() { bobCutout(2); }, true);
document.getElementById('Rubble3').addEventListener('mouseleave', function() { bobCutout(3); }, true);
document.getElementById('Rubble4').addEventListener('mouseleave', function() { bobCutout(4); }, true);

window.addEventListener('load', adjustContainerHeight);
window.addEventListener('resize', adjustContainerHeight);
// ------------------------------------------------------------------------ VARIABLES
CURR_PAGE = 0
// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- public
// ---------------------------------------------- private
function init() {
    prettify("RightArrow");
}

function prettify(element_id) {
    let arrow = document.getElementById(element_id);
    arrow.removeEventListener('mouseleave', () => {
        arrow.style.filter = 'brightness(0.3) opacity(0.5)';
    });
    arrow.removeEventListener('mousedown', () => {
        arrow.style.filter = 'brightness(0.3) opacity(0.5)';
    });
    arrow.removeEventListener('mouseenter', () => {
        arrow.style.filter = 'brightness(0.3) opacity(0.5)';
    });
    arrow.addEventListener('mouseenter', () => {
        arrow.style.filter = 'brightness(1.5)';
    });
    arrow.addEventListener('mousedown', () => {
        arrow.style.filter = 'brightness(0.6)';
    });
    arrow.addEventListener('mouseleave', () => {
        arrow.style.filter = 'brightness(0.8)';
    });
}

function unprettify(element_id) {
    let arrow = document.getElementById(element_id);
    arrow.removeEventListener('mouseenter', () => {
        arrow.style.filter = 'brightness(1.5)';
    });
    arrow.removeEventListener('mousedown', () => {
        arrow.style.filter = 'brightness(0.6)';
    });
    arrow.removeEventListener('mouseleave', () => {
        arrow.style.filter = 'brightness(0.8)';
    });
    arrow.addEventListener('mouseleave', () => {
        arrow.style.filter = 'brightness(0.3) opacity(0.5)';
    });
    arrow.addEventListener('mousedown', () => {
        arrow.style.filter = 'brightness(0.3) opacity(0.5)';
    });
    arrow.addEventListener('mouseenter', () => {
        arrow.style.filter = 'brightness(0.3) opacity(0.5)';
    });
}
// ---------------------------------------------- utility

// ------------------------------------------------------------------------ LISTENERS

// ------------------------------------------------------------------------ RUNNERS
pageInit();
init();
disableScrolling();

// ------------------------------------------------------------------------ SWITCHING THE TEXT
INTRO = `<h1> There is more to life than being awake </h1>
<hr>
One remarkable thing is that we sleep. We sleep again and again and again. So many times that it seems we will never get enough of it.

I understand sleep as something you must give yourself over to. Not from desperation, but from love. Sleep will be compassionate to you if you are kind to it. Sleep is fair, but not benevolent. Sleep will not give you a second chance. You cannot make sleep your bitch, you cannot slap it and tell it to do its thing and leave.

Sleep is larger than you. You will spend a long, long time devoted to it. It will care for you, respect you, but you must offer it your gentle and natural attention. You must show up with open eyes and an early mind. You must give up to it.

Sleep wants to envelop you, dark blue and iridescent and humming. It will lower fitful you gently into the great pond. It will wash your back, your calves, with steady hands. Scooping warm water over your face in slow repeated movements, smiling at the fragile yellowelectric threads flowing from your head and sparking across the water. It will love you. It will hold you in the dim while you suffer the confused, borderless, encompassing realizations found only to one in the dreams, leftover dregs of which slowly slough off the poor creature who wakes, blurry and confused and new.

Sleep is a deity. Sleep is a religion. We offer our body in worship to it every night. 

This ritual is sacred. I have documented it here.
`

STAGE_1 = `<h1> Poolside </h1>
<hr>
Your ankles flash in the sun. The pool is bright, unnatural blue but comfort. Whiteblind flashes fill your vision, and cause you small smiles. You feel invited to dip your leg in the water; it is cool. There's nobody nearby, but chatter hangs in the air. It's all from you, and it’s home. Your oval eyes draw redorange black over it all. Colors dance and patterns rear and throb, reminding you of your heavy pulse. Stretch out, you have laid your body down gladly - it is weary.`

STAGE_2 = `<h1> Dissolution </h1>
<hr>
Parts of the brain begin to spark and fizz and collide, settling only after jetting out arctic sprays of excess emotion
A lens cap over your mind's eye, but the camera is still on
Repeating sounds and patterns drawn
Halftone impression of colors, tinny and respectfully distanced
All flows in a slow circle, but the circle jitters small and fast
Twitching, and twitching, and twitching
A moment of wet-edged betweenness

…

Who’s there? And is it beautiful?
The mind becomes loose and milky
A wave of xantham gum
Are you used to me?
A person sits down, but you cannot see their face
Everything nodding in place
How close do you know home?

A chess rook as tall as the sky
Two men embracing
One gigantic ear
Echoey, dripping, and flashing

It is easy to forget here. Nothing wants your attention

But it is lonely on the highway, and the great beast shudders toward you, tranquil
`

STAGE_3 = `<h1> The Great Beast </h1>
<hr>
Heavy, pulsing, clicking rumble that is felt and seen rather than heard.

You are innocent and calm and not very bright
Inside some large velvety intestine
Everything is close
Staying is natural and obvious

”Finally, someone else is taking care of me”

You have no purpose here, thank god
Your body does not judge, even if you wanted it to
You are soft. You are naked. You are worked through in stillness
You are a package with no recipient, lost in the safety of transit
`

STAGE_4 = `<h1> Here </h1>
<hr>
There is nothing here.

Nobody is looking here. 

Nobody is here to look. This is an empty place.

There is no flicker beneath your motionless exterior. 

Your silent body is here, but you have never and will never enter this place.

What makes you you is beyond submerged.

Complete, smooth, and dark.

You are beautiful here.
`

STAGE_5 = `<h1> The Great Pond </h1>
<hr>
I had a dream that nothing was hiding from me.

Two men in frilly white clothing walked along a grassy ridgeline during the height of lush. Palempty fields spread out behind and below them. They talked of banal things, of some event coming up, and sparked with trepidation. Something loomed heavily over both of them, so high up as to not be seen except by the blurry shadow it cast, and they wished they would never stop walking. Empty sentences were exchanged quickly and not heard, testing whether the other would crack and become true; fearful that they themselves would be admonished for not breaking first. Both stumbled on the lonely edge of grief or of fear; some unearthly unnamed human emotion that sometimes flickers without record in front of a few singular souls.

Long draping white cords adorned with triangular flags waving at regular intervals. Support lines, staked into the ground, came into view as they walked.Their steps slowed dramatically and they tensed as though on the verge of shouting out or grabbing at their heads. A festival tent stood aloft; sheer white and frilly and adorned with the same decorating flags as the cords. Faint hints of pastel blue or yellow hid in the canvas folds the men did not look at. It stood with a strange bleakness, an accusatorily blank reminder that trepidation existed because of others and not itself. The world began to grow bright. 

The men balked. One opened his mouth, squinting in the growing light and nervously ambling around the perimeter of the ghastly construct, but did not say anything. The conspiratorially forced small talk between the men ceased without conflict. The second man similarly circled, as though scrutinizing it for a sign that would absolve him of his duty. The first shouted something - the words were utterly lost the second the light caught them, but the effect was immediate. One made a whooping sound and jumped up, trailing jittering frilly afterimages as he moved in the gathering blinding sunglow. The other broke into a large smile, one that made his eyes shine with a frightening degree of mirth, as though all the unnatural apprehension from the moment prior was transformed in an instant into just as unnatural elation. He eagerly grabbed one canvas corner of the tent with both hands, and ripped upward. The other man followed suit, and the tent was uprooted to the sky in a single billowing yank.

Many bodies simultaneously ran and jumped and twirled haltingly in slow motion, the world on halfspeed, pouring out from where they had been cramped to stream across the meadow in the pure haze. Some were missing limbs, some had bleached patches of dead flesh, some were actively bleeding. Many had no eyes, and the skin on their faces was ragged and peeling and burnt. They shuttered, smiling and blissful in a lively but faded underwater dance, trailing peculiar flashing afterimages and ribbons. The foggy white light crowded in, and a low moaning organ melody echoed over the grass.
`

STAGE_6 = `<h1> Aftersleep </h1>
<hr>
You find yourself attached to the day like a dew drop dangling at the end of a spider's loose silk.
A clear, sticky, many-mouthed morning.
It's quiet. And it's warm. And slightly wet. The air is cling wrapped to your face,
all light is white and yellow.
You cannot be sure if your eyes are open or not -
images come to you, shyly, morphing quick
in a rhythm you can't comprehend but don't need to.
Amber angled shapes blur in your vision.
There should be sound here, but
you do not know what those ones are.
Everything feels so broad.
A feeling gives it away;
a mouth spongy, stale, dry only in some spots.

It is here that a ticking clock is the most lovely sound in the world.
All your senses are firing, but it is as though you perceive it all through a glassless window.
It is all real, all there, all touchable and enterable, but you are simply not on the same side yet.
You know you're looking at the world, in the same way you know you've woken up;
by mere fact.
You don’t remember what made it hard to sleep last night,
and any foresight is curiously, curiously blank.
You're not conscious that there's no future ahead;
there's simply no future.
There is not freedom in this, neither confinement;
it is pure emptiness without judgement.

The unintentional secrets of the waking mind. Hidden from even yourself in 3, 2, 1, when your memories kick in and you reboot into the continuation of who you were yesterday. But the continuation is not direct - there is a gap. Just before your consciousness resurfaces, there is a period of lawless tranquility and exploration in the mind, based on nothing but flashes of your own backdrop.
This gap fears you in a mechanical way;
nothing about it makes you wary, but you feel like it should, so you are wary.
And so you realize you are awake.
`

SLEEP_PAGES = [
    INTRO,
    STAGE_1,
    STAGE_2,
    STAGE_3,
    STAGE_4,
    STAGE_5,
    STAGE_6
]

async function injectText(text) {
    text = spaceText(text);
    text = "<div id='InnerText'>" + text + "</div><br><br><br><br><br><br><br>"
    document.getElementById("Writing").innerHTML = text;
}

function updateArrows() {
    if (CURR_PAGE > 0){
        document.getElementById("LeftArrow").style.filter = "brightness(0.8) opacity(1)";
        document.getElementById("LeftArrow").style.cursor = "pointer";
        prettify("LeftArrow");
    } else {
        document.getElementById("LeftArrow").style.filter = "brightness(0.3) opacity(0.5)";
        document.getElementById("LeftArrow").style.cursor = "default";
        unprettify("LeftArrow");
    }

    if (CURR_PAGE < SLEEP_PAGES.length-1){
        document.getElementById("RightArrow").style.filter = "brightness(0.8) opacity(1)";
        document.getElementById("RightArrow").style.cursor = "pointer";
        prettify("RightArrow");
    } else {
        document.getElementById("RightArrow").style.filter = "brightness(0.3) opacity(0.5)";
        document.getElementById("RightArrow").style.cursor = "default";
        unprettify("RightArrow");
    }

    console.log(CURR_PAGE);
}

function scrollText(isForward) {
    if (isForward && CURR_PAGE < SLEEP_PAGES.length-1) {
        CURR_PAGE += 1;
    } else if (!isForward && CURR_PAGE > 0) {
        CURR_PAGE -= 1;
    }
    updateArrows();
    injectText(SLEEP_PAGES[CURR_PAGE]);
}

injectText(INTRO);
var gachaListUR = [
    'images/eggs/goldenegg.png',
    'images/eggs/goldenegg.png',
    'images/eggs/goldenegg.png',
    'images/eggs/whaleegg.png',
];

var gachaListURDesc = [
    '[UR] Golden Egg: The fabled golden egg, which is coveted by many.',
    '[UR] Golden Egg: The fabled golden egg, which is coveted by many.',
    '[UR] Golden Egg: The fabled golden egg, which is coveted by many.',
    '[UR] Whale Egg: A majestic egg who is rich in the sea, and possibly also rich in money.',
];

var gachaListSR = [
    'images/eggs/angryegg.png',
    'images/eggs/angryegg.png',
    'images/eggs/angryegg.png',
    'images/eggs/disappointmentegg.png',
    'images/eggs/joyegg.png',
    'images/eggs/exciteegg.png',
    'images/eggs/worldegg.png',
];

var gachaListSRDesc = [
    '[SR] Angry Egg: An egg is very frustrated that it is very angry.',
    '[SR] Angry Egg: An egg is very frustrated that it is very angry.',
    '[SR] Angry Egg: An egg is very frustrated that it is very angry.',
    '[SR] Disappointment Egg: An egg which represents a feeling of disappointment.',
    '[SR] Joy Egg: A happy egg.',
    '[SR] Excitement Egg: An egg who is expecting great things to happen... soon.',
    '[SR] World Egg: Rumors say this egg is linked to our planet.',
];

var gachaListR = [
    'images/eggs/cowboyegg.png',
    'images/eggs/cowboyegg.png',
    'images/eggs/cowboyegg.png',
    'images/eggs/yellowglitteregg.png',
    'images/eggs/greenglitteregg.png',
    'images/eggs/pinkegg.png',
    'images/eggs/staregg.png',
    'images/eggs/checkeredegg.png',
    'images/eggs/chocolateegg.png',
    'images/eggs/stripedegg.png',
    'images/eggs/quailegg.png',
];

var gachaListRDesc = [
    '[R] Cowboy Egg: An egg from the wild west...',
    '[R] Cowboy Egg: An egg from the wild west...',
    '[R] Cowboy Egg: An egg from the wild west...',
    '[R] Yellow Glitter Egg: An egg who shines bright.',
    '[R] Green Glitter Egg: An egg who got a touch-me-up with the use of glitter.',
    '[R] Pink Egg: An egg who dropped into pink paint.',
    '[R] Star Egg: Popular to children and astronomists.',
    '[R] Checkered Egg: This egg\'s got too many tattoos.',
    '[R] Chocolate Egg: A sweet treat who doesn\'t have yolk inside it.',
    '[R] Striped Egg: They are actually ribbons.',
    '[R] Quail Egg: A small but exotic egg enjoyed in some meals.',
];

var gachaListC = [
    'images/eggs/greenegg.png',
    'images/eggs/crackedegg.png',
    'images/eggs/clayegg.png',
    'images/eggs/redegg.png',
    'images/eggs/blueegg.png',
    'images/eggs/purpleegg.png',
    'images/eggs/whiteegg.png',
    'images/eggs/brownegg.png',
    'images/eggs/plasticegg.png',
    'images/eggs/eggshapedrock.png',
];

var gachaListCDesc = [
    '[C] Green Egg: A sickly egg who needs to lie down for a bit.',
    '[C] Cracked Egg: This egg has been dropped, but it still holds itself.',
    '[C] Clay Egg: Clay molded into an egg.',
    '[C] Red Egg: Its not evil; Red Egg is a red egg.',
    '[C] Blue Egg: An egg that fell from the sky.',
    '[C] Purple Egg: Very goth egg.',
    '[C] White Egg: An ordinary white egg.',
    '[C] Brown Egg: An egg who is not that different from a white egg.',
    '[C] Plastic Egg: It has candy inside!',
    '[C] Egg-Shaped Rock: It\'s a rock.',
];

localStorage.setItem("DrawResult1", pullOne());
localStorage.setItem("DrawResult2", pullOne());
localStorage.setItem("DrawResult3", pullOne());
localStorage.setItem("DrawResult4", pullOne());
localStorage.setItem("DrawResult5", pullOne());
localStorage.setItem("DrawResult6", pullOne());
localStorage.setItem("DrawResult7", pullOne());
localStorage.setItem("DrawResult8", pullOne());
localStorage.setItem("DrawResult9", pullOne());
localStorage.setItem("DrawResult10", pullOne());

function pullOne() {
    var img = '<img src=\"';
    //init the arrays
    var gachaList = ['null',];
    var gachaListDesc = ['null',];
    var randomRarity = Math.floor(Math.random() * 10000);
    //.75% chance of an UR
    if (randomRarity  <= 75) {
        gachaList = gachaListUR;
        gachaListDesc = gachaListURDesc;
    //5% chance of a SR
    } else if (randomRarity  <= 575) {
        gachaList = gachaListSR;
        gachaListDesc = gachaListSRDesc;
    //30% chance of a R
    } else if (randomRarity  <= 3575) {
        gachaList = gachaListR;
        gachaListDesc = gachaListRDesc;
    //64.25% chance of a C
    } else {
        gachaList = gachaListC;
        gachaListDesc = gachaListCDesc;
    }
    var randomIndex = Math.floor(Math.random() * gachaList.length);
    img += gachaList[randomIndex];
    img += '\" alt=\"';
    img += gachaListDesc[randomIndex];
    img += '\" title=\"';
    img += gachaListDesc[randomIndex];
    img += '\" class=\"gachaResult\"/> \n';
    return img;
}
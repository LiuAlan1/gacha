var gachaList = [
    'images/eggs/angryegg.png',
    'images/eggs/cowboyegg.png',
    'images/eggs/cowboyegg.png',
    'images/eggs/whiteegg.png',
    'images/eggs/whiteegg.png',
    'images/eggs/whiteegg.png',
    'images/eggs/whiteegg.png',
    'images/eggs/pinkegg.png',
    'images/eggs/pinkegg.png',
    'images/eggs/pinkegg.png',
    'images/eggs/pinkegg.png',
    'images/eggs/greenegg.png',
    'images/eggs/greenegg.png',
    'images/eggs/greenegg.png',
    'images/eggs/greenegg.png',
    'images/eggs/greenegg.png',
    'images/eggs/crackedegg.png',
    'images/eggs/crackedegg.png',
    'images/eggs/crackedegg.png',
    'images/eggs/crackedegg.png',
    'images/eggs/crackedegg.png',
];

var gachaListDesc = [
    '[UR] Angry Egg: An egg whose power is so vast, its anger is radiating out of its shell.',
    '[SR] Cowboy Egg: An egg from the wild west...',
    '[SR] Cowboy Egg: An egg from the wild west...',
    '[R] White Egg: A ordinary white egg.',
    '[R] White Egg: A ordinary white egg.',
    '[R] White Egg: A ordinary white egg.',
    '[R] White Egg: A ordinary white egg.',
    '[R] Pink Egg: An egg who loves unicorns.',
    '[R] Pink Egg: An egg who loves unicorns.',
    '[R] Pink Egg: An egg who loves unicorns.',
    '[R] Pink Egg: An egg who loves unicorns.',
    '[C] Green Egg: A sickly egg who needs to lie down for a bit.',
    '[C] Green Egg: A sickly egg who needs to lie down for a bit.',
    '[C] Green Egg: A sickly egg who needs to lie down for a bit.',
    '[C] Green Egg: A sickly egg who needs to lie down for a bit.',
    '[C] Green Egg: A sickly egg who needs to lie down for a bit.',
    '[C] Cracked Egg: This egg has been dropped, but it still holds itself.',
    '[C] Cracked Egg: This egg has been dropped, but it still holds itself.',
    '[C] Cracked Egg: This egg has been dropped, but it still holds itself.',
    '[C] Cracked Egg: This egg has been dropped, but it still holds itself.',
    '[C] Cracked Egg: This egg has been dropped, but it still holds itself.',
];

if (localStorage.getItem('draw_counter') == null) {
	localStorage.setItem("draw_counter", 0);
}
var drawCount = 0;
drawCount = parseInt(localStorage.getItem('draw_counter'))+10;
localStorage.setItem("draw_counter", drawCount);

localStorage.setItem("DrawResultListCount", 10);
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
    var randomIndex = Math.floor(Math.random() * gachaList.length);
    img += gachaList[randomIndex];
    img += '\" alt=\"';
    img += gachaListDesc[randomIndex];
    img += '\" title=\"';
    img += gachaListDesc[randomIndex];
    img += '\" class=\"gachaResult\"/> \n';
    return img;
}
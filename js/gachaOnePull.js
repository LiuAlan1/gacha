var gachaList = [
	'images/eggs/whiteegg.png',
	'images/eggs/pinkegg.png',
	'images/eggs/greenegg.png',
	'images/eggs/greenegg.png',
	'images/eggs/greenegg.png',
];

var gachaListDesc = [
	'White Egg: A white ordinary egg.',
	'Pink Egg: An egg who loves unicorns.',
	'Green Egg: A sickly egg who needs to lie down for a bit.',
	'Green Egg: A sickly egg who needs to lie down for a bit.',
	'Green Egg: A sickly egg who needs to lie down for a bit.',
];

if (localStorage.getItem('draw_counter') == null) {
	localStorage.setItem("draw_counter", 0);
}
var drawCount = 0;
drawCount = parseInt(localStorage.getItem('draw_counter'))+1;
localStorage.setItem("draw_counter", drawCount);

localStorage.setItem("DrawResultListCount", 1);
localStorage.setItem("DrawResult1", pullOne());

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
var drawCount = 0;
drawCount = parseInt(localStorage.getItem('draw_counter'));
var drawOneCount = 0;
drawOneCount = parseInt(localStorage.getItem('draw_one_counter'));
var drawTenCount = 0;
drawTenCount = parseInt(localStorage.getItem('draw_ten_counter'));
var oneDrawMoney = 5 * drawOneCount;
var tenDrawMoney = 30 * drawTenCount;
var totalMoney = parseInt(oneDrawMoney) + parseInt(tenDrawMoney);

var n = localStorage.getItem("DrawResultListCount");
var drawArray = [
	localStorage.getItem("DrawResult1"),
	localStorage.getItem("DrawResult2"),
	localStorage.getItem("DrawResult3"),
	localStorage.getItem("DrawResult4"),
	localStorage.getItem("DrawResult5"),
	localStorage.getItem("DrawResult6"),
	localStorage.getItem("DrawResult7"),
	localStorage.getItem("DrawResult8"),
	localStorage.getItem("DrawResult9"),
	localStorage.getItem("DrawResult10"),
];

var randomFact = localStorage.getItem("randomFact");
var drawProbabilityFact = localStorage.getItem("drawProbabilityFact");

function cumulativeDraws() {
	var text = 'You have drawn a total of <span class="highlight">';
	text += drawCount;
	text += '</span> times.';
	if (drawCount >= 50){
		text += '<br><br>';
		text += 'In another game, you would have spent approximately <span class="highlight">$';
		text += totalMoney;
		text += '</span> by drawing this many times.';
	}
	if (drawCount >= 100){
		text += '<br><br> Fact: ';
		text += randomFact;
	}
	if (drawCount >= 150){
		text += '<br><br>';
		text += drawProbabilityFact;
	}
	if (drawCount >= 300){
		text += '<br><br> Click <a href="drawlist.html">here</a> for a list of possible eggs that you can draw from this gacha, <span class="highlight">plus their rates</span>.';
	} else if (drawCount >= 200) {
		text += '<br><br> Click <a href="drawlist.html">here</a> for a list of possible eggs that you can draw from this gacha.';
	}
	text += '<br>';
	return text;
}

function printDraws() {
	var count = n;
	var lbreak = 0;
	var text = '';
	while (count > 0) {
		count--;
		text += drawArray[count];
		lbreak++;
		if (lbreak == 3) {
			lbreak = 0;
			text += '<br>';
		}
	}
	return text;
}
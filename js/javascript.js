var drawCount = 0;
drawCount = parseInt(localStorage.getItem('draw_counter'));
var drawOneCount = 0;
drawOneCount = parseInt(localStorage.getItem('draw_one_counter'));
var drawTenCount = 0;
drawTenCount = parseInt(localStorage.getItem('draw_ten_counter'));

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

function cumulativeDraws() {
	var text = 'You have drawn a total of ';
	text += drawCount;
	text += ' times.';
	if (drawCount >= 50){
		text += '<br><br>';
		var oneDrawMoney = 5 * drawOneCount;
		var tenDrawMoney = 30 * drawTenCount;
		var totalMoney = parseInt(oneDrawMoney) + parseInt(tenDrawMoney);
		text += 'In another game, you would have spent approximately $';
		text += totalMoney;
		text += ' by drawing this many times.';
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
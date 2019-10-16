var drawCount = 0;
drawCount = parseInt(localStorage.getItem('draw_counter'));

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

/*

function getImageTag(n) {
	var count = parseInt(n);
    var img = '<img src=\"';
	img += gachaList[count];
	img += '\" alt=\"';
	img += gachaListDesc[count];
	img += '\" title=\"';
	img += gachaListDesc[count];
	img += '\" class=\"gachaResult\"/> \n';
	return img;
}


function printMultiple() {
	var arrayCount = parseInt(localStorage.getItem("DrawResultList");
	arrayCount++;
	var results = '';
	while (arrayCount > 0) {
		var resultCount = 'DrawResult' + parseInt(n + 1);
		parseInt(localStorage.getItem(resultCount);
		results += getImageTag(arrayCount);
		arrayCount--;
	}
	return results;
}

*/

/*

function getImageTag(int n) {
	var img = '<img src=\"';
	var arrayPos = n+1;
	var resultCount = 'DrawResult' + arrayPos;
	img += gachaResults[parseInt(localStorage.getItem(resultCount));];
	img += '\" alt=\"';
	img += gachaListDesc[parseInt(localStorage.getItem(resultCount));];
	img += '\" title=\"';
	img += gachaListDesc[parseInt(localStorage.getItem(resultCount));];
	img += '\" class=\"gachaResult\"/> \n';
	return img;
}

function printMultiple() {
	var arrayCount = parseInt(gachaResults.length);
	arrayCount++;
	var results = '';
	while (arrayCount > 0) {
		results += getImageTag(arrayCount);
		arrayCount--;
	}
	return results;
}
*/

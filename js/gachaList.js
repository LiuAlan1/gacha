var drawCount = 0;
drawCount = parseInt(localStorage.getItem('draw_counter'));

function writePercent() {
	if (drawCount >= 500) {
		var text = '<span class="URtext">0.1875%</span><br>';
		text += '<span class="URtext">0.5625%</span><br>';
		text += '<span class="SRtext">2.1428%</span><br>';
		text += '<span class="SRtext">0.0714%</span><br>';
		text += '<span class="SRtext">0.0714%</span><br>';
		text += '<span class="SRtext">0.0714%</span><br>';
		text += '<span class="SRtext">0.0714%</span><br>';
		text += '<span class="Rtext">8.1818%</span><br>';
		text += '<span class="Rtext">2.7272%</span><br>';
		text += '<span class="Rtext">2.7272%</span><br>';
		text += '<span class="Rtext">2.7272%</span><br>';
		text += '<span class="Rtext">2.7272%</span><br>';
		text += '<span class="Rtext">2.7272%</span><br>';
		text += '<span class="Rtext">2.7272%</span><br>';
		text += '<span class="Rtext">2.7272%</span><br>';
		text += '<span class="Rtext">2.7272%</span><br>';
		text += '5.8409%<br>';
		text += '5.8409%<br>';
		text += '5.8409%<br>';
		text += '5.8409%<br>';
		text += '5.8409%<br>';
		text += '5.8409%<br>';
		text += '5.8409%<br>';
		text += '5.8409%<br>';
		text += '5.8409%<br>';
		text += '5.8409%<br>';
		return text;
	}
}

function writeRoundWarning() {
	if (drawCount >= 500) {
		return '*rates are rounded to the ten thousandth.';
	}
}
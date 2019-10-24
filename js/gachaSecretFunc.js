var clickCount = 0;

function image() {
	clickCount++;
	if (clickCount == 5){
		var r = confirm("You found the secret reset button!\n\nBy resetting, all values, including cumulative draw counts, and money value will reset to 0. Is this ok??");
		if (r == true) {
			location.replace("reset.html")
		} else {
			clickCount = 0;
		}
	}
}
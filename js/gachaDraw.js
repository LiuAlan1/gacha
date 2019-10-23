var drawCount = 0;

function pickOne() {
    drawCount = parseInt(localStorage.getItem('draw_counter'))+1;
    localStorage.setItem("draw_counter", drawCount);

    var drawOneCount = 0;
    drawOneCount = parseInt(localStorage.getItem('draw_one_counter'))+1;
    localStorage.setItem("draw_one_counter", drawOneCount);

    localStorage.setItem("DrawResultListCount", 1);  
}

function pickTen() {
    drawCount = parseInt(localStorage.getItem('draw_counter'))+10;
    localStorage.setItem("draw_counter", drawCount);

    var drawTenCount = 0;
    drawTenCount = parseInt(localStorage.getItem('draw_ten_counter'))+1;
    localStorage.setItem("draw_ten_counter", drawTenCount);

    localStorage.setItem("DrawResultListCount", 10);
}
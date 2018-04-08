var breakAndSessionLength = [0,0];

window.onload = function () {
    var breakMinus = $('#break-minus')[0];
    var breakPlus = $('#break-plus')[0];
    var sessionMinus = $('#session-minus')[0];
    var sessionPlus = $('#session-plus')[0];
    var timer = $('.timer')[0];
    console.log(timer);

    breakMinus.onclick = function () {
        if (breakAndSessionLength[0] !== 0) {
            breakAndSessionLength[0] -= 1;
            $('#break').text(breakAndSessionLength[0]);
        }
    };

    breakPlus.onclick = function () {
            breakAndSessionLength[0] += 1;
            $('#break').text(breakAndSessionLength[0]);
    };

    sessionMinus.onclick = function () {
        if (breakAndSessionLength[1] !== 0) {
            breakAndSessionLength[1] -= 1;
            $('#session').text(breakAndSessionLength[1]);
            $('#time').text(breakAndSessionLength[1]);
        }
    };

    sessionPlus.onclick = function () {
        breakAndSessionLength[1] += 1;
        $('#session').text(breakAndSessionLength[1]);
        $('#time').text(breakAndSessionLength[1]);
    };

    timer.onclick = function () {
        console.log(breakAndSessionLength[1]);
        var x = setInterval();
        var minutes = breakAndSessionLength[1];
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        for (var i = 0; i < breakAndSessionLength[1]*60; i++){
            if (seconds === 0) {
             seconds = 59;
             breakAndSessionLength[1] -= 1;
            } else {
               $('#time').text(breakAndSessionLength[1] - 1 + ':' + seconds);
                seconds -= 1;
                return;
            }
        }
    }
};
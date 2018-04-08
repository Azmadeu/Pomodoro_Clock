var breakAndSessionLength = [0, 0];

window.onload = function () {
    var breakMinus = $('#break-minus')[0];
    var breakPlus = $('#break-plus')[0];
    var sessionMinus = $('#session-minus')[0];
    var sessionPlus = $('#session-plus')[0];
    var timerOn = $('.timer')[0];

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

    timerOn.onclick = function () {
        var counter = 0;
        console.log(counter);
        if (counter === 0) {
            if (breakAndSessionLength[1] !== 0) {
                counter += 1;
                timer([0, breakAndSessionLength[1] - 1, 59], function (h, m, s) {
                    $('#time').text(m + ':' + s);
                });
            }
        }
    }
};

function timer(time, call) {
    timer.lastCall = call;
    timer.lastTime = time;
    timer.timerInterval = setInterval(function () {
        call(time[0], time[1], time[2]);
        time[2]--;
        if (time[0] === 0 && time[1] === 0 && time[2] === 0) {
            timer.pause();
            call(0, 0, 0);
        }

        if (time[2] === 0) {
            time[2] = 59;
            time[1]--;
            if (time[1] === 0) {
                time[1] = 59;
                time[0]--
            }
        }
        timer.lastTime = time
    }, 1000);
}

// timer.pause = function () {
//     clearInterval(timer.timerInterval)
// };
// timer.start = function () {
//     timer(timer.lastTime, timer.lastCall);
// };



function loadWidth(myId) {
    var div = document.getElementById(myId);
    var height = div.style.height;
    div.style.width = height;
}

function showmenu(myId) {
    var x = document.getElementById(myId);
    if (x.style.display === 'none') {
        x.style.display = 'flex';
    } else {
        x.style.display = 'none';
    }
}

var time = 60; /* thời gian chơi ? s */
var i = 0;
var interval

function pause() {
    interval = clearInterval(interval);
}

function replay() {
    i = 0;
    play();
    clickOnPlay();
    score = 0;
    $('#score').text(score);
    $('#clock').text(time);
    ramdomAnswer();
    var x = document.getElementById('continue');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'block';
    }
}

function backHome() {
    i = 0;
    score = 0;
    $('#score').text(score);
    $('#clock').text(time);
    var x = document.getElementById('continue');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'block';
    }
}

function play() {
    interval = setInterval(function() {
        if (i >= time) {
            clearInterval(interval);
            i = 0;
            playAudio('audio3');
            clickOnPlay();
            ramdomAnswer();
            $('#over').text('game over score : ' + score);
            score = 0;
            showmenu('continue');
        }
        $('#clock').text(time - i);
        i++;
    }, 1000);
    $('#over').text("");
}

function clickOnPlay() {
    showmenu('nav1');
    showmenu('pause_button');
    showmenu('answer_box');
    showmenu('main_question');

}

function fillAnswer(value) {
    var apla = Math.floor(Math.random() * 50) + 5;
    beta = Math.floor(Math.random() * 6) + 1;
    if (beta == 1) {
        $('#ans1').text(value);
        $('#ans2').text(value + apla);
        $('#ans3').text(value + apla - 4);
    }
    if (beta == 2) {
        $('#ans1').text(value + apla);
        $('#ans2').text(value);
        $('#ans3').text(value + apla - 6);
    }
    if (beta == 6) {
        $('#ans1').text(value + apla);
        $('#ans2').text(value + apla - 7);
        $('#ans3').text(value);
    }
    if (beta == 3) {
        $('#ans1').text(value);
        $('#ans2').text(value + apla - 2);
        $('#ans3').text(value + apla);
    }
    if (beta == 4) {
        $('#ans1').text(value + apla - 5);
        $('#ans2').text(value);
        $('#ans3').text(value + apla);
    }
    if (beta == 5) {
        $('#ans1').text(value + apla - 3);
        $('#ans2').text(value + apla);
        $('#ans3').text(value);
    }

}

var resultOfab, score = 0;

function ramdomAnswer() {
    var valueRandom = Math.floor(Math.random() * 11) + 1;
    var k1 = 50,
        k0 = 1,
        k3 = 10,
        k2 = 1;
    var a = Math.floor(Math.random() * k1) + k0;
    var b = Math.floor(Math.random() * k1) + k0;
    var x = Math.floor(Math.random() * k3) + k2;
    var y = Math.floor(Math.random() * k3) + k2;
    var c = 2;
    if ((score % 5 == 0) && (score != 0)) {
        k1 += 10;
        k0 += 5;
    }
    if (score > 15) c = 3;
    if ((c == 3) && (score % 10 == 0)) {
        k3 += 5;
        k2 += 2;
    }
    if (valueRandom % c == 0) {
        if (a > b) {
            $('#question').text(a + '-' + b);
            resultOfab = a - b;
        } else {
            $('#question').text(b + '-' + a);
            resultOfab = b - a;
        }
        fillAnswer(resultOfab);
    }
    if (valueRandom % c == 1) {
        $('#question').text(a + '+' + b);
        resultOfab = a + b;
        fillAnswer(resultOfab);
    }
    if (valueRandom % c == 2) {
        $('#question').text(x + 'x' + y);
        resultOfab = x * y;
        fillAnswer(resultOfab);
    }
}

function checkresult(id) {
    var resultchoose = document.getElementById(id)
    if (resultchoose.textContent == resultOfab) {
        ramdomAnswer();
        playAudio('audio2');
        i -= 2;
        score++;
        $('#score').text(score);
    } else {
        playAudio('audio3');
        ramdomAnswer();
        pause();
        i = 0;
        showmenu('continue')
        $('#over').text('game over score : ' + score);
        clickOnPlay();
        score = 0;
    }
}

function playAudio(myId) {
    var au = document.getElementById(myId);
    au.play();
}
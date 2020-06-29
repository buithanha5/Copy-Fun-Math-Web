function loadWidth() {
    var div = $('#play_button');
    var height = div.height();
    div.css('width', height);
};

function showmenu(myId) {
    var x = document.getElementById(myId);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
var time = 100; /* how long the timer runs for */
var i = 0;
var interval

function pause() {
    interval = clearInterval(interval);
}

function play() {
    interval = setInterval(function() {
        if (i >= time) {
            clearInterval(interval);
            i = 0;
            clickOnPlay();
            ramdomAnswer();
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
var a, b, valueRandom, resultOfab, score = 0;

function ramdomAnswer() {
    valueRandom = Math.floor(Math.random() * 11) + 1;
    a = Math.floor(Math.random() * 100) + 1;
    b = Math.floor(Math.random() * 100) + 1;
    if (valueRandom % 3 == 0) {
        $('#main_question').text(a + 'x' + b);
        resultOfab = a * b;
    }
    if (valueRandom % 3 == 1) {
        $('#main_question').text(a + '+' + b);
        resultOfab = a + b;
    }
    if (valueRandom % 3 == 2) {
        $('#main_question').text(a + '-' + b);
        resultOfab = a - b;
    }

    $('#ans1').text(a + b);
    $('#ans2').text(a - b);
    $('#ans3').text(a * b);
}

function checkresult(id) {
    var resultchoose = document.getElementById(id)

    if (resultchoose.textContent == resultOfab) {
        ramdomAnswer();
        score++;
        $('#score').text(score);
    } else {
        ramdomAnswer();
        pause();
        i = 0;
        $('#over').text('game over score : ' + score);
        console.log('game over score : ' + score)
        clickOnPlay();
    }


}
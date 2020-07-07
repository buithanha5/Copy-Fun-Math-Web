var e = document.getElementById('volume-slider-con');
var e1 = document.getElementById('volume-slider-con1');
var eInner = document.getElementById('volume-slider');
var eInner1 = document.getElementById('volume-slider1');
var audio = document.getElementById('audio1');
var audio1 = document.getElementById('audio2');
var audio2 = document.getElementById('audio3');
var drag = false;
var drag1 = false;

e.addEventListener('mousedown', function(ev) {
    drag = true;
    updateBar(e, eInner, ev.clientX, audio);
});
e1.addEventListener('mousedown', function(ev) {
    drag1 = true;
    updateBar(e1, eInner1, ev.clientX, audio1, audio2);
});
document.addEventListener('mousemove', function(ev) {
    if (drag) {
        updateBar(e, eInner, ev.clientX, audio);
    }
    if (drag1) {
        updateBar(e1, eInner1, ev.clientX, audio1, audio2);
    }

});

document.addEventListener('mouseup', function(ev) {
    drag = false;
    drag1 = false;
});

var percentage = 100;

var updateBar = function(ee, eeInner, x, au1, au2, vol) {
    var volume = ee;
    var Vx = window.scrollX + volume.getBoundingClientRect().left;
    if (vol) {
        percentage = vol * 100;
    } else {
        var position = x - Vx;
        percentage = 100 * position / volume.clientWidth;
    }
    if (percentage > 100) {
        percentage = 100;
    }
    if (percentage < 0) {
        percentage = 0;
    }
    eeInner.style.width = percentage + '%';
    updateAudio(au1, au2)
};

function updateAudio(a, b) {
    if (a != undefined) { a.volume = percentage / 100; };
    if (b != undefined) { b.volume = percentage / 100; }
}
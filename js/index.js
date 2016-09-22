/**
 * Created by Administrator on 2016/6/10.
 */

(function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
})(640);
function fixPagesHeight() {
    $('.swiper-slide,.swiper-container').css({
        height: $(window).height(),
        width: $(window).width()
    })
}
$(window).on('resize', function () {
    fixPagesHeight();
});
fixPagesHeight();
var step = 0;
var arrow = document.querySelector(".arrow");
var mySwiper = new Swiper('.swiper-container', {
    direction: "vertical",
    loop: true,
    onInit: function (swiper) {
        swiper.myactive = 1;
    },
    onTransitionEnd: function (swiper) {
        swiper.myactive = swiper.activeIndex;
        var myId = swiper.slides[swiper.myactive].getAttribute("trueId");
        console.log(swiper.myactive);
        for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].id = i == swiper.myactive ? myId : null;
        }
    }
});
~function () {
    var audioBox = document.querySelector(".audio"),
        myAudio = audioBox.getElementsByTagName("audio")[0];
    window.setTimeout(function () {
        myAudio.play();
        myAudio.addEventListener("canplay", function () {
            audioBox.style.display = "block";
            audioBox.className += " audioMove";
        }, false);
    }, 1000);
    audioBox.addEventListener("click", function () {
        if (myAudio.paused) {
            myAudio.play();
            audioBox.className = "audio audioMove";
            return;
        }
        myAudio.pause();
        audioBox.className = "audio";
    }, false);
}();

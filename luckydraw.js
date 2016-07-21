var data=["iphone5","ipad","lenovo","huawei","xiaomi","meizu","sony"],
    timer=null;

window.onload=function () {
    var count;
    var play = document.getElementById("play"),
        stop = document.getElementById("stop");

    //mouse event
    //begin
    play.onclick = playFun;
    //stop
    stop.onclick = stopFun;

    //keyboard event
    document.onkeyup = function () {
        var event = event || window.event;
        if(event.keyCode==13){
            if(count==0){
                playFun();
                count=1;
            }else{
                stopFun();
                count=0;
            }
        }
    }
}

function playFun() {
    var title = document.getElementById("title");
    clearInterval(timer);
    timer = setInterval(function () {
        var random = Math.floor(Math.random()*data.length);
        title.innerHTML = data[random];
    },55);
    play.style.backgroundColor = "#999";
}
function stopFun() {
    clearInterval(timer);
    play.style.backgroundColor = "greenyellow";
}
var btn=document.getElementById('btn');
var myWidth=window.innerWidth;
var myHeight=window.innerHeight;
var myBg=document.querySelector('body');


document.addEventListener('resize',function(){
    myWidth=myBg.width
    myHeight=myBg.height
    console.log(myWidth)
    console.log(myHeight)
})
btn.addEventListener('click',start);
btn.addEventListener('touch',start);

var imgs=["./imgs/dogL1.gif","./imgs/dogL2.gif","./imgs/dogR1.gif","./imgs/dogR2.gif","./imgs/dogR3.gif"];
var imgsLeft=["./imgs/dogL1.gif","./imgs/dogL2.gif"];
var imgsRight=["./imgs/dogR1.gif","./imgs/dogR2.gif","./imgs/dogR3.gif"];

function start(){ //btn 클릭 시
    move();
}
function move(){ //강아지 한마리 일단 나와서 이동
    // alert(imgsLeft[0]);
    var img=document.createElement("img");
    var j= Math.floor(Math.random()*2);
    img.src=imgsLeft[j];
    console.log("first img =",j);
    img.style.width="80px";
    img.style.height="100px";
    document.body.appendChild(img);
    document.addEventListener('touchstart',touch);
    goLeft(img,-myWidth);
}
function touch(e){
    //터치 좌표 기준 강아지 이동 
    var img=document.createElement("img");
    img.style.width="80px";
    img.style.height="100px";
    document.body.appendChild(img);
    var i= Math.floor(Math.random()*5);
    img.src=imgs[i];
    
    var imgX=(e.changedTouches[0].clientX)-img.width/2;
    var imgY=-img.height/10+e.changedTouches[0].clientY;
    img.style.position="absolute";
    img.style.top=imgY+'px';   
    img.style.left=imgX+'px'; 
    
    console.log("next img =",i);
    console.log("imgX: "+parseInt(img.style.left));
    console.log("touchX: "+e.changedTouches[0].clientX);
    console.log("imgY: "+parseInt(img.style.top));
    console.log("touchY: "+e.changedTouches[0].clientY);
    // console.log(img.style.left);

    goLeft(img, -myWidth);
}

function goLeft(img,to){
    img.animate({
        marginLeft: [ to + "px"]
    }, {
        duration: 4000,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
}

function goRight(img,to){
    img.animate({
        marginLeft: [ to + "px"]
    }, {
        duration: 4000,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
}
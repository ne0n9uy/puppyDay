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
var imgs=["./imgs/dogL1.gif","./imgs/dogL2.gif",
"./imgs/dogR1.gif","./imgs/dogR2.gif","./imgs/dogR3.gif"];

function start(){
    move();
}
function move(){ //강아지 한마리 일단 나와서 이동
    // alert(imgs[0]);
    var img=document.createElement("img");
    var j= Math.floor(Math.random()*5);
    img.src=imgs[j];
    console.log("first img =",j);
    img.style.width="40%";
    img.style.height="50%";
    document.body.appendChild(img);
    img.classList.add("go");    
    console.log(img.classList.contains("go")); //true
    document.addEventListener('touchend',touch);
}
function touch(e){
    //터치 좌표 기준 강아지 이동 
    var img=document.createElement("img");
    img.style.width="40%";
    img.style.height="50%";
    document.body.appendChild(img);
    var i= Math.floor(Math.random()*5);
    img.src=imgs[i];

    img.style.position="absolute";
    img.style.top=e.myBg.offsetTop+'px';   
    img.style.left=myBg.offsetLeft+'px'; 
    console.log("second img =",i);
    console.log("left: "+parseInt(img.style.left));
    console.log("top: "+parseInt(img.style.top));
    // img.classList.add("go");
    // console.log(img.classList.contains("go")); //true
}
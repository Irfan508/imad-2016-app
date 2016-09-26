console.log('Loaded!');

//change the text in main.html
var element=document.getElementById('main-text');
element.innerHTML="Irfan is my name";

//move the image in the main.html
var img=document.getElementById("madi");
function moveright(){
    var marginleft=0;
    marinleft=marginleft+10;
    img.style.marginleft=marginleft+'px';
}
img.onclick=function(){
    //img.style.marginleft("100px");    
    var interval=setInterval(moveright,100);
};


console.log('Loaded!');

//change the text in main.html
//var element=document.getElementById('main-text');
//element.innerHTML="Irfan is my name";

/*
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
*/

var button=document.getElementById("counter");
//var counter=0;
button.onclick=function(){
    
    //make a request to the counter endpoint
    var request=new XMLHttpRequest();
    
    //create a request object
    request.onreadystatechange=function(){
        if(request.readystate===XMLHttpRequest.DONE)
        {
            if(request.status===200){
                var counter=request.response.text
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
        }
        
    };
    //make the request
    request.open('GET','http://http://irfan508.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
 /*   //render the variable in the correct span
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
*/
};

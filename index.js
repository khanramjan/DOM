function addStyle() {
    var myVar = document.querySelector(".para");
    myVar.classList.add("paraStyle");
}

function rmvStyle() {
    var myVar = document.querySelector(".para");
    myVar.classList.remove("paraStyle");
}

var heading = document.querySelector(".heading");
if (heading) {
    heading.addEventListener("click", function () {
        heading.classList.add("paraStyle");
    });
}










var soundButtons = document.querySelectorAll(".soundButton");
for (var i = 0; i < soundButtons.length; i++) {
    soundButtons[i].addEventListener("click", function () {
        var text = this.innerHTML;
        console.log(text);
        playSound(text);
        playAnim(text);

    });
}
function playSound(text) {
    switch (text) {
        case "a":
            var audio = new Audio("sound/a.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("sound/b.mp3");
            audio.play();
            break;
    }
}





function playAnim(text){
switch(text){
    case "a":
       soundButtons[0].classList.add("soundButtonAnim");
        break;

    case "b":
        soundButtons[1].classList.add("soundButtonAnim");
        break;
}
setTimeout(function(){
    if(text=="a"){
        soundButtons[0].classList.remove("soundButtonAnim");
    }
    else{
        soundButtons[1].classList.remove("soundButtonAnim");
    }
   
},1000);    
}




var key=document.querySelector("#keypress");
var count=0;
key.addEventListener("keypress",function(event){

    var keyText =event.key;
    count++;
    document.querySelector(".keycount").innerHTML="You have pressed: "+count +" keys";
});




var programs=document.querySelectorAll("input[name=program]"); 
Array.from(programs).map((program)=>{
program.addEventListener("change",handleEvent);
});
function handleEvent(e){
    if(e.target.checked){
        console.log(e.target.value);
    }
    
}
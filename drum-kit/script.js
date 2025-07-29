

for (var i =0;i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function (){
    var audio = new Audio(`sounds/tom1.mp3`);
    audio.play();
});
}

document.addEventListener('keypress',function (event){
var audio = new Audio(`sounds/tom${String(event.key)}.mp3`);
audio.play();

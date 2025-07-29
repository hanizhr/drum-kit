

for (var i =0;i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function (){
    var audio = new Audio(`sounds/tom1.mp3`);
    audio.play();
});
}


for (var i =0;i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('keypress',function (){
    var audio = new Audio(`sounds/tom2.mp3`);
    audio.play();
});
}

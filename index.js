const buttons = document.querySelectorAll(".drum");
var buttonhtml;
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        buttonhtml = this.innerHTML;
        makesound(buttonhtml);
        buttonAnimation(buttonhtml);
    });
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key){
    switch(key){
        case 'w':
            var audio = new Audio("Sound/tom-1.mp3");
            audio.play();
            break;

        case 'a':
            var audio = new Audio("Sound/tom-2.mp3");
            audio.play();
            break;

        case 's':
            var audio = new Audio("Sound/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("Sound/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("Sound/snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("Sound/crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("Sound/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log(buttonhtml);
    }
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },200);


}



for (var i = 0 ; i < document.querySelectorAll(".drum").length ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",drumKit);
}

function drumKit() {
    if (this.innerHTML == "w") {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    } else if (this.innerHTML == "a") {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    } else if (this.innerHTML == "s") {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    } else if (this.innerHTML == "d") {
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play();
    }  else if (this.innerHTML == "j") {
        var audio = new Audio("sounds/tom-2.mp3")
        audio.play();
    }else if (this.innerHTML == "k") {
        var audio = new Audio("sounds/tom-3.mp3")
        audio.play();
    }else if (this.innerHTML == "l") {
        var audio = new Audio("sounds/tom-4.mp3")
        audio.play();
    }
    buttonAnimation(this.innerHTML);
}

addEventListener("keypress", function() {
    console.log(event.key);
    switch(event.key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;   
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break; 
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break; 
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break; 
    }
    buttonAnimation(event.key);
})

function buttonAnimation(huruf) {
    var active = document.querySelector("." + huruf);
    active.classList.add("pressed");
    setTimeout(function() {
        active.classList.remove("pressed");

    },10)
}
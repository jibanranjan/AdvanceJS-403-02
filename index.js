var button = document.getElementsByClassName("drum")
for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",function(event){
        var buttontext = button[i].innerHTML;
        drumsound(buttontext)
    })
    
}
document.addEventListener('keypress',function(event){
    drumsound(event.key)
})

function drumsound(key){
    if(key=='w'){
        var wsound= new Audio("crash.mp3")
        wsound.play()
    }
    else  if(key=='a'){
        var asound= new Audio("buzzer.mp3")
        asound.play()
    }
    else  if(key=='s'){
        var ssound= new Audio("buzz.mp3")
        ssound.play()
    }
    else  if(key=='d'){
        var dsound= new Audio("crash.mp3")
        dsound.play()
    }
    else  if(key=='j'){
        var jsound= new Audio("snare.mp3")
        jsound.play()
    }
    else  if(key=='k'){
        var ksound= new Audio("pin.mp3")
        ksound.play()
    }

    else  if(key=='l'){
        var lsound= new Audio("kick-bass.mp3")
        lsound.play()
    }


}
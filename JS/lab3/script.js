const clap = document.querySelector('#s1')
const kick = document.querySelector('#s2')
const hihat = document.querySelector('#s3')
const openhat = document.querySelector('#s4')
const ride = document.querySelector('#s5')

const sounds = {
    'a' : document.querySelector('#s1'),
    's' : document.querySelector('#s2'),
    'd' : document.querySelector('#s3'),
    'f' : document.querySelector('#s4'),
    'g' : document.querySelector('#s5')
    
}

addEventListener('keypress', (ev)=>{
    //console.log('keypress')
    const key = ev.key
     switch(key){
         case 'a':
             clap.currentTime = 0
             clap.play()
             break;
         case 's':
             kick.currentTime = 0
             kick.play()
             break;
         case 'd':
             hihat.currentTime = 0
             hihat.play()
             break;
        case 'f':
             openhat.currentTime = 0
             openhat.play()
             break;
        case 'g':
             ride.currentTime = 0
             ride.play()
             break;
     }

    // const sound = sounds[key]
    // sound.currentTime = 0
    // sound.play()
})
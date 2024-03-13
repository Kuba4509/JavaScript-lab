// tworenie img w js
// const img1 =  document.createElement('img')
// lub
// const img2 = new Image()

// img1.src=""

//setTimeout(), setInterval()
// setTimeout(
//     ()=>{
//         console.log('KKKKKKKK')
//         const box = document.querySelector('#slider-inner')
//         box.style.transform = 'translate(200px,0px)'
//     },2_000
// )

// let positionX = 0
// const anim = setInterval(
//     ()=>{
//         const box = document.querySelector('#slider-inner')
//         box.style.transform = `translate(-` + positionX + `px,0px)`
//         positionX++
//     },16)

//     setTimeout(()=>{
//         clearInterval(anim)
//     }, 6_000)

let position = 0;
Sliders();

function Sliders(){
    let i;
    let slide = document.getElementsByClassName("slider-inner");
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";      
    }

    function zmiana(n){
        Sliders()
    }

    position++;
    if (position > slide.length){position = 1}

    slide[position-1].style.display = "block";
    setTimeout(Sliders, 2000);
}
    
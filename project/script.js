let timerLeft
let timerRight

let images = [
    "./img/Album1.webp",
    "./img/Album2.jpeg",
    "./img/album3.jpg",
    "./img/album4.jpg"
]

function nextPictureRight(){
    let currentPicture = images[3];
   for(let i=3; i > 0; i--){
        images[i] = images[i -1]
    }
    images[0] = currentPicture;
    document.getElementById('img2').innerHTML = `<img id="img2"src="${images[0]}" alt="">`
    document.getElementById('img3').innerHTML = `<img id="img3"src="${images[1]}" alt="">`
    document.getElementById('img4').innerHTML = `<img id="img4"src="${images[2]}" alt="">`
    clearInterval(timerRight)
    clearInterval(timerLeft)
    timerRight = setInterval(nextPictureRightAuto,6000)
}

function nextPictureRightAuto(){
    let currentPicture = images[3];
   for(let i=3; i > 0; i--){
        images[i] = images[i -1]
    }
    images[0] = currentPicture;
    document.getElementById('img2').innerHTML = `<img id="img2"src="${images[0]}" alt="">`
    document.getElementById('img3').innerHTML = `<img id="img3"src="${images[1]}" alt="">`
    document.getElementById('img4').innerHTML = `<img id="img4"src="${images[2]}" alt="">`
    
}

function nextPictureLeft(){
   let currentPicture = images[0];
   for(let i=0; i < 3; i++){
       images[i] = images[i+1]
    }
    images[3] = currentPicture;
    document.getElementById('img2').innerHTML = `<img id="img2"src="${images[0]}" alt="">`
    document.getElementById('img3').innerHTML = `<img id="img3"src="${images[1]}" alt="">`
    document.getElementById('img4').innerHTML = `<img id="img4"src="${images[2]}" alt="">`
    clearInterval(timerRight)
    clearInterval(timerLeft)
    timerLeft = setInterval(nextPictureLeftAuto,6000)
    
}
function nextPictureLeftAuto(){
    let currentPicture = images[0];
    for(let i=0; i < 3; i++){
         images[i] = images[i+1]
     }
     images[3] = currentPicture;
     document.getElementById('img2').innerHTML = `<img id="img2"src="${images[0]}" alt="">`
     document.getElementById('img3').innerHTML = `<img id="img3"src="${images[1]}" alt="">`
     document.getElementById('img4').innerHTML = `<img id="img4"src="${images[2]}" alt="">`
   
 }
 

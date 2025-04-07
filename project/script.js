let timerLeft
let timerRight

let images = [
    {
       img:  "./img/Album2.jpeg",
       location: `window.location.href='./unterseiten/graduation.html'`
    },
    {
       img: "./img/album3.jpg",
       location: `window.location.href='./unterseiten/808's_and_Heartbreaks.html'`
    },
    {
        img: "./img/album4.jpg",
        location: `window.location.href='./unterseiten/theCollegeDropout.html'`
    },
    {
        img: "./img/Album1.webp",
        location: `window.location.href='./unterseiten/myBeautifulDarkTwistedFantasy.html'`
    },
]

function nextPictureRight(){
    let currentPicture = images[3];
    console.log(images)
   for(let i=3; i > 0; i--){
        images[i] = images[i -1]
    }
    console.log(images)
    images[0] = currentPicture;
    document.getElementById('box2').innerHTML = `<img id="img2"src="${images[0].img}" alt="">`
    document.getElementById('box3').innerHTML = `<div class="slideBoxes" onclick="${images[1].location}"><img id="img3"src="${images[1].img}" alt=""></div>`
    document.getElementById('box4').innerHTML = `<img id="img4"src="${images[2].img}" alt="">`
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
    document.getElementById('box2').innerHTML = `<img id="img2"src="${images[0].img}" alt="">`
    document.getElementById('box3').innerHTML = `<div class="slideBoxes" onclick="${images[1].location}"><img id="img3"src="${images[1].img}" alt=""></div>`
    document.getElementById('box4').innerHTML = `<img id="img4"src="${images[2].img}" alt="">`
    
}

function nextPictureLeft(){
   let currentPicture = images[0];
   console.log(images)
   for(let i=0; i < 3; i++){
       images[i] = images[i+1]
       console.log(images[i+1])
    }
    console.log(images)
    images[3] = currentPicture;
    document.getElementById('box2').innerHTML = `<img id="img2"src="${images[0].img}" alt="">`
    document.getElementById('box3').innerHTML = `<div class="slideBoxes" onclick="${images[1].location}"><img id="img3"src="${images[1].img}" alt=""></div>`
    document.getElementById('box4').innerHTML = `<img id="img4"src="${images[2].img}" alt="">`
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
     document.getElementById('box2').innerHTML = `<img id="img2"src="${images[0].img}" alt="">`
     document.getElementById('box3').innerHTML = `<div class="slideBoxes" onclick="${images[1].location}"><img id="img3"src="${images[1].img}" alt=""></div>`
     document.getElementById('box4').innerHTML = `<img id="img4"src="${images[2].img}" alt="">`
   
 }
 

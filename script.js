console.log("Welcome to Spotify");
let songIndex=0;
let audioElement = new Audio('song/Heeriye.mp3');


let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));


let songs = [
    {songName : "Hiriyee Hiriyee", filePath: "song/Heeriye.mp3", coverPath: "cover/cover1.jpeg"},
    {songName : "chand hai tuuu", filePath: "song/chand.mp3", coverPath: "cover/cover2.jpeg"},
    {songName : "om deva deva ", filePath: "song/deva deva.mp3", coverPath: "cover/cover3.jpeg"},
    {songName : "jai shree ram", filePath: "song/jai shri Ram.mp3", coverPath: "cover/cover4.jpeg"},
    {songName : "oo sanam", filePath: "song/oo sanam.mp3", coverPath: "cover/cover5.jpeg"},
    {songName : "raabta rabtaa", filePath: "song/raabta.mp3", coverPath: "cover/cover6.jpeg"},
    {songName : "rasiyaa", filePath: "song/rasiya.mp3", coverPath: "cover/cover7.jpeg"},
]




audioElement.play();

// haadle play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})

//LISTEN to eventsss
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change' , ()=>{
    audioElement.currentTime=myprogressbar.value * audioElement.duration/100;
})


const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((Element) => {
    Element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='song/chand.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        audioElement.src='song/deva deva.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        audioElement.src='song/jai shri Ram.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        audioElement.src='song/oo sanam.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        audioElement.src='song/raabta.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        audioElement.src='song/rasiya.mp3';
        audioElement.currentTime=0;
        
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');



     })
    
})

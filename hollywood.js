console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('hollywoodsongs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Treat you better ", filePath: "hollywoodsongs/1.mp3", coverPath: "hollywood thumbnail/1.jpg" },
    { songName: "Gone, Gone, Gone", filePath: "hollywoodsongs/2.mp3", coverPath: "hollywood thumbnail/2.jpg" },
    { songName: "Golden Hour", filePath: "hollywoodsongs/3.mp3", coverPath: "hollywood thumbnail/3.jpg" },
    { songName: "A Thousand years", filePath: "hollywoodsongs/4.mp3", coverPath: "hollywood thumbnail/4.jpg" },
    { songName: "Tonight I'm Lovin you", filePath: "hollywoodsongs/5.mp3", coverPath: "hollywood thumbnail/5.jpg" },
    { songName: "Despacito", filePath: "hollywoodsongs/6.mp3", coverPath: "hollywood thumbnail/6.jpg" },
    { songName: "Love Story", filePath: "hollywoodsongs/7.mp3", coverPath: "hollywood thumbnail/7.jpg" },
    { songName: "Everything has changed", filePath: "hollywoodsongs/8.mp3", coverPath: "hollywood thumbnail/8.jpg" },
    { songName: "Night Changes", filePath: "hollywoodsongs/9.mp3", coverPath: "hollywood thumbnail/9.jpg" },
    { songName: "Joker", filePath: "hollywoodsongs/10.mp3", coverPath: "hollywood thumbnail/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    })
    // Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `hollywoodsongs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `hollywoodsongs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `hollywoodsongs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
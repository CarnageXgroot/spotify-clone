console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('bollywoodsongs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Tuhi Meri Shab Hai ", filePath: "bollywoodsongs/1.mp3", coverPath: "bollywood thumbnail/1.jpg" },
    { songName: "Nadaan Parinde", filePath: "bollywoodsongs/2.mp3", coverPath: "bollywood thumbnail/2.jpg" },
    { songName: "Kya Mujhe Pyar Hai", filePath: "bollywoodsongs/3.mp3", coverPath: "bollywood thumbnail/3.jpg" },
    { songName: "Kala Chashma", filePath: "bollywoodsongs/4.mp3", coverPath: "bollywood thumbnail/4.jpg" },
    { songName: "Khadke Glassy", filePath: "bollywoodsongs/5.mp3", coverPath: "bollywood thumbnail/5.jpg" },
    { songName: "Hua Hain Aaj Pehli Baar", filePath: "bollywoodsongs/6.mp3", coverPath: "bollywood thumbnail/6.jpg" },
    { songName: "Mere Sapno Ki Rani", filePath: "bollywoodsongs/7.mp3", coverPath: "bollywood thumbnail/7.jpg" },
    { songName: "Dekha Ek Khwab", filePath: "bollywoodsongs/8.mp3", coverPath: "bollywood thumbnail/8.jpg" },
    { songName: "Laare Choote", filePath: "bollywoodsongs/9.mp3", coverPath: "bollywood thumbnail/9.jpg" },
    { songName: "Abhi Na Jaao Chhod Kar", filePath: "bollywoodsongs/10.mp3", coverPath: "bollywood thumbnail/10.jpg" },
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
        audioElement.src = `bollywoodsongs/${songIndex+1}.mp3`;
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
    audioElement.src = `bollywoodsongs/${songIndex+1}.mp3`;
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
    audioElement.src = `bollywoodsongs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
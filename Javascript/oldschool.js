const songName =  document.getElementById("songName")
const songImage =  document.getElementById("songImage")
const songSlider = document.getElementById("songSlider")
const prevSong = document.getElementById("prevSong")
const nextSong = document.getElementById("nextSong")
const playPause = document.getElementById("playPause")

const songs = [
    {
        name: 'Hadarny Mawkef',
        image:"https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/CoverArts/egypt.jpg",
        audio: "https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/Beats/OldSchool/cypher.mp3"
    },
    {
        name: 'Sway',
        image:"https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/CoverArts/70.jpg",
        audio: "https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/Beats/OldSchool/sway.mp3"
    },
    {
        name: 'Baligh Hamdy',
        image:"https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/CoverArts/hamdy.jpg",
        audio: "https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/Beats/OldSchool/BalighHamdy.mp3"
    },
    {
        name: 'Daydreaming',
        image:"https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/CoverArts/ye.jpg",
        audio: "https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/Beats/OldSchool/georgettesayegh.mp3"
    },
    {
        name: "That's how it will go",
        image:"https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/CoverArts/kobr.jpg",
        audio: "https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/Beats/OldSchool/go.mp3"
    },
    {
        name: "Cody Rhodes",
        image:"https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/CoverArts/cody.jpg",
        audio: "https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/Beats/OldSchool/CodyRhodes.mp3"
    },
    {
        name: "Kevin Durant",
        image:"https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/CoverArts/durant.jpg",
        audio: "https://media.githubusercontent.com/media/zeyadhisham76/Evolution/refs/heads/main/SRC/Beats/OldSchool/Paparazzi.mp3"
    }
]
let currentSongIndex = 0
const audio = document.createElement("audio")
updateSong()

prevSong.addEventListener("click", function(){
    if(currentSongIndex == 0){
        return
    }
    currentSongIndex -=1
    updateSong()
    audio.play()
})
nextSong.addEventListener("click",function(){
    if(currentSongIndex >= songs.length - 1){
        return
    }
    currentSongIndex +=1
    updateSong()
    playPause.className= "fa-solid fa-circle-pause fa-3x"
    audio.play()
})
function updateSong(){
    const song = songs[currentSongIndex]
    songName.innerText = song.name
    songImage.src = song.image
    audio.src = song.audio
    audio.onloadedmetadata = function(){
        songSlider.value = 0
        songSlider.max = audio.duration
    }
    audio.onended = function(){
        if(currentSongIndex >= songs.length - 1){
            currentSongIndex = 0
        }
        currentSongIndex +=1
        updateSong()
        audio.play()
    }
}
playPause.addEventListener("click",function(){
    if(!audio.paused){
        audio.pause()
        playPause.className = "fa-solid fa-circle-play fa-3x"
    }
    else{audio.play()
        //adding the .className method to change the icon depending on the function
        playPause.className= "fa-solid fa-circle-pause fa-3x"
    }
})
songSlider.addEventListener("change",function(){
    audio.currentTime = songSlider.value
})
function moveSlider(){
    songSlider.value = audio.currentTime
}

document.querySelectorAll('#songsList li').forEach((li,index) =>

    li.addEventListener("click",function(){
        currentSongIndex = index
        updateSong()
        audio.play()
        playPause.className= "fa-solid fa-circle-pause fa-3x"
    })
)
setInterval(moveSlider,1000)
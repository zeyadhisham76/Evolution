const songName = document.getElementById('songName')
const songSlider = document.getElementById('songSlider')
const songImage = document.getElementById('songImage')
const playPause = document.getElementById('playPause')
const prevSong = document.getElementById('prevSong')
const nextSong = document.getElementById('nextSong')
const songDuration = document.getElementById('songDuration')
const songs = [
    {
        name: "Heart of Darkness",
        image: 'SRC/CoverArts/eye.jpg',
        audio: "SRC/Beats/Evolution/asap.mp3"
    },
    {
        name: "Trip down",
        image: "SRC/CoverArts/trip.jpg",
        audio: "SRC/Beats/Evolution/experimentalevolution.mp3"
    },
    {
        name: "Meltdown",
        image: "SRC/CoverArts/meltdown.jpg",
        audio: "SRC/Beats/Evolution/Paracetamol.mp3"
    },
    {
        name: "Forbidden Drugs",
        image: "SRC/CoverArts/orb.jpg",
        audio: "SRC/Beats/Evolution/ForbiddenDrugs.mp3"
    },
    {
        name: "Mr.Edgar",
        image: "SRC/CoverArts/edgar.jpg",
        audio: "SRC/Beats/Evolution/Edgar.mp3"
    }
]
const audio = document.createElement("audio")
let currentSongIndex = 0
updateSong()
function updateSong(){
    const song = songs[currentSongIndex]
    songImage.src = song.image
    songName.innerText = song.name
    audio.src = song.audio
    audioDuration = audio.duration.toFixed()

    audio.onloadedmetadata = function(){
        songSlider.value = 0
        songSlider.max = audio.duration
    }
    audio.onended = function(){
        if(currentSongIndex < songs.length - 1){
            currentSongIndex+=1
        }
        else{
            currentSongIndex = 0
        }
        updateSong()
        audio.play()
    }
}
nextSong.addEventListener("click",function(){
    if(currentSongIndex >= songs.length - 1){
        return
    }
    currentSongIndex+=1
    updateSong()
    audio.play()
    playPause.className = "fa-solid fa-circle-pause fa-3x"
})
prevSong.addEventListener("click",function(){
    if(currentSongIndex == 0){
        return
    }
    currentSongIndex-=1
    updateSong()
    audio.play()
})
songSlider.addEventListener("change",function(){
    audio.currentTime = songSlider.value
})
playPause.addEventListener("click",function(){
    if(!audio.paused){
        audio.pause()
        playPause.className = "fa-solid fa-circle-play fa-3x"
    }
    else{audio.play()
        playPause.className= "fa-solid fa-circle-pause fa-3x"
    }
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
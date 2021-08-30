const songs = [
     "Maroon 5.mp3",
     "Baby Driver.mp3",
     "Eminem - Godzilla.mp3",
     "HANCOCK_DINO.mp3",
     "Justin Bieber - Peaches.mp3",
     "Manike Mage.mp3",
     "Ritviz - Udd Gaye.mp3",
     "Stephen.mp3",
     "Two Neighbors - Get Gone.mp3",
]
const player = document.getElementById('player')

function createSongList(){
    const list = document.createElement('ol');
    for( let i = 0; i< songs.length; i++){
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list
}

const songList = document.getElementById('songList');
songList.appendChild(createSongList());

const links =  document.querySelectorAll('li')

for(const link of links){
    link.addEventListener('click', setSong)
}

function setSong (e) {
    document.querySelector('#disk').classList.remove("spin")
     const source = document.getElementById('source');
     source.src = 'songs/' + e.target.innerText;
     
    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`

     
     player.load();
     player.play();
     document.querySelector('#disk').classList.add("spin")
 }

 function playAudio() {
    if(player.readyState){
        player.play()
        document.querySelector('#disk').classList.add("spin")
    }
};

function pauseAudio () {
   player.pause();
   document.querySelector('#disk').classList.remove("spin")
}

const slider = document.getElementById('volumeSlider');
slider.oninput = function (e){
    const volume = e.target.value
    player.volume = volume;
}

function updateProgress() {
    
    if(player.currentTime > 0){
        const progressBar = document.getElementById('progress')
     progressBar.value = (player.currentTime / player.duration) *100 
    }
     
}
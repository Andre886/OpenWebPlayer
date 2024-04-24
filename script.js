document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audio-player");
    const albumArt = document.getElementById("album-art");
    const songTitle = document.getElementById("song-title");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const stopBtn = document.getElementById("stop-btn");
    const volumeControl = document.getElementById("volume-control"); // Aggiunto il controllo del volume
    const songList = document.getElementById("song-list");

    let currentSong = null;

    playBtn.addEventListener("click", () => {
        if (currentSong) {
            audioPlayer.play();
        }
    });

    pauseBtn.addEventListener("click", () => {
        if (currentSong) {
            audioPlayer.pause();
        }
    });

    stopBtn.addEventListener("click", () => {
        if (currentSong) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        }
    });

    songList.addEventListener("click", (event) => {
        const target = event.target;
        if (target.tagName === "LI") {
            const songPath = target.getAttribute("data-src");
            if (songPath) {
                if (currentSong) {
                    audioPlayer.pause();
                    audioPlayer.currentTime = 0;
                }
                currentSong = songPath;
                audioPlayer.src = currentSong;

                albumArt.src = "copertina.jpg"; // Aggiungi l'immagine dell'album corretta
                songTitle.textContent = target.textContent;

                audioPlayer.play();
            }
        }
    });

    // Aggiungi la gestione dell'aggiornamento della barra di avanzamento e del minutaggio
    audioPlayer.addEventListener("timeupdate", () => {
        const { currentTime, duration } = audioPlayer;
        const progress = (currentTime / duration) * 100;
        document.getElementById("progress").style.width = progress + "%";

        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60);
        const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
        document.getElementById("time").textContent = formattedTime;

        // Aggiungi la logica per passare alla successiva canzone alla fine
        if (currentTime === duration) {
            const currentSongElement = document.querySelector("[data-src='" + currentSong + "']");
            const nextSongElement = currentSongElement.nextElementSibling;
            if (nextSongElement) {
                const nextSongPath = nextSongElement.getAttribute("data-src");
                if (nextSongPath) {
                    playSong(nextSongPath, nextSongElement);
                }
            }
        }
    });

    const progressBar = document.getElementById("progress-bar");
    progressBar.addEventListener("click", (event) => {
        const barWidth = progressBar.clientWidth;
        const clickX = event.clientX - progressBar.getBoundingClientRect().left;
        const percentClicked = clickX / barWidth;
        const newTime = percentClicked * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
    });

    // Aggiungi la gestione del controllo del volume
    volumeControl.addEventListener("input", () => {
        audioPlayer.volume = volumeControl.value;
    });

    function playSong(songPath, songElement) {
        if (currentSong) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        }
        currentSong = songPath;
        audioPlayer.src = currentSong;
        albumArt.src = "copertina.jpg";
        songTitle.textContent = songElement.textContent;


        audioPlayer.addEventListener("canplay", () => {
            audioPlayer.play();
        });

        audioPlayer.play();
    }

    // Aggiungi l'evento "ended" al di fuori della funzione playSong
    audioPlayer.addEventListener("ended", () => {
        const currentSongElement = document.querySelector("[data-src='" + currentSong + "']");
        const nextSongElement = currentSongElement.nextElementSibling;
        if (nextSongElement) {
            const nextSongPath = nextSongElement.getAttribute("data-src");
            if (nextSongPath) {
                playSong(nextSongPath, nextSongElement);
            }
        }
    });
});

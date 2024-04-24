# OpenWebPlayer

## 1. Project Overview
This project is a web player that can play files offline on your machine.
Main functions:
- Play mp3 files with play/pause, track navigation and volume controls
- light and dark theme (interchangeable via the button at the top right, by default uses the system theme)

## 2. Setup
1. Download the zip from the releases and extract it into a folder
2. place your mp3s in the project folder (NO MP3 FILES PROVIDED)
3. rename the files like this: songx.mp3 (instead of x insert numbers in order from 1 onwards EX. song1.mp3, song2.mp3 etc)
4. open the index.html file in your favorite text editor (personally I use visual studio code, but windows notepad is fine too)
5. Scroll until you find the li tag and copy and paste this section for the number of tracks you want
6. edit the name of the mp3 file inside EVERY section where there is data-src
7. (Optional) edit the titles in each section where you find song-title
8. (Optional) replace "copertina.jpg" with your favorite cover (format 200*200 pixels, jpg extension)
8. save the file
9. open index.html in your favorite browser
10. Select the track you want to play from the list

## 3. Main Player
![Screenshot 2024-04-24 alle 21 58 58](https://github.com/Andre886/OpenWebPlayer/assets/122826739/90c579a8-7303-478c-8934-eab7a0b3422f)
1. progress bar (indicates the continuation of the song (with the running time below), you can press on that bar to move through the song)
2. Play button (doesn't work when a song is already playing)
3. Pause Button (pauses the current song, but leaves the current running time)
4. Stop Button (interrupts the current song and reset the song running time)
5. Volume Control Bar (controls the song playback volume)

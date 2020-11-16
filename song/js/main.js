let songs = [];
let song_artist;
let song_name;
let song_iframe;

function start(){
  song_artist = document.querySelector("h3");
  song_name = document.querySelector("h4");
  song_iframe = document.querySelector("iframe");
  new_song();
}

function new_song() {
  var song = songs[Math.floor(Math.random() * songs.length)];
  song_artist.innerText = song.artist;
  song_name.innerText = song.name;
  song_iframe.setAttribute("src", song.get_embeded());
}
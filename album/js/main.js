let albums = [];
let album_artist;
let album_name;
let album_iframe;

class Album {
  constructor(uri, name, artist) {
    this.uri = uri;
    this.name = name;
    this.artist = artist;
    albums.push(this);
  }

  get_embeded() {
    return "https://open.spotify.com/embed/album/" + this.uri;
  }
}

function start(){
  album_artist = document.querySelector("h3");
  album_name = document.querySelector("h4");
  album_iframe = document.querySelector("iframe");
  new_album();
}

function new_album() {
  var album = albums[Math.floor(Math.random() * albums.length)];
  album_artist.innerText = album.artist;
  album_name.innerText = album.name;
  album_iframe.setAttribute("src", album.get_embeded());
}
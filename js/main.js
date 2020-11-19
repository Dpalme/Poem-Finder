let poems = [];
let authors = [];
let books = [];
let albums = [];
let songs = [];
let cuentos = [];
let movies = [];
let shows = [];
let questions = [];

window.onload = function start() {
	author_tag = objectToContent({
		type: "h2",
		class: "col-12"
	});
	title_tag = objectToContent({
		type: "h4",
		class: "col-12 my-sm"
	});
	text_tag = objectToContent({
		type: "pre",
		class: "col-12 back-2 mid-grey-bg lh-1"
    });
    iframe_tag = objectToContent({
        type: "iframe",
        class: "d-none card p-n col-12",
        frameborder: "0",
        allowtransparency: "true",
        allow: "encrypted-media",
        width: window.innerWidth < window.innerHeight ? parseInt(window.innerWidth * .775) + "px" : "440px",
        height: "520px"
    });

    change_type("album");
}

function set_data(title, author, text, iframe) {
    if (author != "") { author_tag.classList.remove("d-none"); author_tag.innerText = author; } else { author_tag.classList.add("d-none") }
    if (title != "") { title_tag.classList.remove("d-none"); title_tag.innerText = title; } else { title_tag.classList.add("d-none") }
    if (text != "") { text_tag.classList.remove("d-none"); text_tag.innerText = text; } else { text_tag.classList.add("d-none") }
    if (iframe !== undefined) iframe_tag.setAttribute("src", iframe);
}

function clear_data() {
	author_tag.innerText = "";
	title_tag.innerText = "";
    text_tag.innerText = "";
    iframe_tag.setAttribute("src", "");
    iframe_tag.classList.add("d-none");
}

function new_poem() {
    var poem = poems[Math.floor(Math.random() * poems.length)];
    set_data(poem.author, poem.name, poem.text);
}

function new_book() {
    var book = books[Math.floor(Math.random() * books.length)];
    set_data(book.author, book.name, book.extract);
}

function new_cuento() {
    var cuento = cuentos[Math.floor(Math.random() * cuentos.length)];
    set_data(cuento.author, cuento.name, cuento.extract);
}

function new_album() {
    var album = albums[Math.floor(Math.random() * albums.length)];
    set_data(album.artist, album.name, "", album.get_embeded());
}

function new_song() {
    var song = songs[Math.floor(Math.random() * songs.length)];
    set_data(song.artist, song.name, "", song.get_embeded());
}

function new_movie() {
    var movie = movies[Math.floor(Math.random() * movies.length)];
    set_data("", movie.name, "", movie.uri);
}

function new_show() {
    var show = shows[Math.floor(Math.random() * shows.length)];
    set_data("", show.name, "", show.uri);
}

function new_question(){
    var question = questions[Math.floor(Math.random() * shows.length)]
    set_data("", "", question);
}

function change_type(new_type){
    clear_data();
    var button = document.getElementById('rand-button');
    button.setAttribute("onclick", "new_" + new_type + "()");
    button.innerText = new_type != "cuento" ? "New " + new_type : "new short story";

    if(new_type == "song" || new_type == "album" || new_type == "movie" || new_type == "show"){
        text_tag.classList.add("d-none");
        iframe_tag.classList.remove("d-none");
    } else {
        text_tag.classList.remove("d-none");
        iframe_tag.classList.add("d-none");
    }

    button.click();
}

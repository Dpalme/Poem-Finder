let poems = [];
let authors = [];
let books = [];
let albums = [];
let songs = [];
let cuentos = []

window.onload = function start() {
	author_tag = objectToContent({
		type: "h2",
		class: "col-12 mb-sm"
	});
	title_tag = objectToContent({
		type: "h4",
		class: "col-12 mb-sm"
	});
	text_tag = objectToContent({
		type: "pre",
		class: "col-12 mid-grey-bg"
    });
    iframe_tag = objectToContent({
        type: "iframe",
        class: "d-none card p-n ml-sm",
        style: "border-top-left-radius: 2.5%; border-top-right-radius: 2.5%;",
        frameborder: "0",
        allowtransparency: "true",
        allow: "encrypted-media",
        width: "440px",
        height: "520px"
    })

    change_type("poem");
}

function set_data(author, title, text, iframe) {
	author_tag.innerText = author;
	title_tag.innerText = title;
    text_tag.innerText = text;
    if (iframe !== undefined) iframe_tag.setAttribute("src", iframe);
}

function clear_data() {
	author_tag.innerText = "";
	title_tag.innerText = "";
	text_tag.innerText = "";
}

function new_poem() {
    var poem = poems[Math.floor(Math.random() * poems.length)];
    set_data(poem.get_author(), poem.get_title(), poem.get_text());
}

function new_book() {
    var book = books[Math.floor(Math.random() * books.length)];
    set_data(book.name, book.author, book.extract);
}

function new_cuento() {
    var cuento = cuentos[Math.floor(Math.random() * cuentos.length)];
    set_data(cuento.name, cuento.author, cuento.extract);
}

function new_album() {
    var album = albums[Math.floor(Math.random() * albums.length)];
    set_data(album.artist, album.name, "", album.get_embeded());
}

function new_song() {
    var song = songs[Math.floor(Math.random() * songs.length)];
    set_data(song.artist, song.name, "", song.get_embeded());
}

function change_type(new_type){
    clear_data();
    var button = document.getElementById('rand-button');
    button.setAttribute("onclick", "new_" + new_type + "()");
    button.innerText = "New " + new_type;
    if(new_type == "song" || new_type == "album"){
        text_tag.classList.add("d-none");
        iframe_tag.classList.remove("d-none");
    } else {
        text_tag.classList.remove("d-none");
        iframe_tag.classList.add("d-none");
    }

    button.click();
}

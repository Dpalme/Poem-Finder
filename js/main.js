let objects = [];

class RandomObject {
    constructor(type, title = "", author = "", text = "", url = "") {
        this.type = type;
        this.title = title;
        this.author = author;
        this.text = text;
        this.url = url;
        objects.push(this);
    }
}

window.onload = function start() {
    author_tag = objectToContent({
        type: "h2",
        class: "col-12"
    });
    title_tag = objectToContent({
        type: "h4",
        class: "col-12 my-sm"
    });
    iframe_tag = objectToContent({
        type: "iframe",
        class: "card p-n col-12",
        frameborder: "0",
        allowtransparency: "true",
        allow: "encrypted-media",
        width: window.innerWidth < window.innerHeight ? parseInt(window.innerWidth * .775) + "px" : "440px",
        height: "520px"
    });
    text_tag = objectToContent({
        type: "pre",
        class: "col-12 back-2 mid-grey-bg lh-1"
    });

    change_type("album");
}

function set_data(object) {
    if (object.title != "") {
        title_tag.classList.remove("d-none");
        title_tag.innerText = object.title;
    } else {
        title_tag.classList.add("d-none")
    }
    if (object.author != "") {
        author_tag.classList.remove("d-none");
        author_tag.innerText = object.author;
    } else {
        author_tag.classList.add("d-none")
    }
    if (object.text != "") {
        text_tag.classList.remove("d-none");
        text_tag.innerText = object.text;
    } else {
        text_tag.classList.add("d-none")
    }
    if (object.url != "") {
        iframe_tag.classList.remove("d-none");
        iframe_tag.setAttribute("src", object.url);
    } else {
        iframe_tag.classList.add("d-none")
    }
}

function clear_data() {
    author_tag.innerText = "";
    title_tag.innerText = "";
    text_tag.innerText = "";
    iframe_tag.setAttribute("src", "");
}

function change_object(type) {
    var object = objects[Math.floor(Math.random() * objects.length)];
    while (object.type != type) object = objects[Math.floor(Math.random() * objects.length)];
    set_data(object);
}

function change_type(new_type) {
    clear_data();
    var button = document.getElementById('rand-button');
    button.setAttribute("onclick", "change_object('" + new_type + "')");
    button.innerText = new_type != "cuento" ? "New " + new_type : "new short story";

    change_object(new_type);
}
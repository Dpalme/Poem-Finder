let poems = [];

let authors = [];

function create_option(value) {
	var main = document.createElement("option");
	main.setAttribute("value", value);
	main.innerText = value;
	return main;
}

class Poem {
	constructor(author, name, text) {
		this.author = author.name;
		this.language = author.language;
		this.name = name;
		this.text = text;
	}

	get_author() {
		return this.author;
	}

	get_title() {
		return this.name;
	}

	get_text() {
		return this.text;
	}

	get_poem() {
		return this;
	}

	get_language() {
		return this.language;
	}

	to_string() {
		return this.author + "\n\n" + this.name + "\n\n" + this.text;
	}
}

function create_poem(author, name, text) {
	var poem = new Poem(author, name, text);
	author.add_poem(poem);
	poems.push(poem.get_poem());
}

class Author {
	constructor(name, language) {
		this.poems_by = [];
		this.name = name;
		this.language = language;
		authors.push(this);
	}

	add_poem(poem) {
		this.poems_by.push(poem);
	}

	get_poem() {
		return this.poems_by[Math.floor(Math.random() * this.poems_by.length)];
	}

	is_author(author_name) {
		return author_name == this.name;
	}

	to_string() {
		return this.name + ", " + this.language;
	}
}

var language_select;
var author_select;
var author_tag;
var title_tag;
var text_tag;

function start() {
	language_select = document.getElementById("language");
	author_select = document.getElementById("authors");
	author_tag = document.createElement("h2");
	title_tag = document.createElement("h3");
	text_tag = document.createElement("p");

	authors.forEach(element => {
		author_select.appendChild(create_option(element.name));
	});
	author_tag.innerText = "Number of authors: " + authors.length;
	text_tag.innerText = "Number of poems: " + poems.length;
	document.getElementById("content").appendChild(author_tag);
	document.getElementById("content").appendChild(title_tag);
	document.getElementById("content").appendChild(text_tag);
}

function new_poem() {
	var poem = poems[Math.floor(Math.random() * poems.length)];
	if (author_select.value == "ANY") {
		if (
			language_select.value == poem.get_language() ||
			language_select.value == "ANY"
		) {
			author_tag.innerText = poem.get_author();
			title_tag.innerText = poem.get_title();
			text_tag.innerText = poem.get_text();
		} else {
			new_poem();
		}
	} else {
		authors.forEach(element => {
			if (element.is_author(author_select.value)) {
				var new_poem = element.get_poem();
				if (element.poems_by.length > 1) {
					while (poem == new_poem) {
						new_poem = element.get_poem();
					}
				}
				poem = new_poem;
			}
		});
		author_tag.innerText = poem.get_author();
		title_tag.innerText = poem.get_title();
		text_tag.innerText = poem.get_text();
	}
}

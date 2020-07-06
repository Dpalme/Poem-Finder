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
}

Poem.prototype.toString = function() {
	return '<a class="block four columns blue margin-none" onclick="get_poem(`' + this.author + '`, `' + this.name + '`)">'+ this.name + '</a>';
}

Author.prototype.toString = function() {
	poems = ""
	this.poems_by.forEach(poem => {
		poems += poem.toString() + "\n";
	});
	return '<h3 class="full column">' + this.name + '</h3>\n<h4 class="full column">language: ' + this.language + '</h4>\n<p class="full column">Poems:</p>\n<div class="full column col-margin-bottom">' + poems + '</div>';
}

function start() {
	content = document.getElementById("content");
	language_select = document.getElementById("language");
	author_select = document.getElementById("authors");
	poem_number = document.createElement("h4");
	poem_number.classList.add("half-gutter-margin-bottom");
	author_tag = document.createElement("h2");
	title_tag = document.createElement("h3");
	title_tag.classList.add("gutter-margin-vertical");
	text_tag = document.createElement("pre");
	text_tag.classList.add("poem");
	index = document.createElement("div");

	authors.forEach(element => {
		author_select.appendChild(create_option(element.name));
	});
	author_tag.innerText = "Number of authors: " + authors.length;
	poem_number.innerText = "Number of poems/songs: " + poems.length;
	content.appendChild(index);
	content.appendChild(poem_number);
	content.appendChild(author_tag);
	content.appendChild(title_tag);
	content.appendChild(text_tag);
}

function set_poem(poem){
	index.innerHTML = "";
	author_tag.innerText = poem.get_author();
	title_tag.innerText = poem.get_title();
	text_tag.innerText = poem.get_text();
}

function clear(){
	index.innerHTML = "";
	author_tag.innerText = "";
	title_tag.innerText = "";
	text_tag.innerText = "";
}

function new_poem() {
	var poem = poems[Math.floor(Math.random() * poems.length)];
	if (author_select.value == "ANY") {
		poem_number.innerText = poems.length + " total poems";
		if (
			language_select.value == poem.get_language() ||
			language_select.value == "ANY"
		) {
			set_poem(poem);
		} else {
			new_poem();
		}
	} else {
		authors.forEach(element => {
			if (element.is_author(author_select.value)) {
				poem_number.innerText = element.poems_by.length + " poems by " + element.name;
				var new_poem = element.get_poem();
				if (element.poems_by.length > 1) {
					while (poem == new_poem) {
						new_poem = element.get_poem();
					}
				}
				poem = new_poem;
			}
		});
		set_poem(poem);
	}
}

function get_poem(author, title){
	authors.forEach(element => {
		if (element.is_author(author)) {
			poem_number.innerText = element.poems_by.length + " poems by " + element.name;
			element.poems_by.forEach(poem => {
				if(poem.get_title() == title){
					set_poem(poem);
				}
			});
		}
	});
}

function poems_index(){
	clear()
	index.innerHTML = authors.toString();
}

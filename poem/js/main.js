let poems = [];

let authors = [];

function create_option(value_) {
	var main = object({
		type: "option",
		innerText: value_
	});
	main.setAttribute("value", value_);
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
		this.poems_by.push(poem)
	}

	get_poem() {
		return this.poems_by[Math.floor(Math.random() * this.poems_by.length)]
	}

	is_author(author_name) {
		return author_name == this.name
	}
}

Poem.prototype.toString = function () {
	return '<a class="small-body d-block col-6 blue m-n mb-sm lh-1 p-sm" onclick="get_poem(`' + this.author + '`, `' + this.name + '`)">' + this.name + '</a>'
}

Author.prototype.toString = function () {
	poems = ""
	this.poems_by.forEach(poem => {
		poems += poem.toString() + "\n"
	});
	return '<div><h4 class="mb-sm d-inline">' + this.name + '</h4>\n<p class="small-body mb-sm d-inline"> ' + this.language + '</p>\n<div class="col-12 mb-1">' + poems + '</div></div>';
}

function start() {
	language_select = document.getElementById("language");
	author_select = document.getElementById("authors");
	index = objectToContent({
		type: "div"
	});
	poem_number = objectToContent({
		type: "p",
		classList: "small-body col-12 mb-sm",
		innerText: "Number of poems/songs: " + poems.length
	});
	author_tag = objectToContent({
		type: "h2",
		classList: "col-12 mb-sm",
		innerText: "Number of authors: " + authors.length
	});
	
	title_tag = objectToContent({
		type: "h4",
		classList: "col-12 mt-sm"
	});
	text_tag = objectToContent({
		type: "pre",
		classList: "col-12 mt-sm mid-grey-bg"
	});

	authors.forEach(element => {
		author_select.appendChild(create_option(element.name));
	});

}

function set_poem(poem) {
	index.innerHTML = "";
	author_tag.innerText = poem.get_author();
	title_tag.innerText = poem.get_title();
	text_tag.innerText = poem.get_text();
}

function clear() {
	index.innerHTML = "";
	author_tag.innerText = "";
	title_tag.innerText = "";
	text_tag.innerText = "";
}

function new_poem() {
	var poem = poems[Math.floor(Math.random() * poems.length)];
	if (author_select.value == "ANY") {
		poem.get_author()
		poem_number.innerText = poems.length + " total poems";
		if (
			language_select.value == poem.get_language() ||
			language_select.value == "ANY"
		) {
			set_poem(poem);
			return
		} else {
			new_poem();
			return
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

function get_poem(author, title) {
	authors.forEach(element => {
		if (element.is_author(author)) {
			poem_number.innerText = element.poems_by.length + " poems by " + element.name;
			element.poems_by.forEach(poem => {
				if (poem.get_title() == title) {
					set_poem(poem);
				}
			});
		}
	});
}

function poems_index() {
	clear()
	index.innerHTML = authors.toString();
}
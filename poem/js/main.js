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
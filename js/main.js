var author_tag = document.createElement("h2");
var title_tag = document.createElement("h3");
var text_tag = document.createElement("p");
new_poem();
document.getElementById("content").appendChild(author_tag);
document.getElementById("content").appendChild(title_tag);
document.getElementById("content").appendChild(text_tag);

function new_poem(){
    var poem = poems[Math.round(Math.random() * poems.length)];
    author_tag.innerText = poem.get_author();
    title_tag.innerText = poem.get_title();
    text_tag.innerText = poem.get_text();
}

let cuentos = [];
let cuento_author;
let cuento_name;
let cuento_iframe;

class Cuento {
  constructor(name, author, extract) {
    this.name = name;
    this.author = author;
    this.extract = extract;
    cuentos.push(this);
  }

  get_embeded() {
    return "https://open.spotify.com/embed/track/" + this.uri;
  }
}

function start(){
  cuento_author = document.querySelector("h3");
  cuento_name = document.querySelector("h4");
  cuento_extract = document.querySelector("pre");
  new_cuento();
}

function new_cuento() {
  var cuento = cuentos[Math.floor(Math.random() * cuentos.length)];
  cuento_author.innerText = cuento.author;
  cuento_name.innerText = cuento.name;
  cuento_extract.innerText = cuento.extract;
}
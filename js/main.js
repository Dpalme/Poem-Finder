let poems = [];

let authors = [];

function create_option(value){
    var main = document.createElement("option");
    main.setAttribute("value", value);
    main.innerText = value;
    return main;
}

class Poem{
    constructor(author, name, text){
        this.author = author.name;
        this.language = author.language;
        this.name = name;
        this.text = text;
    }

    get_author(){
        return this.author;
    }

    get_title(){
        return this.name;
    }

    get_text(){
        return this.text;
    }

    get_poem(){
        return this;
    }

    get_language(){
        return this.language;
    }

    to_string(){
        return this.author + "\n\n" + this.name + "\n\n" + this.text;
    }
}

function create_poem(author, name, text){
    var poem = new Poem(author, name, text);
    author.add_poem(poem);
    poems.push(poem.get_poem());
}

class Author{
    poems_by = [];

    constructor(name, language){
        this.name = name;
        this.language = language;
        authors.push(this);
    }

    add_poem(poem){
        this.poems_by.push(poem);
    }

    get_poem(){
        return this.poems_by[Math.floor(Math.random()*this.poems_by.length)]
    }

    is_author(author_name){
        return author_name == this.name;
    }
    
    to_string(){
        return this.name + ", " + this.language;
    }
}


becquer = new Author("Gustavo Adolfo Bécquer", "ES");
create_poem(becquer, "XI", "Yo soy ardiente, yo soy morena,\nyo soy el símbolo de la pasión,\nde ansia de goces mi alma está llena.\n¿A mí me buscas?\nNo es a ti, no.\n\nMi frente es pálida, mis trenzas de oro:\npuedo brindarte dichas sin fin,\nyo de ternuras guardo un tesoro.\n¿A mí me llamas?\nNo, no es a ti.\n\nYo soy un sueño, un imposible,\nvano fantasma de niebla y luz;\nsoy incorpórea, soy intangible:\nno puedo amarte.\n¡Oh ven, ven tú!");
create_poem(becquer, "XX", "Sabe, si alguna vez tus labios rojos\nquema invisible atmósfera abrasada,\nque el alma que hablar puede con los ojos,\ntambién puede besar con la mirada.");
create_poem(becquer, "XXI", "¿Qué es poesía?, dices, mientras clavas\nen mi pupila tu pupila azul,\n¡Qué es poesía! ¿Y tú me lo preguntas?\nPoesía... eres tú.");
create_poem(becquer, "XXIII", "Por una mirada, un mundo;\npor una sonrisa, un cielo;\npor un beso... ¡Yo no sé\nqué te diera por un beso!");
create_poem(becquer, "XXXIX", "¿A qué me lo decís? Lo sé: es mudable,\nes altanera y vana y caprichosa;\nantes que el sentimiento de su alma,\nbrotará el agua de la estéril roca.\n\nSé que en su corazón, nido de sierpes,\nno hay una fibra que al amor responda;\nque es una estatua inanimada..., pero...\n¡es tan hermosa!");
create_poem(becquer, "XLIV", "Como en un libro abierto\nleo de tus pupilas en el fondo.\n¿A qué fingir el labio\nrisas que se desmienten con los ojos?\n\n¡Llora! No te avergüences\nde confesar que me quisiste un poco.\n¡Llora! Nadie nos mira.\nYa ves; yo soy un hombre... y también lloro.");
create_poem(becquer, "L", "Lo que el salvaje que con torpe mano\nhace de un tronco a su capricho un dios,\ny luego ante su obra se arrodilla,\neso hicimos tú y yo.\n\nDimos formas reales a un fantasma,\nde la mente ridícula invención,\ny hecho el ídolo ya, sacrificamos\nen su altar nuestro amor.");
create_poem(becquer, "XLII", "Cuando me lo contaron sentí el frío\nde una hoja de acero en las entrañas;\nme apoyé contra el muro, y un instante\nla conciencia perdí de dónde estaba.\n\nCayó sobre mi espíritu la noche,\nen ira y en piedad se anegó el alma.\n¡Y entonces comprendí por qué se llora,\ny entonces comprendí por qué se mata!\n\nPasó la nube de dolor.... Con pena\nlogré balbucear breves palabras...\n¿Quién me dio la noticia?... Un fiel amigo...\nMe hacía un gran favor... Le di las gracias.");
create_poem(becquer, "XVII", "Hoy la tierra y los cielos me sonríen,\nhoy llega al fondo de mi alma el sol,\nhoy la he visto... La he visto y me ha mirado...\n¡Hoy creo en Dios!");
create_poem(becquer, "XLIX", "Alguna vez la encuentro por el mundo,\ny pasa junto a mí;\ny pasa sonriéndose, y yo digo:\n¿Cómo puede reír?\n\nLuego asoma a mi labio otra sonrisa,\nmáscara del dolor,\ny entonces pienso: ¿Acaso ella se ríe,\ncomo me río yo?");
create_poem(becquer, "LI", "De lo poco de vida que me resta\ndiera con gusto los mejores años,\npor saber lo que a otros\nde mí has hablado.\n\nY esta vida mortal, y de la eterna\nlo que me toque, si me toca algo,\npor saber lo que a solas\nde mí has pensado.");
create_poem(becquer, "LVIII", "¿Quieres que de ese néctar delicioso\nno te amargue la hez?\nPues aspírale, acércale a tus labios\ny déjale después.\n\n¿Quieres que conservemos una dulce\nmemoria de este amor?\nPues amémonos hoy mucho, y mañana\ndigámonos: ¡Adiós!");
create_poem(becquer, "XXXIV", "Cruza callada, y son sus movimientos\nsilenciosa armonía:\nsuenan sus pasos, y al sonar recuerdan\ndel himno alado la cadencia rítmica.\n\nLos ojos entreabre, aquellos ojos\ntan claros como el día;\ny la tierra y el cielo, cuanto abarcan,\narden con nueva luz en sus pupilas.\n\nRíe, y su carcajada tiene notas\ndel agua fugitiva;\nllora, y es cada lágrima un poema\nde ternura infinita.\n\nElla tiene la luz, tiene el perfume,\nel color y la línea,\nla forma engendradora de deseos,\nla expresión, fuente eterna de poesía.\n\n¿Qué es estúpida? ¡Bah! Mientras callando\nguarde oscuro el enigma,\nsiempre valdrá lo que yo creo que calla\nmás que lo que cualquiera otra me diga");
create_poem(becquer, "XXIX", "Sobre la falda tenía\nel libro abierto;\nen mi mejilla tocaban\nsus rizos negros;\nno veíamos letras\nninguno creo;\nmas guardábamos ambos\nhondo silencio.\n¿Cuánto duró? Ni aun entonces\npude saberlo.\nSólo sé que no se oía\nmás que el aliento,\nque apresurado escapaba\ndel labio seco.\nSólo sé que nos volvimos\nlos dos a un tiempo,\ny nuestros ojos se hallaron\n¡y sonó un beso!\n\n*\n\nCreación de Dante era el libro;\nera su Infierno.\nCuando a él bajamos los ojos,\nyo dije trémulo:\n¿Comprendes ya que un poema\ncabe en un verso?\nY ella respondió encendida:\n¡Ya lo comprendo!");
create_poem(becquer, "XXVIII", "Cuando entre la sombra oscura,\nperdida una voz murmura\nturbando su triste calma,\nsi en el fondo de mi alma\nla oigo dulce resonar,\ndime: ¿es que el viento en sus giros\nse queja, o que tus suspiros\nme hablan de amor al pasar?\n\nCuando el sol en mi ventana\nrojo brilla a la mañana,\ny mi amor tu sombra evoca,\nsi en mi boca de otra boca\nsentir creo la impresión,\ndime: ¿es que ciego deliro,\no que un beso en un suspiro\nme envía tu corazón?\nY en el luminoso día\ny en la alta noche sombría,\nsi en todo cuanto rodea\nal alma que te desea,\nte creo sentir y ver,\ndime: ¿es que toco y respiro\nsoñando, o que en un suspiro\nme das tu aliento a beber?");

sorju = new Author("Sor Juana Inés de la Cruz", "ES");
create_poem(sorju, "Verde embeleso de la vida humana", "Verde embeleso de la vida humana,\nloca esperanza, frenesí dorado,\nsueño de los despiertos intrincado,\ncomo de sueños, de tesoros vana;\n\nalma del mundo, senectud lozana,\ndecrépito verdor imaginado,\nel hoy de los dichosos esperado\ny de los desdichados el mañana:\n\nsigan tu sombra en busca de tu día\nlos que, con verdes vidrios por anteojos,\ntodo lo ven pintado a su deseo:\n\nque yo, más cuerda en la fortuna mía,\ntengo en entrambas manos ambos ojos\ny solamente lo que toco veo.");
create_poem(sorju, "Continúa el mismo asunto", "Feliciano me adora y le aborrezco;\nLisardo me aborrece y yo le adoro;\npor quien no me apetece ingrato, lloro,\ny al que me llora tierno, no apetezco:\n\na quien más me desdora, el alma ofrezco;\na quien me ofrece víctimas, desdoro;\ndesprecio al que enriquece mi decoro\ny al que le hace desprecios enriquezco;\n\nsi con mi ofensa al uno reconvengo,\nme reconviene el otro a mí ofendido\ny al padecer de todos modos vengo;\n\npues ambos atormentan mi sentido;\naquéste con pedir lo que no tengo\ny aquél con no tener lo que le pido.");
create_poem(sorju, "Contiene una fantasía contenta con amor decente", "Deténte, sombra de mi bien esquivo,\nimagen del hechizo que más quiero,\nbella ilusión por quien alegre muero,\ndulce ficción por quien penosa vivo.\n\nSi al imán de tus gracias atractivo\nsirve mi pecho de obediente acero,\n¿para qué me enamoras lisonjero,\nsi has de burlarme luego fugitivo?\n\nMas blasonar no puedes satisfecho\nde que triunfa de mí tu tiranía;\nque aunque dejas burlado el lazo estrecho\n\nque tu forma fantástica ceñía,\npoco importa burlar brazos y pecho\nsi te labra prisión mi fantasía.");
create_poem(sorju, "Diuturna enfermedad de la esperanza", "Diuturna enfermedad de la esperanza\nque así entretienes mis cansados años\ny en el fiel de los bienes y los daños\ntienes en equilibrio la balanza;\n\nque siempre suspendida en la tardanza\nde inclinarse, no dejan tus engaños\nque lleguen a excederse en los tamaños\nla desesperación o la confianza:\n\n¿quién te ha quitado el nombre de homicida\npues lo eres más severa, si se advierte\nque suspendes el alma entretenida\n\ny entre la infausta o la felice suerte\nno lo haces tú por conservar la vida\nsino por dar más dilatada muerte.");
create_poem(sorju, "Amor empieza por desasosiego", "Amor empieza por desasosiego,\nsolicitud, ardores y desvelos;\ncrece con riesgos, lances y recelos;\nsusténtase de llantos y de ruego.\n\nDoctrínanle tibiezas y despego,\nconserva el ser entre engañosos velos,\nhasta que con agravios o con celos\napaga con sus lágrimas su fuego.\n\nSu principio, su medio y fin es éste:\n¿pues por qué, Alcino, sientes el desvío\nde Celia, que otro tiempo bien te quiso?\n\n¿Qué razón hay de que dolor te cueste?\nPues no te engañó amor, Alcino mío,\nsino que llegó el término preciso.");
create_poem(sorju, "¿En perseguirme, mundo, qué interesas?", "¿En perseguirme, mundo, qué interesas?\n¿En qué te ofendo, cuando sólo intento\nponer bellezas en mi entendimiento\ny no mi entendimiento en las bellezas?\n\nYo no estimo tesoros ni riquezas,\ny así, siempre me causa más contento\nponer riquezas en mi entendimiento\nque no mi entendimiento en las riquezas.\n\nYo no estimo hermosura que vencida\nes despojo civil de las edades\nni riqueza me agrada fementida,\n\nteniendo por mejor en mis verdades\nconsumir vanidades de la vida\nque consumir la vida en vanidades.");

benedetti = new Author("Mario Benedetti", "ES");
create_poem(benedetti, "Asunción de ti", "1\n\nQuién hubiera creído que se hallaba\nsola en el aire, oculta,\ntu mirada.\nQuién hubiera creído esa terrible\nocasión de nacer puesta al alcance\nde mi suerte y mis ojos,\ny que tú y yo iríamos, despojados\nde todo bien, de todo mal, de todo,\na aherrojarnos en el mismo silencio,\na inclinarnos sobre la misma fuente\npara vernos y vernos\nmutuamente espiados en el fondo,\ntemblando desde el agua,\ndescubriendo, pretendiendo alcanzar\nquién eras tú detrás de esa cortina,\nquién era yo detrás de mí.\nY todavía no hemos visto nada.\nEspero que alguien venga, inexorable,\nsiempre temo y espero,\ny acabe por nombrarnos en un signo,\npor situarnos en alguna estación\npor dejarnos allí, como dos gritos\nde asombro.\nPero nunca será. Tú no eres ésa,\nyo no soy ése, ésos, los que fuimos\nantes de ser nosotros.\nEras sí pero ahora\nsuenas un poco a mí.\nEra sí pero ahora\nvengo un poco a ti.\nNo demasiado, solamente un toque,\nacaso un leve rasgo familiar,\npero que fuerce a todos a abarcarnos\na ti y a mí cuando nos piensen solos.\n\n\n2\n\nHemos llegado al crepúsculo neutro\ndonde el día y la noche se funden y se igualan.\nNadie podrá olvidar este descanso.\nPasa sobre mis párpados el cielo fácil\na dejarme los ojos vacíos de ciudad.\nNo pienses ahora en el tiempo de agujas,\nen el tiempo de pobres desesperaciones.\nAhora sólo existe el anhelo desnudo,\nel sol que se desprende de sus nubes de llanto,\ntu rostro que se interna noche adentro\nhasta sólo ser voz y rumor de sonrisa.\n\n3\n\nPuedes querer el alba\ncuando ames.\nPuedes\nvenir a reclamarte como eras.\nHe conservado intacto tu paisaje.\nLo dejaré en tus manos\ncuando éstas lleguen, como siempre,\nanunciándote.\nPuedes\nvenir a reclamarte como eras.\nAunque ya no seas tú.\nAunque mi voz te espere\nsola en su azar\nquemando\ny tu dueño sea eso y mucho más.\nPuedes amar el alba\ncuando quieras.\nMi soledad ha aprendido a ostentarte.\nEsta noche, otra noche\ntú estarás\ny volverá a gemir el tiempo giratorio\ny los labios dirán\nesta paz ahora esta paz ahora.\nAhora puedes venir a reclamarte,\npenetrar en tus sábanas de alegre angustia,\nreconocer tu tibio corazón sin excusas,\nlos cuadros persuadidos,\nsaberte aquí.\nHabrá para vivir cualquier huida\ny el momento de la espuma y el sol\nque aquí permanecieron.\nHabrá para aprender otra piedad\ny el momento del sueño y el amor\nque aquí permanecieron.\nEsta noche, otra noche\ntú estarás,\ntibia estarás al alcance de mis ojos,\nlejos ya de la ausencia que no nos pertenece.\nHe conservado intacto tu paisaje\npero no sé hasta dónde está intacto sin ti,\nsin que tú le prometas horizontes de niebla,\nsin que tú le reclames su ventana de arena.\nPuedes querer el alba cuando ames.\nDebes venir a reclamarte como eras.\nAunque ya no seas tú,\naunque contigo traigas\ndolor y otros milagros.\nAunque seas otro rostro\nde tu cielo hacia mí.");
create_poem(benedetti, "Te quiero", "Tus manos son mi caricia \nmis acordes cotidianos \nte quiero porque tus manos \ntrabajan por la justicia \n\nsi te quiero es porque sos \nmi amor mi cómplice y todo \ny en la calle codo a codo \nsomos mucho más que dos \n\ntus ojos son mi conjuro \ncontra la mala jornada \nte quiero por tu mirada \nque mira y siembra futuro \n\ntu boca que es tuya y mía \ntu boca no se equivoca \nte quiero porque tu boca \nsabe gritar rebeldía \n\nsi te quiero es porque sos \nmi amor mi cómplice y todo \ny en la calle codo a codo \nsomos mucho más que dos \n\ny por tu rostro sincero \ny tu paso vagabundo \ny tu llanto por el mundo \nporque sos pueblo te quiero \n\ny porque amor no es aureola \nni cándida moraleja \ny porque somos pareja \nque sabe que no está sola \n\nte quiero en mi paraíso \nes decir que en mi país \nla gente viva feliz \naunque no tenga permiso \n\nsi te quiero es porque sos \nmi amor mi cómplice y todo \ny en la calle codo a codo \nsomos mucho más que dos.");

machado = new Author("Antonio Machado", "ES");
create_poem(machado, "Tus ojos me recuerdan", "Tus ojos me recuerdan\nlas noches de verano,\nnegra noche sin luna,\norilla al mar salado,\ny un chispear de estrellas\nde un cielo negro y bajo.\nTus ojos me recuerdan\nlas noches de verano.\nY tu morena cara,\nlos trigos requemados\nde un suspirar de fuego\nde los maduros campos.\n\nTus ojos me recuerdan\nlas noches de verano.\n\nDe tu morena cara,\nde tu soñar gitano,\nde tu mirar de sombra\nquiero llenar mi vaso.\nMe embriagaré una noche\nde un cielo negro y bajo,\npara cantar contigo,\norilla al mar salado,\nuna canción que deje\ncenizas en los labios...\nDe tu mirar de sombra\nquiero llenar mi vaso.\n\nTus ojos me recuerdan\nlas noches de verano.");
create_poem(machado, "Dice la esperanza: un día", "Dice la esperanza: un día\nla verás, si bien esperas.\nDice la desesperanza:\nsólo tu amargura es ella.\nLate, corazón... No todo\nse lo ha tragado la tierra.");

ashauri = new Author("Ashauri", "ES");
create_poem(ashauri, "Pinche Loca - GODSPEED", "pinche loca\nme das un chingo de miedo\nme sacas papalotes del pecho\nqué será\nde todos los mensajes de amor\nque mandé antes de ver tu rostro enfermo\nlleno de ideas\nfuturos infiernos\nqué será\nde mis siguientes novias\ncuando entiendan que nada puede superar\ncómo me montas cuando cogemos\nquiero morir escuchando\nlo que te cuentan\nlas voces en tu cabeza\nya no me interesa\nel mundo en el que crecí\nquiero vivir\nen tus ideas pendejas\ny escuchar cómo no entiendes\nque nos estamos enamorando\nmientras cuentas anécdotas que no sucedieron\nmientras interrumpes nuestros besos\npara reclamarle a gente que no existe\nme das un chingo de miedo\nme sacas papalotes del pecho\nquiero que hoy me enloquezcas\nhasta que sólo pueda regresar\na donde estás\npara romper la ventana\ntaparte la boca\nllevarte por una nieve\ny gritarle al nevero\nella es\nla pinche loca de mi vida\ny no la entiendo\nsólo quiero verla sonriendo\nhoy me voy a casar contigo\naunque corra el peligro\nde que me asesines con tus besos\nque hacen olvidar el tiempo\nhoy me voy a casar contigo\naunque la tendencia mundial\nsea morir sin acompañante\nhoy me voy a casar contigo\naunque tenga que amarrarte\npara que no te hagas más daño\naunque me escupas\nlas pastillas llenas de palabras amorosas\nque te doy cuando no te calmas\nme cuesta decirlo\npero quiero dejar de entender el universo\ncontigo\nquiero cambiar las reglas de la realidad\ncontigo\nquiero caminar durante el otoño en la ciudad\ny gritar\nque una pinche loca me persigue\nque es lo mejor que me pudo pasar\nme das un chingo de miedo\nme sacas papalotes del pecho\nya no visitaré a mi familia\nya no le contestaré a mis amigos\nme iré contigo a un cuarto\npara hablar con las paredes\npara pelear por cosas que no pasaron\npara ver cómo se funden los focos\npara besarnos y entender que los locos\nsólo nos podemos amar entre nosotros");

bukowski = new Author("Charles Bukowski", "EN");
create_poem(bukowski, "The Japanese Wife", "O lord, he said, Japanese women,\nreal women, they have not forgotten,\nbowing and smiling\nclosing the wounds men have made;\nbut American women will kill you like they\ntear a lampshade,\nAmerican women care less than a dime,\nthey’ve gotten derailed,\nthey’re too nervous to make good:\nalways scowling, belly-aching,\ndisillusioned, overwrought;\nbut oh lord, say, the Japanese women:\nthere was this one,\nI came home and the door was locked\nand when I broke in she broke out the bread knife\nand chased me under the bed\nand her sister came\nand they kept me under that bed for two days,\nand when I came out, at last,\nshe didn’t mention attorneys,\njust said, you will never wrong me again,\nand I didn’t; but she died on me,\nand dying, said, you can wrong me now,\nand I did,\nbut you know, I felt worse then\nthan when she was living;\nthere was no voice, no knife,\nnothing but little Japanese prints on the wall,\nall those tiny people sitting by red rivers\nwith flying green birds,\nand I took them down and put them face down\nin a drawer with my shirts,\nand it was the first time I realized\nthat she was dead, even though I buried her;\nand someday I’ll take them all out again,\nall the tan-faced little people\nsitting happily by their bridges and huts\nand mountains—\nbut not right now,\nnot just yet.");
create_poem(bukowski, "A Not So Good Night In The San Pedro Of The World", "it's unlikely that a decent poem is in me\ntonight\nand I understand that this is strictly my\nproblem\nand of no interest to you\nthat I sit here listening to a man playing\na piano on the radio\nand it's bad piano, both the playing and\nthe composition\nand again, this is of no interest to you\nas one of my cats,\na beautiful white with strange markings,\nsleeps in the bathroom.\n\n\nI have no ideas of what would be of interest to you\nbut I doubt that you would be of\ninterest to me, so don't get\nsuperior.\nin fact, come to think of it, you can\nkiss my ass.\n\nI continue to listen to the piano\nthis will not be a memorable night in my\nlife or yours.\n\nlet us celebrate the stupidity of our\nendurance.");
create_poem(bukowski, "i wanted to overthrow the government but all i brought down was somebody's wife", "30 dogs, 20 men on 20 horses and one fox\nand look here, they write,\nyou are a dupe for the state, the church,\nyou are in the ego-dream,\nread your history, study the monetary system,\nnote that the racial war is 23,000 years old.\n\nwell, I remember 20 years ago, sitting with an old Jewish tailor,\nhis nose in the lamplight like a cannon sighted on the enemy; and\nthere was an Italian pharmacist who lived in an expensive apartment\nin the best part of town; we plotted to overthrow\na tottering dynasty, the tailor sewing buttons on a vest,\nthe Italian poking his cigar in my eye, lighting me up,\na tottering dynasty myself, always drunk as possible,\nwell-read, starving, depressed, but actually\na good young piece of ass would have solved all my rancor,\nbut I didn’t know this; I listened to my Italian and my Jew\nand I went out down dark alleys smoking borrowed cigarettes\nand watching the backs of houses come down in flames,\nbut somewhere we missed: we were not men enough,\n         large or small enough,\nor we only wanted to talk or we were bored, so the anarchy\n         fell through,\nand the Jew died and the Italian grew angry because I stayed\n         with his\nwife when he went down to the pharmacy; he did not care to have\nhis personal government overthrown, and she overthrew easy, and\nI had some guilt: the children were asleep in the other bedroom\nbut later I won $200 in a crap game and took a bus to New Orleans\nand I stood on the corner listening to the music coming from bars\nand then I went inside to the bars,\nand I sat there thinking about the dead Jew,\nhow all he did was sew on buttons and talk,\nand how he gave way although he was stronger than any of us\nhe gave way because his bladder would not go on,\nand maybe that saved Wall Street and Manhattan\nand the Church and Central Park West and Rome and the\nLeft Bank, but the pharmacist’s wife, she was nice,\nshe was tired of bombs under the pillow and hissing the Pope,\nand she had a very nice figure, very good legs,\nbut I guess she felt as I: that the weakness was not Government\nbut Man, one at a time, that men were never as strong as\n         their ideas\nand that ideas were governments turned into men;\nand so it began on a couch with a spilled martini\nand it ended in the bedroom: desire, revolution,\nnonsense ended, and the shades rattled in the wind,\nrattled like sabers, cracked like cannon,\nand 30 dogs, 20 men on 20 horses chased one fox\nacross the fields under the sun,\nand I got out of bed and yawned and scratched my belly\nand knew that soon       very soon     I would have to get\nvery drunk      again.")


var language_select = document.getElementById("language");
var author_select = document.getElementById("authors");
var author_tag = document.createElement("h2");
var title_tag = document.createElement("h3");
var text_tag = document.createElement("p");

authors.forEach(element => {author_select.appendChild(create_option(element.name))})
author_tag.innerText = "Number of authors: " + authors.length;
text_tag.innerText = "Number of poems: " + poems.length;
document.getElementById("content").appendChild(author_tag);
document.getElementById("content").appendChild(title_tag);
document.getElementById("content").appendChild(text_tag);

function new_poem(){
    var poem = poems[Math.floor(Math.random() * poems.length)];
    if(author_select.value == "ANY"){
        if(language_select.value == poem.get_language() || language_select.value == "ANY") {
            author_tag.innerText = poem.get_author();
            title_tag.innerText = poem.get_title();
            text_tag.innerText = poem.get_text();
        }
        else {
            new_poem();
        }
    }
    else{
        authors.forEach(element => {
            if(element.is_author(author_select.value)){
                poem = element.get_poem();
                break;
            }
        });
        author_tag.innerText = poem.get_author();
        title_tag.innerText = poem.get_title();
        text_tag.innerText = poem.get_text();
    }
}

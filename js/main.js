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

//Authors
machado = new Author("Antonio Machado", "ES");
ashauri = new Author("Ashauri", "ES");
blue = new Author("Blue Scholars", "EN");
bukowski = new Author("Charles Bukowski", "EN");
becquer = new Author("Gustavo Adolfo Bécquer", "ES");
kai = new Author("Kai Straw", "EN");
kendrick = new Author("Kendrick Lamar", "EN");
benedetti = new Author("Mario Benedetti", "ES");
mac = new Author("Mac Miller", "EN");
sorju = new Author("Sor Juana Inés de la Cruz", "ES");
tino = new Author("Tino el Pingüino", "ES");

create_poem(
	becquer,
	"XI",
	"Yo soy ardiente, yo soy morena,\nyo soy el símbolo de la pasión,\nde ansia de goces mi alma está llena.\n¿A mí me buscas?\nNo es a ti, no.\n\nMi frente es pálida, mis trenzas de oro:\npuedo brindarte dichas sin fin,\nyo de ternuras guardo un tesoro.\n¿A mí me llamas?\nNo, no es a ti.\n\nYo soy un sueño, un imposible,\nvano fantasma de niebla y luz;\nsoy incorpórea, soy intangible:\nno puedo amarte.\n¡Oh ven, ven tú!"
);
create_poem(
	becquer,
	"XX",
	"Sabe, si alguna vez tus labios rojos\nquema invisible atmósfera abrasada,\nque el alma que hablar puede con los ojos,\ntambién puede besar con la mirada."
);
create_poem(
	becquer,
	"XXI",
	"¿Qué es poesía?, dices, mientras clavas\nen mi pupila tu pupila azul,\n¡Qué es poesía! ¿Y tú me lo preguntas?\nPoesía... eres tú."
);
create_poem(
	becquer,
	"XXIII",
	"Por una mirada, un mundo;\npor una sonrisa, un cielo;\npor un beso... ¡Yo no sé\nqué te diera por un beso!"
);
create_poem(
	becquer,
	"XXXIX",
	"¿A qué me lo decís? Lo sé: es mudable,\nes altanera y vana y caprichosa;\nantes que el sentimiento de su alma,\nbrotará el agua de la estéril roca.\n\nSé que en su corazón, nido de sierpes,\nno hay una fibra que al amor responda;\nque es una estatua inanimada..., pero...\n¡es tan hermosa!"
);
create_poem(
	becquer,
	"XLIV",
	"Como en un libro abierto\nleo de tus pupilas en el fondo.\n¿A qué fingir el labio\nrisas que se desmienten con los ojos?\n\n¡Llora! No te avergüences\nde confesar que me quisiste un poco.\n¡Llora! Nadie nos mira.\nYa ves; yo soy un hombre... y también lloro."
);
create_poem(
	becquer,
	"L",
	"Lo que el salvaje que con torpe mano\nhace de un tronco a su capricho un dios,\ny luego ante su obra se arrodilla,\neso hicimos tú y yo.\n\nDimos formas reales a un fantasma,\nde la mente ridícula invención,\ny hecho el ídolo ya, sacrificamos\nen su altar nuestro amor."
);
create_poem(
	becquer,
	"XLII",
	"Cuando me lo contaron sentí el frío\nde una hoja de acero en las entrañas;\nme apoyé contra el muro, y un instante\nla conciencia perdí de dónde estaba.\n\nCayó sobre mi espíritu la noche,\nen ira y en piedad se anegó el alma.\n¡Y entonces comprendí por qué se llora,\ny entonces comprendí por qué se mata!\n\nPasó la nube de dolor.... Con pena\nlogré balbucear breves palabras...\n¿Quién me dio la noticia?... Un fiel amigo...\nMe hacía un gran favor... Le di las gracias."
);
create_poem(
	becquer,
	"XVII",
	"Hoy la tierra y los cielos me sonríen,\nhoy llega al fondo de mi alma el sol,\nhoy la he visto... La he visto y me ha mirado...\n¡Hoy creo en Dios!"
);
create_poem(
	becquer,
	"XLIX",
	"Alguna vez la encuentro por el mundo,\ny pasa junto a mí;\ny pasa sonriéndose, y yo digo:\n¿Cómo puede reír?\n\nLuego asoma a mi labio otra sonrisa,\nmáscara del dolor,\ny entonces pienso: ¿Acaso ella se ríe,\ncomo me río yo?"
);
create_poem(
	becquer,
	"LI",
	"De lo poco de vida que me resta\ndiera con gusto los mejores años,\npor saber lo que a otros\nde mí has hablado.\n\nY esta vida mortal, y de la eterna\nlo que me toque, si me toca algo,\npor saber lo que a solas\nde mí has pensado."
);
create_poem(
	becquer,
	"LVIII",
	"¿Quieres que de ese néctar delicioso\nno te amargue la hez?\nPues aspírale, acércale a tus labios\ny déjale después.\n\n¿Quieres que conservemos una dulce\nmemoria de este amor?\nPues amémonos hoy mucho, y mañana\ndigámonos: ¡Adiós!"
);
create_poem(
	becquer,
	"XXXIV",
	"Cruza callada, y son sus movimientos\nsilenciosa armonía:\nsuenan sus pasos, y al sonar recuerdan\ndel himno alado la cadencia rítmica.\n\nLos ojos entreabre, aquellos ojos\ntan claros como el día;\ny la tierra y el cielo, cuanto abarcan,\narden con nueva luz en sus pupilas.\n\nRíe, y su carcajada tiene notas\ndel agua fugitiva;\nllora, y es cada lágrima un poema\nde ternura infinita.\n\nElla tiene la luz, tiene el perfume,\nel color y la línea,\nla forma engendradora de deseos,\nla expresión, fuente eterna de poesía.\n\n¿Qué es estúpida? ¡Bah! Mientras callando\nguarde oscuro el enigma,\nsiempre valdrá lo que yo creo que calla\nmás que lo que cualquiera otra me diga"
);
create_poem(
	becquer,
	"XXIX",
	"Sobre la falda tenía\nel libro abierto;\nen mi mejilla tocaban\nsus rizos negros;\nno veíamos letras\nninguno creo;\nmas guardábamos ambos\nhondo silencio.\n¿Cuánto duró? Ni aun entonces\npude saberlo.\nSólo sé que no se oía\nmás que el aliento,\nque apresurado escapaba\ndel labio seco.\nSólo sé que nos volvimos\nlos dos a un tiempo,\ny nuestros ojos se hallaron\n¡y sonó un beso!\n\n*\n\nCreación de Dante era el libro;\nera su Infierno.\nCuando a él bajamos los ojos,\nyo dije trémulo:\n¿Comprendes ya que un poema\ncabe en un verso?\nY ella respondió encendida:\n¡Ya lo comprendo!"
);
create_poem(
	becquer,
	"XXVIII",
	"Cuando entre la sombra oscura,\nperdida una voz murmura\nturbando su triste calma,\nsi en el fondo de mi alma\nla oigo dulce resonar,\ndime: ¿es que el viento en sus giros\nse queja, o que tus suspiros\nme hablan de amor al pasar?\n\nCuando el sol en mi ventana\nrojo brilla a la mañana,\ny mi amor tu sombra evoca,\nsi en mi boca de otra boca\nsentir creo la impresión,\ndime: ¿es que ciego deliro,\no que un beso en un suspiro\nme envía tu corazón?\nY en el luminoso día\ny en la alta noche sombría,\nsi en todo cuanto rodea\nal alma que te desea,\nte creo sentir y ver,\ndime: ¿es que toco y respiro\nsoñando, o que en un suspiro\nme das tu aliento a beber?"
);

create_poem(
	sorju,
	"Verde embeleso de la vida humana",
	"Verde embeleso de la vida humana,\nloca esperanza, frenesí dorado,\nsueño de los despiertos intrincado,\ncomo de sueños, de tesoros vana;\n\nalma del mundo, senectud lozana,\ndecrépito verdor imaginado,\nel hoy de los dichosos esperado\ny de los desdichados el mañana:\n\nsigan tu sombra en busca de tu día\nlos que, con verdes vidrios por anteojos,\ntodo lo ven pintado a su deseo:\n\nque yo, más cuerda en la fortuna mía,\ntengo en entrambas manos ambos ojos\ny solamente lo que toco veo."
);
create_poem(
	sorju,
	"Continúa el mismo asunto",
	"Feliciano me adora y le aborrezco;\nLisardo me aborrece y yo le adoro;\npor quien no me apetece ingrato, lloro,\ny al que me llora tierno, no apetezco:\n\na quien más me desdora, el alma ofrezco;\na quien me ofrece víctimas, desdoro;\ndesprecio al que enriquece mi decoro\ny al que le hace desprecios enriquezco;\n\nsi con mi ofensa al uno reconvengo,\nme reconviene el otro a mí ofendido\ny al padecer de todos modos vengo;\n\npues ambos atormentan mi sentido;\naquéste con pedir lo que no tengo\ny aquél con no tener lo que le pido."
);
create_poem(
	sorju,
	"Contiene una fantasía contenta con amor decente",
	"Deténte, sombra de mi bien esquivo,\nimagen del hechizo que más quiero,\nbella ilusión por quien alegre muero,\ndulce ficción por quien penosa vivo.\n\nSi al imán de tus gracias atractivo\nsirve mi pecho de obediente acero,\n¿para qué me enamoras lisonjero,\nsi has de burlarme luego fugitivo?\n\nMas blasonar no puedes satisfecho\nde que triunfa de mí tu tiranía;\nque aunque dejas burlado el lazo estrecho\n\nque tu forma fantástica ceñía,\npoco importa burlar brazos y pecho\nsi te labra prisión mi fantasía."
);
create_poem(
	sorju,
	"Diuturna enfermedad de la esperanza",
	"Diuturna enfermedad de la esperanza\nque así entretienes mis cansados años\ny en el fiel de los bienes y los daños\ntienes en equilibrio la balanza;\n\nque siempre suspendida en la tardanza\nde inclinarse, no dejan tus engaños\nque lleguen a excederse en los tamaños\nla desesperación o la confianza:\n\n¿quién te ha quitado el nombre de homicida\npues lo eres más severa, si se advierte\nque suspendes el alma entretenida\n\ny entre la infausta o la felice suerte\nno lo haces tú por conservar la vida\nsino por dar más dilatada muerte."
);
create_poem(
	sorju,
	"Amor empieza por desasosiego",
	"Amor empieza por desasosiego,\nsolicitud, ardores y desvelos;\ncrece con riesgos, lances y recelos;\nsusténtase de llantos y de ruego.\n\nDoctrínanle tibiezas y despego,\nconserva el ser entre engañosos velos,\nhasta que con agravios o con celos\napaga con sus lágrimas su fuego.\n\nSu principio, su medio y fin es éste:\n¿pues por qué, Alcino, sientes el desvío\nde Celia, que otro tiempo bien te quiso?\n\n¿Qué razón hay de que dolor te cueste?\nPues no te engañó amor, Alcino mío,\nsino que llegó el término preciso."
);
create_poem(
	sorju,
	"¿En perseguirme, mundo, qué interesas?",
	"¿En perseguirme, mundo, qué interesas?\n¿En qué te ofendo, cuando sólo intento\nponer bellezas en mi entendimiento\ny no mi entendimiento en las bellezas?\n\nYo no estimo tesoros ni riquezas,\ny así, siempre me causa más contento\nponer riquezas en mi entendimiento\nque no mi entendimiento en las riquezas.\n\nYo no estimo hermosura que vencida\nes despojo civil de las edades\nni riqueza me agrada fementida,\n\nteniendo por mejor en mis verdades\nconsumir vanidades de la vida\nque consumir la vida en vanidades."
);

create_poem(
	benedetti,
	"Asunción de ti",
	"1\n\nQuién hubiera creído que se hallaba\nsola en el aire, oculta,\ntu mirada.\nQuién hubiera creído esa terrible\nocasión de nacer puesta al alcance\nde mi suerte y mis ojos,\ny que tú y yo iríamos, despojados\nde todo bien, de todo mal, de todo,\na aherrojarnos en el mismo silencio,\na inclinarnos sobre la misma fuente\npara vernos y vernos\nmutuamente espiados en el fondo,\ntemblando desde el agua,\ndescubriendo, pretendiendo alcanzar\nquién eras tú detrás de esa cortina,\nquién era yo detrás de mí.\nY todavía no hemos visto nada.\nEspero que alguien venga, inexorable,\nsiempre temo y espero,\ny acabe por nombrarnos en un signo,\npor situarnos en alguna estación\npor dejarnos allí, como dos gritos\nde asombro.\nPero nunca será. Tú no eres ésa,\nyo no soy ése, ésos, los que fuimos\nantes de ser nosotros.\nEras sí pero ahora\nsuenas un poco a mí.\nEra sí pero ahora\nvengo un poco a ti.\nNo demasiado, solamente un toque,\nacaso un leve rasgo familiar,\npero que fuerce a todos a abarcarnos\na ti y a mí cuando nos piensen solos.\n\n\n2\n\nHemos llegado al crepúsculo neutro\ndonde el día y la noche se funden y se igualan.\nNadie podrá olvidar este descanso.\nPasa sobre mis párpados el cielo fácil\na dejarme los ojos vacíos de ciudad.\nNo pienses ahora en el tiempo de agujas,\nen el tiempo de pobres desesperaciones.\nAhora sólo existe el anhelo desnudo,\nel sol que se desprende de sus nubes de llanto,\ntu rostro que se interna noche adentro\nhasta sólo ser voz y rumor de sonrisa.\n\n3\n\nPuedes querer el alba\ncuando ames.\nPuedes\nvenir a reclamarte como eras.\nHe conservado intacto tu paisaje.\nLo dejaré en tus manos\ncuando éstas lleguen, como siempre,\nanunciándote.\nPuedes\nvenir a reclamarte como eras.\nAunque ya no seas tú.\nAunque mi voz te espere\nsola en su azar\nquemando\ny tu dueño sea eso y mucho más.\nPuedes amar el alba\ncuando quieras.\nMi soledad ha aprendido a ostentarte.\nEsta noche, otra noche\ntú estarás\ny volverá a gemir el tiempo giratorio\ny los labios dirán\nesta paz ahora esta paz ahora.\nAhora puedes venir a reclamarte,\npenetrar en tus sábanas de alegre angustia,\nreconocer tu tibio corazón sin excusas,\nlos cuadros persuadidos,\nsaberte aquí.\nHabrá para vivir cualquier huida\ny el momento de la espuma y el sol\nque aquí permanecieron.\nHabrá para aprender otra piedad\ny el momento del sueño y el amor\nque aquí permanecieron.\nEsta noche, otra noche\ntú estarás,\ntibia estarás al alcance de mis ojos,\nlejos ya de la ausencia que no nos pertenece.\nHe conservado intacto tu paisaje\npero no sé hasta dónde está intacto sin ti,\nsin que tú le prometas horizontes de niebla,\nsin que tú le reclames su ventana de arena.\nPuedes querer el alba cuando ames.\nDebes venir a reclamarte como eras.\nAunque ya no seas tú,\naunque contigo traigas\ndolor y otros milagros.\nAunque seas otro rostro\nde tu cielo hacia mí."
);
create_poem(
	benedetti,
	"Te quiero",
	"Tus manos son mi caricia \nmis acordes cotidianos \nte quiero porque tus manos \ntrabajan por la justicia \n\nsi te quiero es porque sos \nmi amor mi cómplice y todo \ny en la calle codo a codo \nsomos mucho más que dos \n\ntus ojos son mi conjuro \ncontra la mala jornada \nte quiero por tu mirada \nque mira y siembra futuro \n\ntu boca que es tuya y mía \ntu boca no se equivoca \nte quiero porque tu boca \nsabe gritar rebeldía \n\nsi te quiero es porque sos \nmi amor mi cómplice y todo \ny en la calle codo a codo \nsomos mucho más que dos \n\ny por tu rostro sincero \ny tu paso vagabundo \ny tu llanto por el mundo \nporque sos pueblo te quiero \n\ny porque amor no es aureola \nni cándida moraleja \ny porque somos pareja \nque sabe que no está sola \n\nte quiero en mi paraíso \nes decir que en mi país \nla gente viva feliz \naunque no tenga permiso \n\nsi te quiero es porque sos \nmi amor mi cómplice y todo \ny en la calle codo a codo \nsomos mucho más que dos."
);
create_poem(
	benedetti,
	"¿De qué se ríe?",
	"(Seré curioso)\n\nEn una exacta\nfoto del diario\nseñor ministro\ndel imposible\n\nvi en pleno gozo\ny en plena euforia\ny en plena risa\nsu rostro simple\n\nseré curioso\nseñor ministro\nde qué se ríe\nde qué se ríe\n\nde su ventana\nse ve la playa\npero se ignoran\nlos cantegriles\n\ntienen sus hijos\nojos de mando\npero otros tienen\nmirada triste\n\naquí en la calle\nsuceden cosas\nque ni siquiera\npueden decirse\n\nlos estudiantes\ny los obreros\nponen los puntos\nsobre las íes\n\npor eso digo\nseñor ministro\nde qué se ríe\nde qué se ríe\n\nusté conoce\nmejor que nadie\nla ley amarga\nde estos países\n\nustedes duros\ncon nuestra gente\npor qué con otros\nson tan serviles\n\ncómo traicionan\nel patrimonio\nmientras el gringo\nnos cobra el triple\n\ncómo traicionan\nusté y los otros\nlos adulones\ny los seniles\n\npor eso digo\nseñor ministro\nde qué se ríe\nde qué se ríe\n\naquí en la calle\nsus guardias matan\ny los que mueren\nson gente humilde\n\ny los que quedan\nllorando de rabia\nseguro piensan\nen el desquite\n\nallÃ¡ en la celda\nsus hombres hacen\nsufrir al hombre\ny eso no sirve\n\ndespués de todo\nusté es el palo\nmayor de un barco\nque se va a pique\n\nseré curioso\nseñor ministro\nde qué se ríe\nde qué se ríe.\n"
);

create_poem(
	machado,
	"Tus ojos me recuerdan",
	"Tus ojos me recuerdan\nlas noches de verano,\nnegra noche sin luna,\norilla al mar salado,\ny un chispear de estrellas\nde un cielo negro y bajo.\nTus ojos me recuerdan\nlas noches de verano.\nY tu morena cara,\nlos trigos requemados\nde un suspirar de fuego\nde los maduros campos.\n\nTus ojos me recuerdan\nlas noches de verano.\n\nDe tu morena cara,\nde tu soñar gitano,\nde tu mirar de sombra\nquiero llenar mi vaso.\nMe embriagaré una noche\nde un cielo negro y bajo,\npara cantar contigo,\norilla al mar salado,\nuna canción que deje\ncenizas en los labios...\nDe tu mirar de sombra\nquiero llenar mi vaso.\n\nTus ojos me recuerdan\nlas noches de verano."
);
create_poem(
	machado,
	"Dice la esperanza: un día",
	"Dice la esperanza: un día\nla verás, si bien esperas.\nDice la desesperanza:\nsólo tu amargura es ella.\nLate, corazón... No todo\nse lo ha tragado la tierra."
);

create_poem(
	ashauri,
	"Pinche Loca - GODSPEED",
	"pinche loca\nme das un chingo de miedo\nme sacas papalotes del pecho\nqué será\nde todos los mensajes de amor\nque mandé antes de ver tu rostro enfermo\nlleno de ideas\nfuturos infiernos\nqué será\nde mis siguientes novias\ncuando entiendan que nada puede superar\ncómo me montas cuando cogemos\nquiero morir escuchando\nlo que te cuentan\nlas voces en tu cabeza\nya no me interesa\nel mundo en el que crecí\nquiero vivir\nen tus ideas pendejas\ny escuchar cómo no entiendes\nque nos estamos enamorando\nmientras cuentas anécdotas que no sucedieron\nmientras interrumpes nuestros besos\npara reclamarle a gente que no existe\nme das un chingo de miedo\nme sacas papalotes del pecho\nquiero que hoy me enloquezcas\nhasta que sólo pueda regresar\na donde estás\npara romper la ventana\ntaparte la boca\nllevarte por una nieve\ny gritarle al nevero\nella es\nla pinche loca de mi vida\ny no la entiendo\nsólo quiero verla sonriendo\nhoy me voy a casar contigo\naunque corra el peligro\nde que me asesines con tus besos\nque hacen olvidar el tiempo\nhoy me voy a casar contigo\naunque la tendencia mundial\nsea morir sin acompañante\nhoy me voy a casar contigo\naunque tenga que amarrarte\npara que no te hagas más daño\naunque me escupas\nlas pastillas llenas de palabras amorosas\nque te doy cuando no te calmas\nme cuesta decirlo\npero quiero dejar de entender el universo\ncontigo\nquiero cambiar las reglas de la realidad\ncontigo\nquiero caminar durante el otoño en la ciudad\ny gritar\nque una pinche loca me persigue\nque es lo mejor que me pudo pasar\nme das un chingo de miedo\nme sacas papalotes del pecho\nya no visitaré a mi familia\nya no le contestaré a mis amigos\nme iré contigo a un cuarto\npara hablar con las paredes\npara pelear por cosas que no pasaron\npara ver cómo se funden los focos\npara besarnos y entender que los locos\nsólo nos podemos amar entre nosotros"
);

create_poem(
	bukowski,
	"The Japanese Wife",
	"O lord, he said, Japanese women,\nreal women, they have not forgotten,\nbowing and smiling\nclosing the wounds men have made;\nbut American women will kill you like they\ntear a lampshade,\nAmerican women care less than a dime,\nthey’ve gotten derailed,\nthey’re too nervous to make good:\nalways scowling, belly-aching,\ndisillusioned, overwrought;\nbut oh lord, say, the Japanese women:\nthere was this one,\nI came home and the door was locked\nand when I broke in she broke out the bread knife\nand chased me under the bed\nand her sister came\nand they kept me under that bed for two days,\nand when I came out, at last,\nshe didn’t mention attorneys,\njust said, you will never wrong me again,\nand I didn’t; but she died on me,\nand dying, said, you can wrong me now,\nand I did,\nbut you know, I felt worse then\nthan when she was living;\nthere was no voice, no knife,\nnothing but little Japanese prints on the wall,\nall those tiny people sitting by red rivers\nwith flying green birds,\nand I took them down and put them face down\nin a drawer with my shirts,\nand it was the first time I realized\nthat she was dead, even though I buried her;\nand someday I’ll take them all out again,\nall the tan-faced little people\nsitting happily by their bridges and huts\nand mountains—\nbut not right now,\nnot just yet."
);
create_poem(
	bukowski,
	"A Not So Good Night In The San Pedro Of The World",
	"it's unlikely that a decent poem is in me\ntonight\nand I understand that this is strictly my\nproblem\nand of no interest to you\nthat I sit here listening to a man playing\na piano on the radio\nand it's bad piano, both the playing and\nthe composition\nand again, this is of no interest to you\nas one of my cats,\na beautiful white with strange markings,\nsleeps in the bathroom.\n\n\nI have no ideas of what would be of interest to you\nbut I doubt that you would be of\ninterest to me, so don't get\nsuperior.\nin fact, come to think of it, you can\nkiss my ass.\n\nI continue to listen to the piano\nthis will not be a memorable night in my\nlife or yours.\n\nlet us celebrate the stupidity of our\nendurance."
);
create_poem(
	bukowski,
	"i wanted to overthrow the government but all i brought down was somebody's wife",
	"30 dogs, 20 men on 20 horses and one fox\nand look here, they write,\nyou are a dupe for the state, the church,\nyou are in the ego-dream,\nread your history, study the monetary system,\nnote that the racial war is 23,000 years old.\n\nwell, I remember 20 years ago, sitting with an old Jewish tailor,\nhis nose in the lamplight like a cannon sighted on the enemy; and\nthere was an Italian pharmacist who lived in an expensive apartment\nin the best part of town; we plotted to overthrow\na tottering dynasty, the tailor sewing buttons on a vest,\nthe Italian poking his cigar in my eye, lighting me up,\na tottering dynasty myself, always drunk as possible,\nwell-read, starving, depressed, but actually\na good young piece of ass would have solved all my rancor,\nbut I didn’t know this; I listened to my Italian and my Jew\nand I went out down dark alleys smoking borrowed cigarettes\nand watching the backs of houses come down in flames,\nbut somewhere we missed: we were not men enough,\n         large or small enough,\nor we only wanted to talk or we were bored, so the anarchy\n         fell through,\nand the Jew died and the Italian grew angry because I stayed\n         with his\nwife when he went down to the pharmacy; he did not care to have\nhis personal government overthrown, and she overthrew easy, and\nI had some guilt: the children were asleep in the other bedroom\nbut later I won $200 in a crap game and took a bus to New Orleans\nand I stood on the corner listening to the music coming from bars\nand then I went inside to the bars,\nand I sat there thinking about the dead Jew,\nhow all he did was sew on buttons and talk,\nand how he gave way although he was stronger than any of us\nhe gave way because his bladder would not go on,\nand maybe that saved Wall Street and Manhattan\nand the Church and Central Park West and Rome and the\nLeft Bank, but the pharmacist’s wife, she was nice,\nshe was tired of bombs under the pillow and hissing the Pope,\nand she had a very nice figure, very good legs,\nbut I guess she felt as I: that the weakness was not Government\nbut Man, one at a time, that men were never as strong as\n         their ideas\nand that ideas were governments turned into men;\nand so it began on a couch with a spilled martini\nand it ended in the bedroom: desire, revolution,\nnonsense ended, and the shades rattled in the wind,\nrattled like sabers, cracked like cannon,\nand 30 dogs, 20 men on 20 horses chased one fox\nacross the fields under the sun,\nand I got out of bed and yawned and scratched my belly\nand knew that soon       very soon     I would have to get\nvery drunk      again."
);
create_poem(
	bukowski,
	"i can't stay in the same room with that woman for five minutes",
	"I went over the other day\nto pick up my daughter.\nher mother came out with workman’s\noveralls on.\nI gave her the child support money\nand she laid a sheaf of poems on me by one\nManfred Anderson.\nI read them.\nhe’s great, she said.\ndoes he send this shit out? I asked.\noh no, she said, Manfred wouldn’t do that.\nwhy?\nwell, I don’t know exactly.\nlisten, I said, you know all the poets who\ndon’t send their shit out.\nthe magazines aren’t ready for them, she said,\nthey’re too far advanced for publication.\noh for christ’s sake, I said, do you really\nbelieve that?\nyes, yes, I really believe that, she\nanswered.\nlook, I said, you don’t even have the kid ready\nyet. she doesn’t have her shoes on. can’t you\nput her shoes on?\nyour daughter is 8 years old, she said,\nshe can put her own shoes on.\nlisten, I said to my daughter, for christ’s sake\nwill you put your shoes on?\nManfred never screams, said her mother.\nOH HOLY JESUS CHRIST! I yelled\nyou see, you see? she said, you haven’t changed.\nwhat time is it? I asked.\n4:30. Manfred did submit some poems once, she said,\nbut they sent them back and he was terribly\nupset.\nyou’ve got your shoes on, I said to my daughter,\nlet’s go.\nher mother walked to the door with us.\nhave a nice day, she said.\nfuck off, I said.\nwhen she closed the door there was a sign pasted to\nthe outside. it said:\nSMILE.\nI didn’t.\nwe drove down Pico on the way in.\nI stopped outside the Red Ox.\nI’ll be right back, I told my daughter.\nI walked in, sat down, and ordered a scotch and\nwater. over the bar there was a little guy popping in and\nout of a door holding a very red, curved penis\nin his hand.\ncan’t\ncan’t you make him stop? I asked the barkeep.\ncan’t you shut that thing off?\nwhat’s the matter with you, buddy? he asked.\nI submit my poems to the magazines, I said.\nyou submit your poems to the magazines? he asked.\nyou are god damned right I do, I said.\nI finished my drink and got back to the car.\nI drove down Pico Boulevard.\nthe remainder of the day was bound to be better.\n"
);
create_poem(
	bukowski,
	"a 340 dollar horse and a hundred dollar whore",
	"don’t ever get the idea I am a poet; you can see me\nat the racetrack any day half drunk\nbetting quarters, sidewheelers and straight thoroughs,\nbut let me tell you, there are some women there\nwho go where the money goes, and sometimes when you\nlook at these whores these onehundreddollar whores\nyou wonder sometimes if nature isn’t playing a joke\ndealing out so much breast and ass and the way\nit’s all hung together, you look and you look and\nyou look and you can’t believe it; there are ordinary women\nand then there is something else that wants to make you\ntear up paintings and break albums of Beethoven\nacross the back of the john; anyhow, the season\nwas dragging and the big boys were getting busted,\nall the non-pros, the producers, the cameraman,\nthe pushers of Mary, the fur salesman, the owners\nthemselves, and Saint Louie was running this day:\na sidewheeler that broke when he got in close;\nhe ran with his head down and was mean and ugly\nand 35 to 1, and I put a ten down on him.\nthe driver broke him wide\ntook him out by the fence where he’d be alone\neven if he had to travel four times as far,\nand that’s the way he went it\nall the way by the outer fence\ntraveling two miles in one\nand he won like he was mad as hell\nand he wasn’t even tired,\nand the biggest blonde of all\nall ass and breast, hardly anything else\nwent to the payoff window with me.\n\nthat night I couldn’t destroy her\nalthough the springs shot sparks\nand they pounded on the walls.\nlater she sat there in her slip\ndrinking Old Grandad\nand she said\nwhat’s a guy like you doing\nliving in a dump like this?\nand I said\nI’m a poet\n\nand she threw back her beautiful head and laughed.\n\nyou? you . . . a poet?\n\nI guess you’re right, I said, I guess you’re right.\n\nbut still she looked good to me, she still looked good,\nand all thanks to an ugly horse\nwho wrote this poem.\n"
);

create_poem(
	mac,
	"Objects In The Mirror",
	"People love you when they on your mind\nA thought is love's currency\nAnd I been thinkin' 'bout her all the time\nI never seen somebody put together perfectly\nWhat would I have to do to call you mine?\nSomeone like you is so hard to find\nYou can open up your eyes, or you can walk in blind\nAll I ask is that you hurry, I won't hurt you, don't you worry\nListen to me, I'ma set you free\nHe ain't gonna break your heart again\nGo through the worst to reach the ecstasy\nWhen your imagination's on pretend\nI never thought that it would feel this way\nYou never taught me how to heal the pain\nI wish you caught me on a different day\nWhen it was easier to be happy\n\nJust a little taste and you know she got you\nCan you hide away? Can you hide away?\nSound of silence as they all just watch you\nI kinda find it strange how the times have changed\nI wish we could go and be\nFree once, baby, you and me\nWe could change the world forever\nAnd never come back again\nLet's leave it all in the rear-view\nLet's leave it all in the rear-view, girl\nYou don't have to cry\nYou don't have to cry\n\nMend a broken heart, girl, if you can\nI don't expect you to be capable\nYou got the world right in your hands\nThat responsibility is unescapable\nI promise that I'll be a different man\nPlease give me the chance to go and live again\nI'm havin' some trouble, can you give a hand?\nIt seems perfection really is so unattainable\nDon't even say you 'bout to end it all\nYour life precious, ain't no need to go and kill yourself\nI'm not so sure that there's an end at all\nI wish the truth would just reveal itself\nWho do you call to make it to the top?\nAnd who do you call to make the shootin' stop?\nAnd who do you call to give the coupe a wash?\nAfter everything I did I think I'm still myself\n\n\nJust a little taste and you know she got you\nCan you hide away? Can you hide away?\nSound of silence as they all just watch you\nI kinda find it strange how the times have changed\nI wish we could go and be\nFree once, baby, you and me\nWe could change the world forever\nAnd never come back again\nLet's leave it all in the rear-view\nLet's leave it all in the rear-view, girl\nYou don't have to cry\nYou don't have to cry"
);
create_poem(
	mac,
	"Youforia",
	"Take me to euphoria according to the story of a warrior\nPicturing my visions as you look inside my cornea\n\nI been waiting so long\nBeen waiting to have you by my side (tell you 'I love you')\nI- I can't do no wrong, no you are an angel\nWith you by my side, you are my euphoria, euphoria\nAnd when you look in my eyes\nThe pain goes a-way, euphoria\nYou feel so damn good, I want you to know that\nJust come take my hand closer so hear me out\nWe could go to the moon\nLook at my eyes as we land\nWe're here now\n"
);
create_poem(
	mac,
	"Cinderella",
	"Okay your legs like a store they open up\nAnd you got people in line\nBeen here every night for weeks at a time\nYou in my dreams, that's why I sleep all the time\nJust to hear you say I love you, just to touch you\nJust to leave you behind\nI told you, you don't have to worry, you'll be fine\nThe type of thing I heard it happen all the time\nYeah, I just wanna see you fly\nBecause your fragrance got me faded, you be keepin' me high\nSaid nothin' better than the first time\nI'll be at your service like the check-in at the curbside\nYou don't have to spend another second on this Earth dry\nWet you like a rebel, go a second and a third time\nLeft you a perverse mind\nAnd when you hungry, I can chef you up a stir fry\nGet you some dessert wine, elevate yah third eye\nFirst prize, Nobel, get a piece\nYour clothes off, turn around, let me see\n\nI been waitin' all night for this moment\nI been waitin' all year for this moment\nI been picturing you takin' off your clothes for me\nI been literally curvin' all these hoes for you\nDaddy told you, better bring your ass home\nCinderella better get your ass home\nMan I swear the parents just don't understand\nYou ain't gotta be old to be a man\nTake my hand, come with me to my room\nGirl I got a suite at the SLS\nI already know you got expensive taste\nTake my hand, follow me to my room\nTell your little friends you gon' be alright\nGirl I got a plan for the whole night\n\nYeah, okay I came up with a plan, it was take you by the hand\nAnd bring you somewhere where the sand is\nSoon as we landed\nWe went straight into the room\nAnd played the music, started dancing\nYou was taking off your pants\nIt look like Dorothy ain't in Kansas anymore\nI do you like a chore\nWe started on the bed and then we moved it to the floor\nYou started getting crazy, told me fuck you like a whore\nI thought you was an angel, now you yellin' to the Lord\nYou used to tell me all the time I ain't your type\nNow you always wanna spend the night\nNow I'm doing everything you like\nWhen I'm inside your pussy, damn it feels so right\nYeah, but I still respect the game\nEvery time I'm out of line you always set me straight\nThe sex is great, for Heaven's sake I need it every day\nI yell your name, Cinderella\nNever gonna find nobody better, all my life...\n\nI been waitin' all night for this moment\nI been waitin' all year for this moment\nI been picturing you takin' off your clothes for me\nI been literally curvin' all these hoes for you\nDaddy told you, better bring your ass home\nCinderella better get your ass home\nMan I swear the parents just don't understand\nYou ain't gotta be old to be a man\nTake my hand, come with me to my room\nGirl I got a suite at the SLS\nI already know you got expensive taste\nTake my hand, follow me to my room\nTell your little friends you gon' be alright\nGirl I got a plan for the whole night\n\nHey now, I'm saying\nMy only way out is the way in\nI won't stop 'til you're mine, no way\nWell, all my days now, they changin'\nI got angels, no more Satan\nLooks like God's on my side, this time\nWell, I been meanin' to tell ya\nYou lookin' better every day, write you letters\nIt's only right that right after love, I write my name\nIf it's forever or never, it's all the same\nUnder the weather\nFeel much better when that weather isn't rain, yeah\nOoh Cinderella, don't you run out of time\nIt feels like you've been taking all day\nWherever you came from, wherever you going\nI promise I'm not far behind, yeah\nSo don't you dare throw this away\nI been meanin' to tell ya\nYou look better every day, write you letters\nIt's only right that right after love, I write my name\nAnd if it's forever or never it's all the same\nUnder the weather\nFeel much better when that weather isn't rain\n"
);
create_poem(
	mac,
	"Congratulations",
	"This sun don't shine when I'm alone\nI lose my mind and I lose control\nI see your eyes look through my soul\nDon't be surprised, this all I know\nI felt the highs and they felt like you\nSee a love like mine is too good to be true\nAnd you too divine to just be mine\nYou remind me of the color blue\nGirl I'm so in love with you, yeah\nGirl I'm so in love with you\nYeah, yeah\nYeah, yeah, yeah, yeah\n\nUm, well, baby\nYou were everything I ever wanted\nBought a wedding ring, it's in my pocket\nPlanned to ask the other day\nKnew you'd run away, so I guess I just forgot it\nRemember when you went away to college\nHours on the phone, we end up talkin'\nPast, present, future, all the gossip, God damn\nPuppy love ain't what it was, darlin'\nFeelings that we have are so alarmin'\nI can make you laugh, I can break the glass\nIf we made it last, it'd be a bargain\nMr. Charmin', that is my department\nYou was there before the fancy cars and\nYou was there when I was just a starvin' artist\nWhen the car was havin' trouble startin'\nNow we got our own apartment, same box for the mail\nSame hamper for the laundry, the food in the fridge is stale\nAnd this mornin' you cooked the eggs with the kale\nI tried to hit it while you was gettin' dressed\nYou said 'All you ever think about is sex'\nI'm like, 'Oh well, you know me so well\nAnd if this will make you late, I swear, I won't tell\nAnd every time I call your phone, you better pick up your cell\nI swear to God I'ma freak out if it go straight to voice mail'\nWell, I'm the jealous type\nBut I swear that ass what Heaven's like\nWhen I'm in that pussy, it's a better life\nThat's the only way I'm tryna end the night\nThat's my only chance, I better get it right\n\nTake your time, my baby\nCause I'm waitin' for you, for you\nI know I make your mind go crazy\nCause I'm waitin' right here for you, for you\n\nYou get closer with, run away\nAll I ever known is the color gray\nYour loveliness bring me sunshine\nI found an angel so divine\nHeaven probably not the same without you\nBut now you're in my world, in my world\n"
);
create_poem(
	mac,
	"God Is Fair, Sexy Nasty",
	"Hearts on my timeline, bullet to your rose\nThen I watch your petal fold\nDon't you know your body been mine?\nI know you know I know\nSexy, nasty, have no guideline\nOne day, four times\nYou don't mind that I don't care (pleasure, pleasure...)\nYour divinity has turned me into a sinner\nGod is fair (pleasure, pleasure...)\nAnd your beauty can even make hell have a winter\n\nYeah and a freak mind is divine so we fuck from behind\nOn these sides, between thighs, I eat up\nWhy do, why do anything but trust myself?\nTried to give her up but she fuck so well\nMan that bitch so cold, man that bitch so cold\nI'ma take my time, I'ma hit that slow\n'Cause I ain't in a rush young girl\nYou're the only thing for me in this fucked up world\nAnd do you believe in love?\nHold on tight when demons come\nIt'll be alright, no need to run\nStay with me tonight, we'll see the sun\nAnd when we wake up early we'll still be young\nNever felt this free before\nI need you more than keys need doors\nI need you sleepin' next to me\nThe blanket sheets, I'll take them all and keep you warm\nYeah and I teach her that we were the creatures of love\nYou be the leader, I could be Julius Caesar\nWhen I'm pullin' up in the Beamer\nThe beats in the trunk, all the freaks wanna fuck\n\nHearts on my timeline, bullet to your rose\nThen I watch your petal fold\nDon't you know your body been mine?\nI know you know I know\nSexy, nasty (sexy, nasty)\nHave no guideline (have no guideline)\nOne day, four times\nYou don't mind that I don't care (pleasure, pleasure...)\nGod is fair (pleasure, pleasure...)\n\nI need to feel your touch\nYou shy, you don't reveal too much\nNo lies, don't hide yourself at all\nWith you, I just can't help but fall\nIt's true, and I'll try everything\nGirl you're, my sexy nasty, thing\nShe been getting faded all the time, flap your wings\nI been getting stoned all week\nIt make me go too deep\nGirl you so lonely, will you come home with me?\nJust take your clothes off babe\nKnow that we been talkin' on the phone all day\nI love it when you tell me that you don't behave\nTell me when and where, I bet I won't be late\nAll I really wanna do is procreate\nI'm a Superman, you'll be my Lois Lane\nKnow you late for work, you stayin' home today\nWe gon' keep on goin' 'til our bones both break\nIt's the grown folk way, yeah\n\nHearts on my timeline, bullet to your rose\nThen I watch your petal fold\nDon't you know your body been mine?\nI know you know I know\nSexy, nasty (sexy, nasty)\nHave no guideline (have no guideline)\nOne day, four times\nYou don't mind that I don't care\nGod is fair\n"
);
create_poem(
	mac,
	"Colors And Shapes",
	"If it was colors and shapes, the imaginary\nInstead of all of this weight that we have to carry\nWould you be able to breathe?\nAnd if you could just find where that comfort resides\nNo distraction or movement that fucks with your mind\nWould you let them see?\nWhile beneath the ocean I met with the captain\nWho sank to the floor on his ship\nAll of his passengers escaped to safety\nBut he was not done with his trip\nHe looked up and smiled, asked me ''how do you do?''\nI told him I'm losing my grip\nHe told me ''son, if you want to hold onto yourself\nThen let yourself slip''\n\nOh, it feels good to fall\n\nThese puzzles are so hard to make into pictures\nOf something that'll they understand\nThey could open their eyes, still be blind to the beauty\nBut march on the heart of this land\nOh oh, why don't you turn around and go home?\nThey invade your minds and then fill them with nonsense\nThese things that a man doesn't need\nTake out the love and the passion and hope\nAnd they fill it with nothing but greed\nWhile floating through galaxies they said I couldn't\nI noticed how sad one can get\nCause the ignorant mind is so peaceful I find\nI can't understand nothing no more\nIf I jump let me fall\nIf I jump let me fall\n\nOh, it feels good to fall\n"
);
create_poem(
	mac,
	"Polo Jeans",
	"I give no fucks when I go nuts\nCause I smoke dust, overdosed on the sofa, dead\nWoke up from a coma\nPoured up with a soda, smoked, went back to bed\nNever thought I'd be such a loner\nI tell my bitch that I fucking own her\nMy neighbor's daughter just got a dog\nI'ma run it over, I'm a fucking soldier\nSo cold bro, fuck pneumonia\nAll my bitches got love for Sosa\nI just wanna fuck Rosa Acosta\nThen disappear in Southern California\nStrung out to the night, I'm chilling\nEverybody worried that the lights might kill them\nUh, via sight slipping\nLong lines of those white women\nI'm with the homies, bump Counting Crows\nJust went through a half ounce of coke\nBlood pouring all out my nose\nDon't tell my mom I got a drug problem\nI'm fucking high-ly publicized\nWhen the sun go down, I come alive\nCause the guns go off in the summer time\nThe guns go off in the summer time, blaow\n"
);

create_poem(
	kendrick,
	"Mortal Man Outro",
	"The caterpillar is a prisoner to the streets that conceived it\nIts only job is to eat or consume everything around it\nIn order to protect itself from this mad city\nWhile consuming its environment\nThe caterpillar begins to notice ways to survive\nOne thing it noticed is how much the world shuns him\nBut praises the butterfly\nThe butterfly represents the talent, the thoughtfulness\nAnd the beauty within the caterpillar\nBut having a harsh outlook on life\nThe caterpillar sees the butterfly as weak\nAnd figures out a way to pimp it to his own benefits\nAlready surrounded by this mad city\nThe caterpillar goes to work on the cocoon\nWhich institutionalizes him\nHe can no longer see past his own thoughts\nHeâ€™s trapped\nWhen trapped inside these walls certain ideas take root, such as\nGoing home, and bringing back new concepts to this mad city\nThe result?\nWings begin to emerge, breaking the cycle of feeling stagnant\nFinally free, the butterfly sheds light on situations\nThat the caterpillar never considered, ending the internal struggle\nAlthough the butterfly and caterpillar are completely different\nThey are one and the same\n"
);
create_poem(
	kendrick,
	"Hood Politics",
	"I remember you was conflicted\nMisusing your influence\nSometimes I did the same\nAbusing my power full of resentment\nResentment that turned into a deep depression\nFound myself screaming in a hotel room\nI didn't want to self-destruct\nThe evils of Lucy was all around me\nSo I went running for answers\nUntil I came home\nBut that didn't stop survivors guilt\nGoing back and forth\nTrying to convince myself the stripes I earned\nOr maybe how A-1 my foundation was\nBut while my loved ones was fighting a continuous war\nBack in the city\nI was entering a new one\n"
);
create_poem(
	kendrick,
	"The Art of Peer Pressure",
	"Me and my niggas four deep in a white Toyota\nA quarter tank of gas, one pistol and orange soda\nJanky stash box when the federales'll roll up\nBasketball shorts with the Gonzales Park odor\nWe on the mission for bad bitches and trouble\nI hope the universe love you today\n'Cause the energy we bringin' sure to carry away\nA flock of positive activists that fill they body with hate\nIf it's necessary; bumpin' Jeezy first album, lookin' distracted\nSpeakin' language only we know, you think it's an accent\nThe windows roll down, all I see is a hand pass it\nHotboxin' like George Foreman grillin' the masses\nOf the workin' world; we pulled up on a bunch of workin' girls\nAnd asked them what they workin' with\nLook at me, I got the blunt in my mouth\nUsually I'm drug-free, but, shit, I'm with the homies\n\nYeah, nigga, we off a pill and Remy Red\nCome through and bust ya head, nigga!\nMe and the homies\nSag all the way to the liquor store\nWhere my niggas pour up 4 and get twisted some more\nMe and the homies\nI ride for my mothafuckin' niggas\nHop out, do my stuff, then hop back in\nMe and the homies\nMatter of fact, I hop out that mothafucka\nAnd be like 'doo-doo-doo-doot, doo-doo-doo-doo-doot!'\n\nIt's 2:30 and the sun is beamin'\nAir conditioner broke and I hear my stomach screamin'\nHungry for anything unhealthy\nAnd if nutrition can help me\nI'll tell you to suck my dick, then I'll continue eatin'\nWe speedin' on the 405, passin' Westchester\nYou know, the light-skinned girls in all the little dresses\nGood Lord, they knew we weren't from 'round there\n'Cause every time we down there\nWe pullin' out the Boost Mobile SIM cards\nBougie bitches with no extensions\nHood niggas with bad intentions, the perfect combination\nBefore we sparked a conversation\nWe seen three niggas in colors we didn't like\nThen started interrogatin'\nI never was a gangbanger, I mean\nI never was stranger to the fonk neither, I really doubt it\nRush a nigga quick and then we laugh about it\nThat's ironic, 'cause I've never been violent\nUntil I'm with the homies\n\nBraggin' 'bout the episode we just had\nA shot of Hennessy didn't make me feel that bad\nI'm usually a true firm believer of bad karma\nConsequences from evil will make your past haunt ya\nWe tryna conquer the city with disobedience\nQuick to turn it up, even if we ain't got the CD in\nBut Jeezy still playin'\nAnd our attitude is still 'nigga, what is you sayin'?'\nPull in front of the house\nThat we been campin' out for like two months\nThe sun is goin' down as we take whatever we want\n\nAyy, ayy, nigga, jackpot, nigga, pop the safe!\nAyy, nigga, I think there's somebody in this room!\nWait, what?!\nNigga, there's somebody in this room!\n\nI hit the back window in search of any Nintendo\nDVD's, plasma-screen TV's in the trunk\nWe made a right, then made a left, then made a right\nThen made a left, we was just circlin' life\nMy mama called: 'Hello? What you doin'?' — 'Kickin' it.'\nI shoulda told her I'm probably 'bout to catch my first offense\nWith the homies\nBut – they made a right, then made a left\nThen made a right, then another right\nOne lucky night with the homies"
);
create_poem(
	kendrick,
	"Black Boy Fly",
	"I used to be jealous of Arron Afflalo\nI used to be jealous of Arron Afflalo\nHe was the one to follow\nHe was the only leader foreseeing brighter tomorrows\nHe would live in the gym, we was living in sorrow\nTotal envy of him, he made his dream become a reality\nActually making it possible to swim\nHis way up outta Compton with further more to accomplish\nGraduate with honors, a sponsor of basketball scholars\nIt's 2004 and I'm watching him score thirty\nRemember vividly how them victory points had hurt me\n'Cause every basket was a reaction or a reminder\nThat we was just moving backwards\nThe bungalow where you find us\nThe art of us ditching classes, heading nowhere fast\nStick my head inside the study hall, he focused on math\nDetermination ambition, plus dedication and wisdom\nQualities he was given was the shit we didn't have\nDug inside of his book bag and Coach Palmer asked for his finals\nHe had his back like a spinal, meanwhile\nWe singing the same old song spinning the vinyl\nEleven graders gone wrong\nHe focused on the NBA, we focused on some Patron\nNow watch that black boy fly\n\nBlack boy fly, watch that black boy fly\nBlack boy...\n\nI used to be jealous of Jayceon\nI used to be jealous of Jayceon Taylor when I was young\nTaylor made a career out of music from writing songs\nA Buick had driven past bumping him when I mowed the lawn\nMoney laundering hustling, homies pondering up against\nSchemes to make a million even if doing you harm\nWar's the case and just in case you wasn't alarmed\nThe city had fought with firearms and many had died before dawn\nIt's 2004 and I'm hearing the people roar\nFor the name of The Game, they line in front of the store\nSwap meets, selling our mixtapes, I'm like, 'Oh shit, wait'\nDon't wanna be another nigga stuck regretting mistakes\nMixed feelings was my opinion, I was defending my insecurities\nChillin' my conscience next to a villain\nCompton made you believe success wasn't real\nBe honest, none of us knew of a record deal\nSo as I peel through these lottery tickets\nI see a Harley Davidson truck visit the same plaza we shopped\nA tall nigga hopped out with Jordans and a white tank top\nHe was top of the rap game, we was the top of the block\nSo watch that black boy fly\n\nBlack boy fly, watch that black boy fly\nBlack boy...\n\nMy mama didn't raise me up to be jealous-hearted\nLike most of the winners call it\nRegardless of where you stay, hold your head and continue marching\nThat's what she said, but in my head I wanted to be like Jordan\nAward touring the country with money from mic recording\nThe only way out the ghetto, you know the stereotype\nShooting hoops or live on the stereo like Top 40\nAnd shortly, I got discouraged\nLike every time I walked to the corner, had them guns bursting\nNigga, I was rehearsing in repetition the phrase\nThat only one in a million will ever see better days\nEspecially when the crime waves was bigger than tsunamis\nBreak your boogie boards to pieces, you just a typical homie\nAll these niggas facetious and they all standing beside me\nThey all'll buy me a chopper if any one of you try me\nWhat am I to do when every neighborhood is an obstacle?\nWhen two niggas making it out had never sounded logical?\nThree niggas making it out? That's mission impossible\nSo I never believed the type of performance that I could do\nI wasn't jealous cause of the talents they got\nI was terrified they'd be the last black boys to fly out of Compton\nThank God...\n"
);

create_poem(
	blue,
	"Burnt Offering",
	"I offer nothing but the uncertain promise\nThat I'll honestly pursue the crooked path of the conscious\nNot just another body in the battle for the soul\nNever sold self for its weight in platinum and gold but\nMan we're getting grown\nWisdom got us thinking in the interest of our children\nEven if they ain't been given their flesh\nTheir bones, their homes or their names yet\nI'm aiming for the change in my pocket for the payback\nThe change augmented by the government to nothing\nThe change of a whirlwind unraveling the coming of that next shit\nI can't wait but when it comes, shit\nIt better be worth the shit that I paid most my life with\nIt's nice when it rains sometimes\nCleansing minds in my habitat, imagine that I'm digging to find\nWhat was hidden by the myth of a god up in the sky\nKnowing that She meant for me to rhyme\n\nSo I give thanks to the most, the least that I can do\nI wear this skin to find the me inside of you\nWhen I dream that I'm dreaming I feel most alive\nSacrifice nights, write to survive\nProper hand gestures conjure ancestors\nDrinking from the bottle that was meant\nFor the message that was sent from the tired and the true\nI give thanks to the most, the least that I can do\n\nWay back I used to call upon the Father often\nI fought the devil last night and almost lost â€“\nNow I'm drinking bottled water, flushing out the toxins\nVomiting and coughing feeling closer to the coffin than I ever had\nEvery morning that I arrive is a night that I survive\nJust to be alive, sipping chai, listening to my favorite DJ\nCommunicate the music, what my rhymes would say\nIf they were written\nWith a needle\nTo the groove\nOf a paper\nStylus to papyrus, record to the player\nIt's more than just therapy or excessive energy\nI undo the mechanism meant to imprison me\nSpiritually, the view from up is not enough\nI dwell below to find the god that I rebuff\nRedesigned, redefined what it meant to be divine\nKnowing that She meant for me to rhyme\n\nOur Father\nMy art is Heaven, hollow be\nThe drums beating me and my tongue into submission\nI can hardly speak breathing this indelible high\nFrom an endless supply of Godspeed, and I need\nA brand new prayer to read\nSeems the old ones grew tons of mold cause they're narrow as hell\nSometimes they be thinking that this heaven's for sale\nWorse than that, they still think God is a male\nBut Moms used to hang up pictures of white Jesus\nFist clutching rosary beads, over the years\nI began to question this Father Almighty\nMade in His image but don't look nothing like me\nBut we be the children of the most high\nGhosts of the colonized lost in the time\nRedesign, redefine what it meant to be divine\nKnowing that She meant for me to rhyme\n"
);
create_poem(
	blue,
	"Sagaba",
	"Sister sits on the steps\nCigarette rests on fingertips\nTakes a sip of slow death deftly through her lips\nShe blows a kiss\nWhich I can only resist in vain\nShe got the gift of gravity pulling to ask her name\nShe says, 'Sagaba'\nWhat's it mean? She says, 'In Ilocano\nIt translates into suffering.'\nI'm pondering the irony to conjure up the fearlessness to find a conversation\nShe offers me a square, I decline the invitation\nIt reminds me of the days when I would chain smoke\nBroken with no hope\nLike broken like the manner she spoke\nWe both\nTwo people seeking\nSolace and remembrance\nAnd wondering if miracles were meant for us\nBut intent was just an innocent thought between a sister and a brother\nWho been building in the guidance of a mother\nAnd the storyteller stops\nWaiting for the beat to drop\nGathering his thoughts in the wind, breathing in like...\n\nNow\nI couldn't stand to see the queen breathe her dreams away\nAnd tell me her tomorrow will never become today\nI say I used to know a woman just like you\nBeautiful but jaded by the multitude of men who'd often try to\nJustify their lies with twisted notions of survival\nAnd hide behind their armor when karma completes a cycle\nShe replied\nThat just because I knew a woman well it doesn't mean I know them all\nShe begins to bade farewell\nEyes up to the sky, she sighs, I need nobody\nTrue indeed, sister, but you still need everybody because\nWe hardly know ourselves if we know nobody else\nAnd only in our loneliness can home become a hell\nExhale\nThe cloud in the loudest form of silence\nWatches as it rises like suns over horizons\nThe storyteller stops\nWaiting for the beat to drop\nGathering his thoughts in the cloud, breathing out like...\n\nDreams be the ashes\nBurns and thrashing in the wind\nFlying out the burning bush attached to sister's hand\nWho whispers, 'word'\nSmiling and giving thanks, living in doubt no longer\nAs she figures out the riddle to the song\nSaying why must we suffer now to not suffer later if later\nNever comes soon enough to soothe the hatred\nAnd hatred\nIs the cancer born out of love's absence\nAnd the absence is the void left from missing every chance to\nChallenge our fates and perhaps our very names\nSister says peace and prayers for rain and change\nTosses out her lighter\nWalks out of the cipher\nFor shizzle it starts to drizzle and then I begin to write this\nInhale the imagery a queen walking steadily\nEffortlessly\nReady to be\nEvery woman and now the\nStory teller ends\nWaiting for the beat to fade\nGathering his thought near the edge of the day like...\n"
);

create_poem(
	kai,
	"Magic",
	"Yeah, girl, I guess I'm looking for love\nYeah, sure, I'm different, but, tell me who's not\nAnd yeah I got a - I got a critical mind\nYeah, I got a microscope on everything in front of my eyes\nAnd yeah, I got a criminal side\nAnd yeah, I'm a saint, but I don't worship a God\nAnd yeah, I'm amazing, but I'm lacking the confidence\nI need me a queen to hold me up when I'm falling\nYeah, I need me a partner who can hold my hand\nI need a companion, who can push me and pull me and mold me\nHelp me become a better man\nHelp me calm the hurricane in my soul\nRejuvenate me, I know - call a cab and get going\nYeah, monogamy is boring, that shit's for the forties\nYeah, I guess time went too fast\nAnd it took with it any feeling of magic 'cause\nI don't see stars, I see balls of gas\nI don't see love, I see a reason to mash and pass genetics\nTo reproduce, so let's just\nFace it and confess that\nMost of how we view ourselves is just imagined\nTo cover up the fact we're just animals who actively\nDeny it, so we feel we have purpose in our actions\nWhen it's all probably chaos, purposeless reactions\nAnd we impose meaning, 'cause the alternative is sad to us\nI bet\nThat's what I bet\n\n'Cause I got a\nI got a critical mind\nYeah, I got a microscope on everything in front of my eyes\nAnd yeah, I got a criminal side\nAnd yeah, I'm a saint, but I don't worship a God\nAnd yeah, I'm amazing, but I'm lacking the confidence\nI need me a queen to hold me up when I'm falling\n\nYeah, sure, I guess I'm looking for love\nI guess I got a place for someone there above my gut\nIn my heart, I gotta spot, untouched\nThat still sees the magic through the zeros and ones\nAnd I'm saving it\nA little place for the maybe, the someday, the lady\nWith a heart like a sunray\nWarmer than the weather outside when when it's 9PM\nAnd it's the middle of the summer, and it's alright to swim\nAnd it's all like a 10\nOn the scale of life\nLike our dreams eclipsed everything for a night\nAnd that's where you are\nSomewhere caught in a dream\nSomeone far from my logic that eats\nEverything that I believe in, I've saved you a piece\nAnd a spot right here, right next to me\nAs my queen, my partner, my best friend\nAnd when she meets me, she'll put it like this\nYeah you got a\n\nYou got a critical mind\nAnd yeah, you got a microscope on everything in front of your eyes\nAnd yeah, you got a criminal side\nAnd no, you're not a saint, but yes, you worship a God\nAnd no you're not amazing, but you could be all of that\nI can help you grow, I can help you be confident\nI can help you cope, help you be who you want and then\nWe can grow old and joke around about all of this\nWe can play this song just reminisce\nHolding hands in front of grand kids\nFeeling like, wow, what I life we lived\nAnd I'm proud of the person I spent it with\n"
);
create_poem(
	kai,
	"sexlovesoul",
	"She was alone across the room,\nthe light looming was blue,\nmixed with reds, flashing in between the two\nShe was beautiful\nEyes gold and green, sexually\ngazing across her menu, deciding between\nsome oriental entrees, I can't pronounce the names\nBut I watched her\nUnabashedly attracted\nHer nose perfect,\nand those eyes, incredibly symmetric\nI begged for that electric\nmoment within the hectic lounge,\nthe second when our eyes connect\nand then it happened\nMy soul exploded and impacted\nHeart stopped, then began,\na defibulating practice,\nand after this second of magic the\nconnection was broken\nby a waitress crossing the path of us\n\nThe music was a cool mixture\nof jazz and the electronic\nwhich is passively ironic\nthe uncontrolled coupled with something\nprogrammed, robotic\n\nHer chew was cute, unique\nand oddly magnetic to me\n\nA year later we're arguing in a bathroom\nover toothpaste, or something that didn't matter\nwe escaped in sex, because we made more sense that way\nbreathing in unison, locking eyes,\na home away from the confusion of fights\nand odd competition, our minds would dismiss\nand let our souls intertwine\nlike vines.. bougainvillea\n\nWe danced like outlaws being shot by revolvers\nto electronic concoctions\nThen time slowed like the oxen\nand we kissed, that night at the lounge\nStrangers of body, souls finally combining\nafter years of fate's magenetizing\nFlawless lips\nthe softest of skin\nand intellect proven through conversation\nThis is sex to men of cognition\n\nI heard she was married, years later\nafter we dated, with a house and a family\nAnd I'd lie if I said I didn't think of her daily\nthough I myself got married\nIt's scary\nLosing love,\nthen trying to find someone\nknowing full well they won't measure up\n\nMy skin lost pigment as life unfolded\nMy hair grew grey after my wife divorced me\nWe're still friends, and our kids were supportive\nI think they knew it wasn't love\n\nThen I saw her, and I was old then\nI had a cane and my back was bent\nShe was still beautiful, with family and friends,\ngrand daughters, sons\nHappy, content\nAnd I stared like I had at the lounge\nso long ago now\nAnd after a moment, she stared right back and\nmy soul exploded and impacted\nA flood of emotion, like a damn was broken\nand tears streamed down my cheeks\nand I feared if I showed them\nshe'd think me weak, so my sleeve stole them\n\nThen there I was, my mind a poem\nAnd in a moment I'll walk over\nTo tell her I love her, and that I've been waiting for her\nAnd we'll laugh at the fact that we're older\nThen we'll hold hands and take a stroll\nTime finally agreeing with our souls\nHer eyes, still green and gold\nWe finally made it home\n"
);
create_poem(
	kai,
	"I Bring a Life of That.. To an End",
	"I want to say so much\nBut sometimes words aren't enough\nSometimes our tongues can't dance or tap\nA rhythm that can express all that's within them\nFor at times, in a word can live\nNot just a thought, but a metropolis\nAnd if not magnified, they're dismissed\nAs just vowels grouped with consanants\n\nBut..\n\nI’m not a simple person, but I don’t think anyone is\nAn ant constructs a labyrinth without ever really knowing it\nAnd a spider forgets it’s artistry, and it’s the one who’s sewing it\nSo here’s to not knowing the supposed growing vastness\nAnd being one of many ants, victim of death and taxes\nAnd to the tapestry likely sewn due to all of the actions\nOf us people, and being fine without some purposes to back them\n\nSee, I feel cursed at times\nCursed as the disconnected\nIt’s as if, to my own life, I must remain objective\nLike every frame, of every second, dancing across my eyes\nAre just that, a show, and to my soul they’re merely televised\nAnd I’m stuck in this theater of the senses and cognition\nForced to view this life pass, like a projector full of pictures\nI want to fall in love, feel some connection with another soul\nBut maybe in another life, I think, if ever at all\n\nThere’s so much shame involved in everything I’ve done\nThey say mistakes make you who you are, but, I liked who I was\nSo here’s to the future, and here’s to you\nMaybe you can learn from what I’ve done in this pathetic human suit\n\nBut, maybe, with a chance\nWe’ll begin again\n"
);

create_poem(
	tino,
	"Narciso",
	"Debería empezar con las equivocaciones\nLas que hacen callo en los ojos\nLas que dejan la duda de dónde estaríamos nosotros sin las canciones\nSin las historias que he oído\nSin esa primera impresión\nSi no me hubieras querido\nSinergia en forma de algodones roídos\nMi alergia es una opinión más que dejó un rapto y los cajones movidos\nAtavíos aptos pa' dotarlos de olvido\nMe guardo el derecho a conciliar mi orfandad\nTodo lo demás lo convido\nY es que le has puesto mala cara a lo que más querías\nNarciso no hace nada desde hace días\nSe espabila y repara en los trastes y el ruido\nPuesto que si se para el contraste es tullido\nMejor seguir enganchado y tener dato bien recorrido\nAhí donde nos lleve charla y todos estos vatos vienen conmigo\nGuardó la lana al costado\n¿O sea por cuánto habrán apostado?\nMe vale madres tu amigo\nJodes conmigo, salen tostados\nAhhh... Fue el paredón del conflicto\nPuro ex convicto, están encendidos\n¿Qué vergas andan sondeando?\nSaldo espontáneo\nSalgo escondido\nSintió el horror de subida\nIba a correr por su vida\nNi vio el vergazo de salida\nLe dejo la lengua entumida\nSe quedó en puntos suspensivos\nAnsió un rescate elusivo\nLe dio un sopetón y se lo abanicó\nEntre el palidón y el sol se paniqueó\nSe vio entre tanto cliente exclusivo\nSalió del espanto oyendo explosivos\nCasi arrastrándose en la banqueta como erigiéndose entre los vivos\nVolvió a sus sentidos\nNo eligió entre nada\nLe dijo de todo, perdió los estribos\nSe había resignado a defender el robo y están coludidos\nSe había persignando en su mente y por fuera fue un lobo curtido\nPensando que 'vaya, de aquí lo que fuera a pasar pues jodido'\nY ahí se hizo de agallas sobre esa\nsordera que está percudido (Que está percudido)\nHerido de marañas y de otras esferas que\norbitan su estribo (Que orbitan su estribo)\nDejando apagada y oculta lo hoguera de una alternativa\nMuchas bendiciones, yeh\nMuy agradecidos, yeh\nSomos una verga, yeh\nChingos de efectivo, yeh\n(Eh, eh, eh, eh)\nLo vio clarito como algo que está en su mente\nColmando constantemente como una tormenta mítica\nSe hundió sumiso en su risa de formas crípticas\nGiza de dogma implícito\nEnigma que antoja mitigar\nTenía una cita con eso más temía que era el\neco de una mentira emitiendo energía centrífuga\nMe quedé hambriento cazando las embestidas\nTus pasos lentos, carajo qué bien vestías\nMaldijo el tiempo como árboles enredados\nComo alma que está en peligro\nEn peligro de ser cercada y pues\nFue cercenada como una pesquisa nueva\nComún aprendiz del ocio deseoso de ser su propio juez\nEntré en su logia y la cruz estaba invertida\nLos fondos se derretían y a lo hondo se oía algo de John Coltrane\nSirvió de guía y fue juntando las dimensiones\nSe entrometía aunque negando la intenciones\nMe dio su vida como una madre a su hijo\nComo una tarde hecha añicos sobre un arcabuz poliédrico\n¿Será que busca lo que un prófugo entregado, ce\ngado en las pistas obvias y el mismo sol que la trajo a mí?\nSe hizo cascajo al unísono y qué relajo que\npise el papel y bajo ese mismo no se le haga sonreír\nVolteó con prisa como un maletín cerrado\nY partió sin dudas como algo que había pasado\n"
);
create_poem(
	tino,
	"Leben",
	"Te voy a respetar, te voy a amar toda la vida, ma'\nTe debo tanto, has sido real toda la vida, ma'\nDónde estés yo voy a estar toda la vida, ma'\nY cuando ya no estes te voy a extrañar toda la vida, ma'\nMe ayudaste a ver que algo andaba mal con mi vida, ma'\nNo sé que hacer, no quiero estar mal toda la vida, ma'\nTú me criaste pa' irmelo a buscar todo en la vida, ma'\nTambién me enseñaste a nunca juzgar na' en la vida, ma'\nMe esfuerzo un buen, he sido capaz toda la vida, ma'\nMe siento bien fucking raps toda la vida, ma'\nVoy a a cargar en la espalda la cruz toda la vida, ma'\nY voy a dar la cara por el crew toda la vida, ma'\nIt's all good toda la vida, ma'\nHe sido cool, seré cool toda la vida, ma'\n¿Qué hay de ti, qué haces tú, que tal tu vida ma'?\nRetumba tu voz en mi latitud, no se me olvida na'\nTe quiero un chingo, le hablo luego tengo prisa, ma'\nVoy a sembrar luego a regar muchas sonrisas, ma'\nLe voy a poner amor a cada cosa ya lo dijo, ma'\nAy va esta pa' que se sienta orgullosa de su hijo, ma'\nEra un ciclo, ma'\nY un chingo de síntomas\nPara que andes tranquila, llevo un chingo sin tomar\nPorque no hay jefa más chida que la que vive en el uno\nNueve, siete, seis interior ocho al sur de la ciudad, ah\nQuisiera tener la misma edad toda la vida, ma'\nIgual llevármela relax toda la vida, ma'\nY cuando me harte de despuntar ahí les va\nOtra saga que lo acabo de pensar toda la vida, ma'\nLlevo ocultando este dolor toda la vida, ma'\nY me he hecho solo alguien mejor toda la vida, na'\nBajo tu protección no falto abrigo\nNi a quien admirar, no se diga más (¿Qué?)\nSí, pero no estoy listo para darte nietos todavía, ma'\nY créeme que cuando llegue el día\nVan a amarte igual que yo, todavía más\nMadre, te amo como haría un ladrón\nComo sana el dolor\nComo se ama a la luna\nTraté de hallar una pizca de maldad\nEn toda tu extensión y no encontré ninguna\nMadre eres bella y con ostentación\nComo se abre una flor, como la puesta al sol\nY hay tantas artes en tu corazón, obvio tú igual que yo\nSabías que el tiempo me daría la razón\n"
);
create_poem(
	tino,
	"La asimetría según Cardín",
	"¿Por qué no hablamos de amor?\nTe conocí cuando estaba en la escuela\nTenías los libros de Patti Smith\nY la pic de Goodfellas\nMe daba lo mismo quedarme o salir\nNo sabía lo que era esperar la quincena\nTodo era el recreo, galletas de Ritz\nNunca imagine que esto haría que te duela\nMe acuerdo que decía “no me pela”\nLuego le chingué tres meses y me fui a Venezuela\nPara cuando regresé me sentía en punto y on fire\nLuego te vi nuevamente y fui ese puto desastre\nPero hay que hablar de ti\nTú eras fiestera y directa\nTomándote a la ligera la mierda que te afecta\nPero siempre transparente y linda\nYou know how, se enciende y brinda\nNi Mao Tse-Tung\nNi Hare Krishna\nSólo sal del búnker y te vas de pinta\nLuego fueron varias madres distintas\nSiempre fui desaliñado y de repente me miras\nY el pinche freak que armó el curso extraescolar de filosofía\nY ahí fue cuando entendí dónde tenía que estar to' los días\nSupongo que la química se dio\nY que nuestras pláticas casi eran prácticas de terror\nY cuando me llevaste al cantón pa’ decirme que esa era mi casa\nMiré al cielo y le dije a Dios ¿Qué pasa?\n\nI don't need good luck\nI don't give a fuck\nTell me what you'd say\nHopefully someday i will, think about it\n\nMe acuerdo que me veía fijamente al espejo como ¿Me estoy cogiendo a esta morra que está hermosa y es listísima, wey?\nTratando de tomar la actitud así como, en realidad me sentía contento y se que tú también ¿Sabes?\nMe acuerdo que nos enamoramos y tu llevabas como un año sin decirlo, y fuimos a la playa, eso estuvo chida, y luego me caí de la azotea, eso estuvo de la verga\n\n¿Por qué dijimos adiós?\n¿Por qué no hablamos de todo eso?\nNo sé, teniendo sexo me siento más honesto\nTambién prefiero hacerlo a caernos beso a beso\nY haberte dejado ir hasta la fecha no lo doy por hecho\nLo intentamos y chambeé de lavaplatos\nLuego la cagamos y lo recicle en mis garabatos\nSe han ido los años bajo citas de Bolaño\nY no es que esté desolado\nSólo algo triste por algo…\nY al menos sé que no fue falta de amor\nPero vivir es algo que aún nos falta a los dos\n\nDe vez en cuando tendrías que hacerlo\nSoplarle al viento y llorarle al mar\nNo me arrepiento de haberlo hecho\nDe estar contento y sentirme mal\n¿Te has preguntado cómo me siento de estar consciente de que ya no estás?\nUn poco más fuerte y hasta acostumbrado\nYa que no di siempre lo que tu si das\nDe vez en cuando tendrías que hacerlo\nSoplarle al viento y llorarle al mar\nNo me arrepiento de haberlo hecho\nDe estar contento y sentirme mal\n¿Te has preguntado cómo me siento de estar consciente de que ya no estás?\nPues un poco cursi pero acostumbrado\nPorque yo sí te di lo que tú jamás\n"
);

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

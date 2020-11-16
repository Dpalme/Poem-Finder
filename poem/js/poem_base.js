class Poem {
	constructor(author, name, text) {
		this.author = author.name;
		this.language = author.language;
		this.name = name;
		this.text = text;
		author.add_poem(this.name);
		poems.push(this);
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

antonio = new Author("Antonio Machado", "ES");
ashauri = new Author("Ashauri", "ES");
charles = new Author("Charles Bukowski", "EN");
danah = new Author("Danah Kowdan", "EN");
gustavo = new Author("Gustavo Adolfo Bécquer", "ES");
jaime = new Author("Jaime Sabines", "ES");
kai = new Author("Kai Straw", "EN");
mario = new Author("Mario Benedetti", "ES");
sor = new Author("Sor Juana Inés de la Cruz", "ES");
neonpajamas = new Author("Neon Pajamas", "EN");
kathryn_scanlan = new Author("Kathryn Scanlan", "EN");

new Poem(kathryn_scanlan,
    "Happy Wife, Happy Life",
    "When my wife died I did not want to live, so when my heart stopped I thought, Good. But my daughter took me to the hospital and they opened my chest and found me in there.\nMy wife would say, Arguing with you is like talking to a bowl of potatoes! So I would argue with her sometimes just to make her happy.");

new Poem(neonpajamas,
    "Greetings",
    "Corporate bought the man\na greeting card but forgot\nwhat for, the whole office unsure\nif it was cancer or a wedding\nor a divorce or a local family\nmember beheading, so the card\nfeatured a simple flower on the front\nwhile the inside read,\n'Congratulations, we’re sorry,\nthank you for everything.'\nWhen the man arrived at work\nten minutes early on Monday morning\nhe read the card a few times\nand wept quietly at his desk,\nhis shoulders muted jackhammers.\nThe card now hangs on his mantel\nnext to photos of his newborn\nand an assortment of strongly\nscented candles. His wife’s favorite.");

new Poem(
    sor,
    "Verde embeleso de la vida humana",
    "Verde embeleso de la vida humana,\nloca esperanza, frenesí dorado,\nsueño de los despiertos intrincado,\ncomo de sueños, de tesoros vana;\n\nalma del mundo, senectud lozana,\ndecrépito verdor imaginado,\nel hoy de los dichosos esperado\ny de los desdichados el mañana:\n\nsigan tu sombra en busca de tu día\nlos que, con verdes vidrios por anteojos,\ntodo lo ven pintado a su deseo:\n\nque yo, más cuerda en la fortuna mía,\ntengo en entrambas manos ambos ojos\ny solamente lo que toco veo\n"
);
new Poem(
    sor,
    "Continúa el mismo asunto",
    "Feliciano me adora y le aborrezco;\nLisardo me aborrece y yo le adoro;\npor quien no me apetece ingrato, lloro,\ny al que me llora tierno, no apetezco:\n\na quien más me desdora, el alma ofrezco;\na quien me ofrece víctimas, desdoro;\ndesprecio al que enriquece mi decoro\ny al que le hace desprecios enriquezco;\n\nsi con mi ofensa al uno reconvengo,\nme reconviene el otro a mí ofendido\ny al padecer de todos modos vengo;\n\npues ambos atormentan mi sentido;\naquéste con pedir lo que no tengo\ny aquél con no tener lo que le pido"
);
new Poem(
    sor,
    "Contiene una fantasía contenta con amor decente",
    "Deténte, sombra de mi bien esquivo,\nimagen del hechizo que más quiero,\nbella ilusión por quien alegre muero,\ndulce ficción por quien penosa vivo.\n\nSi al imán de tus gracias atractivo\nsirve mi pecho de obediente acero,\n¿para qué me enamoras lisonjero,\nsi has de burlarme luego fugitivo?\n\nMas blasonar no puedes satisfecho\nde que triunfa de mí tu tiranía;\nque aunque dejas burlado el lazo estrecho\n\nque tu forma fantástica ceñía,\npoco importa burlar brazos y pecho\nsi te labra prisión mi fantasía"
);
new Poem(
    sor,
    "Diuturna enfermedad de la esperanza",
    "Diuturna enfermedad de la esperanza\nque así entretienes mis cansados años\ny en el fiel de los bienes y los daños\ntienes en equilibrio la balanza;\n\nque siempre suspendida en la tardanza\nde inclinarse, no dejan tus engaños\nque lleguen a excederse en los tamaños\nla desesperación o la confianza:\n\n¿quién te ha quitado el nombre de homicida\npues lo eres más severa, si se advierte\nque suspendes el alma entretenida\n\ny entre la infausta o la felice suerte\nno lo haces tú por conservar la vida\nsino por dar más dilatada muerte\n"
);
new Poem(
    sor,
    "Amor empieza por desasosiego",
    "Amor empieza por desasosiego,\nsolicitud, ardores y desvelos;\ncrece con riesgos, lances y recelos;\nsusténtase de llantos y de ruego.\n\nDoctrínanle tibiezas y despego,\nconserva el ser entre engañosos velos,\nhasta que con agravios o con celos\napaga con sus lágrimas su fuego.\n\nSu principio, su medio y fin es éste:\n¿pues por qué, Alcino, sientes el desvío\nde Celia, que otro tiempo bien te quiso?\n\n¿Qué razón hay de que dolor te cueste?\nPues no te engañó amor, Alcino mío,\nsino que llegó el término preciso"
);
new Poem(
    sor,
    "¿En perseguirme, mundo, qué interesas?",
    "¿En perseguirme, mundo, qué interesas?\n¿En qué te ofendo, cuando sólo intento\nponer bellezas en mi entendimiento\ny no mi entendimiento en las bellezas?\n\nYo no estimo tesoros ni riquezas,\ny así, siempre me causa más contento\nponer riquezas en mi entendimiento\nque no mi entendimiento en las riquezas.\n\nYo no estimo hermosura que vencida\nes despojo civil de las edades\nni riqueza me agrada fementida,\n\nteniendo por mejor en mis verdades\nconsumir vanidades de la vida\nque consumir la vida en vanidades"
);

new Poem(
    mario,
    "Asunción de ti",
    "1\n\nQuién hubiera creído que se hallaba\nsola en el aire, oculta,\ntu mirada.\nQuién hubiera creído esa terrible\nocasión de nacer puesta al alcance\nde mi suerte y mis ojos,\ny que tú y yo iríamos, despojados\nde todo bien, de todo mal, de todo,\na aherrojarnos en el mismo silencio,\na inclinarnos sobre la misma fuente\npara vernos y vernos\nmutuamente espiados en el fondo,\ntemblando desde el agua,\ndescubriendo, pretendiendo alcanzar\nquién eras tú detrás de esa cortina,\nquién era yo detrás de mí.\nY todavía no hemos visto nada.\nEspero que alguien venga, inexorable,\nsiempre temo y espero,\ny acabe por nombrarnos en un signo,\npor situarnos en alguna estación\npor dejarnos allí, como dos gritos\nde asombro.\nPero nunca será. Tú no eres ésa,\nyo no soy ése, ésos, los que fuimos\nantes de ser nosotros.\nEras sí pero ahora\nsuenas un poco a mí.\nEra sí pero ahora\nvengo un poco a ti.\nNo demasiado, solamente un toque,\nacaso un leve rasgo familiar,\npero que fuerce a todos a abarcarnos\na ti y a mí cuando nos piensen solos.\n\n\n2\n\nHemos llegado al crepúsculo neutro\ndonde el día y la noche se funden y se igualan.\nNadie podrá olvidar este descanso.\nPasa sobre mis párpados el cielo fácil\na dejarme los ojos vacíos de ciudad.\nNo pienses ahora en el tiempo de agujas,\nen el tiempo de pobres desesperaciones.\nAhora sólo existe el anhelo desnudo,\nel sol que se desprende de sus nubes de llanto,\ntu rostro que se interna noche adentro\nhasta sólo ser voz y rumor de sonrisa.\n\n3\n\nPuedes querer el alba\ncuando ames.\nPuedes\nvenir a reclamarte como eras.\nHe conservado intacto tu paisaje.\nLo dejaré en tus manos\ncuando éstas lleguen, como siempre,\nanunciándote.\nPuedes\nvenir a reclamarte como eras.\nAunque ya no seas tú.\nAunque mi voz te espere\nsola en su azar\nquemando\ny tu dueño sea eso y mucho más.\nPuedes amar el alba\ncuando quieras.\nMi soledad ha aprendido a ostentarte.\nEsta noche, otra noche\ntú estarás\ny volverá a gemir el tiempo giratorio\ny los labios dirán\nesta paz ahora esta paz ahora.\nAhora puedes venir a reclamarte,\npenetrar en tus sábanas de alegre angustia,\nreconocer tu tibio corazón sin excusas,\nlos cuadros persuadidos,\nsaberte aquí.\nHabrá para vivir cualquier huida\ny el momento de la espuma y el sol\nque aquí permanecieron.\nHabrá para aprender otra piedad\ny el momento del sueño y el amor\nque aquí permanecieron.\nEsta noche, otra noche\ntú estarás,\ntibia estarás al alcance de mis ojos,\nlejos ya de la ausencia que no nos pertenece.\nHe conservado intacto tu paisaje\npero no sé hasta dónde está intacto sin ti,\nsin que tú le prometas horizontes de niebla,\nsin que tú le reclames su ventana de arena.\nPuedes querer el alba cuando ames.\nDebes venir a reclamarte como eras.\nAunque ya no seas tú,\naunque contigo traigas\ndolor y otros milagros.\nAunque seas otro rostro\nde tu cielo hacia mí"
);
new Poem(
    mario,
    "Te quiero",
    "Tus manos son mi caricia\nmis acordes cotidianos\nte quiero porque tus manos\ntrabajan por la justicia\n\nsi te quiero es porque sos\nmi amor mi cómplice y todo\ny en la calle codo a codo\nsomos mucho más que dos\n\ntus ojos son mi conjuro\ncontra la mala jornada\nte quiero por tu mirada\nque mira y siembra futuro\n\ntu boca que es tuya y mía\ntu boca no se equivoca\nte quiero porque tu boca\nsabe gritar rebeldía\n\nsi te quiero es porque sos\nmi amor mi cómplice y todo\ny en la calle codo a codo\nsomos mucho más que dos\n\ny por tu rostro sincero\ny tu paso vagabundo\ny tu llanto por el mundo\nporque sos pueblo te quiero\n\ny porque amor no es aureola\nni cándida moraleja\ny porque somos pareja\nque sabe que no está sola\n\nte quiero en mi paraíso\nes decir que en mi país\nla gente viva feliz\naunque no tenga permiso\n\nsi te quiero es porque sos\nmi amor mi cómplice y todo\ny en la calle codo a codo\nsomos mucho más que dos"
);
new Poem(
    mario,
    "¿De qué se ríe?",
    "(Seré curioso)\n\nEn una exacta\nfoto del diario\nseñor ministro\ndel imposible\n\nvi en pleno gozo\ny en plena euforia\ny en plena risa\nsu rostro simple\n\nseré curioso\nseñor ministro\nde qué se ríe\nde qué se ríe\n\nde su ventana\nse ve la playa\npero se ignoran\nlos cantegriles\n\ntienen sus hijos\nojos de mando\npero otros tienen\nmirada triste\n\naquí en la calle\nsuceden cosas\nque ni siquiera\npueden decirse\n\nlos estudiantes\ny los obreros\nponen los puntos\nsobre las íes\n\npor eso digo\nseñor ministro\nde qué se ríe\nde qué se ríe\n\nusté conoce\nmejor que nadie\nla ley amarga\nde estos países\n\nustedes duros\ncon nuestra gente\npor qué con otros\nson tan serviles\n\ncómo traicionan\nel patrimonio\nmientras el gringo\nnos cobra el triple\n\ncómo traicionan\nusté y los otros\nlos adulones\ny los seniles\n\npor eso digo\nseñor ministro\nde qué se ríe\nde qué se ríe\n\naquí en la calle\nsus guardias matan\ny los que mueren\nson gente humilde\n\ny los que quedan\nllorando de rabia\nseguro piensan\nen el desquite\n\nallá en la celda\nsus hombres hacen\nsufrir al hombre\ny eso no sirve\n\ndespués de todo\nusté es el palo\nmayor de un barco\nque se va a pique\n\nseré curioso\nseñor ministro\nde qué se ríe\nde qué se ríe."
);

new Poem(
    antonio,
    "Amanecer de otoño",
    "Una larga carretera\nentre grises peñascales,\ny alguna humilde pradera\ndonde pacen negros toros. Zarzas, malezas,jarales.\n\nEstá la tierra mojada\npor las gotas del rocío,\ny la alameda dorada,\nhacia la curva del río.\nTras los montes de violeta\nquebrado el primer albor:\na la espalda la escopeta,\nentre sus galgos agudos, caminando un cazador."
);
new Poem(
    antonio,
    "Anoche cuando dormía",
    "Anoche cuando dormía\nsoñé ¡bendita ilusión!\nque una fontana fluía\ndentro de mi corazón.\nDí: ¿por qué acequia escondida,\nagua, vienes hasta mí,\nmanantial de nueva vida\nen donde nunca bebí?\n\nAnoche cuando dormía\nsoñé ¡bendita ilusión!\nque una colmena tenía\ndentro de mi corazón;\ny las doradas abejas\niban fabricando en él,\ncon las amarguras viejas,\nblanca cera y dulce miel.\n\nAnoche cuando dormía\nsoñé ¡bendita ilusión!\nque un ardiente sol lucía\ndentro de mi corazón.\nEra ardiente porque daba\ncalores de rojo hogar,\ny era sol porque alumbraba\ny porque hacía llorar.\n\nAnoche cuando dormía\nsoñé ¡bendita ilusión!\nque era Dios lo que tenía\ndentro de mi corazón."
);
new Poem(
    antonio,
    "El poeta",
    "Maldiciendo su destino\ncomo Glauco, el dios marino,\nmira, turbia la pupila\nde llanto, el mar, que le debe su blanca virgen Scyla.\n\nÉl sabe que un Dios más fuerte\ncon la sustancia inmortal está jugando a la muerte,\ncual niño bárbaro. Él piensa\nque ha de caer como rama que sobre las aguas flota,\nantes de perderse, gota\nde mar, en la mar inmensa.\n\nEn sueños oyó el acento de una palabra divina;\nen sueños se le ha mostrado la cruda ley diamantina,\nsin odio ni amor, y el frío\nsoplo del olvido sabe sobre un arenal de hastío.\n\nBajo las palmeras del oasis el agua buena\nmiró brotar de la arena;\ny se abrevó entre las dulces gacelas, y entre los fieros\nanimales carniceros...\n\nY supo cuánto es la vida hecha de sed y dolor.\nY fue compasivo para el ciervo y el cazador,\npara el ladrón y el robado,\npara el pájaro azorado,\npara el sanguinario azor.\n\nCon el sabio amargo dijo: Vanidad de vanidades,\ntodo es negra vanidad;\ny oyó otra voz que clamaba, alma de sus soledades:\nsólo eres tú, luz que fulges en el corazón, verdad.\n\nY viendo cómo lucían\nmiles de blancas estrellas,\npensaba que todas ellas\nen su corazón ardían.\n¡Noche de amor!\n\nY otra noche\nsintió la mala tristeza\nque enturbia la pura llama,\ny el corazón que bosteza,\ny el histrión que declama\n\nY dijo: Las galerías\ndel alma que espera están\ndesiertas, mudas, vacías:\nlas blancas sombras se van.\n\nY el demonio de los sueños abrió el jardín encantado de\nayer. ¡Cuán bello era!\n¡Qué hermosamente el pasado\nfingía la primavera,\ncuando del árbol de otoño estaba el fruto colgado,\nmísero fruto podrido,\nque en el hueco acibarado\nguarda el gusano escondido!\n¡Alma, que en vano quisiste ser más joven cada día,\narranca tu flor, la humilde flor de la melancolía!"
);
new Poem(
    antonio,
    "El viajero",
    "Está en la sala familiar, sombría,\ny entre nosotros, el querido hermano\nque en el sueño infantil de un claro día\nvimos partir hacia un país lejano.\n\nHoy tiene ya las sienes plateadas,\nun gris mechón sobre la angosta frente,\ny la fría inquietud de sus miradas\nrevela un alma casi toda ausente.\n\nDeshójanse las copas otoñales\ndel parque mustio y viejo.\nLa tarde, tras los húmedos cristales,\nse pinta, y en el fondo del espejo.\n\nEl rostro del hermano se ilumina\nsuavemente. ¿Floridos desengaños\ndorados por la tarde que declina?\n¿Ansias de vida nueva en nuevos años?\n\n¿Lamentará la juventud perdida?\nLejos quedó -la pobre loba- muerta.\n¿La blanca juventud nunca vivida\nteme, que ha de cantar ante su puerta?\n\n¿Sonríe el sol de oro\nde la tierra de un sueño no encontrada;\ny ve su nave hender el mar sonoro,\nde viento y luz la blanca vela hinchada?\n\nÉl ha visto las hojas otoñales,\namarillas, rodar, las olorosas\nramas del eucalipto, los rosales\nque enseñan otra vez sus blancas rosas\n\nY este dolor que añora o desconfía\nel temblor de una lágrima reprime,\ny un resto de viril hipocresía\nen el semblante pálido se imprime.\n\nSerio retrato en la pared clarea\ntodavía. Nosotros divagamos.\nEn la tristeza del hogar golpea\nel tictac del reloj. Todos callamos."
);
new Poem(
    antonio,
    "La noria",
    "La tarde caía\ntriste y polvorienta.\nEl agua cantaba\nsu copla plebeya\nen los cangilones\nde la noria lenta.\nSoñaba la mula\n¡pobre mula vieja!,\nal compás de sombra\nque en el agua suena.\nLa tarde caía\ntriste y polvorienta.\nYo no sé qué noble,\ndivino poeta,\nunió a la amargura\nde la eterna rueda\nla dulce armonía\ndel agua que sueña,\ny vendó tus ojos,\n¡pobre mula vieja!...\nMas sé que fue un noble,\ndivino poeta,\ncorazón maduro\nde sombra y de ciencia."
);
new Poem(
    antonio,
    "Mis poetas",
    "El primero es Gonzalo de Berceo llamado,\nGonzalo de Berceo, poeta y peregrino,\nque yendo en romería acaeció en un prado,\ny a quien los sabios pintan copiando un pergamino.\n\nTrovó a Santo Domingo, trovó a Santa María,\ny a San Millán, y a San Lorenzo y Santa Oria,\ny dijo: Mi dictado non es de juglaría;\nescrito lo tenemos; es verdadera historia.\n\nSu verso es dulce y grave; monótonas hileras\nde chopos invernales en donde nada brilla;\nrenglones como surcos en pardas sementeras,\ny lejos, las montañas azules de Castilia.\n\nÉl nos cuenta el repaire del romeo cansado;\nleyendo en santorales y libros de oración,\ncopiando historias viejas, nos dice su dictado,\nmientras le sale afuera la luz del corazón."
);
new Poem(
    antonio,
    "Noche de verano",
    "El primero es Gonzalo de Berceo llamado,\nGonzalo de Berceo, poeta y peregrino,\nque yendo en romería acaeció en un prado,\ny a quien los sabios pintan copiando un pergamino.\n\nTrovó a Santo Domingo, trovó a Santa María,\ny a San Millán, y a San Lorenzo y Santa Oria,\ny dijo: Mi dictado non es de juglaría;\nescrito lo tenemos; es verdadera historia.\n\nSu verso es dulce y grave; monótonas hileras\nde chopos invernales en donde nada brilla;\nrenglones como surcos en pardas sementeras,\ny lejos, las montañas azules de Castilia.\n\nÉl nos cuenta el repaire del romeo cansado;\nleyendo en santorales y libros de oración,\ncopiando historias viejas, nos dice su dictado,\nmientras le sale afuera la luz del corazón."
);
new Poem(
    antonio,
    "Noviembre 1913",
    "Un año más. El sembrador va echando\nla semilla en los surcos de la tierra.\nDos lentas yuntas aran,\nmientras pasan la nubes cenicientas\nensombreciendo el campo,\nlas pardas sementeras,\nlos grises olivares. Por el fondo\ndel valle del río el agua turbia lleva.\nTiene Cazorla nieve,\ny Mágina, tormenta,\nsu montera, Aznaitín. Hacia Granada,\nmontes con sol, montes de sol y piedra."
);
new Poem(
    antonio,
    "Recuerdo infantil",
    "Una tarde parda y fría\nde invierno. Los colegiales\nestudian. Monotonía\nde lluvia tras los cristales.\n\nEs la clase. En un cartel\nse representa a Caín\nfugitivo, y muerto Abel,\njunto a una mancha carmín.\n\nCon timbre sonoro y hueco\ntruena el maestro, un anciano\nmal vestido, enjuto y seco,\nque lleva un libro en la mano.\n\nY todo un coro infantil\nva cantando la lección:\n«mil veces ciento, cien mil;\nmil veces mil, un millón».\n\nUna tarde parda y fría\nde invierno. Los colegiales\nestudian. Monotonía\nde la lluvia en los cristales."
);
new Poem(
    antonio,
    "Sol de invierno",
    "Es mediodía. Un parque.\nInvierno. Blancas sendas;\nsimétricos montículos\ny ramas esqueléticas.\nBajo el invernadero,\nnaranjos en maceta,\ny en su tonel, pintado\nde verde, la palmera.\nUn viejecillo dice,\npara su capa vieja:\n«¡El sol, esta hermosura\nde sol!...» Los niños juegan.\nEl agua de la fuente\nresbala, corre y sueña\nlamiendo, casi muda,\nla verdinosa piedra."
);
new Poem(
    antonio,
    "Tus ojos me recuerdan",
    "Tus ojos me recuerdan\nlas noches de verano,\nnegra noche sin luna,\norilla al mar salado,\ny un chispear de estrellas\nde un cielo negro y bajo.\nTus ojos me recuerdan\nlas noches de verano.\nY tu morena cara,\nlos trigos requemados\nde un suspirar de fuego\nde los maduros campos.\n\nTus ojos me recuerdan\nlas noches de verano.\n\nDe tu morena cara,\nde tu soñar gitano,\nde tu mirar de sombra\nquiero llenar mi vaso.\nMe embriagaré una noche\nde un cielo negro y bajo,\npara cantar contigo,\norilla al mar salado,\nuna canción que deje\ncenizas en los labios...\nDe tu mirar de sombra\nquiero llenar mi vaso.\n\nTus ojos me recuerdan\nlas noches de verano"
);
new Poem(
    antonio,
    "Dice la esperanza: un día",
    "Dice la esperanza: un día\nla verás, si bien esperas.\nDice la desesperanza:\nsólo tu amargura es ella.\nLate, corazón... No todo\nse lo ha tragado la tierra"
);

new Poem(
    ashauri,
    "Pinche Loca - GODSPEED",
    "pinche loca\nme das un chingo de miedo\nme sacas papalotes del pecho\nqué será\nde todos los mensajes de amor\nque mandé antes de ver tu rostro enfermo\nlleno de ideas\nfuturos infiernos\nqué será\nde mis siguientes novias\ncuando entiendan que nada puede superar\ncómo me montas cuando cogemos\nquiero morir escuchando\nlo que te cuentan\nlas voces en tu cabeza\nya no me interesa\nel mundo en el que crecí\nquiero vivir\nen tus ideas pendejas\ny escuchar cómo no entiendes\nque nos estamos enamorando\nmientras cuentas anécdotas que no sucedieron\nmientras interrumpes nuestros besos\npara reclamarle a gente que no existe\nme das un chingo de miedo\nme sacas papalotes del pecho\nquiero que hoy me enloquezcas\nhasta que sólo pueda regresar\na donde estás\npara romper la ventana\ntaparte la boca\nllevarte por una nieve\ny gritarle al nevero\nella es\nla pinche loca de mi vida\ny no la entiendo\nsólo quiero verla sonriendo\nhoy me voy a casar contigo\naunque corra el peligro\nde que me asesines con tus besos\nque hacen olvidar el tiempo\nhoy me voy a casar contigo\naunque la tendencia mundial\nsea morir sin acompañante\nhoy me voy a casar contigo\naunque tenga que amarrarte\npara que no te hagas más daño\naunque me escupas\nlas pastillas llenas de palabras amorosas\nque te doy cuando no te calmas\nme cuesta decirlo\npero quiero dejar de entender el universo\ncontigo\nquiero cambiar las reglas de la realidad\ncontigo\nquiero caminar durante el otoño en la ciudad\ny gritar\nque una pinche loca me persigue\nque es lo mejor que me pudo pasar\nme das un chingo de miedo\nme sacas papalotes del pecho\nya no visitaré a mi familia\nya no le contestaré a mis amigos\nme iré contigo a un cuarto\npara hablar con las paredes\npara pelear por cosas que no pasaron\npara ver cómo se funden los focos\npara besarnos y entender que los locos\nsólo nos podemos amar entre nosotros"
);

new Poem(
    charles,
    "A Man",
    "George was lying in his trailer, flat on his back, watching a small portable T.V. His\ndinner dishes were undone, his breakfast dishes were undone, he needed a shave, and ash\nfrom his rolled cigarettes dropped onto his undershirt. Some of the ash was still burning.\nSometimes the burning ash missed the undershirt and hit his skin, then he cursed, brushing\nit away. There was a knock on the trailer door. He got slowly to his feet and answered the\ndoor. It was Constance. She had a fifth of unopened whiskey in a bag.\n'George, I left that son of a bitch, I couldn't stand that son of a bitch\nanymore.'\n'Sit down.'\nGeorge opened the fifth, got two glasses, filled each a third with whiskey, two thirds\nwith water. He sat down on the bed with Constance. She took a cigarette out of her purse\nand lit it. She was drunk and her hands trembled.\n'I took his damn money too. I took his damn money and split while he was at work.\nYou don't know how I've suffered with that son of a bitch.' '\nLemme have a smoke,' said George. She handed it to him and as she leaned near,\nGeorge put his arm around her, pulled her over and kissed her.\n'You son of a bitch,' she said, 'I missed you.'\n'I miss those good legs of yours , Connie. I've really missed those good\nlegs.'\n'You still like 'em?'\n'I get hot just looking.'\n'I could never make it with a college guy,' said Connie. 'They're too\nsoft, they're milk toast. And he kept his house clean. George , it was like having a maid.\nHe did it all. The place was spotless. You could eat beef stew right off the crapper. He\nwas antiseptic, that's what he was.'\n'Drink up, you'll feel better.'\n'And he couldn't make love.'\n'You mean he couldn't get it up?'\n'Oh he got it up, he got it up all the time. But he didn't know how to make a\nwoman happy, you know. He didn't know what to do. All that money, all that education, he\nwas useless.'\n'I wish I had a college education.'\n'You don't need one. You have everything you need, George.'\n'I'm just a flunky. All the shit jobs.'\n'I said you have everything you need, George. You know how to make a woman\nhappy.'\n'Yeh?'\n'Yes. And you know what else? His mother came around! His mother! Two or three\ntimes a week. And she'd sit there looking at me, pretending to like me but all the time\nshe was treating me like I was a whore. Like I was a big bad whore stealing her son away\nfrom her! Her precious Wallace! Christ! What a mess!' 'He claimed he loved me.\nAnd I'd say, 'Look at my pussy, Walter!' And he wouldn't look at my pussy. He said, 'I\ndon't want to look at that thing.' That thing! That's what he called it! You're not afraid\nof my pussy, are you, George?'\n'It's never bit me yet.' 'But you've bit it, you've nibbled it, haven't\nyou George?'\n'I suppose I have.'\n'And you've licked it , sucked it?'\n'I suppose so.'\n'You know damn well, George, what you've done.'\n'How much money did you get?'\n'Six hundred dollars.'\n'I don't like people who rob other people, Connie.'\n'That's why you're a fucking dishwasher. You're honest. But he's such an ass,\nGeorge. And he can afford the money, and I've earned it… him and his mother and his\nlove, his mother-love, his clean l;little wash bowls and toilets and disposal bags and\nbreath chasers and after shave lotions and his little hard-ons and his precious\nlovemaking. All for himself, you understand, all for himself! You know what a woman\nwants, George.'\n'Thanks for the whiskey, Connie. Lemme have another cigarette.'\nGeorge filled them up again. 'I missed your legs, Connie. I've really missed those\nlegs. I like the way you wear those high heels. They drive me crazy. These modern women\ndon't know what they're missing. The high heel shapes the calf, the thigh, the ass; it\nputs rhythm into the walk. It really turns me on!'\n'You talk like a poet, George. Sometimes you talk like that. You are one hell of a\ndishwasher.'\n'You know what I'd really like to do?'\n'What?'\n'I'd like to whip you with my belt on the legs, the ass, the thighs. I'd like to\nmake you quiver and cry and then when you're quivering and crying I'd slam it into you\npure love.'\n'I don't want that, George. You've never talked like that to me before. You've\nalways done right with me.'\n'Pull your dress up higher.'\n'What?'\n'Pull your dress up higher, I want to see more of your legs.'\n'You like my legs, don't you, George?'\n'Let the light shine on them!'\nConstance hiked her dress.\n'God Christ shit,' said George.\n'You like my legs?'\n'I love your legs!' Then George reached across the bed and slapped Constance\nhard across the face. Her cigarette flipped out of her mouth.\n'what'd you do that for?'\n'You fucked Walter! You fucked Walter!'\n'So what the hell?'\n'So pull your dress up higher!'\n'No!'\n'Do what I say!' George slapped again, harder. Constance hiked her skirt.\n'Just up to the panties!' shouted George. 'I don't quite want to see the\npanties!'\n'Christ, George, what's gone wrong with you?'\n'You fucked Walter!'\n'George, I swear, you've gone crazy. I want to leave. Let me out of here,\nGeorge!'\n'Don't move or I'll kill you!'\n'You'd kill me?'\n'I swear it!' George got up and poured himself a shot of straight whiskey,\ndrank it, and sat down next to Constance. He took the cigarette and held it against her\nwrist. She screamed. HE held it there, firmly, then pulled it away.\n'I'm a man , baby, understand that?'\n'I know you're a man , George.'\n'Here, look at my muscles!' George sat up and flexed both of his arms.\n'Beautiful, eh ,baby? Look at that muscle! Feel it! Feel it!'\nConstance felt one of the arms, then the other.\n'Yes, you have a beautiful body, George.'\n'I'm a man. I'm a dishwasher but I'm a man, a real man.'\n'I know it, George.' 'I'm not the milk shit you left.'\n'I know it.'\n'And I can sing, too. You ought to hear my voice.'\nConstance sat there. George began to sing. He sang 'Old man River.' Then he\nsang 'Nobody knows the trouble I've seen.' He sang 'The St. Louis\nBlues.' He Sang 'God Bless America,' stopping several times and laughing.\nThen he sat down next to Constance. He said, 'Connie, you have beautiful legs.'\nHe asked for another cigarette. He smoked it, drank two more drinks, then put his head\ndown on Connie's legs, against the stockings, in her lap, and he said, 'Connie, I\nguess I'm no good, I guess I'm crazy, I'm sorry I hit you, I'm sorry I burned you with\nthat cigarette.'\nConstance sat there. She ran her fingers through George's hair, stroking him, soothing\nhim. Soon he was asleep. She waited a while longer. Then she lifted his head and placed it\non the pillow, lifted his legs and straightened them out on the bed. She stood up, walked\nto the fifth, poured a jolt of good whiskey in to her glass, added a touch of water and\ndrank it sown. She walked to the trailer door, pulled it open, stepped out, closed it. She\nwalked through the backyard, opened the fence gate, walked up the alley under the one\no'clock moon. The sky was clear of clouds. The same sky full of clouds was up there. She got\nout on the boulevard and walked east and reached the entrance of The Blue Mirror. She\nwalked in, and there was Walter sitting alone and drunk at the end of the bar. She walked\nup and sat down next to him. 'Missed me, baby?' she asked. Walter looked up. He\nrecognized her. He didn't answer. He looked at the bartender and the bartender walked\ntoward them They all knew each other."
);
new Poem(
    charles,
    "Alone With Everybody",
    "the flesh covers the bone\nand they put a mind\nin there and\nsometimes a soul,\nand the women break\nvases against the walls\nand the men drink too\nmuch\nand nobody finds the\none\nbut keep\nlooking\ncrawling in and out\nof beds.\nflesh covers\nthe bone and the\nflesh searches\nfor more than\nflesh.\n\nthere's no chance\nat all:\nwe are all trapped\nby a singular\nfate.\n\nnobody ever finds\nthe one.\n\nthe city dumps fill\nthe junkyards fill\nthe madhouses fill\nthe hospitals fill\nthe graveyards fill\n\nnothing else\nfills."
);
new Poem(
    charles,
    "An Almost Made Up Poem",
    "I see you drinking at a fountain with tiny\nblue hands, no, your hands are not tiny\nthey are small, and the fountain is in France\nwhere you wrote me that last letter and\nI answered and never heard from you again.\nyou used to write insane poems about\nANGELS AND GOD, all in upper case, and you\nknew famous artists and most of them\nwere your lovers, and I wrote back, it’ all right,\ngo ahead, enter their lives, I’ not jealous\nbecause we’ never met. we got close once in\nNew Orleans, one half block, but never met, never\ntouched. so you went with the famous and wrote\nabout the famous, and, of course, what you found out\nis that the famous are worried about\ntheir fame –– not the beautiful young girl in bed\nwith them, who gives them that, and then awakens\nin the morning to write upper case poems about\nANGELS AND GOD. we know God is dead, they’ told\nus, but listening to you I wasn’ sure. maybe\nit was the upper case. you were one of the\nbest female poets and I told the publishers,\neditors, “ her, print her, she’ mad but she’\nmagic. there’ no lie in her fire.” I loved you\nlike a man loves a woman he never touches, only\nwrites to, keeps little photographs of. I would have\nloved you more if I had sat in a small room rolling a\ncigarette and listened to you piss in the bathroom,\nbut that didn’ happen. your letters got sadder.\nyour lovers betrayed you. kid, I wrote back, all\nlovers betray. it didn’ help. you said\nyou had a crying bench and it was by a bridge and\nthe bridge was over a river and you sat on the crying\nbench every night and wept for the lovers who had\nhurt and forgotten you. I wrote back but never\nheard again. a friend wrote me of your suicide\n3 or 4 months after it happened. if I had met you\nI would probably have been unfair to you or you\nto me. it was best like this."
);
new Poem(
    charles,
    "As The Poems Go",
    "as the poems go into the thousands you\nrealize that you've created very\nlittle.\nit comes down to the rain, the sunlight,\nthe traffic, the nights and the days of the\nyears, the faces.\nleaving this will be easier than living\nit, typing one more line now as\na man plays a piano through the radio,\nthe best writers have said very\nlittle\nand the worst,\nfar too much."
);
new Poem(
    charles,
    "Be Kind",
    "we are always asked\nto understand the other person's\nviewpoint\nno matter how\noutdated\nfoolish or\nobnoxious.\none is asked\nto view\ntheir total error\ntheir life-waste\nwith\nkindliness,\nespecially if they are\naged.\nbut age is the total of\nour doing.\nthey have aged\nbadly\nbecause they have\nlived\nout of focus,\nthey have refused to\nsee.\nnot their fault?\nwhose fault?\nmine?\nI am asked to hide\nmy viewpoint\nfrom them\nfor fear of their\nfear.\nage is no crime\nbut the shame\nof a deliberately\nwasted\nlife\namong so many\ndeliberately\nwasted\nlives\nis."
);
new Poem(
    charles,
    "A Smile To Remember",
    "we had goldfish and they circled around and around\nin the bowl on the table near the heavy drapes\ncovering the picture window and\nmy mother, always smiling, wanting us all\nto be happy, told me, 'be happy Henry!'\nand she was right: it's better to be happy if you\ncan\nbut my father continued to beat her and me several times a week while\nraging inside his 6-foot-two frame because he couldn't\nunderstand what was attacking him from within.\n\nmy mother, poor fish,\nwanting to be happy, beaten two or three times a\nweek, telling me to be happy: 'Henry, smile!\nwhy don't you ever smile?'\n\nand then she would smile, to show me how, and it was the\nsaddest smile I ever saw\n\none day the goldfish died, all five of them,\nthey floated on the water, on their sides, their\neyes still open,\nand when my father got home he threw them to the cat\nthere on the kitchen floor and we watched as my mother\nsmiled"
);
new Poem(
    charles,
    "The Japanese Wife",
    "O lord, he said, Japanese women,\nreal women, they have not forgotten,\nbowing and smiling\nclosing the wounds men have made;\nbut American women will kill you like they\ntear a lampshade,\nAmerican women care less than a dime,\nthey’ve gotten derailed,\nthey’re too nervous to make good:\nalways scowling, belly-aching,\ndisillusioned, overwrought;\nbut oh lord, say, the Japanese women:\nthere was this one,\nI came home and the door was locked\nand when I broke in she broke out the bread knife\nand chased me under the bed\nand her sister came\nand they kept me under that bed for two days,\nand when I came out, at last,\nshe didn’t mention attorneys,\njust said, you will never wrong me again,\nand I didn’t; but she died on me,\nand dying, said, you can wrong me now,\nand I did,\nbut you know, I felt worse then\nthan when she was living;\nthere was no voice, no knife,\nnothing but little Japanese prints on the wall,\nall those tiny people sitting by red rivers\nwith flying green birds,\nand I took them down and put them face down\nin a drawer with my shirts,\nand it was the first time I realized\nthat she was dead, even though I buried her;\nand someday I’ll take them all out again,\nall the tan-faced little people\nsitting happily by their bridges and huts\nand mountains—\nbut not right now,\nnot just yet"
);
new Poem(
    charles,
    "A Not So Good Night In The San Pedro Of The World",
    "it's unlikely that a decent poem is in me\ntonight\nand I understand that this is strictly my\nproblem\nand of no interest to you\nthat I sit here listening to a man playing\na piano on the radio\nand it's bad piano, both the playing and\nthe composition\nand again, this is of no interest to you\nas one of my cats,\na beautiful white with strange markings,\nsleeps in the bathroom.\n\n\nI have no ideas of what would be of interest to you\nbut I doubt that you would be of\ninterest to me, so don't get\nsuperior.\nin fact, come to think of it, you can\nkiss my ass.\n\nI continue to listen to the piano\nthis will not be a memorable night in my\nlife or yours.\n\nlet us celebrate the stupidity of our\nendurance"
);
new Poem(
    charles,
    "i wanted to overthrow the government but all i brought down was somebody's wife",
    "30 dogs, 20 men on 20 horses and one fox\nand look here, they write,\nyou are a dupe for the state, the church,\nyou are in the ego-dream,\nread your history, study the monetary system,\nnote that the racial war is 23,000 years old.\n\nwell, I remember 20 years ago, sitting with an old Jewish tailor,\nhis nose in the lamplight like a cannon sighted on the enemy; and\nthere was an Italian pharmacist who lived in an expensive apartment\nin the best part of town; we plotted to overthrow\na tottering dynasty, the tailor sewing buttons on a vest,\nthe Italian poking his cigar in my eye, lighting me up,\na tottering dynasty myself, always drunk as possible,\nwell-read, starving, depressed, but actually\na good young piece of ass would have solved all my rancor,\nbut I didn’t know this; I listened to my Italian and my Jew\nand I went out down dark alleys smoking borrowed cigarettes\nand watching the backs of houses come down in flames,\nbut somewhere we missed: we were not men enough,\nlarge or small enough,\nor we only wanted to talk or we were bored, so the anarchy\nfell through,\nand the Jew died and the Italian grew angry because I stayed\nwith his\nwife when he went down to the pharmacy; he did not care to have\nhis personal government overthrown, and she overthrew easy, and\nI had some guilt: the children were asleep in the other bedroom\nbut later I won $200 in a crap game and took a bus to New Orleans\nand I stood on the corner listening to the music coming from bars\nand then I went inside to the bars,\nand I sat there thinking about the dead Jew,\nhow all he did was sew on buttons and talk,\nand how he gave way although he was stronger than any of us\nhe gave way because his bladder would not go on,\nand maybe that saved Wall Street and Manhattan\nand the Church and Central Park West and Rome and the\nLeft Bank, but the pharmacist’s wife, she was nice,\nshe was tired of bombs under the pillow and hissing the Pope,\nand she had a very nice figure, very good legs,\nbut I guess she felt as I: that the weakness was not Government\nbut Man, one at a time, that men were never as strong as\ntheir ideas\nand that ideas were governments turned into men;\nand so it began on a couch with a spilled martini\nand it ended in the bedroom: desire, revolution,\nnonsense ended, and the shades rattled in the wind,\nrattled like sabers, cracked like cannon,\nand 30 dogs, 20 men on 20 horses chased one fox\nacross the fields under the sun,\nand I got out of bed and yawned and scratched my belly\nand knew that soon       very soon     I would have to get\nvery drunk      again"
);
new Poem(
    charles,
    "i can't stay in the same room with that woman for five minutes",
    "I went over the other day\nto pick up my daughter.\nher mother came out with workman’s\noveralls on.\nI gave her the child support money\nand she laid a sheaf of poems on me by one\nManfred Anderson.\nI read them.\nhe’s great, she said.\ndoes he send this shit out? I asked.\noh no, she said, Manfred wouldn’t do that.\nwhy?\nwell, I don’t know exactly.\nlisten, I said, you know all the poets who\ndon’t send their shit out.\nthe magazines aren’t ready for them, she said,\nthey’re too far advanced for publication.\noh for christ’s sake, I said, do you really\nbelieve that?\nyes, yes, I really believe that, she\nanswered.\nlook, I said, you don’t even have the kid ready\nyet. she doesn’t have her shoes on. can’t you\nput her shoes on?\nyour daughter is 8 years old, she said,\nshe can put her own shoes on.\nlisten, I said to my daughter, for christ’s sake\nwill you put your shoes on?\nManfred never screams, said her mother.\nOH HOLY JESUS CHRIST! I yelled\nyou see, you see? she said, you haven’t changed.\nwhat time is it? I asked.\n4:30. Manfred did submit some poems once, she said,\nbut they sent them back and he was terribly\nupset.\nyou’ve got your shoes on, I said to my daughter,\nlet’s go.\nher mother walked to the door with us.\nhave a nice day, she said.\nfuck off, I said.\nwhen she closed the door there was a sign pasted to\nthe outside. it said:\nSMILE.\nI didn’t.\nwe drove down Pico on the way in.\nI stopped outside the Red Ox.\nI’ll be right back, I told my daughter.\nI walked in, sat down, and ordered a scotch and\nwater. over the bar there was a little guy popping in and\nout of a door holding a very red, curved penis\nin his hand.\ncan’t\ncan’t you make him stop? I asked the barkeep.\ncan’t you shut that thing off?\nwhat’s the matter with you, buddy? he asked.\nI submit my poems to the magazines, I said.\nyou submit your poems to the magazines? he asked.\nyou are god damned right I do, I said.\nI finished my drink and got back to the car.\nI drove down Pico Boulevard.\nthe remainder of the day was bound to be better."
);
new Poem(
    charles,
    "a 340 dollar horse and a hundred dollar whore",
    "don’t ever get the idea I am a poet; you can see me\nat the racetrack any day half drunk\nbetting quarters, sidewheelers and straight thoroughs,\nbut let me tell you, there are some women there\nwho go where the money goes, and sometimes when you\nlook at these whores these onehundreddollar whores\nyou wonder sometimes if nature isn’t playing a joke\ndealing out so much breast and ass and the way\nit’s all hung together, you look and you look and\nyou look and you can’t believe it; there are ordinary women\nand then there is something else that wants to make you\ntear up paintings and break albums of Beethoven\nacross the back of the john; anyhow, the season\nwas dragging and the big boys were getting busted,\nall the non-pros, the producers, the cameraman,\nthe pushers of Mary, the fur salesman, the owners\nthemselves, and Saint Louie was running this day:\na sidewheeler that broke when he got in close;\nhe ran with his head down and was mean and ugly\nand 35 to 1, and I put a ten down on him.\nthe driver broke him wide\ntook him out by the fence where he’d be alone\neven if he had to travel four times as far,\nand that’s the way he went it\nall the way by the outer fence\ntraveling two miles in one\nand he won like he was mad as hell\nand he wasn’t even tired,\nand the biggest blonde of all\nall ass and breast, hardly anything else\nwent to the payoff window with me.\n\nthat night I couldn’t destroy her\nalthough the springs shot sparks\nand they pounded on the walls.\nlater she sat there in her slip\ndrinking Old Grandad\nand she said\nwhat’s a guy like you doing\nliving in a dump like this?\nand I said\nI’m a poet\n\nand she threw back her beautiful head and laughed.\n\nyou? you . . . a poet?\n\nI guess you’re right, I said, I guess you’re right.\n\nbut still she looked good to me, she still looked good,\nand all thanks to an ugly horse\nwho wrote this poem."
);

new Poem(
    kai,
    "sexlovesoul",
    "She was alone across the room,\nthe light looming was blue,\nmixed with reds, flashing in between the two\nShe was beautiful\nEyes gold and green, sexually\ngazing across her menu, deciding between\nsome oriental entrees, I can't pronounce the names\nBut I watched her\nUnabashedly attracted\nHer nose perfect,\nand those eyes, incredibly symmetric\nI begged for that electric\nmoment within the hectic lounge,\nthe second when our eyes connect\nand then it happened\nMy soul exploded and impacted\nHeart stopped, then began,\na defibulating practice,\nand after this second of magic the\nconnection was broken\nby a waitress crossing the path of us\n\nThe music was a cool mixture\nof jazz and the electronic\nwhich is passively ironic\nthe uncontrolled coupled with something\nprogrammed, robotic\n\nHer chew was cute, unique\nand oddly magnetic to me\n\nA year later we're arguing in a bathroom\nover toothpaste, or something that didn't matter\nwe escaped in sex, because we made more sense that way\nbreathing in unison, locking eyes,\na home away from the confusion of fights\nand odd competition, our minds would dismiss\nand let our souls intertwine\nlike vines.. bougainvillea\n\nWe danced like outlaws being shot by revolvers\nto electronic concoctions\nThen time slowed like the oxen\nand we kissed, that night at the lounge\nStrangers of body, souls finally combining\nafter years of fate's magenetizing\nFlawless lips\nthe softest of skin\nand intellect proven through conversation\nThis is sex to men of cognition\n\nI heard she was married, years later\nafter we dated, with a house and a family\nAnd I'd lie if I said I didn't think of her daily\nthough I myself got married\nIt's scary\nLosing love,\nthen trying to find someone\nknowing full well they won't measure up\n\nMy skin lost pigment as life unfolded\nMy hair grew grey after my wife divorced me\nWe're still friends, and our kids were supportive\nI think they knew it wasn't love\n\nThen I saw her, and I was old then\nI had a cane and my back was bent\nShe was still beautiful, with family and friends,\ngrand daughters, sons\nHappy, content\nAnd I stared like I had at the lounge\nso long ago now\nAnd after a moment, she stared right back and\nmy soul exploded and impacted\nA flood of emotion, like a damn was broken\nand tears streamed down my cheeks\nand I feared if I showed them\nshe'd think me weak, so my sleeve stole them\n\nThen there I was, my mind a poem\nAnd in a moment I'll walk over\nTo tell her I love her, and that I've been waiting for her\nAnd we'll laugh at the fact that we're older\nThen we'll hold hands and take a stroll\nTime finally agreeing with our souls\nHer eyes, still green and gold\nWe finally made it home"
);
new Poem(
    kai,
    "I Bring a Life of That.. To an End",
    "I want to say so much\nBut sometimes words aren't enough\nSometimes our tongues can't dance or tap\nA rhythm that can express all that's within them\nFor at times, in a word can live\nNot just a thought, but a metropolis\nAnd if not magnified, they're dismissed\nAs just vowels grouped with consanants\n\nBut..\n\nI’m not a simple person, but I don’t think anyone is\nAn ant constructs a labyrinth without ever really knowing it\nAnd a spider forgets it’s artistry, and it’s the one who’s sewing it\nSo here’s to not knowing the supposed growing vastness\nAnd being one of many ants, victim of death and taxes\nAnd to the tapestry likely sewn due to all of the actions\nOf us people, and being fine without some purposes to back them\n\nSee, I feel cursed at times\nCursed as the disconnected\nIt’s as if, to my own life, I must remain objective\nLike every frame, of every second, dancing across my eyes\nAre just that, a show, and to my soul they’re merely televised\nAnd I’m stuck in this theater of the senses and cognition\nForced to view this life pass, like a projector full of pictures\nI want to fall in love, feel some connection with another soul\nBut maybe in another life, I think, if ever at all\n\nThere’s so much shame involved in everything I’ve done\nThey say mistakes make you who you are, but, I liked who I was\nSo here’s to the future, and here’s to you\nMaybe you can learn from what I’ve done in this pathetic human suit\n\nBut, maybe, with a chance\nWe’ll begin again"
);

new Poem(
    danah,
    "Bilingualism",
    "For the words that are left untranslated\nI recognize your existence\nAs I try to conjure up\nyour meaning\nI recognize what it feels to be in transition\nFrom\nWanting to be decoded to being left unexplored\nAlways in ultimate in-betweens\nThe pathway of existence is narrowing\nBecause the search for multiple definitions of what it is to just be\nIs hard to grasp\nWith a polarizing tongue"
);

new Poem(
    jaime,
    "Me encanta Dios",
    "Me encanta Dios. Es un viejo magnífico que no se toma en serio. A él le gusta jugar y juega, y a veces se le pasa la mano y nos rompe una pierna o nos aplasta definitivamente. Pero esto sucede porque es un poco cegatón y bastante torpe con las manos.\n\nNos ha enviado a algunos tipos excepcionales como Buda, o Cristo, o Mahoma, o mi tía Chofi, para que nos digan que nos portemos bien. Pero esto a él no le preocupa mucho: nos conoce. Sabe que el pez grande se traga al chico, que la lagartija grande se traga a la pequeña, que el hombre se traga al hombre. Y por eso inventó la muerte: para que la vida -no tú ni yo- la vida, sea para siempre.\n\nAhora los científicos salen con su teoría del Big Bang... Pero ¿qué importa si el universo se expande interminablemente o se contrae? Esto es asunto sólo para agencias de viajes.\n\nA mí me encanta Dios. Ha puesto orden en las galaxias y distribuye bien el tránsito en el camino de las hormigas. Y es tan juguetón y travieso que el otro día descubrí que ha hecho -frente al ataque de los antibióticos- ¡bacterias mutantes!\n\nViejo sabio o niño explorador, cuando deja de jugar con sus soldaditos de plomo y de carne y hueso, hace campos de flores o pinta el cielo de manera increíble.\n\nMueve una mano y hace el mar, y mueve la otra y hace el bosque. Y cuando pasa por encima de nosotros, quedan las nubes, pedazos de su aliento.\n\nDicen que a veces se enfurece y hace terremotos, y manda tormentas, caudales de fuego, vientos desatados, aguas alevosas, castigos y desastres. Pero esto es mentira. Es la tierra que cambia -y se agita y crece- cuando Dios se aleja.\n\nDios siempre está de buen humor. Por eso es el preferido de mis padres, el escogido de mis hijos, el más cercano de mis hermanos, la mujer más amada, el perrito y la pulga, la piedra más antigua, el pétalo más tierno, el aroma más dulce, la noche insondable, el borboteo de luz, el manantial que soy.\n\nA mí me gusta, a mí me encanta Dios. Que Dios bendiga a Dios."
);

new Poem(
    gustavo,
    "Amor Eterno",
    "Podrá nublarse el sol eternamente;\nPodrá secarse en un instante el mar;\nPodrá romperse el eje de la tierra\nComo un débil cristal.\n¡todo sucederá! Podrá la muerte\nCubrirme con su fúnebre crespón;\nPero jamás en mí podrá apagarse\nLa llama de tu amor."
);
new Poem(
    gustavo,
    "I",
    "Yo sé un himno gigante y extraño\nque anuncia en la noche del alma una aurora,\ny estas páginas son de ese himno\ncadencias que el aire dilata en las sombras.\n\nYo quisiera escribirle, del hombre\ndomando el rebelde, mezquino idioma,\ncon palabras que fuesen a un tiempo\nsuspiros y risas, colores y notas.\n\nPero en vano es luchar, que no hay cifra\ncapaz de encerrarle; y apenas, ¡oh, hermosa!,\nsi, teniendo en mis manos las tuyas,\npudiera, al oído, cantártelo a solas."
);
new Poem(
    gustavo,
    "II",
    "Saeta que voladora\ncruza, arrojada al azar,\ny que no se sabe dónde\ntemblando se clavará;\n\nhoja que del árbol seca\narrebata el vendaval,\nsin que nadie acierte el surco\ndonde al polvo volverá;\n\ngigante ola que el viento\nriza y empuja en el mar,\ny rueda y pasa, y se ignora\nqué playa buscando va;\n\nluz que en cercos temblorosos\nbrilla, próxima a expirar,\ny que no se sabe de ellos\ncuál el último será;\n\neso soy yo, que al acaso\ncruzo el mundo sin pensar\nde dónde vengo ni a dónde\nmis pasos me llevarán."
);
new Poem(
    gustavo,
    "III",
    "Sacudimiento extraño\nque agita las ideas,\ncomo huracán que empuja\nlas olas en tropel.\n\nMurmullo que en el alma\nse eleva y va creciendo\ncomo volcán que sordo\nanuncia que va a arder.\n\nDeformes siluetas\nde seres imposibles;\npaisajes que aparecen\ncomo al través de un tul.\n\nColores que fundiéndose\nremedan en el aire\nlos átomos del iris\nque nadan en la luz.\n\nIdeas sin palabras,\npalabras sin sentido;\ncadencias que no tienen\nni ritmo ni compás.\n\nMemorias y deseos\nde cosas que no existen;\naccesos de alegría,\nimpulsos de llorar.\n\nActividad nerviosa\nque no halla en qué emplearse;\nsin riendas que le guíen,\ncaballo volador.\n\nLocura que el espíritu\nexalta y desfallece,\nembriaguez divina\ndel genio creador...\nTal es la inspiración.\n\nGigante voz que el caos\nordena en el cerebro\ny entre las sombras hace\nla luz aparecer.\n\nBrillante rienda de oro\nque poderosa enfrena\nde la exaltada mente\nel volador corcel.\n\nHilo de luz que en haces\nlos pensamientos ata;\nsol que las nubes rompe\ny toca en el zenít.\n\nInteligente mano\nque en un collar de perlas\nconsigue las indóciles\npalabras reunir.\n\nArmonioso ritmo\nque con cadencia y número\nlas fugitivas notas\nencierra en el compás.\n\nCincel que el bloque muerde\nla estatua modelando,\ny la belleza plástica\nañade a la ideal.\n\nAtmósfera en que giran\ncon orden las ideas,\ncual átomos que agrupa\nrecóndita atracción.\n\nRaudal en cuyas ondas\nsu sed la fiebre apaga,\noasis que al espíritu\ndevuelve su vigor...\nTal es nuestra razón.\n\nCon ambas siempre en lucha\ny de ambas vencedor,\ntan sólo al genio es dado\na un yugo atar las dos."
);
new Poem(
    gustavo,
    "IV",
    "No digáis que, agotado su tesoro,\nde asuntos falta, enmudeció la lira;\npodrá no haber poetas; pero siempre\nhabrá poesía.\n\nMientras las ondas de la luz al beso\npalpiten encendidas,\nmientras el sol las desgarradas nubes\nde fuego y oro vista,\nmientras el aire en su regazo lleve\nperfumes y armonías,\nmientras haya en el mundo primavera,\n¡habrá poesía!\n\nMientras la ciencia a descubrir no alcance\nlas fuentes de la vida,\ny en el mar o en el cielo haya un abismo\nque al cálculo resista,\nmientras la humanidad siempre avanzando\nno sepa a dó camina,\nmientras haya un misterio para el hombre,\n¡habrá poesía!\n\nMientras se sienta que se ríe el alma,\nsin que los labios rían;\nmientras se llore, sin que el llanto acuda\na nublar la pupila;\nmientras el corazón y la cabeza\nbatallando prosigan,\nmientras haya esperanzas y recuerdos,\n¡habrá poesía!\n\nMientras haya unos ojos que reflejen\nlos ojos que los miran,\nmientras responda el labio suspirando\nal labio que suspira,\nmientras sentirse puedan en un beso\ndos almas confundidas,\nmientras exista una mujer hermosa,\n¡habrá poesía!"
);
new Poem(
    gustavo,
    "V",
    "Espíritu sin nombre,\nindefinible esencia,\nyo vivo con la vida\nsin formas de la idea.\n\nYo nado en el vacío,\ndel sol tiemblo en la hoguera,\npalpito entre las sombras\ny floto con las nieblas.\n\nYo soy el fleco de oro\nde la lejana estrella,\nyo soy de la alta luna\nla luz tibia y serena.\n\nYo soy la ardiente nube\nque en el ocaso ondea,\nyo soy del astro errante\nla luminosa estela.\n\nYo soy nieve en las cumbres,\nsoy fuego en las arenas,\nazul onda en los mares\ny espuma en las riberas.\n\nEn el laúd, soy nota,\nperfume en la violeta,\nfugaz llama en las tumbas\ny en las ruïnas yedra.\n\nYo atrueno en el torrente\ny silbo en la centella,\ny ciego en el relámpago\ny rujo en la tormenta.\n\nYo río en los alcores,\nsusurro en la alta yerba,\nsuspiro en la onda pura\ny lloro en la hoja seca.\n\nYo ondulo con los átomos\ndel humo que se eleva\ny al cielo lento sube\nen espiral inmensa.\n\nYo, en los dorados hilos\nque los insectos cuelgan\nme mezco entre los árboles\nen la ardorosa siesta.\n\nYo corro tras las ninfas\nque, en la corriente fresca\ndel cristalino arroyo,\ndesnudas juguetean.\n\nYo, en bosques de corales\nque alfombran blancas perlas,\npersigo en el océano\nlas náyades ligeras.\n\nYo, en las cavernas cóncavas\ndo el sol nunca penetra,\nmezclándome a los gnomos,\ncontemplo sus riquezas.\n\nYo busco de los siglos\nlas ya borradas huellas,\ny sé de esos imperios\nde que ni el nombre queda.\n\nYo sigo en raudo vértigo\nlos mundos que voltean,\ny mi pupila abarca\nla creación entera.\n\nYo sé de esas regiones\na do un rumor no llega,\ny donde informes astros\nde vida un soplo esperan.\n\nYo soy sobre el abismo\nel puente que atraviesa,\nyo soy la ignota escala\nque el cielo une a la tierra,\n\nYo soy el invisible\nanillo que sujeta\nel mundo de la forma\nal mundo de la idea.\n\nYo, en fin, soy ese espíritu,\ndesconocida esencia,\nperfume misterioso\nde que es vaso el poeta."
);
new Poem(
    gustavo,
    "VI",
    "Como la brisa que la sangre orea\nsobre el oscuro campo de batalla,\ncargada de perfumes y armonías\nen el silencio de la noche vaga,\n\nSímbolo del dolor y la ternura,\ndel bardo inglés en el horrible drama,\nla dulce Ofelia, la razón perdida,\ncogiendo flores y cantando pasa."
);
new Poem(
    gustavo,
    "VII",
    "Del salón en el ángulo oscuro,\nde su dueña tal vez olvidada,\nsilenciosa y cubierta de polvo\nveíase el arpa.\n\n¡Cuánta nota dormía en sus cuerdas\ncomo el pájaro duerme en las ramas,\nesperando la mano de nieve\nque sabe arrancarlas!\n\n¡Ay! pensé; ¡cuántas veces el genio\nasí duerme en el fondo del alma,\ny una voz, como Lázaro, espera\nque le diga: «¡Levántate y anda!»."
);
new Poem(
    gustavo,
    "VIII",
    "Cuando miro el azul horizonte\nperderse a lo lejos,\nal través de una gasa de polvo\ndorado e inquieto,\nme parece posible arrancarme\ndel mísero suelo\ny flotar con la niebla dorada\nen átomos leves\ncual ella deshecho.\n\nCuando miro de noche en el fondo\noscuro del cielo\nlas estrellas temblar como ardientes\npupilas de fuego,\nme parece posible a do brillan\nsubir en un vuelo\ny anegarme en su luz, y con ellas\nen lumbre encendido\nfundirme en un beso.\n\nEn el mar de la duda en que bogo\nni aun sé lo que creo;\nsin embargo estas ansias me dicen\nque yo llevo algo\ndivino aquí dentro."
);
new Poem(
    gustavo,
    "IX",
    "Besa el aura que gime blandamente\nlas leves ondas que jugando riza;\nel sol besa a la nube en occidente\ny de púrpura y oro la matiza;\nla llama en derredor del tronco ardiente\npor besar a otra llama se desliza;\ny hasta el sauce, inclinándose a su peso,\nal río que le besa, vuelve un beso."
);
new Poem(
    gustavo,
    "X",
    "Los invisibles átomos del aire\nen derredor palpitan y se inflaman,\nel cielo se deshace en rayos de oro,\nla tierra se estremece alborozada.\n\nOigo flotando en olas de armonías,\nrumor de besos y batir de alas;\nmis párpados se cierran... ¿Qué sucede?\n¿Dime?\n¡Silencio! ¡Es el amor que pasa!"
);
new Poem(
    gustavo,
    "XI",
    "Yo soy ardiente, yo soy morena,\nyo soy el símbolo de la pasión,\nde ansia de goces mi alma está llena.\n¿A mí me buscas?\nNo es a ti, no.\n\nMi frente es pálida, mis trenzas de oro:\npuedo brindarte dichas sin fin,\nyo de ternuras guardo un tesoro.\n¿A mí me llamas?\nNo, no es a ti.\n\nYo soy un sueño, un imposible,\nvano fantasma de niebla y luz;\nsoy incorpórea, soy intangible:\nno puedo amarte.\n¡Oh ven, ven tú"
);
new Poem(
    gustavo,
    "XII",
    "Porque son, niña, tus ojos\nverdes como el mar, te quejas;\nverdes los tienen las náyades,\nverdes los tuvo Minerva,\ny verdes son las pupilas\nde las hourís del Profeta.\n\nEl verde es gala y ornato\ndel bosque en la primavera;\nentre sus siete colores\nbrillante el Iris lo ostenta,\nlas esmeraldas son verdes;\nverde el color del que espera,\ny las ondas del océano\ny el laurel de los poetas.\n\nEs tu mejilla temprana\nrosa de escarcha cubierta,\nen que el carmín de los pétalos\nse ve al través de las perlas.\n\nY sin embargo,\nsé que te quejas\nporque tus ojos\ncrees que la afean,\npues no lo creas.\n\nQue parecen sus pupilas\nhúmedas, verdes e inquietas,\ntempranas hojas de almendro\nque al soplo del aire tiemblan.\n\nEs tu boca de rubíes\npurpúrea granada abierta\nque en el estío convida\na apagar la sed con ella,\n\nY sin embargo,\nsé que te quejas\nporque tus ojos\ncrees que la afean,\npues no lo creas.\n\nQue parecen, si enojada\ntus pupilas centellean,\nlas olas del mar que rompen\nen las cantábricas peñas.\n\nEs tu frente que corona,\ncrespo el oro en ancha trenza,\nnevada cumbre en que el día\nsu postrera luz refleja.\n\nY sin embargo,\nsé que te quejas\nporque tus ojos\ncrees que la afean:\npues no lo creas.\n\nQue entre las rubias pestañas,\njunto a las sienes semejan\nbroches de esmeralda y oro\nque un blanco armiño sujetan.\n\n*\n\nPorque son, niña, tus ojos\nverdes como el mar te quejas;\nquizás, si negros o azules\nse tornasen, lo sintieras."
);
new Poem(
    gustavo,
    "XIII",
    "Tu pupila es azul y, cuando ríes,\nsu claridad süave me recuerda\nel trémulo fulgor de la mañana\nque en el mar se refleja.\n\nTu pupila es azul y, cuando lloras,\nlas transparentes lágrimas en ella\nse me figuran gotas de rocío\nsobre una vïoleta.\n\nTu pupila es azul, y si en su fondo\ncomo un punto de luz radia una idea,\nme parece en el cielo de la tarde\nuna perdida estrella."
);
new Poem(
    gustavo,
    "XIV",
    "Te vi un punto y, flotando ante mis ojos,\nla imagen de tus ojos se quedó,\ncomo la mancha oscura orlada en fuego\nque flota y ciega si se mira al sol.\n\nAdondequiera que la vista clavo,\ntorno a ver las pupilas llamear;\nmas no te encuentro a ti, que es tu mirada,\nunos ojos, los tuyos, nada más.\n\nDe mi alcoba en el ángulo los miro\ndesasidos fantásticos lucir;\ncuando duermo los siento que se ciernen,\nde par en par abiertos sobre mí.\n\nYo sé que hay fuegos fatuos que en la noche\nllevan al caminante a perecer;\nyo me siento arrastrado por tus ojos,\npero adónde me arrastran, no lo sé."
);
new Poem(
    gustavo,
    "XV",
    "Cendal flotante de leve bruma,\nrizada cinta de blanca espuma,\nrumor sonoro\nde arpa de oro,\nbeso del aura, onda de luz:\neso eres tú.\n\nTú, sombra aérea, que cuantas veces\nvoy a tocarte te desvaneces\n¡como la llama, como el sonido,\ncomo la niebla, como el gemido\ndel lago azul!\n\nEn mar sin playas onda sonante,\nen el vacío cometa errante,\nlargo lamento\ndel ronco viento,\nansia perpetua de algo mejor,\n¡eso soy yo!\n\nYo, que a tus ojos, en mi agonía,\nlos ojos vuelvo de noche y día;\nyo, que incansable corro y demente\n¡tras una sombra, tras la hija ardiente\nde una visión!"
);
new Poem(
    gustavo,
    "XVI",
    "Si al mecer las azules campanillas\nde tu balcón,\ncrees que suspirando pasa el viento\nmurmurador,\nsabe que, oculto entre las verdes hojas,\nsuspiro yo.\n\nSi al resonar confuso a tus espaldas\nvago rumor,\ncrees que por tu nombre te ha llamado\nlejana voz,\nsabe que, entre las sombras que te cercan,\nte llamo yo.\n\nSi se turba medroso en la alta noche\ntu corazón,\nal sentir en tus labios un aliento\nabrasador,\nsabe que, aunque invisible, al lado tuyo,\nrespiro yo."
);
new Poem(
    gustavo,
    "XVII",
    "Hoy la tierra y los cielos me sonríen,\nhoy llega al fondo de mi alma el sol,\nhoy la he visto... La he visto y me ha mirado...\n¡Hoy creo en Dios"
);
new Poem(
    gustavo,
    "XVIII",
    "Fatigada del baile,\nencendido el color, breve el aliento,\napoyada en mi brazo,\ndel salón se detuvo en un extremo.\n\nEntre la leve gasa\nque levantaba el palpitante seno,\nuna flor se mecía\nen compasado y dulce movimiento.\n\nComo en cuna de nácar\nque empuja el mar y que acaricia el céfiro,\ntal vez allí dormía\nal soplo de sus labios entreabiertos.\n\n¡Oh, quién así ?pensaba?\ndejar pudiera deslizarse el tiempo!\n¡Oh, si las flores duermen,\nqué dulcísimo sueño!"
);
new Poem(
    gustavo,
    "XIX",
    "Cuando sobre el pecho inclinas\nla melancólica frente,\nuna azucena tronchada\nme pareces.\n\nPorque al darte la pureza\nde que es símbolo celeste,\ncomo a ella te hizo Dios\nde oro y nieve."
);
new Poem(
    gustavo,
    "XX",
    "Sabe, si alguna vez tus labios rojos\nquema invisible atmósfera abrasada,\nque el alma que hablar puede con los ojos,\ntambién puede besar con la mirada"
);
new Poem(
    gustavo,
    "XXI",
    "¿Qué es poesía?, dices, mientras clavas\nen mi pupila tu pupila azul,\n¡Qué es poesía! ¿Y tú me lo preguntas?\nPoesía... eres tú"
);
new Poem(
    gustavo,
    "XXII",
    "¿Cómo vive esa rosa que has prendido\njunto a tu corazón?\nNunca hasta ahora contemplé en el mundo\njunto al volcán la flor."
);
new Poem(
    gustavo,
    "XXIII",
    "Por una mirada, un mundo;\npor una sonrisa, un cielo;\npor un beso... ¡Yo no sé\nqué te diera por un beso"
);
new Poem(
    gustavo,
    "XXIV",
    "Dos rojas lenguas de fuego\nque a un mismo tronco enlazadas\nse aproximan y, al besarse,\nforman una sola llama.\n\nDos notas que del laúd\na un tiempo la mano arranca,\ny en el espacio se encuentran\ny armoniosas se abrazan.\n\nDos olas que vienen juntas\na morir sobre una playa\ny que al romper se coronan\ncon un penacho de plata.\n\nDos jirones de vapor\nque del lago se levantan\ny, al juntarse allá en el cielo,\nforman una nube blanca.\n\nDos ideas que al par brotan;\ndos besos que a un tiempo estallan,\ndos ecos que se confunden;\neso son nuestras dos almas."
);
new Poem(
    gustavo,
    "XXV",
    "Cuando en la noche te envuelven\nlas alas de tul del sueño\ny tus tendidas pestañas\nsemejan arcos de ébano,\npor escuchar los latidos\nde tu corazón inquieto\ny reclinar tu dormida\ncabeza sobre mi pecho,\ndiera, alma mía,\ncuanto posea:\n¡la luz, el aire\ny el pensamiento!\n\nCuando se clavan tus ojos\nen un invisible objeto\ny tus labios ilumina\nde una sonrisa el reflejo,\npor leer sobre tu frente\nel callado pensamiento\nque pasa como la nube\ndel mar sobre el ancho espejo,\ndiera, alma mía,\ncuanto deseo:\n¡la fama, el oro,\nla gloria, el genio!\n\nCuando enmudece tu lengua\ny se apresura tu aliento\ny tus mejillas se encienden\ny entornas tus ojos negros,\npor ver entre sus pestañas\nbrillar con húmedo fuego\nla ardiente chispa que brota\ndel volcán de los deseos,\ndiera, alma mía,\npor cuanto espero,\nla fe, el espíritu,\nla tierra, el cielo."
);
new Poem(
    gustavo,
    "XXVI",
    "Voy contra mi interés al confesarlo;\nno obstante, amada mía,\npienso, cual tú, que una oda sólo es buena\nde un billete del Banco al dorso escrita.\nNo faltará algún necio que al oírlo\nse haga cruces y diga:\nMujer al fin del siglo diecinueve,\nmaterial y prosaica... ¡Boberías!\n\nVoces que hacen correr cuatro poetas\nque en invierno se embozan con la lira;\n¡Ladridos de los perros a la luna!\nTú sabes y yo sé que en esta vida\ncon genio es muy contado el que la escribe,\ny con oro cualquiera hace poesía."
);
new Poem(
    gustavo,
    "XVII",
    "Despierta, tiemblo al mirarte;\ndormida, me atrevo a verte;\npor eso, alma de mi alma,\nyo velo mientras tú duermes.\n\nDespierta, ríes, y al reír tus labios\ninquietos me parecen\nrelámpagos de grana que serpean\nsobre un cielo de nieve.\n\nDormida, los extremos de tu boca\npliega sonrisa leve,\nsuave como el rastro luminoso\nque deja un sol que muere.\n¡Duerme!\n\nDespierta, miras y al mirar tus ojos\nhúmedos resplandecen\ncomo la onda azul en cuya cresta\nchispeando el sol hiere.\n\nAl través de tus párpados, dormida,\ntranquilo fulgor vierten,\ncual derrama de luz, templado rayo,\nlámpara transparente.\n¡Duerme!\n\nDespierta, hablas y al hablar vibrantes\ntus palabras parecen\nlluvia de perlas que en dorada copa\nse derrama a torrentes.\n\nDormida, en el murmullo de tu aliento\nacompasado y tenue,\nescucho yo un poema que mi alma\nenamorada entiende.\n¡Duerme!\n\nSobre el corazón la mano\nme he puesto porque no suene\nsu latido y de la noche\nturbe la calma solemne.\n\nDe tu balcón las persianas\ncerré ya porque no entre\nel resplandor enojoso\nde la aurora y te despierte.\n¡Duerme!"
);
new Poem(
    gustavo,
    "XXVIII",
    "Cuando entre la sombra oscura,\nperdida una voz murmura\nturbando su triste calma,\nsi en el fondo de mi alma\nla oigo dulce resonar,\ndime: ¿es que el viento en sus giros\nse queja, o que tus suspiros\nme hablan de amor al pasar?\n\nCuando el sol en mi ventana\nrojo brilla a la mañana,\ny mi amor tu sombra evoca,\nsi en mi boca de otra boca\nsentir creo la impresión,\ndime: ¿es que ciego deliro,\no que un beso en un suspiro\nme envía tu corazón?\nY en el luminoso día\ny en la alta noche sombría,\nsi en todo cuanto rodea\nal alma que te desea,\nte creo sentir y ver,\ndime: ¿es que toco y respiro\nsoñando, o que en un suspiro\nme das tu aliento a beber"
);
new Poem(
    gustavo,
    "XXIX",
    "Sobre la falda tenía\nel libro abierto;\nen mi mejilla tocaban\nsus rizos negros;\nno veíamos letras\nninguno creo;\nmas guardábamos ambos\nhondo silencio.\n¿Cuánto duró? Ni aun entonces\npude saberlo.\nSólo sé que no se oía\nmás que el aliento,\nque apresurado escapaba\ndel labio seco.\nSólo sé que nos volvimos\nlos dos a un tiempo,\ny nuestros ojos se hallaron\n¡y sonó un beso!\n\n*\n\nCreación de Dante era el libro;\nera su Infierno.\nCuando a él bajamos los ojos,\nyo dije trémulo:\n¿Comprendes ya que un poema\ncabe en un verso?\nY ella respondió encendida:\n¡Ya lo comprendo"
);
new Poem(
    gustavo,
    "XXX",
    "Asomaba a sus ojos una lágrima\ny a mi labio una frase de perdón;\nhabló el orgullo y se enjugó su llanto,\ny la frase en mis labios expiró.\n\nYo voy por un camino; ella, por otro;\npero, al pensar en nuestro mutuo amor,\nyo digo aún: ?¿Por qué callé aquel día?\nY ella dirá: ?¿Por qué no lloré yo?"
);
new Poem(
    gustavo,
    "XXXI",
    "Nuestra pasión fue un trágico sainete\nen cuya absurda fábula\nlo cómico y lo grave confundidos\nrisas y llanto arrancan.\nPero fue lo peor de aquella historia\nque al fin de la jornada\na ella tocaron lágrimas y risas\ny a mí, sólo las lágrimas."
);
new Poem(
    gustavo,
    "XXXII",
    "Pasaba arrolladora en su hermosura\ny el paso le dejé;\nni aun a mirarla me volví y, no obstante,\nalgo a mi oído murmuró: ?Esa es.\n\n¿Quién reunió la tarde a la mañana?\nLo ignoro; sólo sé\nque en una breve noche de verano\nse unieron los crepúsculos, y... fue."
);
new Poem(
    gustavo,
    "XXXIII",
    "Es cuestión de palabras y, no obstante,\nni tú ni yo jamás,\ndespués de lo pasado, convendremos\nen quién la culpa está.\n\n¡Lástima que el Amor un diccionario\nno tenga donde hallar\ncuándo el orgullo es simplemente orgullo\ny cuándo es dignidad!."
);
new Poem(
    gustavo,
    "XXXIV",
    "Cruza callada, y son sus movimientos\nsilenciosa armonía:\nsuenan sus pasos, y al sonar recuerdan\ndel himno alado la cadencia rítmica.\n\nLos ojos entreabre, aquellos ojos\ntan claros como el día;\ny la tierra y el cielo, cuanto abarcan,\narden con nueva luz en sus pupilas.\n\nRíe, y su carcajada tiene notas\ndel agua fugitiva;\nllora, y es cada lágrima un poema\nde ternura infinita.\n\nElla tiene la luz, tiene el perfume,\nel color y la línea,\nla forma engendradora de deseos,\nla expresión, fuente eterna de poesía.\n\n¿Qué es estúpida? ¡Bah! Mientras callando\nguarde oscuro el enigma,\nsiempre valdrá lo que yo creo que calla\nmás que lo que cualquiera otra me diga"
);
new Poem(
    gustavo,
    "XXXV",
    "¡No me admiró tu olvido! Aunque de un día,\nme admiró tu cariño mucho más;\nporque lo que hay en mí que vale algo,\neso... ni lo pudiste sospechar."
);
new Poem(
    gustavo,
    "XXXVI",
    "Si de nuestros agravios en un libro\nse escribiese la historia,\ny se borrase en nuestras almas cuanto\nse borrase en sus hojas.\n\n¡Te quiero tanto aún! ¡Dejó en mi pecho\ntu amor huellas tan hondas,\nque sólo con que tú borrases una,\nlas borraba yo todas!"
);
new Poem(
    gustavo,
    "XXXVII",
    "Antes que tú me moriré; escondido\nen las entrañas ya\nel hierro llevo con que abrió tu mano\nla ancha herida mortal.\n\nAntes que tú me moriré; y mi espíritu,\nen su empeño tenaz,\nse sentará a las puertas de la muerte,\nesperándote allá.\n\nCon las horas los días, con los días\nlos años volarán,\ny a aquella puerta llamarás al cabo...\n¿Quién deja de llamar?\n\nEntonces, que tu culpa y tus despojos\nla tierra guardará,\nlavándote en las ondas de la muerte\ncomo en otro Jordán;\n\nallí donde el murmullo de la vida\ntemblando a morir va,\ncomo la ola que a la playa viene\nsilenciosa a expirar;\n\nallí donde el sepulcro que se cierra\nabre una eternidad,\ntodo cuanto los dos hemos callado,\nallí lo hemos de hablar."
);
new Poem(
    gustavo,
    "XXXVIII",
    "Los suspiros son aire y van al aire.\nLas lágrimas son agua y van al mar.\nDime, mujer, cuando el amor se olvida,\n¿sabes tú adónde va?"
);
new Poem(
    gustavo,
    "XXXIX",
    "¿A qué me lo decís? Lo sé: es mudable,\nes altanera y vana y caprichosa;\nantes que el sentimiento de su alma,\nbrotará el agua de la estéril roca.\n\nSé que en su corazón, nido de sierpes,\nno hay una fibra que al amor responda;\nque es una estatua inanimada..., pero...\n¡es tan hermosa"
);
new Poem(
    gustavo,
    "XL",
    "Su mano entre mis manos,\nsus ojos en mis ojos,\nla amorosa cabeza\napoyada en mi hombro,\nDios sabe cuántas veces\ncon paso perezoso\nhemos vagado juntos\nbajo los altos olmos\nque de su casa prestan\nmisterio y sombra al pórtico.\n\n*\n\nY ayer... un año apenas,\npasado como un soplo,\ncon qué exquisita gracia,\ncon qué admirable aplomo,\nme dijo al presentarnos\nun amigo oficioso:\n?¡Creo que en alguna parte\nhe visto a usted! ¡Ah, bobos,\nque sois de los salones\ncomadres de buen tono,\ny andabais allí a caza\nde galantes embrollos:\nqué historia habéis perdido,\nqué manjar tan sabroso\npara ser devorado\nsotto voce en un coro\ndetrás del abanico\nde plumas y de oro...!\n\n*\n\nDiscreta y casta luna,\ncopudos y altos olmos,\nparedes de su casa,\numbrales de su pórtico,\ncallad, y que el secreto\nno salga de vosotros.\nCallad, que por mi parte\nyo lo he olvidado todo;\ny ella... ella, no hay máscara\nsemejante a su rostro."
);
new Poem(
    gustavo,
    "XLI",
    "Tú eras el huracán, y yo la alta\ntorre que desafía su poder.\n¡Tenías que estrellarte o que abatirme...!\n¡No pudo ser!\n\nTú eras el océano; y yo la enhiesta\nroca que firme aguarda su vaivén.\n¡Tenías que romperte o que arrancarme...!\n¡No pudo ser!\n\nHermosa tú, yo altivo; acostumbrados\nuno a arrollar, el otro a no ceder;\nla senda estrecha, inevitable el choque...\n¡No pudo ser!"
);
new Poem(
    gustavo,
    "XLII",
    "Cuando me lo contaron sentí el frío\nde una hoja de acero en las entrañas;\nme apoyé contra el muro, y un instante\nla conciencia perdí de dónde estaba.\n\nCayó sobre mi espíritu la noche,\nen ira y en piedad se anegó el alma.\n¡Y entonces comprendí por qué se llora,\ny entonces comprendí por qué se mata!\n\nPasó la nube de dolor.... Con pena\nlogré balbucear breves palabras...\n¿Quién me dio la noticia?... Un fiel amigo...\nMe hacía un gran favor... Le di las gracias"
);
new Poem(
    gustavo,
    "XLIII",
    "Dejé la luz a un lado, y en el borde\nde la revuelta cama me senté,\nmudo, sombrío, la pupila inmóvil\nclavada en la pared.\n\n¿Qué tiempo estuve así? No sé; al dejarme\nla embriaguez horrible del dolor,\nexpiraba la luz y en mis balcones\nreía al sol.\n\nNi sé tampoco en tan horribles horas\nen qué pensaba o qué pasó por mí;\nsólo recuerdo que lloré y maldije,\ny que en aquella noche envejecí."
);
new Poem(
    gustavo,
    "XLIV",
    "Como en un libro abierto\nleo de tus pupilas en el fondo.\n¿A qué fingir el labio\nrisas que se desmienten con los ojos?\n\n¡Llora! No te avergüences\nde confesar que me quisiste un poco.\n¡Llora! Nadie nos mira.\nYa ves; yo soy un hombre... y también lloro"
);
new Poem(
    gustavo,
    "XLV",
    "En la clave del arco ruinoso\ncuyas piedras el tiempo enrojeció,\nobra de cincel rudo campeaba\nel gótico blasón.\n\nPenacho de su yelmo de granito,\nla yedra que colgaba en derredor\ndaba sombra al escudo en que una mano\ntenía un corazón.\n\nA contemplarle en la desierta plaza\nnos paramos los dos;\n?Y ese ?me dijo? es el cabal emblema\nde mi constante amor.\n\n¡Ay! Es verdad lo que me dijo entonces;\nverdad que el corazón\nlo llevará en la mano..., en cualquier parte...\npero en el pecho, no."
);
new Poem(
    gustavo,
    "XLVI",
    "Me ha herido recatándose en las sombras,\nsellando con un beso su traición.\nLos brazos me echó al cuello y por la espalda\npartióme a sangre fría el corazón.\n\nY ella prosigue alegre su camino,\nfeliz, risueña, impávida. ¿Y por qué?\nPorque no brota sangre de la herida.\nPorque el muerto está en pie."
);
new Poem(
    gustavo,
    "XLVII",
    "Yo me he asomado a las profundas simas\nde la tierra y del cielo,\ny les he visto el fin o con los ojos\no con el pensamiento.\n\nMas ¡ay!, de un corazón llegué al abismo\ny me incliné un momento,\ny mi alma y mis ojos se turbaron:\n¡Tan hondo era y tan negro!"
);
new Poem(
    gustavo,
    "XLVIII",
    "Como se arranca el hierro de una herida\nsu amor de las entrañas me arranqué;\naunque sentí al hacerlo que la vida\n¡me arrancaba con él!\n\nDel altar que le alcé en el alma mía,\nla voluntad su imagen arrojó;\ny la luz de la fe que en ella ardía\nante el ara desierta se apagó.\n\nAún para combatir mi firme empeño\nviene a mi mente su visión tenaz...\n¡Cuánto podré dormir con ese sueño\nen que acaba el soñar!"
);
new Poem(
    gustavo,
    "XLIX",
    "Alguna vez la encuentro por el mundo,\ny pasa junto a mí;\ny pasa sonriéndose, y yo digo:\n¿Cómo puede reír?\n\nLuego asoma a mi labio otra sonrisa,\nmáscara del dolor,\ny entonces pienso: ¿Acaso ella se ríe,\ncomo me río yo"
);
new Poem(
    gustavo,
    "L",
    "Lo que el salvaje que con torpe mano\nhace de un tronco a su capricho un dios,\ny luego ante su obra se arrodilla,\neso hicimos tú y yo.\n\nDimos formas reales a un fantasma,\nde la mente ridícula invención,\ny hecho el ídolo ya, sacrificamos\nen su altar nuestro amor"
);
new Poem(
    gustavo,
    "LI",
    "De lo poco de vida que me resta\ndiera con gusto los mejores años,\npor saber lo que a otros\nde mí has hablado.\n\nY esta vida mortal, y de la eterna\nlo que me toque, si me toca algo,\npor saber lo que a solas\nde mí has pensado"
);
new Poem(
    gustavo,
    "LII",
    "Olas gigantes que os rompéis bramando\nen las playas desiertas y remotas,\nenvuelto entre la sábana de espumas,\n¡llevadme con vosotras!\n\nRáfagas de huracán que arrebatáis\ndel alto bosque las marchitas hojas,\narrastrado en el ciego torbellino,\n¡llevadme con vosotras!\n\nNube de tempestad que rompe el rayo\ny en fuego ornáis las sangrientas orlas,\narrebatado entre la niebla oscura,\n¡llevadme con vosotras!.\n\nLlevadme, por piedad, a donde el vértigo\ncon la razón me arranque la memoria.\n¡Por piedad! ¡Tengo miedo de quedarme\ncon mi dolor a solas!."
);
new Poem(
    gustavo,
    "LIII",
    "Volverán las oscuras golondrinas\nen tu balcón sus nidos a colgar,\ny otra vez con el ala a sus cristales\njugando llamarán.\n\nPero aquellas que el vuelo refrenaban\ntu hermosura y mi dicha a contemplar,\naquellas que aprendieron nuestros nombres...\n¡esas... no volverán!.\n\nVolverán las tupidas madreselvas\nde tu jardín las tapias a escalar,\ny otra vez a la tarde aún más hermosas\nsus flores se abrirán.\n\nPero aquellas, cuajadas de rocío\ncuyas gotas mirábamos temblar\ny caer como lágrimas del día...\n¡esas... no volverán!\n\nVolverán del amor en tus oídos\nlas palabras ardientes a sonar;\ntu corazón de su profundo sueño\ntal vez despertará.\n\nPero mudo y absorto y de rodillas\ncomo se adora a Dios ante su altar,\ncomo yo te he querido...; desengáñate,\n¡así... no te querrán!"
);
new Poem(
    gustavo,
    "LIV",
    "Cuando volvemos las fugaces horas\ndel pasado a evocar,\ntemblando brilla en sus pestañas negras\nuna lágrima pronta a resbalar.\n\nY, al fin, resbala y cae como gota\nde rocío al pensar\nque cual hoy por ayer, por hoy mañana,\nvolveremos los dos a suspirar."
);
new Poem(
    gustavo,
    "LV",
    "Entre el discorde estruendo de la orgía\nacarició mi oído,\ncomo nota de música lejana,\nel eco de un suspiro.\n\nEl eco de un suspiro que conozco,\nformado de un aliento que he bebido,\nperfume de una flor que oculta crece\nen un claustro sombrío.\n\nMi adorada de un día, cariñosa,\n¿En qué piensas?? me dijo.\nEn nada... En nada, ¿y lloras? Es que tengo\nalegre la tristeza y triste el vino."
);
new Poem(
    gustavo,
    "LVI",
    "Hoy como ayer, mañana como hoy,\n¡y siempre igual!\nUn cielo gris, un horizonte eterno\ny andar... andar.\n\nMoviéndose a compás, como una estúpida\nmáquina, el corazón.\nLa torpe inteligencia del cerebro,\ndormida en un rincón.\n\nEl alma, que ambiciona un paraíso,\nbuscándole sin fe,\nfatiga sin objeto, ola que rueda\nignorando por qué.\n\nVoz que, incesante, con el mismo tono,\ncanta el mismo cantar,\ngota de agua monótona que cae\ny cae, sin cesar.\n\nAsí van deslizándose los días,\nunos de otros en pos;\nhoy lo mismo que ayer...; y todos ellos,\nsin gozo ni dolor.\n\n¡Ay, a veces me acuerdo suspirando\ndel antiguo sufrir!\nAmargo es el dolor, ¡pero siquiera\npadecer es vivir!"
);
new Poem(
    gustavo,
    "LVII",
    "Este armazón de huesos y pellejos,\nde pasear una cabeza loca\nse halla cansado al fin, y no lo extraño,\npues, aunque es la verdad que no soy viejo,\nde la parte de vida que me toca\nen la vida del mundo, por mi daño\nhe hecho un uso tal, que juraría\nque he condensado un siglo en cada día.\n\nAsí, aunque ahora muriera,\nno podría decir que no he vivido;\nque el sayo, al parecer nuevo por fuera,\nconozco que por dentro ha envejecido.\n\nHa envejecido, sí, ¡pese a mi estrella!\nHarto lo dice ya mi afán doliente,\nque hay dolor que al pasar, su horrible huella\ngraba en el corazón, si no en la frente.\n\n"
);
new Poem(
    gustavo,
    "LVIII",
    "¿Quieres que de ese néctar delicioso\nno te amargue la hez?\nPues aspírale, acércale a tus labios\ny déjale después.\n\n¿Quieres que conservemos una dulce\nmemoria de este amor?\nPues amémonos hoy mucho, y mañana\ndigámonos: ¡Adiós"
);
new Poem(
    gustavo,
    "LIX",
    "Yo sé cuál el objeto\nde tus suspiros es;\nyo conozco la causa de tu dulce\nsecreta languidez.\n\n¿Te ríes?... Algún día\nsabrás, niña, por qué.\nTú acaso lo sospechas,\ny yo lo sé.\n\nYo sé cuándo tú sueñas,\ny lo que en sueños ves;\ncomo en un libro, puedo lo que callas\nen tu frente leer.\n\n¿Te ríes?... Algún día\nsabrás, niña, por qué.\nTú acaso lo sospechas,\ny yo lo sé.\n\nYo sé por qué sonríes\ny lloras a la vez;\nyo penetro en los senos misteriosos\nde tu alma de mujer.\n\n¿Te ríes? ... Algún día\nsabrás, niña, por qué;\nmientras tú sientes mucho y nada sabes,\nyo, que no siento ya, todo lo sé."
);
new Poem(
    gustavo,
    "LX",
    "Mi vida es un erial,\nflor que toco se deshoja;\nque en mi camino fatal\nalguien va sembrando el mal\npara que yo lo recoja."
);
new Poem(
    gustavo,
    "LXI",
    "Al ver mis horas de fiebre\ne insomnio lentas pasar,\na la orilla de mi lecho,\n¿quién se sentará?\n\nCuando la trémula mano\ntienda, próximo a expirar,\nbuscando una mano amiga,\n¿quién la estrechará?\n\nCuando la muerte vidríe\nde mis ojos el cristal,\nmis párpados aún abiertos,\n¿quién los cerrará?\n\nCuando la campana suene\n(si suena en mi funeral)\nuna oración, al oírla,\n¿quién murmurará?\n\nCuando mis pálidos restos\noprima la tierra ya,\nsobre la olvidada fosa,\n¿quién vendrá a llorar?\n\n¿Quién en fin, al otro día,\ncuando el sol vuelva a brillar,\nde que pasé por el mundo\nquién se acordará?"
);
new Poem(
    gustavo,
    "LXII",
    "Primero es un albor trémulo y vago,\nraya de inquieta luz que corta el mar;\nluego chispea y crece y se dilata\nen ardiente explosión de claridad.\n\nLa brilladora lumbre es la alegría,\nla temerosa sombra es el pesar.\n¡Ay! En la oscura noche de mi alma,\n¿cuándo amanecerá?"
);
new Poem(
    gustavo,
    "LXIII",
    "Como enjambre de abejas irritadas,\nde un oscuro rincón de la memoria\nsalen a perseguirme los recuerdos\nde las pasadas horas.\n\nYo los quiero ahuyentar. ¡Esfuerzo inútil!\nMe rodean, me acosan,\ny unos tras otros a clavarme vienen\nel agudo aguijón que el alma encona."
);
new Poem(
    gustavo,
    "LXIV",
    "Como guarda el avaro su tesoro,\nguardaba mi dolor;\nquería probar que hay algo eterno\na la que eterno me juró su amor.\n\nMas hoy le llamo en vano y oigo, al tiempo\nque le acabó, decir:\n¡Ah, barro miserable, eternamente\nno podrás ni aun sufrir!"
);
new Poem(
    gustavo,
    "LXV",
    "Llegó la noche y no encontré un asilo;\ny tuve sed ... ¡mis lágrimas bebí!\n¡Y tuve hambre! ¡Los hinchados ojos\ncerré para morir!\n\n¿Estaba en un desierto? Aunque a mi oído\nde las turbas llegaba el ronco hervir,\nyo era huérfano y pobre... El mundo estaba\ndesierto... ¡para mí!"
);
new Poem(
    gustavo,
    "LXVI",
    "¿De dónde vengo?... El más horrible y áspero\nde los senderos busca;\nlas huellas de unos pies ensangrentados\nsobre la roca dura;\nlos despojos de un alma hecha jirones\nen las zarzas agudas,\nte dirán el camino\nque conduce a mi cuna.\n\n¿Adónde voy? El más sombrío y triste\nde los páramos cruza,\nvalle de eternas nieves y de eternas\nmelancólicas brumas;\nen donde esté una piedra solitaria\nsin inscripción alguna,\ndonde habite el olvido,\nallí estará mi tumba."
);
new Poem(
    gustavo,
    "LXVII",
    "¡Qué hermoso es ver el día\ncoronado de fuego levantarse,\ny, a su beso de lumbre,\nbrillar las olas y encenderse el aire!\n\n¡Qué hermoso es tras la lluvia\ndel triste otoño en la azulada tarde,\nde las húmedas flores\nel perfume aspirar hasta saciarse!\n\n¡Qué hermoso es cuando en copos\nla blanca nieve silenciosa cae,\nde las inquietas llamas\nver las rojizas lenguas agitarse!\n\nQué hermoso es cuando hay sueño,\ndormir bien... y roncar como un sochantre\ny comer... y engordar... ¡y qué desgracia\nque esto sólo no baste!."
);
new Poem(
    gustavo,
    "LXVIII",
    "No sé lo que he soñado\nen la noche pasada.\nTriste, muy triste debió ser el sueño,\npues despierto la angustia me duraba.\n\nNoté al incorporarme\nhúmeda la almohada,\ny por primera vez sentí al notarlo,\nde un amargo placer henchirse el alma.\n\nTriste cosa es el sueño\nque llanto nos arranca,\nmas tengo en mi tristeza una alegría...\n¡Sé que aún me quedan lágrimas!"
);
new Poem(
    gustavo,
    "LXIX",
    "Al brillar un relámpago nacemos,\ny aún dura su fulgor cuando morimos;\n¡tan corto es el vivir!\n\nLa Gloria y el Amor tras que corremos\nsombras de un sueño son que perseguimos;\n¡despertar es morir!"
);
new Poem(
    gustavo,
    "LXX",
    "¡Cuántas veces, al pie de las musgosas\nparedes que la guardan,\noí la esquila que al mediar la noche\na los maitines llama!\n\n¡Cuántas veces trazó mi silueta\nla luna plateada,\njunto a la del ciprés, que de su huerto\nse asoma por las tapias!\n\nCuando en sombras la iglesia se envolvía,\nde su ojiva calada,\n¡cuántas veces temblar sobre los vidrios\nvi el fulgor de la lámpara!\n\nAunque el viento en los ángulos oscuros\nde la torre silbara,\ndel coro entre las voces percibía\nsu voz vibrante y clara.\n\nEn las noches de invierno, si un medroso\npor la desierta plaza\nse atrevía a cruzar, al divisarme\nel paso aceleraba.\n\nY no faltó una vieja que en el torno\ndijese a la mañana,\nque de algún sacristán muerto en pecado\nacaso era yo el alma.\n\nA oscuras conocía los rincones\ndel atrio y la portada;\nde mis pies las ortigas que allí crecen\nlas huellas tal vez guardan.\n\nLos búhos, que espantados me seguían\ncon sus ojos de llamas,\nllegaron a mirarme con el tiempo\ncomo a un buen camarada.\n\nA mi lado sin miedo los reptiles\nse movían a rastras;\nhasta los mudos santos de granito\ncreo que me saludaban."
);
new Poem(
    gustavo,
    "LXXI",
    "No dormía: vagaba en ese limbo\nen que cambian de forma los objetos,\nmisteriosos espacios que separan\nla vigilia del sueño.\n\nLas ideas que en ronda silenciosa\ndaban vueltas en torno a mi cerebro,\npoco a poco en su danza se movían\ncon un compás más lento.\n\nDe la luz que entra al alma por los ojos\nlos párpados velaban el reflejo;\nmas otra luz el mundo de visiones\nalumbraba por dentro.\n\nEn este punto resonó en mi oído\nun rumor semejante al que en el templo\nvaga confuso al terminar los fieles\ncon un Amén sus rezos.\n\nY oí como una voz delgada y triste\nque por mi nombre me llamó a lo lejos,\n¡y sentí olor de cirios apagados,\nde humedad y de incienso!\n\nEntró la noche y del olvido en brazos\ncaí cual piedra en su profundo seno.\nDormí y al despertar exclamé: ¡Alguno\nque yo quería ha muerto!"
);
new Poem(
    gustavo,
    "LXXII",
    "PRIMERA VOZ\n\nLas ondas tienen vaga armonía,\nlas violetas suave olor,\nbrumas de plata la noche fría,\nluz y oro el día;\nyo algo mejor;\n¡yo tengo Amor!\n\nSEGUNDA VOZ\n\nAura de aplausos, nube radiosa,\nola de envidia que besa el pie,\nisla de sueños donde reposa\nel alma ansiosa,\ndulce embriaguez:\n¡la Gloria es!\n\nTERCERA VOZ\n\nAscua encendida es el tesoro,\nsombra que huye la vanidad.\nTodo es mentira: la gloria, el oro;\nlo que yo adoro\nsólo es verdad:\n¡la Libertad!\n\nAsí los barqueros pasaban cantando\nla eterna canción\ny, al golpe del remo, saltaba la espuma\ny heríala el sol.\n\n¿Te embarcas?, gritaban; y yo sonriendo\nles dije al pasar:\nYo ya me he embarcado; por señas que aún tengo\nla ropa en la playa tendida a secar."
);
new Poem(
    gustavo,
    "LXXIII",
    "Cerraron sus ojos\nque aún tenía abiertos,\ntaparon su cara\ncon un blanco lienzo,\ny unos sollozando,\notros en silencio,\nde la triste alcoba\ntodos se salieron.\n\nLa luz que en un vaso\nardía en el suelo,\nal muro arrojaba\nla sombra del lecho;\ny entre aquella sombra\nveíase a intérvalos\ndibujarse rígida\nla forma del cuerpo.\n\nDespertaba el día,\ny, a su albor primero,\ncon sus mil rüidos\ndespertaba el pueblo.\nAnte aquel contraste\nde vida y misterio,\nde luz y tinieblas,\nyo pensé un momento:\n\n?¡Dios mío, qué solos\nse quedan los muertos!\n\n*\n\nDe la casa, en hombros,\nlleváronla al templo\ny en una capilla\ndejaron el féretro.\nAllí rodearon\nsus pálidos restos\nde amarillas velas\ny de paños negros.\n\nAl dar de las Ánimas\nel toque postrero,\nacabó una vieja\nsus últimos rezos,\ncruzó la ancha nave,\nlas puertas gimieron,\ny el santo recinto\nquedóse desierto.\n\nDe un reloj se oía\ncompasado el péndulo,\ny de algunos cirios\nel chisporroteo.\nTan medroso y triste,\ntan oscuro y yerto\ntodo se encontraba\nque pensé un momento:\n\n?¡Dios mío, qué solos\nse quedan los muertos!\n\n*\n\nDe la alta campana\nla lengua de hierro\nle dio volteando\nsu adiós lastimero.\nEl luto en las ropas,\namigos y deudos\ncruzaron en fila\nformando el cortejo.\n\nDel último asilo,\noscuro y estrecho,\nabrió la piqueta\nel nicho a un extremo.\nAllí la acostaron,\ntapiáronle luego,\ny con un saludo\ndespidióse el duelo.\n\nLa piqueta al hombro\nel sepulturero,\ncantando entre dientes,\nse perdió a lo lejos.\nLa noche se entraba,\nel sol se había puesto:\nperdido en las sombras\nyo pensé un momento:\n\n?¡Dios mío, qué solos\nse quedan los muertos!\n\n*\n\nEn las largas noches\ndel helado invierno,\ncuando las maderas\ncrujir hace el viento\ny azota los vidrios\nel fuerte aguacero,\nde la pobre niña\na veces me acuerdo.\n\nAllí cae la lluvia\ncon un son eterno;\nallí la combate\nel soplo del cierzo.\nDel húmedo muro\ntendida en el hueco,\n¡acaso de frío\nse hielan sus huesos...!\n\n* * *\n\n¿Vuelve el polvo al polvo?\n¿Vuela el alma al cielo?\n¿Todo es sin espíritu,\npodredumbre y cieno?\nNo sé; pero hay algo\nque explicar no puedo,\nalgo que repugna\naunque es fuerza hacerlo,\nel dejar tan tristes,\ntan solos los muertos."
);
new Poem(
    gustavo,
    "LXXIV",
    "Las ropas desceñidas,\ndesnudas las espaldas,\nen el dintel de oro de la puerta\ndos ángeles velaban.\n\nMe aproximé a los hierros\nque defienden la entrada,\ny de las dobles rejas en el fondo\nla vi confusa y blanca.\n\nLa vi como la imagen\nque en leve ensueño pasa,\ncomo rayo de luz tenue y difuso\nque entre tinieblas nada.\n\nMe sentí de un ardiente\ndeseo llena el alma;\ncomo atrae un abismo, aquel misterio\nhacia sí me arrastraba.\n\nMas ¡ay! que, de los ángeles,\nparecían decirme las miradas:\n'¡El umbral de esta puerta\nsólo Dios lo traspasa!'"
);
new Poem(
    gustavo,
    "LXXV",
    "¿Será verdad que, cuando toca el sueño,\ncon sus dedos de rosa, nuestros ojos,\nde la cárcel que habita huye el espíritu\nen vuelo presuroso?\n\n¿Será verdad que, huésped de las nieblas,\nde la brisa nocturna al tenue soplo,\nalado sube a la región vacía\na encontrarse con otros?\n\n¿Y allí desnudo de la humana forma,\nallí los lazos terrenales rotos,\nbreves horas habita de la idea\nel mundo silencioso?\n\n¿Y ríe y llora y aborrece y ama\ny guarda un rastro del dolor y el gozo,\nsemejante al que deja cuando cruza\nel cielo un meteoro?.\n\nYo no sé si ese mundo de visiones\nvive fuera o va dentro de nosotros.\nPero sé que conozco a muchas gentes\na quienes no conozco."
);
new Poem(
    gustavo,
    "LXXVI",
    "En la imponente nave\ndel templo bizantino,\nvi la gótica tumba a la indecisa\nluz que temblaba en los pintados vidrios.\n\nLas manos sobre el pecho,\ny en las manos un libro,\nuna mujer hermosa reposaba\nsobre la urna, del cincel prodigio.\n\nDel cuerpo abandonado,\nal dulce peso hundido,\ncual si de blanda pluma y raso fuera\nse plegaba su lecho de granito.\n\nDe la sonrisa última\nel resplandor divino\nguardaba el rostro, como el cielo guarda\ndel sol que muere el rayo fugitivo.\n\nDel cabezal de piedra\nsentados en el filo,\ndon ángeles, el dedo sobre el labio,\nimponían silencio en el recinto.\n\nNo parecía muerta;\nde los arcos macizos\nparecía dormir en la penumbra,\ny que en sueños veía el paraíso.\n\nMe acerqué de la nave\nal ángulo sombrío\ncon el callado paso que llegamos\njunto a la cuna donde duerme un niño.\n\nLa contemplé un momento,\ny aquel resplandor tibio,\naquel lecho de piedra que ofrecía\npróximo al muro otro lugar vacío,\n\nen el alma avivaron\nla sed de lo infinito,\nel ansia de esa vida de la muerte\npara la que un instante son los siglos ...\n\n*\n\nCansado del combate\nen que luchando vivo,\nalguna vez me acuerdo con envidia\nde aquel rincón oscuro y escondido.\n\nDe aquella muda y pálida\nmujer me acuerdo y digo:\n¡Oh, qué amor tan callado, el de la muerte!\n¡Qué sueño el del sepulcro, tan tranquilo!"
);
new Poem(
    gustavo,
    "LXXVII",
    "Dices que tienes corazón, y sólo\nlo dices porque sientes sus latidos.\nEso no es corazón...; es una máquina,\nque, al compás que se mueve, hace ruido."
);
new Poem(
    gustavo,
    "LXXVIII",
    "Fingiendo realidades\ncon sombra vana,\ndelante del Deseo\nva la Esperanza.\nY sus mentiras,\ncomo el fénix, renacen\nde sus cenizas."
);
new Poem(
    gustavo,
    "LXXIX",
    "Una mujer me ha envenenado el alma,\notra mujer me ha envenenado el cuerpo;\nninguna de las dos vino a buscarme,\nyo de ninguna de las dos me quejo.\n\nComo el mundo es redondo, el mundo rueda;\nsi mañana, rodando, este veneno\nenvenena a su vez ¿por qué acusarme?\n¿Puedo dar más de lo que a mí me dieron?"
);
new Poem(
    gustavo,
    "LXXX",
    "Una mujer me ha envenenado el alma\notra mujer me ha envenenado el cuerpo;\nninguna de las dos vino a buscarme,\nyo, de ninguna de las dos me quejo.\n\nComo el mundo es redondo, el mundo rueda.\nSi mañana, rodando, este veneno\nenvenena a su vez, ¿porqué acusarme?\n¿Puedo dar más de lo que a mí me dieron?"
);
new Poem(
    gustavo,
    "LXXXI",
    "Es el alba una sombra\nde tu sonrisa,\ny un rayo de tus ojos\nla luz del día;\npero tu alma\nes la noche de invierno\nnegra y helada.\n"
);
let poems = [];

class Poem{
    author = "";
    name = "";
    text = "";

    constructor(author, name, text){
        this.author = author;
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

    to_string(){
        return this.author + "\n\n" + this.name + "\n\n" + this.text;
    }
}

function create_poem(author, name, text){
    var poem = new Poem(author, name, text);
    poems.push(poem.get_poem());
}

var becquer = "Gustavo Adolfo Bécquer";
create_poem(becquer, "XI", "Yo soy ardiente, yo soy morena,\nyo soy el símbolo de la pasión,\nde ansia de goces mi alma está llena.\n¿A mí me buscas?\nNo es a ti, no.\n\nMi frente es pálida, mis trenzas de oro:\npuedo brindarte dichas sin fin,\nyo de ternuras guardo un tesoro.\n¿A mí me llamas?\nNo, no es a ti.\n\nYo soy un sueño, un imposible,\nvano fantasma de niebla y luz;\nsoy incorpórea, soy intangible:\nno puedo amarte.\n¡Oh ven, ven tú!");
create_poem(becquer, "XX", "Sabe, si alguna vez tus labios rojos\nquema invisible atmósfera abrasada,\nque el alma que hablar puede con los ojos,\ntambién puede besar con la mirada.");
create_poem(becquer, "XXI", "¿Qué es poesía?, dices, mientras clavas\nen mi pupila tu pupila azul,\n¡Qué es poesía! ¿Y tú me lo preguntas?\nPoesía... eres tú.");
create_poem(becquer, "XXIII", "Por una mirada, un mundo;\npor una sonrisa, un cielo;\npor un beso... ¡Yo no sé\nqué te diera por un beso!");
create_poem(becquer, "XXIX", "¿A qué me lo decís? Lo sé: es mudable,\nes altanera y vana y caprichosa;\nantes que el sentimiento de su alma,\nbrotará el agua de la estéril roca.\n\nSé que en su corazón, nido de sierpes,\nno hay una fibra que al amor responda;\nque es una estatua inanimada..., pero...\n¡es tan hermosa!");


var bukowski = "Charles Bukowski";
create_poem(bukowski, "The Japanese Wife", "O lord, he said, Japanese women,\nreal women, they have not forgotten,\nbowing and smiling\nclosing the wounds men have made;\nbut American women will kill you like they\ntear a lampshade,\nAmerican women care less than a dime,\nthey’ve gotten derailed,\nthey’re too nervous to make good:\nalways scowling, belly-aching,\ndisillusioned, overwrought;\nbut oh lord, say, the Japanese women:\nthere was this one,\nI came home and the door was locked\nand when I broke in she broke out the bread knife\nand chased me under the bed\nand her sister came\nand they kept me under that bed for two days,\nand when I came out, at last,\nshe didn’t mention attorneys,\njust said, you will never wrong me again,\nand I didn’t; but she died on me,\nand dying, said, you can wrong me now,\nand I did,\nbut you know, I felt worse then\nthan when she was living;\nthere was no voice, no knife,\nnothing but little Japanese prints on the wall,\nall those tiny people sitting by red rivers\nwith flying green birds,\nand I took them down and put them face down\nin a drawer with my shirts,\nand it was the first time I realized\nthat she was dead, even though I buried her;\nand someday I’ll take them all out again,\nall the tan-faced little people\nsitting happily by their bridges and huts\nand mountains—\nbut not right now,\nnot just yet.");
create_poem(bukowski, "A Not So Good Night In The San Pedro Of The World", "it's unlikely that a decent poem is in me\ntonight\nand I understand that this is strictly my\nproblem\nand of no interest to you\nthat I sit here listening to a man playing\na piano on the radio\nand it's bad piano, both the playing and\nthe composition\nand again, this is of no interest to you\nas one of my cats,\na beautiful white with strange markings,\nsleeps in the bathroom.\n\n\nI have no ideas of what would be of interest to you\nbut I doubt that you would be of\ninterest to me, so don't get\nsuperior.\nin fact, come to think of it, you can\nkiss my ass.\n\nI continue to listen to the piano\nthis will not be a memorable night in my\nlife or yours.\n\nlet us celebrate the stupidity of our\nendurance.");

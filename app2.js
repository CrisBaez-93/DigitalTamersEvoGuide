$("#list_icon").click(function (e) {
    e.preventDefault();
    $(".theme").attr("href", "style_main.css");
})

function replaceName (e){
    let h3Name = document.getElementById("h3_name");
    h3Name.textContent = e;
}

function replaceImage (e){
    let mgImage = document.getElementById("mg_image");
    mgImage.src = `./images/full/mg_${e}.png`;
}

function attribute (e){
    let atributeImage = document.getElementById("atribute_img");
    atributeImage.src = `./images/atr_${e}.png`;
}

function replaceAttacks (e, f){
    let attack1 = document.getElementById("attack_place_1");
    let attack2 = document.getElementById("attack_place_2");
    attack1.src = `./images/atk_${e}.png`;
    attack2.src = `./images/atk_${f}.png`;
}

function refreshApp (){
    let app = document.getElementById("app");
    if (app.src = "app.js"){
        console.log("El SRC cambio a 2");
        app.setAttribute("src", "app2.js");
    } else if (app.src = "app2.js"){
        console.log("El SRC cambio a 1");
        app.setAttribute("src", "app.js");
    } else {
        console.log("App unchanged");
    }
}

function evolveFromFrame (frame, name, req){
    let evolveContainer1 = document.getElementById("evolve_container1");
    let frameContainer = document.createElement("div");
    frameContainer.className = "frame_container";
    evolveContainer1.appendChild(frameContainer);
    /* ---------------------------------------------- */
    let a1 = document.createElement("a");
    a1.className = frame;
    let imgFrame = document.createElement("img");
    imgFrame.src = `images/frames/fr_${frame}.png`;
    imgFrame.className = frame;
    a1.appendChild(imgFrame);
    /* ---------------------------------------------- */
    let a2 = document.createElement("a");
    a2.className = frame;
    let pFrame = document.createElement("p");
    pFrame.className = "p_name";
    pFrame.textContent = `${name}`
    a2.appendChild(pFrame);
    /* ---------------------------------------------- */
    let reqFrame = document.createElement("p");
    reqFrame.className = "evolve_requeriments";
    reqFrame.textContent = `${req}`;
    /* ---------------------------------------------- */
    frameContainer.appendChild(a1);
    frameContainer.appendChild(a2);
    frameContainer.appendChild(reqFrame);
}

function evolveToFrame (frame, name, req){
    let evolveContainer2 = document.getElementById("evolve_container2");
    let frameContainer = document.createElement("div");
    frameContainer.className = "frame_container";
    evolveContainer2.appendChild(frameContainer);
    /* ---------------------------------------------- */
    let a1 = document.createElement("a");
    a1.className = frame;
    let imgFrame = document.createElement("img");
    imgFrame.src = `images/frames/fr_${frame}.png`;
    imgFrame.className = frame;
    a1.appendChild(imgFrame);
    /* ---------------------------------------------- */
    let a2 = document.createElement("a");
    a2.className = frame;
    let pFrame = document.createElement("p");
    pFrame.className = "p_name";
    pFrame.textContent = `${name}`
    a2.appendChild(pFrame);
    /* ---------------------------------------------- */
    let reqFrame = document.createElement("p");
    reqFrame.className = "evolve_requeriments";
    reqFrame.textContent = `${req}`;
    /* ---------------------------------------------- */
    frameContainer.appendChild(a1);
    frameContainer.appendChild(a2);
    frameContainer.appendChild(reqFrame);
}

function eraseOld (a){
    var element = document.getElementById(`evolve_container${a}`);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
}
}

/*-------------------- BABYS --------------------*/

$(".babydmon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Babydmon");
    replaceImage("babydmon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_dragon", "Dragon Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("dracomon", "Dracomon", "Randomly");
    evolveToFrame("otamamon", "Otamamon", "Randomly");
    refreshApp();
})

$(".chibimon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Chibimon");
    replaceImage("chibimon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_dragon", "Dragon Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("blucomon", "Blucomon", "Randomly");
    evolveToFrame("monodramon", "Monodramon", "Randomly");
    evolveToFrame("veemon", "Veemon", "Randomly");
})

$(".chocomon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Chocomon");
    replaceImage("chocomon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_dark", "Dark Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("blucomon", "Blucomon", "Randomly");
    evolveToFrame("demidevimon", "DemiDevimon", "Randomly");
    evolveToFrame("lopmon", "Lopmon", "Randomly");
    evolveToFrame("sharmamon", "Sharmamon", "Randomly");
    evolveToFrame("wormmon", "Wormmon", "Randomly");
})

$(".cupimon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Cupimon");
    replaceImage("cupimon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_holly", "Holly Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("impmon", "Impmon", "Randomly");
    evolveToFrame("lucemon", "Lucemon", "Randomly");
    evolveToFrame("patamon", "Patamon", "Randomly");
    evolveToFrame("salamon", "Salamon", "Randomly");
    evolveToFrame("terriermon", "Terriermon", "Randomly");
})

$(".demimeramon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("DemiMeramon");
    replaceImage("demimeramon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_machine", "Machine Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("candlemon", "Candlemon", "Randomly");
    evolveToFrame("demidevimon", "DemiDevimon", "Randomly");
    evolveToFrame("guilmon", "Guilmon", "Randomly");
    evolveToFrame("impmon", "Impmon", "Randomly");
})

$(".dorimon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Dorimon");
    replaceImage("dorimon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("armadillomon", "Armadillomon", "Randomly");
    evolveToFrame("dorumon", "Dorumon", "Randomly");
    evolveToFrame("monodramon", "Monodramon", "Randomly");
    evolveToFrame("sharmamon", "Sharmamon", "Randomly");
})

$(".gigimon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Gigimon");
    replaceImage("gigimon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_dragon", "Dragon Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("agumon", "Agumon", "Randomly");
    evolveToFrame("candlemon", "Candlemon", "Randomly");
    evolveToFrame("guilmon", "Guilmon", "Randomly");
    evolveToFrame("tentomon", "Tentomon", "Randomly");
    evolveToFrame("veemon", "Veemon", "Randomly");
})

$(".gummymon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Gummymon");
    replaceImage("gummymon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("armadillomon", "Armadillomon", "Randomly");
    evolveToFrame("blucomon", "Blucomon", "Randomly");
    evolveToFrame("gaomon", "Gaomon", "Randomly");
    evolveToFrame("hagurumon", "Hagurumon", "Randomly");
    evolveToFrame("renamon", "Renamon", "Randomly");
    evolveToFrame("terriermon", "Terriermon", "Randomly");
})

$(".hiyarimon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Hiyarimon");
    replaceImage("hiyarimon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_aquatic", "Aquatic Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("blucomon", "Blucomon", "Randomly");
})

$(".kapurimon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Kapurimon");
    replaceImage("kapurimon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_machine", "Machine Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("armadillomon", "Armadillomon", "Randomly");
    evolveToFrame("gotsumon", "Gotsumon", "Randomly");
    evolveToFrame("hagurumon", "Hagurumon", "Randomly");
})

$(".kodokugumon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("KoDokugumon");
    replaceImage("kodokugumon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_insect", "Insect / Plant Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("dokugumon", "Dokugumon", "Lvl 15");
})

$(".koromon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Koromon");
    replaceImage("koromon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_dragon", "Dragon Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("agumon", "Agumon", "Randomly");
    evolveToFrame("blackagumon", "BlackAgumon", "Randomly");
    evolveToFrame("dracomon", "Dracomon", "Randomly");
    evolveToFrame("hackmon", "Hackmon", "Randomly");
    evolveToFrame("toyagumon", "ToyAgumon", "Randomly");
    evolveToFrame("veemon", "Veemon", "Randomly");
    evolveToFrame("yukiagumon", "YukiAgumon", "Randomly");
})

$(".kozenimon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Kozenimon");
    replaceImage("kozenimon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_machine", "Machine Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("zenimon", "Zenimon", "Randomly");
})

$(".minomon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Minomon");
    replaceImage("minomon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_insect", "Insect / Plant Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("kunemon", "Kunemon", "Randomly");
    evolveToFrame("tentomon", "Tentomon", "Randomly");
    evolveToFrame("wormmon", "Wormmon", "Randomly");
})

$(".missimon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Missimon");
    replaceImage("missimon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_machine", "Machine Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("gizamon", "Gizamon", "Randomly");
    evolveToFrame("hagurumon", "Hagurumon", "Randomly");
    evolveToFrame("penmon", "Penmon", "Randomly");
    evolveToFrame("tentomon", "Tentomon", "Randomly");
})

$(".mochimon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Mochimon");
    replaceImage("mochimon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_insect", "Insect / Plant Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("goblimon", "Goblimon", "Randomly");
    evolveToFrame("gotsumon", "Gotsumon", "Randomly");
    evolveToFrame("hackmon", "Hackmon", "Randomly");
    evolveToFrame("hagurumon", "Hagurumon", "Randomly");
    evolveToFrame("kunemon", "Kunemon", "Randomly");
    evolveToFrame("otamamon", "Otamamon", "Randomly");
    evolveToFrame("tentomon", "Tentomon", "Randomly");
    evolveToFrame("wormmon", "Wormmon", "Randomly");
})

$(".nyaromon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Nyaromon");
    replaceImage("nyaromon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("armadillomon", "Armadillomon", "Randomly");
    evolveToFrame("hawkmon", "Hawkmon", "Randomly");
    evolveToFrame("renamon", "Renamon", "Randomly");
    evolveToFrame("salamon", "Salamon", "Randomly");
    evolveToFrame("terriermon", "Terriermon", "Randomly");
})

$(".pagumon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Pagumon");
    replaceImage("pagumon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_dark", "Dark Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("demidevimon", "DemiDevimon", "Randomly");
    evolveToFrame("gazimon", "Gazimon", "Randomly");
    evolveToFrame("goblimon", "Goblimon", "Randomly");
    evolveToFrame("impmon", "Impmon", "Randomly");
    evolveToFrame("lopmon", "Lopmon", "Randomly");
    evolveToFrame("tsukaimon", "Tsukaimon", "Randomly");
})

$(".pinamon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Pinamon");
    replaceImage("pinamon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_bird", "Bird Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("biyomon", "Biyomon", "Randomly");
    evolveToFrame("elecmon", "Elecmon", "Randomly");
    evolveToFrame("falcomon2", "Falcomon (2006)", "Randomly");
    evolveToFrame("gotsumon", "Gotsumon", "Randomly");
    evolveToFrame("swimmon", "Swimmon", "Randomly");
})

$(".pokomon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Pokomon");
    replaceImage("pokomon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("renamon", "Renamon", "Randomly");
})

$(".poromon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Poromon");
    replaceImage("poromon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_bird", "Bird Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("hawkmon", "Hawkmon", "Randomly");
})

$(".pukamon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Pukamon");
    replaceImage("pukamon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_aquatic", "Aquatic Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("betamon", "Betamon", "Randomly");
    evolveToFrame("gizamon", "Gizamon", "Randomly");
    evolveToFrame("gomamon", "Gomamon", "Randomly");
    evolveToFrame("otamamon", "Otamamon", "Randomly");
    evolveToFrame("snowgoblimon", "SnowGoblimon", "Randomly");
    evolveToFrame("syakomon", "Syakomon", "Randomly");
    evolveToFrame("yukiagumon", "YukiAgumon", "Randomly");
})

$(".puroromon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Puroromon");
    replaceImage("puroromon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_insect", "Insect / Plant Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("dorumon", "Dorumon", "Randomly");
    evolveToFrame("fanbeemon", "FanBeemon", "Randomly");
})

$(".pyocomon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Pyocomon");
    replaceImage("pyocomon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_insect", "Insect / Plant Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("biyomon", "Biyomon", "Randomly");
    evolveToFrame("elecmon", "Elecmon", "Randomly");
    evolveToFrame("falcomon2", "Facomon (2006)", "Randomly");
    evolveToFrame("kunemon", "Kunemon", "Randomly");
    evolveToFrame("palmon", "Palmon", "Randomly");
})

$(".tanemon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Tanemon");
    replaceImage("tanemon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_insect", "Insect / Plant Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("betamon", "Betamon", "Randomly");
    evolveToFrame("fanbeemon", "FanBeemon", "Randomly");
    evolveToFrame("kunemon", "Kunemon", "Randomly");
    evolveToFrame("palmon", "Palmon", "Randomly");
    evolveToFrame("renamon", "Renamon", "Randomly");
})

$(".tokomon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Tokomon");
    replaceImage("tokomon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_holly", "Holly Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("hackmon", "Hackmon", "Randomly");
    evolveToFrame("lucemon", "Lucemon", "Randomly");
    evolveToFrame("patamon", "Patamon", "Randomly");
    evolveToFrame("terriermon", "Terriermon", "Randomly");
    evolveToFrame("veemon", "Veemon", "Randomly");
})

$(".tsumemon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Tsumemon");
    replaceImage("tsumemon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_dark", "Dark Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("blackagumon", "BlackAgumon", "Randomly");
    evolveToFrame("blackgabumon", "BlackGabumon", "Randomly");
    evolveToFrame("demidevimon", "DemiDevimon", "Randomly");
    evolveToFrame("keramon", "Keramon", "Randomly");
    evolveToFrame("tsukaimon", "Tsukaimon", "Randomly");
})

$(".tsunomon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Tsunomon");
    replaceImage("tsunomon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("blackgabumon", "BlackGabumon", "Randomly");
    evolveToFrame("elecmon", "Elecmon", "Randomly");
    evolveToFrame("gabumon", "Gabumon", "Randomly");
    evolveToFrame("gaomon", "Gaomon", "Randomly");
    evolveToFrame("monodramon", "Monodramon", "Randomly");
    evolveToFrame("penmon", "Penmon", "Randomly");
    evolveToFrame("psychemon", "Psychemon", "Randomly");
})

$(".upamon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Upamon");
    replaceImage("upamon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("armadillomon", "Armadillomon", "Randomly");
    evolveToFrame("blucomon", "Blucomon", "Randomly");
})

$(".wanyamon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Wanyamon");
    replaceImage("wanyamon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("dorumon", "Dorumon", "Randomly");
    evolveToFrame("gaomon", "Gaomon", "Randomly");
    evolveToFrame("kudamon", "Kudamon", "Randomly");
    evolveToFrame("strabimon", "Strabimon", "Randomly");
})

/*-------------------- ROOKIES --------------------*/

$(".agumon").click(function (e){
    e.preventDefault();    
    $(".theme").attr("href", "style_info.css");
    replaceName("Wanyamon");
    replaceImage("wanyamon");
    attribute("no");
    replaceAttacks("c","c");
    eraseOld(1);
    evolveFromFrame("gigimon", "Gigimon", "Randomly");
    evolveFromFrame("koromon", "Koromon", "Randomly");
    eraseOld(2);
    evolveToFrame("blackagumon", "BlackAgumon", "Black Digitron");
    evolveToFrame("geogreymon", "GeoGreymon", "30 Victories + 100 Dragon Exp");
    evolveToFrame("greymon", "Greymon", "30 Victories");
    evolveToFrame("sukamon", "Sukamon", "10 Defeats");
    evolveToFrame("tyranomon", "Tyranomon", "Lvl 15");
    evolveToFrame("wargreymon", "WarGreymon", "Warp Evolution");
})

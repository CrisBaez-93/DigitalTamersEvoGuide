$("#list_icon").click(function (e) {
    e.preventDefault();
    $(".theme").attr("href", "style_main.css");
})

function replaceName(e) {
    let h3Name = document.getElementById("h3_name");
    h3Name.textContent = e;
}

function replaceImage(e) {
    let mgImage = document.getElementById("mg_image");
    mgImage.src = `./images/full/mg_${e}.png`;
}

function attribute(e) {
    let atributeImage = document.getElementById("atribute_img");
    atributeImage.src = `./images/atr_${e}.png`;
}

function replaceAttacks(e, f) {
    let attack1 = document.getElementById("attack_place_1");
    let attack2 = document.getElementById("attack_place_2");
    attack1.src = `./images/atk_${e}.png`;
    attack2.src = `./images/atk_${f}.png`;
}

function evolveFromFrame(frame, name, req) {
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

function evolveToFrame(frame, name, req) {
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

function eraseOld(a) {
    var element = document.getElementById(`evolve_container${a}`);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function hasClass(e, className) {
    return e.classList.contains(className);
}

/*-------------------- BABYS --------------------*/
function babydmon(){
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
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".babydmon").click(function (e) {
    e.preventDefault();
    babydmon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'babydmon')) {
        babydmon();
    } else if (hasClass(e.target, 'babydmon')) {
        babydmon();
    }
}, false);


function chibimon () {
    $(".theme").attr("href", "style_info.css");
    replaceName("Chibimon");
    replaceImage("chibimon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_dragon", "Dragon Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("blucomon", "Blucomon", "Randomly");
    evolveToFrame("monodramon", "Monodramon", "Randomly");
    evolveToFrame("veemon", "Veemon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".chibimon").click(function (e) {
    e.preventDefault();
    chibimon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'chibimon')) {
        chibimon();
    } else if (hasClass(e.target, 'chibimon')) {
        chibimon();
    }
}, false);


function chocomon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Chocomon");
    replaceImage("chocomon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_dark", "Dark Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("blucomon", "Blucomon", "Randomly");
    evolveToFrame("demidevimon", "DemiDevimon", "Randomly");
    evolveToFrame("lopmon", "Lopmon", "Randomly");
    evolveToFrame("ryudamon", "Ryudamon", "Randomly");
    evolveToFrame("sharmamon", "Sharmamon", "Randomly");
    evolveToFrame("wormmon", "Wormmon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".chocomon").click(function (e) {
    e.preventDefault();
    chocomon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'chocomon')) {
        chocomon();
    } else if (hasClass(e.target, 'chocomon')) {
        chocomon();
    }
}, false);


function cupimon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Cupimon");
    replaceImage("cupimon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_holy", "Holy Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("impmon", "Impmon", "Randomly");
    evolveToFrame("lucemon", "Lucemon", "Randomly");
    evolveToFrame("patamon", "Patamon", "Randomly");
    evolveToFrame("salamon", "Salamon", "Randomly");
    evolveToFrame("terriermon", "Terriermon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".cupimon").click(function (e) {
    e.preventDefault();
    cupimon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'cupimon')) {
        cupimon();
    } else if (hasClass(e.target, 'cupimon')) {
        cupimon();
    }
}, false);


function demimeramon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("DemiMeramon");
    replaceImage("demimeramon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_machine", "Machine Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("candlemon", "Candlemon", "Randomly");
    evolveToFrame("demidevimon", "DemiDevimon", "Randomly");
    evolveToFrame("guilmon", "Guilmon", "Randomly");
    evolveToFrame("impmon", "Impmon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".demimeramon").click(function (e) {
    e.preventDefault();
    demimeramon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'demimeramon')) {
        demimeramon();
    } else if (hasClass(e.target, 'demimeramon')) {
        demimeramon();
    }
}, false);


function dorimon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Dorimon");
    replaceImage("dorimon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("armadillomon", "Armadillomon", "Randomly");
    evolveToFrame("dorumon", "Dorumon", "Randomly");
    evolveToFrame("monodramon", "Monodramon", "Randomly");
    evolveToFrame("sharmamon", "Sharmamon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".dorimon").click(function (e) {
    e.preventDefault();
    dorimon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'dorimon')) {
        dorimon();
    } else if (hasClass(e.target, 'dorimon')) {
        dorimon();
    }
}, false);


function gigimon(){
    $(".theme").attr("href", "style_info.css");
    replaceName("Gigimon");
    replaceImage("gigimon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_dragon", "Dragon Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("agumon", "Agumon", "Randomly");
    evolveToFrame("candlemon", "Candlemon", "Randomly");
    evolveToFrame("guilmon", "Guilmon", "Randomly");
    evolveToFrame("tentomon", "Tentomon", "Randomly");
    evolveToFrame("veemon", "Veemon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".gigimon").click(function (e) {
    e.preventDefault();
    gigimon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'gigimon')) {
        gigimon();
    } else if (hasClass(e.target, 'gigimon')) {
        gigimon();
    }
}, false);


function gummymon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Gummymon");
    replaceImage("gummymon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("armadillomon", "Armadillomon", "Randomly");
    evolveToFrame("blucomon", "Blucomon", "Randomly");
    evolveToFrame("gaomon", "Gaomon", "Randomly");
    evolveToFrame("hagurumon", "Hagurumon", "Randomly");
    evolveToFrame("renamon", "Renamon", "Randomly");
    evolveToFrame("terriermon", "Terriermon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".gummymon").click(function (e) {
    e.preventDefault();
    gummymon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'gummymon')) {
        gummymon();
    } else if (hasClass(e.target, 'gummymon')) {
        gummymon();
    }
}, false);


function hiyarimon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Hiyarimon");
    replaceImage("hiyarimon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_aquatic", "Aquatic Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("blucomon", "Blucomon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".hiyarimon").click(function (e) {
    e.preventDefault();
    hiyarimon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'hiyarimon')) {
        hiyarimon();
    } else if (hasClass(e.target, 'hiyarimon')) {
        hiyarimon();
    }
}, false);


function kapurimon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Kapurimon");
    replaceImage("kapurimon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_machine", "Machine Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("armadillomon", "Armadillomon", "Randomly");
    evolveToFrame("gotsumon", "Gotsumon", "Randomly");
    evolveToFrame("hagurumon", "Hagurumon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".kapurimon").click(function (e) {
    e.preventDefault();
    kapurimon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'kapurimon')) {
        kapurimon();
    } else if (hasClass(e.target, 'kapurimon')) {
        kapurimon();
    }
}, false);


function kodokugumon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("KoDokugumon");
    replaceImage("kodokugumon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_insect", "Insect / Plant Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("dokugumon", "Dokugumon", "Lvl 15");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".kodokugumon").click(function (e) {
    e.preventDefault();
    kodokugumon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'kodokugumon')) {
        kodokugumon();
    } else if (hasClass(e.target, 'kodokugumon')) {
        kodokugumon();
    }
}, false);


function koromon(){
    $(".theme").attr("href", "style_info.css");
    replaceName("Koromon");
    replaceImage("koromon");
    attribute("no");
    replaceAttacks("c", "c");
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
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".koromon").click(function (e) {
    e.preventDefault();
    koromon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'koromon')) {
        koromon();
    } else if (hasClass(e.target, 'koromon')) {
        koromon();
    }
}, false);


function kozenimon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Kozenimon");
    replaceImage("kozenimon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_machine", "Machine Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("zenimon", "Zenimon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".kozenimon").click(function (e) {
    e.preventDefault();
    kozenimon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'kozenimon')) {
        kozenimon();
    } else if (hasClass(e.target, 'kozenimon')) {
        kozenimon();
    }
}, false);


function minomon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Minomon");
    replaceImage("minomon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_insect", "Insect / Plant Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("kunemon", "Kunemon", "Randomly");
    evolveToFrame("tentomon", "Tentomon", "Randomly");
    evolveToFrame("wormmon", "Wormmon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".minomon").click(function (e) {
    e.preventDefault();
    minomon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'minomon')) {
        minomon();
    } else if (hasClass(e.target, 'minomon')) {
        minomon();
    }
}, false);


function missimon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Missimon");
    replaceImage("missimon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_machine", "Machine Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("gizamon", "Gizamon", "Randomly");
    evolveToFrame("hagurumon", "Hagurumon", "Randomly");
    evolveToFrame("penmon", "Penmon", "Randomly");
    evolveToFrame("tentomon", "Tentomon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".missimon").click(function (e) {
    e.preventDefault();
    missimon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'missimon')) {
        missimon();
    } else if (hasClass(e.target, 'missimon')) {
        missimon();
    }
}, false);


function mochimon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Mochimon");
    replaceImage("mochimon");
    attribute("no");
    replaceAttacks("c", "c");
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
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".mochimon").click(function (e) {
    e.preventDefault();
    mochimon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'mochimon')) {
        mochimon();
    } else if (hasClass(e.target, 'mochimon')) {
        mochimon();
    }
}, false);


function nyaromon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Nyaromon");
    replaceImage("nyaromon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("armadillomon", "Armadillomon", "Randomly");
    evolveToFrame("hawkmon", "Hawkmon", "Randomly");
    evolveToFrame("renamon", "Renamon", "Randomly");
    evolveToFrame("salamon", "Salamon", "Randomly");
    evolveToFrame("terriermon", "Terriermon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".nyaromon").click(function (e) {
    e.preventDefault();
    nyaromon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'nyaromon')) {
        nyaromon();
    } else if (hasClass(e.target, 'nyaromon')) {
        nyaromon();
    }
}, false);


function pagumon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Pagumon");
    replaceImage("pagumon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_dark", "Dark Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("demidevimon", "DemiDevimon", "Randomly");
    evolveToFrame("gazimon", "Gazimon", "Randomly");
    evolveToFrame("goblimon", "Goblimon", "Randomly");
    evolveToFrame("impmon", "Impmon", "Randomly");
    evolveToFrame("lopmon", "Lopmon", "Randomly");
    evolveToFrame("tsukaimon", "Tsukaimon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".pagumon").click(function (e) {
    e.preventDefault();
    pagumon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'pagumon')) {
        pagumon();
    } else if (hasClass(e.target, 'pagumon')) {
        pagumon();
    }
}, false);


function pinamon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Pinamon");
    replaceImage("pinamon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_bird", "Bird Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("biyomon", "Biyomon", "Randomly");
    evolveToFrame("elecmon", "Elecmon", "Randomly");
    evolveToFrame("falcomon", "Falcomon", "Randomly");
    evolveToFrame("falcomon2", "Falcomon (2006)", "Randomly");
    evolveToFrame("gotsumon", "Gotsumon", "Randomly");
    evolveToFrame("swimmon", "Swimmon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".pinamon").click(function (e) {
    e.preventDefault();
    pinamon()
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'pinamon')) {
        pinamon();
    } else if (hasClass(e.target, 'pinamon')) {
        pinamon();
    }
}, false);


function pokomon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Pokomon");
    replaceImage("pokomon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("renamon", "Renamon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".pokomon").click(function (e) {
    e.preventDefault();
    pokomon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'pokomon')) {
        pokomon();
    } else if (hasClass(e.target, 'pokomon')) {
        pokomon();
    }
}, false);


function poromon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Poromon");
    replaceImage("poromon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_bird", "Bird Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("hawkmon", "Hawkmon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".poromon").click(function (e) {
    e.preventDefault();
    poromon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'poromon')) {
        poromon();
    } else if (hasClass(e.target, 'poromon')) {
        poromon();
    }
}, false);


function pukamon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Pukamon");
    replaceImage("pukamon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_aquatic", "Aquatic Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("betamon", "Betamon", "Randomly");
    evolveToFrame("gizamon", "Gizamon", "Randomly");
    evolveToFrame("gomamon", "Gomamon", "Randomly");
    evolveToFrame("otamamon", "Otamamon", "Randomly");
    evolveToFrame("sangomon", "Sangomon", "Randomly");
    evolveToFrame("snowgoblimon", "SnowGoblimon", "Randomly");
    evolveToFrame("syakomon", "Syakomon", "Randomly");
    evolveToFrame("yukiagumon", "YukiAgumon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".pukamon").click(function (e) {
    e.preventDefault();
    pukamon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'pukamon')) {
        pukamon();
    } else if (hasClass(e.target, 'pukamon')) {
        pukamon();
    }
}, false);


function puroromon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Puroromon");
    replaceImage("puroromon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_insect", "Insect / Plant Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("dorumon", "Dorumon", "Randomly");
    evolveToFrame("fanbeemon", "FanBeemon", "Randomly");
    evolveToFrame("ryudamon", "Ryudamon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".puroromon").click(function (e) {
    e.preventDefault();
    puroromon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'puroromon')) {
        puroromon();
    } else if (hasClass(e.target, 'puroromon')) {
        puroromon();
    }
}, false);


function pyocomon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Pyocomon");
    replaceImage("pyocomon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_insect", "Insect / Plant Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("biyomon", "Biyomon", "Randomly");
    evolveToFrame("elecmon", "Elecmon", "Randomly");
    evolveToFrame("falcomon2", "Falcomon (2006)", "Randomly");
    evolveToFrame("floramon", "Floramon", "Randomly");
    evolveToFrame("kunemon", "Kunemon", "Randomly");
    evolveToFrame("palmon", "Palmon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".pyocomon").click(function (e) {
    e.preventDefault();
    pyocomon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'pyocomon')) {
        pyocomon();
    } else if (hasClass(e.target, 'pyocomon')) {
        pyocomon();
    }
}, false);


function tanemon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Tanemon");
    replaceImage("tanemon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_insect", "Insect / Plant Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("betamon", "Betamon", "Randomly");
    evolveToFrame("fanbeemon", "FanBeemon", "Randomly");
    evolveToFrame("floramon", "Floramon", "Randomly");
    evolveToFrame("kunemon", "Kunemon", "Randomly");
    evolveToFrame("palmon", "Palmon", "Randomly");
    evolveToFrame("renamon", "Renamon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".tanemon").click(function (e) {
    e.preventDefault();
    tanemon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'tanemon')) {
        tanemon();
    } else if (hasClass(e.target, 'tanemon')) {
        tanemon();
    }
}, false);


function tokomon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Tokomon");
    replaceImage("tokomon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_holy", "Holy Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("hackmon", "Hackmon", "Randomly");
    evolveToFrame("lucemon", "Lucemon", "Randomly");
    evolveToFrame("patamon", "Patamon", "Randomly");
    evolveToFrame("terriermon", "Terriermon", "Randomly");
    evolveToFrame("veemon", "Veemon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".tokomon").click(function (e) {
    e.preventDefault();
    tokomon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'tokomon')) {
        tokomon();
    } else if (hasClass(e.target, 'tokomon')) {
        tokomon();
    }
}, false);


function tsumemon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Tsumemon");
    replaceImage("tsumemon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_dark", "Dark Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("blackagumon", "BlackAgumon", "Randomly");
    evolveToFrame("blackgabumon", "BlackGabumon", "Randomly");
    evolveToFrame("demidevimon", "DemiDevimon", "Randomly");
    evolveToFrame("keramon", "Keramon", "Randomly");
    evolveToFrame("tsukaimon", "Tsukaimon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".tsumemon").click(function (e) {
    e.preventDefault();
    tsumemon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'tsumemon')) {
        tsumemon();
    } else if (hasClass(e.target, 'tsumemon')) {
        tsumemon();
    }
}, false);


function tsunomon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Tsunomon");
    replaceImage("tsunomon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("blackgabumon", "BlackGabumon", "Randomly");
    evolveToFrame("elecmon", "Elecmon", "Randomly");
    evolveToFrame("gabumon", "Gabumon", "Randomly");
    evolveToFrame("gaomon", "Gaomon", "Randomly");
    evolveToFrame("monmon", "Monmon", "Randomly");
    evolveToFrame("monodramon", "Monodramon", "Randomly");
    evolveToFrame("penmon", "Penmon", "Randomly");
    evolveToFrame("psychemon", "Psychemon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".tsunomon").click(function (e) {
    e.preventDefault();
    tsunomon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'tsunomon')) {
        tsunomon();
    } else if (hasClass(e.target, 'tsunomon')) {
        tsunomon();
    }
}, false);


function upamon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Upamon");
    replaceImage("upamon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("armadillomon", "Armadillomon", "Randomly");
    evolveToFrame("blucomon", "Blucomon", "Randomly");
    evolveToFrame("monmon", "Monmon", "Randomly");
    evolveToFrame("sangomon", "Sangomon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".upamon").click(function (e) {
    e.preventDefault();
    upamon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'upamon')) {
        upamon();
    } else if (hasClass(e.target, 'upamon')) {
        upamon();
    }
}, false);


function wanyamon() {
    $(".theme").attr("href", "style_info.css");
    replaceName("Wanyamon");
    replaceImage("wanyamon");
    attribute("no");
    replaceAttacks("c", "c");
    eraseOld(1);
    evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
    eraseOld(2);
    evolveToFrame("dorumon", "Dorumon", "Randomly");
    evolveToFrame("gaomon", "Gaomon", "Randomly");
    evolveToFrame("kudamon", "Kudamon", "Randomly");
    evolveToFrame("monmon", "Monmon", "Randomly");
    evolveToFrame("ryudamon", "Ryudamon", "Randomly");
    evolveToFrame("strabimon", "Strabimon", "Randomly");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".wanyamon").click(function (e) {
    e.preventDefault();
    wanyamon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'wanyamon')) {
        wanyamon();
    } else if (hasClass(e.target, 'wanyamon')) {
        wanyamon();
    }
}, false);




/*-------------------- ROOKIES --------------------*/





function agumon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Agumon");
    replaceImage("agumon");
    attribute("va");
    replaceAttacks("m", "r");
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
    $('body, html').animate({
        scrollTop: '0px'
    }, 200);
}
$(".agumon").click(function (e) {
    e.preventDefault();
    agumon();
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'agumon')) {
        agumon()
    } else if (hasClass(e.target, 'agumon')) {
        agumon()
    }
}, false);


function armadillomon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Armadillomon");
    replaceImage("armadillomon");
    attribute("va");
    replaceAttacks("m", "m");
    eraseOld(1);
    evolveFromFrame("dorimon", "Dorimon", "Randomly");
    evolveFromFrame("gummymon", "Gummymon", "Randomly");
    evolveFromFrame("nyaromon", "Nyaromon", "Randomly");
    evolveFromFrame("upamon", "Upamon", "Randomly");
    eraseOld(2);
    evolveToFrame("ankylomon", "Ankylomon", "Lvl 15");
    evolveToFrame("boarmon", "Boarmon", "Courage Digimental");
    evolveToFrame("deltamon", "Deltamon", "300 Dark Exp");
    evolveToFrame("digmon", "Digmon", "Knowledge Digimental");
    evolveToFrame("elephamon", "Elephamon", "Miracle Digimental");
    evolveToFrame("geremon", "Geremon", "10 Defeats");    
    evolveToFrame("golemon", "Golemon", "300 Machine Exp"); 
    evolveToFrame("pteranomon", "Pteranomon", "Love Digimental");
    evolveToFrame("seahomon", "Seahomon", "Light Digimental");
    evolveToFrame("submarimon", "Submarimon", "Sincerity Digimental");
    evolveToFrame("tuskmon", "Tuskmon", "300 Dragon Exp"); 
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".armadillomon").click(function (e) {
    e.preventDefault();
    armadillomon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'armadillomon')) {
        armadillomon()
    } else if (hasClass(e.target, 'armadillomon')) {
        armadillomon()
    }
}, false);


function betamon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Betamon");
    replaceImage("betamon");
    attribute("vi");
    replaceAttacks("m", "m");
    eraseOld(1);
    evolveFromFrame("pukamon", "Pukamon", "Randomly");
    evolveFromFrame("tanemon", "Tanemon", "Randomly");
    eraseOld(2);
    evolveToFrame("airdramon", "Airdramon", "300 Dragon Xp");
    evolveToFrame("ebidramon", "Ebidramon", "300 Aquatic Xp + 45 Victories");
    evolveToFrame("raremon", "Raremon", "300 Dark Exp");
    evolveToFrame("sandyanmamon", "SandYanmamon", "300 Insect/Plant Xp");
    evolveToFrame("seadramon", "Seadramon", "Lvl 15");
    evolveToFrame("shellnumemon", "ShellNumemon", "300 Aquatic Xp");    
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".betamon").click(function (e) {
    e.preventDefault();
    betamon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'betamon')) {
        betamon()
    } else if (hasClass(e.target, 'betamon')) {
        betamon()
    }
}, false);


function biyomon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Biyomon");
    replaceImage("biyomon");
    attribute("va");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("pinamon", "Pinamon", "Randomly");
    evolveFromFrame("pyocomon", "Pyocomon", "Randomly");
    eraseOld(2);
    evolveToFrame("aquilamon", "Aquilamon", "30 Victories");
    evolveToFrame("birdramon", "Birdramon", "30 Victories + 100 Bird Xp");
    evolveToFrame("cockatrimon", "Cockatrimon", "Lvl 15");
    evolveToFrame("kiwimon", "Kiwimon", "300 Bird Xp");
    evolveToFrame("kuwagamon", "Kuwagamon", "300 Insect/Plant Xp");
    evolveToFrame("sabirdramon", "Sabirdramon", "300 Dark Xp"); 
    evolveToFrame("hououmon", "Hououmon", "Warp Evolution");   
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".biyomon").click(function (e) {
    e.preventDefault();
    biyomon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'biyomon')) {
        biyomon()
    } else if (hasClass(e.target, 'biyomon')) {
        biyomon()
    }
}, false);


function blackagumon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("BlackAgumon");
    replaceImage("blackagumon");
    attribute("vi");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("koromon", "Koromon", "Randomly");
    evolveFromFrame("tsumemon", "Tsumemon", "Randomly");
    eraseOld(2);    
    evolveToFrame("agumon", "Agumon", "Black Digitron");
    evolveToFrame("toyagumon", "ToyAgumon", "Black Digitron");
    evolveToFrame("blackgreymon", "BlackGreymon", "30 Victories");
    evolveToFrame("fugamon", "Fugamon", "300 Dark Xp");
    evolveToFrame("monochromon", "Monochromon", "Lvl 15");
    evolveToFrame("blackwargreymon", "BlackWarGreymon", "Warp Evolution"); 
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".blackagumon").click(function (e) {
    e.preventDefault();
    blackagumon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'blackagumon')) {
        blackagumon()
    } else if (hasClass(e.target, 'blackagumon')) {
        blackagumon()
    }
}, false);


function blackgabumon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("BlackGabumon");
    replaceImage("blackgabumon");
    attribute("vi");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("tsumemon", "Tsumemon", "Randomly");
    evolveFromFrame("tsunomon", "Tsunomon", "Randomly");
    eraseOld(2);    
    evolveToFrame("gabumon", "Gabumon", "Black Digitron");
    evolveToFrame("blackgarurumon", "BlackGarurumon", "Lvl 15");
    evolveToFrame("reppamon", "Reppamon", "300 Holy Xp");
    evolveToFrame("sabirdramon", "Sabirdramon", "300 Bird Xp");
    evolveToFrame("blackmetalgarurumon", "BlackMetalgarurumon", "Warp Evolution"); 
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".blackgabumon").click(function (e) {
    e.preventDefault();
    blackgabumon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'blackgabumon')) {
        blackgabumon()
    } else if (hasClass(e.target, 'blackgabumon')) {
        blackgabumon()
    }
}, false);


function blucomon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Blucomon");
    replaceImage("blucomon");
    attribute("da");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("chibimon", "Chibimon", "Randomly");
    evolveFromFrame("chocomon", "Chocomon", "Randomly");
    evolveFromFrame("gummymon", "Gummymon", "Randomly");
    evolveFromFrame("hiyarimon", "Hiyarimon", "Randomly");
    evolveFromFrame("upamon", "Upamon", "Randomly");
    eraseOld(2);    
    evolveToFrame("coredramon_blue", "Coredramon Blue", "300 Dragon Xp");
    evolveToFrame("gesomon", "Gesomon", "300 Aquatic Xp");
    evolveToFrame("ginryumon", "Ginryumon", "300 Holy Xp");
    evolveToFrame("hyogamon", "Hyogamon", "300 Dark Xp");
    evolveToFrame("veedramon", "Veedramon", "Lvl 15"); 
    evolveToFrame("yukidarumon", "Yukidarumon", "300 Beast Xp");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".blucomon").click(function (e) {
    e.preventDefault();
    blucomon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'blucomon')) {
        blucomon()
    } else if (hasClass(e.target, 'blucomon')) {
        blucomon()
    }
}, false);


function candlemon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Candlemon");
    replaceImage("candlemon");
    attribute("da");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("demimeramon", "DemiMeramon", "Randomly");
    evolveFromFrame("gigimon", "Gigimon", "Randomly");
    eraseOld(2);    
    evolveToFrame("bakemon", "Bakemon", "10 Defeats");
    evolveToFrame("flarerizamon", "Flarerizamon", "300 Dragon Xp");
    evolveToFrame("growlmon", "Growlmon", "30 Victories");
    evolveToFrame("sandyanmamon", "SandYanmamon", "300 Insect/Plant Xp");
    evolveToFrame("wizardmon", "Wizardmon", "Lvl 15");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".candlemon").click(function (e) {
    e.preventDefault();
    candlemon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'candlemon')) {
        candlemon()
    } else if (hasClass(e.target, 'candlemon')) {
        candlemon()
    }
}, false);


function demidevimon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("DemiDevimon");
    replaceImage("demidevimon");
    attribute("vi");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("chocomon", "Chocomon", "Randomly");
    evolveFromFrame("demimeramon", "DemiMeramon", "Randomly");
    evolveFromFrame("tsumemon", "Tsumemon", "Randomly");
    eraseOld(2);    
    evolveToFrame("deltamon", "Deltamon", "300 Dragon Xp");
    evolveToFrame("devimon", "Devimon", "Lvl 15");
    evolveToFrame("raremon", "Raremon", "10 Defeats");
    evolveToFrame("sabirdramon", "Sabirdramon", "300 Bird Xp");
    evolveToFrame("myotismon", "Myotismon", "Warp Evolution");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".demidevimon").click(function (e) {
    e.preventDefault();
    demidevimon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'demidevimon')) {
        demidevimon()
    } else if (hasClass(e.target, 'demidevimon')) {
        demidevimon()
    }
}, false);


function dorumon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Dorumon");
    replaceImage("dorumon");
    attribute("da");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("dorimon", "Dorimon", "Randomly");
    evolveFromFrame("puroromon", "Puroromon", "Randomly");
    evolveFromFrame("wanyamon", "Wanyamon", "Randomly");
    eraseOld(2);    
    evolveToFrame("coelamon", "Coelamon", "300 Aquatic Xp");
    evolveToFrame("deathxdorugamon", "Death-X Dorugamon", "300 Dark Xp");
    evolveToFrame("deltamon", "Deltamon", "300 Dragon Xp");
    evolveToFrame("dorugamon", "Dorugamon", "Lvl 15");
    evolveToFrame("xveemon", "ExVeemon", "Jogress: YukiAgumon");
    evolveToFrame("ginryumon", "Ginryumon", "300 Holy Xp");
    evolveToFrame("machmon", "Machmon", "300 Machine Xp + Indiferent Mood");
    evolveToFrame("meramon", "Meramon", "300 Machine Xp");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".dorumon").click(function (e) {
    e.preventDefault();
    dorumon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'dorumon')) {
        dorumon()
    } else if (hasClass(e.target, 'dorumon')) {
        dorumon()
    }
}, false);


function dracomon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Dracomon");
    replaceImage("dracomon");
    attribute("da");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("babydmon", "Babydmon", "Randomly");
    evolveFromFrame("koromon", "Koromon", "Randomly");
    eraseOld(2);    
    evolveToFrame("coredramon_blue", "Coredramon Blue", "(Atk > Def) + Lvl 15");
    evolveToFrame("coredramon_green", "Coredramon Green", "(Atk < Def) + Lvl 15");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".dracomon").click(function (e) {
    e.preventDefault();
    dracomon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'dracomon')) {
        dracomon()
    } else if (hasClass(e.target, 'dracomon')) {
        dracomon()
    }
}, false);


function elecmon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Elecmon");
    replaceImage("elecmon");
    attribute("da");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("pinamon", "Pinamon", "Randomly");
    evolveFromFrame("pyocomon", "Pyocomon", "Randomly");
    evolveFromFrame("tsunomon", "Tsunomon", "Randomly");
    eraseOld(2);    
    evolveToFrame("cockatrimon", "Cockatrimon", "300 Bird Xp");
    evolveToFrame("hookmon", "Hookmon", "300 Aquatic Xp");
    evolveToFrame("hyogamon", "Hyogamon", "300 Beast Xp + 150 Aquatic Xp");
    evolveToFrame("leomon", "Leomon", "300 Beast Xp");
    evolveToFrame("redveedramon", "Red Veedramon", "300 Dragon Xp");
    evolveToFrame("redvegiemon", "Red Vegiemon", "Lvl 15");
    evolveToFrame("tuskmon", "Tuskmon", "300 Dark Xp");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".elecmon").click(function (e) {
    e.preventDefault();
    elecmon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'elecmon')) {
        elecmon()
    } else if (hasClass(e.target, 'elecmon')) {
        elecmon()
    }
}, false);


function falcomon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Falcomon");
    replaceImage("falcomon");
    attribute("va");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("pinamon", "Pinamon", "Randomly");
    evolveFromFrame("pyocomon", "Pyocomon", "Randomly");
    eraseOld(2);    
    evolveToFrame("diatrymon", "Diatrymon", "Lvl 15");
    evolveToFrame("numemon", "Numemon", "10 Defeats");
    evolveToFrame("ogremon", "Ogremon", "300 Dark Xp");
    evolveToFrame("stingmon", "Stingmon", "300 Insect/Plant Xp");
    evolveToFrame("tyranomon", "Tyranomon", "300 Dragon Xp");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".falcomon").click(function (e) {
    e.preventDefault();
    falcomon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'falcomon')) {
        falcomon()
    } else if (hasClass(e.target, 'falcomon')) {
        falcomon()
    }
}, false);


function falcomon2 (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Falcomon (2006)");
    replaceImage("falcomon2");
    attribute("va");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("pinamon", "Pinamon", "Randomly");
    evolveFromFrame("pyocomon", "Pyocomon", "Randomly");
    eraseOld(2);    
    evolveToFrame("airdramon", "Airdramon", "300 Dragon Xp");
    evolveToFrame("aquilamon", "Aquilamon", "Lvl 15");
    evolveToFrame("diatrymon", "Diatrymon", "300 Bird Xp");
    evolveToFrame("peckmon", "Peckmon", "30 Victories");
    evolveToFrame("stingmon", "Stingmon", "300 Insect/Plant Xp");
    evolveToFrame("ravemon", "Ravemon", "Warp Evolution");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".falcomon2").click(function (e) {
    e.preventDefault();
    falcomon2();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'falcomon2')) {
        falcomon2()
    } else if (hasClass(e.target, 'falcomon2')) {
        falcomon2()
    }
}, false);


function fanbeemon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("FanBeemon");
    replaceImage("fanbeemon");
    attribute("vi");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("puroromon", "Puroromon", "Randomly");
    evolveFromFrame("tanemon", "Tanemon", "Randomly");
    eraseOld(2);    
    evolveToFrame("flymon", "Flymon", "300 Dark Xp");
    evolveToFrame("ginryumon", "Ginryumon", "300 Holy Xp");
    evolveToFrame("guardromongold", "Guardromon Gold", "300 Machine Xp");
    evolveToFrame("stingmon", "Stingmon", "300 Insect/Plant Xp");
    evolveToFrame("waspmon", "Waspmon", "Lvl 15");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".fanbeemon").click(function (e) {
    e.preventDefault();
    fanbeemon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'fanbeemon')) {
        fanbeemon()
    } else if (hasClass(e.target, 'fanbeemon')) {
        fanbeemon()
    }
}, false);


function floramon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Floramon");
    replaceImage("floramon");
    attribute("da");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("pyocomon", "Pyocomon", "Randomly");
    evolveFromFrame("tanemon", "Tanemon", "Randomly");
    eraseOld(2);    
    evolveToFrame("flymon", "Flymon", "300 Insect/Plant Xp + 150 Dark Xp");
    evolveToFrame("kiwimon", "Kiwimon", "Lvl. 15");
    evolveToFrame("meicoomon", "Meicoomon", "300 Beast Xp");
    evolveToFrame("numemon", "Numemon", "10 Defeats");
    evolveToFrame("redvegiemon", "RedVegiemon", "300 Insect/Plant Xp");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".floramon").click(function (e) {
    e.preventDefault();
    floramon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'floramon')) {
        floramon()
    } else if (hasClass(e.target, 'floramon')) {
        floramon()
    }
}, false);


function gabumon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Gabumon");
    replaceImage("gabumon");
    attribute("da");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("tsunomon", "Tsunomon", "Randomly");
    eraseOld(2);    
    evolveToFrame("blackgabumon", "BlackGabumon", "Black Digitron");
    evolveToFrame("bakemon", "Bakemon", "10 Defeats");
    evolveToFrame("blackgatomon", "BlackGatomon", "300 Dark Xp");
    evolveToFrame("dobermon", "Dobermon", "300 Dark Xp");
    evolveToFrame("garurumon", "Garurumon", "30 Victories");
    evolveToFrame("leomon", "Leomon", "Lvl 15");
    evolveToFrame("metalgarurumon", "MetalGarurumon", "Warp Evolution");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".gabumon").click(function (e) {
    e.preventDefault();
    gabumon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'gabumon')) {
        gabumon()
    } else if (hasClass(e.target, 'gabumon')) {
        gabumon()
    }
}, false);


function gaomon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Gaomon");
    replaceImage("gaomon");
    attribute("da");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("gummymon", "Gummymon", "Randomly");
    evolveFromFrame("tsunomon", "Tsunomon", "Randomly");
    eraseOld(2);    
    evolveToFrame("aquilamon", "Aquilamon", "300 Bird Xp");
    evolveToFrame("gaogamon", "Gaogamon", "30 Victories");
    evolveToFrame("gargomon", "Gargomon", "300 Machine Xp");
    evolveToFrame("garurumon", "Garurumon", "Lvl 15");
    evolveToFrame("leomon", "Leomon", "300 Beast Xp");
    evolveToFrame("shellnumemon", "ShellNumemon", "10 Defeats");
    evolveToFrame("miragegaogamon", "MirageGaogamon", "Warp Evolution");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".gaomon").click(function (e) {
    e.preventDefault();
    gaomon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'gaomon')) {
        gaomon()
    } else if (hasClass(e.target, 'gaomon')) {
        gaomon()
    }
}, false);


function gazimon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Gazimon");
    replaceImage("gazimon");
    attribute("vi");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("pagumon", "Pagumon", "Randomly");
    eraseOld(2);    
    evolveToFrame("blackgarurumon", "BlackGarurumon", "Lvl 15");
    evolveToFrame("chrysalimon", "Chrysalimon", "300 Dark Xp");
    evolveToFrame("deltamon", "Deltamon", "300 Dragon Xp");
    evolveToFrame("numemon", "Numemon", "10 Defeats");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".gazimon").click(function (e) {
    e.preventDefault();
    gazimon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'gazimon')) {
        gazimon()
    } else if (hasClass(e.target, 'gazimon')) {
        gazimon()
    }
}, false);


function gizamon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Gizamon");
    replaceImage("gizamon");
    attribute("vi");
    replaceAttacks("m", "r");
    eraseOld(1);
    evolveFromFrame("missimon", "Missimon", "Randomly");
    evolveFromFrame("pukamon", "Pukamon", "Randomly");
    eraseOld(2);    
    evolveToFrame("ebidramon", "Ebidramon", "300 Aquatic Xp + 45 Victories");
    evolveToFrame("gesomon", "Gesomon", "Lvl 15");
    evolveToFrame("seadramon", "Seadramon", "300 Aquatic Xp");
    evolveToFrame("tuskmon", "Tuskmon", "300 Dragon Xp");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".gizamon").click(function (e) {
    e.preventDefault();
    gizamon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'gizamon')) {
        gizamon()
    } else if (hasClass(e.target, 'gizamon')) {
        gizamon()
    }
}, false);


function goblimon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Goblimon");
    replaceImage("goblimon");
    attribute("vi");
    replaceAttacks("m", "r");
    eraseOld(1);    
    evolveFromFrame("mochimon", "Mochimon", "Randomly");
    evolveFromFrame("pagumon", "Pagumon", "Randomly");
    eraseOld(2);    
    evolveToFrame("diatrymon", "Diatrymon", "300 Bird Xp");
    evolveToFrame("fugamon", "Fugamon", "300 Dark Xp");
    evolveToFrame("golemon", "Golemon", "300 Machine Xp");
    evolveToFrame("ogremon", "Ogremon", "Lvl 15");
    evolveToFrame("stingmon", "Stingmon", "300 Insect/Plant Xp");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".goblimon").click(function (e) {
    e.preventDefault();
    goblimon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'goblimon')) {
        goblimon()
    } else if (hasClass(e.target, 'goblimon')) {
        goblimon()
    }
}, false);


function gomamon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Gomamon");
    replaceImage("gomamon");
    attribute("va");
    replaceAttacks("m", "r");
    eraseOld(1);    
    evolveFromFrame("pukamon", "Pukamon", "Randomly");
    eraseOld(2);    
    evolveToFrame("coelamon", "Coelamon", "300 Aquatic Xp");
    evolveToFrame("icemon", "Icemon", "Lvl 15");
    evolveToFrame("ikkakumon", "Ikkakumon", "30 Victories + 100 Aquatic Xp");
    evolveToFrame("yukidarumon", "Yukidarumon", "30 Victories");
    evolveToFrame("vikemon", "Vikemon", "Warp Evolution");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".gomamon").click(function (e) {
    e.preventDefault();
    gomamon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'gomamon')) {
        gomamon()
    } else if (hasClass(e.target, 'gomamon')) {
        gomamon()
    }
}, false);


function gotsumon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Gotsumon");
    replaceImage("gotsumon");
    attribute("da");
    replaceAttacks("m", "m");
    eraseOld(1);    
    evolveFromFrame("kapurimon", "Kapurimon", "Randomly");
    evolveFromFrame("mochimon", "Mochimon", "Randomly");
    evolveFromFrame("pinamon", "Pinamon", "Randomly");
    eraseOld(2);    
    evolveToFrame("deltamon", "Deltamon", "300 Dark Xp");
    evolveToFrame("golemon", "Golemon", "150 Machine Xp + Lvl 15");
    evolveToFrame("guardromon", "Guardromon", "30 Victories");
    evolveToFrame("icemon", "Icemon", "Lvl 15");
    evolveToFrame("starmon", "Starmon", "300 Machine Xp");
    evolveToFrame("tuskmon", "Tuskmon", "300 Dragon Xp");
    evolveToFrame("meteormon", "Meteormon", "Warp Evolution");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".gotsumon").click(function (e) {
    e.preventDefault();
    gotsumon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'gotsumon')) {
        gotsumon()
    } else if (hasClass(e.target, 'gotsumon')) {
        gotsumon()
    }
}, false);


function guilmon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Guilmon");
    replaceImage("guilmon");
    attribute("vi");
    replaceAttacks("m", "r");
    eraseOld(1);    
    evolveFromFrame("demimeramon", "DemiMeramon", "Randomly");
    evolveFromFrame("gigimon", "Gigimon", "Randomly");
    eraseOld(2);        
    evolveToFrame("blackveedramon", "BlackVeedramon", "Lvl 15");
    evolveToFrame("devimon", "Devimon", "300 Dark Xp");
    evolveToFrame("ebidramon", "Ebidramon", "300 Aquatic Xp");
    evolveToFrame("flamedramon", "Flamedramon", "Courage Digimental");
    evolveToFrame("flymon", "Flymon", "300 Insect/Plant Xp");
    evolveToFrame("ginryumon", "Ginryumon", "300 Holy Xp");
    evolveToFrame("growlmon", "Growlmon", "30 Victories");
    evolveToFrame("mechanorimon", "Mechanorimon", "300 Machine Xp");
    evolveToFrame("numemon", "Numemon", "10 Defeats");
    evolveToFrame("tylomon", "Tylomon", "Sincerity Digimental");
    evolveToFrame("dukemon", "Dukemon", "Warp Evolution");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".guilmon").click(function (e) {
    e.preventDefault();
    guilmon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'guilmon')) {
        guilmon()
    } else if (hasClass(e.target, 'guilmon')) {
        guilmon()
    }
}, false);


function hackmon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Hackmon");
    replaceImage("hackmon");
    attribute("da");
    replaceAttacks("m", "r");
    eraseOld(1);    
    evolveFromFrame("koromon", "Koromon", "Randomly");
    evolveFromFrame("mochimon", "Mochimon", "Randomly");
    evolveFromFrame("tokomon", "Tokomon", "Randomly");
    eraseOld(2);        
    evolveToFrame("baohackmon", "BaoHackmon", "30 Victories");
    evolveToFrame("geogreymon", "GeoGreymon", "30 Victories + 100 Dragon Xp");
    evolveToFrame("goldveedramon", "GoldVeedramon", "300 Holy Xp");
    evolveToFrame("monochromon", "Monochromon", "Lvl 15");
    evolveToFrame("redveedramon", "RedVeedramon", "300 Dragon Xp");
    evolveToFrame("sukamon", "Sukamon", "10 Defeats");
    evolveToFrame("jesmon", "Jesmon", "Warp Evolution");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".hackmon").click(function (e) {
    e.preventDefault();
    hackmon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'hackmon')) {
        hackmon()
    } else if (hasClass(e.target, 'hackmon')) {
        hackmon()
    }
}, false);


function hagurumon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Hagurumon");
    replaceImage("hagurumon");
    attribute("vi");
    replaceAttacks("m", "r");
    eraseOld(1);    
    evolveFromFrame("gummymon", "Gummymon", "Randomly");
    evolveFromFrame("kapurimon", "Kapurimon", "Randomly");
    evolveFromFrame("missimon", "Missimon", "Randomly");
    evolveFromFrame("mochimon", "Mochimon", "Randomly");
    eraseOld(2);        
    evolveToFrame("devimon", "Devimon", "300 Dark Xp");
    evolveToFrame("golemon", "Golemon", "300 Machine Xp");
    evolveToFrame("goldveedramon", "GoldVeedramon", "300 Holy Xp");
    evolveToFrame("guardromon", "Guardromon", "30 Victories");
    evolveToFrame("machmon", "Machmon", "300 Machine Xp + Indiferent Mood");
    evolveToFrame("mechanorimon", "Mechanorimon", "Lvl 15");
    evolveToFrame("tyranomon", "Tyranomon", "300 Dragon Xp");
    evolveToFrame("waspmon", "Waspmon", "300 Insect/Plant Xp");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".hagurumon").click(function (e) {
    e.preventDefault();
    hagurumon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'hagurumon')) {
        hagurumon()
    } else if (hasClass(e.target, 'hagurumon')) {
        hagurumon()
    }
}, false);


function hawkmon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Hawkmon");
    replaceImage("hawkmon");
    attribute("un");
    replaceAttacks("m", "r");
    eraseOld(1);    
    evolveFromFrame("nyaromon", "Nyaromon", "Randomly");
    evolveFromFrame("poromon", "Poromon", "Randomly");
    eraseOld(2);        
    evolveToFrame("airdramon", "Airdramon", "300 Dragon Xp");
    evolveToFrame("allomon", "Allomon", "Courage Digimental");
    evolveToFrame("aquilamon", "Aquilamon", "Lvl 15");
    evolveToFrame("birdramon", "Birdramon", "300 Bird Xp");
    evolveToFrame("blackgreymon", "BlackGreymon", "300 Dark Xp");
    evolveToFrame("flybeemon", "Flybeemon", "Knowledge Digimental");
    evolveToFrame("harpymon", "Harpymon", "Light Digimental");
    evolveToFrame("holsmon", "Holsmon", "Love Digimental");
    evolveToFrame("meramon", "Meramon", "300 Machine Xp");
    evolveToFrame("shurimon", "Shurimon", "Purity Digimental");
    evolveToFrame("tocanmon", "Tocanmon", "Kindness Digimental");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".hawkmon").click(function (e) {
    e.preventDefault();
    hawkmon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'hawkmon')) {
        hawkmon()
    } else if (hasClass(e.target, 'hawkmon')) {
        hawkmon()
    }
}, false);


function impmon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Impmon");
    replaceImage("impmon");
    attribute("vi");
    replaceAttacks("r", "r");
    eraseOld(1);    
    evolveFromFrame("cupimon", "Cupimon", "Randomly");
    evolveFromFrame("demimeramon", "Demimeramon", "Randomly");
    evolveFromFrame("pagumon", "Pagumon", "Randomly");
    eraseOld(2);        
    evolveToFrame("bakemon", "Bakemon", "10 Defeats");
    evolveToFrame("fugamon", "Fugamon", "300 Beast Xp");
    evolveToFrame("icedevimon", "IceDevimon", "Lvl 15");
    evolveToFrame("quetzalmon", "Quetzalmon", "Light Digimental");
    evolveToFrame("wizardmon", "Wizardmon", "300 Dark Xp");
    evolveToFrame("beelzemon", "Beelzemon", "Warp Evolution");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".impmon").click(function (e) {
    e.preventDefault();
    impmon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'impmon')) {
        impmon()
    } else if (hasClass(e.target, 'impmon')) {
        impmon()
    }
}, false);


function keramon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Keramon");
    replaceImage("keramon");
    attribute("vi");
    replaceAttacks("m", "r");
    eraseOld(1);    
    evolveFromFrame("tsumemon", "Tsumemon", "Randomly");
    eraseOld(2);        
    evolveToFrame("bakemon", "Bakemon", "10 Defeats");
    evolveToFrame("chrysalimon", "Chrysalimon", "Lvl 15");
    evolveToFrame("guardromon", "Guardromon", "300 Machine Xp");
    evolveToFrame("meicoomon", "Meicoomon", "300 Beast Xp");
    evolveToFrame("diaboromon", "Diaboromon", "Warp Evolution");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".keramon").click(function (e) {
    e.preventDefault();
    keramon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'keramon')) {
        keramon()
    } else if (hasClass(e.target, 'keramon')) {
        keramon()
    }
}, false);


function kudamon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Kudamon");
    replaceImage("kudamon");
    attribute("va");
    replaceAttacks("m", "r");
    eraseOld(1);    
    evolveFromFrame("wanyamon", "Wanyamon", "Randomly");
    eraseOld(2);        
    evolveToFrame("airdramon", "Airdramon", "300 Bird Xp");
    evolveToFrame("bakemon", "Bakemon", "10 Defeats");
    evolveToFrame("gatomon", "Gatomon", "Lvl 15");
    evolveToFrame("reppamon", "Reppamon", "30 Victories");
    evolveToFrame("kentaurosmon", "Kentaurosmon", "Warp Evolution");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".kudamon").click(function (e) {
    e.preventDefault();
    kudamon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'kudamon')) {
        kudamon()
    } else if (hasClass(e.target, 'kudamon')) {
        kudamon()
    }
}, false);


function kunemon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Kunemon");
    replaceImage("kunemon");
    attribute("vi");
    replaceAttacks("m", "r");
    eraseOld(1);    
    evolveFromFrame("minomon", "Minomon", "Randomly");
    evolveFromFrame("mochimon", "Mochimon", "Randomly");
    evolveFromFrame("pyocomon", "Pyocomon", "Randomly");
    evolveFromFrame("tanemon", "Tanemon", "Randomly");
    eraseOld(2);        
    evolveToFrame("airdramon", "Airdramon", "300 Dragon Xp");
    evolveToFrame("bakemon", "Bakemon", "10 Defeats");
    evolveToFrame("flymon", "Flymon", "Lvl 15");
    evolveToFrame("kabuterimon", "Kabuterimon", "30 Victories");
    evolveToFrame("kuwagamon", "Kuwagamon", "300 Insect/Plant Xp");
    evolveToFrame("yanmamon", "Yanmamon", "300 Insect/Plant Xp + 1500 Atk <");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".kunemon").click(function (e) {
    e.preventDefault();
    kunemon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'kunemon')) {
        kunemon()
    } else if (hasClass(e.target, 'kunemon')) {
        kunemon()
    }
}, false);


function lopmon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Lopmon");
    replaceImage("lopmon");
    attribute("da");
    replaceAttacks("m", "r");
    eraseOld(1);    
    evolveFromFrame("chocomon", "Chocomon", "Randomly");
    evolveFromFrame("pagumon", "Pagumon", "Randomly");
    eraseOld(2);        
    evolveToFrame("flarerizamon", "Flarerizamon", "300 Dragon Xp");
    evolveToFrame("turuiemon", "Turuiemon", "Lvl 15");
    evolveToFrame("wendigomon", "Wendigomon", "300 Dark Xp");
    evolveToFrame("antylamon", "Antylamon", "Warp Evolution");
    evolveToFrame("antylamondeva", "Antylamon (Deva)", "Warp Evolution");
    evolveToFrame("rapidmongold", "Rapidmon (Gold)", "Fate Digimental");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".lopmon").click(function (e) {
    e.preventDefault();
    lopmon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'lopmon')) {
        lopmon()
    } else if (hasClass(e.target, 'lopmon')) {
        lopmon()
    }
}, false);


function lucemon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Lucemon");
    replaceImage("lucemon");
    attribute("va");
    replaceAttacks("m", "r");
    eraseOld(1);    
    evolveFromFrame("cupimon", "Cupimon", "Randomly");
    evolveFromFrame("tokomon", "Tokomon", "Randomly");
    eraseOld(2);        
    evolveToFrame("angemon", "Angemon", "300 Holy Xp");
    evolveToFrame("devimon", "Devimon", "300 Dark Xp");
    evolveToFrame("chrysalimon", "Chrysalimon", "30 Victories");
    evolveToFrame("wizardmon", "Wizardmon", "Lvl 15");
    evolveToFrame("lucemonfm", "Lucemon FM", "Warp Evolution");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".lucemon").click(function (e) {
    e.preventDefault();
    lucemon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'lucemon')) {
        lucemon()
    } else if (hasClass(e.target, 'lucemon')) {
        lucemon()
    }
}, false);


function monmon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Monmon");
    replaceImage("monmon");
    attribute("vi");
    replaceAttacks("m", "r");
    eraseOld(1);    
    evolveFromFrame("tsunomon", "Tsunomon", "Randomly");
    evolveFromFrame("upamon", "Upamon", "Randomly");
    evolveFromFrame("wanyamon", "Wanyamon", "Randomly");
    eraseOld(2);        
    evolveToFrame("hookmon", "Hookmon", "Lvl 15");
    evolveToFrame("kiwimon", "Kiwimon", "300 Bird Xp");
    evolveToFrame("stingmon", "Stingmon", "300 Insect/Plant Xp");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".monmon").click(function (e) {
    e.preventDefault();
    monmon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'monmon')) {
        monmon()
    } else if (hasClass(e.target, 'monmon')) {
        monmon()
    }
}, false);


function monodramon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Monodramon");
    replaceImage("monodramon");
    attribute("va");
    replaceAttacks("m", "m");
    eraseOld(1);        
    evolveFromFrame("chibimon", "Chibimon", "Randomly");
    evolveFromFrame("dorimon", "Dorimon", "Randomly");
    evolveFromFrame("tsunomon", "Tsunomon", "Randomly");
    eraseOld(2);        
    evolveToFrame("airdramon", "Airdramon", "300 Dragon Xp");
    evolveToFrame("deltamon", "Deltamon", "300 Dark Xp");
    evolveToFrame("depthmon", "Depthmon", "Sincerity Digimental");
    evolveToFrame("strikedramon", "Strikedramon", "30 Victories");
    evolveToFrame("tuskmon", "Tuskmon", "Lvl 15");
    evolveToFrame("justimon", "Justimon", "Warp Evolution");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".monodramon").click(function (e) {
    e.preventDefault();
    monodramon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'monodramon')) {
        monodramon()
    } else if (hasClass(e.target, 'monodramon')) {
        monodramon()
    }
}, false);


function otamamon (){
    $(".theme").attr("href", "style_info.css");
    replaceName("Otamamon");
    replaceImage("otamamon");
    attribute("vi");
    replaceAttacks("m", "r");
    eraseOld(1);    
    evolveFromFrame("tsunomon", "Tsunomon", "Randomly");
    evolveFromFrame("upamon", "Upamon", "Randomly");
    evolveFromFrame("wanyamon", "Wanyamon", "Randomly");
    eraseOld(2);        
    evolveToFrame("hookmon", "Hookmon", "Lvl 15");
    evolveToFrame("kiwimon", "Kiwimon", "300 Bird Xp");
    evolveToFrame("stingmon", "Stingmon", "300 Insect/Plant Xp");
    $('body, html').animate({
        scrollTop: '0px'
    }, 200); 
}
$(".otamamon").click(function (e) {
    e.preventDefault();
    otamamon();  
})
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'otamamon')) {
        otamamon()
    } else if (hasClass(e.target, 'otamamon')) {
        otamamon()
    }
}, false);
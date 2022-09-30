$("#list_icon").click(function (e) {
  e.preventDefault();
  $(".theme").attr("href", "style_main.css");
});

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
  pFrame.textContent = `${name}`;
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
  pFrame.textContent = `${name}`;
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
function babydmon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".babydmon").click(function (e) {
  e.preventDefault();
  babydmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "babydmon")) {
      babydmon();
    } else if (hasClass(e.target, "babydmon")) {
      babydmon();
    }
  },
  false
);

function chibimon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".chibimon").click(function (e) {
  e.preventDefault();
  chibimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "chibimon")) {
      chibimon();
    } else if (hasClass(e.target, "chibimon")) {
      chibimon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".chocomon").click(function (e) {
  e.preventDefault();
  chocomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "chocomon")) {
      chocomon();
    } else if (hasClass(e.target, "chocomon")) {
      chocomon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".cupimon").click(function (e) {
  e.preventDefault();
  cupimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "cupimon")) {
      cupimon();
    } else if (hasClass(e.target, "cupimon")) {
      cupimon();
    }
  },
  false
);

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
  evolveToFrame("coronamon", "Coronamon", "Randomly");
  evolveToFrame("demidevimon", "DemiDevimon", "Randomly");
  evolveToFrame("guilmon", "Guilmon", "Randomly");
  evolveToFrame("impmon", "Impmon", "Randomly");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".demimeramon").click(function (e) {
  e.preventDefault();
  demimeramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "demimeramon")) {
      demimeramon();
    } else if (hasClass(e.target, "demimeramon")) {
      demimeramon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dorimon").click(function (e) {
  e.preventDefault();
  dorimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dorimon")) {
      dorimon();
    } else if (hasClass(e.target, "dorimon")) {
      dorimon();
    }
  },
  false
);

function gigimon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gigimon").click(function (e) {
  e.preventDefault();
  gigimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gigimon")) {
      gigimon();
    } else if (hasClass(e.target, "gigimon")) {
      gigimon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gummymon").click(function (e) {
  e.preventDefault();
  gummymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gummymon")) {
      gummymon();
    } else if (hasClass(e.target, "gummymon")) {
      gummymon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".hiyarimon").click(function (e) {
  e.preventDefault();
  hiyarimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "hiyarimon")) {
      hiyarimon();
    } else if (hasClass(e.target, "hiyarimon")) {
      hiyarimon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".kapurimon").click(function (e) {
  e.preventDefault();
  kapurimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "kapurimon")) {
      kapurimon();
    } else if (hasClass(e.target, "kapurimon")) {
      kapurimon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".kodokugumon").click(function (e) {
  e.preventDefault();
  kodokugumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "kodokugumon")) {
      kodokugumon();
    } else if (hasClass(e.target, "kodokugumon")) {
      kodokugumon();
    }
  },
  false
);

function koromon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".koromon").click(function (e) {
  e.preventDefault();
  koromon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "koromon")) {
      koromon();
    } else if (hasClass(e.target, "koromon")) {
      koromon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".kozenimon").click(function (e) {
  e.preventDefault();
  kozenimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "kozenimon")) {
      kozenimon();
    } else if (hasClass(e.target, "kozenimon")) {
      kozenimon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".minomon").click(function (e) {
  e.preventDefault();
  minomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "minomon")) {
      minomon();
    } else if (hasClass(e.target, "minomon")) {
      minomon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".missimon").click(function (e) {
  e.preventDefault();
  missimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "missimon")) {
      missimon();
    } else if (hasClass(e.target, "missimon")) {
      missimon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".mochimon").click(function (e) {
  e.preventDefault();
  mochimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "mochimon")) {
      mochimon();
    } else if (hasClass(e.target, "mochimon")) {
      mochimon();
    }
  },
  false
);

function moonmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Moonmon");
  replaceImage("moonmon");
  attribute("no");
  replaceAttacks("c", "c");
  eraseOld(1);
  evolveFromFrame("egg_aquatic", "Aquatic Egg", "Randomly");
  eraseOld(2);
  evolveToFrame("blackagumon", "BlackAgumon", "Randomly");
  evolveToFrame("gazimon", "Gazimon", "Randomly");
  evolveToFrame("lopmon", "Lopmon", "Randomly");
  evolveToFrame("lunamon", "Lunamon", "Randomly");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".moonmon").click(function (e) {
  e.preventDefault();
  moonmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "moonmon")) {
      moonmon();
    } else if (hasClass(e.target, "moonmon")) {
      moonmon();
    }
  },
  false
);

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
  evolveToFrame("bearmon", "Bearmon", "Randomly");
  evolveToFrame("hawkmon", "Hawkmon", "Randomly");
  evolveToFrame("lunamon", "Lunamon", "Randomly");
  evolveToFrame("renamon", "Renamon", "Randomly");
  evolveToFrame("salamon", "Salamon", "Randomly");
  evolveToFrame("terriermon", "Terriermon", "Randomly");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".nyaromon").click(function (e) {
  e.preventDefault();
  nyaromon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "nyaromon")) {
      nyaromon();
    } else if (hasClass(e.target, "nyaromon")) {
      nyaromon();
    }
  },
  false
);

function pagumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Pagumon");
  replaceImage("pagumon");
  attribute("no");
  replaceAttacks("c", "c");
  eraseOld(1);
  evolveFromFrame("egg_dark", "Dark Egg", "Randomly");
  eraseOld(2);
  evolveToFrame("bearmon", "Bearmon", "Randomly");
  evolveToFrame("demidevimon", "DemiDevimon", "Randomly");
  evolveToFrame("gazimon", "Gazimon", "Randomly");
  evolveToFrame("goblimon", "Goblimon", "Randomly");
  evolveToFrame("impmon", "Impmon", "Randomly");
  evolveToFrame("lopmon", "Lopmon", "Randomly");
  evolveToFrame("tsukaimon", "Tsukaimon", "Randomly");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".pagumon").click(function (e) {
  e.preventDefault();
  pagumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "pagumon")) {
      pagumon();
    } else if (hasClass(e.target, "pagumon")) {
      pagumon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".pinamon").click(function (e) {
  e.preventDefault();
  pinamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "pinamon")) {
      pinamon();
    } else if (hasClass(e.target, "pinamon")) {
      pinamon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".pokomon").click(function (e) {
  e.preventDefault();
  pokomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "pokomon")) {
      pokomon();
    } else if (hasClass(e.target, "pokomon")) {
      pokomon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".poromon").click(function (e) {
  e.preventDefault();
  poromon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "poromon")) {
      poromon();
    } else if (hasClass(e.target, "poromon")) {
      poromon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".pukamon").click(function (e) {
  e.preventDefault();
  pukamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "pukamon")) {
      pukamon();
    } else if (hasClass(e.target, "pukamon")) {
      pukamon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".puroromon").click(function (e) {
  e.preventDefault();
  puroromon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "puroromon")) {
      puroromon();
    } else if (hasClass(e.target, "puroromon")) {
      puroromon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".pyocomon").click(function (e) {
  e.preventDefault();
  pyocomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "pyocomon")) {
      pyocomon();
    } else if (hasClass(e.target, "pyocomon")) {
      pyocomon();
    }
  },
  false
);

function sunmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Sunmon");
  replaceImage("sunmon");
  attribute("no");
  replaceAttacks("c", "c");
  eraseOld(1);
  evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
  eraseOld(2);
  evolveToFrame("coronamon", "Coronamon", "Randomly");
  evolveToFrame("guilmon", "Guilmon", "Randomly");
  evolveToFrame("kudamon", "Kudamon", "Randomly");
  evolveToFrame("salamon", "Salamon", "Randomly");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".sunmon").click(function (e) {
  e.preventDefault();
  sunmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "sunmon")) {
      sunmon();
    } else if (hasClass(e.target, "sunmon")) {
      sunmon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".tanemon").click(function (e) {
  e.preventDefault();
  tanemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "tanemon")) {
      tanemon();
    } else if (hasClass(e.target, "tanemon")) {
      tanemon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".tokomon").click(function (e) {
  e.preventDefault();
  tokomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "tokomon")) {
      tokomon();
    } else if (hasClass(e.target, "tokomon")) {
      tokomon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".tsumemon").click(function (e) {
  e.preventDefault();
  tsumemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "tsumemon")) {
      tsumemon();
    } else if (hasClass(e.target, "tsumemon")) {
      tsumemon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".tsunomon").click(function (e) {
  e.preventDefault();
  tsunomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "tsunomon")) {
      tsunomon();
    } else if (hasClass(e.target, "tsunomon")) {
      tsunomon();
    }
  },
  false
);

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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".upamon").click(function (e) {
  e.preventDefault();
  upamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "upamon")) {
      upamon();
    } else if (hasClass(e.target, "upamon")) {
      upamon();
    }
  },
  false
);

function wanyamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Wanyamon");
  replaceImage("wanyamon");
  attribute("no");
  replaceAttacks("c", "c");
  eraseOld(1);
  evolveFromFrame("egg_beast", "Beast Egg", "Randomly");
  eraseOld(2);
  evolveToFrame("bearmon", "Bearmon", "Randomly");
  evolveToFrame("dorumon", "Dorumon", "Randomly");
  evolveToFrame("gaomon", "Gaomon", "Randomly");
  evolveToFrame("kudamon", "Kudamon", "Randomly");
  evolveToFrame("monmon", "Monmon", "Randomly");
  evolveToFrame("ryudamon", "Ryudamon", "Randomly");
  evolveToFrame("strabimon", "Strabimon", "Randomly");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".wanyamon").click(function (e) {
  e.preventDefault();
  wanyamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "wanyamon")) {
      wanyamon();
    } else if (hasClass(e.target, "wanyamon")) {
      wanyamon();
    }
  },
  false
);

/*-------------------- ROOKIES --------------------*/

function agumon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".agumon").click(function (e) {
  e.preventDefault();
  agumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "agumon")) {
      agumon();
    } else if (hasClass(e.target, "agumon")) {
      agumon();
    }
  },
  false
);

function armadillomon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".armadillomon").click(function (e) {
  e.preventDefault();
  armadillomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "armadillomon")) {
      armadillomon();
    } else if (hasClass(e.target, "armadillomon")) {
      armadillomon();
    }
  },
  false
);

function bearmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Bearmon");
  replaceImage("bearmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("nyaromon", "Nyaromon", "Randomly");
  evolveFromFrame("pagumon", "Pagumon", "Randomly");
  evolveFromFrame("wanyamon", "Wanyamon", "Randomly");
  eraseOld(2);
  evolveToFrame("ankylomon", "Ankylomon", "300 Dragon Xp");
  evolveToFrame("dobermon", "Dobermon", "Lvl 15");
  evolveToFrame("gargomon", "Gargomon", "300 Beast Exp + 100 Machine Xp");
  evolveToFrame("garurumon", "Garurumon", "300 Beast Xp");
  evolveToFrame("golemon", "Golemon", "300 Beast Xp");
  evolveToFrame("kiwimon", "Kiwimon", "300 Bird Xp");
  evolveToFrame("meicoomon", "Meicoomon", "300 Dark Xp");
  evolveToFrame("numemon", "Numemon", "10 Defeats");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".bearmon").click(function (e) {
  e.preventDefault();
  bearmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "bearmon")) {
      bearmon();
    } else if (hasClass(e.target, "bearmon")) {
      bearmon();
    }
  },
  false
);

function bemmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BEMmon");
  replaceImage("bemmon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("spawn", "Spawn", "Chrome Mines / Mech Plant");
  eraseOld(2);
  evolveToFrame("snatchmon", "Snatchmon", "Jogress: BEMmon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".bemmon").click(function (e) {
  e.preventDefault();
  bemmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "bemmon")) {
      bemmon();
    } else if (hasClass(e.target, "bemmon")) {
      bemmon();
    }
  },
  false
);

function betamon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".betamon").click(function (e) {
  e.preventDefault();
  betamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "betamon")) {
      betamon();
    } else if (hasClass(e.target, "betamon")) {
      betamon();
    }
  },
  false
);

function biyomon() {
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
  evolveToFrame("minotaurmon", "Minotaurmon", "300 Beast Xp");
  evolveToFrame("sabirdramon", "Sabirdramon", "300 Dark Xp");
  evolveToFrame("hououmon", "Hououmon", "Warp Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".biyomon").click(function (e) {
  e.preventDefault();
  biyomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "biyomon")) {
      biyomon();
    } else if (hasClass(e.target, "biyomon")) {
      biyomon();
    }
  },
  false
);

function blackagumon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".blackagumon").click(function (e) {
  e.preventDefault();
  blackagumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "blackagumon")) {
      blackagumon();
    } else if (hasClass(e.target, "blackagumon")) {
      blackagumon();
    }
  },
  false
);

function blackgabumon() {
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
  evolveToFrame("fugamon", "Fugamon", "300 Dark Xp");
  evolveToFrame("reppamon", "Reppamon", "300 Holy Xp");
  evolveToFrame("sabirdramon", "Sabirdramon", "300 Bird Xp");
  evolveToFrame("blackmetalgarurumon", "BlackMetalgarurumon", "Warp Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".blackgabumon").click(function (e) {
  e.preventDefault();
  blackgabumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "blackgabumon")) {
      blackgabumon();
    } else if (hasClass(e.target, "blackgabumon")) {
      blackgabumon();
    }
  },
  false
);

function blucomon() {
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
  evolveToFrame("omekamon", "Omekamon", "300 Machine Xp");
  evolveToFrame("veedramon", "Veedramon", "Lvl 15");
  evolveToFrame("yukidarumon", "Yukidarumon", "300 Beast Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".blucomon").click(function (e) {
  e.preventDefault();
  blucomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "blucomon")) {
      blucomon();
    } else if (hasClass(e.target, "blucomon")) {
      blucomon();
    }
  },
  false
);

function candlemon() {
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
  evolveToFrame("meramon", "Meramon", "Lvl 15");
  evolveToFrame("sandyanmamon", "SandYanmamon", "300 Insect/Plant Xp");
  evolveToFrame("wizardmon", "Wizardmon", "300 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".candlemon").click(function (e) {
  e.preventDefault();
  candlemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "candlemon")) {
      candlemon();
    } else if (hasClass(e.target, "candlemon")) {
      candlemon();
    }
  },
  false
);

function coronamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Coronamon");
  replaceImage("coronamon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("demimeramon", "DemiMeramon", "Randomly");
  evolveFromFrame("sunmon", "Sunmon", "Randomly");
  eraseOld(2);
  evolveToFrame("coredramon_green", "Coredramon Green", "300 Dragon Exp");
  evolveToFrame("firamon", "Firamon", "Lvl 15 + Neutral Mood");
  evolveToFrame("geogreymon", "GeoGreymon", "300 Dragon Exp + Neutral Mood");
  evolveToFrame("meramon", "Meramon", "Lvl 15");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".coronamon").click(function (e) {
  e.preventDefault();
  coronamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "coronamon")) {
      coronamon();
    } else if (hasClass(e.target, "coronamon")) {
      coronamon();
    }
  },
  false
);

function demidevimon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".demidevimon").click(function (e) {
  e.preventDefault();
  demidevimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "demidevimon")) {
      demidevimon();
    } else if (hasClass(e.target, "demidevimon")) {
      demidevimon();
    }
  },
  false
);

function dorumon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dorumon").click(function (e) {
  e.preventDefault();
  dorumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dorumon")) {
      dorumon();
    } else if (hasClass(e.target, "dorumon")) {
      dorumon();
    }
  },
  false
);

function dracomon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dracomon").click(function (e) {
  e.preventDefault();
  dracomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dracomon")) {
      dracomon();
    } else if (hasClass(e.target, "dracomon")) {
      dracomon();
    }
  },
  false
);

function elecmon() {
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
  evolveToFrame("aegiomon", "Aegiomon", "1200 Holy Xp");
  evolveToFrame("cockatrimon", "Cockatrimon", "300 Bird Xp");
  evolveToFrame("hookmon", "Hookmon", "300 Aquatic Xp");
  evolveToFrame("hyogamon", "Hyogamon", "300 Beast Xp + 150 Aquatic Xp");
  evolveToFrame("leomon", "Leomon", "300 Beast Xp");
  evolveToFrame("redveedramon", "RedVeedramon", "300 Dragon Xp");
  evolveToFrame("redvegiemon", "RedVegiemon", "Lvl 15");
  evolveToFrame("tuskmon", "Tuskmon", "300 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".elecmon").click(function (e) {
  e.preventDefault();
  elecmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "elecmon")) {
      elecmon();
    } else if (hasClass(e.target, "elecmon")) {
      elecmon();
    }
  },
  false
);

function falcomon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".falcomon").click(function (e) {
  e.preventDefault();
  falcomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "falcomon")) {
      falcomon();
    } else if (hasClass(e.target, "falcomon")) {
      falcomon();
    }
  },
  false
);

function falcomon2() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".falcomon2").click(function (e) {
  e.preventDefault();
  falcomon2();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "falcomon2")) {
      falcomon2();
    } else if (hasClass(e.target, "falcomon2")) {
      falcomon2();
    }
  },
  false
);

function fanbeemon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".fanbeemon").click(function (e) {
  e.preventDefault();
  fanbeemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "fanbeemon")) {
      fanbeemon();
    } else if (hasClass(e.target, "fanbeemon")) {
      fanbeemon();
    }
  },
  false
);

function floramon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".floramon").click(function (e) {
  e.preventDefault();
  floramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "floramon")) {
      floramon();
    } else if (hasClass(e.target, "floramon")) {
      floramon();
    }
  },
  false
);

function gabumon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gabumon").click(function (e) {
  e.preventDefault();
  gabumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gabumon")) {
      gabumon();
    } else if (hasClass(e.target, "gabumon")) {
      gabumon();
    }
  },
  false
);

function gaomon() {
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
  evolveToFrame("lekismon", "Lekismon", "Lvl 15 + Pleased Mood");
  evolveToFrame("leomon", "Leomon", "300 Beast Xp");
  evolveToFrame("shellnumemon", "ShellNumemon", "10 Defeats");
  evolveToFrame("miragegaogamon", "MirageGaogamon", "Warp Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gaomon").click(function (e) {
  e.preventDefault();
  gaomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gaomon")) {
      gaomon();
    } else if (hasClass(e.target, "gaomon")) {
      gaomon();
    }
  },
  false
);

function gazimon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gazimon").click(function (e) {
  e.preventDefault();
  gazimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gazimon")) {
      gazimon();
    } else if (hasClass(e.target, "gazimon")) {
      gazimon();
    }
  },
  false
);

function gizamon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gizamon").click(function (e) {
  e.preventDefault();
  gizamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gizamon")) {
      gizamon();
    } else if (hasClass(e.target, "gizamon")) {
      gizamon();
    }
  },
  false
);

function goblimon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".goblimon").click(function (e) {
  e.preventDefault();
  goblimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "goblimon")) {
      goblimon();
    } else if (hasClass(e.target, "goblimon")) {
      goblimon();
    }
  },
  false
);

function gomamon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gomamon").click(function (e) {
  e.preventDefault();
  gomamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gomamon")) {
      gomamon();
    } else if (hasClass(e.target, "gomamon")) {
      gomamon();
    }
  },
  false
);

function gotsumon() {
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
  evolveToFrame("minotaurmon", "Minotaurmon", "300 Beast Xp");
  evolveToFrame("starmon", "Starmon", "300 Machine Xp");
  evolveToFrame("tuskmon", "Tuskmon", "300 Dragon Xp");
  evolveToFrame("meteormon", "Meteormon", "Warp Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gotsumon").click(function (e) {
  e.preventDefault();
  gotsumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gotsumon")) {
      gotsumon();
    } else if (hasClass(e.target, "gotsumon")) {
      gotsumon();
    }
  },
  false
);

function guilmon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".guilmon").click(function (e) {
  e.preventDefault();
  guilmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "guilmon")) {
      guilmon();
    } else if (hasClass(e.target, "guilmon")) {
      guilmon();
    }
  },
  false
);

function hackmon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".hackmon").click(function (e) {
  e.preventDefault();
  hackmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "hackmon")) {
      hackmon();
    } else if (hasClass(e.target, "hackmon")) {
      hackmon();
    }
  },
  false
);

function hagurumon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".hagurumon").click(function (e) {
  e.preventDefault();
  hagurumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "hagurumon")) {
      hagurumon();
    } else if (hasClass(e.target, "hagurumon")) {
      hagurumon();
    }
  },
  false
);

function hawkmon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".hawkmon").click(function (e) {
  e.preventDefault();
  hawkmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "hawkmon")) {
      hawkmon();
    } else if (hasClass(e.target, "hawkmon")) {
      hawkmon();
    }
  },
  false
);

function impmon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".impmon").click(function (e) {
  e.preventDefault();
  impmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "impmon")) {
      impmon();
    } else if (hasClass(e.target, "impmon")) {
      impmon();
    }
  },
  false
);

function keramon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".keramon").click(function (e) {
  e.preventDefault();
  keramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "keramon")) {
      keramon();
    } else if (hasClass(e.target, "keramon")) {
      keramon();
    }
  },
  false
);

function kudamon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".kudamon").click(function (e) {
  e.preventDefault();
  kudamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "kudamon")) {
      kudamon();
    } else if (hasClass(e.target, "kudamon")) {
      kudamon();
    }
  },
  false
);

function kunemon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".kunemon").click(function (e) {
  e.preventDefault();
  kunemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "kunemon")) {
      kunemon();
    } else if (hasClass(e.target, "kunemon")) {
      kunemon();
    }
  },
  false
);

function lopmon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".lopmon").click(function (e) {
  e.preventDefault();
  lopmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "lopmon")) {
      lopmon();
    } else if (hasClass(e.target, "lopmon")) {
      lopmon();
    }
  },
  false
);

function lucemon() {
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
  evolveToFrame("lucemonfm", "Lucemon Falldown", "Warp Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".lucemon").click(function (e) {
  e.preventDefault();
  lucemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "lucemon")) {
      lucemon();
    } else if (hasClass(e.target, "lucemon")) {
      lucemon();
    }
  },
  false
);

function lunamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Lunamon");
  replaceImage("lunamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("moonmon", "Moonmon", "Randomly");
  evolveFromFrame("nyaromon", "Nyaromon", "Randomly");
  eraseOld(2);
  evolveToFrame("coredramon_blue", "Coredramon Blue", "300 Dragon Xp");
  evolveToFrame("gatomon", "Gatomon", "300 Beast Xp");
  evolveToFrame("lekismon", "Lekismon", "Lvl 15 + Neutral Mood");
  evolveToFrame("sistermonciel", "Sistermon Ciel", "Lvl 15");
  evolveToFrame("yukidarumon", "Yukidarumon", "300 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".lunamon").click(function (e) {
  e.preventDefault();
  lunamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "lunamon")) {
      lunamon();
    } else if (hasClass(e.target, "lunamon")) {
      lunamon();
    }
  },
  false
);

function monmon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".monmon").click(function (e) {
  e.preventDefault();
  monmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "monmon")) {
      monmon();
    } else if (hasClass(e.target, "monmon")) {
      monmon();
    }
  },
  false
);

function monodramon() {
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
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".monodramon").click(function (e) {
  e.preventDefault();
  monodramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "monodramon")) {
      monodramon();
    } else if (hasClass(e.target, "monodramon")) {
      monodramon();
    }
  },
  false
);

function negamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Negamon");
  replaceImage("negamon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("void", "Void Digitama", "Randomly");
  eraseOld(2);
  evolveToFrame("negamonevolved", "Negamon Evolved", "Angry Mood");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".negamon").click(function (e) {
  e.preventDefault();
  negamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "negamon")) {
      negamon();
    } else if (hasClass(e.target, "negamon")) {
      negamon();
    }
  },
  false
);

function otamamon() {
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
  evolveToFrame("gekomon", "Gekomon", "Lvl 15");
  evolveToFrame("geremon", "Geremon", "10 Defeats");
  evolveToFrame("hookmon", "Hookmon", "300 Aquatic Exp");
  evolveToFrame("raremon", "Raremon", "300 Dark Exp");
  evolveToFrame("tylomon", "Tylomon", "Sincerity Digimental");
  evolveToFrame("yanmamon", "Yanmamon", "300 Insect/Plant Exp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".otamamon").click(function (e) {
  e.preventDefault();
  otamamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "otamamon")) {
      otamamon();
    } else if (hasClass(e.target, "otamamon")) {
      otamamon();
    }
  },
  false
);

function palmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Palmon");
  replaceImage("palmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("pyocomon", "Pyocomon", "Randomly");
  evolveFromFrame("tanemon", "Tanemon", "Randomly");
  eraseOld(2);
  evolveToFrame("coelamon", "Coelamon", "300 Aquatic Xp");
  evolveToFrame("fugamon", "Fugamon", "300 Dark Xp");
  evolveToFrame("kiwimon", "Kiwimon", "300 Bird Xp");
  evolveToFrame("redvegiemon", "Red Vegiemon", "300 Insect/Plant Xp");
  evolveToFrame("sukamon", "Sukamon", "10 Defeats");
  evolveToFrame("togemon", "Togemon", "30 Victories");
  evolveToFrame("woodmon", "Woodmon", "Lvl 15");
  evolveToFrame("rosemon", "Rosemon", "Warp Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".palmon").click(function (e) {
  e.preventDefault();
  palmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "palmon")) {
      palmon();
    } else if (hasClass(e.target, "palmon")) {
      palmon();
    }
  },
  false
);

function patamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Patamon");
  replaceImage("patamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("cupimon", "Cupimon", "Randomly");
  evolveFromFrame("tokomon", "Tokomon", "Randomly");
  eraseOld(2);
  evolveToFrame("angemon", "Angemon", "30 Victories");
  evolveToFrame("diatrymon", "Diatrymon", "300 Bird Xp");
  evolveToFrame("kyubimon", "Kyubimon", "Lvl 15");
  evolveToFrame("lekismon", "Lekismon + Pleased Mood", "Lvl 15");
  evolveToFrame("mothmon", "Mothmon", "Knowledge Digimental");
  evolveToFrame("pegasmon", "Pegasmon", "Hope Digimental");
  evolveToFrame("pipismon", "Pipismon", "Love Digimental");
  evolveToFrame("reppamon", "Reppamon", "300 Beast Xp");
  evolveToFrame("starmon", "Starmon", "300 Machine Xp");
  evolveToFrame("wizardmon", "Wizardmon", "300 Holy Xp");
  evolveToFrame("seraphimon", "Seraphimon", "Warp Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".patamon").click(function (e) {
  e.preventDefault();
  patamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "patamon")) {
      patamon();
    } else if (hasClass(e.target, "patamon")) {
      patamon();
    }
  },
  false
);

function penmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Penmon");
  replaceImage("penmon");
  attribute("va");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("missimon", "Missimon", "Randomly");
  evolveFromFrame("tsunomon", "Tsunomon", "Randomly");
  eraseOld(2);
  evolveToFrame("cockatrimon", "Cockatrimon", "300 Bird Xp");
  evolveToFrame("diatrymon", "Diatrymon", "Lvl 15");
  evolveToFrame("kiwimon", "Kiwimon", "300 Insect/Plant Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".penmon").click(function (e) {
  e.preventDefault();
  penmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "penmon")) {
      penmon();
    } else if (hasClass(e.target, "penmon")) {
      penmon();
    }
  },
  false
);

function psychemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Psychemon");
  replaceImage("psychemon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("tsunomon", "Tsunomon", "Randomly");
  eraseOld(2);
  evolveToFrame("gargomon", "Gargomon", "30 Victories");
  evolveToFrame("kyubimon", "Kyubimon", "Lvl 15");
  evolveToFrame("machmon", "Machmon", "300 Machine Xp");
  evolveToFrame("shellnumemon", "ShellNumemon", "300 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".psychemon").click(function (e) {
  e.preventDefault();
  psychemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "psychemon")) {
      psychemon();
    } else if (hasClass(e.target, "psychemon")) {
      psychemon();
    }
  },
  false
);

function renamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Renamon");
  replaceImage("renamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gummymon", "Gummymon", "Randomly");
  evolveFromFrame("nyaromon", "Nyaromon", "Randomly");
  evolveFromFrame("pokomon", "Pokomon", "Randomly");
  evolveFromFrame("tanemon", "Tanemon", "Randomly");
  eraseOld(2);
  evolveToFrame("blackgatomon", "BlackGatomon", "300 Dark Xp");
  evolveToFrame("garurumon", "Garurumon", "300 Beast Xp");
  evolveToFrame("ginryumon", "Ginryumon", "300 Holy Xp");
  evolveToFrame("kyubimon", "Kyubimon", "Lvl 15");
  evolveToFrame("lighdramon", "Lighdramon", "Friendship Digimental");
  evolveToFrame("sakuyamon", "Sakuyamon", "Warp Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".renamon").click(function (e) {
  e.preventDefault();
  renamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "renamon")) {
      renamon();
    } else if (hasClass(e.target, "renamon")) {
      renamon();
    }
  },
  false
);

function ryudamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ryudamon");
  replaceImage("ryudamon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("chocomon", "Chocomon", "Randomly");
  evolveFromFrame("puroromon", "Puroromon", "Randomly");
  evolveFromFrame("wanyamon", "Wanyamon", "Randomly");
  eraseOld(2);
  evolveToFrame("airdramon", "Airdramon", "300 Dragon Xp + Cherry Mood");
  evolveToFrame("coredramon_green", "Coredramon Green", "300 Dragon Xp");
  evolveToFrame("ginryumon", "Ginryumon", "Lvl 15");
  evolveToFrame("omekamon", "Omekamon", "300 Machine Xp");
  evolveToFrame("reppamon", "Reppamon", "300 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ryudamon").click(function (e) {
  e.preventDefault();
  ryudamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ryudamon")) {
      ryudamon();
    } else if (hasClass(e.target, "ryudamon")) {
      ryudamon();
    }
  },
  false
);

function salamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Salamon");
  replaceImage("salamon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("cupimon", "Cupimon", "Randomly");
  evolveFromFrame("nyaromon", "Nyaromon", "Randomly");
  eraseOld(2);
  evolveToFrame("baohackmon", "BaoHackmon", "30 Victories");
  evolveToFrame("gatomon", "Gatomon", "Lvl 15");
  evolveToFrame("guardromon", "Guardromon", "300 Machine Xp");
  evolveToFrame("leomon", "Leomon", "300 Beast Xp");
  evolveToFrame("maildramon", "Maildramon", "Fate Digimental");
  evolveToFrame("maildramon", "Maildramon", "Miracle Digimental");
  evolveToFrame("meicoomon", "Meicoomon", "300 Dark Xp");
  evolveToFrame("reppamon", "Reppamon", "300 Holy Xp");
  evolveToFrame("yukidarumon", "Yukidarumon", "300 Aquatic Xp");
  evolveToFrame("magnadramon", "Magnadramon", "Warp Evolution");
  evolveToFrame("ophanimon", "Ophanimon", "Warp Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".salamon").click(function (e) {
  e.preventDefault();
  salamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "salamon")) {
      salamon();
    } else if (hasClass(e.target, "salamon")) {
      salamon();
    }
  },
  false
);

function sangomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Sangomon");
  replaceImage("sangomon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("pukamon", "Pukamon", "Randomly");
  evolveFromFrame("upamon", "Upamon", "Randomly");
  eraseOld(2);
  evolveToFrame("hookmon", "Hookmon", "300 Aquatic Exp");
  evolveToFrame("seadramon", "Seadramon", "Lvl 15");
  evolveToFrame("shellnumemon", "ShellNumemon", "10 Defeats");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".sangomon").click(function (e) {
  e.preventDefault();
  sangomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "sangomon")) {
      sangomon();
    } else if (hasClass(e.target, "sangomon")) {
      sangomon();
    }
  },
  false
);

function sharmamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Sharmamon");
  replaceImage("sharmamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("chocomon", "Chocomon", "Randomly");
  evolveFromFrame("dorimon", "Dorimon", "Randomly");
  eraseOld(2);
  evolveToFrame("fugamon", "Fugamon", "Lvl 15");
  evolveToFrame("meramon", "Meramon", "300 Machine Exp");
  evolveToFrame("numemon", "Numemon", "10 Defeats");
  evolveToFrame("ogremon", "Ogremon", "300 Dark Exp");
  evolveToFrame("stingmon", "Stingmon", "300 Insect/Plant Exp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".sharmamon").click(function (e) {
  e.preventDefault();
  sharmamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "sharmamon")) {
      sharmamon();
    } else if (hasClass(e.target, "sharmamon")) {
      sharmamon();
    }
  },
  false
);

function shoutmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Shoutmon");
  replaceImage("shoutmon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gigimon", "Gigimon", "Randomly");
  evolveFromFrame("tokomon", "Tokomon", "Randomly");
  eraseOld(2);
  evolveToFrame("geremon", "Geremon", "10 Defeats");
  evolveToFrame("greymon", "Greymon", "300 Dragon Xp");
  evolveToFrame("growlmon", "Growlmon", "300 Dragon Xp + Indiferent Mood");
  evolveToFrame("redveedramon", "RedVeedramon", "Lvl 15");
  evolveToFrame(
    "omegashoutmon",
    "OmegaShoutmon",
    "Accelerator + 500 Victories"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".shoutmon").click(function (e) {
  e.preventDefault();
  shoutmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "shoutmon")) {
      shoutmon();
    } else if (hasClass(e.target, "shoutmon")) {
      shoutmon();
    }
  },
  false
);

function snowgoblimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("SnowGoblimon");
  replaceImage("snowgoblimon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("pukamon", "Pukamon", "Randomly");
  eraseOld(2);
  evolveToFrame("ebidramon", "Ebidramon", "300 Aquatic Exp + 45 Victories");
  evolveToFrame("hyogamon", "Hyogamon", "Lvl 15");
  evolveToFrame("ikkakumon", "Ikkakumon", "300 Aquatic Exp");
  evolveToFrame("sukamon", "Sukamon", "10 Defeats");
  evolveToFrame("woodmon", "Woodmon", "300 Insect/Plant Exp");
  evolveToFrame("yukidarumon", "Yukidarumon", "300 Beast Exp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".snowgoblimon").click(function (e) {
  e.preventDefault();
  snowgoblimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "snowgoblimon")) {
      snowgoblimon();
    } else if (hasClass(e.target, "snowgoblimon")) {
      snowgoblimon();
    }
  },
  false
);

function strabimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Strabimon");
  replaceImage("strabimon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("wanyamon", "Wanyamon", "Randomly");
  eraseOld(2);
  evolveToFrame("dobermon", "Dobermon", "Lvl 15");
  evolveToFrame("gargomon", "Gargomon", "300 Beast Exp");
  evolveToFrame("mechanorimon", "Mechanorimon", "300 Machine Exp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".strabimon").click(function (e) {
  e.preventDefault();
  strabimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "strabimon")) {
      strabimon();
    } else if (hasClass(e.target, "strabimon")) {
      strabimon();
    }
  },
  false
);

function swimmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Swimmon");
  replaceImage("swimmon");
  attribute("va");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("pinamon", "Pinamon", "Randomly");
  eraseOld(2);
  evolveToFrame("coelamon", "Coelamon", "Lvl 15");
  evolveToFrame("seahomon", "Seahomon", "300 Dark Exp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".swimmon").click(function (e) {
  e.preventDefault();
  swimmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "swimmon")) {
      swimmon();
    } else if (hasClass(e.target, "swimmon")) {
      swimmon();
    }
  },
  false
);

function syakomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Syakomon");
  replaceImage("syakomon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("pinamon", "Pinamon", "Randomly");
  eraseOld(2);
  evolveToFrame("ebidramon", "Ebidramon", "300 Dragon Exp");
  evolveToFrame("gesomon", "Gesomon", "Lvl 15");
  evolveToFrame("hookmon", "Hookmon", "300 Machine Exp");
  evolveToFrame("seadramon", "Seadramon", "300 Aquatic Exp");
  evolveToFrame("shellnumemon", "ShellNumemon", "10 Defeats");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".syakomon").click(function (e) {
  e.preventDefault();
  syakomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "syakomon")) {
      syakomon();
    } else if (hasClass(e.target, "syakomon")) {
      syakomon();
    }
  },
  false
);

function tentomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Tentomon");
  replaceImage("tentomon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gigimon", "Gigimon", "Randomly");
  evolveFromFrame("minomon", "Minomon", "Randomly");
  evolveFromFrame("missimon", "Missimon", "Randomly");
  evolveFromFrame("mochimon", "Mochimon", "Randomly");
  eraseOld(2);
  evolveToFrame("gekomon", "Gekomon", "300 Aquatic Exp");
  evolveToFrame("geremon", "Geremon", "10 Defeats");
  evolveToFrame("guardromon", "Guardromon", "300 Machine Exp");
  evolveToFrame("kabuterimon", "Kabuterimon", "Lvl 15");
  evolveToFrame("monochromon", "Monochromon", "300 Dragon Exp");
  evolveToFrame("wizardmon", "Wizardmon", "300 Holy Exp");
  evolveToFrame("yanmamon", "Yanmamon", "300 Insect/Plant Exp");
  evolveToFrame("herculeskabuterimon", "HerculesKabuterimon", "Warp Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".tentomon").click(function (e) {
  e.preventDefault();
  tentomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "tentomon")) {
      tentomon();
    } else if (hasClass(e.target, "tentomon")) {
      tentomon();
    }
  },
  false
);

function terriermon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Terriermon");
  replaceImage("terriermon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("cupimon", "Cupimon", "Randomly");
  evolveFromFrame("gummymon", "Gummymon", "Randomly");
  evolveFromFrame("nyaromon", "Nyaromon", "Randomly");
  evolveFromFrame("tokomon", "Tokomon", "Randomly");
  eraseOld(2);
  evolveToFrame("gargomon", "Gargomon", "30 Victories");
  evolveToFrame("gatomon", "Gatomon", "Lvl 15");
  evolveToFrame("geremon", "Geremon", "10 Defeats");
  evolveToFrame("magnamon", "Magnamon", "Miracle Digimental");
  evolveToFrame("minotaurmon", "Minotaurmon", "300 Beast Exp");
  evolveToFrame("ogremon", "Ogremon", "300 Dark Exp");
  evolveToFrame("rapidmongold", "Rapidmon (Gold)", "Fate Digimental");
  evolveToFrame("megagargomon", "MegaGargomon", "Warp Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".terriermon").click(function (e) {
  e.preventDefault();
  terriermon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "terriermon")) {
      terriermon();
    } else if (hasClass(e.target, "terriermon")) {
      terriermon();
    }
  },
  false
);

function toyagumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ToyAgumon");
  replaceImage("toyagumon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("koromon", "Koromon", "Randomly");
  eraseOld(2);
  evolveToFrame("deltamon", "Deltamon", "30 Victories");
  evolveToFrame("flarerizamon", "Flarerizamon", "300 Dragon Exp");
  evolveToFrame("guardromon", "Guardromon", "300 Machine Exp");
  evolveToFrame("guardromongold", "Guardromon (Gold)", "Lvl 15 + Atk > Def");
  evolveToFrame("machmon", "Machmon", "300 Machine Exp + Indiferent Mood");
  evolveToFrame("omekamon", "Omekamon", "Lvl 15");
  evolveToFrame("starmon", "Starmon", "300 Holy Exp");
  evolveToFrame("sukamon", "Sukamon", "10 Defeats");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".toyagumon").click(function (e) {
  e.preventDefault();
  toyagumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "toyagumon")) {
      toyagumon();
    } else if (hasClass(e.target, "toyagumon")) {
      toyagumon();
    }
  },
  false
);

function tsukaimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Tsukaimon");
  replaceImage("tsukaimon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("pagumon", "Pagumon", "Randomly");
  evolveFromFrame("tsumemon", "Tsumemon", "Randomly");
  eraseOld(2);
  evolveToFrame("bakemon", "Bakemon", "Lvl 15");
  evolveToFrame("devimon", "Devimon", "30 Victories");
  evolveToFrame("sabirdramon", "Sabirdramon", "300 Bird Exp");
  evolveToFrame("wizardmon", "Wizardmon", "300 Dark Exp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".tsukaimon").click(function (e) {
  e.preventDefault();
  tsukaimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "tsukaimon")) {
      tsukaimon();
    } else if (hasClass(e.target, "tsukaimon")) {
      tsukaimon();
    }
  },
  false
);

function veemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Veemon");
  replaceImage("veemon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("chibimon", "Chibimon", "Randomly");
  evolveFromFrame("gigimon", "Gigimon", "Randomly");
  evolveFromFrame("koromon", "Koromon", "Randomly");
  eraseOld(2);
  evolveToFrame("airdramon", "Airdramon", "Lvl 15");
  evolveToFrame("depthmon", "Depthmon", "Sincerity Digimental");
  evolveToFrame("flamedramon", "Flamedramon", "Courage Digimental");
  evolveToFrame("goldveedramon", "GoldVeedramon", "Fate Digimental");
  evolveToFrame("lighdramon", "Lighdramon", "Friendship Digimental");
  evolveToFrame("magnamon", "Magnamon", "Miracle Digimental");
  evolveToFrame("minotaurmon", "Minotaurmon", "300 Beast Exp");
  evolveToFrame("raremon", "Raremon", "10 Defeats");
  evolveToFrame("sagittarimon", "Sagittarimon", "Hope Digimental");
  evolveToFrame("veedramon", "Veedramon", "30 Victories");
  evolveToFrame("xveemon", "ExVeemon", "300 Dragon Exp");
  evolveToFrame("yaksamon", "Yaksamon", "Purity Digimental");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".veemon").click(function (e) {
  e.preventDefault();
  veemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "veemon")) {
      veemon();
    } else if (hasClass(e.target, "veemon")) {
      veemon();
    }
  },
  false
);

function wormmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Wormmon");
  replaceImage("wormmon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("chocomon", "Chocomon", "Randomly");
  evolveFromFrame("minomon", "Minomon", "Randomly");
  evolveFromFrame("mochimon", "Mochimon", "Randomly");
  eraseOld(2);
  evolveToFrame("hudiemon", "Hudiemon", "300 Holy Exp + Hudie Medal");
  evolveToFrame(
    "kabuterimon",
    "Kabuterimon",
    "100 Insect/Plant Exp + 30 Victories"
  );
  evolveToFrame("kuwagamon", "Kuwagamon", "30 victories");
  evolveToFrame("monochromon", "Monochromon", "300 Dragon Exp");
  evolveToFrame("quetzalmon", "Quetzalmon", "Light Digimental");
  evolveToFrame("shadramon", "Shadramon", "Courage Digimental");
  evolveToFrame("stingmon", "Stingmon", "Lvl 15");
  evolveToFrame("togemogumon", "Togemogumon", "Friendship Digimental");
  evolveToFrame("waspmon", "Waspmon", "300 Machine Exp");
  evolveToFrame("woodmon", "Woodmon", "300 Insect/Plant Exp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".wormmon").click(function (e) {
  e.preventDefault();
  wormmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "wormmon")) {
      wormmon();
    } else if (hasClass(e.target, "wormmon")) {
      wormmon();
    }
  },
  false
);

function yukiagumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("YukiAgumon");
  replaceImage("yukiagumon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("koromon", "Koromon", "Randomly");
  evolveFromFrame("pukamon", "Pukamon", "Randomly");
  eraseOld(2);
  evolveToFrame("bakemon", "Bakemon", "10 Defeats");
  evolveToFrame("hookmon", "Hookmon", "300 Machine Xp");
  evolveToFrame("hyogamon", "Hyogamon", "300 Beast Xp");
  evolveToFrame("icedevimon", "IceDevimon", "30 Victories");
  evolveToFrame("seadramon", "Seadramon", "300 Aquatic Xp");
  evolveToFrame("xveemon", "ExVeemon", "Jogress: Dorumon");
  evolveToFrame("yukidarumon", "Yukidarumon", "Lvl 15");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".yukiagumon").click(function (e) {
  e.preventDefault();
  yukiagumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "yukiagumon")) {
      yukiagumon();
    } else if (hasClass(e.target, "yukiagumon")) {
      yukiagumon();
    }
  },
  false
);

function zenimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Zenimon");
  replaceImage("zenimon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("kozenimon", "KoZenimon", "Randomly");
  eraseOld(2);
  evolveToFrame("ganemon", "Ganemon", "Lvl 15");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".zenimon").click(function (e) {
  e.preventDefault();
  zenimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "zenimon")) {
      zenimon();
    } else if (hasClass(e.target, "zenimon")) {
      zenimon();
    }
  },
  false
);

/*-------------------- CHAMPION --------------------*/

function aegiomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Aegiomon");
  replaceImage("aegiomon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("elecmon", "Elecmon", "1200 Holy Exp");
  eraseOld(2);
  evolveToFrame(
    "aegiochusmon",
    "Aegiochusmon",
    "Lvl 45 + Chapter 3 + Child of Fate"
  );
  evolveToFrame(
    "aegiochusmonblue",
    "Aegiochusmon Blue",
    "> Machine Exp + Chapter 13 + Child of Fate"
  );
  evolveToFrame(
    "aegiochusmondark",
    "Aegiochusmon Dark",
    "> Dark Exp + Chapter 18 + Child of Fate"
  );
  evolveToFrame(
    "aegiochusmongreen",
    "Aegiochusmon Green",
    "> Insect/Plant Exp + Chapter 12 + Child of Fate"
  );
  evolveToFrame(
    "aegiochusmonholy",
    "Aegiochusmon Holy",
    "> Holy Exp + Chapter 18 + Child of Fate"
  );
  evolveToFrame("flaremon", "Flaremon", "Lvl 45 + Neutral Mood");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".aegiomon").click(function (e) {
  e.preventDefault();
  aegiomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "aegiomon")) {
      aegiomon();
    } else if (hasClass(e.target, "aegiomon")) {
      aegiomon();
    }
  },
  false
);

function airdramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Airdramon");
  replaceImage("airdramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("betamon", "Betamon", "300 Dragon Exp");
  evolveFromFrame("falcomon", "Falcomon", "300 Dragon Exp");
  evolveFromFrame("hawkmon", "Hawkmon", "300 Dragon Exp");
  evolveFromFrame("kudamon", "Kudamon", "300 Bird Exp");
  evolveFromFrame("kunemon", "Kunemon", "300 Dragon Exp");
  evolveFromFrame("monodramon", "Monodramon", "300 Dragon Exp");
  evolveFromFrame("ryudamon", "Ryudamon", "300 Dragon Exp + Cherry Mood");
  evolveFromFrame("veemon", "Veemon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("aeroveedramon", "AeroVeedramon", "Jogress: Tyranomon");
  evolveToFrame("gigadramon", "Gigadramon", "5000 Machine Xp");
  evolveToFrame("hippogriffomon", "Hippogriffomon", "5000 Bird Xp");
  evolveToFrame("mamemon", "Mamemon", "5000 Machine Xp + 3500 Def");
  evolveToFrame("megadramon", "Megadramon", "5000 Dark Xp");
  evolveToFrame("megaseadramon", "MegaSeadramon", "5000 Aquatic Xp");
  evolveToFrame("metalgreymonvirus", "MetalGreymon (Virus)", "Lvl 45");
  evolveToFrame("wingdramon", "Wingdramon", "5000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".airdramon").click(function (e) {
  e.preventDefault();
  airdramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "airdramon")) {
      airdramon();
    } else if (hasClass(e.target, "airdramon")) {
      airdramon();
    }
  },
  false
);

function angemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Angemon");
  replaceImage("angemon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("lucemon", "Lucemon", "300 Holy Exp");
  evolveFromFrame("patamon", "Patamon", "30 Victories");
  eraseOld(2);
  evolveToFrame("andromon", "Andromon", "5000 Machine Xp");
  evolveToFrame("holyangemon", "HolyAngemon", "Lvl 45");
  evolveToFrame("lucemonfm", "Lucemon Falldown", "Jogress: Devimon");
  evolveToFrame("saviorhackmon", "SaviorHackmon", "5000 Dragon Xp");
  evolveToFrame("shakkoumon", "Shakkoumon", "Jogress: Ankylomon");
  evolveToFrame("skullmeramon", "SkullMeramon", "5000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".angemon").click(function (e) {
  e.preventDefault();
  angemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "angemon")) {
      angemon();
    } else if (hasClass(e.target, "angemon")) {
      angemon();
    }
  },
  false
);

function ankylomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ankylomon");
  replaceImage("ankylomon");
  attribute("un");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("armadillomon", "Armadillomon", "Lvl 15");
  evolveFromFrame("bearmon", "Bearmon", "300 Dragon Exp");
  eraseOld(2);
  evolveToFrame("anomalocarimon", "Anomalocarimon", "5000 Aquatic Xp");
  evolveToFrame("brachimon", "Brachimon", "5000 Aquatic Xp + 3000 Dragon Xp");
  evolveToFrame("seahomon", "Seahomon", "Light Digimental");
  evolveToFrame("shakkoumon", "Shakkoumon", "Jogress: Angemon");
  evolveToFrame("skullgreymon", "SkullGreymon", "5000 Dark Xp");
  evolveToFrame("triceramon", "Triceramon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ankylomon").click(function (e) {
  e.preventDefault();
  ankylomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ankylomon")) {
      ankylomon();
    } else if (hasClass(e.target, "ankylomon")) {
      ankylomon();
    }
  },
  false
);

function aquilamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Aquilamon");
  replaceImage("aquilamon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("biyomon", "Biyomon", "30 Victories");
  evolveFromFrame("falcomon2", "Falcomon (2006)", "Lvl 15");
  evolveFromFrame("gaomon", "Gaomon", "300 Bird Exp");
  evolveFromFrame("hawkmon", "Hawkmon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("deramon", "Deramon", "5000 Beast Xp");
  evolveToFrame("garudamon", "Garudamon", "Lvl 45");
  evolveToFrame("loaderliomon", "LoaderLiomon", "5000 Machine Xp");
  evolveToFrame("shurimon", "Shurimon", "Purity Digimental");
  evolveToFrame("silphymon", "Silphymon", "Jogress: Gatomon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".aquilamon").click(function (e) {
  e.preventDefault();
  aquilamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "aquilamon")) {
      aquilamon();
    } else if (hasClass(e.target, "aquilamon")) {
      aquilamon();
    }
  },
  false
);

function bakemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Bakemon");
  replaceImage("bakemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("candlemon", "Candlemon", "10 Defeats");
  evolveFromFrame("gabumon", "Gabumon", "10 Defeats");
  evolveFromFrame("impmon", "Impmon", "10 Defeats");
  evolveFromFrame("keramon", "Keramon", "10 Defeats");
  evolveFromFrame("kudamon", "Kudamon", "10 Defeats");
  evolveFromFrame("kunemon", "Kunemon", "10 Defeats");
  evolveFromFrame("tsukaimon", "Tsukaimon", "Lvl 15");
  evolveFromFrame("yukiagumon", "YukiAgumon", "10 Defeats");
  eraseOld(2);
  evolveToFrame("ladydevimon", "LadyDevimon", "5000 Dark Xp");
  evolveToFrame("phantomon", "Phantomon", "Lvl 45");
  evolveToFrame("warumonzaemon", "WaruMonzaemon", "5000 Beast Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".bakemon").click(function (e) {
  e.preventDefault();
  bakemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "bakemon")) {
      bakemon();
    } else if (hasClass(e.target, "bakemon")) {
      bakemon();
    }
  },
  false
);

function baohackmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BaoHackmon");
  replaceImage("baohackmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("hackmon", "Hackmon", "30 Victories");
  evolveFromFrame("salamon", "Salamon", "30 Victories");
  eraseOld(2);
  evolveToFrame("rizegreymon", "RizeGreymon", "5000 Dragon Xp");
  evolveToFrame("saviorhackmon", "SaviorHackmon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".baohackmon").click(function (e) {
  e.preventDefault();
  baohackmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "baohackmon")) {
      baohackmon();
    } else if (hasClass(e.target, "baohackmon")) {
      baohackmon();
    }
  },
  false
);

function birdramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Birdramon");
  replaceImage("birdramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("biyomon", "Biyomon", "30 Victories + 100 Bird Exp");
  evolveFromFrame("hawkmon", "Hawkmon", "300 Bird Exp");
  eraseOld(2);
  evolveToFrame("aeroveedramon", "AeroVeedramon", "5000 Dragon Xp");
  evolveToFrame("garudamon", "Garudamon", "Lvl 45");
  evolveToFrame("hippogriffomon", "Hippogriffomon", "5000 Beast Xp");
  evolveToFrame("parrotmon", "Parrotmon", "5000 Bird Xp");
  evolveToFrame("tyilinmon", "Tyilinmon", "5000 Holy Xp");
  evolveToFrame("yatagaramon", "Yatagaramon", "5000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".birdramon").click(function (e) {
  e.preventDefault();
  birdramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "birdramon")) {
      birdramon();
    } else if (hasClass(e.target, "birdramon")) {
      birdramon();
    }
  },
  false
);

function blackgarurumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BlackGarurumon");
  replaceImage("blackgarurumon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blackgabumon", "BlackGabumon", "Lvl 15");
  evolveFromFrame("gazimon", "Gazimon", "Lvl 15");
  evolveFromFrame("garurumon", "Garurumon", "Black Digitron");
  eraseOld(2);
  evolveToFrame("machgaogamon", "MachGaogamon", "5000 Machine Xp");
  evolveToFrame("pandamon", "Pandamon", "5000 Beast Xp + Atk > Def");
  evolveToFrame("weregarurumon", "WereGarurumon", "5000 Beast Xp");
  evolveToFrame("weregarurumonblack", "WereGarurumon (Black)", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".blackgarurumon").click(function (e) {
  e.preventDefault();
  blackgarurumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "blackgarurumon")) {
      blackgarurumon();
    } else if (hasClass(e.target, "blackgarurumon")) {
      blackgarurumon();
    }
  },
  false
);

function blackgatomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BlackGatomon");
  replaceImage("blackgatomon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gabumon", "Gabumon", "300 Dark Xp");
  evolveFromFrame("renamon", "Renamon", "300 Dark Xp");
  evolveFromFrame("gatomon", "Gatomon", "Black Digitron");
  eraseOld(2);
  evolveToFrame("darksuperstarmon", "DarkSuperStarmon", "5000 Machine Xp");
  evolveToFrame("ladydevimon", "LadyDevimon", "Lvl 45");
  evolveToFrame("meicrackmonvicious", "Meicrackmon (Vicious)", "5000 Beast Xp");
  evolveToFrame("warumonzaemon", "WaruMonzaemon", "5000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".blackgatomon").click(function (e) {
  e.preventDefault();
  blackgatomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "blackgatomon")) {
      blackgatomon();
    } else if (hasClass(e.target, "blackgatomon")) {
      blackgatomon();
    }
  },
  false
);

function blackgreymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BlackGreymon");
  replaceImage("blackgreymon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blackagumon", "BlackAgumon", "30 Victories");
  evolveFromFrame("hawkmon", "Hawkmon", "300 Dark Xp");
  evolveFromFrame("greymon", "Greymon", "Black Digitron");
  eraseOld(2);
  evolveToFrame("dorugreymon", "DoruGreymon", "5000 Beast Xp");
  evolveToFrame("gigadramon", "Gigadramon", "Lvl 45");
  evolveToFrame("metalgreymonvirus", "MetalGreymon (Virus)", "Lvl 45");
  evolveToFrame("orochimon", "Orochimon", "5000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".blackgreymon").click(function (e) {
  e.preventDefault();
  blackgreymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "blackgreymon")) {
      blackgreymon();
    } else if (hasClass(e.target, "blackgreymon")) {
      blackgreymon();
    }
  },
  false
);

function blackveedramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BlackVeedramon");
  replaceImage("blackveedramon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("guilmon", "Guilmon", "Lvl 15");
  evolveFromFrame("veedramon", "Veedramon", "Black Digitron");
  eraseOld(2);
  evolveToFrame("metalgreymonvirus", "MetalGreymon (Virus)", "Lvl 45");
  evolveToFrame("orochimon", "Orochimon", "5000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".blackveedramon").click(function (e) {
  e.preventDefault();
  blackveedramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "blackveedramon")) {
      blackveedramon();
    } else if (hasClass(e.target, "blackveedramon")) {
      blackveedramon();
    }
  },
  false
);

function chrysalimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Chrysalimon");
  replaceImage("chrysalimon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gazimon", "Gazimon", "300 Dark Xp");
  evolveFromFrame("keramon", "Keramon", "Lvl 15");
  evolveFromFrame("lucemon", "Lucemon", "30 Victories");
  eraseOld(2);
  evolveToFrame(
    "atlurkabuterimonblue",
    "AtlurKabuterimon (Blue)",
    "5000 Insect/Plant Xp"
  );
  evolveToFrame("infermon", "Infermon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".chrysalimon").click(function (e) {
  e.preventDefault();
  chrysalimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "chrysalimon")) {
      chrysalimon();
    } else if (hasClass(e.target, "chrysalimon")) {
      chrysalimon();
    }
  },
  false
);

function cockatrimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Cockatrimon");
  replaceImage("cockatrimon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("biyomon", "Biyomon", "Lvl 15");
  evolveFromFrame("elecmon", "Elecmon", "300 Bird Xp");
  evolveFromFrame("penmon", "Penmon", "300 Bird Xp");
  eraseOld(2);
  evolveToFrame("deramon", "Deramon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".cockatrimon").click(function (e) {
  e.preventDefault();
  cockatrimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "cockatrimon")) {
      cockatrimon();
    } else if (hasClass(e.target, "cockatrimon")) {
      cockatrimon();
    }
  },
  false
);

function coelamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Coelamon");
  replaceImage("coelamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("dorumon", "Dorumon", "300 Aquatic Xp");
  evolveFromFrame("gomamon", "Gomamon", "300 Aquatic Xp");
  evolveFromFrame("palmon", "Palmon", "300 Aquatic Xp");
  evolveFromFrame("swimmon", "Swimmon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("anomalocarimon", "Anomalocarimon", "Jogress: Seadramon");
  evolveToFrame("dagomon", "Dagomon", "5000 Aquatic Xp");
  evolveToFrame("hisyaryumon", "Hisyaryumon", "5000 Holy Xp");
  evolveToFrame("megaseadramon", "MegaSeadramon", "Lvl 45");
  evolveToFrame("waruseadramon", "WaruSeadramon", "5000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".coelamon").click(function (e) {
  e.preventDefault();
  coelamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "coelamon")) {
      coelamon();
    } else if (hasClass(e.target, "coelamon")) {
      coelamon();
    }
  },
  false
);

function coredramon_blue() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Coredramon Blue");
  replaceImage("coredramon_blue");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blucomon", "Blucomon", "300 Dragon Xp");
  evolveFromFrame("dracomon", "Dracomon", "Lvl 15 + Atk > Def");
  evolveFromFrame("lunamon", "Lunamon", "300 Dragon Xp");
  eraseOld(2);
  evolveToFrame("cyberdramon", "Cyberdramon", "5000 Dragon Xp");
  evolveToFrame("wingdramon", "Wingdramon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".coredramon_blue").click(function (e) {
  e.preventDefault();
  coredramon_blue();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "coredramon_blue")) {
      coredramon_blue();
    } else if (hasClass(e.target, "coredramon_blue")) {
      coredramon_blue();
    }
  },
  false
);

function coredramon_green() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Coredramon Blue");
  replaceImage("coredramon_green");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("coronamon", "Coronamon", "300 Dragon Xp");
  evolveFromFrame("dracomon", "Dracomon", "Lvl 15 + Atk < Def");
  evolveFromFrame("ryudamon", "Ryudamon", "300 Dragon Xp");
  eraseOld(2);
  evolveToFrame("groundramon", "Groundramon", "Lvl 45");
  evolveToFrame("triceramon", "Triceramon", "5000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".coredramon_green").click(function (e) {
  e.preventDefault();
  coredramon_green();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "coredramon_green")) {
      coredramon_green();
    } else if (hasClass(e.target, "coredramon_green")) {
      coredramon_green();
    }
  },
  false
);

function deathxdorugamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Death-X Dorugamon");
  replaceImage("deathxdorugamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("dorumon", "Dorumon", "300 Dark Xp");
  eraseOld(2);
  evolveToFrame("deathxdorugreymon", "Death-X DoruGreymon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".deathxdorugamon").click(function (e) {
  e.preventDefault();
  deathxdorugamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "deathxdorugamon")) {
      deathxdorugamon();
    } else if (hasClass(e.target, "deathxdorugamon")) {
      deathxdorugamon();
    }
  },
  false
);

function deltamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Deltamon");
  replaceImage("deltamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("armadillomon", "Armadillomon", "300 Dark Xp");
  evolveFromFrame("demidevimon", "DemiDevimon", "300 Dragon Xp");
  evolveFromFrame("dorumon", "Dorumon", "300 Dragon Xp");
  evolveFromFrame("gazimon", "Gazimon", "300 Dragon Xp");
  evolveFromFrame("gotsumon", "Gotsumon", "300 Dark Xp");
  evolveFromFrame("monodramon", "Monodramon", "300 Dark Xp");
  evolveFromFrame("toyagumon", "ToyAgumon", "300 Dark Xp");
  eraseOld(2);
  evolveToFrame("gigadramon", "Gigadramon", "5000 Machine Xp");
  evolveToFrame("kimeramon", "Kimeramon", "Lvl 45 + 2500 in All Xp");
  evolveToFrame("skullgreymon", "SkullGreymon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".deltamon").click(function (e) {
  e.preventDefault();
  deltamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "deltamon")) {
      deltamon();
    } else if (hasClass(e.target, "deltamon")) {
      deltamon();
    }
  },
  false
);

function devimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Devimon");
  replaceImage("devimon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("demidevimon", "DemiDevimon", "Lvl 15");
  evolveFromFrame("guilmon", "Guilmon", "300 Dark Xp");
  evolveFromFrame("hagurumon", "Hagurumon", "300 Dark Xp");
  evolveFromFrame("lucemon", "Lucemon", "300 Dark Xp");
  evolveFromFrame("tsukaimon", "Tsukaimon", "30 Victories");
  eraseOld(2);
  evolveToFrame("bluemeramon", "BlueMeramon", "5000 Machine Xp");
  evolveToFrame("kimeramon", "Kimeramon", "Jogress: Kabuterimon");
  evolveToFrame("ladydevimon", "LadyDevimon", "5000 Dark Xp");
  evolveToFrame("lucemonfm", "Lucemon Falldown", "Jogress: Angemon");
  evolveToFrame("marinedevimon", "MarineDevimon", "5000 Aquatic Xp");
  evolveToFrame("myotismon", "Myotismon", "Lvl 45");
  evolveToFrame("phantomon", "Phantomon", "Jogress: Meramon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".devimon").click(function (e) {
  e.preventDefault();
  devimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "devimon")) {
      devimon();
    } else if (hasClass(e.target, "devimon")) {
      devimon();
    }
  },
  false
);

function diatrymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Diatrymon");
  replaceImage("diatrymon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("falcomon", "Falcomon", "Lvl 15");
  evolveFromFrame("falcomon2", "Falcomon (2006)", "300 Bird Xp");
  evolveFromFrame("goblimon", "Goblimon", "300 Bird Xp");
  evolveFromFrame("patamon", "Patamon", "300 Bird Xp");
  evolveFromFrame("penmon", "Penmon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("antylamon", "Antylamon", "5000 Beast Xp");
  evolveToFrame("tyilinmon", "Tyilinmon", "5000 Holy Xp");
  evolveToFrame("yatagaramon", "Yatagaramon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".diatrymon").click(function (e) {
  e.preventDefault();
  diatrymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "diatrymon")) {
      diatrymon();
    } else if (hasClass(e.target, "diatrymon")) {
      diatrymon();
    }
  },
  false
);

function dobermon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Dobermon");
  replaceImage("dobermon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bearmon", "Bearmon", "Lvl 15");
  evolveFromFrame("gabumon", "Gabumon", "300 Beast Xp");
  evolveFromFrame("strabimon", "Strabimon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("cerberumon", "Cerberumon", "Lvl 45");
  evolveToFrame("megadramon", "Megadramon", "Jogress: ExVeemon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dobermon").click(function (e) {
  e.preventDefault();
  dobermon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dobermon")) {
      dobermon();
    } else if (hasClass(e.target, "dobermon")) {
      dobermon();
    }
  },
  false
);

function dokugumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Dokugumon");
  replaceImage("dokugumon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("kodokugumon", "KoDokugumon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("arukenimon", "Arukenimon", "Lvl 45");
  evolveToFrame(
    "atlurkabuterimonblue",
    "AtlurKabuterimon (Blue)",
    "5000 Insect/Plant Xp"
  );
  evolveToFrame("infermon", "Infermon", "5000 Dark Xp");
  evolveToFrame("parrotmon", "Parrotmon", "5000 Bird Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dokugumon").click(function (e) {
  e.preventDefault();
  dokugumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dokugumon")) {
      dokugumon();
    } else if (hasClass(e.target, "dokugumon")) {
      dokugumon();
    }
  },
  false
);

function dorugamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Dorugamon");
  replaceImage("dorugamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("dorumon", "Dorumon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("dorugreymon", "DoruGreymon", "Lvl 45");
  evolveToFrame("rizegreymon", "RizeGreymon", "5000 Dragon Xp");
  evolveToFrame("tyilinmon", "Tyilinmon", "5000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dorugamon").click(function (e) {
  e.preventDefault();
  dorugamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dorugamon")) {
      dorugamon();
    } else if (hasClass(e.target, "dorugamon")) {
      dorugamon();
    }
  },
  false
);

function ebidramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ebidramon");
  replaceImage("ebidramon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("betamon", "Betamon", "300 Aquatic Xp + 45 Victories");
  evolveFromFrame("gizamon", "Gizamon", "300 Aquatic Xp + 45 Victories");
  evolveFromFrame("guilmon", "Guilmon", "300 Aquatic Xp");
  evolveFromFrame(
    "snowgoblimon",
    "SnowGoblimon",
    "300 Aquatic Xp + 45 Victories"
  );
  evolveFromFrame("syakomon", "Syakomon", "300 Dragon Xp");
  eraseOld(2);
  evolveToFrame("brachimon", "Brachimon", "5000 Dragon Xp");
  evolveToFrame("megaseadramon", "MegaSeadramon", "Lvl 45");
  evolveToFrame("waruseadramon", "WaruSeadramon", "5000 Dark Xp");
  evolveToFrame("whamon", "Whamon", "5000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ebidramon").click(function (e) {
  e.preventDefault();
  ebidramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ebidramon")) {
      ebidramon();
    } else if (hasClass(e.target, "ebidramon")) {
      ebidramon();
    }
  },
  false
);

function xveemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ExVeemon");
  replaceImage("xveemon");
  attribute("un");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("dorumon", "Dorumon", "Jogress: YukiAgumon");
  evolveFromFrame("veemon", "Veemon", "300 Dragon Xp");
  evolveFromFrame("yukiagumon", "YukiAgumon", "Jogress: Dorumon");
  eraseOld(2);
  evolveToFrame(
    "dinobeemon",
    "Dinobeemon",
    "Jogress: Stingmon (Stingmon active)"
  );
  evolveToFrame("garudamon", "Garudamon", "5000 Bird Xp");
  evolveToFrame("holyangemon", "HolyAngemon", "5000 Holy Xp");
  evolveToFrame("magnamon", "Magnamon", "Miracle Digimental");
  evolveToFrame("megadramon", "Megadramon", "Jogress: Dobermon");
  evolveToFrame("metaltyranomon", "MetalTyranomon", "Lvl 45");
  evolveToFrame("orochimon", "Orochimon", "5000 Dragon Xp");
  evolveToFrame(
    "paildramon",
    "Paildramon",
    "Jogress: Stingmon (ExVeemon active)"
  );
  evolveToFrame("rizegreymon", "RizeGreymon", "5000 Machine Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".xveemon").click(function (e) {
  e.preventDefault();
  xveemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "xveemon")) {
      xveemon();
    } else if (hasClass(e.target, "xveemon")) {
      xveemon();
    }
  },
  false
);

function firamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Firamon");
  replaceImage("firamon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("coronamon", "Coronamon", "Lvl 15 + Neutral Mood");
  eraseOld(2);
  evolveToFrame("flaremon", "Flaremon", "Lvl 45 + Neutral Mood");
  evolveToFrame("monzaemon", "Monzaemon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".firamon").click(function (e) {
  e.preventDefault();
  firamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "firamon")) {
      firamon();
    } else if (hasClass(e.target, "firamon")) {
      firamon();
    }
  },
  false
);

function flarerizamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Flarerizamon");
  replaceImage("flarerizamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("candlemon", "Candlemon", "300 Dragon Xp");
  evolveFromFrame("lopmon", "Lopmon", "300 Dragon Xp");
  evolveFromFrame("toyagumon", "ToyAgumon", "300 Dragon Xp");
  eraseOld(2);
  evolveToFrame("cyberdramon", "Cyberdramon", "5000 Dragon Xp");
  evolveToFrame("deramon", "Deramon", "5000 Bird Xp");
  evolveToFrame("metaltyranomon", "MetalTyranomon", "5000 Machine Xp");
  evolveToFrame("vermilimon", "Vermilimon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".flarerizamon").click(function (e) {
  e.preventDefault();
  flarerizamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "flarerizamon")) {
      flarerizamon();
    } else if (hasClass(e.target, "flarerizamon")) {
      flarerizamon();
    }
  },
  false
);

function flymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Flymon");
  replaceImage("flymon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("fanbeemon", "FanBeemon", "300 Dark Xp");
  evolveFromFrame("floramon", "Floramon", "300 Insect/Plant Xp + 150 Dark Xp");
  evolveFromFrame("guilmon", "Guilmon", "300 Insect/Plant Xp");
  evolveFromFrame("kunemon", "Kunemon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("anomalocarimon", "Anomalocarimon", "5000 Aquatic Xp");
  evolveToFrame("arukenimon", "Arukenimon", "5000 Dark Xp");
  evolveToFrame("cannonbeemon", "Cannonbeemon", "5000 Machine Xp");
  evolveToFrame("okuwamon", "Okuwamon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".flymon").click(function (e) {
  e.preventDefault();
  flymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "flymon")) {
      flymon();
    } else if (hasClass(e.target, "flymon")) {
      flymon();
    }
  },
  false
);

function fugamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Fugamon");
  replaceImage("fugamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blackagumon", "BlackAgumon", "300 Dark Xp");
  evolveFromFrame("blackgabumon", "BlackGabumon", "300 Dark Xp");
  evolveFromFrame("goblimon", "Goblimon", "300 Dark Xp");
  evolveFromFrame("impmon", "Impmon", "300 Beast Xp");
  evolveFromFrame("palmon", "Palmon", "300 Dark Xp");
  evolveFromFrame("sharmamon", "Sharmamon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("garudamon", "Garudamon", "5000 Bird Xp");
  evolveToFrame("machgaogamon", "MachGaogamon", "5000 Beast Xp");
  evolveToFrame("okuwamon", "Okuwamon", "5000 Insect/Plant Xp");
  evolveToFrame("weregarurumonblack", "WereGarurumon (Black)", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".fugamon").click(function (e) {
  e.preventDefault();
  fugamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "fugamon")) {
      fugamon();
    } else if (hasClass(e.target, "fugamon")) {
      fugamon();
    }
  },
  false
);

function ganemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ganemon");
  replaceImage("ganemon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("zenimon", "Zenimon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ganemon").click(function (e) {
  e.preventDefault();
  ganemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ganemon")) {
      ganemon();
    } else if (hasClass(e.target, "ganemon")) {
      ganemon();
    }
  },
  false
);

function gaogamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Gaogamon");
  replaceImage("gaogamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gaomon", "Gaomon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("anomalocarimon", "Anomalocarimon", "5000 Aquatic Xp");
  evolveToFrame("machgaogamon", "MachGaogamon", "Lvl 45");
  evolveToFrame("rapidmon", "Rapidmon", "Jogress: Guardromon");
  evolveToFrame("tyilinmon", "Tyilinmon", "5000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gaogamon").click(function (e) {
  e.preventDefault();
  gaogamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gaogamon")) {
      gaogamon();
    } else if (hasClass(e.target, "gaogamon")) {
      gaogamon();
    }
  },
  false
);

function gargomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Gargomon");
  replaceImage("gargomon");
  attribute("va");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("bearmon", "Bearmon", "300 Beast Xp + 100 Machine Xp");
  evolveFromFrame("gaomon", "Gaomon", "300 Machine Xp");
  evolveFromFrame("strabimon", "Strabimon", "300 Beast Xp");
  evolveFromFrame("terriermon", "Terriermon", "30 Victories");
  eraseOld(2);
  evolveToFrame("antylamon", "Antylamon", "5000 Holy Xp");
  evolveToFrame("pandamon", "Pandamon", "5000 Beast Xp");
  evolveToFrame("rapidmon", "Rapidmon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gargomon").click(function (e) {
  e.preventDefault();
  gargomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gargomon")) {
      gargomon();
    } else if (hasClass(e.target, "gargomon")) {
      gargomon();
    }
  },
  false
);

function garurumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Garurumon");
  replaceImage("garurumon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bearmon", "Bearmon", "300 Beast Xp");
  evolveFromFrame("gabumon", "Gabumon", "30 Victories");
  evolveFromFrame("gaomon", "Gaomon", "Lvl 15");
  evolveFromFrame("renamon", "Renamon", "300 Beast Xp");
  eraseOld(2);
  evolveToFrame("blackgarurumon", "BlackGarurumon", "Black Digitron");
  evolveToFrame("cerberumon", "Cerberumon", "5000 Beast Xp");
  evolveToFrame("rapidmon", "Rapidmon", "5000 Machine Xp");
  evolveToFrame("waruseadramon", "WaruSeadramon", "5000 Aquatic Xp");
  evolveToFrame("weregarurumon", "WereGarurumon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".garurumon").click(function (e) {
  e.preventDefault();
  garurumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "garurumon")) {
      garurumon();
    } else if (hasClass(e.target, "garurumon")) {
      garurumon();
    }
  },
  false
);

function gatomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Gatomon");
  replaceImage("gatomon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("kudamon", "Kudamon", "Lvl 15");
  evolveFromFrame("lunamon", "Lunamon", "300 Beast Xp");
  evolveFromFrame("salamon", "Salamon", "Lvl 15");
  evolveFromFrame("terriermon", "Terriermon", "Lvl 15");
  evolveFromFrame("blackgatomon", "BlackGatomon", "Black Digitron");
  eraseOld(2);
  evolveToFrame("angewomon", "Angewomon", "Lvl 45");
  evolveToFrame("ladydevimon", "LadyDevimon", "5000 Dark Xp");
  evolveToFrame("lilymon", "Lilymon", "5000 Insect/Plant Xp");
  evolveToFrame("lynxmon", "Lynxmon", "Courage Digimental");
  evolveToFrame("maildramon", "Maildramon", "Miracle Digimental");
  evolveToFrame("nefertimon", "Nefertimon", "Light Digimental");
  evolveToFrame("silphymon", "Silphymon", "Jogress: Aquilamon");
  evolveToFrame("tylomon", "Tylomon", "Sincerity Digimental");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gatomon").click(function (e) {
  e.preventDefault();
  gatomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gatomon")) {
      gatomon();
    } else if (hasClass(e.target, "gatomon")) {
      gatomon();
    }
  },
  false
);

function gekomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Gekomon");
  replaceImage("gekomon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("otamamon", "Otamamon", "Lvl 15");
  evolveFromFrame("tentomon", "Tentomon", "300 Aquatic Xp");
  eraseOld(2);
  evolveToFrame("hippogriffomon", "Hippogrifomon", "5000 Bird Xp");
  evolveToFrame("okuwamon", "Okuwamon", "5000 Insect/Plant Xp");
  evolveToFrame("shogungekomon", "ShogunGekomon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gekomon").click(function (e) {
  e.preventDefault();
  gekomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gekomon")) {
      gekomon();
    } else if (hasClass(e.target, "gekomon")) {
      gekomon();
    }
  },
  false
);

function geogreymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("GeoGreymon");
  replaceImage("geogreymon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("agumon", "Agumon", "30 Victories + 100 Dragon Xp");
  evolveFromFrame("coronamon", "Coronamon", "300 Dragon Xp + Indiferent Mood");
  evolveFromFrame("hackmon", "Hackmon", "30 Victories + 100 Dragon Xp");
  eraseOld(2);
  evolveToFrame("flaremon", "Flaremon", "Lvl 45 + Neutral Mood");
  evolveToFrame("gigadramon", "Gigadramon", "5000 Dark Xp");
  evolveToFrame("metaltyranomon", "MetalTyranomon", "Lvl 45");
  evolveToFrame(
    "rizegreymon",
    "RizeGreymon",
    "250 Victories + 5000 Machine Xp"
  );
  evolveToFrame("wargrowlmon", "WarGrowlmon", "5000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".geogreymon").click(function (e) {
  e.preventDefault();
  geogreymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "geogreymon")) {
      geogreymon();
    } else if (hasClass(e.target, "geogreymon")) {
      geogreymon();
    }
  },
  false
);

function geremon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Geremon");
  replaceImage("geremon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("armadillomon", "Armadillomon", "10 Defeats");
  evolveFromFrame("otamamon", "Otamamon", "10 Defeats");
  evolveFromFrame("shoutmon", "Shoutmon", "10 Defeats");
  evolveFromFrame("tentomon", "Tentomon", "10 Defeats");
  evolveFromFrame("terriermon", "Terriermon", "10 Defeats");
  eraseOld(2);
  evolveToFrame("metalmamemon", "MetalMamemon", "5000 Machine Xp");
  evolveToFrame("monzaemon", "Monzaemon", "5000 Beast Xp");
  evolveToFrame("phantomon", "Phantomon", "5000 Dark Xp");
  evolveToFrame("superstarmon", "SuperStarmon", "250 Victories");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".geremon").click(function (e) {
  e.preventDefault();
  geremon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "geremon")) {
      geremon();
    } else if (hasClass(e.target, "geremon")) {
      geremon();
    }
  },
  false
);

function gesomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Gesomon");
  replaceImage("gesomon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blucomon", "Blucomon", "300 Aquatic Xp");
  evolveFromFrame("gizamon", "Gizamon", "Lvl 15");
  evolveFromFrame("syakomon", "Syakomon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("marinedevimon", "MarineDevimon", "Lvl 15");
  evolveToFrame("megaseadramon", "MegaSeadramon", "5000 Aquatic Xp");
  evolveToFrame("waruseadramon", "WaruSeadramon", "5000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gesomon").click(function (e) {
  e.preventDefault();
  gesomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gesomon")) {
      gesomon();
    } else if (hasClass(e.target, "gesomon")) {
      gesomon();
    }
  },
  false
);

function ginryumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ginryumon");
  replaceImage("ginryumon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blucomon", "Blucomon", "300 Holy Xp");
  evolveFromFrame("dorumon", "Dorumon", "300 Holy Xp");
  evolveFromFrame("fanbeemon", "FanBeemon", "300 Holy Xp");
  evolveFromFrame("guilmon", "Guilmon", "300 Holy Xp");
  evolveFromFrame("renamon", "Renamon", "300 Holy Xp");
  evolveFromFrame("ryudamon", "Ryudamon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("cannonbeemon", "CannonBeemon", "5000 Insect/Plant Xp");
  evolveToFrame("hisyaryumon", "Hisyaryumon", "Lvl 45");
  evolveToFrame("megaseadramon", "MegaSeadramon", "5000 Aquatic Xp");
  evolveToFrame("skullbaluchimon", "SkullBaluchimon", "5000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ginryumon").click(function (e) {
  e.preventDefault();
  ginryumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ginryumon")) {
      ginryumon();
    } else if (hasClass(e.target, "ginryumon")) {
      ginryumon();
    }
  },
  false
);

function golemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Golemon");
  replaceImage("golemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("armadillomon", "Armadillomon", "300 Machine Xp");
  evolveFromFrame("bearmon", "Bearmon", "300 Beast Xp");
  evolveFromFrame("goblimon", "Goblimon", "300 Machine Xp");
  evolveFromFrame("gotsumon", "Gotsumon", "150 Machine Xp + Lvl 15");
  evolveFromFrame("hagurumon", "Hagurumon", "300 Machine Xp");
  eraseOld(2);
  evolveToFrame("ladydevimon", "LadyDevimon", "5000 Dark Xp");
  evolveToFrame("metaltyranomon", "MetalTyranomon", "5000 Dragon Xp");
  evolveToFrame("pandamon", "Pandamon", "5000 Beast Xp");
  evolveToFrame("zudomon", "Zudomon", "5000 Dragon Xp");
  evolveToFrame(
    "banchogolemon",
    "BanchoGolemon",
    "Gakuran + 250 Victories + 0 Defeats"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".golemon").click(function (e) {
  e.preventDefault();
  golemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "golemon")) {
      golemon();
    } else if (hasClass(e.target, "golemon")) {
      golemon();
    }
  },
  false
);

function greymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Greymon");
  replaceImage("greymon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("agumon", "Agumon", "30 Victories");
  evolveFromFrame("shoutmon", "Shoutmon", "300 Dragon Xp");
  evolveFromFrame("blackgreymon", "BlackGreymon", "Black Digitron");
  eraseOld(2);
  evolveToFrame("greymonxros", "Greymon (Xros)", "Jogress: MasterTyranomon");
  evolveToFrame("greymonxros", "Greymon (Xros)", "Jogress: Mechanorimon");
  evolveToFrame(
    "metalgreymon",
    "MetalGreymon",
    "250 victories + 5000 Dragon Xp"
  );
  evolveToFrame("metalgreymonvirus", "MetalGreymon (Virus)", "Lvl 45");
  evolveToFrame("metaltyranomon", "MetalTyranomon", "5000 Machine Xp");
  evolveToFrame("skullgreymon", "SkullGreymon", "5000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".greymon").click(function (e) {
  e.preventDefault();
  greymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "greymon")) {
      greymon();
    } else if (hasClass(e.target, "greymon")) {
      greymon();
    }
  },
  false
);

function greymonxros() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Greymon (Xros)");
  replaceImage("greymonxros");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("greymon", "Greymon", "Jogress: MasterTyranomon");
  evolveFromFrame("greymon", "Greymon", "Jogress: Mechanorimon");
  evolveFromFrame("mechanorimon", "Mechanorimon", "Jogress: Greymon");
  evolveFromFrame("mechanorimon", "Mechanorimon", "Jogress: MasterTyranomon");
  evolveFromFrame("mastertyranomon", "MasterTyranomon", "Jogress: Greymon");
  evolveFromFrame(
    "mastertyranomon",
    "MasterTyranomon",
    "Jogress: Mechanorimon"
  );
  eraseOld(2);
  evolveToFrame("dorugreymon", "DoruGreymon", "250 Victories");
  evolveToFrame("megadramon", "Megadramon", "5000 Dragon Xp");
  evolveToFrame("skullgreymon", "SkullGreymon", "30 Defeats");
  evolveToFrame("triceramon", "Triceramon", "Lvl 45");
  evolveToFrame("wargrowlmon", "WarGrowlmon", "5000 Machine Xp");
  evolveToFrame("weregarurumon", "WereGarurumon", "5000 Beast Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".greymonxros").click(function (e) {
  e.preventDefault();
  greymonxros();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "greymonxros")) {
      greymonxros();
    } else if (hasClass(e.target, "greymonxros")) {
      greymonxros();
    }
  },
  false
);

function growlmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Growlmon");
  replaceImage("growlmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("candlemon", "Candlemon", "30 Victories");
  evolveFromFrame("guilmon", "Guilmon", "30 Victories");
  evolveFromFrame("shoutmon", "Shoutmon", "300 Dragon Xp + Indiferent Mood");
  eraseOld(2);
  evolveToFrame("bluemeramon", "Blue Meramon", "Lvl 45");
  evolveToFrame("groundramon", "Groundramon", "5000 Dragon Xp");
  evolveToFrame("skullgreymon", "SkullGreymon", "5000 Dark Xp");
  evolveToFrame("wargrowlmon", "WarGrowlmon", "250 Victories");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".growlmon").click(function (e) {
  e.preventDefault();
  growlmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "growlmon")) {
      growlmon();
    } else if (hasClass(e.target, "growlmon")) {
      growlmon();
    }
  },
  false
);

function guardromon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Guardromon");
  replaceImage("guardromon");
  attribute("vi");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("gotsumon", "Gotsumon", "30 Victories");
  evolveFromFrame("hagurumon", "Hagurumon", "30 Victories");
  evolveFromFrame("keramon", "Keramon", "300 Machine Xp");
  evolveFromFrame("salamon", "Salamon", "300 Machine Xp");
  evolveFromFrame("tentomon", "Tentomon", "300 Machine Xp");
  evolveFromFrame("toyagumon", "ToyAgumon", "300 Machine Xp");
  eraseOld(2);
  evolveToFrame("andromon", "Andromon", "Lvl 45");
  evolveToFrame("gigadramon", "Gigadramon", "5000 Dark Xp");
  evolveToFrame("metalmamemon", "MetalMamemon", "5000 Machine Xp");
  evolveToFrame("rapidmon", "Rapidmon", "Jogress: Gaogamon");
  evolveToFrame("rizegreymon", "RizeGreymon", "5000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".guardromon").click(function (e) {
  e.preventDefault();
  guardromon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "guardromon")) {
      guardromon();
    } else if (hasClass(e.target, "guardromon")) {
      guardromon();
    }
  },
  false
);

function guardromongold() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Guardromon");
  replaceImage("guardromongold");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("fanbeemon", "FanBeemon", "300 Machine Xp");
  evolveFromFrame("toyagumon", "ToyAgumon", "Lvl 15 + Atk > Def");
  eraseOld(2);
  evolveToFrame("magnamon", "Magnamon", "Miracle Digimental");
  evolveToFrame("rapidmongold", "Rapidmon (Gold)", "Fate Digimental");
  evolveToFrame("datamon", "Datamon", "5000 Dark Xp");
  evolveToFrame("metalmamemon", "MetalMamemon", "5000 Machine Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".guardromongold").click(function (e) {
  e.preventDefault();
  guardromongold();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "guardromongold")) {
      guardromongold();
    } else if (hasClass(e.target, "guardromongold")) {
      guardromongold();
    }
  },
  false
);

function hookmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Hookmon");
  replaceImage("hookmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("elecmon", "Elecmon", "300 Aquatic Xp");
  evolveFromFrame("monmon", "Monmon", "Lvl 15");
  evolveFromFrame("otamamon", "Otamamon", "300 Aquatic Xp");
  evolveFromFrame("sangomon", "Sangomon", "300 Aquatic Xp");
  evolveFromFrame("syakomon", "Syakomon", "300 Machine Xp");
  evolveFromFrame("yukiagumon", "YukiAgumon", "300 Machine Xp");
  eraseOld(2);
  evolveToFrame("captainhookmon", "CaptainHookmon", "Lvl 45");
  evolveToFrame("metalmamemon", "MetalMamemon", "5000 Machine Xp");
  evolveToFrame("meteormon", "Meteormon", "40 Defeats");
  evolveToFrame("sirenmon", "Sirenmon", "5000 Bird Xp");
  evolveToFrame("waruseadramon", "WaruSeadramon", "5000 Dark Xp");
  evolveToFrame("zudomon", "Zudomon", "5000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".hookmon").click(function (e) {
  e.preventDefault();
  hookmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "hookmon")) {
      hookmon();
    } else if (hasClass(e.target, "hookmon")) {
      hookmon();
    }
  },
  false
);

function hudiemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Hudiemon");
  replaceImage("hudiemon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("wormmon", "Wormmon", "300 Holy Xp + Hudie Medal");
  eraseOld(2);
  evolveToFrame("cannonbeemon", "CannonBeemon", "5000 Machine Xp");
  evolveToFrame("lilymon", "Lilymon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".hudiemon").click(function (e) {
  e.preventDefault();
  hudiemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "hudiemon")) {
      hudiemon();
    } else if (hasClass(e.target, "hudiemon")) {
      hudiemon();
    }
  },
  false
);

function hyogamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Hyogamon");
  replaceImage("hyogamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blucomon", "Blucomon", "300 Dark Xp");
  evolveFromFrame("elecmon", "Elecmon", "300 Beast Xp + 150 Aquatic Xp");
  evolveFromFrame("snowgoblimon", "SnowGoblimon", "Lvl 15");
  evolveFromFrame("yukiagumon", "YukiAgumon", "300 Beast Xp");
  eraseOld(2);
  evolveToFrame("bluemeramon", "Blue Meramon", "Lvl 45");
  evolveToFrame("gigadramon", "Gigadramon", "5000 Machine Xp");
  evolveToFrame("panjyamon", "Panjyamon", "5000 Beast Xp");
  evolveToFrame("warumonzaemon", "WaruMonzaemon", "5000 Dark Xp");
  evolveToFrame("zudomon", "Zudomon", "5000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".hyogamon").click(function (e) {
  e.preventDefault();
  hyogamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "hyogamon")) {
      hyogamon();
    } else if (hasClass(e.target, "hyogamon")) {
      hyogamon();
    }
  },
  false
);

function icedevimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("IceDevimon");
  replaceImage("icedevimon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("impmon", "Impmon", "Lvl 15");
  evolveFromFrame("yukiagumon", "YukiAgumon", "30 Victories");
  eraseOld(2);
  evolveToFrame("cherrymon", "Cherrymon", "5000 Insect/Plant Xp");
  evolveToFrame("crescemon", "Crescemon", "5000 Holy Xp + Neutral Mood");
  evolveToFrame("gigadramon", "Gigadramon", "5000 Machine Xp");
  evolveToFrame("marinedevimon", "MarineDevimon", "5000 Aquatic Xp");
  evolveToFrame("skullsatamon", "SkullSatamon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".icedevimon").click(function (e) {
  e.preventDefault();
  icedevimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "icedevimon")) {
      icedevimon();
    } else if (hasClass(e.target, "icedevimon")) {
      icedevimon();
    }
  },
  false
);

function icemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Icemon");
  replaceImage("icemon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gomamon", "Gomamon", "Lvl 15");
  evolveFromFrame("gotsumon", "Gotsumon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("mamemon", "Mamemon", "5000 Machine Xp");
  evolveToFrame("meteormon", "Meteormon", "Lvl 45");
  evolveToFrame("panjyamon", "Panjyamon", "5000 Aquatic Xp");
  evolveToFrame("weregarurumon", "WereGarurumon", "5000 Beast Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".icemon").click(function (e) {
  e.preventDefault();
  icemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "icemon")) {
      icemon();
    } else if (hasClass(e.target, "icemon")) {
      icemon();
    }
  },
  false
);

function ikkakumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ikkakumon");
  replaceImage("ikkakumon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gomamon", "Gomamon", "30 Victories + 100 Aquatic Xp");
  evolveFromFrame("snowgoblimon", "SnowGoblimon", "300 Aquatic Xp");
  eraseOld(2);
  evolveToFrame("machgaogamon", "MachGaogamon", "5000 Beast Xp");
  evolveToFrame("whamon", "Whamon", "5000 Aquatic Xp");
  evolveToFrame("zudomon", "Zudomon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ikkakumon").click(function (e) {
  e.preventDefault();
  ikkakumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ikkakumon")) {
      ikkakumon();
    } else if (hasClass(e.target, "ikkakumon")) {
      ikkakumon();
    }
  },
  false
);

function kabuterimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Kabuterimon");
  replaceImage("kabuterimon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("kunemon", "Kunemon", "30 Victories");
  evolveFromFrame("tentomon", "Tentomon", "Lvl 15");
  evolveFromFrame("wormmon", "Wormmon", "30 Victories + 100 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame("anomalocarimon", "Anomalocarimon", "5000 Aquatic Xp");
  evolveToFrame(
    "atlurkabuterimonblue",
    "AtlurKabuterimon (Blue)",
    "5000 Insect/Plant Xp"
  );
  evolveToFrame("atlurkabuterimonred", "AtlurKabuterimon (Red)", "Lvl 45");
  evolveToFrame("kimeramon", "Kimeramon", "Jogress: Devimon");
  evolveToFrame("metalmamemon", "MetalMamemon", "5000 Machine Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".kabuterimon").click(function (e) {
  e.preventDefault();
  kabuterimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "kabuterimon")) {
      kabuterimon();
    } else if (hasClass(e.target, "kabuterimon")) {
      kabuterimon();
    }
  },
  false
);

function kiwimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Kiwimon");
  replaceImage("kiwimon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bearmon", "Bearmon", "300 Bird Xp");
  evolveFromFrame("biyomon", "Biyomon", "300 Bird Xp");
  evolveFromFrame("floramon", "Floramon", "Lvl 15");
  evolveFromFrame("monmon", "Monmon", "300 Bird Xp");
  evolveFromFrame("palmon", "Palmon", "300 Bird Xp");
  evolveFromFrame("penmon", "Penmon", "300 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame("deramon", "Deramon", "Lvl 45");
  evolveToFrame("lilymon", "Lilymon", "5000 Insect/Plant Xp");
  evolveToFrame("sirenmon", "Sirenmon", "5000 Bird Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".kiwimon").click(function (e) {
  e.preventDefault();
  kiwimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "kiwimon")) {
      kiwimon();
    } else if (hasClass(e.target, "kiwimon")) {
      kiwimon();
    }
  },
  false
);

function kuwagamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Kuwagamon");
  replaceImage("kuwagamon");
  attribute("vi");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("biyomon", "Biyomon", "300 Insect/Plant Xp");
  evolveFromFrame("kunemon", "Kunemon", "300 Insect/Plant Xp");
  evolveFromFrame("wormmon", "Wormmon", "30 Victories");
  eraseOld(2);
  evolveToFrame("okuwamon", "Okuwamon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".kuwagamon").click(function (e) {
  e.preventDefault();
  kuwagamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "kuwagamon")) {
      kuwagamon();
    } else if (hasClass(e.target, "kuwagamon")) {
      kuwagamon();
    }
  },
  false
);

function kyubimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Kyubimon");
  replaceImage("kyubimon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("patamon", "Patamon", "Lvl 15");
  evolveFromFrame("psychemon", "Psychemon", "Lvl 15");
  evolveFromFrame("renamon", "Renamon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("monzaemon", "Monzaemon", "5000 Beast Xp");
  evolveToFrame("taomon", "Taomon", "Lvl 45");
  evolveToFrame("warumonzaemon", "WaruMonzaemon", "5000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".kyubimon").click(function (e) {
  e.preventDefault();
  kyubimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "kyubimon")) {
      kyubimon();
    } else if (hasClass(e.target, "kyubimon")) {
      kyubimon();
    }
  },
  false
);

function lekismon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Lekismon");
  replaceImage("lekismon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gaomon", "Gaomon", "Lvl 15 + Pleased Mood");
  evolveFromFrame("lunamon", "Lunamon", "Lvl 15 + Neutral Mood");
  evolveFromFrame("patamon", "Patamon", "Lvl 15 + Pleased Mood");
  eraseOld(2);
  evolveToFrame("antylamon", "Antylamon", "5000 Beast Xp + Neutral Mood");
  evolveToFrame(
    "antylamondeva",
    "Antylamon (Deva)",
    "5000 Beast Xp + Neutral Mood"
  );
  evolveToFrame("crescemon", "Crescemon", "Lvl 45 + Neutral Mood");
  evolveToFrame("taomon", "Taomon", "5000 Holy Xp");
  evolveToFrame("warumonzaemon", "WaruMonzaemon", "Lvl 45");
  evolveToFrame("waruseadramon", "WaruSeadramon", "5000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".lekismon").click(function (e) {
  e.preventDefault();
  lekismon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "lekismon")) {
      lekismon();
    } else if (hasClass(e.target, "lekismon")) {
      lekismon();
    }
  },
  false
);

function leomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Leomon");
  replaceImage("leomon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("elecmon", "Elecmon", "300 Beast Xp");
  evolveFromFrame("gabumon", "Gabumon", "Lvl 15");
  evolveFromFrame("gaomon", "Gaomon", "300 Beast Xp");
  evolveFromFrame("salamon", "Salamon", "300 Beast Xp");
  eraseOld(2);
  evolveToFrame(
    "loaderliomon",
    "LoaderLiomon",
    "5000 Machine Xp + Neutral Mood"
  );
  evolveToFrame("meteormon", "Meteormon", "5000 Machine Xp");
  evolveToFrame("orochimon", "Orochimon", "5000 Dragon Xp");
  evolveToFrame("pandamon", "Pandamon", "5000 Beast Xp + Atk > Def");
  evolveToFrame("panjyamon", "Panjyamon", "Lvl 45");
  evolveToFrame("parrotmon", "Parrotmon", "5000 Bird Xp");
  evolveToFrame("weregarurumon", "WereGarurumon", "5000 Beast Xp");
  evolveToFrame("weregarurumonblack", "WereGarurumon (Black)", "5000 Dark Xp");
  evolveToFrame(
    "bancholeomon",
    "BanchoLeomon",
    "Gakuran + 250 Victories + 0 Defeats"
  );
  evolveToFrame("saberleomon", "SaberLeomon", "Warp Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".leomon").click(function (e) {
  e.preventDefault();
  leomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "leomon")) {
      leomon();
    } else if (hasClass(e.target, "leomon")) {
      leomon();
    }
  },
  false
);

function machmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Machmon");
  replaceImage("machmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("dorumon", "Dorumon", "300 Machine Xp + Indiferent Mood");
  evolveFromFrame("hagurumon", "Hagurumon", "300 Machine Xp + Indiferent Mood");
  evolveFromFrame("psychemon", "Psychemon", "300 Machine Xp");
  evolveFromFrame("toyagumon", "ToyAgumon", "300 Machine Xp + Indiferent Mood");
  eraseOld(2);
  evolveToFrame("loaderliomon", "LoaderLiomon", "Lvl 45");
  evolveToFrame("megadramon", "Megadramon", "5000 Dark Xp");
  evolveToFrame("metalgreymon", "MetalGreymon", "5000 Dragon Xp");
  evolveToFrame("metalmamemon", "MetalMamemon", "5000 Machine Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".machmon").click(function (e) {
  e.preventDefault();
  machmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "machmon")) {
      machmon();
    } else if (hasClass(e.target, "machmon")) {
      machmon();
    }
  },
  false
);

function mechanorimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Mechanorimon");
  replaceImage("mechanorimon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("guilmon", "Guilmon", "300 Machine Xp");
  evolveFromFrame("hagurumon", "Hagurumon", "Lvl 15");
  evolveFromFrame("strabimon", "Strabimon", "300 Machine Xp");
  eraseOld(2);
  evolveToFrame("datamon", "Datamon", "5000 Machine Xp");
  evolveToFrame("greymonxros", "Greymon (Xros)", "Jogres: Greymon");
  evolveToFrame("greymonxros", "Greymon (Xros)", "Jogres: MetalTyranomon");
  evolveToFrame("mamemon", "Mamemon", "5000 Machine Xp + 3500 Def");
  evolveToFrame("megadramon", "Megadramon", "Lvl 45");
  evolveToFrame("metaltyranomon", "MetalTyranomon", "5000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".mechanorimon").click(function (e) {
  e.preventDefault();
  mechanorimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "mechanorimon")) {
      mechanorimon();
    } else if (hasClass(e.target, "mechanorimon")) {
      mechanorimon();
    }
  },
  false
);

function meicoomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Meicoomon");
  replaceImage("meicoomon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bearmon", "Bearmon", "300 Dark Xp");
  evolveFromFrame("floramon", "Floramon", "300 Beast Xp");
  evolveFromFrame("keramon", "Keramon", "300 Beast Xp");
  evolveFromFrame("salamon", "Salamon", "300 Sark Xp");
  eraseOld(2);
  evolveToFrame("angewomon", "Angewomon", "Lvl 45");
  evolveToFrame("meicrackmon", "Meicrackmon", "5000 Holy Xp");
  evolveToFrame("meicrackmonvicious", "Meicrackmon (Vicious)", "5000 Dark Xp");
  evolveToFrame("parrotmon", "Parrotmon", "5000 Bird Xp");
  evolveToFrame("raguelmon", "Raguelmon", "Warp Evolution + Holy Xp < Dark Xp");
  evolveToFrame("rasielmon", "Rasielmon", "Warp Evolution + Holy Xp > Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".meicoomon").click(function (e) {
  e.preventDefault();
  meicoomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "meicoomon")) {
      meicoomon();
    } else if (hasClass(e.target, "meicoomon")) {
      meicoomon();
    }
  },
  false
);

function meramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Meramon");
  replaceImage("meramon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("candlemon", "Candlemon", "Lvl 15");
  evolveFromFrame("coronamon", "Coronamon", "Lvl 15");
  evolveFromFrame("dorumon", "Dorumon", "300 Machine Xp");
  evolveFromFrame("hawkmon", "Hawkmon", "300 Machine Xp");
  evolveFromFrame("sharmamon", "Sharmamon", "300 Machine Xp");
  eraseOld(2);
  evolveToFrame("asuramon", "Asuramon", "5000 Holy Xp");
  evolveToFrame("bluemeramon", "BlueMeramon", "Lvl 45");
  evolveToFrame("etemon", "Etemon", "5000 Beast Xp");
  evolveToFrame("flaremon", "Flaremon", "5000 Beast Xp + Neutral Mood");
  evolveToFrame("phantomon", "Phantomon", "Jogress: Devimon");
  evolveToFrame("skullmeramon", "SkullMeramon", "5000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".meramon").click(function (e) {
  e.preventDefault();
  meramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "meramon")) {
      meramon();
    } else if (hasClass(e.target, "meramon")) {
      meramon();
    }
  },
  false
);

function minotaurmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Minotaurmon");
  replaceImage("minotaurmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("biyomon", "Biyomon", "300 Beast Xp");
  evolveFromFrame("gotsumon", "Gotsumon", "300 Beast Xp");
  evolveFromFrame("terriermon", "Terriermon", "300 Beast Xp");
  evolveFromFrame("veemon", "Veemon", "300 Beast Xp");
  eraseOld(2);
  evolveToFrame("cyberdramon", "Cyberdramon", "5000 Beast Xp");
  evolveToFrame("etemon", "Etemon", "Lvl 45");
  evolveToFrame("loaderliomon", "LoaderLiomon", "5000 Beast Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".minotaurmon").click(function (e) {
  e.preventDefault();
  minotaurmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "minotaurmon")) {
      minotaurmon();
    } else if (hasClass(e.target, "minotaurmon")) {
      minotaurmon();
    }
  },
  false
);

function monochromon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Monochromon");
  replaceImage("monochromon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blackagumon", "BlackAgumon", "Lvl 15");
  evolveFromFrame("hackmon", "Hackmon", "Lvl 15");
  evolveFromFrame("tentomon", "Tentomon", "300 Dragon Xp");
  evolveFromFrame("wormmon", "Wormmon", "300 Dragon Xp");
  eraseOld(2);
  evolveToFrame("mammothmon", "Mammothmon", "5000 Beast Xp");
  evolveToFrame("metalmamemon", "MetalMamemon", "5000 Machine Xp");
  evolveToFrame("skullbaluchimon", "SkullBaluchimon", "5000 Dark Xp");
  evolveToFrame("triceramon", "Triceramon", "5000 Dragon Xp");
  evolveToFrame("vermilimon", "Vermilimon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".monochromon").click(function (e) {
  e.preventDefault();
  monochromon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "monochromon")) {
      monochromon();
    } else if (hasClass(e.target, "monochromon")) {
      monochromon();
    }
  },
  false
);

function numemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Numemon");
  replaceImage("numemon");
  attribute("vi");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("bearmon", "Bearmon", "10 Defeats");
  evolveFromFrame("falcomon", "Falcomon", "10 Defeats");
  evolveFromFrame("floramon", "Floramon", "10 Defeats");
  evolveFromFrame("gazimon", "Gazimon", "10 Defeats");
  evolveFromFrame("guilmon", "Guilmon", "10 Defeats");
  evolveFromFrame("sharmamon", "Sharmamon", "10 Defeats");
  eraseOld(2);
  evolveToFrame("blackkingnumemon", "BlackKingNumemon", "5000 Dark Xp");
  evolveToFrame("monzaemon", "Monzaemon", "Lvl 45");
  evolveToFrame("parrotmon", "Parrotmon", "5000 Bird Xp");
  evolveToFrame("superstarmon", "SuperStarmon", "5000 Machine Xp");
  evolveToFrame("vademon", "Vademon", "5000 Beast Xp");
  evolveToFrame("numemonx", "Numemon X", "X-Antibody");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".numemon").click(function (e) {
  e.preventDefault();
  numemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "numemon")) {
      numemon();
    } else if (hasClass(e.target, "numemon")) {
      numemon();
    }
  },
  false
);

function ogremon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ogremon");
  replaceImage("ogremon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("falcomon", "Falcomon", "300 Dark Xp");
  evolveFromFrame("goblimon", "Goblimon", "Lvl 15");
  evolveFromFrame("sharmamon", "Sharmamon", "300 Dark Xp");
  evolveFromFrame("terriermon", "Terriermon", "300 Dark Xp");
  eraseOld(2);
  evolveToFrame("asuramon", "Asuramon", "5000 Holy Xp");
  evolveToFrame("digitamamon", "Digitamamon", "Lvl 45");
  evolveToFrame("waruseadramon", "WaruSeadramon", "5000 Aquatic Xp");
  evolveToFrame("weregarurumonblack", "WereGarurumon (Black)", "5000 Beast Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ogremon").click(function (e) {
  e.preventDefault();
  ogremon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ogremon")) {
      ogremon();
    } else if (hasClass(e.target, "ogremon")) {
      ogremon();
    }
  },
  false
);

function omekamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Omekamon");
  replaceImage("omekamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blucomon", "Blucomon", "300 Machine Xp");
  evolveFromFrame("ryudamon", "Ryudamon", "300 Machine Xp");
  evolveFromFrame("toyagumon", "ToyAgumon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("cannonbeemon", "CannonBeemon", "5000 Insect/Plant Xp");
  evolveToFrame("hisyaryumon", "Hisyaryumon", "5000 Dragon Xp");
  evolveToFrame("pumpkinmon", "Pumpkinmon", "5000 Dark Xp");
  evolveToFrame("superstarmon", "SuperStarmon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".omekamon").click(function (e) {
  e.preventDefault();
  omekamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "omekamon")) {
      omekamon();
    } else if (hasClass(e.target, "omekamon")) {
      omekamon();
    }
  },
  false
);

function peckmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Peckmon");
  replaceImage("peckmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("falcomon2", "Falcomon (2006)", "30 Victories");
  eraseOld(2);
  evolveToFrame("yatagaramon", "Yatagaramon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".peckmon").click(function (e) {
  e.preventDefault();
  peckmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "peckmon")) {
      peckmon();
    } else if (hasClass(e.target, "peckmon")) {
      peckmon();
    }
  },
  false
);

function raremon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Raremon");
  replaceImage("raremon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("betamon", "Betamon", "300 Dark Xp");
  evolveFromFrame("demidevimon", "DemiDevimon", "10 Defeats");
  evolveFromFrame("otamamon", "Otamamon", "300 Dark Xp");
  evolveFromFrame("veemon", "Veemon", "10 Defeats");
  eraseOld(2);
  evolveToFrame("datamon", "Datamon", "5000 Machine Xp");
  evolveToFrame("garbagemon", "Garbagemon", "Lvl 45");
  evolveToFrame(
    "loaderliomon",
    "LoaderLiomon",
    "5000 Machine Xp + Neutral Mood"
  );
  evolveToFrame("phantomon", "Phantomon", "5000 Dark Xp");
  evolveToFrame("vademon", "Vademon", "25 Defeats");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".raremon").click(function (e) {
  e.preventDefault();
  raremon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "raremon")) {
      raremon();
    } else if (hasClass(e.target, "raremon")) {
      raremon();
    }
  },
  false
);

function redveedramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("RedVeedramon");
  replaceImage("redveedramon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("elecmon", "Elecmon", "300 Dragon Xp");
  evolveFromFrame("hackmon", "Hackmon", "300 Dragon Xp");
  evolveFromFrame("shoutmon", "Shoutmon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("aeroveedramon", "AeroVeedramon", "Lvl 45");
  evolveToFrame(
    "atlurkabuterimonred",
    "AtlurKabuterimon (Red)",
    "5000 Insect/Plant Xp"
  );
  evolveToFrame("silphymon", "Silphymon", "Jogress: GoldVeedramon");
  evolveToFrame("wargrowlmon", "WarGrowlmon", "5000 Machine Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".redveedramon").click(function (e) {
  e.preventDefault();
  redveedramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "redveedramon")) {
      redveedramon();
    } else if (hasClass(e.target, "redveedramon")) {
      redveedramon();
    }
  },
  false
);

function redvegiemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("RedVegiemon");
  replaceImage("redvegiemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("elecmon", "Elecmon", "Lvl 15");
  evolveFromFrame("floramon", "Floramon", "300 Insect/Plant Xp");
  evolveFromFrame("palmon", "Palmon", "300 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame(
    "atlurkabuterimonred",
    "AtlurKabuterimon (Red)",
    "5000 Dark Xp"
  );
  evolveToFrame("cherrymon", "Cherrymon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".redvegiemon").click(function (e) {
  e.preventDefault();
  redvegiemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "redvegiemon")) {
      redvegiemon();
    } else if (hasClass(e.target, "redvegiemon")) {
      redvegiemon();
    }
  },
  false
);

function reppamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Reppamon");
  replaceImage("reppamon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blackgabumon", "BlackGabumon", "300 Holy Xp");
  evolveFromFrame("kudamon", "Kudamon", "30 Victories");
  evolveFromFrame("patamon", "Patamon", "300 Beast Xp");
  evolveFromFrame("ryudamon", "Ryudamon", "300 Holy Xp");
  evolveFromFrame("salamon", "Salamon", "300 Holy Xp");
  eraseOld(2);
  evolveToFrame("angewomon", "Angewomon", "5000 Holy Xp");
  evolveToFrame("rapidmon", "Rapidmon", "5000 Machine Xp");
  evolveToFrame("tyilinmon", "Tyilinmon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".reppamon").click(function (e) {
  e.preventDefault();
  reppamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "reppamon")) {
      reppamon();
    } else if (hasClass(e.target, "reppamon")) {
      reppamon();
    }
  },
  false
);

function sabirdramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Sabirdramon");
  replaceImage("sabirdramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("biyomon", "Biyomon", "300 Dark Xp");
  evolveFromFrame("blackgabumon", "BlackGabumon", "300 Bird Xp");
  evolveFromFrame("demidevimon", "DemiDevimon", "300 Bird Xp");
  evolveFromFrame("tsukaimon", "Tsukaimon", "300 Bird Xp");
  eraseOld(2);
  evolveToFrame("garudamon", "Garudamon", "Lvl 45");
  evolveToFrame("hippogriffomon", "Hippogriffomon", "5000 Beast Xp");
  evolveToFrame("ladydevimon", "LadyDevimon", "5000 Dark Xp");
  evolveToFrame("megadramon", "Megadramon", "5000 Dragon Xp");
  evolveToFrame("okuwamon", "Okuwamon", "5000 Insect/Plant Xp");
  evolveToFrame("parrotmon", "Parrotmon", "5000 Bird Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".sabirdramon").click(function (e) {
  e.preventDefault();
  sabirdramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "sabirdramon")) {
      sabirdramon();
    } else if (hasClass(e.target, "sabirdramon")) {
      sabirdramon();
    }
  },
  false
);

function sandyanmamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("SandYanmamon");
  replaceImage("sandyanmamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("betamon", "Betamon", "300 Insect/Plant Xp");
  evolveFromFrame("candlemon", "Candlemon", "300 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame("anomalocarimon", "Anomalocarimon", "Lvl 45");
  evolveToFrame("brachimon", "Brachimon", "Jogress: Yanmamon");
  evolveToFrame("shogungekomon", "ShogunGekomon", "5000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".sandyanmamon").click(function (e) {
  e.preventDefault();
  sandyanmamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "sandyanmamon")) {
      sandyanmamon();
    } else if (hasClass(e.target, "sandyanmamon")) {
      sandyanmamon();
    }
  },
  false
);

function seadramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Seadramon");
  replaceImage("seadramon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("betamon", "Betamon", "Lvl 15");
  evolveFromFrame("gizamon", "Gizamon", "300 Aquatic Xp");
  evolveFromFrame("sangomon", "Sangomon", "Lvl 15");
  evolveFromFrame("syakomon", "Syakomon", "300 Aquatic Xp");
  evolveFromFrame("yukiagumon", "YukiAgumon", "300 Aquatic Xp");
  eraseOld(2);
  evolveToFrame("anomalocarimon", "Anomalocarimon", "Jogress: Coelamon");
  evolveToFrame("dagomon", "Dagomon", "250 Victories + 5000 Dark Xp");
  evolveToFrame("hisyaryumon", "Hisyaryumon", "5000 Holy Xp");
  evolveToFrame("mamemon", "Mamemon", "5000 Machine Xp");
  evolveToFrame("megaseadramon", "MegaSeadramon", "Lvl 45");
  evolveToFrame("vademon", "Vademon", "25 Defeats");
  evolveToFrame("waruseadramon", "WaruSeadramon", "5000 Dark Xp");
  evolveToFrame("whamon", "Whamon", "5000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".seadramon").click(function (e) {
  e.preventDefault();
  seadramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "seadramon")) {
      seadramon();
    } else if (hasClass(e.target, "seadramon")) {
      seadramon();
    }
  },
  false
);

function shellnumemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ShellNumemon");
  replaceImage("shellnumemon");
  attribute("vi");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("betamon", "Betamon", "300 Aquatic Xp");
  evolveFromFrame("gaomon", "Gaomon", "10 Defeats");
  evolveFromFrame("psychemon", "Psychemon", "300 Aquatic Xp");
  evolveFromFrame("sangomon", "Sangomon", "10 Defeats");
  evolveFromFrame("syakomon", "Syakomon", "10 Defeats");
  eraseOld(2);
  evolveToFrame("blackkingnumemon", "BlackKingNumemon", "Lvl 45");
  evolveToFrame("machgaogamon", "MachGaogamon", "5000 Beast Xp");
  evolveToFrame("megaseadramon", "MegaSeadramon", "5000 Dark Xp");
  evolveToFrame("shogungekomon", "ShogunGekomon", "5000 Aquatic Xp");
  evolveToFrame("sirenmon", "Sirenmon", "5000 Bird Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".shellnumemon").click(function (e) {
  e.preventDefault();
  shellnumemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "shellnumemon")) {
      shellnumemon();
    } else if (hasClass(e.target, "shellnumemon")) {
      shellnumemon();
    }
  },
  false
);

function sistermonciel() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Sistermon Ciel");
  replaceImage("sistermonciel");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("lunamon", "Lunamon", "Lvl 15");
  evolveFromFrame(
    "sistermoncielawake",
    "Sistermon Ciel (Awake)",
    "Mode Selector + Sistermon Awakening Training Medal"
  );
  eraseOld(2);
  evolveToFrame("ladydevimon", "LadyDevimon", "Lvl 45");
  evolveToFrame("pandamon", "Pandamon", "5000 Beast Xp");
  evolveToFrame(
    "sistermoncielawake",
    "Sistermon Ciel (Awake)",
    "Mode Selector + Sistermon Awakening Training Medal"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".sistermonciel").click(function (e) {
  e.preventDefault();
  sistermonciel();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "sistermonciel")) {
      sistermonciel();
    } else if (hasClass(e.target, "sistermonciel")) {
      sistermonciel();
    }
  },
  false
);

function sistermoncielawake() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Sistermon Ciel (Awake)");
  replaceImage("sistermoncielawake");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "sistermonciel",
    "Sistermon Ciel",
    "Mode Selector + Sistermon Awakening Training Medal"
  );
  eraseOld(2);
  evolveToFrame(
    "sistermonciel",
    "Sistermon Ciel",
    "Mode Selector + Sistermon Awakening Training Medal"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".sistermoncielawake").click(function (e) {
  e.preventDefault();
  sistermoncielawake();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "sistermoncielawake")) {
      sistermoncielawake();
    } else if (hasClass(e.target, "sistermoncielawake")) {
      sistermoncielawake();
    }
  },
  false
);

function snatchmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Snatchmon");
  replaceImage("snatchmon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bemmon", "Bemmon", "Jogress: Bemmon");
  eraseOld(2);
  evolveToFrame("ragnamon", "Ragnamon", "Lvl 80 + 30 Guslinger Fragment");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".snatchmon").click(function (e) {
  e.preventDefault();
  snatchmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "snatchmon")) {
      snatchmon();
    } else if (hasClass(e.target, "snatchmon")) {
      snatchmon();
    }
  },
  false
);

function starmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Starmon");
  replaceImage("starmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gotsumon", "Gotsumon", "300 Machine Xp");
  evolveFromFrame("patamon", "Patamon", "300 Machine Xp");
  evolveFromFrame("toyagumon", "ToyAgumon", "300 Holy Xp");
  eraseOld(2);
  evolveToFrame("darksuperstarmon", "DarkSuperStarmon", "5000 Machine Xp");
  evolveToFrame("digitamamon", "Digitamamon", "5000 Dark Xp");
  evolveToFrame("mamemon", "Mamemon", "5000 Machine Xp + 3500 Def");
  evolveToFrame("superstarmon", "SuperStarmon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".starmon").click(function (e) {
  e.preventDefault();
  starmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "starmon")) {
      starmon();
    } else if (hasClass(e.target, "starmon")) {
      starmon();
    }
  },
  false
);

function stingmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Stingmon");
  replaceImage("stingmon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("fanbeemon", "FanBeemon", "300 Insect/Plant Xp");
  evolveFromFrame("falcomon", "Falcomon", "300 Insect/Plant Xp");
  evolveFromFrame("falcomon2", "Falcomon (2006)", "300 Insect/Plant Xp");
  evolveFromFrame("goblimon", "Goblimon", "300 Insect/Plant Xp");
  evolveFromFrame("monmon", "Monmon", "300 Insect/Plant Xp");
  evolveFromFrame("sharmamon", "Sharmamon", "300 Insect/Plant Xp");
  evolveFromFrame("wormmon", "Wormmon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("cannonbeemon", "Cannonbeemon", "5000 Machine Xp");
  evolveToFrame(
    "dinobeemon",
    "Dinobeemon",
    "Jogress: ExVeemon (Stingmon active)"
  );
  evolveToFrame("jewelbeemon", "Jewelbeemon", "Lvl 45");
  evolveToFrame("okuwamon", "Okuwamon", "5000 Insect/Plant Xp");
  evolveToFrame(
    "paildramon",
    "Paildramon",
    "Jogress: ExVeemon (ExVeemon active)"
  );
  evolveToFrame("skullsatamon", "SkulSatamon", "5000 Dark Xp");
  evolveToFrame(
    "banchostingmon",
    "BanchoStingmon",
    "Gakuran + 250 Victories + 0 Defeats"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".stingmon").click(function (e) {
  e.preventDefault();
  stingmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "stingmon")) {
      stingmon();
    } else if (hasClass(e.target, "stingmon")) {
      stingmon();
    }
  },
  false
);

function strikedramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Strikedramon");
  replaceImage("strikedramon");
  attribute("va");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("monodramon", "Monodramon", "30 Victories");
  eraseOld(2);
  evolveToFrame("cyberdramon", "Cyberdramon", "Lvl 45");
  evolveToFrame("saviorhackmon", "SaviorHackmon", "5000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".strikedramon").click(function (e) {
  e.preventDefault();
  strikedramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "strikedramon")) {
      strikedramon();
    } else if (hasClass(e.target, "strikedramon")) {
      strikedramon();
    }
  },
  false
);

function sukamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Sukamon");
  replaceImage("sukamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("agumon", "Agumon", "10 Defeats");
  evolveFromFrame("hackmon", "Hackmon", "10 Defeats");
  evolveFromFrame("palmon", "Palmon", "10 Defeats");
  evolveFromFrame("snowgoblimon", "SnowGoblimon", "10 Defeats");
  evolveFromFrame("toyagumon", "ToyAgumon", "10 Defeats");
  eraseOld(2);
  evolveToFrame("etemon", "Etemon", "Lvl 15");
  evolveToFrame("garbagemon", "Garbagemon", "5000 Dark Xp");
  evolveToFrame("superstarmon", "SuperStarmon", "5000 Machine Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".sukamon").click(function (e) {
  e.preventDefault();
  sukamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "sukamon")) {
      sukamon();
    } else if (hasClass(e.target, "sukamon")) {
      sukamon();
    }
  },
  false
);

function togemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Togemon");
  replaceImage("togemon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("palmon", "Palmon", "30 Victories");
  eraseOld(2);
  evolveToFrame("ladydevimon", "LadyDevimon", "5000 Dark Xp");
  evolveToFrame("lilymon", "Lilymon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".togemon").click(function (e) {
  e.preventDefault();
  togemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "togemon")) {
      togemon();
    } else if (hasClass(e.target, "togemon")) {
      togemon();
    }
  },
  false
);

function turuiemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Turuiemon");
  replaceImage("turuiemon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("lopmon", "Lopmon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("antylamondeva", "Antylamon (Deva)", "Lvl 45");
  evolveToFrame("monzaemon", "Monzaemon", "5000 Beast Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".turuiemon").click(function (e) {
  e.preventDefault();
  turuiemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "turuiemon")) {
      turuiemon();
    } else if (hasClass(e.target, "turuiemon")) {
      turuiemon();
    }
  },
  false
);

function tuskmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Tuskmon");
  replaceImage("tuskmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("armadillomon", "Armadillomon", "300 Dragon Xp");
  evolveFromFrame("elecmon", "Elecmon", "300 Dark Xp");
  evolveFromFrame("gizamon", "Gizamon", "300 Dragon Xp");
  evolveFromFrame("gotsumon", "Gotsumon", "300 Dragon Xp");
  evolveFromFrame("monodramon", "Monodramon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("mastertyranomon", "MasterTyranomon", "Lvl 45");
  evolveToFrame("metalgreymon", "MetalGreymon", "5000 Machine Xp");
  evolveToFrame("metaltyranomon", "MetalTyranomon", "5000 Dark Xp");
  evolveToFrame("triceramon", "Triceramon", "5000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".tuskmon").click(function (e) {
  e.preventDefault();
  tuskmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "tuskmon")) {
      tuskmon();
    } else if (hasClass(e.target, "tuskmon")) {
      tuskmon();
    }
  },
  false
);

function tyranomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Tyranomon");
  replaceImage("tyranomon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("agumon", "Agumon", "Lvl 15");
  evolveFromFrame("falcomon", "Falcomon", "300 Dragon Xp");
  evolveFromFrame("hagurumon", "Gizamon", "300 Dragon Xp");
  eraseOld(2);
  evolveToFrame("aeroveedramon", "AeroVeedramon", "Jogress: Airdramon");
  evolveToFrame("brachimon", "Brachimon", "5000 Aquatic Xp");
  evolveToFrame(
    "mastertyranomon",
    "MasterTyranomon",
    "250 Victories + 5000 Dragon Xp"
  );
  evolveToFrame("metaltyranomon", "MetalTyranomon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".tyranomon").click(function (e) {
  e.preventDefault();
  tyranomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "tyranomon")) {
      tyranomon();
    } else if (hasClass(e.target, "tyranomon")) {
      tyranomon();
    }
  },
  false
);

function veedramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Veedramon");
  replaceImage("veedramon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blucomon", "Blucomon", "Lvl 15");
  evolveFromFrame("veemon", "Veemon", "30 Victories");
  evolveFromFrame("blackveedramon", "BlackVeedramon", "Black Digitron");
  eraseOld(2);
  evolveToFrame("aeroveedramon", "AeroVeedramon", "Lvl 45");
  evolveToFrame("metalgreymonvirus", "MetalGreymon (Virus)", "5000 Dark Xp");
  evolveToFrame("orochimon", "Orochimon", "5000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".veedramon").click(function (e) {
  e.preventDefault();
  veedramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "veedramon")) {
      veedramon();
    } else if (hasClass(e.target, "veedramon")) {
      veedramon();
    }
  },
  false
);

function waspmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Waspmon");
  replaceImage("waspmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("fanbeemon", "FanBeemon", "Lvl 15");
  evolveFromFrame("hagurumon", "Hagurumon", "300 Insect/Plant Xp");
  evolveFromFrame("wormmon", "Wormmon", "300 Machine Xp");
  eraseOld(2);
  evolveToFrame(
    "atlurkabuterimonred",
    "AtlurKabuterimon (Red)",
    "5000 Insect/Plant Xp"
  );
  evolveToFrame("cannonbeemon", "Cannonbeemon", "Lvl 45");
  evolveToFrame("dorugreymon", "DoruGreymon", "5000 Beast Xp");
  evolveToFrame("hisyaryumon", "Hisyaryumon", "5000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".waspmon").click(function (e) {
  e.preventDefault();
  waspmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "waspmon")) {
      waspmon();
    } else if (hasClass(e.target, "waspmon")) {
      waspmon();
    }
  },
  false
);

function wendigomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Wendigomon");
  replaceImage("wendigomon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("lopmon", "Lopmon", "300 Dark Xp");
  eraseOld(2);
  evolveToFrame("antylamon", "Antylamon", "Lvl 45");
  evolveToFrame("arukenimon", "Arukenimon", "5000 Insect/Plant Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".wendigomon").click(function (e) {
  e.preventDefault();
  wendigomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "wendigomon")) {
      wendigomon();
    } else if (hasClass(e.target, "wendigomon")) {
      wendigomon();
    }
  },
  false
);

function wizardmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Wizardmon");
  replaceImage("wizardmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("candlemon", "Candlemon", "300 Holy Xp");
  evolveFromFrame("impmon", "Impmon", "300 Dark Xp");
  evolveFromFrame("lucemon", "Lucemon", "Lvl 15");
  evolveFromFrame("patamon", "Patamon", "300 Holy Xp");
  evolveFromFrame("tentomon", "Tentomon", "300 Holy Xp");
  evolveFromFrame("tsukaimon", "Tsukaimon", "300 Dark Xp");
  eraseOld(2);
  evolveToFrame("digitamamon", "Digitamamon", "5000 Dark Xp");
  evolveToFrame("lucemonfm", "Lucemon Falldown", "250 Victories");
  evolveToFrame("mistymon", "Mistymon", "5000 Holy Xp");
  evolveToFrame("wisemon", "Wisemon", "Lvl 45");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".wizardmon").click(function (e) {
  e.preventDefault();
  wizardmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "wizardmon")) {
      wizardmon();
    } else if (hasClass(e.target, "wizardmon")) {
      wizardmon();
    }
  },
  false
);

function woodmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Woodmon");
  replaceImage("woodmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("palmon", "Palmon", "Lvl 15");
  evolveFromFrame("snowgoblimon", "SnowGoblimon", "300 Insect/Plant Xp");
  evolveFromFrame("wormmon", "Wormmon", "300 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame("cherrymon", "Cherrymon", "Lvl 45");
  evolveToFrame("mamemon", "Mamemon", "5000 Machine Xp");
  evolveToFrame("okuwamon", "Okuwamon", "5000 Insect/Plant Xp");
  evolveToFrame("pumpkinmon", "Pumpkinmon", "5000 Dark Xp");
  evolveToFrame("taomon", "Taomon", "5000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".woodmon").click(function (e) {
  e.preventDefault();
  woodmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "woodmon")) {
      woodmon();
    } else if (hasClass(e.target, "woodmon")) {
      woodmon();
    }
  },
  false
);

function yanmamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Yanmamon");
  replaceImage("yanmamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("kunemon", "Kunemon", "300 Insect/Plant Xp + 1500 Atk <");
  evolveFromFrame("otamamon", "Otamamon", "300 Insect/Plant Xp");
  evolveFromFrame("tentomon", "Tentomon", "300 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame("atlurkabuterimonred", "AtlurKabuterimon (Red)", "Lvl 45");
  evolveToFrame("brachimon", "Brachimon", "Jogress: SandYanmamon");
  evolveToFrame("jewelbeemon", "JewelBeemon", "5000 Insect/Plant Xp");
  evolveToFrame("pumpkinmon", "Pumpkinmon", "5000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".yanmamon").click(function (e) {
  e.preventDefault();
  yanmamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "yanmamon")) {
      yanmamon();
    } else if (hasClass(e.target, "yanmamon")) {
      yanmamon();
    }
  },
  false
);

function yukidarumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Yukidarumon");
  replaceImage("yukidarumon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blucomon", "Blucomon", "300 Beast Xp");
  evolveFromFrame("gomamon", "Gomamon", "30 Victories");
  evolveFromFrame("lunamon", "Lunamon", "300 Aquatic Xp");
  evolveFromFrame("salamon", "Salamon", "300 Aquatic Xp");
  evolveFromFrame("snowgoblimon", "SnowGoblimon", "300 Beast Xp");
  evolveFromFrame("yukiagumon", "YukiAgumon", "Lvl 15");
  eraseOld(2);
  evolveToFrame("angewomon", "Angewomon", "5000 Holy Xp");
  evolveToFrame("crescemon", "Crescemon", "5000 Holy Xp + Neutral Mood");
  evolveToFrame("mamemon", "Mamemon", "5000 Machine Xp");
  evolveToFrame("pandamon", "Pandamon", "Lvl 45");
  evolveToFrame("sirenmon", "Sirenmon", "5000 Bird Xp");
  evolveToFrame("zudomon", "Zudomon", "5000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".yukidarumon").click(function (e) {
  e.preventDefault();
  yukidarumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "yukidarumon")) {
      yukidarumon();
    } else if (hasClass(e.target, "yukidarumon")) {
      yukidarumon();
    }
  },
  false
);

/*-------------------- ARMOR --------------------*/

function allomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Allomon");
  replaceImage("allomon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("hawkmon", "Hawkmon", "Courage Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".allomon").click(function (e) {
  e.preventDefault();
  allomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "allomon")) {
      allomon();
    } else if (hasClass(e.target, "allomon")) {
      allomon();
    }
  },
  false
);

function boarmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Boarmon");
  replaceImage("boarmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("armadillomon", "Armadillomon", "Courage Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".boarmon").click(function (e) {
  e.preventDefault();
  boarmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "boarmon")) {
      boarmon();
    } else if (hasClass(e.target, "boarmon")) {
      boarmon();
    }
  },
  false
);

function depthmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Depthmon");
  replaceImage("depthmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("monodramon", "Monodramon", "Sincerity Digimental");
  evolveFromFrame("veemon", "Veemon", "Sincerity Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".depthmon").click(function (e) {
  e.preventDefault();
  depthmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "depthmon")) {
      depthmon();
    } else if (hasClass(e.target, "depthmon")) {
      depthmon();
    }
  },
  false
);

function digmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Digmon");
  replaceImage("digmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("armadillomon", "Armadillomon", "Knowledge Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".digmon").click(function (e) {
  e.preventDefault();
  digmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "digmon")) {
      digmon();
    } else if (hasClass(e.target, "digmon")) {
      digmon();
    }
  },
  false
);

function elephamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Elephamon");
  replaceImage("elephamon");
  attribute("va");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("armadillomon", "Armadillomon", "Miracle Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".elephamon").click(function (e) {
  e.preventDefault();
  elephamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "elephamon")) {
      elephamon();
    } else if (hasClass(e.target, "elephamon")) {
      elephamon();
    }
  },
  false
);

function flamedramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Flamedramon");
  replaceImage("flamedramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("guilmon", "Guilmon", "Courage Digimental");
  evolveFromFrame("veemon", "Veemon", "Courage Digimental");
  eraseOld(2);
  evolveToFrame("metaltyranomon", "MetalTyranomon", "Jogress: Lighdramon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".flamedramon").click(function (e) {
  e.preventDefault();
  flamedramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "flamedramon")) {
      flamedramon();
    } else if (hasClass(e.target, "flamedramon")) {
      flamedramon();
    }
  },
  false
);

function flybeemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Flybeemon");
  replaceImage("flybeemon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("hawkmon", "Hawkmon", "Knowledge Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".flybeemon").click(function (e) {
  e.preventDefault();
  flybeemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "flybeemon")) {
      flybeemon();
    } else if (hasClass(e.target, "flybeemon")) {
      flybeemon();
    }
  },
  false
);

function goldveedramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("GoldVeedramon");
  replaceImage("goldveedramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("hackmon", "Hackmon", "300 Holy Xp");
  evolveFromFrame("hagurumon", "Hagurumon", "300 Holy Xp");
  evolveFromFrame("veemon", "Veemon", "Fate Digimental");
  eraseOld(2);
  evolveToFrame("silphymon", "Silphymon", "Jogress: RedVeedramon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".goldveedramon").click(function (e) {
  e.preventDefault();
  goldveedramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "goldveedramon")) {
      goldveedramon();
    } else if (hasClass(e.target, "goldveedramon")) {
      goldveedramon();
    }
  },
  false
);

function harpymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Harpymon");
  replaceImage("harpymon");
  attribute("da");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("hawkmon", "Hawkmon", "Light Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".harpymon").click(function (e) {
  e.preventDefault();
  harpymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "harpymon")) {
      harpymon();
    } else if (hasClass(e.target, "harpymon")) {
      harpymon();
    }
  },
  false
);

function holsmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Holsmon");
  replaceImage("holsmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("hawkmon", "Hawkmon", "Love Digimental");
  evolveFromFrame("tocanmon", "Tocanmon", "Love Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".holsmon").click(function (e) {
  e.preventDefault();
  holsmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "holsmon")) {
      holsmon();
    } else if (hasClass(e.target, "holsmon")) {
      holsmon();
    }
  },
  false
);

function lighdramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Lighdramon");
  replaceImage("lighdramon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("renamon", "Renamon", "Friendship Digimental");
  evolveFromFrame("veemon", "Veemon", "Friendship Digimental");
  eraseOld(2);
  evolveToFrame("metaltyranomon", "MetalTyranomon", "Jogress: Flamedramon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".lighdramon").click(function (e) {
  e.preventDefault();
  lighdramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "lighdramon")) {
      lighdramon();
    } else if (hasClass(e.target, "lighdramon")) {
      lighdramon();
    }
  },
  false
);

function lynxmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Lynxmon");
  replaceImage("lynxmon");
  attribute("va");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("gatomon", "Gatomon", "Courage Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".lynxmon").click(function (e) {
  e.preventDefault();
  lynxmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "lynxmon")) {
      lynxmon();
    } else if (hasClass(e.target, "lynxmon")) {
      lynxmon();
    }
  },
  false
);

function maildramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Maildramon");
  replaceImage("maildramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("salamon", "Salamon", "Fate Digimental");
  evolveFromFrame("salamon", "Salamon", "Miracle Digimental");
  evolveFromFrame("gatomon", "Gatomon", "Miracle Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".maildramon").click(function (e) {
  e.preventDefault();
  maildramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "maildramon")) {
      maildramon();
    } else if (hasClass(e.target, "maildramon")) {
      maildramon();
    }
  },
  false
);

function mothmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Mothmon");
  replaceImage("mothmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("patamon", "Patamon", "Knowledge Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".mothmon").click(function (e) {
  e.preventDefault();
  mothmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "mothmon")) {
      mothmon();
    } else if (hasClass(e.target, "mothmon")) {
      mothmon();
    }
  },
  false
);

function nefertimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Nefertimon");
  replaceImage("nefertimon");
  attribute("va");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("gatomon", "Gatomon", "Light Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".nefertimon").click(function (e) {
  e.preventDefault();
  nefertimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "nefertimon")) {
      nefertimon();
    } else if (hasClass(e.target, "nefertimon")) {
      nefertimon();
    }
  },
  false
);

function pegasmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Pegasmon");
  replaceImage("pegasmon");
  attribute("va");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("patamon", "Patamon", "Hope Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".pegasmon").click(function (e) {
  e.preventDefault();
  pegasmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "pegasmon")) {
      pegasmon();
    } else if (hasClass(e.target, "pegasmon")) {
      pegasmon();
    }
  },
  false
);

function pipismon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Pipismon");
  replaceImage("pipismon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("patamon", "Patamon", "Love Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".pipismon").click(function (e) {
  e.preventDefault();
  pipismon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "pipismon")) {
      pipismon();
    } else if (hasClass(e.target, "pipismon")) {
      pipismon();
    }
  },
  false
);

function pteranomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Pteranomon");
  replaceImage("pteranomon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("armadillomon", "Armadillomon", "Love Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".pteranomon").click(function (e) {
  e.preventDefault();
  pteranomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "pteranomon")) {
      pteranomon();
    } else if (hasClass(e.target, "pteranomon")) {
      pteranomon();
    }
  },
  false
);

function quetzalmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Quetzalmon");
  replaceImage("quetzalmon");
  attribute("va");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("impmon", "Impmon", "Light Digimental");
  evolveFromFrame("wormmon", "Wormmon", "Light Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".quetzalmon").click(function (e) {
  e.preventDefault();
  quetzalmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "quetzalmon")) {
      quetzalmon();
    } else if (hasClass(e.target, "quetzalmon")) {
      quetzalmon();
    }
  },
  false
);

function sagittarimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Sagittarimon");
  replaceImage("sagittarimon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("veemon", "Veemon", "Hope Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".sagittarimon").click(function (e) {
  e.preventDefault();
  sagittarimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "sagittarimon")) {
      sagittarimon();
    } else if (hasClass(e.target, "sagittarimon")) {
      sagittarimon();
    }
  },
  false
);

function seahomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Seahomon");
  replaceImage("seahomon");
  attribute("un");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("armadillomon", "Armadillomon", "Light Digimental");
  evolveFromFrame("swimmon", "Swimmon", "300 Dark Xp");
  evolveFromFrame("ankylomon", "Ankylomon", "Light Digimental");
  eraseOld(2);
  evolveToFrame("submarimon", "Submarimon", "Sincerity Digimental");
  evolveToFrame("marinedevimon", "MarineDevimon", "Lvl 45");
  evolveToFrame("whamon", "Whamon", "5000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".seahomon").click(function (e) {
  e.preventDefault();
  seahomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "seahomon")) {
      seahomon();
    } else if (hasClass(e.target, "seahomon")) {
      seahomon();
    }
  },
  false
);

function shadramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Shadramon");
  replaceImage("shadramon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("wormmon", "Wormmon", "Courage Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".shadramon").click(function (e) {
  e.preventDefault();
  shadramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "shadramon")) {
      shadramon();
    } else if (hasClass(e.target, "shadramon")) {
      shadramon();
    }
  },
  false
);

function shurimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Shurimon");
  replaceImage("shurimon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("hawkmon", "Hawkmon", "Purity Digimental");
  evolveFromFrame("aquilamon", "Aquilamon", "Purity Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".shurimon").click(function (e) {
  e.preventDefault();
  shurimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "shurimon")) {
      shurimon();
    } else if (hasClass(e.target, "shurimon")) {
      shurimon();
    }
  },
  false
);

function submarimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Submarimon");
  replaceImage("submarimon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("armadillomon", "Armadillomon", "Sincerity Digimental");
  evolveFromFrame("seahomon", "Seahomon", "Sincerity Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".submarimon").click(function (e) {
  e.preventDefault();
  submarimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "submarimon")) {
      submarimon();
    } else if (hasClass(e.target, "submarimon")) {
      submarimon();
    }
  },
  false
);

function tocanmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Tocanmon");
  replaceImage("tocanmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("hawkmon", "Hawkmon", "Kindness Digimental");
  eraseOld(2);
  evolveToFrame("holsmon", "Holsmon", "Love Digimental");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".tocanmon").click(function (e) {
  e.preventDefault();
  tocanmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "tocanmon")) {
      tocanmon();
    } else if (hasClass(e.target, "tocanmon")) {
      tocanmon();
    }
  },
  false
);

function togemogumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Togemogumon");
  replaceImage("togemogumon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("wormmon", "Wormmon", "Friendship Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".togemogumon").click(function (e) {
  e.preventDefault();
  togemogumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "togemogumon")) {
      togemogumon();
    } else if (hasClass(e.target, "togemogumon")) {
      togemogumon();
    }
  },
  false
);

function tylomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Tylomon");
  replaceImage("tylomon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gatomon", "Gatomon", "Sincerity Digimental");
  evolveFromFrame("guilmon", "Guilmon", "Sincerity Digimental");
  evolveFromFrame("otamamon", "Otamamon", "Sincerity Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".tylomon").click(function (e) {
  e.preventDefault();
  tylomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "tylomon")) {
      tylomon();
    } else if (hasClass(e.target, "tylomon")) {
      tylomon();
    }
  },
  false
);

function yaksamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Yaksamon");
  replaceImage("yaksamon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("veemon", "Veemon", "Purity Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".yaksamon").click(function (e) {
  e.preventDefault();
  yaksamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "yaksamon")) {
      yaksamon();
    } else if (hasClass(e.target, "yaksamon")) {
      yaksamon();
    }
  },
  false
);

function magnamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Magnamon");
  replaceImage("magnamon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("terriermon", "Terriermon", "Miracle Digimental");
  evolveFromFrame("veemon", "Veemon", "Miracle Digimental");
  evolveFromFrame("xveemon", "ExVeemon", "Miracle Digimental");
  evolveFromFrame("guardromongold", "Guardromon (Gold)", "Miracle Digimental");
  eraseOld(2);
  evolveToFrame("magnamonx", "Magnamon X", "X-Antibody");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".magnamon").click(function (e) {
  e.preventDefault();
  magnamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "magnamon")) {
      magnamon();
    } else if (hasClass(e.target, "magnamon")) {
      magnamon();
    }
  },
  false
);

function rapidmongold() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Rapidmon (Gold)");
  replaceImage("rapidmongold");
  attribute("va");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("lopmon", "Lopmon", "Fate Digimental");
  evolveFromFrame("terriermon", "Terriermon", "Fate Digimental");
  evolveFromFrame("guardromongold", "Guardromon (Gold)", "Fate Digimental");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".rapidmongold").click(function (e) {
  e.preventDefault();
  rapidmongold();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "rapidmongold")) {
      rapidmongold();
    } else if (hasClass(e.target, "rapidmongold")) {
      rapidmongold();
    }
  },
  false
);

/*-------------------- ULTIMATES --------------------*/

function aegiochusmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Aegiochusmon");
  replaceImage("aegiochusmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("aegiomon", "Aegiomon", "Lvl 45 + Chapter 3 + Child of Fate");
  eraseOld(2);
  evolveToFrame(
    "jupitermon",
    "Jupitermon",
    "Lvl 80 + Chapter 20 + Child of Fate"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".aegiochusmon").click(function (e) {
  e.preventDefault();
  aegiochusmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "aegiochusmon")) {
      aegiochusmon();
    } else if (hasClass(e.target, "aegiochusmon")) {
      aegiochusmon();
    }
  },
  false
);

function aegiochusmonblue() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Aegiochusmon Blue");
  replaceImage("aegiochusmonblue");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "aegiomon",
    "Aegiomon",
    "> Machine Exp + Chapter 13 + Child of Fate"
  );
  eraseOld(2);
  evolveToFrame(
    "jupitermon",
    "Jupitermon",
    "Lvl 80 + Chapter 20 + Child of Fate"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".aegiochusmonblue").click(function (e) {
  e.preventDefault();
  aegiochusmonblue();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "aegiochusmonblue")) {
      aegiochusmonblue();
    } else if (hasClass(e.target, "aegiochusmonblue")) {
      aegiochusmonblue();
    }
  },
  false
);

function aegiochusmondark() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Aegiochusmon Dark");
  replaceImage("aegiochusmondark");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "aegiomon",
    "Aegiomon",
    "> Dark Exp + Chapter 18 + Child of Fate"
  );
  eraseOld(2);
  evolveToFrame(
    "jupitermon",
    "Jupitermon",
    "Lvl 80 + Chapter 20 + Child of Fate"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".aegiochusmondark").click(function (e) {
  e.preventDefault();
  aegiochusmondark();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "aegiochusmondark")) {
      aegiochusmondark();
    } else if (hasClass(e.target, "aegiochusmondark")) {
      aegiochusmondark();
    }
  },
  false
);

function aegiochusmonholy() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Aegiochusmon Holy");
  replaceImage("aegiochusmonholy");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "aegiomon",
    "Aegiomon",
    "> Holy Exp + Chapter 18 + Child of Fate"
  );
  eraseOld(2);
  evolveToFrame(
    "jupitermon",
    "Jupitermon",
    "Lvl 80 + Chapter 20 + Child of Fate"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".aegiochusmonholy").click(function (e) {
  e.preventDefault();
  aegiochusmonholy();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "aegiochusmonholy")) {
      aegiochusmonholy();
    } else if (hasClass(e.target, "aegiochusmonholy")) {
      aegiochusmonholy();
    }
  },
  false
);

function aegiochusmongreen() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Aegiochusmon Green");
  replaceImage("aegiochusmongreen");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "aegiomon",
    "Aegiomon",
    "> Insect/Plant Exp + Chapter 12 + Child of Fate"
  );
  eraseOld(2);
  evolveToFrame(
    "jupitermon",
    "Jupitermon",
    "Lvl 80 + Chapter 20 + Child of Fate"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".aegiochusmongreen").click(function (e) {
  e.preventDefault();
  aegiochusmongreen();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "aegiochusmongreen")) {
      aegiochusmongreen();
    } else if (hasClass(e.target, "aegiochusmongreen")) {
      aegiochusmongreen();
    }
  },
  false
);

function aeroveedramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("AeroVeedramon");
  replaceImage("aeroveedramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("airdramon", "Airdramon", "Jogress: Tyranomon");
  evolveFromFrame("birdramon", "Birdramon", "50000 Dragon Xp");
  evolveFromFrame("redveedramon", "RedVeedramon", "Lvl 45");
  evolveFromFrame("tyranomon", "Tyranomon", "Jogress: Airdramon");
  evolveFromFrame("veedramon", "Veedramon", "Lvl 45");
  eraseOld(2);
  evolveToFrame("goddramon", "Goddramon", "50000 Holy Xp");
  evolveToFrame("jesmon", "Jesmon", "50000 Dragon Xp");
  evolveToFrame("ravemon", "Ravemon", "50000 Bird Xp");
  evolveToFrame("ulforceveedramon", "UlforceVeedramon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".aeroveedramon").click(function (e) {
  e.preventDefault();
  aeroveedramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "aeroveedramon")) {
      aeroveedramon();
    } else if (hasClass(e.target, "aeroveedramon")) {
      aeroveedramon();
    }
  },
  false
);

function angewomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Angewomon");
  replaceImage("angewomon");
  attribute("va");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("gatomon", "Gatomon", "Lvl 45");
  evolveFromFrame("meicoomon", "Meicoomon", "Lvl 45");
  evolveFromFrame("reppamon", "Reppamon", "5000 Holy Xp");
  evolveFromFrame("yukidarumon", "Yukidarumon", "5000 Holy Xp");
  eraseOld(2);
  evolveToFrame(
    "junomon",
    "Junomon",
    "50000 Holy Xp + Pleased Mood + Jupitermon In Any Active Slot"
  );
  evolveToFrame("magnadramon", "Magnadramon", "Lvl 75");
  evolveToFrame("marineangemon", "MarineAngemon", "50000 Aquatic Xp");
  evolveToFrame("ophanimon", "Ophanimon", "50000 Holy Xp");
  evolveToFrame("valkyrimon", "Valkyrimon", "Jogress: Deramon");
  evolveToFrame("venusmon", "Venusmon", "Lvl 75 + Cherry Mood");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".angewomon").click(function (e) {
  e.preventDefault();
  angewomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "angewomon")) {
      angewomon();
    } else if (hasClass(e.target, "angewomon")) {
      angewomon();
    }
  },
  false
);

function andromon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Andromon");
  replaceImage("andromon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("angemon", "Angemon", "5000 Machine Xp");
  evolveFromFrame("guardromon", "Guardromon", "Lvl 45");
  evolveFromFrame("guardromongold", "Guardromon Gold", "Lvl 45");
  eraseOld(2);
  evolveToFrame("boltmon", "Boltmon", "50000 Dark Xp");
  evolveToFrame("hiandromon", "HiAndromon", "Lvl 75");
  evolveToFrame(
    "reapermon",
    "Reapermon",
    "50000 Dark Xp + 500 Victories + 30 Defeats"
  );
  evolveToFrame("seraphimon", "Seraphimon", "50000 Holy Xp");
  evolveToFrame("tigervespamon", "TigerVespamon", "50000 Insect/Plant Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".andromon").click(function (e) {
  e.preventDefault();
  andromon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "andromon")) {
      andromon();
    } else if (hasClass(e.target, "andromon")) {
      andromon();
    }
  },
  false
);

function anomalocarimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Anomalocarimon");
  replaceImage("anomalocarimon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("ankylomon", "Ankylomon", "5000 Aquatic Xp");
  evolveFromFrame("coelamon", "Coelamon", "Jogress: Seadramon");
  evolveFromFrame("flymon", "Flymon", "5000 Aquatic Xp");
  evolveFromFrame("gaogamon", "Gaogamon", "5000 Aquatic Xp");
  evolveFromFrame("kabuterimon", "Kabuterimon", "5000 Aquatic Xp");
  evolveFromFrame("sandyanmamon", "SandYanmamon", "Lvl 75");
  evolveFromFrame("seadramon", "Seadramon", "Jogress: Coelamon");
  eraseOld(2);
  evolveToFrame("plesiomon", "Plesiomon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".anomalocarimon").click(function (e) {
  e.preventDefault();
  anomalocarimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "anomalocarimon")) {
      anomalocarimon();
    } else if (hasClass(e.target, "anomalocarimon")) {
      anomalocarimon();
    }
  },
  false
);

function antylamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Antylamon");
  replaceImage("antylamon");
  attribute("vi");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("lopmon", "Lopmon", "Warp Evolution");
  evolveFromFrame("gargomon", "Gargomon", "5000 Holy Xp");
  evolveFromFrame("lekismon", "Lekismon", "5000 Beast Xp + Neutral Mood");
  eraseOld(2);
  evolveToFrame("cherubimonvice", "Cherubimon (Vice)", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".antylamon").click(function (e) {
  e.preventDefault();
  antylamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "antylamon")) {
      antylamon();
    } else if (hasClass(e.target, "antylamon")) {
      antylamon();
    }
  },
  false
);

function antylamondeva() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Antylamon (Deva)");
  replaceImage("antylamondeva");
  attribute("da");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("lopmon", "Lopmon", "Warp Evolution");
  evolveFromFrame("turuiemon", "Turuiemon", "Lvl 45");
  evolveFromFrame("lekismon", "Lekismon", "5000 Beast Xp + Neutral Mood");
  eraseOld(2);
  evolveToFrame("belphemonsleep", "Belphemon (Sleep Mode)", "50000 Dark Xp");
  evolveToFrame("cherubimonvirtue", "Cherubimon (Virtue)", "Lvl 75");
  evolveToFrame("dianamon", "Dianamon", "50000 Aquatic Xp + Indiferent Mood");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".antylamondeva").click(function (e) {
  e.preventDefault();
  antylamondeva();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "antylamondeva")) {
      antylamondeva();
    } else if (hasClass(e.target, "antylamondeva")) {
      antylamondeva();
    }
  },
  false
);

function arukenimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Arukenimon");
  replaceImage("arukenimon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("dokugumon", "Dokugumon", "Lvl 45");
  evolveFromFrame("flymon", "Flymon", "5000 Dark Xp");
  evolveFromFrame("wendigomon", "Wendigomon", "5000 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame("beelstarmon", "Beelstarmon", "50000 Dark Xp");
  evolveToFrame("lilithmon", "Lilithmon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".arukenimon").click(function (e) {
  e.preventDefault();
  arukenimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "arukenimon")) {
      arukenimon();
    } else if (hasClass(e.target, "arukenimon")) {
      arukenimon();
    }
  },
  false
);

function asuramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Asuramon");
  replaceImage("asuramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("meramon", "Meramon", "5000 Holy Xp");
  evolveFromFrame("ogremon", "Ogremon", "5000 Holy Xp");
  eraseOld(2);
  evolveToFrame("marsmon", "Marsmon", "Lvl 80");
  evolveToFrame("megidramon", "Megidramon", "50000 Aquatic Xp");
  evolveToFrame("mugendramon", "Mugendramon", "50000 Machine Xp");
  evolveToFrame(
    "vulcanusmon",
    "Vulcanusmon",
    "Lvl 80 + 50000 Machine Xp + Indiferent Mood"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".asuramon").click(function (e) {
  e.preventDefault();
  asuramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "asuramon")) {
      asuramon();
    } else if (hasClass(e.target, "asuramon")) {
      asuramon();
    }
  },
  false
);

function atlurkabuterimonblue() {
  $(".theme").attr("href", "style_info.css");
  replaceName("AtlurKabuterimon (Blue)");
  replaceImage("atlurkabuterimonblue");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("chrysalimon", "Chrysalimon", "5000 Insect/Plant Xp");
  evolveFromFrame("dokugumon", "Dokugumon", "5000 Insect/Plant Xp");
  evolveFromFrame("kabuterimon", "Kabuterimon", "5000 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame("craniummon", "Craniummon", "50000 Holy Xp");
  evolveToFrame("herculeskabuterimon", "HerculesKabuterimon", "Lvl 75");
  evolveToFrame("kentaurosmon", "Kentaurosmon", "50000 Beast Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".atlurkabuterimonblue").click(function (e) {
  e.preventDefault();
  atlurkabuterimonblue();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "atlurkabuterimonblue")) {
      atlurkabuterimonblue();
    } else if (hasClass(e.target, "atlurkabuterimonblue")) {
      atlurkabuterimonblue();
    }
  },
  false
);

function atlurkabuterimonred() {
  $(".theme").attr("href", "style_info.css");
  replaceName("AtlurKabuterimon (Red)");
  replaceImage("atlurkabuterimonred");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("kabuterimon", "Kabuterimon", "Lvl 45");
  evolveFromFrame("redveedramon", "RedVeedramon", "5000 Insect/Plant Xp");
  evolveFromFrame("redvegiemon", "RedVegiemon", "5000 Dark Xp");
  evolveFromFrame("waspmon", "Waspmon", "5000 Insect/Plant Xp");
  evolveFromFrame("yanmamon", "Yanmamon", "Lvl 45");
  eraseOld(2);
  evolveToFrame(
    "banchostingmon",
    "BanchoStingmon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("grankuwagamon", "GranKuwagamon", "50000 Insect/Plant Xp");
  evolveToFrame("herculeskabuterimon", "HerculesKabuterimon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".atlurkabuterimonred").click(function (e) {
  e.preventDefault();
  atlurkabuterimonred();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "atlurkabuterimonred")) {
      atlurkabuterimonred();
    } else if (hasClass(e.target, "atlurkabuterimonred")) {
      atlurkabuterimonred();
    }
  },
  false
);

function blackkingnumemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BlackKingNumemon");
  replaceImage("blackkingnumemon");
  attribute("vi");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("numemon", "Numemon", "5000 Dark Xp");
  evolveFromFrame("shellnumemon", "ShellNumemon", "Lvl 45");
  eraseOld(2);
  evolveToFrame("metaletemon", "MetalEtemon", "50000 Machine Xp");
  evolveToFrame("platinumnumemon", "PlatinumNumemon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".blackkingnumemon").click(function (e) {
  e.preventDefault();
  blackkingnumemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "blackkingnumemon")) {
      blackkingnumemon();
    } else if (hasClass(e.target, "blackkingnumemon")) {
      blackkingnumemon();
    }
  },
  false
);

function bluemeramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BlueMeramon");
  replaceImage("bluemeramon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("devimon", "Devimon", "5000 Machine Xp");
  evolveFromFrame("growlmon", "Growlmon", "Lvl 45");
  evolveFromFrame("hyogamon", "Hyogamon", "Lvl 45");
  evolveFromFrame("meramon", "Meramon", "Lvl 45");
  eraseOld(2);
  evolveToFrame("boltmon", "Boltmon", "Lvl 75");
  evolveToFrame("darkdramon", "Darkdramon", "50000 Dragon Xp");
  evolveToFrame("demon", "Demon", "50000 Dark Xp");
  evolveToFrame("leviamon", "Leviamon", "50000 Aquatic Xp");
  evolveToFrame("miragegaogamon", "MirageGaogamon", "50000 Beast Xp");
  evolveToFrame("piedmon", "Piedmon", "Jogress: Phantomon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".bluemeramon").click(function (e) {
  e.preventDefault();
  bluemeramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "bluemeramon")) {
      bluemeramon();
    } else if (hasClass(e.target, "bluemeramon")) {
      bluemeramon();
    }
  },
  false
);

function brachimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Brachimon");
  replaceImage("brachimon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("ankylomon", "Ankylomon", "5000 Aquatic Xp + 3000 Dragon Xp");
  evolveFromFrame("ebidramon", "Ebidramon", "5000 Dragon Xp");
  evolveFromFrame("sandyanmamon", "SandYanmamon", "Jogress: Yanmamon");
  evolveFromFrame("tyranomon", "Tyranomon", "5000 Aquatic Xp");
  evolveFromFrame("yanmamon", "Yanmamon", "Jogress: SandYanmamon");
  eraseOld(2);
  evolveToFrame("cannondramon", "Cannondramon", "Lvl 75");
  evolveToFrame("megidramon", "Megidramon", "50000 Dark Xp");
  evolveToFrame("metalgarurumon", "MetalGarurumon", "50000 Machine Xp");
  evolveToFrame(
    "metalseadramon",
    "MetalSeadramon",
    "50000 Aquatic Xp + 10000 Def"
  );
  evolveToFrame("plesiomon", "Plesiomon", "50000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".brachimon").click(function (e) {
  e.preventDefault();
  brachimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "brachimon")) {
      brachimon();
    } else if (hasClass(e.target, "brachimon")) {
      brachimon();
    }
  },
  false
);

function cannonbeemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Cannonbeemon");
  replaceImage("cannonbeemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("flymon", "Flymon", "5000 Machine Xp");
  evolveFromFrame("ginryumon", "Ginryumon", "5000 Insect/Plant Xp");
  evolveFromFrame("hudiemon", "Hudiemon", "5000 Machine Xp");
  evolveFromFrame("omekamon", "Omekamon", "5000 Insect/Plant Xp");
  evolveFromFrame("stingmon", "Stingmon", "5000 Machine Xp");
  evolveFromFrame("waspmon", "Waspmon", "Lvl 45");
  eraseOld(2);
  evolveToFrame("alphamon", "Alphamon", "50000 Holy Xp");
  evolveToFrame("megagargomon", "MegaGargomon", "50000 Machine Xp");
  evolveToFrame("ouryumon", "Ouryumon", "50000 Dragon Xp");
  evolveToFrame("tigervespamon", "TigerVespamon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".cannonbeemon").click(function (e) {
  e.preventDefault();
  cannonbeemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "cannonbeemon")) {
      cannonbeemon();
    } else if (hasClass(e.target, "cannonbeemon")) {
      cannonbeemon();
    }
  },
  false
);

function captainhookmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("CaptainHookmon");
  replaceImage("captainhookmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("hookmon", "Hookmon", "Lvl 45");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".captainhookmon").click(function (e) {
  e.preventDefault();
  captainhookmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "captainhookmon")) {
      captainhookmon();
    } else if (hasClass(e.target, "captainhookmon")) {
      captainhookmon();
    }
  },
  false
);

function cerberumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Cerberumon");
  replaceImage("cerberumon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("dobermon", "Dobermon", "Lvl 45");
  evolveFromFrame("garurumon", "Garurumon", "5000 Beast Xp");
  eraseOld(2);
  evolveToFrame("ancientgarurumon", "AncientGarurumon", "Ancient Evoluter");
  evolveToFrame("anubimon", "Anubimon", "Lvl 75");
  evolveToFrame(
    "bancholeomon",
    "BanchoLeomon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("merukimon", "Merukimon", "50000 Beast Xp");
  evolveToFrame(
    "plutomon",
    "Plutomon",
    "50000 Dark Xp + Chapter 20 + Child of Fate"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".cerberumon").click(function (e) {
  e.preventDefault();
  cerberumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "cerberumon")) {
      cerberumon();
    } else if (hasClass(e.target, "cerberumon")) {
      cerberumon();
    }
  },
  false
);

function cherrymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Cherrymon");
  replaceImage("cherrymon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("icedevimon", "IceDevimon", "5000 Insect/Plant Xp");
  evolveFromFrame("redvegiemon", "RedVegiemon", "Lvl 45");
  evolveFromFrame("woodmon", "Woodmon", "Lvl 45");
  eraseOld(2);
  evolveToFrame(
    "bancholilymon",
    "BanchoLilymon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame(
    "ceresmon",
    "Ceresmon",
    "50000 Insect/Plant Xp + 50000 Bird Xp"
  );
  evolveToFrame(
    "eldoradimon",
    "ElDoradimon",
    "50000 Holy Xp + The Holy Capital of El Dorado Medal"
  );
  evolveToFrame("grankuwagamon", "GranKuwagamon", "50000 Insect/Plant Xp");
  evolveToFrame("puppetmon", "Puppetmon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".cherrymon").click(function (e) {
  e.preventDefault();
  cherrymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "cherrymon")) {
      cherrymon();
    } else if (hasClass(e.target, "cherrymon")) {
      cherrymon();
    }
  },
  false
);

function crescemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Crescemon");
  replaceImage("crescemon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("icedevimon", "IceDevimon", "5000 Holy Xp + Neutral Mood");
  evolveFromFrame("lekismon", "Lekismon", "Lvl 45 + Neutral Mood");
  evolveFromFrame("yukidarumon", "Yukidarumon", "5000 Holy Xp + Neutral Mood");
  eraseOld(2);
  evolveToFrame("cherubimonvirtue", "Cherubimon (Virtue)", "50000 Holy Xp");
  evolveToFrame("dianamon", "Dianamon", "Lvl 80");
  evolveToFrame("leviamon", "Leviamon", "50000 Aquatic Xp");
  evolveToFrame("rosemon", "Rosemon", "50000 Insect/Plant Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".crescemon").click(function (e) {
  e.preventDefault();
  crescemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "crescemon")) {
      crescemon();
    } else if (hasClass(e.target, "crescemon")) {
      crescemon();
    }
  },
  false
);

function cyberdramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Cyberdramon");
  replaceImage("cyberdramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("coredramon_blue", "Coredramon Blue", "5000 Dragon Xp");
  evolveFromFrame("flarerizamon", "Flarerizamon", "5000 Dragon Xp");
  evolveFromFrame("strikedramon", "Strikedramon", "Lvl 45");
  eraseOld(2);
  evolveToFrame("alphamon", "Alphamon", "50000 Holy Xp");
  evolveToFrame("justimon", "Justimon", "Lvl 75");
  evolveToFrame("titamon", "Titamon", "50000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".cyberdramon").click(function (e) {
  e.preventDefault();
  cyberdramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "cyberdramon")) {
      cyberdramon();
    } else if (hasClass(e.target, "cyberdramon")) {
      cyberdramon();
    }
  },
  false
);

function dagomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Dagomon");
  replaceImage("dagomon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("coelamon", "Coelamon", "5000 Aquatic Xp");
  evolveFromFrame("seadramon", "Seadramon", "250 Victories + 5000 Dark Xp");
  eraseOld(2);
  evolveToFrame("neptunemon", "Neptunemon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dagomon").click(function (e) {
  e.preventDefault();
  dagomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dagomon")) {
      dagomon();
    } else if (hasClass(e.target, "dagomon")) {
      dagomon();
    }
  },
  false
);

function darksuperstarmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("DarkSuperStarmon");
  replaceImage("darksuperstarmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blackgatomon", "BlackGatomon", "5000 Machine Xp");
  evolveFromFrame("starmon", "Starmon", "5000 Machine Xp");
  evolveFromFrame("superstarmon", "SuperStarmon", "Black Digitron");
  eraseOld(2);
  evolveToFrame("darkdramon", "Darkdramon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".darksuperstarmon").click(function (e) {
  e.preventDefault();
  darksuperstarmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "darksuperstarmon")) {
      darksuperstarmon();
    } else if (hasClass(e.target, "darksuperstarmon")) {
      darksuperstarmon();
    }
  },
  false
);

function datamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Datamon");
  replaceImage("datamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("guardromongold", "Guardromon Gold", "5000 Dark Xp");
  evolveFromFrame("mechanorimon", "Mechanorimon", "5000 Machine Xp");
  evolveFromFrame("raremon", "Raremon", "5000 Machine Xp");
  eraseOld(2);
  evolveToFrame("barbamon", "Barbamon", "50000 Dark Xp");
  evolveToFrame("blackmetalgarurumon", "BlackMetalGarurumon", "50000 Beast Xp");
  evolveToFrame("mugendramon", "Mugendramon", "Lvl 75");
  evolveToFrame("platinumnumemon", "PlatinumNumemon", "50 Defeats");
  evolveToFrame(
    "reapermon",
    "Reapermon",
    "50000 Dark Xp + 500 Victories + 30 Defeats"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".datamon").click(function (e) {
  e.preventDefault();
  datamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "datamon")) {
      datamon();
    } else if (hasClass(e.target, "datamon")) {
      datamon();
    }
  },
  false
);

function deathxdorugreymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Death-X DoruGreymon");
  replaceImage("deathxdorugreymon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("deathxdorugamon", "Death-X Dorugamon", "Lvl 45");
  eraseOld(2);
  evolveToFrame("deathxdorugoramon", "Death-X Dorugoramon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".deathxdorugreymon").click(function (e) {
  e.preventDefault();
  deathxdorugreymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "deathxdorugreymon")) {
      deathxdorugreymon();
    } else if (hasClass(e.target, "deathxdorugreymon")) {
      deathxdorugreymon();
    }
  },
  false
);

function deramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Deramon");
  replaceImage("deramon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("aquilamon", "Aquilamon", "5000 Beast Xp");
  evolveFromFrame("cockatrimon", "Cockatrimon", "Lvl 45");
  evolveFromFrame("flarerizamon", "Flarerizamon", "5000 Bird Xp");
  evolveFromFrame("kiwimon", "Kiwimon", "Lvl 45");
  eraseOld(2);
  evolveToFrame(
    "banchostingmon",
    "BanchoStingmon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("griffomon", "Griffomon", "Lvl 75");
  evolveToFrame("valkyrimon", "Valkyrimon", "Jogress: Angewomon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".deramon").click(function (e) {
  e.preventDefault();
  deramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "deramon")) {
      deramon();
    } else if (hasClass(e.target, "deramon")) {
      deramon();
    }
  },
  false
);

function digitamamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Digitamamon");
  replaceImage("digitamamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("ogremon", "Ogremon", "Lvl 45");
  evolveFromFrame("starmon", "Starmon", "5000 Dark Xp");
  evolveFromFrame("wizardmon", "Wizardmon", "5000 Dark Xp");
  eraseOld(2);
  evolveToFrame("bacchusmon", "Bacchusmon", "50000 Beast Xp + Must be Stuffed");
  evolveToFrame("devitamamon", "Devitamamon", "Lvl 75");
  evolveToFrame("marineangemon", "MarineAngemon", "50000 Aquatic Xp");
  evolveToFrame("minervamon", "Minervamon", "50000 Holy Xp");
  evolveToFrame("titamon", "Titamon", "50000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".digitamamon").click(function (e) {
  e.preventDefault();
  digitamamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "digitamamon")) {
      digitamamon();
    } else if (hasClass(e.target, "digitamamon")) {
      digitamamon();
    }
  },
  false
);

function dinobeemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Dinobeemon");
  replaceImage("dinobeemon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("xveemon", "ExVeemon", "Jogress: Stingmon (Stingmon Active)");
  evolveFromFrame(
    "stingmon",
    "Stingmon",
    "Jogress: ExVeemon (Stingmon Active)"
  );
  eraseOld(2);
  evolveToFrame("breakdramon", "Breakdramon", "50000 Machine Xp");
  evolveToFrame("grankuwagamon", "GranKuwagamon", "Lvl 75");
  evolveToFrame(
    "imperialdramondragon",
    "Imperialdramon (Dragon Mode)",
    "50000 Dragon Xp"
  );
  evolveToFrame(
    "blackimperialdramondragon",
    "Black Imperialdramon (Dragon Mode)",
    "50000 Dark Xp"
  );
  evolveToFrame("tigervespamon", "TigerVespamon", "50000 Insect/Plant Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dinobeemon").click(function (e) {
  e.preventDefault();
  dinobeemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dinobeemon")) {
      dinobeemon();
    } else if (hasClass(e.target, "dinobeemon")) {
      dinobeemon();
    }
  },
  false
);

function dorugreymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("DoruGreymon");
  replaceImage("dorugreymon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blackgreymon", "BlackGreymon", "5000 Beast Xp");
  evolveFromFrame("dorugamon", "Dorugamon", "Lvl 45");
  evolveFromFrame("greymonxros", "Greymon (Xros)", "250 Victories");
  evolveFromFrame("waspmon", "Waspmon", "5000 Beast Xp");
  eraseOld(2);
  evolveToFrame("alphamon", "Alphamon", "Lvl 75");
  evolveToFrame("kentaurosmon", "Kentaurosmon", "50000 Holy Xp");
  evolveToFrame("spinomon", "Spinomon", "50000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dorugreymon").click(function (e) {
  e.preventDefault();
  dorugreymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dorugreymon")) {
      dorugreymon();
    } else if (hasClass(e.target, "dorugreymon")) {
      dorugreymon();
    }
  },
  false
);

function etemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Etemon");
  replaceImage("etemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("meramon", "Meramon", "5000 Beast Xp");
  evolveFromFrame("sukamon", "Sukamon", "Lvl 15");
  eraseOld(2);
  evolveToFrame(
    "banchogolemon",
    "BanchoGolemon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("megagargomon", "MegaGargomon", "50000 Machine Xp");
  evolveToFrame("metaletemon", "MetalEtemon", "Lvl 75");
  evolveToFrame("piedmon", "Piedmon", "50000 Dark Xp");
  evolveToFrame("platinumnumemon", "PlatinumNumemon", "50000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".etemon").click(function (e) {
  e.preventDefault();
  etemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "etemon")) {
      etemon();
    } else if (hasClass(e.target, "etemon")) {
      etemon();
    }
  },
  false
);

function flaremon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Flaremon");
  replaceImage("flaremon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("aegiomon", "Aegiomon", "Lvl 45 + Neutral Mood");
  evolveFromFrame("firamon", "Firamon", "Lvl 45 + Neutral Mood");
  evolveFromFrame("geogreymon", "GeoGreymon", "Lvl 45 + Neutral Mood");
  evolveFromFrame("meramon", "Meramon", "5000 Beast Xp + Neutral Mood");
  eraseOld(2);
  evolveToFrame("apollomon", "Apollomon", "Lvl 80 + Neutral Mood");
  evolveToFrame("marsmon", "Marsmon", "Lvl 80");
  evolveToFrame("miragegaogamon", "MirageGaogamon", "50000 Beast Xp");
  evolveToFrame("rosemon", "Rosemon", "50000 Insect/Plant Xp");
  evolveToFrame("victorygreymon", "VictoryGreymon", "50000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".flaremon").click(function (e) {
  e.preventDefault();
  flaremon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "flaremon")) {
      flaremon();
    } else if (hasClass(e.target, "flaremon")) {
      flaremon();
    }
  },
  false
);

function garbagemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Garbagemon");
  replaceImage("garbagemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("raremon", "Raremon", "Lvl 45");
  evolveFromFrame("sukamon", "Sukamon", "5000 Dark Xp");
  eraseOld(2);
  evolveToFrame("demon", "Demon", "50000 Dark Xp");
  evolveToFrame("metaletemon", "MetalEtemon", "Lvl 75");
  evolveToFrame("platinumnumemon", "PlatinumNumemon", "50000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".garbagemon").click(function (e) {
  e.preventDefault();
  garbagemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "garbagemon")) {
      garbagemon();
    } else if (hasClass(e.target, "garbagemon")) {
      garbagemon();
    }
  },
  false
);

function garudamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Garudamon");
  replaceImage("garudamon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("aquilamon", "Aquilamon", "Lvl 45");
  evolveFromFrame("birdramon", "Birdramon", "Lvl 45");
  evolveFromFrame("xveemon", "ExVeemon", "5000 Bird Xp");
  evolveFromFrame("fugamon", "Fugamon", "5000 Bird Xp");
  evolveFromFrame("sabirdramon", "Sabirdramon", "Lvl 45");
  eraseOld(2);
  evolveToFrame("beelzemon", "Beelzemon", "50000 Dark Xp");
  evolveToFrame("griffomon", "Griffomon", "50000 Bird Xp");
  evolveToFrame("hououmon", "Hououmon", "Lvl 75");
  evolveToFrame("magnadramon", "Magnadramon", "50000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".garudamon").click(function (e) {
  e.preventDefault();
  garudamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "garudamon")) {
      garudamon();
    } else if (hasClass(e.target, "garudamon")) {
      garudamon();
    }
  },
  false
);

function gigadramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Gigadramon");
  replaceImage("gigadramon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("airdramon", "Airdramon", "5000 Machine Xp");
  evolveFromFrame("blackgreymon", "BlackGreymon", "5000 Machine Xp");
  evolveFromFrame("deltamon", "Deltamon", "5000 Machine Xp");
  evolveFromFrame("geogreymon", "GeoGreymon", "5000 Dark Xp");
  evolveFromFrame("guardromon", "Guardromon", "5000 Dark Xp");
  evolveFromFrame("hyogamon", "Hyogamon", "5000 Machine Xp");
  evolveFromFrame("icedevimon", "IceDevimon", "5000 Machine Xp");
  eraseOld(2);
  evolveToFrame("megidramon", "Megidramon", "Lvl 75");
  evolveToFrame("rusttyranomon", "RustTyranomon", "50000 Machine Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gigadramon").click(function (e) {
  e.preventDefault();
  gigadramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gigadramon")) {
      gigadramon();
    } else if (hasClass(e.target, "gigadramon")) {
      gigadramon();
    }
  },
  false
);

function groundramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Groundramon");
  replaceImage("groundramon");
  attribute("vi");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("coredramon_green", "Coredramon (Green)", "Lvl 45");
  evolveFromFrame("growlmon", "Growlmon", "5000 Dragon Xp");
  eraseOld(2);
  evolveToFrame("breakdramon", "Breakdramon", "Lvl 75");
  evolveToFrame("megidramon", "Megidramon", "50000 Dark Xp");
  evolveToFrame("vikemon", "Vikemon", "50000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".groundramon").click(function (e) {
  e.preventDefault();
  groundramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "groundramon")) {
      groundramon();
    } else if (hasClass(e.target, "groundramon")) {
      groundramon();
    }
  },
  false
);

function hippogriffomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Hippogriffomon");
  replaceImage("hippogriffomon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("airdramon", "Airdramon", "5000 Bird Xp");
  evolveFromFrame("birdramon", "Birdramon", "5000 Beast Xp");
  evolveFromFrame("gekomon", "Gekomon", "5000 Bird Xp");
  evolveFromFrame("sabirdramon", "Sabirdramon", "5000 Beast Xp");
  eraseOld(2);
  evolveToFrame("griffomon", "Griffomon", "Lvl 75");
  evolveToFrame("marineangemon", "MarineAngemon", "50000 Aquatic Xp");
  evolveToFrame("ornismon", "Ornismon", "50000 Bird Xp");
  evolveToFrame("seraphimon", "Seraphimon", "50000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".hippogriffomon").click(function (e) {
  e.preventDefault();
  hippogriffomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "hippogriffomon")) {
      hippogriffomon();
    } else if (hasClass(e.target, "hippogriffomon")) {
      hippogriffomon();
    }
  },
  false
);

function hisyaryumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Hisyaryumon");
  replaceImage("hisyaryumon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("coelamon", "Coelamon", "5000 Holy Xp");
  evolveFromFrame("ginryumon", "Ginryumon", "Lvl 45");
  evolveFromFrame("omekamon", "Omekamon", "5000 Dragon Xp");
  evolveFromFrame("seadramon", "Seadramon", "5000 Holy Xp");
  evolveFromFrame("waspmon", "Waspmon", "5000 Holy Xp");
  eraseOld(2);
  evolveToFrame("alphamon", "Alphamon", "50000 Holy Xp + Happy Mood");
  evolveToFrame("dinorexmon", "Dinorexmon", "50000 Dragon Xp");
  evolveToFrame("goddramon", "Goddramon", "50000 Holy Xp");
  evolveToFrame("minervamon", "Minervamon", "Lvl 75 + Cherry Mood");
  evolveToFrame("ouryumon", "Ouryumon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".hisyaryumon").click(function (e) {
  e.preventDefault();
  hisyaryumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "hisyaryumon")) {
      hisyaryumon();
    } else if (hasClass(e.target, "hisyaryumon")) {
      hisyaryumon();
    }
  },
  false
);

function holyangemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("HolyAngemon");
  replaceImage("holyangemon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("angemon", "Angemon", "Lvl 45");
  evolveFromFrame("xveemon", "ExVeemon", "5000 Holy Xp");
  eraseOld(2);
  evolveToFrame("jesmon", "Jesmon", "50000 Holy Xp + 16666 Dragon Xp");
  evolveToFrame("lordknightmon", "LordKnightmon", "50000 Holy Xp");
  evolveToFrame("seraphimon", "Seraphimon", "Lvl 75");
  evolveToFrame("shinegreymon", "ShineGreymon", "50000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".holyangemon").click(function (e) {
  e.preventDefault();
  holyangemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "holyangemon")) {
      holyangemon();
    } else if (hasClass(e.target, "holyangemon")) {
      holyangemon();
    }
  },
  false
);

function infermon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Infermon");
  replaceImage("infermon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("chrysalimon", "Chrysalimon", "Lvl 45");
  evolveFromFrame("dokugumon", "Dokugumon", "5000 Dark Xp");
  eraseOld(2);
  evolveToFrame("diaboromon", "Diaboromon", "Lvl 75");
  evolveToFrame(
    "reapermon",
    "Reapermon",
    "50000 Dark Xp + 500 Victories + 30 Defeats"
  );
  evolveToFrame("venommyotismon", "VenomMyotismon", "50000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".infermon").click(function (e) {
  e.preventDefault();
  infermon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "infermon")) {
      infermon();
    } else if (hasClass(e.target, "infermon")) {
      infermon();
    }
  },
  false
);

function jewelbeemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Jewelbeemon");
  replaceImage("jewelbeemon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("stingmon", "Stingmon", "Lvl 45");
  evolveFromFrame("yanmamon", "Yanmamon", "5000 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame(
    "banchostingmon",
    "BanchoStingmon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("grankuwagamon", "GranKuwagamon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".jewelbeemon").click(function (e) {
  e.preventDefault();
  jewelbeemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "jewelbeemon")) {
      jewelbeemon();
    } else if (hasClass(e.target, "jewelbeemon")) {
      jewelbeemon();
    }
  },
  false
);

function kimeramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Kimeramon");
  replaceImage("kimeramon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("deltamon", "Deltamon", "Lvl 45 + 2500 in All Xp");
  evolveFromFrame("devimon", "Devimon", "Jogress: Kabuterimon");
  evolveFromFrame("kabuterimon", "Kabuterimon", "Jogress: Devimon");
  eraseOld(2);
  evolveToFrame("bancholeomon", "BanchoLeomon", "50000 Beast Xp");
  evolveToFrame("megidramon", "Megidramon", "Lvl 75");
  evolveToFrame("millenniumon", "Millenniumon", "Jogress: Mugendramon");
  evolveToFrame("valkyrimon", "Valkyrimon", "50000 Bird Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".kimeramon").click(function (e) {
  e.preventDefault();
  kimeramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "kimeramon")) {
      kimeramon();
    } else if (hasClass(e.target, "kimeramon")) {
      kimeramon();
    }
  },
  false
);

function ladydevimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("LadyDevimon");
  replaceImage("ladydevimon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bakemon", "Bakemon", "5000 Dark Xp");
  evolveFromFrame("blackgatomon", "BlackGatomon", "Lvl 45");
  evolveFromFrame("devimon", "Devimon", "5000 Dark Xp");
  evolveFromFrame("gatomon", "Gatomon", "5000 Dark Xp");
  evolveFromFrame("golemon", "Golemon", "5000 Dark Xp");
  evolveFromFrame("sabirdramon", "Sabirdramon", "5000 Dark Xp");
  evolveFromFrame("sistermonciel", "Sistermon Ciel", "Lvl 45");
  evolveFromFrame("togemon", "Togemon", "5000 Dark Xp");
  eraseOld(2);
  evolveToFrame("beelstarmon", "BeelStarmon", "50000 Dark Xp");
  evolveToFrame("kuzuhamon", "Kuzuhamon", "50000 Holy Xp");
  evolveToFrame("lilithmon", "Lilithmon", "Lvl 75");
  evolveToFrame("lotusmon", "Lotusmon", "50000 Insect/Plant Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ladydevimon").click(function (e) {
  e.preventDefault();
  ladydevimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ladydevimon")) {
      ladydevimon();
    } else if (hasClass(e.target, "ladydevimon")) {
      ladydevimon();
    }
  },
  false
);

function lilymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Lilymon");
  replaceImage("lilymon");
  attribute("da");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("gatomon", "Gatomon", "5000 Insect/Plant Xp");
  evolveFromFrame("hudiemon", "Hudiemon", "Lvl 45");
  evolveFromFrame("togemon", "Togemon", "Lvl 45");
  eraseOld(2);
  evolveToFrame(
    "bancholilymon",
    "BanchoLilymon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame(
    "bancholilymon",
    "BanchoLilymon",
    "250 Victories + Gakuran + 0 Defeats"
  );
  evolveToFrame("lotusmon", "Lotusmon", "50000 Insect/Plant Xp");
  evolveToFrame("rosemon", "Rosemon", "Lvl 75");
  evolveToFrame("sakuyamon", "Sakuyamon", "50000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".lilymon").click(function (e) {
  e.preventDefault();
  lilymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "lilymon")) {
      lilymon();
    } else if (hasClass(e.target, "lilymon")) {
      lilymon();
    }
  },
  false
);

function loaderliomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("LoaderLiomon");
  replaceImage("loaderliomon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("aquilamon", "Aquilamon", "5000 Machine Xp");
  evolveFromFrame("leomon", "Leomon", "5000 Machine Xp + Neutral Mood");
  evolveFromFrame("machmon", "Machmon", "Lvl 45");
  evolveFromFrame("raremon", "Raremon", "5000 Machine Xp + Neutral Mood");
  eraseOld(2);
  evolveToFrame(
    "bancholeomon",
    "BanchoLeomon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("darkdramon", "Darkdramon", "50000 Dark Xp");
  evolveToFrame("heavyleomon", "HeavyLeomon", "Lvl 75");
  evolveToFrame("metaletemon", "MetalEtemon", "40 Defeats");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".loaderliomon").click(function (e) {
  e.preventDefault();
  loaderliomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "loaderliomon")) {
      loaderliomon();
    } else if (hasClass(e.target, "loaderliomon")) {
      loaderliomon();
    }
  },
  false
);

function lucemonfm() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Lucemon Falldown");
  replaceImage("lucemonfm");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("angemon", "Angemon", "Jogress: Angemon");
  evolveFromFrame("devimon", "Devimon", "Jogress: Devimon");
  evolveFromFrame("lucemon", "Lucemon", "Warp Evolution");
  evolveFromFrame("wizardmon", "Wizardmon", "250 Victories");
  eraseOld(2);
  evolveToFrame("lucemonsm", "Lucemon Satan", "Lvl 75");
  evolveToFrame("seraphimon", "Seraphimon", "50000 Holy Xp");
  evolveToFrame("venommyotismon", "VenomMyotismon", "50000 Dark Xp");
  evolveToFrame(
    "ogudomon",
    "Ogudomon",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".lucemonfm").click(function (e) {
  e.preventDefault();
  lucemonfm();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "lucemonfm")) {
      lucemonfm();
    } else if (hasClass(e.target, "lucemonfm")) {
      lucemonfm();
    }
  },
  false
);

function machgaogamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MachGaogamon");
  replaceImage("machgaogamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blackgarurumon", "BlackGarurumon", "5000 Machine Xp");
  evolveFromFrame("fugamon", "Fugamon", "5000 Beast Xp");
  evolveFromFrame("gaogamon", "Gaogamon", "Lvl 45");
  evolveFromFrame("ikkakumon", "Ikkakumon", "5000 Beast Xp");
  evolveFromFrame("shellnumemon", "ShellNumemon", "5000 Beast Xp");
  eraseOld(2);
  evolveToFrame("ancientgarurumon", "AncientGarurumon", "Ancient Evoluter");
  evolveToFrame(
    "bancholeomon",
    "BanchoLeomon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("metalgarurumon", "MetalGarurumon", "50000 Beast Xp");
  evolveToFrame("miragegaogamon", "MirageGaogamon", "Lvl 75");
  evolveToFrame(
    "zeedgarurumon",
    "ZeedGarurumon",
    "50000 Machine Xp + 250 Victories"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".machgaogamon").click(function (e) {
  e.preventDefault();
  machgaogamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "machgaogamon")) {
      machgaogamon();
    } else if (hasClass(e.target, "machgaogamon")) {
      machgaogamon();
    }
  },
  false
);

function mamemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Mamemon");
  replaceImage("mamemon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("airdramon", "Airdramon", "5000 Machine Xp + 3500 Def");
  evolveFromFrame("icemon", "Icemon", "5000 Machine Xp");
  evolveFromFrame("mechanorimon", "Mechanorimon", "5000 Machine Xp + 3500 Def");
  evolveFromFrame("seadramon", "Seadramon", "5000 Machine Xp");
  evolveFromFrame("starmon", "Starmon", "5000 Machine Xp + 3500 Def");
  evolveFromFrame("woodmon", "Woodmon", "5000 Machine Xp");
  evolveFromFrame("yukidarumon", "Yukidarumon", "5000 Machine Xp");
  eraseOld(2);
  evolveToFrame(
    "banchomamemon",
    "BanchoMamemon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame(
    "banchomamemon",
    "BanchoMamemon",
    "250 Victories + Gakuran + 0 Defeats"
  );
  evolveToFrame("justimon", "Justimon", "Lvl 75");
  evolveToFrame("kentaurosmon", "Kentaurosmon", "50000 Holy Xp");
  evolveToFrame("mugendramon", "Mugendramon", "50000 Dark Xp");
  evolveToFrame("puppetmon", "Puppetmon", "50000 Insect/Plant Xp");
  evolveToFrame("valdurmon", "Valdurmon", "50000 Bird Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".mamemon").click(function (e) {
  e.preventDefault();
  mamemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "mamemon")) {
      mamemon();
    } else if (hasClass(e.target, "mamemon")) {
      mamemon();
    }
  },
  false
);

function mammothmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Mammothmon");
  replaceImage("mammothmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("monochromon", "Monochromon", "5000 Beast Xp");
  eraseOld(2);
  evolveToFrame("skullmammothmon", "SkullMammothmon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".mammothmon").click(function (e) {
  e.preventDefault();
  mammothmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "mammothmon")) {
      mammothmon();
    } else if (hasClass(e.target, "mammothmon")) {
      mammothmon();
    }
  },
  false
);

function marinedevimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MarineDevimon");
  replaceImage("marinedevimon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("devimon", "Devimon", "5000 Aquatic Xp");
  evolveFromFrame("gesomon", "Gesomon", "Lvl 45");
  evolveFromFrame("icedevimon", "IceDevimon", "5000 Aquatic Xp");
  evolveFromFrame("seahomon", "Seahomon", "Lvl 45");
  eraseOld(2);
  evolveToFrame("demon", "Demon", "50000 Dark Xp");
  evolveToFrame("leviamon", "Leviamon", "Lvl 75");
  evolveToFrame("marineangemon", "MarineAngemon", "50000 Holy Xp");
  evolveToFrame("metalseadramon", "MetalSeadramon", "50000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".marinedevimon").click(function (e) {
  e.preventDefault();
  marinedevimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "marinedevimon")) {
      marinedevimon();
    } else if (hasClass(e.target, "marinedevimon")) {
      marinedevimon();
    }
  },
  false
);

function mastertyranomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MasterTyranomon");
  replaceImage("mastertyranomon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("tuskmon", "Tuskmon", "Lvl 45");
  evolveFromFrame("tyranomon", "Tyranomon", "250 Victories + 5000 Dragon Xp");
  eraseOld(2);
  evolveToFrame("greymonxros", "Greymon (Xros)", "Jogress: Greymon");
  evolveToFrame("greymonxros", "Greymon (Xros)", "Jogress: Mechanorimon");
  evolveToFrame("dinorexmon", "Dinorexmon", "50000 Dragon Xp");
  evolveToFrame("wargreymon", "WarGreymon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".mastertyranomon").click(function (e) {
  e.preventDefault();
  mastertyranomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "mastertyranomon")) {
      mastertyranomon();
    } else if (hasClass(e.target, "mastertyranomon")) {
      mastertyranomon();
    }
  },
  false
);

function megadramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Megadramon");
  replaceImage("megadramon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("airdramon", "Airdramon", "5000 Dark Xp");
  evolveFromFrame("dobermon", "Dobermon", "Jogress: ExVeemon");
  evolveFromFrame("xveemon", "ExVeemon", "Jogress: Dobermon");
  evolveFromFrame("greymonxros", "Greymon (Xros)", "5000 Dragon Xp");
  evolveFromFrame("machmon", "Machmon", "5000 Dark Xp");
  evolveFromFrame("mechanorimon", "Mechanorimon", "Lvl 45");
  evolveFromFrame("sabirdramon", "Sabirdramon", "5000 Dragon Xp");
  eraseOld(2);
  evolveToFrame("belphemonsleep", "Belphemon (Sleep Mode)", "50000 Dark Xp");
  evolveToFrame("blackwargreymon", "BlackWarGreymon", "Lvl 75");
  evolveToFrame("ulforceveedramon", "UlforceVeedramon", "50000 Holy Xp");
  evolveToFrame("wargreymon", "WarGreymon", "50000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".megadramon").click(function (e) {
  e.preventDefault();
  megadramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "megadramon")) {
      megadramon();
    } else if (hasClass(e.target, "megadramon")) {
      megadramon();
    }
  },
  false
);

function megaseadramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Megaseadramon");
  replaceImage("megaseadramon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("airdramon", "Airdramon", "5000 Aquatic Xp");
  evolveFromFrame("coelamon", "Coelamon", "Lvl 45");
  evolveFromFrame("ebidramon", "Ebidramon", "Lvl 45");
  evolveFromFrame("gesomon", "Gesomon", "5000 Aquatic Xp");
  evolveFromFrame("ginryumon", "Ginryumon", "5000 Aquatic Xp");
  evolveFromFrame("seadramon", "Seadramon", "Lvl 45");
  evolveFromFrame("shellnumemon", "ShellNumemon", "5000 Dark Xp");
  eraseOld(2);
  evolveToFrame("metalseadramon", "MetalSeadramon", "Lvl 75");
  evolveToFrame("neptunemon", "Neptunemon", "50000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".megaseadramon").click(function (e) {
  e.preventDefault();
  megaseadramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "megaseadramon")) {
      megaseadramon();
    } else if (hasClass(e.target, "megaseadramon")) {
      megaseadramon();
    }
  },
  false
);

function meicrackmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Meicrackmon");
  replaceImage("meicrackmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("meicoomon", "Meicoomon", "5000 Holy Xp");
  evolveFromFrame(
    "meicrackmonvicious",
    "Meicrackmon (Vicious)",
    "Mode Selector"
  );
  eraseOld(2);
  evolveToFrame("rasielmon", "Rasielmon", "Lvl 75");
  evolveToFrame("venusmon", "Venusmon", "Lvl 75 + Cherry Mood");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".meicrackmon").click(function (e) {
  e.preventDefault();
  meicrackmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "meicrackmon")) {
      meicrackmon();
    } else if (hasClass(e.target, "meicrackmon")) {
      meicrackmon();
    }
  },
  false
);

function meicrackmonvicious() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Meicrackmon (Vicious)");
  replaceImage("meicrackmonvicious");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blackgatomon", "BlackGatomon", "5000 Beast Xp");
  evolveFromFrame("meicoomon", "Meicoomon", "5000 Dark Xp");
  evolveFromFrame("meicrackmon", "Meicrackmon", "Mode Selector");
  eraseOld(2);
  evolveToFrame("beelstarmon", "Beelstarmon", "50000 Dark Xp");
  evolveToFrame("ophanimon", "Ophanimon", "50000 Holy Xp");
  evolveToFrame("raguelmon", "Raguelmon", "Lvl 75");
  evolveToFrame("rosemon", "Rosemon", "50000 Insect/Plant Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".meicrackmonvicious").click(function (e) {
  e.preventDefault();
  meicrackmonvicious();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "meicrackmonvicious")) {
      meicrackmonvicious();
    } else if (hasClass(e.target, "meicrackmonvicious")) {
      meicrackmonvicious();
    }
  },
  false
);

function metalgreymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MetalGreymon");
  replaceImage("metalgreymon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("greymon", "Greymon", "250 Victories + 5000 Dragon Xp");
  evolveFromFrame("machmon", "Machmon", "5000 Dragon Xp");
  evolveFromFrame("tuskmon", "Tuskmon", "5000 Machine Xp");
  evolveFromFrame(
    "metalgreymonalterous",
    "MetalGreymon (Alterous)",
    "Mode Selector"
  );
  evolveFromFrame(
    "metalgreymonvirus",
    "MetalGreymon (Virus)",
    "Black Digitron"
  );
  eraseOld(2);
  evolveToFrame("blitzgreymon", "BlitzGreymon", "50000 Machine Xp + 15000 Def");
  evolveToFrame("mugendramon", "Mugendramon", "50000 Machine Xp");
  evolveToFrame("wargreymon", "WarGreymon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".metalgreymon").click(function (e) {
  e.preventDefault();
  metalgreymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "metalgreymon")) {
      metalgreymon();
    } else if (hasClass(e.target, "metalgreymon")) {
      metalgreymon();
    }
  },
  false
);

function metalgreymonalterous() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MetalGreymon (Alterous)");
  replaceImage("metalgreymonalterous");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("metalgreymon", "MetalGreymon", "Mode Selector");
  eraseOld(2);
  evolveToFrame("metalgreymon", "MetalGreymon", "Mode Selector");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".metalgreymonalterous").click(function (e) {
  e.preventDefault();
  metalgreymonalterous();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "metalgreymonalterous")) {
      metalgreymonalterous();
    } else if (hasClass(e.target, "metalgreymonalterous")) {
      metalgreymonalterous();
    }
  },
  false
);

function metalgreymonvirus() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MetalGreymon (Virus)");
  replaceImage("metalgreymonvirus");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("airdramon", "Airdramon", "Lvl 45");
  evolveFromFrame("blackgreymon", "BlackGreymon", "Lvl 45");
  evolveFromFrame("blackveedramon", "BlackVeedramon", "Lvl 45");
  evolveFromFrame("greymon", "Greymon", "Lvl 45");
  evolveFromFrame("veedramon", "Veedramon", "5000 Dark Xp");
  evolveFromFrame("metalgreymon", "MetalGreymon", "Black Digitron");
  eraseOld(2);
  evolveToFrame("blitzgreymon", "BlitzGreymon", "50000 Machine Xp + 15000 Def");
  evolveToFrame("mugendramon", "Mugendramon", "50000 Machine Xp");
  evolveToFrame("blackwargreymon", "BlackWarGreymon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".metalgreymonvirus").click(function (e) {
  e.preventDefault();
  metalgreymonvirus();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "metalgreymonvirus")) {
      metalgreymonvirus();
    } else if (hasClass(e.target, "metalgreymonvirus")) {
      metalgreymonvirus();
    }
  },
  false
);

function metalmamemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MetalMamemon");
  replaceImage("metalmamemon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("geremon", "Geremon", "5000 Machine Xp");
  evolveFromFrame("guardromon", "Guardromon", "5000 Machine Xp");
  evolveFromFrame("guardromongold", "Guardomon Gold", "5000 Machine Xp");
  evolveFromFrame("hookmon", "Hookmon", "5000 Machine Xp");
  evolveFromFrame("kabuterimon", "Kabuterimon", "5000 Machine Xp");
  evolveFromFrame("machmon", "Machmon", "5000 Machine Xp");
  evolveFromFrame("monochromon", "Monochromon", "5000 Machine Xp");
  eraseOld(2);
  evolveToFrame(
    "banchogolemon",
    "BanchoGolemon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("cresgarurumon", "CresGarurumon", "50000 Beast Xp + 15000 Atk");
  evolveToFrame("dynasmon", "Dynasmon", "5000 Dragon Xp");
  evolveToFrame(
    "heavyleomon",
    "HeavyLeomon",
    "50000 Beast Xp + 30000 Machine Xp + 20000 Def"
  );
  evolveToFrame("hiandromon", "HiAndromon", "Lvl 75");
  evolveToFrame("megagargomon", "MegaGargomon", "50000 Beast Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".metalmamemon").click(function (e) {
  e.preventDefault();
  metalmamemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "metalmamemon")) {
      metalmamemon();
    } else if (hasClass(e.target, "metalmamemon")) {
      metalmamemon();
    }
  },
  false
);

function metaltyranomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MetalTyranomon");
  replaceImage("metaltyranomon");
  attribute("vi");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("xveemon", "ExVeemon", "Lvl 45");
  evolveFromFrame("flarerizamon", "Flarerizamon", "5000 Machine Xp");
  evolveFromFrame("geogreymon", "GeoGreymon", "Lvl 45");
  evolveFromFrame("golemon", "Golemon", "5000 Dragon Xp");
  evolveFromFrame("greymon", "Greymon", "5000 Machine Xp");
  evolveFromFrame("mechanorimon", "Mechanorimon", "5000 Dragon Xp");
  evolveFromFrame("tuskmon", "Tuskmon", "5000 Dark Xp");
  evolveFromFrame("tyranomon", "Tyranomon", "Lvl 45");
  evolveFromFrame("flamedramon", "Flamedramon", "Jogress: Lighdramon");
  evolveFromFrame("lighdramon", "Lighdramon", "Jogress: Flamedramon");
  eraseOld(2);
  evolveToFrame("mugendramon", "Mugendramon", "Lvl 75");
  evolveToFrame("rusttyranomon", "RustTyranomon", "50000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".metaltyranomon").click(function (e) {
  e.preventDefault();
  metaltyranomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "metaltyranomon")) {
      metaltyranomon();
    } else if (hasClass(e.target, "metaltyranomon")) {
      metaltyranomon();
    }
  },
  false
);

function meteormon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Meteormon");
  replaceImage("meteormon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gotsumon", "Gotsumon", "Warp Evolution");
  evolveFromFrame("hookmon", "Hookmon", "40 Defeats");
  evolveFromFrame("icemon", "Icemon", "Lvl 45");
  eraseOld(2);
  evolveToFrame(
    "banchogolemon",
    "BanchoGolemon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("dianamon", "Dianamon", "50000 Aquatic Xp + Indiferent Mood");
  evolveToFrame("ebemon", "Ebemon", "50000 Dark Xp");
  evolveToFrame("metaletemon", "MetalEtemon", "Lvl 45");
  evolveToFrame("metalgarurumon", "MetalGarurumon", "50000 Beast Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".meteormon").click(function (e) {
  e.preventDefault();
  meteormon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "meteormon")) {
      meteormon();
    } else if (hasClass(e.target, "meteormon")) {
      meteormon();
    }
  },
  false
);

function mistymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Mistymon");
  replaceImage("mistymon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("wizardmon", "Wizardmon", "5000 Holy Xp");
  eraseOld(2);
  evolveToFrame("craniummon", "Craniummon", "50000 Holy Xp");
  evolveToFrame("dynasmon", "Dynasmon", "Lvl 75");
  evolveToFrame("venusmon", "Venusmon", "Lvl 75 + Cherry Mood");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".mistymon").click(function (e) {
  e.preventDefault();
  mistymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "mistymon")) {
      mistymon();
    } else if (hasClass(e.target, "mistymon")) {
      mistymon();
    }
  },
  false
);

function monzaemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Monzaemon");
  replaceImage("monzaemon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("firamon", "Firamon", "Lvl 45");
  evolveFromFrame("geremon", "Geremon", "5000 Beast Xp");
  evolveFromFrame("kyubimon", "Kyubimon", "5000 Beast Xp");
  evolveFromFrame("numemon", "Numemon", "Lvl 45");
  evolveFromFrame("turuiemon", "Turuiemon", "5000 Beast Xp");
  eraseOld(2);
  evolveToFrame("warumonzaemon", "WaruMonzaemon", "Black Digitron");
  evolveToFrame(
    "bancholeomon",
    "BanchoLeomon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("metaletemon", "MetalEtemon", "Lvl 75");
  evolveToFrame("piedmon", "Piedmon", "50000 Dark Xp");
  evolveToFrame("platinumnumemon", "PlatinumNumemon", "50 Defeats");
  evolveToFrame("saberleomon", "SaberLeomon", "50000 Beast Xp");
  evolveToFrame("seraphimon", "Seraphimon", "50000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".monzaemon").click(function (e) {
  e.preventDefault();
  monzaemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "monzaemon")) {
      monzaemon();
    } else if (hasClass(e.target, "monzaemon")) {
      monzaemon();
    }
  },
  false
);

function myotismon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Myotismon");
  replaceImage("myotismon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("demidevimon", "DemiDevimon", "Warp Evolution");
  evolveFromFrame("devimon", "Devimon", "Lvl 45");
  eraseOld(2);
  evolveToFrame("blackwargreymon", "BlackWarGreymon", "50000 Dragon Xp");
  evolveToFrame("demon", "Demon", "50000 Beast Xp");
  evolveToFrame("piedmon", "Piedmon", "50000 Dark Xp");
  evolveToFrame("venommyotismon", "VenomMyotismon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".myotismon").click(function (e) {
  e.preventDefault();
  myotismon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "myotismon")) {
      myotismon();
    } else if (hasClass(e.target, "myotismon")) {
      myotismon();
    }
  },
  false
);

function okuwamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Okuwamon");
  replaceImage("okuwamon");
  attribute("vi");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("flymon", "Flymon", "Lvl 45");
  evolveFromFrame("fugamon", "Fugamon", "5000 Insect/Plant Xp");
  evolveFromFrame("gekomon", "Gekomon", "5000 Insect/Plant Xp");
  evolveFromFrame("kuwagamon", "Kuwagamon", "Lvl 45");
  evolveFromFrame("sabirdramon", "Sabirdramon", "5000 Insect/Plant Xp");
  evolveFromFrame("stingmon", "Stingmon", "5000 Insect/Plant Xp");
  evolveFromFrame("woodmon", "Woodmon", "5000 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame(
    "bancholilymon",
    "BanchoLilymon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("grankuwagamon", "GranKuwagamon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".okuwamon").click(function (e) {
  e.preventDefault();
  okuwamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "okuwamon")) {
      okuwamon();
    } else if (hasClass(e.target, "okuwamon")) {
      okuwamon();
    }
  },
  false
);

function orochimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Orochimon");
  replaceImage("orochimon");
  attribute("vi");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("blackgreymon", "BlackGreymon", "5000 Dragon Xp");
  evolveFromFrame("blackveedramon", "BlackVeedramon", "5000 Dragon Xp");
  evolveFromFrame("xveemon", "ExVeemon", "5000 Dragon Xp");
  evolveFromFrame("leomon", "Leomon", "5000 Dragon Xp");
  evolveFromFrame("veedramon", "Veedramon", "5000 Dragon Xp");
  eraseOld(2);
  evolveToFrame(
    "imperialdramondragon",
    "Imperialdramon (Dragon Mode)",
    "Lvl 75"
  );
  evolveToFrame("magnadramon", "Magnadramon", "50000 Holy Xp");
  evolveToFrame(
    "nidhoggmon",
    "Nidhoggmon",
    "500 Victories + 50000 Dragon Xp + 50000 Dark Xp + 15000 Sp. Atk"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".orochimon").click(function (e) {
  e.preventDefault();
  orochimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "orochimon")) {
      orochimon();
    } else if (hasClass(e.target, "orochimon")) {
      orochimon();
    }
  },
  false
);

function paildramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Paildramon");
  replaceImage("paildramon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("xveemon", "ExVeemon", "Jogress: Stingmon (ExVeemon active)");
  evolveFromFrame(
    "stingmon",
    "Stingmon",
    "Jogress: ExVeemon (ExVeemon active)"
  );
  eraseOld(2);
  evolveToFrame("goddramon", "Goddramon", "50000 Holy Xp");
  evolveToFrame(
    "imperialdramondragon",
    "Imperialdramon (Dragon Mode)",
    "Lvl 75"
  );
  evolveToFrame("megidramon", "Megidramon", "50000 Dark Xp");
  evolveToFrame("metalgarurumon", "MetalGarurumon", "50000 Beast Xp");
  evolveToFrame("ulforceveedramon", "UlforceVeedramon", "50000 Dragon Xp");
  evolveToFrame("valdurmon", "Valdurmon", "50000 Bird Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".paildramon").click(function (e) {
  e.preventDefault();
  paildramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "paildramon")) {
      paildramon();
    } else if (hasClass(e.target, "paildramon")) {
      paildramon();
    }
  },
  false
);

function parrotmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Parrotmon");
  replaceImage("parrotmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("birdramon", "Birdramon", "5000 Bird Xp");
  evolveFromFrame("dokugumon", "Dokugumon", "5000 Bird Xp");
  evolveFromFrame("leomon", "Leomon", "5000 Bird Xp");
  evolveFromFrame("meicoomon", "Meicoomon", "5000 Bird Xp");
  evolveFromFrame("numemon", "Numemon", "5000 Bird Xp");
  evolveFromFrame("sabirdramon", "Sabirdramon", "5000 Bird Xp");
  eraseOld(2);
  evolveToFrame("griffomon", "Griffomon", "50000 Beast Xp");
  evolveToFrame("hououmon", "Hououmon", "50000 Bird Xp");
  evolveToFrame("metalgarurumon", "MetalGarurumon", "50000 Machine Xp");
  evolveToFrame("ornismon", "Ornismon", "Lvl 75");
  evolveToFrame("ravemon", "Ravemon", "50000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".parrotmon").click(function (e) {
  e.preventDefault();
  parrotmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "parrotmon")) {
      parrotmon();
    } else if (hasClass(e.target, "parrotmon")) {
      parrotmon();
    }
  },
  false
);

function pandamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Pandamon");
  replaceImage("pandamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "blackgarurumon",
    "BlackGarurumon",
    "5000 Beast Xp + Atk > Def"
  );
  evolveFromFrame("gargomon", "Gargomon", "5000 Beast Xp");
  evolveFromFrame("golemon", "Golemon", "5000 Beast Xp");
  evolveFromFrame("leomon", "Leomon", "5000 Beast Xp + Atk > Def");
  evolveFromFrame("sistermonciel", "Sistermon Ciel", "5000 Beast Xp");
  evolveFromFrame("yukidarumon", "Yukidarumon", "Lvl 45");
  eraseOld(2);
  evolveToFrame(
    "bancholeomon",
    "BanchoLeomon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("belphemonrage", "Belphemon (Rage Mode)", "50000 Dark Xp");
  evolveToFrame("darkdramon", "Darkdramon", "50000 Dragon Xp");
  evolveToFrame("justimon", "Justimon", "50000 Holy Xp");
  evolveToFrame("merukimon", "Merukimon", "50000 Beast Xp");
  evolveToFrame("metalgarurumon", "MetalGarurumon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".pandamon").click(function (e) {
  e.preventDefault();
  pandamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "pandamon")) {
      pandamon();
    } else if (hasClass(e.target, "pandamon")) {
      pandamon();
    }
  },
  false
);

function panjyamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Panjyamon");
  replaceImage("panjyamon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("hyogamon", "Hyogamon", "5000 Beast Xp");
  evolveFromFrame("icemon", "Icemon", "5000 Aquatic Xp");
  evolveFromFrame("leomon", "Leomon", "Lvl 45");
  eraseOld(2);
  evolveToFrame(
    "bancholeomon",
    "BanchoLeomon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("regulumon", "Regulumon", "50000 Beast Xp + 500 Victories");
  evolveToFrame("saberleomon", "SaberLeomon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".panjyamon").click(function (e) {
  e.preventDefault();
  panjyamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "panjyamon")) {
      panjyamon();
    } else if (hasClass(e.target, "panjyamon")) {
      panjyamon();
    }
  },
  false
);

function phantomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Phantomon");
  replaceImage("phantomon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bakemon", "Bakemon", "Lvl 45");
  evolveFromFrame("geremon", "Geremon", "5000 Dark Xp");
  evolveFromFrame("raremon", "Raremon", "5000 Dark Xp");
  eraseOld(2);
  evolveToFrame("barbamon", "Barbamon", "50000 Dark Xp");
  evolveToFrame("piedmon", "Piedmon", "Lvl 75");
  evolveToFrame("piedmon", "Piedmon", "Jogress: BlueMeramon");
  evolveToFrame("venommyotismon", "VenomMyotismon", "50000 Beast Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".phantomon").click(function (e) {
  e.preventDefault();
  phantomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "phantomon")) {
      phantomon();
    } else if (hasClass(e.target, "phantomon")) {
      phantomon();
    }
  },
  false
);

function pumpkinmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Pumpkinmon");
  replaceImage("pumpkinmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("omekamon", "Omekamon", "5000 Dark Xp");
  evolveFromFrame("yanmamon", "Yanmamon", "5000 Dark Xp");
  evolveFromFrame("woodmon", "Woodmon", "5000 Dark Xp");
  eraseOld(2);
  evolveToFrame("beelzemon", "Beelzemon", "50000 Dark Xp");
  evolveToFrame("boltmon", "Boltmon", "Lvl 75");
  evolveToFrame("puppetmon", "Puppetmon", "50000 Insect/Plant Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".pumpkinmon").click(function (e) {
  e.preventDefault();
  pumpkinmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "pumpkinmon")) {
      pumpkinmon();
    } else if (hasClass(e.target, "pumpkinmon")) {
      pumpkinmon();
    }
  },
  false
);

function rapidmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Rapidmon");
  replaceImage("rapidmon");
  attribute("va");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("gaogamon", "Gaomon", "Jogress: Guardromon");
  evolveFromFrame("gargomon", "Gargomon", "Lvl 45");
  evolveFromFrame("garurumon", "Garurumon", "5000 Machine Xp");
  evolveFromFrame("guardromon", "Guardromon", "Jogress: Gaogamon");
  evolveFromFrame("reppamon", "Reppamon", "5000 Machine Xp");
  eraseOld(2);
  evolveToFrame("megagargomon", "MegaGargomon", "Lvl 75");
  evolveToFrame("blackmetalgarurumon", "BlackMetalGarurumon", "50000 Beast Xp");
  evolveToFrame("tigervespamon", "TigerVespamon", "50000 Insect/Plant Xp");
  evolveToFrame("vikemon", "Vikemon", "50000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".rapidmon").click(function (e) {
  e.preventDefault();
  rapidmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "rapidmon")) {
      rapidmon();
    } else if (hasClass(e.target, "rapidmon")) {
      rapidmon();
    }
  },
  false
);

function rizegreymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("RizeGreymon");
  replaceImage("rizegreymon");
  attribute("va");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("baohackmon", "BaoHackmon", "5000 Dragon Xp");
  evolveFromFrame("dorugamon", "Dorugamon", "5000 Dragon Xp");
  evolveFromFrame("xveemon", "ExVeemon", "5000 Machine Xp");
  evolveFromFrame(
    "geogreymon",
    "GeoGreymon",
    "250 Victories + 5000 Machine Xp"
  );
  evolveFromFrame("guardromon", "Guardromon", "5000 Dragon Xp");
  eraseOld(2);
  evolveToFrame("shinegreymon", "ShineGreymon", "Lvl 75");
  evolveToFrame(
    "victorygreymon",
    "VictoryGreymon",
    "500 Victories + 50000 Dragon Xp"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".rizegreymon").click(function (e) {
  e.preventDefault();
  rizegreymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "rizegreymon")) {
      rizegreymon();
    } else if (hasClass(e.target, "rizegreymon")) {
      rizegreymon();
    }
  },
  false
);

function saviorhackmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("SaviorHackmon");
  replaceImage("saviorhackmon");
  attribute("da");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("angemon", "Angemon", "5000 Dragon Xp");
  evolveFromFrame("baohackmon", "BaoHackmon", "Lvl 45");
  evolveFromFrame("strikedramon", "Strikedramon", "5000 Dragon Xp");
  eraseOld(2);
  evolveToFrame("jesmon", "Jesmon", "Lvl 75");
  evolveToFrame("slayerdramon", "Slayerdramon", "50000 Dragon Xp");
  evolveToFrame("valkyrimon", "Valkyrimon", "50000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".saviorhackmon").click(function (e) {
  e.preventDefault();
  saviorhackmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "saviorhackmon")) {
      saviorhackmon();
    } else if (hasClass(e.target, "saviorhackmon")) {
      saviorhackmon();
    }
  },
  false
);

function shakkoumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Shakkoumon");
  replaceImage("shakkoumon");
  attribute("un");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("angemon", "Angemon", "Jogress: Ankylomon");
  evolveFromFrame("ankylomon", "Ankylomon", "Jogress: Angemon");
  eraseOld(2);
  evolveToFrame("chaosdukemon", "Chaos Dukemon", "50000 Dark Xp");
  evolveToFrame("cherubimonvirtue", "Cherubimon (Virtue)", "50000 Holy Xp");
  evolveToFrame("vikemon", "Vikemon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".shakkoumon").click(function (e) {
  e.preventDefault();
  shakkoumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "shakkoumon")) {
      shakkoumon();
    } else if (hasClass(e.target, "shakkoumon")) {
      shakkoumon();
    }
  },
  false
);

function shogungekomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ShogunGekomon");
  replaceImage("shogungekomon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gekomon", "Gekomon", "Lvl 45");
  evolveFromFrame("shellnumemon", "ShellNumemon", "5000 Aquatic Xp");
  eraseOld(2);
  evolveToFrame("leviamon", "Leviamon", "50000 Dark Xp");
  evolveToFrame("plesiomon", "Plesiomon", "50000 Aquatic Xp");
  evolveToFrame("pukumon", "Pukumon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".shogungekomon").click(function (e) {
  e.preventDefault();
  shogungekomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "shogungekomon")) {
      shogungekomon();
    } else if (hasClass(e.target, "shogungekomon")) {
      shogungekomon();
    }
  },
  false
);

function silphymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Silphymon");
  replaceImage("silphymon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("aquilamon", "Aquilamon", "Jogress: Gatomon");
  evolveFromFrame("gatomon", "Gatomon", "Jogress: Aquilamon");
  eraseOld(2);
  evolveToFrame("dynasmon", "Dynasmon", "50000 Dragon Xp");
  evolveToFrame("griffomon", "Griffomon", "50000 Bird Xp");
  evolveToFrame("ophanimon", "Ophanimon", "Jogress: Taomon");
  evolveToFrame("sakuyamon", "Sakuyamon", "50000 Beast Xp");
  evolveToFrame("valkyrimon", "Valkyrimon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".silphymon").click(function (e) {
  e.preventDefault();
  silphymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "silphymon")) {
      silphymon();
    } else if (hasClass(e.target, "silphymon")) {
      silphymon();
    }
  },
  false
);

function sirenmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Sirenmon");
  replaceImage("sirenmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("hookmon", "Hookmon", "5000 Bird Xp");
  evolveFromFrame("kiwimon", "Kiwimon", "5000 Bird Xp");
  evolveFromFrame("shellnumemon", "ShellNumemon", "5000 Bird Xp");
  evolveFromFrame("yukidarumon", "Yukidarumon", "5000 Bird Xp");
  eraseOld(2);
  evolveToFrame(
    "ceresmon",
    "Ceresmon",
    "50000 Insect/Plant Xp + 50000 Bird Xp"
  );
  evolveToFrame("marineangemon", "MarineAngemon", "50000 Aquatic Xp");
  evolveToFrame("rasielmon", "Rasielmon", "50000 Holy Xp");
  evolveToFrame("valdurmon", "Valdurmon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".sirenmon").click(function (e) {
  e.preventDefault();
  sirenmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "sirenmon")) {
      sirenmon();
    } else if (hasClass(e.target, "sirenmon")) {
      sirenmon();
    }
  },
  false
);

function skullbaluchimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("SkullBaluchimon");
  replaceImage("skullbaluchimon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("ginryumon", "Ginryumon", "5000 Dark Xp");
  evolveFromFrame("monochromon", "Monochromon", "5000 Dark Xp");
  eraseOld(2);
  evolveToFrame("anubimon", "Anubimon", "50000 Beast Xp");
  evolveToFrame("dinorexmon", "Dinorexmon", "50000 Dragon Xp");
  evolveToFrame("griffomon", "Griffomon", "50000 Bird Xp");
  evolveToFrame("platinumnumemon", "PlatinumNumemon", "50 Defeats");
  evolveToFrame("skullmammothmon", "SkullMammothmon", "Lvl 75");
  evolveToFrame("valdurmon", "Valdurmon", "50000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".skullbaluchimon").click(function (e) {
  e.preventDefault();
  skullbaluchimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "skullbaluchimon")) {
      skullbaluchimon();
    } else if (hasClass(e.target, "skullbaluchimon")) {
      skullbaluchimon();
    }
  },
  false
);

function skullgreymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("SkullGreymon");
  replaceImage("skullgreymon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("ankylomon", "Ankylomon", "5000 Dark Xp");
  evolveFromFrame("deltamon", "Deltamon", "Lvl 45");
  evolveFromFrame("greymon", "Greymon", "5000 Dark Xp");
  evolveFromFrame("greymonxros", "Greymon (Xros)", "30 Defeats");
  evolveFromFrame("growlmon", "Growlmon", "5000 Dark Xp");
  eraseOld(2);
  evolveToFrame("blackwargreymon", "BlackWarGreymon", "Lvl 75");
  evolveToFrame("craniummon", "Craniummon", "50000 Holy Xp");
  evolveToFrame("titamon", "Titamon", "50000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".skullgreymon").click(function (e) {
  e.preventDefault();
  skullgreymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "skullgreymon")) {
      skullgreymon();
    } else if (hasClass(e.target, "skullgreymon")) {
      skullgreymon();
    }
  },
  false
);

function skullmeramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("SkullMeramon");
  replaceImage("skullmeramon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("angemon", "Angemon", "5000 Dark Xp");
  evolveFromFrame("meramon", "Meramon", "5000 Dark Xp");
  eraseOld(2);
  evolveToFrame("beelzemon", "Beelzemon", "50000 Dark Xp");
  evolveToFrame("boltmon", "Boltmon", "Lvl 75");
  evolveToFrame("devitamamon", "Devitamamon", "50000 Beast Xp");
  evolveToFrame("gankoomon", "Gankoomon", "50000 Holy Xp");
  evolveToFrame("marsmon", "Marsmon", "50000 Beast Xp + Indiferent Mood");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".skullmeramon").click(function (e) {
  e.preventDefault();
  skullmeramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "skullmeramon")) {
      skullmeramon();
    } else if (hasClass(e.target, "skullmeramon")) {
      skullmeramon();
    }
  },
  false
);

function skullsatamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("SkullSatamon");
  replaceImage("skullsatamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("icedevimon", "IceDevimon", "Lvl 45");
  evolveFromFrame("stingmon", "Stingmon", "5000 Dark Xp");
  eraseOld(2);
  evolveToFrame("beelzemon", "Beelzemon", "Lvl 75");
  evolveToFrame("craniummon", "Craniummon", "50000 Holy Xp");
  evolveToFrame("deathmon", "Deathmon", "50000 Dark Xp");
  evolveToFrame("demon", "Demon", "50000 Beast Xp");
  evolveToFrame(
    "reapermon",
    "Reapermon",
    "50000 Beast Xp + 500 Victories + 30 Defeats"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".skullsatamon").click(function (e) {
  e.preventDefault();
  skullsatamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "skullsatamon")) {
      skullsatamon();
    } else if (hasClass(e.target, "skullsatamon")) {
      skullsatamon();
    }
  },
  false
);

function superstarmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("SuperStarmon");
  replaceImage("superstarmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("geremon", "Geremon", "250 Victories");
  evolveFromFrame("numemon", "Numemon", "5000 Machine Xp");
  evolveFromFrame("omekamon", "Omekamon", "Lvl 45");
  evolveFromFrame("starmon", "Starmon", "Lvl 45");
  evolveFromFrame("sukamon", "Sukamon", "5000 Machine Xp");
  eraseOld(2);
  evolveToFrame("darksuperstarmon", "DarkSuperStarmon", "Black Digitron");
  evolveToFrame("justimon", "Justimon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".superstarmon").click(function (e) {
  e.preventDefault();
  superstarmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "superstarmon")) {
      superstarmon();
    } else if (hasClass(e.target, "superstarmon")) {
      superstarmon();
    }
  },
  false
);

function taomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Taomon");
  replaceImage("taomon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("kyubimon", "Kyubimon", "Lvl 45");
  evolveFromFrame("lekismon", "Lekismon", "5000 Holy Xp");
  evolveFromFrame("woodmon", "Woodmon", "5000 Holy Xp");
  eraseOld(2);
  evolveToFrame("ophanimon", "Ophanimon", "Jogress: Silphymon");
  evolveToFrame("sakuyamon", "Sakuyamon", "Lvl 75");
  evolveToFrame("valkyrimon", "Valkyrimon", "50000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".taomon").click(function (e) {
  e.preventDefault();
  taomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "taomon")) {
      taomon();
    } else if (hasClass(e.target, "taomon")) {
      taomon();
    }
  },
  false
);

function triceramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Triceramon");
  replaceImage("triceramon");
  attribute("da");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("ankylomon", "Ankylomon", "Lvl 45");
  evolveFromFrame("coredramon_green", "Coredramon (Green)", "5000 Dragon Xp");
  evolveFromFrame("greymonxros", "Greymon (Xros)", "Lvl 45");
  evolveFromFrame("monochromon", "Monochromon", "5000 Dragon Xp");
  evolveFromFrame("tuskmon", "Tuskmon", "5000 Dragon Xp");
  eraseOld(2);
  evolveToFrame(
    "blackimperialdramondragon",
    "Black Imperialdramon (Dragon Mode)",
    "Jogress: Vermilimon"
  );
  evolveToFrame("breakdramon", "Breakdramon", "50000 Machine Xp");
  evolveToFrame("cannondramon", "Cannondramon", "Lvl 75");
  evolveToFrame("dinorexmon", "Dinorexmon", "50000 Dragon Xp + 500 Victories");
  evolveToFrame("spinomon", "Spinomon", "50000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".triceramon").click(function (e) {
  e.preventDefault();
  triceramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "triceramon")) {
      triceramon();
    } else if (hasClass(e.target, "triceramon")) {
      triceramon();
    }
  },
  false
);

function tyilinmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Tyilinmon");
  replaceImage("tyilinmon");
  attribute("va");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("birdramon", "Birdramon", "5000 Holy Xp");
  evolveFromFrame("diatrymon", "Diatrymon", "5000 Holy Xp");
  eraseOld(2);
  evolveToFrame("kentaurosmon", "Kentaurosmon", "Lvl 75");
  evolveToFrame("metalgarurumon", "MetalGarurumon", "50000 Beast Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".tyilinmon").click(function (e) {
  e.preventDefault();
  tyilinmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "tyilinmon")) {
      tyilinmon();
    } else if (hasClass(e.target, "tyilinmon")) {
      tyilinmon();
    }
  },
  false
);

function vademon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Vademon");
  replaceImage("vademon");
  attribute("vi");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("numemon", "Numemon", "5000 Beast Xp");
  evolveFromFrame("raremon", "Raremon", "25 Defeats");
  evolveFromFrame("seadramon", "Seadramon", "25 Defeats");
  eraseOld(2);
  evolveToFrame("ebemon", "Ebemon", "Lvl 75");
  evolveToFrame("hiandromon", "HiAndromon", "50000 Machine Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".vademon").click(function (e) {
  e.preventDefault();
  vademon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "vademon")) {
      vademon();
    } else if (hasClass(e.target, "vademon")) {
      vademon();
    }
  },
  false
);

function vermilimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Vermilimon");
  replaceImage("vermilimon");
  attribute("da");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("flarerizamon", "Flarerizamon", "Lvl 45");
  evolveFromFrame("monochromon", "Monochromon", "Lvl 45");
  eraseOld(2);
  evolveToFrame("cannondramon", "Cannondramon", "Lvl 75");
  evolveToFrame(
    "blackimperialdramondragon",
    "Black Imperialdramon (Dragon Mode)",
    "50000 Machine Xp"
  );
  evolveToFrame("rosemon", "Rosemon", "50000 Insect/Plant Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".vermilimon").click(function (e) {
  e.preventDefault();
  vermilimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "vermilimon")) {
      vermilimon();
    } else if (hasClass(e.target, "vermilimon")) {
      vermilimon();
    }
  },
  false
);

function wargrowlmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("WarGrowlmon");
  replaceImage("wargrowlmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("geogreymon", "GeoGreymon", "5000 Dragon Xp");
  evolveFromFrame("greymonxros", "Greymon Xros", "5000 Machine Xp");
  evolveFromFrame("growlmon", "Growlmon", "250 Victories");
  evolveFromFrame("redveedramon", "RedVeedramon", "5000 Machine Xp");
  eraseOld(2);
  evolveToFrame("darkdramon", "Darkdramon", "Lvl 75");
  evolveToFrame("dinorexmon", "Dinorexmon", "50000 Dragon Xp");
  evolveToFrame("dukemon", "Dukemon", "50000 Holy Xp");
  evolveToFrame("megidramon", "Megidramon", "50000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".wargrowlmon").click(function (e) {
  e.preventDefault();
  wargrowlmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "wargrowlmon")) {
      wargrowlmon();
    } else if (hasClass(e.target, "wargrowlmon")) {
      wargrowlmon();
    }
  },
  false
);

function warumonzaemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("WaruMonzaemon");
  replaceImage("warumonzaemon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bakemon", "Bakemon", "5000 Beast Xp");
  evolveFromFrame("blackgatomon", "BlackGatomon", "5000 Dark Xp");
  evolveFromFrame("hyogamon", "Hyogamon", "5000 Dark Xp");
  evolveFromFrame("kyubimon", "Kyubimon", "5000 Dark Xp");
  evolveFromFrame("lekismon", "Lekismon", "Lvl 45");
  evolveFromFrame("monzaemon", "Monzaemon", "Black Digitron");
  eraseOld(2);
  evolveToFrame(
    "banchogolemon",
    "BanchoGolemon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveToFrame("beelzemon", "Beelzemon", "50000 Dark Xp");
  evolveToFrame("grankuwagamon", "GranKuwagamon", "50000 Insect/Plant Xp");
  evolveToFrame("metaletemon", "MetalEtemon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".warumonzaemon").click(function (e) {
  e.preventDefault();
  warumonzaemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "warumonzaemon")) {
      warumonzaemon();
    } else if (hasClass(e.target, "warumonzaemon")) {
      warumonzaemon();
    }
  },
  false
);

function waruseadramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("WaruSeadramon");
  replaceImage("waruseadramon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("coelamon", "Coelamon", "5000 Dark Xp");
  evolveFromFrame("ebidramon", "Ebidramon", "5000 Dark Xp");
  evolveFromFrame("garurumon", "Garurumon", "5000 Aquatic Xp");
  evolveFromFrame("gesomon", "Gesomon", "5000 Dark Xp");
  evolveFromFrame("hookmon", "Hookmon", "5000 Dark Xp");
  evolveFromFrame("lekismon", "Lekismon", "5000 Aquatic Xp");
  evolveFromFrame("ogremon", "Ogremon", "5000 Aquatic Xp");
  evolveFromFrame("seadramon", "Seadramon", "5000 Dark Xp");
  eraseOld(2);
  evolveToFrame("blackwargreymon", "BlackWarGreymon", "50000 Dragon Xp");
  evolveToFrame("cresgarurumon", "CresGarurumon", "50000 Beast Xp");
  evolveToFrame("demon", "Demon", "50000 Dark Xp");
  evolveToFrame("leviamon", "Leviamon", "Lvl 75");
  evolveToFrame("metaletemon", "MetalEtemon", "35 Defeats");
  evolveToFrame("pukumon", "Pukumon", "50000 Aquatic Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".waruseadramon").click(function (e) {
  e.preventDefault();
  waruseadramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "waruseadramon")) {
      waruseadramon();
    } else if (hasClass(e.target, "waruseadramon")) {
      waruseadramon();
    }
  },
  false
);

function weregarurumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("WereGarurumon");
  replaceImage("weregarurumon");
  attribute("da");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("blackgarurumon", "BlackGarurumon", "5000 Beast Xp");
  evolveFromFrame("garurumon", "Garurumon", "Lvl 45");
  evolveFromFrame("greymonxros", "Greymon Xros", "5000 Beast Xp");
  evolveFromFrame("icemon", "Icemon", "5000 Beast Xp");
  evolveFromFrame("leomon", "Leomon", "5000 Beast Xp");
  evolveFromFrame(
    "weregarurumonsagittarius",
    "WereGarurumon (Sagittarius)",
    "Mode Selector"
  );
  eraseOld(2);
  evolveToFrame(
    "weregarurumonblack",
    "WereGarurumon (Black)",
    "Black Digitron"
  );
  evolveToFrame(
    "weregarurumonsagittarius",
    "WereGarurumon (Sagittarius)",
    "Mode Selector"
  );
  evolveToFrame("ancientgarurumon", "AncientGarurumon", "Ancient Evoluter");
  evolveToFrame("cresgarurumon", "CresGarurumon", "50000 Beast Xp + 15000 Atk");
  evolveToFrame("duftmon", "Duftmon", "50000 Beast Xp");
  evolveToFrame("metalgarurumon", "MetalGarurumon", "Lvl 75");
  evolveToFrame("miragegaogamon", "MirageGaogamon", "50000 Holy Xp");
  evolveToFrame("vikemon", "Vikemon", "Jogress: Whamon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".weregarurumon").click(function (e) {
  e.preventDefault();
  weregarurumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "weregarurumon")) {
      weregarurumon();
    } else if (hasClass(e.target, "weregarurumon")) {
      weregarurumon();
    }
  },
  false
);

function weregarurumonblack() {
  $(".theme").attr("href", "style_info.css");
  replaceName("WereGarurumon (Black)");
  replaceImage("weregarurumonblack");
  attribute("vi");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("blackgarurumon", "BlackGarurumon", "Lvl 45");
  evolveFromFrame("fugamon", "Fugamon", "Lvl 45");
  evolveFromFrame("leomon", "Leomon", "5000 Dark Xp");
  evolveFromFrame("ogremon", "Ogremon", "5000 Beast Xp");
  evolveFromFrame("weregarurumon", "WereGarurumon", "Black Digitron");
  eraseOld(2);
  evolveToFrame("blackmetalgarurumon", "BlackMetalGarurumon", "Lvl 75");
  evolveToFrame("merukimon", "Merukimon", "50000 Beast Xp");
  evolveToFrame("miragegaogamon", "MirageGaogamon", "50000 Machine Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".weregarurumonblack").click(function (e) {
  e.preventDefault();
  weregarurumonblack();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "weregarurumonblack")) {
      weregarurumonblack();
    } else if (hasClass(e.target, "weregarurumonblack")) {
      weregarurumonblack();
    }
  },
  false
);

function weregarurumonsagittarius() {
  $(".theme").attr("href", "style_info.css");
  replaceName("WereGarurumon (Sagittarius)");
  replaceImage("weregarurumonsagittarius");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("weregarurumon", "WereGarurumon", "Mode Selector");
  eraseOld(2);
  evolveToFrame("weregarurumon", "WereGarurumon", "Mode Selector");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".weregarurumonsagittarius").click(function (e) {
  e.preventDefault();
  weregarurumonsagittarius();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "weregarurumonsagittarius")) {
      weregarurumonsagittarius();
    } else if (hasClass(e.target, "weregarurumonsagittarius")) {
      weregarurumonsagittarius();
    }
  },
  false
);

function whamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Whamon");
  replaceImage("whamon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("ebidramon", "Ebidramon", "5000 Aquatic Xp");
  evolveFromFrame("ikkakumon", "Ikkakumon", "5000 Aquatic Xp");
  evolveFromFrame("seadramon", "Seadramon", "5000 Aquatic Xp");
  evolveFromFrame("seahomon", "Seahomon", "5000 Aquatic Xp");
  eraseOld(2);
  evolveToFrame("marineangemon", "MarineAngemon", "50000 Holy Xp");
  evolveToFrame("neptunemon", "Neptunemon", "Lvl 75");
  evolveToFrame("plesiomon", "Plesiomon", "50000 Aquatic Xp");
  evolveToFrame("vikemon", "Vikemon", "Jogress: WereGarurumon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".whamon").click(function (e) {
  e.preventDefault();
  whamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "whamon")) {
      whamon();
    } else if (hasClass(e.target, "whamon")) {
      whamon();
    }
  },
  false
);

function wingdramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Wingdramon");
  replaceImage("wingdramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("airdramon", "Airdramon", "5000 Dragon Xp");
  evolveFromFrame("coredramon_blue", "Coredramon (Blue)", "lvl 45");
  eraseOld(2);
  evolveToFrame("dynasmon", "Dynasmon", "50000 Dragon Xp");
  evolveToFrame("slayerdramon", "Slayerdramon", "Lvl 75");
  evolveToFrame("ulforceveedramon", "UlforceVeedramon", "50000 Holy Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".wingdramon").click(function (e) {
  e.preventDefault();
  wingdramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "wingdramon")) {
      wingdramon();
    } else if (hasClass(e.target, "wingdramon")) {
      wingdramon();
    }
  },
  false
);

function wisemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Wisemon");
  replaceImage("wisemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("wizardmon", "Wizardmon", "Lvl 45");
  eraseOld(2);
  evolveToFrame("belphemonsleep", "Belphemon (Sleep Mode)", "Lvl 75");
  evolveToFrame("venommyotismon", "VenomMyotismon", "50000 Dark Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".wisemon").click(function (e) {
  e.preventDefault();
  wisemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "wisemon")) {
      wisemon();
    } else if (hasClass(e.target, "wisemon")) {
      wisemon();
    }
  },
  false
);

function yatagaramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Yatagaramon");
  replaceImage("yatagaramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("birdramon", "Birdramon", "5000 Dark Xp");
  evolveFromFrame("diatrymon", "Diatrymon", "Lvl 45");
  evolveFromFrame("peckmon", "Peckmon", "Lvl 45");
  eraseOld(2);
  evolveToFrame("darkdramon", "Darkdramon", "50000 Dark Xp");
  evolveToFrame("kuzuhamon", "Kuzuhamon", "50000 Beast Xp");
  evolveToFrame("ouryumon", "Ouryumon", "50000 Holy Xp");
  evolveToFrame("ravemon", "Ravemon", "Lvl 75");
  evolveToFrame("spinomon", "Spinomon", "50000 Dragon Xp");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".yatagaramon").click(function (e) {
  e.preventDefault();
  yatagaramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "yatagaramon")) {
      yatagaramon();
    } else if (hasClass(e.target, "yatagaramon")) {
      yatagaramon();
    }
  },
  false
);

function zudomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Zudomon");
  replaceImage("zudomon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("golemon", "Golemon", "5000 Dragon Xp");
  evolveFromFrame("hookmon", "Hookmon", "5000 Aquatic Xp");
  evolveFromFrame("hyogamon", "Hyogamon", "5000 Aquatic Xp");
  evolveFromFrame("ikkakumon", "Ikkakumon", "Lvl 45");
  evolveFromFrame("yukidarumon", "Yukidarumon", "5000 Aquatic Xp");
  eraseOld(2);
  evolveToFrame("plesiomon", "Plesiomon", "50000 Aquatic Xp");
  evolveToFrame("titamon", "Titamon", "50000 Dark Xp");
  evolveToFrame("vikemon", "Vikemon", "Lvl 75");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".zudomon").click(function (e) {
  e.preventDefault();
  zudomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "zudomon")) {
      zudomon();
    } else if (hasClass(e.target, "zudomon")) {
      zudomon();
    }
  },
  false
);

/*-------------------- MEGAS --------------------*/

function alphamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Alphamon");
  replaceImage("alphamon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("cannonbeemon", "Cannonbeemon", "50000 Holy Xp");
  evolveFromFrame("cyberdramon", "Cyberdramon", "50000 Holy Xp");
  evolveFromFrame("dorugreymon", "DoruGreymon", "Lvl 75");
  evolveFromFrame("hisyaryumon", "Hisyaryumon", "50000 Holy Xp + Happy Mood");
  eraseOld(2);
  evolveToFrame("alphamonouryuken", "Alphamon Ouryuken", "Jogress: Ouryumon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".alphamon").click(function (e) {
  e.preventDefault();
  alphamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "alphamon")) {
      alphamon();
    } else if (hasClass(e.target, "alphamon")) {
      alphamon();
    }
  },
  false
);

function ancientgarurumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("AncientGarurumon");
  replaceImage("ancientgarurumon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("cerberumon", "Cerberumon", "Ancient Evoluter");
  evolveFromFrame("machgaogamon", "MachGaogamon", "Ancient Evoluter");
  evolveFromFrame("weregarurumon", "WereGarurumon", "Ancient Evoluter");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ancientgarurumon").click(function (e) {
  e.preventDefault();
  ancientgarurumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ancientgarurumon")) {
      ancientgarurumon();
    } else if (hasClass(e.target, "ancientgarurumon")) {
      ancientgarurumon();
    }
  },
  false
);

function anubimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Anubimon");
  replaceImage("anubimon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("cerberumon", "Cerberumon", "Lvl 75");
  evolveFromFrame("skullbaluchimon", "SkullBaluchimon", "50000 Beast Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".anubimon").click(function (e) {
  e.preventDefault();
  anubimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "anubimon")) {
      anubimon();
    } else if (hasClass(e.target, "anubimon")) {
      anubimon();
    }
  },
  false
);

function apollomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Apollomon");
  replaceImage("apollomon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("flaremon", "Flaremon", "Lvl 80 + Neutral Mood");
  evolveFromFrame("apollomonwhispered", "Apollomon Whispered", "Vaccine Kit");
  eraseOld(2);
  evolveToFrame("apollomonwhispered", "Apollomon Whispered", "Virus Kit");
  evolveToFrame("gracenovamon", "GraceNovamon", "Jogress: Dianamon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".apollomon").click(function (e) {
  e.preventDefault();
  apollomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "apollomon")) {
      apollomon();
    } else if (hasClass(e.target, "apollomon")) {
      apollomon();
    }
  },
  false
);

function apollomonwhispered() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Apollomon Whispered");
  replaceImage("apollomonwhispered");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("apollomon", "Apollomon", "Virus Kit");
  eraseOld(2);
  evolveToFrame("apollomon", "Apollomon", "Vaccine Kit");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".apollomonwhispered").click(function (e) {
  e.preventDefault();
  apollomonwhispered();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "apollomonwhispered")) {
      apollomonwhispered();
    } else if (hasClass(e.target, "apollomonwhispered")) {
      apollomonwhispered();
    }
  },
  false
);

function bacchusmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Bacchusmon");
  replaceImage("bacchusmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "digitamamon",
    "Digitamamon",
    "50000 Beast Xp + Must be Stuffed"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".bacchusmon").click(function (e) {
  e.preventDefault();
  bacchusmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "bacchusmon")) {
      bacchusmon();
    } else if (hasClass(e.target, "bacchusmon")) {
      bacchusmon();
    }
  },
  false
);

function banchogolemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BanchoGolemon");
  replaceImage("banchogolemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("golemon", "Golemon", "Gakuran + 250 Victories + 0 Defeats");
  evolveFromFrame(
    "etemon",
    "Etemon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveFromFrame(
    "metalmamemon",
    "MetalMamemon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveFromFrame(
    "meteormon",
    "Meteormon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveFromFrame(
    "warumonzaemon",
    "WaruMonzaemon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".banchogolemon").click(function (e) {
  e.preventDefault();
  banchogolemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "banchogolemon")) {
      banchogolemon();
    } else if (hasClass(e.target, "banchogolemon")) {
      banchogolemon();
    }
  },
  false
);

function bancholeomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BanchoLeomon");
  replaceImage("bancholeomon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("leomon", "Leomon", "Gakuran + 250 Victories + 0 Defeats");
  evolveFromFrame(
    "cerberumon",
    "Cerberumon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveFromFrame("kimeramon", "Kimeramon", "50000 Beast Xp");
  evolveFromFrame(
    "loaderliomon",
    "LoaderLiomon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveFromFrame(
    "machgaogamon",
    "MachGaogamon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveFromFrame(
    "monzaemon",
    "Monzaemon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveFromFrame(
    "pandamon",
    "Pandamon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveFromFrame(
    "panjyamon",
    "Panjyamon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  eraseOld(2);
  evolveToFrame("bancholeomonbm", "BanchoLeomon (Burst Mode)", "Accelerator");
  evolveToFrame("chaosmon", "Chaosmon", "Jogress: Darkdramon");
  evolveToFrame("chaosmonvm", "Chaosmon (Valdur Arm)", "Jogress: Valdurmon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".bancholeomon").click(function (e) {
  e.preventDefault();
  bancholeomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "bancholeomon")) {
      bancholeomon();
    } else if (hasClass(e.target, "bancholeomon")) {
      bancholeomon();
    }
  },
  false
);

function bancholeomonbm() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BanchoLeomon (Burst Mode)");
  replaceImage("bancholeomonbm");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bancholeomon", "BanchoLeomon", "Accelerator");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".bancholeomonbm").click(function (e) {
  e.preventDefault();
  bancholeomonbm();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "bancholeomonbm")) {
      bancholeomonbm();
    } else if (hasClass(e.target, "bancholeomonbm")) {
      bancholeomonbm();
    }
  },
  false
);

function bancholilymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BanchoLilymon");
  replaceImage("bancholilymon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "cherrymon",
    "Cherrymon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveFromFrame("lilymon", "Lilymon", "Gakuran + 250 Victories + 0 Defeats");
  evolveFromFrame(
    "lilymon",
    "Lilymon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveFromFrame(
    "okuwamon",
    "Okuwamon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".bancholilymon").click(function (e) {
  e.preventDefault();
  bancholilymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "bancholilymon")) {
      bancholilymon();
    } else if (hasClass(e.target, "bancholilymon")) {
      bancholilymon();
    }
  },
  false
);

function banchomamemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BanchoMamemon");
  replaceImage("banchomamemon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("mamemon", "Mamemon", "Gakuran + 250 Victories + 0 Defeats");
  evolveFromFrame(
    "mamemon",
    "Mamemon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".banchomamemon").click(function (e) {
  e.preventDefault();
  banchomamemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "banchomamemon")) {
      banchomamemon();
    } else if (hasClass(e.target, "banchomamemon")) {
      banchomamemon();
    }
  },
  false
);

function banchostingmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BanchoStingmon");
  replaceImage("banchostingmon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "stingmon",
    "Stingmon",
    "Gakuran + 250 Victories + 0 Defeats"
  );
  evolveFromFrame(
    "atlurkabuterimonred",
    "AtlurKabuterimon (Red)",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveFromFrame(
    "deramon",
    "Deramon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  evolveFromFrame(
    "jewelbeemon",
    "JewelBeemon",
    "500 Victories + Bantyo Medal + 0 Defeats"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".banchostingmon").click(function (e) {
  e.preventDefault();
  banchostingmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "banchostingmon")) {
      banchostingmon();
    } else if (hasClass(e.target, "banchostingmon")) {
      banchostingmon();
    }
  },
  false
);

function barbamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Barbamon");
  replaceImage("barbamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("datamon", "Datamon", "50000 Dark Xp");
  evolveFromFrame("phantomon", "Phantomon", "50000 Dark Xp");
  eraseOld(2);
  evolveToFrame(
    "ogudomon",
    "Ogudomon",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".barbamon").click(function (e) {
  e.preventDefault();
  barbamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "barbamon")) {
      barbamon();
    } else if (hasClass(e.target, "barbamon")) {
      barbamon();
    }
  },
  false
);

function beelstarmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Beelstarmon");
  replaceImage("beelstarmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("arukenimon", "Arukenimon", "50000 Dark Xp");
  evolveFromFrame("ladydevimon", "LadyDevimon", "50000 Dark Xp");
  evolveFromFrame(
    "meicrackmonvicious",
    "Meicrackmon (Vicious)",
    "50000 Dark Xp"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".beelstarmon").click(function (e) {
  e.preventDefault();
  beelstarmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "beelstarmon")) {
      beelstarmon();
    } else if (hasClass(e.target, "beelstarmon")) {
      beelstarmon();
    }
  },
  false
);

function beelzemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Beelzemon");
  replaceImage("beelzemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("impmon", "Impmon", "Warp Evolution");
  evolveFromFrame("garudamon", "Garudamon", "50000 Dark Xp");
  evolveFromFrame("pumpkinmon", "Pumpkinmon", "50000 Dark Xp");
  evolveFromFrame("skullmeramon", "SkullMeramon", "50000 Dark Xp");
  evolveFromFrame("skullsatamon", "SkullSatamon", "Lvl 75");
  evolveFromFrame("warumonzaemon", "WaruMonzaemon", "50000 Dark Xp");
  eraseOld(2);
  evolveToFrame(
    "beelzemonblast",
    "Beelzemon (Blast Mode)",
    "Accelerator + 500 Victories"
  );
  evolveToFrame(
    "ogudomon",
    "Ogudomon",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".beelzemon").click(function (e) {
  e.preventDefault();
  beelzemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "beelzemon")) {
      beelzemon();
    } else if (hasClass(e.target, "beelzemon")) {
      beelzemon();
    }
  },
  false
);

function beelzemonblast() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Beelzemon (Blast Mode)");
  replaceImage("beelzemonblast");
  attribute("vi");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("beelzemon", "Beelzemon", "Accelerator + 500 Victories");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".beelzemonblast").click(function (e) {
  e.preventDefault();
  beelzemonblast();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "beelzemonblast")) {
      beelzemonblast();
    } else if (hasClass(e.target, "beelzemonblast")) {
      beelzemonblast();
    }
  },
  false
);

function belphemonrage() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Belphemon (Rage Mode)");
  replaceImage("belphemonrage");
  attribute("vi");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("pandamon", "Pandamon", "50000 Dark Xp");
  evolveFromFrame("belphemonsleep", "Belphemon (Sleep Mode)", "Mode Selector");
  eraseOld(2);
  evolveToFrame("belphemonsleep", "Belphemon (Sleep Mode)", "Mode Selector");
  evolveToFrame(
    "ogudomon",
    "Ogudomon",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".belphemonrage").click(function (e) {
  e.preventDefault();
  belphemonrage();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "belphemonrage")) {
      belphemonrage();
    } else if (hasClass(e.target, "belphemonrage")) {
      belphemonrage();
    }
  },
  false
);

function belphemonsleep() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Belphemon (Sleep Mode)");
  replaceImage("belphemonsleep");
  attribute("vi");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("antylamondeva", "Antylamon (Deva)", "50000 Dark Xp");
  evolveFromFrame("megadramon", "Megadramon", "50000 Dark Xp");
  evolveFromFrame("wisemon", "Wisemon", "Lvl 75");
  evolveFromFrame("belphemonrage", "Belphemon (Rage Mode)", "Mode Selector");
  eraseOld(2);
  evolveToFrame("belphemonrage", "Belphemon (Rage Mode)", "Mode Selector");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".belphemonsleep").click(function (e) {
  e.preventDefault();
  belphemonsleep();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "belphemonsleep")) {
      belphemonsleep();
    } else if (hasClass(e.target, "belphemonsleep")) {
      belphemonsleep();
    }
  },
  false
);

function blackimperialdramondragon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Black Imperialdramon (Dragon Mode)");
  replaceImage("blackimperialdramondragon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("dinobeemon", "Dinobeemon", "Lvl 75");
  evolveFromFrame("triceramon", "Triceramon", "Jogress: Vermilimon");
  evolveFromFrame("vermilimon", "Vermilimon", "Jogress: Triceramon");
  evolveFromFrame(
    "imperialdramondragon",
    "Imperialdramon (Dragon Mode)",
    "Black Digitron"
  );
  evolveFromFrame(
    "blackimperialdramonfighter",
    "Black Imperialdramon (Fighter Mode)",
    "Mode Selector"
  );
  eraseOld(2);
  evolveToFrame(
    "blackimperialdramonfighter",
    "Black Imperialdramon (Fighter Mode)",
    "Mode Selector"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".blackimperialdramondragon").click(function (e) {
  e.preventDefault();
  blackimperialdramondragon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "blackimperialdramondragon")) {
      blackimperialdramondragon();
    } else if (hasClass(e.target, "blackimperialdramondragon")) {
      blackimperialdramondragon();
    }
  },
  false
);

function blackimperialdramonfighter() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Black Imperialdramon (Fighter Mode)");
  replaceImage("blackimperialdramonfighter");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "imperialdramonfighter",
    "Imperialdramon (Fighter Mode)",
    "Black Digitron"
  );
  evolveFromFrame(
    "blackimperialdramondragon",
    "Black Imperialdramon (Dragon Mode)",
    "Mode Selector"
  );
  eraseOld(2);
  evolveToFrame(
    "blackimperialdramondragon",
    "Black Imperialdramon (Dragon Mode)",
    "Mode Selector"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".blackimperialdramonfighter").click(function (e) {
  e.preventDefault();
  blackimperialdramonfighter();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "blackimperialdramonfighter")) {
      blackimperialdramonfighter();
    } else if (hasClass(e.target, "blackimperialdramonfighter")) {
      blackimperialdramonfighter();
    }
  },
  false
);

function blackmetalgarurumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BlackMetalGarurumon");
  replaceImage("blackmetalgarurumon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blackgabumon", "BlackGabumon", "Warp Evolution");
  evolveFromFrame("datamon", "Datamon", "50000 Beast Xp");
  evolveFromFrame("rapidmon", "Rapidmon", "50000 Beast Xp");
  evolveFromFrame("weregarurumonblack", "WereGarurumon (Black)", "Lvl 75");
  evolveFromFrame("metalgarurumon", "MetalGarurumon", "Black Digitron");
  eraseOld(2);
  evolveToFrame("omegamonzwart", "Omegamon Zwart", "Jogress: BlackWarGreymon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".blackmetalgarurumon").click(function (e) {
  e.preventDefault();
  blackmetalgarurumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "blackmetalgarurumon")) {
      blackmetalgarurumon();
    } else if (hasClass(e.target, "blackmetalgarurumon")) {
      blackmetalgarurumon();
    }
  },
  false
);

function blackwargreymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BlackWarGreymon");
  replaceImage("blackwargreymon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blackagumon", "BlackAgumon", "Warp Evolution");
  evolveFromFrame("megadramon", "Megadramon", "Lvl 75");
  evolveFromFrame("myotismon", "Myotismon", "50000 Dragon Xp");
  evolveFromFrame("skullgreymon", "SkullGreymon", "Lvl 75");
  evolveFromFrame("waruseadramon", "WaruSeadramon", "50000 Dragon Xp");
  evolveFromFrame("metalgreymonvirus", "MetalGreymon (Virus)", "Lvl 75");
  evolveFromFrame("wargreymon", "WarGreymon", "Black Digitron");
  eraseOld(2);
  evolveToFrame(
    "omegamonzwart",
    "Omegamon Zwart",
    "Jogress: BlackMetalGarurumon"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".blackwargreymon").click(function (e) {
  e.preventDefault();
  blackwargreymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "blackwargreymon")) {
      blackwargreymon();
    } else if (hasClass(e.target, "blackwargreymon")) {
      blackwargreymon();
    }
  },
  false
);

function blitzgreymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("BlitzGreymon");
  replaceImage("blitzgreymon");
  attribute("vi");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame(
    "metalgreymon",
    "MetalGreymon",
    "50000 Machine Xp + 15000 Def"
  );
  evolveFromFrame(
    "metalgreymonvirus",
    "MetalGreymon (Virus)",
    "50000 Machine Xp + 15000 Def"
  );
  eraseOld(2);
  evolveToFrame("omegamonalters", "Omegamon Alter-S", "Jogress: CresGarurumon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".blitzgreymon").click(function (e) {
  e.preventDefault();
  blitzgreymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "blitzgreymon")) {
      blitzgreymon();
    } else if (hasClass(e.target, "blitzgreymon")) {
      blitzgreymon();
    }
  },
  false
);

function boltmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Boltmon");
  replaceImage("boltmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("andromon", "Andromon", "50000 Dark Xp");
  evolveFromFrame("bluemeramon", "BlueMeramon", "Lvl 75");
  evolveFromFrame("pumpkinmon", "Pumpkinmon", "Lvl 75");
  evolveFromFrame("skullmeramon", "SkullMeramon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".boltmon").click(function (e) {
  e.preventDefault();
  boltmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "boltmon")) {
      boltmon();
    } else if (hasClass(e.target, "boltmon")) {
      boltmon();
    }
  },
  false
);

function breakdramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Breakdramon");
  replaceImage("breakdramon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("dinobeemon", "Dinobeemon", "Lvl 75");
  evolveFromFrame("groundramon", "Groundramon", "Lvl 75");
  evolveFromFrame("triceramon", "Triceramon", "50000 Machine Xp");
  eraseOld(2);
  evolveToFrame("examon", "Examon", "Jogress: Slayerdramon");
  evolveToFrame(
    "gigabreakdramon",
    "GigaBreakdramon",
    "Accelerator + 500 Victories"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".breakdramon").click(function (e) {
  e.preventDefault();
  breakdramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "breakdramon")) {
      breakdramon();
    } else if (hasClass(e.target, "breakdramon")) {
      breakdramon();
    }
  },
  false
);

function cannondramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Cannondramon");
  replaceImage("cannondramon");
  attribute("da");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("brachimon", "Brachimon", "Lvl 75");
  evolveFromFrame("triceramon", "Triceramon", "Lvl 75");
  evolveFromFrame("vermilimon", "Vermilimon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".cannondramon").click(function (e) {
  e.preventDefault();
  cannondramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "cannondramon")) {
      cannondramon();
    } else if (hasClass(e.target, "cannondramon")) {
      cannondramon();
    }
  },
  false
);

function ceresmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ceresmon");
  replaceImage("ceresmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "cherrymon",
    "Cherrymon",
    "50000 Insect/Plant Xp + 50000 Bird Xp"
  );
  evolveFromFrame(
    "sirenmon",
    "Sirenmon",
    "50000 Insect/Plant Xp + 50000 Bird Xp"
  );
  eraseOld(2);
  evolveToFrame("ceresmonmedium", "Ceresmon (Medium)", "Accelerator");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ceresmon").click(function (e) {
  e.preventDefault();
  ceresmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ceresmon")) {
      ceresmon();
    } else if (hasClass(e.target, "ceresmon")) {
      ceresmon();
    }
  },
  false
);

function ceresmonmedium() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ceresmon (Medium)");
  replaceImage("ceresmonmedium");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("ceresmon", "Ceresmon", "Accelerator");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ceresmonmedium").click(function (e) {
  e.preventDefault();
  ceresmonmedium();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ceresmonmedium")) {
      ceresmonmedium();
    } else if (hasClass(e.target, "ceresmonmedium")) {
      ceresmonmedium();
    }
  },
  false
);

function chaosdramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Chaosdramon");
  replaceImage("chaosdramon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("mugendramon", "Mugendramon", "Accelerator + 500 Victories");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".chaosdramon").click(function (e) {
  e.preventDefault();
  chaosdramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "chaosdramon")) {
      chaosdramon();
    } else if (hasClass(e.target, "chaosdramon")) {
      chaosdramon();
    }
  },
  false
);

function chaosdukemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ChaosDukemon");
  replaceImage("chaosdukemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("shakkoumon", "Shakkoumon", "50000 Dark Xp");
  evolveFromFrame("dukemon", "Dukemon", "Chaos Core");
  evolveFromFrame("megidramon", "Megidramon", "Mode Selector");
  eraseOld(2);
  evolveToFrame("megidramon", "Megidramon", "Mode Selector");
  evolveToFrame(
    "chaosdukemoncore",
    "ChaosDukemon Core",
    "Accelerator + 500 Victories"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".chaosdukemon").click(function (e) {
  e.preventDefault();
  chaosdukemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "chaosdukemon")) {
      chaosdukemon();
    } else if (hasClass(e.target, "chaosdukemon")) {
      chaosdukemon();
    }
  },
  false
);

function chaosdukemoncore() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ChaosDukemon");
  replaceImage("chaosdukemoncore");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "chaosdukemon",
    "ChaosDukemon",
    "Accelerator + 500 Victories"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".chaosdukemoncore").click(function (e) {
  e.preventDefault();
  chaosdukemoncore();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "chaosdukemoncore")) {
      chaosdukemoncore();
    } else if (hasClass(e.target, "chaosdukemoncore")) {
      chaosdukemoncore();
    }
  },
  false
);

function chaosgreymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ChaosGreymon");
  replaceImage("chaosgreymon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("wargreymon", "WarGreymon", "Chaos Core");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".chaosgreymon").click(function (e) {
  e.preventDefault();
  chaosgreymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "chaosgreymon")) {
      chaosgreymon();
    } else if (hasClass(e.target, "chaosgreymon")) {
      chaosgreymon();
    }
  },
  false
);

function chaospiedmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ChaosPiedmon");
  replaceImage("chaospiedmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("piedmon", "Piedmon", "Chaos Core");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".chaospiedmon").click(function (e) {
  e.preventDefault();
  chaospiedmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "chaospiedmon")) {
      chaospiedmon();
    } else if (hasClass(e.target, "chaospiedmon")) {
      chaospiedmon();
    }
  },
  false
);

function chaosseadramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ChaosSeadramon");
  replaceImage("chaosseadramon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("metalseadramon", "MetalSeadramon", "Chaos Core");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".chaosseadramon").click(function (e) {
  e.preventDefault();
  chaosseadramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "chaosseadramon")) {
      chaosseadramon();
    } else if (hasClass(e.target, "chaosseadramon")) {
      chaosseadramon();
    }
  },
  false
);

function cherubimonvice() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Cherubimon (Vice)");
  replaceImage("cherubimonvice");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("cherubimonvirtue", "Cherubimon (Virtue)", "Mode Selector");
  eraseOld(2);
  evolveToFrame("cherubimonvirtue", "Cherubimon (Virtue)", "Mode Selector");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".cherubimonvice").click(function (e) {
  e.preventDefault();
  cherubimonvice();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "cherubimonvice")) {
      cherubimonvice();
    } else if (hasClass(e.target, "cherubimonvice")) {
      cherubimonvice();
    }
  },
  false
);

function cherubimonvirtue() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Cherubimon (Virtue)");
  replaceImage("cherubimonvirtue");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("antylamondeva", "Antylamon (Deva)", "Lvl 75");
  evolveFromFrame("crescemon", "Crescemon", "50000 Holy Xp");
  evolveFromFrame("shakkoumon", "Shakkoumon", "50000 Holy Xp");
  evolveFromFrame("cherubimonvice", "Cherubimon (Vice)", "Mode Selector");
  eraseOld(2);
  evolveToFrame("cherubimonvice", "Cherubimon (Vice)", "Mode Selector");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".cherubimonvirtue").click(function (e) {
  e.preventDefault();
  cherubimonvirtue();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "cherubimonvirtue")) {
      cherubimonvirtue();
    } else if (hasClass(e.target, "cherubimonvirtue")) {
      cherubimonvirtue();
    }
  },
  false
);

function craniummon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Craniummon");
  replaceImage("craniummon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "atlurkabuterimonblue",
    "AtlurKabuterimon (Blue)",
    "50000 Holy Xp"
  );
  evolveFromFrame("mistymon", "Mistymon", "50000 Holy Xp");
  evolveFromFrame("skullgreymon", "SkullGreymon", "50000 Holy Xp");
  evolveFromFrame("skullsatamon", "SkullSatamon", "50000 Holy Xp");
  evolveFromFrame("hiandromon", "HiAndromon", "Accelerator + 500 Victories");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".craniummon").click(function (e) {
  e.preventDefault();
  craniummon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "craniummon")) {
      craniummon();
    } else if (hasClass(e.target, "craniummon")) {
      craniummon();
    }
  },
  false
);

function cresgarurumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("CresGarurumon");
  replaceImage("cresgarurumon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("metalmamemon", "MetalMamemon", "50000 Beast Xp + 15000 Atk");
  evolveFromFrame(
    "weregarurumon",
    "WereGarurumon",
    "50000 Beast Xp + 15000 Atk"
  );
  evolveFromFrame("waruseadramon", "WaruSeadramon", "50000 Beast Xp");
  eraseOld(2);
  evolveToFrame("omegamonalters", "Omegamon Alter-S", "Jogress: CresGarurumon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".cresgarurumon").click(function (e) {
  e.preventDefault();
  cresgarurumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "cresgarurumon")) {
      cresgarurumon();
    } else if (hasClass(e.target, "cresgarurumon")) {
      cresgarurumon();
    }
  },
  false
);

function darkdramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Darkdramon");
  replaceImage("darkdramon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bluemeramon", "BlueMeramon", "50000 Dragon Xp");
  evolveFromFrame("darksuperstarmon", "DarkSuperStarmon", "Lvl 75");
  evolveFromFrame("loaderliomon", "LoaderLiomon", "50000 Dark Xp");
  evolveFromFrame("pandamon", "Pandamon", "50000 Dragon Xp");
  evolveFromFrame("wargrowlmon", "WarGrowlmon", "Lvl 75");
  evolveFromFrame("yatagaramon", "Yatagaramon", "50000 Dark Xp");
  eraseOld(2);
  evolveToFrame("chaosmon", "Chaosmon", "Jogress: BanchoLeomon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".darkdramon").click(function (e) {
  e.preventDefault();
  darkdramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "darkdramon")) {
      darkdramon();
    } else if (hasClass(e.target, "darkdramon")) {
      darkdramon();
    }
  },
  false
);

function deathmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Deathmon");
  replaceImage("deathmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("skullsatamon", "SkullSatamon", "50000 Dark Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".deathmon").click(function (e) {
  e.preventDefault();
  deathmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "deathmon")) {
      deathmon();
    } else if (hasClass(e.target, "deathmon")) {
      deathmon();
    }
  },
  false
);

function deathxdorugoramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Death-X Dorugoramon");
  replaceImage("deathxdorugoramon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("deathxdorugreymon", "Death-X Dorugreymon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("deathxmon", "Death-X-mon", "Accelerator");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".deathxdorugoramon").click(function (e) {
  e.preventDefault();
  deathxdorugoramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "deathxdorugoramon")) {
      deathxdorugoramon();
    } else if (hasClass(e.target, "deathxdorugoramon")) {
      deathxdorugoramon();
    }
  },
  false
);

function deathxmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Death-X-mon");
  replaceImage("deathxmon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("deathxdorugoramon", "Death-X Dorugoramon", "Accelerator");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".deathxmon").click(function (e) {
  e.preventDefault();
  deathxmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "deathxmon")) {
      deathxmon();
    } else if (hasClass(e.target, "deathxmon")) {
      deathxmon();
    }
  },
  false
);

function demon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Demon");
  replaceImage("demon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bluemeramon", "BlueMeramon", "50000 Dark Xp");
  evolveFromFrame("garbagemon", "Garbagemon", "50000 Dark Xp");
  evolveFromFrame("marinedevimon", "MarineDevimon", "50000 Dark Xp");
  evolveFromFrame("myotismon", "Myotismon", "50000 Beast Xp");
  evolveFromFrame("skullsatamon", "SkullSatamon", "50000 Beast Xp");
  evolveFromFrame("waruseadramon", "WaruSeadramon", "50000 Dark Xp");
  eraseOld(2);
  evolveToFrame(
    "ogudomon",
    "Ogudomon",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".demon").click(function (e) {
  e.preventDefault();
  demon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "demon")) {
      demon();
    } else if (hasClass(e.target, "demon")) {
      demon();
    }
  },
  false
);

function devitamamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Devitamamon");
  replaceImage("devitamamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("digitamamon", "Digitamamon", "Lvl 75");
  evolveFromFrame("skullmeramon", "SkullMeramon", "50000 Beast Xp");
  eraseOld(2);
  evolveToFrame(
    "moonmillenniumon",
    "MoonMillenniumon",
    "Jogress: Millenniumon"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".devitamamon").click(function (e) {
  e.preventDefault();
  devitamamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "devitamamon")) {
      devitamamon();
    } else if (hasClass(e.target, "devitamamon")) {
      devitamamon();
    }
  },
  false
);

function diaboromon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Diaboromon");
  replaceImage("diaboromon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("keramon", "Keramon", "Warp Evolution");
  evolveFromFrame("infermon", "Infermon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("armagemon", "Armagemon", "Accelerator + 500 Victories");
  evolveToFrame("quartzmon", "Quartzmon", "150000 Dark Xp + 1 Quartz Core");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".diaboromon").click(function (e) {
  e.preventDefault();
  diaboromon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "diaboromon")) {
      diaboromon();
    } else if (hasClass(e.target, "diaboromon")) {
      diaboromon();
    }
  },
  false
);

function dianamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Dianamon");
  replaceImage("dianamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "antylamondeva",
    "Antylamon (Deva)",
    "50000 Aquatic Xp + Indiferent Mood"
  );
  evolveFromFrame("crescemon", "Crescemon", "Lvl 80");
  evolveFromFrame(
    "meteormon",
    "Meteormon",
    "50000 Aquatic Xp + Indiferent Mood"
  );
  eraseOld(2);
  evolveToFrame("gracenovamon", "GraceNovamon", "Jogress: Apollomon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dianamon").click(function (e) {
  e.preventDefault();
  dianamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dianamon")) {
      dianamon();
    } else if (hasClass(e.target, "dianamon")) {
      dianamon();
    }
  },
  false
);

function dinorexmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Dinorexmon");
  replaceImage("dinorexmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("hisyaryumon", "Hisyaryumon", "50000 Dragon Xp");
  evolveFromFrame("mastertyranomon", "MasterTyranomon", "50000 Dragon Xp");
  evolveFromFrame("skullbaluchimon", "SkullBaluchimon", "50000 Dragon Xp");
  evolveFromFrame(
    "triceramon",
    "Triceramon",
    "50000 Dragon Xp + 500 Victories"
  );
  evolveFromFrame("wargrowlmon", "WarGrowlmon", "50000 Dragon Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dinorexmon").click(function (e) {
  e.preventDefault();
  dinorexmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dinorexmon")) {
      dinorexmon();
    } else if (hasClass(e.target, "dinorexmon")) {
      dinorexmon();
    }
  },
  false
);

function duftmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Duftmon");
  replaceImage("duftmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("weregarurumon", "WereGarurumon", "50000 Beast Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".duftmon").click(function (e) {
  e.preventDefault();
  duftmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "duftmon")) {
      duftmon();
    } else if (hasClass(e.target, "duftmon")) {
      duftmon();
    }
  },
  false
);

function dukemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Dukemon");
  replaceImage("dukemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("guilmon", "Guilmon", "Warp Evolution");
  evolveFromFrame("wargrowlmon", "WarGrowlmon", "50000 Holy Xp");
  evolveFromFrame("dukemon_crimson", "Dukemon (Crimson Mode)", "Mode Selector");
  eraseOld(2);
  evolveToFrame("chaosdukemon", "ChaosDukemon", "Chaos Core");
  evolveToFrame("dukemon_crimson", "Dukemon (Crimson Mode)", "Mode Selector");
  evolveToFrame("dukemonx", "Dukemon X", "X-Antibody");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dukemon").click(function (e) {
  e.preventDefault();
  dukemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dukemon")) {
      dukemon();
    } else if (hasClass(e.target, "dukemon")) {
      dukemon();
    }
  },
  false
);

function dynasmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Dynasmon");
  replaceImage("dynasmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("metalmamemon", "MetalMamemon", "50000 Dragon Xp");
  evolveFromFrame("mistymon", "Mistymon", "Lvl 75");
  evolveFromFrame("silphymon", "Silphymon", "50000 Dragon Xp");
  evolveFromFrame("wingdramon", "Wingdramon", "50000 Dragon Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dynasmon").click(function (e) {
  e.preventDefault();
  dynasmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dynasmon")) {
      dynasmon();
    } else if (hasClass(e.target, "dynasmon")) {
      dynasmon();
    }
  },
  false
);

function ebemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ebemon");
  replaceImage("ebemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("meteormon", "Meteormon", "50000 Dark Xp");
  evolveFromFrame("vademon", "Vademon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ebemon").click(function (e) {
  e.preventDefault();
  ebemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ebemon")) {
      ebemon();
    } else if (hasClass(e.target, "ebemon")) {
      ebemon();
    }
  },
  false
);

function eldoradimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ElDoradimon");
  replaceImage("eldoradimon");
  attribute("da");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame(
    "cherrymon",
    "Cherrymon",
    "50000 Holy Xp + The Holy Capital of El Dorado Medal"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".eldoradimon").click(function (e) {
  e.preventDefault();
  eldoradimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "eldoradimon")) {
      eldoradimon();
    } else if (hasClass(e.target, "eldoradimon")) {
      eldoradimon();
    }
  },
  false
);

function gankoomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Gankoomon");
  replaceImage("gankoomon");
  attribute("da");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("skullmeramon", "SkullMeramon", "50000 Holy Xp");
  eraseOld(2);
  evolveToFrame("gankoomonx", "Gankoomon X", "X-Antibody");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gankoomon").click(function (e) {
  e.preventDefault();
  gankoomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gankoomon")) {
      gankoomon();
    } else if (hasClass(e.target, "gankoomon")) {
      gankoomon();
    }
  },
  false
);

function gigabreakdramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("GigaBreakdramon");
  replaceImage("gigabreakdramon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("breakdramon", "Breakdramon", "Accelerator + 500 Victories");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gigabreakdramon").click(function (e) {
  e.preventDefault();
  gigabreakdramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gigabreakdramon")) {
      gigabreakdramon();
    } else if (hasClass(e.target, "gigabreakdramon")) {
      gigabreakdramon();
    }
  },
  false
);

function goddramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Goddramon");
  replaceImage("goddramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("aeroveedramon", "AeroVeedramon", "50000 Holy Xp");
  evolveFromFrame("hisyaryumon", "Hisyaryumon", "50000 Holy Xp");
  evolveFromFrame("paildramon", "Paildramon", "50000 Holy Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".goddramon").click(function (e) {
  e.preventDefault();
  goddramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "goddramon")) {
      goddramon();
    } else if (hasClass(e.target, "goddramon")) {
      goddramon();
    }
  },
  false
);

function grankuwagamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("GranKuwagamon");
  replaceImage("grankuwagamon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "atlurkabuterimonred",
    "AtlurKabuterimon (Red)",
    "50000 Insect/Plant Xp"
  );
  evolveFromFrame("cherrymon", "Cherrymon", "50000 Insect/Plant Xp");
  evolveFromFrame("dinobeemon", "Dinobeemon", "Lvl 75");
  evolveFromFrame("jewelbeemon", "JewelBeemon", "Lvl 75");
  evolveFromFrame("okuwamon", "Okuwamon", "Lvl 75");
  evolveFromFrame("warumonzaemon", "WaruMonzaemon", "50000 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".grankuwagamon").click(function (e) {
  e.preventDefault();
  grankuwagamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "grankuwagamon")) {
      grankuwagamon();
    } else if (hasClass(e.target, "grankuwagamon")) {
      grankuwagamon();
    }
  },
  false
);

function griffomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Griffomon");
  replaceImage("griffomon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("deramon", "Deramon", "Lvl 75");
  evolveFromFrame("garudamon", "Garudamon", "50000 Bird Xp");
  evolveFromFrame("hippogriffomon", "Hippogriffomon", "Lvl 75");
  evolveFromFrame("parrotmon", "Parrotmon", "50000 Beast Xp");
  evolveFromFrame("skullbaluchimon", "SkullBaluchimon", "50000 Bird Xp");
  evolveFromFrame("silphymon", "Silphymon", "50000 Bird Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".griffomon").click(function (e) {
  e.preventDefault();
  griffomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "griffomon")) {
      griffomon();
    } else if (hasClass(e.target, "griffomon")) {
      griffomon();
    }
  },
  false
);

function heavyleomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("HeavyLeomon");
  replaceImage("heavyleomon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("loaderliomon", "LoaderLiomon", "Lvl 75");
  evolveFromFrame(
    "metalmamemon",
    "MetalMamemon",
    "50000 Beast Xp + 30000 Machine Xp + 20000 Def"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".heavyleomon").click(function (e) {
  e.preventDefault();
  heavyleomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "heavyleomon")) {
      heavyleomon();
    } else if (hasClass(e.target, "heavyleomon")) {
      heavyleomon();
    }
  },
  false
);

function herculeskabuterimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("HerculesKabuterimon");
  replaceImage("herculeskabuterimon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("tentomon", "Tentomon", "Warp Evolution");
  evolveFromFrame("atlurkabuterimonblue", "AtlurKabuterimon (Blue)", "Lvl 75");
  evolveFromFrame("atlurkabuterimonred", "AtlurKabuterimon (Red)", "Lvl 75");
  eraseOld(2);
  evolveToFrame(
    "tyrantkabuterimon",
    "TyrantKabuterimon",
    "Accelerator + 500 Victories"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".herculeskabuterimon").click(function (e) {
  e.preventDefault();
  herculeskabuterimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "herculeskabuterimon")) {
      herculeskabuterimon();
    } else if (hasClass(e.target, "herculeskabuterimon")) {
      herculeskabuterimon();
    }
  },
  false
);

function hiandromon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("HiAndromon");
  replaceImage("hiandromon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("andromon", "Andromon", "Lvl 75");
  evolveFromFrame("metalmamemon", "MetalMamemon", "Lvl 75");
  evolveFromFrame("vademon", "Vademon", "50000 Machine Xp");
  eraseOld(2);
  evolveToFrame("craniummon", "Craniummon", "Accelerator + 500 Victories");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".hiandromon").click(function (e) {
  e.preventDefault();
  hiandromon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "hiandromon")) {
      hiandromon();
    } else if (hasClass(e.target, "hiandromon")) {
      hiandromon();
    }
  },
  false
);

function hououmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Hououmon");
  replaceImage("hououmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("biyomon", "Biyomon", "Warp Evolution");
  evolveFromFrame("garudamon", "Garudamon", "Lvl 75");
  evolveFromFrame("parrotmon", "Parrotmon", "50000 Bird Xp");
  eraseOld(2);
  evolveToFrame("ornismon", "Ornismon", "Accelerator + 500 Victories");
  evolveToFrame(
    "valdurmon",
    "Valdurmon",
    "Accelerator + 10000 Holy Xp + 500 Victories"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".hououmon").click(function (e) {
  e.preventDefault();
  hououmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "hououmon")) {
      hououmon();
    } else if (hasClass(e.target, "hououmon")) {
      hououmon();
    }
  },
  false
);

function imperialdramondragon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Imperialdramon (Dragon Mode)");
  replaceImage("imperialdramondragon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("dinobeemon", "Dinobeemon", "50000 Dragon Xp");
  evolveFromFrame("orochimon", "Orochimon", "Lvl 75");
  evolveFromFrame("paildramon", "Paildramon", "Lvl 75");
  eraseOld(2);
  evolveToFrame(
    "blackimperialdramondragon",
    "Black Imperialdramon (Dragon Mode)",
    "Black Digitron"
  );
  evolveToFrame(
    "imperialdramonfighter",
    "Imperialdramon (Fighter Mode)",
    "Mode Selector"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".imperialdramondragon").click(function (e) {
  e.preventDefault();
  imperialdramondragon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "imperialdramondragon")) {
      imperialdramondragon();
    } else if (hasClass(e.target, "imperialdramondragon")) {
      imperialdramondragon();
    }
  },
  false
);

function imperialdramonfighter() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Imperialdramon (Dragon Mode)");
  replaceImage("imperialdramonfighter");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "imperialdramondragon",
    "Imperialdramon (Dragon Mode)",
    "Mode Selector"
  );
  eraseOld(2);
  evolveToFrame(
    "blackimperialdramonfighter",
    "Black Imperialdramon (Fighter Mode)",
    "Black Digitron"
  );
  evolveToFrame(
    "imperialdramonpaladin",
    "Imperialdramon (Paladin Mode)",
    "Jogress: Omegamon"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".imperialdramonfighter").click(function (e) {
  e.preventDefault();
  imperialdramonfighter();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "imperialdramonfighter")) {
      imperialdramonfighter();
    } else if (hasClass(e.target, "imperialdramonfighter")) {
      imperialdramonfighter();
    }
  },
  false
);

function jesmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Jesmon");
  replaceImage("jesmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("hackmon", "Hackmon", "Warp Evolution");
  evolveFromFrame("aeroveedramon", "AeroVeedramon", "50000 Dragon Xp");
  evolveFromFrame(
    "holyangemon",
    "HolyAngemon",
    "50000 Holy Xp + 16666 Dragon Xp"
  );
  evolveFromFrame("saviorhackmon", "SaviorHackmon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".jesmon").click(function (e) {
  e.preventDefault();
  jesmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "jesmon")) {
      jesmon();
    } else if (hasClass(e.target, "jesmon")) {
      jesmon();
    }
  },
  false
);

function junomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Junomon");
  replaceImage("junomon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "angewomon",
    "Angewomon",
    "50000 Holy Xp + Pleased Mood + Jupitermon in any Active slot"
  );
  eraseOld(2);
  evolveToFrame("junomonhysteric", "Junomon (Hysteric)", "Accelerator");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".junomon").click(function (e) {
  e.preventDefault();
  junomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "junomon")) {
      junomon();
    } else if (hasClass(e.target, "junomon")) {
      junomon();
    }
  },
  false
);

function junomonhysteric() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Junomon (Hysteric)");
  replaceImage("junomonhysteric");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("junomon", "Junomon", "Accelerator");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".junomonhysteric").click(function (e) {
  e.preventDefault();
  junomonhysteric();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "junomonhysteric")) {
      junomonhysteric();
    } else if (hasClass(e.target, "junomonhysteric")) {
      junomonhysteric();
    }
  },
  false
);

function jupitermon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Jupitermon");
  replaceImage("jupitermon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "aegiochusmon",
    "Aegiochusmon",
    "Lvl 80 + Chapter 20 + Child of Fate"
  );
  evolveFromFrame(
    "aegiochusmonblue",
    "Aegiochusmon Blue",
    "Lvl 80 + Chapter 20 + Child of Fate"
  );
  evolveFromFrame(
    "aegiochusmondark",
    "Aegiochusmon Dark",
    "Lvl 80 + Chapter 20 + Child of Fate"
  );
  evolveFromFrame(
    "aegiochusmongreen",
    "Aegiochusmon Green",
    "Lvl 80 + Chapter 20 + Child of Fate"
  );
  evolveFromFrame(
    "aegiochusmonholy",
    "Aegiochusmon Holy",
    "Lvl 80 + Chapter 20 + Child of Fate"
  );
  eraseOld(2);
  evolveToFrame("jupitermonwrath", "Jupitermon (Wrath)", "Accelerator");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".jupitermon").click(function (e) {
  e.preventDefault();
  jupitermon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "jupitermon")) {
      jupitermon();
    } else if (hasClass(e.target, "jupitermon")) {
      jupitermon();
    }
  },
  false
);

function jupitermonwrath() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Jupitermon (Wrath)");
  replaceImage("jupitermonwrath");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("jupitermon", "Jupitermon", "Accelerator");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".jupitermonwrath").click(function (e) {
  e.preventDefault();
  jupitermonwrath();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "jupitermonwrath")) {
      jupitermonwrath();
    } else if (hasClass(e.target, "jupitermonwrath")) {
      jupitermonwrath();
    }
  },
  false
);

function justimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Justimon");
  replaceImage("justimon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("monodramon", "Monodramon", "Warp Evolution");
  evolveFromFrame("cyberdramon", "Cyberdramon", "Lvl 75");
  evolveFromFrame("mamemon", "Mamemon", "Lvl 75");
  evolveFromFrame("pandamon", "Pandamon", "50000 Holy Xp");
  evolveFromFrame("superstarmon", "SuperStarmon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".justimon").click(function (e) {
  e.preventDefault();
  justimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "justimon")) {
      justimon();
    } else if (hasClass(e.target, "justimon")) {
      justimon();
    }
  },
  false
);

function kentaurosmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Kentaurosmon");
  replaceImage("kentaurosmon");
  attribute("va");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("kudamon", "Kudamon", "Warp Evolution");
  evolveFromFrame(
    "atlurkabuterimonblue",
    "AtlurKabuterimon (Blue)",
    "50000 Beast Xp"
  );
  evolveFromFrame("dorugreymon", "Dorugreymon", "50000 Holy Xp");
  evolveFromFrame("mamemon", "Mamemon", "50000 Holy Xp");
  evolveFromFrame("tyilinmon", "Tyilinmon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("ultimatechaosmon", "UltimateChaosmon", "Jogress: Chaosmon");
  evolveToFrame(
    "ultimatechaosmon",
    "UltimateChaosmon",
    "Jogress: Chaosmon (Valdur Arm)"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".kentaurosmon").click(function (e) {
  e.preventDefault();
  kentaurosmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "kentaurosmon")) {
      kentaurosmon();
    } else if (hasClass(e.target, "kentaurosmon")) {
      kentaurosmon();
    }
  },
  false
);

function kuzuhamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Kuzuhamon");
  replaceImage("kuzuhamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("ladydevimon", "LadyDevimon", "50000 Holy Xp");
  evolveFromFrame("yatagaramon", "Yatagaramon", "50000 Beast Xp");
  evolveFromFrame("sakuyamon", "Sakuyamon", "Accelerator + 500 Victories");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".kuzuhamon").click(function (e) {
  e.preventDefault();
  kuzuhamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "kuzuhamon")) {
      kuzuhamon();
    } else if (hasClass(e.target, "kuzuhamon")) {
      kuzuhamon();
    }
  },
  false
);

function leviamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Leviamon");
  replaceImage("leviamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bluemeramon", "BlueMeramon", "50000 Aquatic Xp");
  evolveFromFrame("crescemon", "Crescemon", "50000 Aquatic Xp");
  evolveFromFrame("marinedevimon", "MarineDevimon", "lvl 75");
  evolveFromFrame("shogungekomon", "ShogunGekomon", "50000 Dark Xp");
  evolveFromFrame("waruseadramon", "WaruSeadramon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("leviamonx", "Leviamon X", "X-Antibody");
  evolveToFrame(
    "ogudomon",
    "Ogudomon",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".leviamon").click(function (e) {
  e.preventDefault();
  leviamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "leviamon")) {
      leviamon();
    } else if (hasClass(e.target, "leviamon")) {
      leviamon();
    }
  },
  false
);

function lilithmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Lilithmon");
  replaceImage("lilithmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("arukenimon", "Arukenimon", "Lvl 75");
  evolveFromFrame("ladydevimon", "LadyDevimon", "Lvl 75");
  eraseOld(2);
  evolveToFrame(
    "ogudomon",
    "Ogudomon",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".lilithmon").click(function (e) {
  e.preventDefault();
  lilithmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "lilithmon")) {
      lilithmon();
    } else if (hasClass(e.target, "lilithmon")) {
      lilithmon();
    }
  },
  false
);

function lordknightmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("LordKnightmon");
  replaceImage("lordknightmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("holyangemon", "HolyAngemon", "50000 Holy Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".lordknightmon").click(function (e) {
  e.preventDefault();
  lordknightmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "lordknightmon")) {
      lordknightmon();
    } else if (hasClass(e.target, "lordknightmon")) {
      lordknightmon();
    }
  },
  false
);

function lotusmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Lotusmon");
  replaceImage("lotusmon");
  attribute("da");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("ladydevimon", "LadyDevimon", "50000 Insect/Plant Xp");
  evolveFromFrame("lilymon", "Lilymon", "50000 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame("rafflesimon", "Rafflesimon", "Jogress: Rosemon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".lotusmon").click(function (e) {
  e.preventDefault();
  lotusmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "lotusmon")) {
      lotusmon();
    } else if (hasClass(e.target, "lotusmon")) {
      lotusmon();
    }
  },
  false
);

function lucemonlarva() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Lucemon Larva");
  replaceImage("lucemonlarva");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("lucemonsm", "Lucemon Satan", "Mode Selector");
  eraseOld(2);
  evolveToFrame("lucemonsm", "Lucemon Satan", "Mode Selector");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".lucemonlarva").click(function (e) {
  e.preventDefault();
  lucemonlarva();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "lucemonlarva")) {
      lucemonlarva();
    } else if (hasClass(e.target, "lucemonlarva")) {
      lucemonlarva();
    }
  },
  false
);

function lucemonsm() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Lucemon Satan");
  replaceImage("lucemonsm");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("lucemonfm", "Lucemon Falldown", "Lvl 75");
  evolveFromFrame("lucemonlarva", "Lucemon Larva", "Mode Selector");
  eraseOld(2);
  evolveToFrame("lucemonlarva", "Lucemon Larva", "Mode Selector");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".lucemonsm").click(function (e) {
  e.preventDefault();
  lucemonsm();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "lucemonsm")) {
      lucemonsm();
    } else if (hasClass(e.target, "lucemonsm")) {
      lucemonsm();
    }
  },
  false
);

function magnadramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Magnadramon");
  replaceImage("magnadramon");
  attribute("va");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("salamon", "Salamon", "Warp Evolution");
  evolveFromFrame("angewomon", "Angewomon", "Lvl 75");
  evolveFromFrame("garudamon", "Garudamon", "50000 Holy Xp");
  evolveFromFrame("orochimon", "Orochimon", "50000 Holy Xp");
  evolveFromFrame("ophanimon", "Ophanimon", "Mode Selector");
  eraseOld(2);
  evolveToFrame("ophanimon", "Ophanimon", "Mode Selector");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".magnadramon").click(function (e) {
  e.preventDefault();
  magnadramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "magnadramon")) {
      magnadramon();
    } else if (hasClass(e.target, "magnadramon")) {
      magnadramon();
    }
  },
  false
);

function malomyotismon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MaloMyotismon");
  replaceImage("malomyotismon");
  attribute("vi");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame(
    "venommyotismon",
    "VenomMyotismon",
    "Accelerator + 500 Victories"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".malomyotismon").click(function (e) {
  e.preventDefault();
  malomyotismon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "malomyotismon")) {
      malomyotismon();
    } else if (hasClass(e.target, "malomyotismon")) {
      malomyotismon();
    }
  },
  false
);

function marineangemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MarineAngemon");
  replaceImage("marineangemon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("angewomon", "Angewomon", "50000 Aquatic Xp");
  evolveFromFrame("digitamamon", "Digitamamon", "50000 Aquatic Xp");
  evolveFromFrame("hippogriffomon", "Hippogriffomon", "50000 Aquatic Xp");
  evolveFromFrame("marinedevimon", "MarineDevimon", "50000 Holy Xp");
  evolveFromFrame("sirenmon", "Sirenmon", "50000 Aquatic Xp");
  evolveFromFrame("whamon", "Whamon", "50000 Holy Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".marineangemon").click(function (e) {
  e.preventDefault();
  marineangemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "marineangemon")) {
      marineangemon();
    } else if (hasClass(e.target, "marineangemon")) {
      marineangemon();
    }
  },
  false
);

function marsmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Marsmon");
  replaceImage("marsmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("asuramon", "Asuramon", "Lvl 80");
  evolveFromFrame("flaremon", "Flaremon", "Lvl 80");
  evolveFromFrame(
    "skullmeramon",
    "SkullMeramon",
    "50000 Beast Xp + Indiferent Mood"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".marsmon").click(function (e) {
  e.preventDefault();
  marsmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "marsmon")) {
      marsmon();
    } else if (hasClass(e.target, "marsmon")) {
      marsmon();
    }
  },
  false
);

function megagargomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MegaGargomon");
  replaceImage("megagargomon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("terriermon", "Terriermon", "Warp Evolution");
  evolveFromFrame("cannonbeemon", "Cannonbeemon", "50000 Machine Xp");
  evolveFromFrame("etemon", "Etemon", "50000 Machine Xp");
  evolveFromFrame("metalmamemon", "MetalMamemon", "50000 Beast Xp");
  evolveFromFrame("rapidmon", "Rapidmon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".megagargomon").click(function (e) {
  e.preventDefault();
  megagargomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "megagargomon")) {
      megagargomon();
    } else if (hasClass(e.target, "megagargomon")) {
      megagargomon();
    }
  },
  false
);

function megidramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Megidramon");
  replaceImage("megidramon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("brachimon", "Brachimon", "50000 Dark Xp");
  evolveFromFrame("gigadramon", "Gigadramon", "Lvl 75");
  evolveFromFrame("groundramon", "Groundramon", "50000 Dark Xp");
  evolveFromFrame("kimeramon", "Kimeramon", "Lvl 75");
  evolveFromFrame("paildramon", "Paildramon", "50000 Dark Xp");
  evolveFromFrame("wargrowlmon", "WarGrowlmon", "50000 Dark Xp");
  evolveFromFrame("chaosdukemon", "ChaosDukemon", "Mode Selector");
  eraseOld(2);
  evolveToFrame("chaosdukemon", "ChaosDukemon", "Mode Selector");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".megidramon").click(function (e) {
  e.preventDefault();
  megidramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "megidramon")) {
      megidramon();
    } else if (hasClass(e.target, "megidramon")) {
      megidramon();
    }
  },
  false
);

function merukimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Merukimon");
  replaceImage("merukimon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("cerberumon", "Cerberumon", "50000 Beast Xp");
  evolveFromFrame("pandamon", "Pandamon", "50000 Beast Xp");
  evolveFromFrame(
    "weregarurumonblack",
    "WereGarurumon (Black)",
    "50000 Beast Xp"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".merukimon").click(function (e) {
  e.preventDefault();
  merukimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "merukimon")) {
      merukimon();
    } else if (hasClass(e.target, "merukimon")) {
      merukimon();
    }
  },
  false
);

function mervamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Mervamon");
  replaceImage("mervamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("minervamon", "Minervamon", "Accelerator");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".mervamon").click(function (e) {
  e.preventDefault();
  mervamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "mervamon")) {
      mervamon();
    } else if (hasClass(e.target, "mervamon")) {
      mervamon();
    }
  },
  false
);

function metaletemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MetalEtemon");
  replaceImage("metaletemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blackkingnumemon", "BlackKingNumemon", "50000 Machine Xp");
  evolveFromFrame("etemon", "Etemon", "Lvl 75");
  evolveFromFrame("garbagemon", "Garbagemon", "Lvl 75");
  evolveFromFrame("loaderliomon", "LoaderLiomon", "40 Defeats");
  evolveFromFrame("meteormon", "Meteormon", "Lvl 75");
  evolveFromFrame("monzaemon", "Monzaemon", "Lvl 75");
  evolveFromFrame("warumonzaemon", "WaruMonzaemon", "Lvl 75");
  evolveFromFrame("waruseadramon", "WaruSeadramon", "35 Defeats");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".metaletemon").click(function (e) {
  e.preventDefault();
  metaletemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "metaletemon")) {
      metaletemon();
    } else if (hasClass(e.target, "metaletemon")) {
      metaletemon();
    }
  },
  false
);

function metalgarurumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MetalGarurumon");
  replaceImage("metalgarurumon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gabumon", "Gabumon", "Warp Evolution");
  evolveFromFrame("brachimon", "Brachimon", "50000 Machine Xp");
  evolveFromFrame("machgaogamon", "MachGaogamon", "50000 Beast Xp");
  evolveFromFrame("meteormon", "Meteormon", "50000 Beast Xp");
  evolveFromFrame("paildramon", "Paildramon", "50000 Beast Xp");
  evolveFromFrame("pandamon", "Pandamon", "Lvl 75");
  evolveFromFrame("parrotmon", "Parrotmon", "50000 Machine Xp");
  evolveFromFrame("tyilinmon", "Tyilinmon", "50000 Beast Xp");
  evolveFromFrame("weregarurumon", "WereGarurumon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("blackmetalgarurumon", "BlackMetalGarurumon", "Black Digitron");
  evolveToFrame(
    "zeedgarurumon",
    "ZeedGarurumon",
    "Accelerator + 500 Victories"
  );
  evolveToFrame("omegamon", "Omegamon", "Jogress: WarGreymon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".metalgarurumon").click(function (e) {
  e.preventDefault();
  metalgarurumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "metalgarurumon")) {
      metalgarurumon();
    } else if (hasClass(e.target, "metalgarurumon")) {
      metalgarurumon();
    }
  },
  false
);

function metalseadramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MetalSeadramon");
  replaceImage("metalseadramon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("brachimon", "Brachimon", "50000 Aquatic Xp + 10000 Def");
  evolveFromFrame("marinedevimon", "MarineDevimon", "50000 Aquatic Xp");
  evolveFromFrame("megaseadramon", "MegaSeadramon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("chaosseadramon", "ChaosSeadramon", "Chaos Core");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".metalseadramon").click(function (e) {
  e.preventDefault();
  metalseadramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "metalseadramon")) {
      metalseadramon();
    } else if (hasClass(e.target, "metalseadramon")) {
      metalseadramon();
    }
  },
  false
);

function millenniumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Millenniumon");
  replaceImage("millenniumon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("kimeramon", "Kimeramon", "Jogress: Mugendramon");
  evolveFromFrame("mugendramon", "Mugendramon", "Jogress: Kimeramon");
  eraseOld(2);
  evolveToFrame("moonmillenniumon", "MoonMillenniumon", "Jogress: Devitamamon");
  evolveToFrame(
    "zeedmillenniumon",
    "Zeed Millenniumon",
    "Jogress: MoonMillenniumon + 50 Chained Paradox"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".millenniumon").click(function (e) {
  e.preventDefault();
  millenniumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "millenniumon")) {
      millenniumon();
    } else if (hasClass(e.target, "millenniumon")) {
      millenniumon();
    }
  },
  false
);

function minervamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Minervamon");
  replaceImage("minervamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("digitamamon", "Digitamamon", "50000 Holy Xp");
  evolveFromFrame("hisyaryumon", "Hisyaryumon", "Lvl 75 + Cherry Mood");
  eraseOld(2);
  evolveToFrame("mervamon", "Mervamon", "Accelerator");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".minervamon").click(function (e) {
  e.preventDefault();
  minervamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "minervamon")) {
      minervamon();
    } else if (hasClass(e.target, "minervamon")) {
      minervamon();
    }
  },
  false
);

function miragegaogamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MirageGaogamon");
  replaceImage("miragegaogamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gaomon", "Gaomon", "Warp Evolution");
  evolveFromFrame("bluemeramon", "BlueMeramon", "50000 Beast Xp");
  evolveFromFrame("flaremon", "Flaremon", "50000 Beast Xp");
  evolveFromFrame("machgaogamon", "MachGaogamon", "Lvl 75");
  evolveFromFrame("weregarurumon", "WereGarurumon", "50000 Holy Xp");
  evolveFromFrame(
    "weregarurumonblack",
    "WereGarurumon (Black)",
    "50000 Machine Xp"
  );
  eraseOld(2);
  evolveToFrame(
    "miragegaogamonbm",
    "MirageGaogamon (Burst Mode)",
    "Accelerator + 500 Victories"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".miragegaogamon").click(function (e) {
  e.preventDefault();
  miragegaogamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "miragegaogamon")) {
      miragegaogamon();
    } else if (hasClass(e.target, "miragegaogamon")) {
      miragegaogamon();
    }
  },
  false
);

function miragegaogamonbm() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MirageGaogamon (Burst Mode)");
  replaceImage("miragegaogamonbm");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "miragegaogamon",
    "MirageGaogamon",
    "Accelerator + 500 Victories"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".miragegaogamonbm").click(function (e) {
  e.preventDefault();
  miragegaogamonbm();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "miragegaogamonbm")) {
      miragegaogamonbm();
    } else if (hasClass(e.target, "miragegaogamonbm")) {
      miragegaogamonbm();
    }
  },
  false
);

function mugendramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Mugendramon");
  replaceImage("mugendramon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("datamon", "Datamon", "Lvl 75");
  evolveFromFrame("mamemon", "Mamemon", "50000 Dark Xp");
  evolveFromFrame("metalgreymon", "MetalGreymon", "50000 Machine Xp");
  evolveFromFrame(
    "metalgreymonvirus",
    "MetalGreymon (Virus)",
    "50000 Machine Xp"
  );
  evolveFromFrame("metaltyranomon", "MetalTyranomon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("chaosdramon", "Chaosdramon", "Accelerator + 500 Victories");
  evolveToFrame("millenniumon", "Millenniumon", "Jogress: Kimeramon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".mugendramon").click(function (e) {
  e.preventDefault();
  mugendramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "mugendramon")) {
      mugendramon();
    } else if (hasClass(e.target, "mugendramon")) {
      mugendramon();
    }
  },
  false
);

function negamonevolved() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Negamon Evolved");
  replaceImage("negamonevolved");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("negamon", "Negamon", "Angry Mood");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".negamonevolved").click(function (e) {
  e.preventDefault();
  negamonevolved();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "negamonevolved")) {
      negamonevolved();
    } else if (hasClass(e.target, "negamonevolved")) {
      negamonevolved();
    }
  },
  false
);

function neptunemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Neptunemon");
  replaceImage("neptunemon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("dagomon", "Dagomon", "Lvl 75");
  evolveFromFrame("megaseadramon", "MegaSeadramon", "50000 Aquatic Xp");
  evolveFromFrame("whamon", "Whamon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".neptunemon").click(function (e) {
  e.preventDefault();
  neptunemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "neptunemon")) {
      neptunemon();
    } else if (hasClass(e.target, "neptunemon")) {
      neptunemon();
    }
  },
  false
);

function nidhoggmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Nidhoggmon");
  replaceImage("nidhoggmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "orochimon",
    "Orochimon",
    "500 Victories + 50000 Dragon Xp + 50000 Dark Xp + 15000 Sp. Atk"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".nidhoggmon").click(function (e) {
  e.preventDefault();
  nidhoggmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "nidhoggmon")) {
      nidhoggmon();
    } else if (hasClass(e.target, "nidhoggmon")) {
      nidhoggmon();
    }
  },
  false
);

function omegashoutmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("OmegaShoutmon");
  replaceImage("omegashoutmon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("shoutmon", "Shoutmon", "Accelerator + 500 Victories");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".omegashoutmon").click(function (e) {
  e.preventDefault();
  omegashoutmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "omegashoutmon")) {
      omegashoutmon();
    } else if (hasClass(e.target, "omegashoutmon")) {
      omegashoutmon();
    }
  },
  false
);

function ophanimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ophanimon");
  replaceImage("ophanimon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("salamon", "Salamon", "Warp Evolution");
  evolveFromFrame("angewomon", "Angewomon", "50000 Holy Xp");
  evolveFromFrame(
    "meicrackmonvicious",
    "Meicrackmon (Vicious)",
    "50000 Holy Xp"
  );
  evolveFromFrame("silphymon", "Silphymon", "Jogress: Taomon");
  evolveFromFrame("taomon", "Taomon", "Jogress: Silphymon");
  evolveFromFrame("magnadramon", "Magnadramon", "Mode Selector");
  eraseOld(2);
  evolveToFrame("magnadramon", "Magnadramon", "Mode Selector");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ophanimon").click(function (e) {
  e.preventDefault();
  ophanimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ophanimon")) {
      ophanimon();
    } else if (hasClass(e.target, "ophanimon")) {
      ophanimon();
    }
  },
  false
);

function ornismon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ornismon");
  replaceImage("ornismon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("hippogriffomon", "Hippogriffomon", "50000 Bird Xp");
  evolveFromFrame("parrotmon", "Parrotmon", "50000 Dark Xp");
  evolveFromFrame("hououmon", "Hououmon", "Accelerator + 500 Victories");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ornismon").click(function (e) {
  e.preventDefault();
  ornismon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ornismon")) {
      ornismon();
    } else if (hasClass(e.target, "ornismon")) {
      ornismon();
    }
  },
  false
);

function ouryumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ouryumon");
  replaceImage("ouryumon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("cannonbeemon", "Cannonbeemon", "50000 Dragon Xp");
  evolveFromFrame("hisyaryumon", "Hisyaryumon", "Lvl 75");
  evolveFromFrame("yatagaramon", "Yatagaramon", "50000 Holy Xp");
  eraseOld(2);
  evolveToFrame("alphamonouryuken", "Alphamon Ouryuken", "Jogress: Alphamon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ouryumon").click(function (e) {
  e.preventDefault();
  ouryumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ouryumon")) {
      ouryumon();
    } else if (hasClass(e.target, "ouryumon")) {
      ouryumon();
    }
  },
  false
);

function piedmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Piedmon");
  replaceImage("piedmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bluemeramon", "BlueMeramon", "Jogress: Phantomon");
  evolveFromFrame("etemon", "Etemon", "50000 Dark Xp");
  evolveFromFrame("monzaemon", "Monzaemon", "50000 Dark Xp");
  evolveFromFrame("myotismon", "Myotismon", "50000 Dark Xp");
  evolveFromFrame("phantomon", "Phantomon", "Jogress: BlueMeramon");
  evolveFromFrame("phantomon", "Phantomon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("chaospiedmon", "ChaosPiedmon", "Chaos Core");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".piedmon").click(function (e) {
  e.preventDefault();
  piedmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "piedmon")) {
      piedmon();
    } else if (hasClass(e.target, "piedmon")) {
      piedmon();
    }
  },
  false
);

function platinumnumemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("PlatinumNumemon");
  replaceImage("platinumnumemon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blackkingnumemon", "BlackKingNumemon", "Lvl 75");
  evolveFromFrame("datamon", "Datamon", "50 Defeats");
  evolveFromFrame("etemon", "Etemon", "50000 Holy Xp");
  evolveFromFrame("garbagemon", "Garbagemon", "50000 Holy Xp");
  evolveFromFrame("monzaemon", "Monzaemon", "50 Defeats");
  evolveFromFrame("skullbaluchimon", "SkullBaluchimon", "50 Defeats");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".platinumnumemon").click(function (e) {
  e.preventDefault();
  platinumnumemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "platinumnumemon")) {
      platinumnumemon();
    } else if (hasClass(e.target, "platinumnumemon")) {
      platinumnumemon();
    }
  },
  false
);

function plesiomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Plesiomon");
  replaceImage("plesiomon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("anomalocarimon", "Anomalocarimon", "Lvl 75");
  evolveFromFrame("brachimon", "Brachimon", "50000 Aquatic Xp");
  evolveFromFrame("shogungekomon", "ShogunGekomon", "50000 Aquatic Xp");
  evolveFromFrame("whamon", "Whamon", "50000 Aquatic Xp");
  evolveFromFrame("zudomon", "Zudomon", "50000 Aquatic Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".plesiomon").click(function (e) {
  e.preventDefault();
  plesiomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "plesiomon")) {
      plesiomon();
    } else if (hasClass(e.target, "plesiomon")) {
      plesiomon();
    }
  },
  false
);

function plutomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Plutomon");
  replaceImage("plutomon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "cerberumon",
    "Cerberumon",
    "50000 Dark Xp + Chapter 20 + Child of Fate"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".plutomon").click(function (e) {
  e.preventDefault();
  plutomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "plutomon")) {
      plutomon();
    } else if (hasClass(e.target, "plutomon")) {
      plutomon();
    }
  },
  false
);

function pukumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Pukumon");
  replaceImage("pukumon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("shogungekomon", "ShogunGekomon", "Lvl 75");
  evolveFromFrame("waruseadramon", "WaruSeadramon", "50000 Aquatic Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".pukumon").click(function (e) {
  e.preventDefault();
  pukumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "pukumon")) {
      pukumon();
    } else if (hasClass(e.target, "pukumon")) {
      pukumon();
    }
  },
  false
);

function puppetmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Puppetmon");
  replaceImage("puppetmon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("cherrymon", "Cherrymon", "Lvl 75");
  evolveFromFrame("mamemon", "Mamemon", "50000 Insect/Plant Xp");
  evolveFromFrame("pumpkinmon", "Pumpkinmon", "50000 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".puppetmon").click(function (e) {
  e.preventDefault();
  puppetmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "puppetmon")) {
      puppetmon();
    } else if (hasClass(e.target, "puppetmon")) {
      puppetmon();
    }
  },
  false
);

function ragnamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ragnamon");
  replaceImage("ragnamon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("snatchmon", "Snatchmon", "Lvl 80 + 30 Guslinger Fragment");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ragnamon").click(function (e) {
  e.preventDefault();
  ragnamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ragnamon")) {
      ragnamon();
    } else if (hasClass(e.target, "ragnamon")) {
      ragnamon();
    }
  },
  false
);

function raguelmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Raguelmon");
  replaceImage("raguelmon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "meicoomon",
    "Meicoomon",
    "Warp Evolution + Holy Xp < Dark Xp"
  );
  evolveFromFrame("meicrackmonvicious", "Meicrackmon (Vicious)", "Lvl 75");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".raguelmon").click(function (e) {
  e.preventDefault();
  raguelmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "raguelmon")) {
      raguelmon();
    } else if (hasClass(e.target, "raguelmon")) {
      raguelmon();
    }
  },
  false
);

function rasielmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Rasielmon");
  replaceImage("rasielmon");
  attribute("va");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame(
    "meicoomon",
    "Meicoomon",
    "Warp Evolution + Holy Xp > Dark Xp"
  );
  evolveFromFrame("meicrackmon", "Meicrackmon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".rasielmon").click(function (e) {
  e.preventDefault();
  rasielmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "rasielmon")) {
      rasielmon();
    } else if (hasClass(e.target, "rasielmon")) {
      rasielmon();
    }
  },
  false
);

function ravemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ravemon");
  replaceImage("ravemon");
  attribute("va");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("falcomon2", "Falcomon (2006)", "Warp Evolution");
  evolveFromFrame("aeroveedramon", "AeroVeedramon", "50000 Bird Xp");
  evolveFromFrame("parrotmon", "Parrotmon", "50000 Dark Xp");
  evolveFromFrame("yatagaramon", "Yatagaramon", "Lvl 75");
  eraseOld(2);
  evolveToFrame(
    "ravemonbm",
    "Ravemon (Burst Mode)",
    "Accelerator + 500 Victories"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ravemon").click(function (e) {
  e.preventDefault();
  ravemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ravemon")) {
      ravemon();
    } else if (hasClass(e.target, "ravemon")) {
      ravemon();
    }
  },
  false
);

function ravemonbm() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ravemon (Burst Mode)");
  replaceImage("ravemonbm");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("ravemon", "Ravemon", "Accelerator + 500 Victories");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ravemonbm").click(function (e) {
  e.preventDefault();
  ravemonbm();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ravemonbm")) {
      ravemonbm();
    } else if (hasClass(e.target, "ravemonbm")) {
      ravemonbm();
    }
  },
  false
);

function reapermon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Reapermon");
  replaceImage("reapermon");
  attribute("vi");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame(
    "andromon",
    "Andromon",
    "50000 Dark Xp + 500 Victories + 30 Defeats"
  );
  evolveFromFrame(
    "datamon",
    "Datamon",
    "50000 Dark Xp + 500 Victories + 30 Defeats"
  );
  evolveFromFrame(
    "infermon",
    "Infermon",
    "50000 Dark Xp + 500 Victories + 30 Defeats"
  );
  evolveFromFrame(
    "skullsatamon",
    "SkullSatamon",
    "50000 Dark Xp + 500 Victories + 30 Defeats"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".reapermon").click(function (e) {
  e.preventDefault();
  reapermon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "reapermon")) {
      reapermon();
    } else if (hasClass(e.target, "reapermon")) {
      reapermon();
    }
  },
  false
);

function regulumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Regulumon");
  replaceImage("regulumon");
  attribute("un");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("panjyamon", "Panjyamon", "50000 Beast Xp + 500 Victories");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".regulumon").click(function (e) {
  e.preventDefault();
  regulumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "regulumon")) {
      regulumon();
    } else if (hasClass(e.target, "regulumon")) {
      regulumon();
    }
  },
  false
);

function rosemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Rosemon");
  replaceImage("rosemon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("palmon", "Palmon", "Warp Evolution");
  evolveFromFrame("crescemon", "Crescemon", "50000 Insect/Plant Xp");
  evolveFromFrame("flaremon", "Flaremon", "50000 Insect/Plant Xp");
  evolveFromFrame("lilymon", "Lilymon", "Lvl 75");
  evolveFromFrame(
    "meicrackmonvicious",
    "Meicrackmon (Vicious)",
    "50000 Insect/Plant Xp"
  );
  evolveFromFrame("vermilimon", "Vermilimon", "50000 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame(
    "rosemonbm",
    "Rosemon (Burst Mode)",
    "Accelerator + 500 Victories"
  );
  evolveToFrame("rafflesimon", "Rafflesimon", "Jogress: Lotusmon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".rosemon").click(function (e) {
  e.preventDefault();
  rosemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "rosemon")) {
      rosemon();
    } else if (hasClass(e.target, "rosemon")) {
      rosemon();
    }
  },
  false
);

function rosemonbm() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Rosemon (Burst Mode)");
  replaceImage("rosemonbm");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("rosemon", "Rosemon", "Accelerator + 500 Victories");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".rosemonbm").click(function (e) {
  e.preventDefault();
  rosemonbm();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "rosemonbm")) {
      rosemonbm();
    } else if (hasClass(e.target, "rosemonbm")) {
      rosemonbm();
    }
  },
  false
);

function rusttyranomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("RustTyranomon");
  replaceImage("rusttyranomon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gigadramon", "Gigadramon", "50000 Machine Xp");
  evolveFromFrame("metaltyranomon", "MetalTyranomon", "50000 Dragon Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".rusttyranomon").click(function (e) {
  e.preventDefault();
  rusttyranomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "rusttyranomon")) {
      rusttyranomon();
    } else if (hasClass(e.target, "rusttyranomon")) {
      rusttyranomon();
    }
  },
  false
);

function saberleomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("SaberLeomon");
  replaceImage("saberleomon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("leomon", "Leomon", "Warp Evolution");
  evolveFromFrame("monzaemon", "Monzaemon", "50000 Beast Xp");
  evolveFromFrame("panjyamon", "Panjyamon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".saberleomon").click(function (e) {
  e.preventDefault();
  saberleomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "saberleomon")) {
      saberleomon();
    } else if (hasClass(e.target, "saberleomon")) {
      saberleomon();
    }
  },
  false
);

function sakuyamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Sakuyamon");
  replaceImage("sakuyamon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("renamon", "Renamon", "Warp Evolution");
  evolveFromFrame("lilymon", "Lilymon", "50000 Holy Xp");
  evolveFromFrame("silphymon", "Silphymon", "50000 Beast Xp");
  evolveFromFrame("taomon", "Taomon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("kuzuhamon", "Kuzuhamon", "Accelerator + 500 Victories");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".sakuyamon").click(function (e) {
  e.preventDefault();
  sakuyamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "sakuyamon")) {
      sakuyamon();
    } else if (hasClass(e.target, "sakuyamon")) {
      sakuyamon();
    }
  },
  false
);

function seraphimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Seraphimon");
  replaceImage("seraphimon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("patamon", "Patamon", "Warp Evolution");
  evolveFromFrame("andromon", "Andromon", "50000 Holy Xp");
  evolveFromFrame("hippogriffomon", "Hippogriffomon", "50000 Holy Xp");
  evolveFromFrame("holyangemon", "HolyAngemon", "Lvl 75");
  evolveFromFrame("lucemonfm", "Lucemon Falldown", "50000 Holy Xp");
  evolveFromFrame("monzaemon", "Monzaemon", "50000 Holy Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".seraphimon").click(function (e) {
  e.preventDefault();
  seraphimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "seraphimon")) {
      seraphimon();
    } else if (hasClass(e.target, "seraphimon")) {
      seraphimon();
    }
  },
  false
);

function shinegreymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ShineGreymon");
  replaceImage("shinegreymon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("holyangemon", "HolyAngemon", "50000 Dragon Xp");
  evolveFromFrame("rizegreymon", "RizeGreymon", "Lvl 75");
  eraseOld(2);
  evolveToFrame(
    "shinegreymonbm",
    "ShineGreymon (Burst Mode)",
    "Accelerator + 500 Victories"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".shinegreymon").click(function (e) {
  e.preventDefault();
  shinegreymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "shinegreymon")) {
      shinegreymon();
    } else if (hasClass(e.target, "shinegreymon")) {
      shinegreymon();
    }
  },
  false
);

function shinegreymonbm() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ShineGreymon (Burst Mode)");
  replaceImage("shinegreymonbm");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "shinegreymon",
    "ShineGreymon",
    "Accelerator + 500 Victories"
  );
  evolveFromFrame(
    "shinegreymonrm",
    "ShineGreymon (Ruin Mode)",
    "Mode Selector"
  );
  eraseOld(2);
  evolveToFrame("shinegreymonrm", "ShineGreymon (Ruin Mode)", "Mode Selector");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".shinegreymonbm").click(function (e) {
  e.preventDefault();
  shinegreymonbm();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "shinegreymonbm")) {
      shinegreymonbm();
    } else if (hasClass(e.target, "shinegreymonbm")) {
      shinegreymonbm();
    }
  },
  false
);

function shinegreymonrm() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ShineGreymon (Ruin Mode)");
  replaceImage("shinegreymonrm");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "shinegreymonbm",
    "ShineGreymon (Burst Mode)",
    "Mode Selector"
  );
  eraseOld(2);
  evolveToFrame("shinegreymonbm", "ShineGreymon (Burst Mode)", "Mode Selector");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".shinegreymonrm").click(function (e) {
  e.preventDefault();
  shinegreymonrm();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "shinegreymonrm")) {
      shinegreymonrm();
    } else if (hasClass(e.target, "shinegreymonrm")) {
      shinegreymonrm();
    }
  },
  false
);

function skullmammothmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("SkullMammothmon");
  replaceImage("skullmammothmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("mammothmon", "Mammothmon", "Lvl 75");
  evolveFromFrame("skullbaluchimon", "SkullBaluchimon", "50 Defeats");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".skullmammothmon").click(function (e) {
  e.preventDefault();
  skullmammothmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "skullmammothmon")) {
      skullmammothmon();
    } else if (hasClass(e.target, "skullmammothmon")) {
      skullmammothmon();
    }
  },
  false
);

function slayerdramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Slayerdramon");
  replaceImage("slayerdramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("saviorhackmon", "SaviorHackmon", "50000 Dragon Xp");
  evolveFromFrame("wingdramon", "Wingdramon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("examon", "Examon", "Jogress: Breakdramon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".slayerdramon").click(function (e) {
  e.preventDefault();
  slayerdramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "slayerdramon")) {
      slayerdramon();
    } else if (hasClass(e.target, "slayerdramon")) {
      slayerdramon();
    }
  },
  false
);

function spinomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Spinomon");
  replaceImage("spinomon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("dorugreymon", "Dorugreymon", "50000 Dragon Xp");
  evolveFromFrame("triceramon", "Triceramon", "50000 Dragon Xp");
  evolveFromFrame("yatagaramon", "Yatagaramon", "50000 Dragon Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".spinomon").click(function (e) {
  e.preventDefault();
  spinomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "spinomon")) {
      spinomon();
    } else if (hasClass(e.target, "spinomon")) {
      spinomon();
    }
  },
  false
);

function tigervespamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("TigerVespamon");
  replaceImage("tigervespamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("andromon", "Andromon", "50000 Insect/Plant Xp");
  evolveFromFrame("cannonbeemon", "Cannonbeemon", "Lvl 75");
  evolveFromFrame("dinobeemon", "Dinobeemon", "Lvl 75");
  evolveFromFrame("rapidmon", "Rapidmon", "50000 Insect/Plant Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".tigervespamon").click(function (e) {
  e.preventDefault();
  tigervespamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "tigervespamon")) {
      tigervespamon();
    } else if (hasClass(e.target, "tigervespamon")) {
      tigervespamon();
    }
  },
  false
);

function titamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Titamon");
  replaceImage("titamon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("cyberdramon", "Cyberdramon", "50000 Dark Xp");
  evolveFromFrame("digitamamon", "Digitamamon", "50000 Dark Xp");
  evolveFromFrame("skullgreymon", "SkullGreymon", "50000 Dark Xp");
  evolveFromFrame("zudomon", "Zudomon", "50000 Dark Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".titamon").click(function (e) {
  e.preventDefault();
  titamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "titamon")) {
      titamon();
    } else if (hasClass(e.target, "titamon")) {
      titamon();
    }
  },
  false
);

function tyrantkabuterimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("TyrantKabuterimon");
  replaceImage("tyrantkabuterimon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "herculeskabuterimon",
    "HerculesKabuterimon",
    "Accelerator + 500 Victories"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".tyrantkabuterimon").click(function (e) {
  e.preventDefault();
  tyrantkabuterimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "tyrantkabuterimon")) {
      tyrantkabuterimon();
    } else if (hasClass(e.target, "tyrantkabuterimon")) {
      tyrantkabuterimon();
    }
  },
  false
);

function ulforceveedramon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("UlforceVeedramon");
  replaceImage("ulforceveedramon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("aeroveedramon", "AeroVeedramon", "Lvl 75");
  evolveFromFrame("megadramon", "Megadramon", "50000 Holy Xp");
  evolveFromFrame("paildramon", "Paildramon", "50000 Dragon Xp");
  evolveFromFrame("wingdramon", "Wingdramon", "50000 Holy Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ulforceveedramon").click(function (e) {
  e.preventDefault();
  ulforceveedramon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ulforceveedramon")) {
      ulforceveedramon();
    } else if (hasClass(e.target, "ulforceveedramon")) {
      ulforceveedramon();
    }
  },
  false
);

function valdurmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Valdurmon");
  replaceImage("valdurmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("mamemon", "Mamemon", "50000 Bird Xp");
  evolveFromFrame("paildramon", "Paildramon", "50000 Bird Xp");
  evolveFromFrame("sirenmon", "Sirenmon", "Lvl 75");
  evolveFromFrame("skullbaluchimon", "SkullBaluchimon", "50000 Holy Xp");
  evolveFromFrame(
    "hououmon",
    "Hououmon",
    "Accelerator + 10000 Holy Xp + 500 Victories"
  );
  eraseOld(2);
  evolveToFrame("chaosmonvm", "Chaosmon (Valdur Arm)", "Jogress: BanchoLeomon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".valdurmon").click(function (e) {
  e.preventDefault();
  valdurmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "valdurmon")) {
      valdurmon();
    } else if (hasClass(e.target, "valdurmon")) {
      valdurmon();
    }
  },
  false
);

function valkyrimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Valkyrimon");
  replaceImage("valkyrimon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("angewomon", "Angewomon", "Jogress: Deramon");
  evolveFromFrame("deramon", "Deramon", "Jogress: Angewomon");
  evolveFromFrame("kimeramon", "Kimeramon", "50000 Bird Xp");
  evolveFromFrame("saviorhackmon", "SaviorHackmon", "50000 Holy Xp");
  evolveFromFrame("silphymon", "Silphymon", "Lvl 75");
  evolveFromFrame("taomon", "Taomon", "50000 Holy Xp");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".valkyrimon").click(function (e) {
  e.preventDefault();
  valkyrimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "valkyrimon")) {
      valkyrimon();
    } else if (hasClass(e.target, "valkyrimon")) {
      valkyrimon();
    }
  },
  false
);

function venommyotismon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("VenomMyotismon");
  replaceImage("venommyotismon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("infermon", "Infermon", "50000 Dark Xp");
  evolveFromFrame("lucemonfm", "Lucemon Falldown", "50000 Dark Xp");
  evolveFromFrame("myotismon", "Myotismon", "Lvl 75");
  evolveFromFrame("phantomon", "Phantomon", "50000 Beast Xp");
  evolveFromFrame("wisemon", "Wisemon", "50000 Dark Xp");
  eraseOld(2);
  evolveToFrame(
    "malomyotismon",
    "MaloMyotismon",
    "Accelerator + 500 Victories"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".venommyotismon").click(function (e) {
  e.preventDefault();
  venommyotismon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "venommyotismon")) {
      venommyotismon();
    } else if (hasClass(e.target, "venommyotismon")) {
      venommyotismon();
    }
  },
  false
);

function venusmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Venusmon");
  replaceImage("venusmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("angewomon", "Angewomon", "Lvl 75 + Cherry Mood");
  evolveFromFrame("meicrackmon", "Meicrackmon", "Lvl 75 + Cherry Mood");
  evolveFromFrame("mistymon", "Mistymon", "Lvl 75 + Cherry Mood");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".venusmon").click(function (e) {
  e.preventDefault();
  venusmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "venusmon")) {
      venusmon();
    } else if (hasClass(e.target, "venusmon")) {
      venusmon();
    }
  },
  false
);

function victorygreymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("VictoryGreymon");
  replaceImage("victorygreymon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("flaremon", "Flaremon", "50000 Dragon Xp");
  evolveFromFrame(
    "rizegreymon",
    "RizeGreymon",
    "500 Victories + 50000 Dragon Xp"
  );
  evolveFromFrame("wargreymon", "WarGreymon", "Accelerator + 500 Victories");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".victorygreymon").click(function (e) {
  e.preventDefault();
  victorygreymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "victorygreymon")) {
      victorygreymon();
    } else if (hasClass(e.target, "victorygreymon")) {
      victorygreymon();
    }
  },
  false
);

function vikemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Vikemon");
  replaceImage("vikemon");
  attribute("un");
  replaceAttacks("m", "m");
  eraseOld(1);
  evolveFromFrame("gomamon", "Gomamon", "Warp Evolution");
  evolveFromFrame("groundramon", "Groundramon", "50000 Aquatic Xp");
  evolveFromFrame("rapidmon", "Rapidmon", "50000 Aquatic Xp");
  evolveFromFrame("shakkoumon", "Shakkoumon", "Lvl 75");
  evolveFromFrame("weregarurumon", "WereGarurumon", "Jogress: Whamon");
  evolveFromFrame("whamon", "Whamon", "Jogress: WereGarurumon");
  evolveFromFrame("zudomon", "Zudomon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".vikemon").click(function (e) {
  e.preventDefault();
  vikemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "vikemon")) {
      vikemon();
    } else if (hasClass(e.target, "vikemon")) {
      vikemon();
    }
  },
  false
);

function vulcanusmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Vulcanusmon");
  replaceImage("vulcanusmon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "asuramon",
    "Asuramon",
    "Lvl 80 + 50000 Machine Xp + Indiferent Mood"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".vulcanusmon").click(function (e) {
  e.preventDefault();
  vulcanusmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "vulcanusmon")) {
      vulcanusmon();
    } else if (hasClass(e.target, "vulcanusmon")) {
      vulcanusmon();
    }
  },
  false
);

function wargreymon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("WarGreymon");
  replaceImage("wargreymon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("agumon", "Agumon", "Warp Evolution");
  evolveFromFrame("mastertyranomon", "MasterTyranomon", "Lvl 75");
  evolveFromFrame("megadramon", "Megadramon", "50000 Dragon Xp");
  evolveFromFrame("metalgreymon", "MetalGreymon", "Lvl 75");
  eraseOld(2);
  evolveToFrame("blackwargreymon", "BlackWarGreymon", "Black Digitron");
  evolveToFrame("chaosgreymon", "ChaosGreymon", "Chaos Core");
  evolveToFrame(
    "victorygreymon",
    "VictoryGreymon",
    "Accelerator + 500 Victories"
  );
  evolveToFrame("omegamon", "Omegamon", "Jogress: MetalGarurumon");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".wargreymon").click(function (e) {
  e.preventDefault();
  wargreymon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "wargreymon")) {
      wargreymon();
    } else if (hasClass(e.target, "wargreymon")) {
      wargreymon();
    }
  },
  false
);

function zeedgarurumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("ZeedGarurumon");
  replaceImage("zeedgarurumon");
  attribute("da");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame(
    "machgaogamon",
    "MachGaogamon",
    "50000 Machine Xp + 500 Victories"
  );
  evolveFromFrame(
    "metalgarurumon",
    "MetalGarurumon",
    "Accelerator + 500 Victories"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".zeedgarurumon").click(function (e) {
  e.preventDefault();
  zeedgarurumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "zeedgarurumon")) {
      zeedgarurumon();
    } else if (hasClass(e.target, "zeedgarurumon")) {
      zeedgarurumon();
    }
  },
  false
);

/*-------------------- SUPER ULTIMATE --------------------*/

function alphamonouryuken() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Alphamon Ouryuken");
  replaceImage("alphamonouryuken");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("alphamon", "Alphamon", "Jogress: Ouryumon");
  evolveFromFrame("ouryumon", "Ouryumon", "Jogress: Alphamon");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".alphamonouryuken").click(function (e) {
  e.preventDefault();
  alphamonouryuken();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "alphamonouryuken")) {
      alphamonouryuken();
    } else if (hasClass(e.target, "alphamonouryuken")) {
      alphamonouryuken();
    }
  },
  false
);

function armagemon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Armagemon");
  replaceImage("armagemon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("diaboromon", "Diaboromon", "Accelerator + 500 Victories");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".armagemon").click(function (e) {
  e.preventDefault();
  armagemon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "armagemon")) {
      armagemon();
    } else if (hasClass(e.target, "armagemon")) {
      armagemon();
    }
  },
  false
);

function chaosmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Chaosmon");
  replaceImage("chaosmon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bancholeomon", "BanchoLeomon", "Jogress: Darkdramon");
  evolveFromFrame("darkdramon", "Darkdramon", "Jogress: BanchoLeomon");
  eraseOld(2);
  evolveToFrame(
    "ultimatechaosmon",
    "UltimateChaosmon",
    "Jogress: Chaosmon (Valdur Arm)"
  );
  evolveToFrame(
    "ultimatechaosmon",
    "UltimateChaosmon",
    "Jogress: Kentaurosmon"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".chaosmon").click(function (e) {
  e.preventDefault();
  chaosmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "chaosmon")) {
      chaosmon();
    } else if (hasClass(e.target, "chaosmon")) {
      chaosmon();
    }
  },
  false
);

function chaosmonvm() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Chaosmon (Valdur Arm)");
  replaceImage("chaosmonvm");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("bancholeomon", "BanchoLeomon", "Jogress: Valdurmon");
  evolveFromFrame("valdurmon", "Valdurmon", "Jogress: BanchoLeomon");
  eraseOld(2);
  evolveToFrame("ultimatechaosmon", "UltimateChaosmon", "Jogress: Chaosmon");
  evolveToFrame(
    "ultimatechaosmon",
    "UltimateChaosmon",
    "Jogress: Kentaurosmon"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".chaosmonvm").click(function (e) {
  e.preventDefault();
  chaosmonvm();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "chaosmonvm")) {
      chaosmonvm();
    } else if (hasClass(e.target, "chaosmonvm")) {
      chaosmonvm();
    }
  },
  false
);

function dukemon_crimson() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Dukemon (Crimson Mode)");
  replaceImage("dukemon_crimson");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("dukemon", "Dukemon", "Mode Selector");
  eraseOld(2);
  evolveToFrame("dukemon", "Dukemon", "Mode Selector");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dukemon_crimson").click(function (e) {
  e.preventDefault();
  dukemon_crimson();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dukemon_crimson")) {
      dukemon_crimson();
    } else if (hasClass(e.target, "dukemon_crimson")) {
      dukemon_crimson();
    }
  },
  false
);

function examon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Examon");
  replaceImage("examon");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("breakdramon", "Breakdramon", "Jogress: Slayerdramon");
  evolveFromFrame("slayerdramon", "Slayerdramon", "Jogress: Breakdramon");
  eraseOld(2);
  evolveToFrame("examonx", "Examon X", "X-Antibody");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".examon").click(function (e) {
  e.preventDefault();
  examon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "examon")) {
      examon();
    } else if (hasClass(e.target, "examon")) {
      examon();
    }
  },
  false
);

function gracenovamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("GraceNovamon");
  replaceImage("gracenovamon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("apollomon", "Apollomon", "Jogress: Dianamon");
  evolveFromFrame("dianamon", "Dianamon", "Jogress: Apollomon");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gracenovamon").click(function (e) {
  e.preventDefault();
  gracenovamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gracenovamon")) {
      gracenovamon();
    } else if (hasClass(e.target, "gracenovamon")) {
      gracenovamon();
    }
  },
  false
);

function imperialdramonpaladin() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Imperialdramon (Paladin Mode)");
  replaceImage("imperialdramonpaladin");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "imperialdramonfighter",
    "Imperialdramon (Fighter Mode)",
    "Jogress: Omegamon"
  );
  evolveFromFrame(
    "omegamon",
    "Omegamon",
    "Jogress: Imperialdramon (Fighter Mode)"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".imperialdramonpaladin").click(function (e) {
  e.preventDefault();
  imperialdramonpaladin();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "imperialdramonpaladin")) {
      imperialdramonpaladin();
    } else if (hasClass(e.target, "imperialdramonpaladin")) {
      imperialdramonpaladin();
    }
  },
  false
);

function moonmillenniumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("MoonMillenniumon");
  replaceImage("moonmillenniumon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("devitamamon", "Devitamamon", "Jogress: Millenniumon");
  evolveFromFrame("millenniumon", "Millenniumon", "Jogress: Devitamamon");
  eraseOld(2);
  evolveToFrame(
    "zeedmillenniumon",
    "Zeed Millenniumon",
    "Jogress: Millenniumon + 50 Chained Paradox"
  );
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".moonmillenniumon").click(function (e) {
  e.preventDefault();
  moonmillenniumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "moonmillenniumon")) {
      moonmillenniumon();
    } else if (hasClass(e.target, "moonmillenniumon")) {
      moonmillenniumon();
    }
  },
  false
);

function ogudomon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Ogudomon");
  replaceImage("ogudomon");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "lucemonfm",
    "Lucemon Falldown",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  evolveFromFrame(
    "barbamon",
    "Barbamon",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  evolveFromFrame(
    "beelzemon",
    "Beelzemon",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  evolveFromFrame(
    "belphemonrage",
    "Belphemon (Rage Mode)",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  evolveFromFrame(
    "demon",
    "Demon",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  evolveFromFrame(
    "leviamon",
    "Leviamon",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  evolveFromFrame(
    "lilithmon",
    "Lilithmon",
    "Jogress: Any Demon Lord + 7 Demon Lord Swords"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ogudomon").click(function (e) {
  e.preventDefault();
  ogudomon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ogudomon")) {
      ogudomon();
    } else if (hasClass(e.target, "ogudomon")) {
      ogudomon();
    }
  },
  false
);

function omegamon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Omegamon");
  replaceImage("omegamon");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("metalgarurumon", "MetalGarurumon", "Jogress: WarGreymon");
  evolveFromFrame("wargreymon", "WarGreymon", "Jogress: MetalGarurumon");
  eraseOld(2);
  evolveToFrame("omegamonzwart", "Omegamon Zwart", "Black Digitron");
  evolveToFrame(
    "imperialdramonpaladin",
    "Imperialdramon (Paladin Mode)",
    "Jogress: Imperialdramon (Fighter Mode)"
  );
  evolveToFrame("omegamonx", "Omegamon X", "X-Antibody");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".omegamon").click(function (e) {
  e.preventDefault();
  omegamon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "omegamon")) {
      omegamon();
    } else if (hasClass(e.target, "omegamon")) {
      omegamon();
    }
  },
  false
);

function omegamonalters() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Omegamon Alter-S");
  replaceImage("omegamonalters");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("blitzgreymon", "BlitzGreymon", "Jogress: CresGarurumon");
  evolveFromFrame("cresgarurumon", "CresGarurumon", "Jogress: BlitzGreymon");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".omegamonalters").click(function (e) {
  e.preventDefault();
  omegamonalters();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "omegamonalters")) {
      omegamonalters();
    } else if (hasClass(e.target, "omegamonalters")) {
      omegamonalters();
    }
  },
  false
);

function omegamonzwart() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Omegamon Zwart");
  replaceImage("omegamonzwart");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "blackmetalgarurumon",
    "BlackMetalGarurumon",
    "Jogress: BlackWarGreymon"
  );
  evolveFromFrame(
    "blackwargreymon",
    "BlackWarGreymon",
    "Jogress: BlackMetalGarurumon"
  );
  evolveFromFrame("omegamon", "Omegamon", "Black Digitron");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".omegamonzwart").click(function (e) {
  e.preventDefault();
  omegamonzwart();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "omegamonzwart")) {
      omegamonzwart();
    } else if (hasClass(e.target, "omegamonzwart")) {
      omegamonzwart();
    }
  },
  false
);

function quartzmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Quartzmon");
  replaceImage("quartzmon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("diaboromon", "Diaboromon", "150000 Dark Xp + 1 Quartz Core");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".quartzmon").click(function (e) {
  e.preventDefault();
  quartzmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "quartzmon")) {
      quartzmon();
    } else if (hasClass(e.target, "quartzmon")) {
      quartzmon();
    }
  },
  false
);

function rafflesimon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Rafflesimon");
  replaceImage("rafflesimon");
  attribute("da");
  replaceAttacks("r", "r");
  eraseOld(1);
  evolveFromFrame("lotusmon", "Lotusmon", "Jogress: Rosemon");
  evolveFromFrame("rosemon", "Rosemon", "Jogress: Lotusmon");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".rafflesimon").click(function (e) {
  e.preventDefault();
  rafflesimon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "rafflesimon")) {
      rafflesimon();
    } else if (hasClass(e.target, "rafflesimon")) {
      rafflesimon();
    }
  },
  false
);

function ultimatechaosmon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("UltimateChaosmon");
  replaceImage("ultimatechaosmon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("chaosmon", "Chaosmon", "Jogress: Chaosmon (Valdur Arm)");
  evolveFromFrame("chaosmon", "Chaosmon", "Jogress: Kentaurosmon");
  evolveFromFrame("chaosmonvm", "Chaosmon (Valdur Arm)", "Jogress: Chaosmon");
  evolveFromFrame(
    "chaosmonvm",
    "Chaosmon (Valdur Arm)",
    "Jogress: Kentaurosmon"
  );
  evolveFromFrame("kentaurosmon", "Kentaurosmon", "Jogress: Chaosmon");
  evolveFromFrame(
    "kentaurosmon",
    "Kentaurosmon",
    "Jogress: Chaosmon (Valdur Arm)"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".ultimatechaosmon").click(function (e) {
  e.preventDefault();
  ultimatechaosmon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "ultimatechaosmon")) {
      ultimatechaosmon();
    } else if (hasClass(e.target, "ultimatechaosmon")) {
      ultimatechaosmon();
    }
  },
  false
);

function zeedmillenniumon() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Zeed Millenniumon");
  replaceImage("zeedmillenniumon");
  attribute("un");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame(
    "millenniumon",
    "Millenniumon",
    "Jogress: MoonMillenniumon + 50 Chained Paradox"
  );
  evolveFromFrame(
    "moonmillenniumon",
    "MoonMillenniumon",
    "Jogress: Millenniumon + 50 Chained Paradox"
  );
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".zeedmillenniumon").click(function (e) {
  e.preventDefault();
  zeedmillenniumon();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "zeedmillenniumon")) {
      zeedmillenniumon();
    } else if (hasClass(e.target, "zeedmillenniumon")) {
      zeedmillenniumon();
    }
  },
  false
);

/*-------------------- X-ANTIBODY --------------------*/

function numemonx() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Numemon X-Antibody");
  replaceImage("numemonx");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("numemon", "Numemon", "X-Antibody");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".numemonx").click(function (e) {
  e.preventDefault();
  numemonx();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "numemonx")) {
      numemonx();
    } else if (hasClass(e.target, "numemonx")) {
      numemonx();
    }
  },
  false
);

function dukemonx() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Dukemon X-Antibody");
  replaceImage("dukemonx");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("dukemon", "Dukemon", "X-Antibody");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".dukemonx").click(function (e) {
  e.preventDefault();
  dukemonx();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "dukemonx")) {
      dukemonx();
    } else if (hasClass(e.target, "dukemonx")) {
      dukemonx();
    }
  },
  false
);

function examonx() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Examon X-Antibody");
  replaceImage("examonx");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("examon", "Examon", "X-Antibody");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".examonx").click(function (e) {
  e.preventDefault();
  examonx();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "examonx")) {
      examonx();
    } else if (hasClass(e.target, "examonx")) {
      examonx();
    }
  },
  false
);

function gankoomonx() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Gankoomon X-Antibody");
  replaceImage("gankoomonx");
  attribute("da");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("gankoomon", "Gankoomon", "X-Antibody");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".gankoomonx").click(function (e) {
  e.preventDefault();
  gankoomonx();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "gankoomonx")) {
      gankoomonx();
    } else if (hasClass(e.target, "gankoomonx")) {
      gankoomonx();
    }
  },
  false
);

function leviamonx() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Leviamon X-Antibody");
  replaceImage("leviamonx");
  attribute("vi");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("leviamon", "Leviamon", "X-Antibody");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".leviamonx").click(function (e) {
  e.preventDefault();
  leviamonx();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "leviamonx")) {
      leviamonx();
    } else if (hasClass(e.target, "leviamonx")) {
      leviamonx();
    }
  },
  false
);

function magnamonx() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Magnamon X-Antibody");
  replaceImage("magnamonx");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("magnamon", "Magnamon", "X-Antibody");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".magnamonx").click(function (e) {
  e.preventDefault();
  magnamonx();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "magnamonx")) {
      magnamonx();
    } else if (hasClass(e.target, "magnamonx")) {
      magnamonx();
    }
  },
  false
);

function omegamonx() {
  $(".theme").attr("href", "style_info.css");
  replaceName("Omegamon X-Antibody");
  replaceImage("omegamonx");
  attribute("va");
  replaceAttacks("m", "r");
  eraseOld(1);
  evolveFromFrame("omegamon", "Omegamon", "X-Antibody");
  eraseOld(2);
  evolveToFrame("end", "EndPath", "No Further Evolution");
  $("body, html").animate(
    {
      scrollTop: "150px",
    },
    200
  );
}
$(".omegamonx").click(function (e) {
  e.preventDefault();
  omegamonx();
});
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "omegamonx")) {
      omegamonx();
    } else if (hasClass(e.target, "omegamonx")) {
      omegamonx();
    }
  },
  false
);

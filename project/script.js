// Aktuelles Outfit speichern
let currentDrip = {
  shirt: "",
  pants: "",
  shoes: "",
  accessory: ""
};

let lastTheme = null

function loadRandomTheme() {
  while(selectedTheme == lastTheme){
  selectedTheme = themes[Math.floor(Math.random() * themes.length)];
  document.getElementById("theme").innerHTML = selectedTheme.name;
  }
  lastTheme = selectedTheme;
  console.log(selectedTheme.name)
  console.log(selectedTheme.background)
  
  document.getElementById("main-content").style.backgroundImage = `url(${selectedTheme.background})`;
  document.getElementById("main-content").style.backgroundSize = "cover";
  document.getElementById("main-content").style.backgroundPosition = "center";
  document.getElementById("main-content").style.backgroundRepeat = "no-repeat";
}

// Outfit-Update Funktion
function updateClothing() {
  document.getElementById("shirt").src = currentDrip.shirt;
  document.getElementById("pants").src = currentDrip.pants;
  document.getElementById("shoes").src = currentDrip.shoes;
  document.getElementById("accessory").src = currentDrip.accessory;
console.log(currentDrip)
  updateBaseFigure();
}

/*function updateClothings(part, path) {
  console.log(currentDrip)
  document.getElementById(part).src = path;
  currentDrip[part] = path;
}*/

function applyClothing(part, src, className) {
  const element = document.getElementById(part);
  element.src = src || "";
  element.className = className || "clothing-item"; // fallback
  currentDrip[part] = src;
  updateBaseFigure();
}

// Base-Figur anpassen (z. B. Hemd-Modell laden)
function updateBaseFigure() {
  const baseImage = document.querySelector(".base-figure");

  if (currentDrip.shirt && currentDrip.shirt.toLowerCase().includes("hemd")) {
    baseImage.src = "./img/stickman-straight.png";
  } else {
    baseImage.src = "./img/stickman-removebg-preview.png";
  }
}

// Bei DOM-Start
document.addEventListener("DOMContentLoaded", () => {
  const selects = {
    shirt: document.getElementById("select-shirt"),
    pants: document.getElementById("select-pants"),
    shoes: document.getElementById("select-shoes"),
    accessory: document.getElementById("select-accessory")
  };

  

  // SHIRT SPEZIALHANDLING
  selects.shirt.addEventListener("change", (e) => {
    const shirtEl = document.getElementById("shirt");
    const value = e.target.value;

    currentDrip.shirt = value;
    shirtEl.src = value;

   
    shirtEl.classList.remove("tshirt-style", "hemd-style");


  
    if (value.toLowerCase().includes("hemd")) {
      shirtEl.classList.add("hemd-style");
    } else if (value.toLowerCase().includes("t-shirt")) {
      shirtEl.classList.add("tshirt-style");
    }

   

    updateBaseFigure();
  });
// HOSEN SPEZIALHANDLING
  selects.pants.addEventListener("change", (e) => {
   
    const pantsEl = document.getElementById("pants");
    const value = e.target.value;

    currentDrip.pants = value;
    pantsEl.src = value;

  
    pantsEl.classList.remove("jeans-style", "trousers-style");

    

    if (value.toLowerCase().includes("anzugshose")) {
      pantsEl.classList.add("trousers-style");
    } else if (value.toLowerCase().includes("jeans")) {
      pantsEl.classList.add("jeans-style");
    }

    updateBaseFigure();
  });

 // SHOES SPEZIALHANDLING
 selects.shoes.addEventListener("change", (e) => {
   
  const shoesEl = document.getElementById("shoes");
  const value = e.target.value;

  currentDrip.shoes = value;
  shoesEl.src = value;


  shoesEl.classList.remove("loafer-style", "sneaker-style");

  

  if (value.toLowerCase().includes("sneaker")) {
    shoesEl.classList.add("sneaker-style");
  } else if (value.toLowerCase().includes("loafer")) {
    shoesEl.classList.add("loafer-style");
  }

  updateBaseFigure();
}); 

//ACCESSORY SPEZIALHANDLING

selects.accessory.addEventListener("change", (e) => {
   
  const accessoryEl = document.getElementById("accessory");
  const value = e.target.value;

  currentDrip.accessory = value;
  accessoryEl.src = value;


  accessoryEl.classList.remove("krawatte-style", "fischerhut-style");

  

  if (value.toLowerCase().includes("fischerhut")) {
    accessoryEl.classList.add("fischerhut-style");
  } else if (value.toLowerCase().includes("krawatte")) {
    accessoryEl.classList.add("krawatte-style");
  }

  updateBaseFigure();
}); 


  // Restliche Kleidungsstücke (Standardhandling)
  ["pants", "shoes", "accessory"].forEach((item) => {
    selects[item].addEventListener("change", (e) => {
      currentDrip[item] = e.target.value;
      updateClothing();
    });
  });

  
  
});

// Themen für Bewertung
const themes = [
  { name: "Strandoutfit", tags: ["t-shirt", "shorts", "flip-flop", "cap"],background: "./img/strand.jpg" },
  { name: "Winter-Style", tags: ["jacke", "jeans", "boots", "mütze"],background: "./img/schneeLandschaft.jpg"},
  { name: "Gala-Look", tags: ["hemd", "trousers", "loafer", "krawatte"],background: "./img/disco.jpg"},
  { name: "Festival-Vibes", tags: ["t-shirt", "shorts", "fischerhut", "sneaker"],background: "./img/festival.jpg" }
];

let selectedTheme = null;

// Punkte berechnen
function calculateDripPoints() {
  let basePoints = 0;
  let themeMatch = 0;
  
console.log("Aktuelles Outfit:", currentDrip);
  Object.values(currentDrip).forEach(path => {
    if (path) {
      basePoints += 0;
      console.log(basePoints)
      selectedTheme?.tags.forEach(tag => {
        if (path.toLowerCase().includes(tag)) {
          console.log(basePoints)
          themeMatch += 1;
        }  
      });
    }
  });
  console.log(basePoints)
  console.log(themeMatch)

  return basePoints + (themeMatch * 10);
}

// Bewertung anzeigen
function showDripScore() {
  const score = calculateDripPoints(); // <- deine Bewertungsfunktion
  document.getElementById("points").textContent = `${score} Punkte`;
  document.querySelector(".points-display").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.getElementById("main-content").classList.add("blur");
}

function disappear(){
  document.getElementById("overlay").style.display = "none";
  document.querySelector(".points-display").style.display = "none";
  document.getElementById("main-content").classList.remove("blur");
  window.location.href = "index.html";
}

function playAgain(){
  
  document.getElementById("select-shirt").value = "";
  document.getElementById("select-pants").value = "";
  document.getElementById("select-shoes").value = "";
  document.getElementById("select-accessory").value = "";

  
  document.getElementById("shirt").src = "";
  document.getElementById("pants").src = "";
  document.getElementById("shoes").src = "";
  document.getElementById("accessory").src = "";

  
  document.querySelector(".points-display").style.display = "none";
  document.getElementById("overlay").style.display = "none";

  
  document.getElementById("main-content").classList.remove("blur");

  
  if (typeof currentDrip !== "undefined") {
    currentDrip = {
      shirt: "",
      pants: "",
      shoes: "",
      accessory: ""
    };
  }
  
   if (typeof loadRandomTheme === "function") {
    loadRandomTheme();
  }
  
}

// Check ob Spieler eingeloggt ist und zeige Preset-Funktion
document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("loggedInUser");
  if (user) {
    document.getElementById("preset-controls").style.display = "flex";
  }
});

// Aktuelles Outfit speichern
function savePreset() {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    alert("Du musst eingeloggt sein, um ein Preset zu speichern!");
    return;
  }

  const preset = {
    shirt: {
      src: document.getElementById("select-shirt").value,
      class: document.getElementById("shirt").className
    },
    pants: {
      src: document.getElementById("select-pants").value,
      class: document.getElementById("pants").className
    },
    shoes: {
      src: document.getElementById("select-shoes").value,
      class: document.getElementById("shoes").className
    },
    accessory: {
      src: document.getElementById("select-accessory").value,
      class: document.getElementById("accessory").className
    }
  };

  localStorage.setItem(`${user}-preset`, JSON.stringify(preset));
  alert("Preset gespeichert!");
}


// Outfit aus Preset laden
function loadPreset() {
  const user = localStorage.getItem("loggedInUser");
  const preset = JSON.parse(localStorage.getItem(`${user}-preset`));
 

  // Werte in Selects setzen
  document.getElementById("select-shirt").value = preset.shirt.src;
  document.getElementById("select-pants").value = preset.pants.src;
  document.getElementById("select-shoes").value = preset.shoes.src;
  document.getElementById("select-accessory").value = preset.accessory.src;

  // Bilder setzen & Klassen wiederherstellen
  applyClothing("shirt", preset.shirt.src, preset.shirt.class);
  applyClothing("pants", preset.pants.src, preset.pants.class);
  applyClothing("shoes", preset.shoes.src, preset.shoes.class);
  applyClothing("accessory", preset.accessory.src, preset.accessory.class);
}

window.addEventListener("DOMContentLoaded", () => {
  const presetButton = document.getElementById("pre");
  const user = localStorage.getItem("loggedInUser");

  if (!user && presetButton) {
    presetButton.style.display = "none"; 
  }

  const preset = JSON.parse(localStorage.getItem(`${user}-preset`));
  if (!preset) {
     presetButton.style.display = "none"; 
  }
});




 


// Aktuelles Outfit speichern
const currentDrip = {
  shirt: "",
  pants: "",
  shoes: "",
  accessory: ""
};

// Outfit-Update Funktion
function updateClothing() {
  document.getElementById("shirt").src = currentDrip.shirt;
  document.getElementById("pants").src = currentDrip.pants;
  document.getElementById("shoes").src = currentDrip.shoes;
  document.getElementById("accessory").src = currentDrip.accessory;

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

  // Restliche Kleidungsstücke (Standardhandling)
  ["pants", "shoes", "accessory"].forEach((item) => {
    selects[item].addEventListener("change", (e) => {
      currentDrip[item] = e.target.value;
      updateClothing();
    });
  });

  // Thema anzeigen, wenn vorhanden (auf game.html)
  if (document.getElementById("theme")) {
    selectedTheme = themes[Math.floor(Math.random() * themes.length)];
    document.getElementById("theme").innerText = selectedTheme.name;
  }
});

// Themen für Bewertung
const themes = [
  { name: "Strandoutfit", tags: ["t-shirt", "shorts", "sneaker", "cap"] },
  { name: "Winter-Style", tags: ["jacke", "jeans", "boots", "mütze"] },
  { name: "Gala-Look", tags: ["hemd", "hose", "schuhe", "krawatte"] },
  { name: "Festival-Vibes", tags: ["t-shirt", "shorts", "hut", "sonnenbrille"] }
];

let selectedTheme = null;

// Punkte berechnen
function calculateDripPoints() {
  let basePoints = 0;
  let themeMatch = 0;

  Object.values(currentDrip).forEach(path => {
    if (path) {
      basePoints += 20;
      selectedTheme?.tags.forEach(tag => {
        if (path.toLowerCase().includes(tag)) {
          themeMatch += 1;
        }
      });
    }
  });

  return basePoints + (themeMatch * 10);
}

// Bewertung anzeigen
function showDripScore() {
  const score = calculateDripPoints();
  const output = document.getElementById("score-result");
  output.innerText = `🔎 Drip-Level: ${score} Punkte für das Thema "${selectedTheme?.name}"`;
}

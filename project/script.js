// Aktuelles Outfit speichern
const currentDrip = {
  shirt: null,
  pants: null,
  shoes: null,
  accessory: null
};

// Zuordnung Select-Felder zu Bild-IDs
const dripConfig = {
  "select-shirt": "shirt",
  "select-pants": "pants",
  "select-shoes": "shoes",
  "select-accessory": "accessory"
};

// Für jedes Select-Feld das passende Bild aktualisieren
Object.keys(dripConfig).forEach(selectId => {
  const selectElement = document.getElementById(selectId);
  const imageId = dripConfig[selectId];
  const imageElement = document.getElementById(imageId);

  selectElement.addEventListener("change", () => {
    const selectedValue = selectElement.value;

    if (selectedValue) {
      imageElement.src = selectedValue;
      currentDrip[imageId] = selectedValue;
    } else {
      imageElement.src = ""; // Kein Kleidungsstück gewählt
      currentDrip[imageId] = null;
    }
  });
});

//Game-Mechanik

// Themenliste
const themes = [
  { name: "Strandoutfit", tags: ["shirt", "shorts", "sneaker", "cap"] },
  { name: "Winter-Style", tags: ["jacke", "jeans", "boots", "mütze"] },
  { name: "Gala-Look", tags: ["hemd", "hose", "schuhe", "krawatte"] },
  { name: "Festival-Vibes", tags: ["t-shirt", "shorts", "hut", "sonnenbrille"] }
];

let selectedTheme;

// Beim Laden der Seite ein zufälliges Thema anzeigen
window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("theme")) {
    selectedTheme = themes[Math.floor(Math.random() * themes.length)];
    document.getElementById("theme").innerText = selectedTheme.name;
  }
});

// Bewertung
function calculateDripPoints() {
  let points = 0;
  let match = 0;

  Object.entries(currentDrip).forEach(([part, path]) => {
    if (path) {
      points += 20;
      // Check ob Dateiname zu Thema passt
      selectedTheme?.tags.forEach(tag => {
        if (path.toLowerCase().includes(tag)) match += 1;
      });
    }
  });

  points += match * 10; // Bonus für passende Teile
  return points;
}

function showDripScore() {
  const score = calculateDripPoints();
  const output = document.getElementById("score-result");
  output.innerText = `Dein Drip-Level: ${score} Punkte für das Thema "${selectedTheme.name}"`;
}

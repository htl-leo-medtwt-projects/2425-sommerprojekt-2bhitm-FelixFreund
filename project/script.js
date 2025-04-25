

function updateClothing(selectId, imageId) {
  const select = document.getElementById(selectId);  // das <select> Element holen
  const image = document.getElementById(imageId);    // das passende <img> für die Kleidung holen
  image.src = select.value;                          // Bildquelle ändern = neues Kleidungsstück anzeigen
}

document.getElementById('select-shirt')
  .addEventListener('change', () => updateClothing('select-shirt', 'shirt'));

document.getElementById('select-pants')
  .addEventListener('change', () => updateClothing('select-pants', 'pants'));

document.getElementById('select-shoes')
  .addEventListener('change', () => updateClothing('select-shoes', 'shoes'));

document.getElementById('select-accessory')
  .addEventListener('change', () => updateClothing('select-accessory', 'accessory'));

  
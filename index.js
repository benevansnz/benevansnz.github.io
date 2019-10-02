/*
  themeChange(): my code
  openModifiers(): my code
  generateRandomHexCode(): @paul_irish
  hexToHSL(): @jonkantner
  LightenDarkenColor(): @chriscoyier
*/


function themeChange() {
  var newColour = generateRandomHexCode();
  var darkenedNewColour = LightenDarkenColor(newColour, -35);

  // make it a explicity a hex CSS value (required for the hexToHSL function)
  newColour = '#' + newColour;
  newColour = hexToHSL(newColour);

  darkenedNewColour = '#' + darkenedNewColour;
  darkenedNewColour = hexToHSL(darkenedNewColour);

  document.documentElement.style.setProperty('--bg-color', newColour);
  document.documentElement.style.setProperty('--box-shadow-color', darkenedNewColour);
}

function toggleModifiers() {
  document.getElementById('site-modifiers').classList.toggle('site-modifiers--active');
}

function generateRandomHexCode() {
  // Thanks @paul_irish: https://www.paulirish.com/2009/random-hex-color-code-snippets/
  return Math.floor(Math.random()*16777215).toString(16);
}

function hexToHSL(H) {
  // Thanks @jonkantner: https://css-tricks.com/converting-color-spaces-in-javascript/
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + "," + s + "%," + l + "%)";
}

function LightenDarkenColor(col, amt) {
  // Thanks @chriscoyier: https://css-tricks.com/snippets/javascript/lighten-darken-color/
  var usePound = false;

  if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}
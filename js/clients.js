// SmartWash — client & partner logos shown on the "For Business" page carousel.
//
// TO ADD A REAL CLIENT: add an object below with their name and a
// path to their logo file. Drop the logo image into images/clients/
// first (transparent PNG or SVG works best), then reference it here:
//   { name: 'Acme Corp', logo: 'images/clients/acme.png' }
//
// TO REMOVE A CLIENT: delete their object from this array.
//
// Leave `logo: null` to show a placeholder tile (used until you have
// a real logo file ready). The carousel below auto-scrolls whenever
// there are more entries than fit on screen — no extra setup needed.
//
// This is a plain script (not an ES module) on purpose — see the note
// at the top of content.js.

window.SmartWash = window.SmartWash || {};

window.SmartWash.CLIENTS = [
  { name: 'Your business here', logo: null },
  { name: 'Your business here', logo: null },
  { name: 'Your business here', logo: null },
  { name: 'Your business here', logo: null },
  { name: 'Your business here', logo: null },
  { name: 'Your business here', logo: null },
];

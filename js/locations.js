// SmartWash — operating locations shown on the homepage map.
//
// TO ADD A SITE: add a new object to this array.
// TO REMOVE A SITE: delete its object from this array.
// The map on the homepage reads this file automatically — no other
// code needs to change.
//
// lat/lng: use Google Maps — right-click the exact spot -> the
// coordinates are the first thing in the popup menu, click to copy.
//
// This is a plain script (not an ES module) on purpose — see the note
// at the top of content.js.

window.SmartWash = window.SmartWash || {};

window.SmartWash.LOCATIONS = [
  {
    name: 'Shopping City Sibiu',
    nameRo: 'Shopping City Sibiu',
    lat: 45.774951,
    lng: 24.170396,
  },
  {
    name: 'Promenada Mall Sibiu',
    nameRo: 'Promenada Mall Sibiu',
    lat: 45.796968,
    lng: 24.163121,
  },
  {
    name: 'Jumbo & Hornbach Retail Park',
    nameRo: 'Parcul comercial Jumbo & Hornbach',
    lat: 45.821600,
    lng: 24.147000,
  },
];

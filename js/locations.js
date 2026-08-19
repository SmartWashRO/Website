// SmartWash — operating locations shown on the homepage map and the
// Locations page.
//
// TO ADD A SITE: add a new object to this array.
// TO REMOVE A SITE: delete its object from this array.
// Both the homepage map and the Locations page read this file
// automatically — no other code needs to change.
//
// lat/lng: use Google Maps — right-click the exact spot -> the
// coordinates are the first thing in the popup menu, click to copy.
//
// hours / hoursRo: SmartWash's own operating hours at that site, not
// the mall's opening hours. All three currently use the general hours
// (08:00–20:00 daily) — update per site here if that changes.
//
// This is a plain script (not an ES module) on purpose — see the note
// at the top of content.js.

window.SmartWash = window.SmartWash || {};

window.SmartWash.LOCATIONS = [
  {
    name: 'Shopping City Sibiu',
    nameRo: 'Shopping City Sibiu',
    address: 'Șoseaua Sibiului 5, Șelimbăr',
    lat: 45.774951,
    lng: 24.170396,
    hours: 'Daily, 08:00–20:00',
    hoursRo: 'Zilnic, 08:00–20:00',
  },
  {
    name: 'Promenada Mall Sibiu',
    nameRo: 'Promenada Mall Sibiu',
    address: 'Strada Lector 1-3A, Sibiu',
    lat: 45.796968,
    lng: 24.163121,
    hours: 'Daily, 08:00–20:00',
    hoursRo: 'Zilnic, 08:00–20:00',
  },
  {
    name: 'Prima Shopping Center Sibiu',
    nameRo: 'Prima Shopping Center Sibiu',
    address: 'Calea Șurii Mari 37-39, Sibiu',
    lat: 45.821964,
    lng: 24.148333,
    hours: 'Daily, 08:00–20:00',
    hoursRo: 'Zilnic, 08:00–20:00',
  },
];

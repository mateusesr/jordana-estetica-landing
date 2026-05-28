// /assets/js/main.js — Jordana Estética Avançada
// Entry point: imports all modules

import { initNav }     from './modules/nav.js';
import { initScroll }  from './modules/scroll.js';
import { initGallery } from './modules/gallery.js';
import { initResults } from './modules/results.js';
import { loadContent } from './modules/content.js';

document.addEventListener('DOMContentLoaded', async () => {
  await loadContent();
  initNav();
  initScroll();
  initGallery();
  initResults();
});

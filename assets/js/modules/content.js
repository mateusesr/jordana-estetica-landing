// /assets/js/modules/content.js
// Loads content.json and injects dynamic sections

export async function loadContent() {
  try {
    const res  = await fetch('./data/content.json');
    const data = await res.json();

    // Update WhatsApp links
    const waNr = data.brand.whatsapp;
    document.querySelectorAll('[data-wa]').forEach(el => {
      el.href = `https://wa.me/${waNr}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o!`;
    });

    // Update Instagram links
    document.querySelectorAll('[data-ig]').forEach(el => {
      el.href = data.brand.instagram_url;
      if (el.dataset.igText) el.textContent = data.brand.instagram;
    });

    // Display contact info
    document.querySelectorAll('[data-wa-display]').forEach(el => {
      el.textContent = data.brand.whatsapp_display;
    });

    console.info('✦ Jordana — conteúdo carregado com sucesso.');
  } catch (e) {
    console.warn('Não foi possível carregar content.json:', e.message);
  }
}

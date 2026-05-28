// /assets/js/modules/results.js
// Comportamentos da seção de resultados (#galeria):
// - Toggle "Ver mais resultados"
// - Abertura/fechamento dos diálogos <dialog>

export function initResults() {
  const toggleBtn = document.getElementById('results-toggle');
  const moreBlock = document.getElementById('results-more');

  // 1) Toggle "Ver mais resultados"
  if (toggleBtn && moreBlock) {
    const updateState = (isOpen) => {
      moreBlock.classList.toggle('is-open', isOpen);
      toggleBtn.textContent = isOpen ? 'Ver menos resultados' : 'Ver mais resultados';
    };

    toggleBtn.addEventListener('click', () => {
      const isOpen = !moreBlock.classList.contains('is-open');
      updateState(isOpen);
    });

    // Estado inicial: fechado
    updateState(false);
  }

  // 2) Diálogos de "Ver mais ângulos"
  const openButtons = document.querySelectorAll('[data-open-dialog]');
  const closeButtons = document.querySelectorAll('[data-close-dialog]');

  if (openButtons.length || closeButtons.length) {
    // Abrir
    openButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-open-dialog');
        if (!id) return;
        const dialog = document.getElementById(id);
        if (dialog && typeof dialog.showModal === 'function') {
          dialog.showModal();
        }
      });
    });

    // Fechar via botão
    closeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const dialog = btn.closest('dialog');
        if (dialog && typeof dialog.close === 'function') {
          dialog.close();
        }
      });
    });

    // Fechar clicando no backdrop
    document.querySelectorAll('dialog').forEach((dialog) => {
      dialog.addEventListener('click', (event) => {
        const rect = dialog.getBoundingClientRect();
        const clickX = event.clientX;
        const clickY = event.clientY;

        const isInDialog =
          clickX >= rect.left &&
          clickX <= rect.right &&
          clickY >= rect.top &&
          clickY <= rect.bottom;

        if (!isInDialog && dialog.open) {
          dialog.close();
        }
      });
    });
  }
}


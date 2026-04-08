const cards = document.querySelectorAll('.card, .gallery-card');
const galleryGrid = document.getElementById('gallery-grid');

cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-3px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0px)';
  });
});

async function loadGallery() {
  if (!galleryGrid) return;

  galleryGrid.innerHTML = '<p class="gallery-loading">Loading notebook charts...</p>';

  try {
    const response = await fetch('assets/gallery.json');
    const payload = await response.json();
    const items = payload.items || [];

    galleryGrid.innerHTML = '';

    items.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'gallery-card reveal';
      card.style.animationDelay = `${80 + index * 18}ms`;

      const title = document.createElement('h3');
      title.textContent = item.title || `Chart ${index + 1}`;

      const meta = document.createElement('span');
      meta.className = 'meta';
      meta.textContent = `${item.kind === 'plotly' ? 'Interactive Plotly output' : 'Rendered chart image'} • Cell ${item.cell}`;

      const header = document.createElement('header');
      header.appendChild(title);
      header.appendChild(meta);

      const frame = document.createElement('div');
      frame.className = 'frame-wrap';

      if (item.kind === 'plotly') {
        const iframe = document.createElement('iframe');
        iframe.loading = 'lazy';
        iframe.src = item.src;
        iframe.title = item.title || `Interactive chart ${index + 1}`;
        frame.appendChild(iframe);
      } else {
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.src = item.src;
        img.alt = item.title || `Chart ${index + 1}`;
        frame.appendChild(img);
      }

      card.appendChild(header);
      card.appendChild(frame);
      galleryGrid.appendChild(card);
    });
  } catch (error) {
    galleryGrid.innerHTML = '<p class="gallery-loading">Unable to load chart gallery. Refresh the page or check the exported assets.</p>';
  }
}

loadGallery();
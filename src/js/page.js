import page from 'page';

function loadHTML(filePath) {
  return fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}`);
      }
      return response.text();
    })
    .catch(error => {
      console.error(error);
      return '<h1>Ошибка загрузки содержимого</h1>';
    });
}

page('/', async () => {
  const content = await loadHTML('../pages/home.html');
  document.getElementById('app').innerHTML = content;
});

page('/privacy-policy', async () => {
  const content = await loadHTML('../pages/privacy-policy.html');
  document.getElementById('app').innerHTML = content;
});

page('/terms&conditions', async () => {
  const content = await loadHTML('../pages/terms-conditions.html');
  document.getElementById('app').innerHTML = content;
});

// page('*', async () => {
//   const content = await loadHTML('../pages/404.html');
//   document.getElementById('app').innerHTML = content;
// });

document.addEventListener('click', event => {
  const target = event.target.closest('a');
  if (!target || !target.getAttribute('href')) {
    return;
  }

  const href = target.getAttribute('href');
  if (href.startsWith('#')) {
    return;
  }

  event.preventDefault();
  page(href);
});

window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

page();

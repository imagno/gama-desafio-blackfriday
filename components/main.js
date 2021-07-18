const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let data = {
    name,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData);

  let content = document.querySelector('#content');

  let carregando = `<p>carregando...</p>`;

  let pronto = `<p>pronto</p>`;

  content.innerHTML = carregando;

  setTimeout(() => {
    content.innerHTML = pronto;
  }, 1000);
});
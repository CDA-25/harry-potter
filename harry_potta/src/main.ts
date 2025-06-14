import './style.css';
import { renderHeader } from './components/Header';
import { renderFooter } from './components/Footer';
import { router } from './router';


const app = document.getElementById('app')!;

async function render() {
  const page = location.hash || '#/';
  const content = await router(page);

  app.innerHTML = `
    ${renderHeader()}
    <main>${content}</main>
    ${renderFooter()}
  `;
}

window.addEventListener('hashchange', render);
render();

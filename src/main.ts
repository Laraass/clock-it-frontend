import './style.css';
import { Layout } from './components/Layout';
import { setupNavbarListeners } from './components/Navbar';
import { handleBackClick } from './utils/backLogic';

const app = document.querySelector<HTMLDivElement>('#app')!;

// Render Layout
app.innerHTML = Layout();

// Navbar eventListener
setupNavbarListeners();

// Back eventListener
const backBtn = document.getElementById('back-button');
backBtn?.addEventListener('click', handleBackClick);
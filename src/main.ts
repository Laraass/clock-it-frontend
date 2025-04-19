import './style.css';
import { Layout } from './components/Layout';
import { setupNavbarListeners } from './components/Navbar';

const app = document.querySelector<HTMLDivElement>('#app')!;

// Rendera Layout
app.innerHTML = Layout();

// Sätt upp event-lyssnare efter rendering
setupNavbarListeners();

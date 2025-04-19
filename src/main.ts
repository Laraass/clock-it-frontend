import './style.css'
import { Layout } from './components/Layout'

const app = document.querySelector<HTMLDivElement>('#app')!

// Anropa Layout med en tom sträng eller enkel placeholder
app.innerHTML = Layout('')

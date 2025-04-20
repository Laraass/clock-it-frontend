import "./style.css";
import { Layout } from "./components/Layout";
import { setupNavbarListeners } from "./components/Navbar";
import { handleBackClick } from "./utils/backLogic";
import { SignIn } from "./views/SignIn";

const app = document.querySelector<HTMLDivElement>("#app")!;

// Render Layout
app.innerHTML = Layout(SignIn());

// Navbar eventListener
setupNavbarListeners();

// Back eventListener
const backBtn = document.getElementById("back-button");
backBtn?.addEventListener("click", handleBackClick);

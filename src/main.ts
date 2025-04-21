import "./style.css";
import { Layout } from "./components/Layout";
import { setupNavbarListeners } from "./components/Navbar";
import { handleBackClick } from "./utils/backLogic";
import { SignIn } from "./views/SignIn";
import { Register } from "./views/Register";

function renderView() {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  const route = window.location.hash;

  let view = "";

  switch (route) {
    case "#/register":
      view = Register();
      break;
    case "#/signin":
    default:
      view = SignIn();
      break;
  }

  app.innerHTML = Layout(view);

  setupNavbarListeners();
  const backBtn = document.getElementById("back-button");
  backBtn?.addEventListener("click", handleBackClick);
}

renderView();
window.addEventListener("hashchange", renderView);

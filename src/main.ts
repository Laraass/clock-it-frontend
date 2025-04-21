import "./style.css";
import { Layout } from "./components/Layout";
import { setupNavbarListeners } from "./components/Navbar";
import { handleBackClick } from "./utils/backLogic";
import { SignIn } from "./views/SignIn";
import { Register } from "./views/Register";

const app = document.querySelector<HTMLDivElement>("#app")!;

function renderView() {
  const hash = window.location.hash;
  let viewHtml: string;

  switch (hash) {
    case "#/register":
      viewHtml = Register();
      break;
    case "#/signin":
    default:
      viewHtml = SignIn();
      break;
  }

  app.innerHTML = Layout(viewHtml);

  setupNavbarListeners();
  document.getElementById("back-button")?.addEventListener("click", handleBackClick);

  if (hash === "" || hash === "#/signin") {
    document.getElementById("sign-in-button")?.addEventListener("click", () => {
      window.location.hash = "#/";
    });
  }
}

renderView();
window.addEventListener("hashchange", renderView);

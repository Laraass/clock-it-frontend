import "./style.css";
import { Layout } from "./components/Layout";
import { setupNavbarListeners } from "./components/Navbar";
import { handleBackClick } from "./utils/backLogic";
import { SignIn } from "./views/SignIn";
import { Register } from "./views/Register";
import { Home } from "./views/Home";
import { TimeReports } from "./views/TimeReports";

const app = document.querySelector<HTMLDivElement>("#app")!;

function renderView() {
  const hash = window.location.hash;
  let viewHtml: string;

  switch (hash) {
    case "#/register":
      viewHtml = Register();
      break;
    case "#/":
      viewHtml = Home();
      break;
    case "#/signin":
    default:
      viewHtml = SignIn();
      break;
    case "#/timereports":
      viewHtml = TimeReports();
      break;
  }

  app.innerHTML = Layout(viewHtml);

  setupNavbarListeners();
  document.getElementById("back-button")?.addEventListener("click", handleBackClick);

  // Handle sign in and register
  if (hash === "" || hash === "#/signin") {
    document.getElementById("sign-in-button")?.addEventListener("click", () => {
      window.location.hash = "#/";
    });
  }

  if (hash === "" || hash === "#/register") {
    document.getElementById("register-button")?.addEventListener("click", () => {
      window.location.hash = "#/";
    });
  }

  // Handle task routing from Home
  if (hash === "#/") {
    document.getElementById("time-reports")?.addEventListener("click", () => {
      window.location.hash = "#/timereports";
    });
  }
}

renderView();
window.addEventListener("hashchange", renderView);

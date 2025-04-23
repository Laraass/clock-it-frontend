import "./style.css";
import { Layout } from "./components/Layout";
import { setupNavbarListeners } from "./components/Navbar";
import { handleBackClick } from "./utils/backLogic";
import { SignIn } from "./views/SignIn";
import { Register } from "./views/Register";
import { Home } from "./views/Home";
import { TimeReports } from "./views/TimeReports";
import { CreateTimeReport } from "./views/CreateTimeReport";
import { AllTimeReports } from "./views/AllTimeReports";
import { registerUser } from "./utils/auth";

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
    case "#/timereports/create":
      viewHtml = CreateTimeReport();
      break;
    case "#/timereports":
      viewHtml = TimeReports();
      break;
    case "#/timereports/all":
      viewHtml = AllTimeReports();
      break;
  }

  app.innerHTML = Layout(viewHtml);

  setupNavbarListeners();

  // Back button management
  document
    .getElementById("back-button")
    ?.addEventListener("click", handleBackClick);

  // Sign in management
  if (hash === "" || hash === "#/signin") {
    document.getElementById("sign-in-button")?.addEventListener("click", () => {
      window.location.hash = "#/";
    });
  }

  // Register management
  if (hash === "#/register") {
    const form = document.getElementById("register-form") as HTMLFormElement;

    form?.addEventListener("submit", async (event) => {
      event.preventDefault();

      const name = (
        document.querySelector("input[name='name']") as HTMLInputElement
      ).value;
      const email = (
        document.querySelector("input[name='email']") as HTMLInputElement
      ).value;
      const password = (
        document.querySelector("input[name='password']") as HTMLInputElement
      ).value;

      try {
        const response = await registerUser(name, email, password);

        if (response.message === "User registered!") {
          window.location.hash = "#/signin";
        }
      } catch (error: any) {
        console.error(error);
        alert(error.message);
      }
    });
  }

  // Password visibility management
  document.querySelectorAll("[id^='toggle-']").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const id = toggle.id.replace("toggle-", "");
      const input = document.getElementById(`${id}-input`) as HTMLInputElement;
      const icon = toggle.querySelector("[data-icon]");

      const isVisible = input.type === "text";
      input.type = isVisible ? "password" : "text";
      icon?.setAttribute(
        "data-icon",
        isVisible ? "clarity:eye-hide-solid" : "clarity:eye-show-solid"
      );
    });
  });

  // Handle Home page menu navigation
  if (hash === "#/") {
    document.getElementById("time-reports")?.addEventListener("click", () => {
      window.location.hash = "#/timereports";
    });
  }

  // Handle Time Reports routing
  if (hash === "#/timereports") {
    const navigateToView = () => {
      window.location.hash = "#/timereports/all";
    };
    document
      .getElementById("time-reports-create")
      ?.addEventListener("click", () => {
        window.location.hash = "#/timereports/create";
      });
    document
      .getElementById("time-reports-all")
      ?.addEventListener("click", navigateToView);
    document
      .getElementById("time-reports-update")
      ?.addEventListener("click", navigateToView);
    document
      .getElementById("time-reports-delete")
      ?.addEventListener("click", navigateToView);
  }

  // Handle Create Time Report cancel button
  if (hash === "#/timereports/create") {
    document.getElementById("cancel")?.addEventListener("click", () => {
      window.location.hash = "#/timereports";
    });
  }
}

renderView();
window.addEventListener("hashchange", renderView);

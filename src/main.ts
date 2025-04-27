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
import { SpecificTimeReport } from "./views/SpecificTimeReport";
import { EditTimeReport } from "./views/EditTimeReport";
import {
  registerUser,
  loginUser,
  isAuthenticated,
  logoutUser,
} from "./utils/auth";
import {
  createTimeReport,
  deleteTimeReport,
  getAllTimeReports,
  updateTimeReport,
} from "./utils/reports";

const app = document.querySelector<HTMLDivElement>("#app")!;

async function renderView() {
  const hash = window.location.hash;
  let viewHtml: string;

  // Redirect if user is not authenticated
  const protectedRoutes = [
    "#/timereports",
    "#/timereports/create",
    "#/timereports/all",
  ];
  if (protectedRoutes.includes(hash) && !isAuthenticated()) {
    window.location.hash = "#/signin";
    return;
  }

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
      viewHtml = await AllTimeReports();
      break;
  }

  if (
    hash.startsWith("#/timereports/") &&
    hash.split("/").length === 3 &&
    hash.split("/")[2] !== "create" &&
    hash.split("/")[2] !== "all"
  ) {
    const id = hash.split("/")[2];
    viewHtml = await SpecificTimeReport(id);
  }

  if (hash.startsWith("#/timereports/edit/")) {
    const id = hash.split("/")[3];
    viewHtml = await EditTimeReport(id);
  }

  app.innerHTML = Layout(viewHtml);
  setupNavbarListeners();
  setupListeners();

  // Listeners after every rendering
  function setupListeners() {
    const editForm =
      document.querySelector<HTMLFormElement>("#edit-report-form");

    if (editForm) {
      editForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(editForm);
        const project = formData.get("project") as string;
        const date = formData.get("date") as string;
        const hoursWorked = formData.get("hoursWorked") as string;
        const description = formData.get("description") as string;
        const reportId = editForm.dataset.id as string;

        try {
          await updateTimeReport(
            reportId,
            project,
            date,
            hoursWorked,
            description
          );
          window.location.hash = "#/timereports/all"; // Redirect after update
        } catch (error: any) {
          alert(error.message);
        }
      });
    }
  }

  // Back button management
  document
    .getElementById("back-button")
    ?.addEventListener("click", handleBackClick);

  // Sign out management
  document.getElementById("logout")?.addEventListener("click", () => {
    logoutUser();
    window.location.hash = "#/signin";
  });

  // Sign in management
  if (hash === "" || hash === "#/signin") {
    document
      .getElementById("sign-in-button")
      ?.addEventListener("click", async (e) => {
        e.preventDefault();

        const email = (
          document.querySelector("input[name='email']") as HTMLInputElement
        ).value;
        const password = (
          document.querySelector("input[name='password']") as HTMLInputElement
        ).value;

        try {
          await loginUser(email, password);
          window.location.hash = "#/";
        } catch (error: any) {
          alert(error.message || "Failed to sign in.");
        }
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
        alert(error.message);
      }
    });
  }

  // Toggle password visibility
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

  // Home page buttons
  if (hash === "#/") {
    document.getElementById("time-reports")?.addEventListener("click", () => {
      window.location.hash = "#/timereports";
    });
  }

  // Time reports buttons
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

  // Create time report
  const form = document.getElementById("create-report-form");

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const projectInput = document.querySelector(
      '[name="project"]'
    ) as HTMLInputElement;
    const dateInput = document.querySelector(
      '[name="date"]'
    ) as HTMLInputElement;
    const hoursWorkedInput = document.querySelector(
      '[name="hoursWorked"]'
    ) as HTMLInputElement;
    const descriptionInput = document.querySelector(
      '[name="description"]'
    ) as HTMLTextAreaElement;

    const projectValue = projectInput?.value;
    const dateValue = dateInput?.value;
    const hoursWorkedValue = hoursWorkedInput?.value;
    const descriptionValue = descriptionInput?.value;

    if (!projectValue || !dateValue || !hoursWorkedValue || !descriptionValue) {
      console.log("Please fill out all fields.");
      return;
    }

    try {
      await createTimeReport(
        projectValue,
        dateValue,
        hoursWorkedValue,
        descriptionValue
      );
      console.log("Time report created");
      window.location.hash = "#/timereports";
    } catch (error: any) {
      console.error("Error creating time report:", error.message);
    }
  });

  // Cancel button functionality
  const cancelButton = document.getElementById("cancel");

  cancelButton?.addEventListener("click", () => {
    window.location.hash = "#/timereports"; // Navigate to Time reports
  });

  // All time reports management
  if (hash === "#/timereports/all") {
    try {
      const reports = await getAllTimeReports(); // Fetch reports
      const reportsContainer = document.getElementById("reports-container");

      reports.forEach((report: any) => {
        const reportElement = document.createElement("div");
        reportElement.className = "report-card";
        reportElement.innerHTML = `
        <h3>${report.project}</h3>
        <p>${new Date(report.date).toLocaleDateString()}</p>
        <p>Hours Worked: ${report.hoursWorked}</p>
        <p>${report.description}</p>
        <button class="delete-btn" data-id="${report._id}">Delete</button>
      `;
        reportsContainer?.appendChild(reportElement);
      });

      document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          e.preventDefault();
          const button = e.currentTarget as HTMLButtonElement;
          const reportId = button.dataset.id;

          if (confirm("Are you sure you want to delete this time report?")) {
            try {
              await deleteTimeReport(reportId!);
              alert("Time report deleted successfully!");
              window.location.reload(); // Refresh view to show updated list
            } catch (error: any) {
              alert(error.message || "Failed to delete time report.");
            }
          }
        });
      });
    } catch (error) {
      console.error("Error displaying time reports:", error);
    }
  }
}

// Initial rendering
renderView();
window.addEventListener("hashchange", renderView);

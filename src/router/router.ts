import { Home } from "../views/Home";
import { Register } from "../views/Register";
import { SignIn } from "../views/SignIn";
import { TimeReports } from "../views/TimeReports";
import { AllTimeReports } from "../views/AllTimeReports";
import { CreateTimeReport } from "../views/CreateTimeReport";
import { EditTimeReport } from "../views/EditTimeReport";
import { SpecificTimeReport } from "../views/SpecificTimeReport";

export async function getViewByRoute(route: string): Promise<string> {
  // Check if routes match /timereports/{id}
  const match = route.match(/^\/timereports\/(\d+)$/);
  if (match) {
    const id = match[1]; // id from URL
    return SpecificTimeReport(id); // Return specific time report
  }

  // Routes
  switch (route) {
    case "/":
      return Home();
    case "/register":
      return Register();
    case "/signin":
      return SignIn();
    case "/timereports":
      return TimeReports();
    case "/timereports/all":
      return AllTimeReports();
    case "/timereports/create":
      return CreateTimeReport();
    case "/timereports/edit":
      return EditTimeReport();
    default:
      return `<h1 class="text-xl text-shade-800 p-4">404 Page does not exist</h1>`;
  }
}

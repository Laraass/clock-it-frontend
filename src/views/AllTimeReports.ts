import { Back } from "../components/Back";
import { TimeReport } from "../components/TimeReport";
import { getAllTimeReports } from "../utils/reports";

// Define the type for a time report
interface TimeReportData {
  _id: string;
  project: string;
  date: string;
  hoursWorked: string;
  description: string;
}

export async function AllTimeReports(): Promise<string> {
  // Fetch time reports
  const timeReports: TimeReportData[] = await getAllTimeReports();

  // If no reports, display a message
  if (timeReports.length === 0) {
    return `
    <section class="flex flex-col gap-4">
    ${Back({ page: "Time reports", id: "back-button" })}
      <h2 class="font-bold text-2xl">All Time Reports</h2>
      <p>No time reports found. Please create one.</p>
    </section>
  `;
  }

  // Render all time reports
  const reportsHtml = timeReports
    .map((report: TimeReportData) => {
      return TimeReport({
        project: report.project,
        date: report.date,
        hoursWorked: report.hoursWorked,
        description: report.description,
        projectId: report._id,
      });
    })
    .join("");

  return `
    <section class="flex flex-col gap-4">
    ${Back({ page: "Time reports", id: "back-button" })}
      <h2 class="font-bold text-2xl">All Time Reports</h2>
      ${reportsHtml}
    </section>
  `;
}

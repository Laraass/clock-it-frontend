import { getReportById } from "../utils/reports"; // Skapa en funktion för att hämta en specifik tidrapport

export async function SpecificTimeReport(id: string): Promise<string> {
  try {
    // Hämta den specifika tidrapporten med ID:t
    const timeReport = await getReportById(id); // getReportById returnerar redan rätt typ

    // Om tidrapporten inte finns
    if (!timeReport) {
      return `
        <section class="flex flex-col gap-4">
          <h2 class="font-bold text-2xl">Time Report Not Found</h2>
          <p>The time report with ID ${id} could not be found.</p>
        </section>
      `;
    }

    // Rendera den specifika tidrapporten
    return `
      <section class="flex flex-col gap-4">
        <h2 class="font-bold text-2xl">Time Report for ${timeReport.project}</h2>
        <p><strong>Date:</strong> ${timeReport.date}</p>
        <p><strong>Hours Worked:</strong> ${timeReport.hoursWorked}</p>
        <p><strong>Description:</strong> ${timeReport.description}</p>
      </section>
    `;
  } catch (error) {
    // Felhantering vid problem med att hämta tidrapporten
    return `
      <section class="flex flex-col gap-4">
        <h2 class="font-bold text-2xl">Error</h2>
        <p>An error occurred while fetching the time report: ${error instanceof Error ? error.message : 'Unknown error'}</p>
      </section>
    `;
  }
}

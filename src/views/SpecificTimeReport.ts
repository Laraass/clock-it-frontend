import { getSpecificTimeReport } from "../utils/reports";
import { Back } from "../components/Back";
import { DeleteText } from "../components/DeleteText";
import { EditText } from "../components/EditText";

export async function SpecificTimeReport(id: string): Promise<string> {
  try {
    const report = await getSpecificTimeReport(id);

    const formattedDate = new Date(report.date).toLocaleDateString("sv-SE");

    return `
      <section class="flex flex-col gap-4">
        ${Back({ page: "All Time Reports", id: "back-button" })}
        <h2 class="font-bold text-2xl">${report.project}</h2>
        ${EditText("Edit time report")}

        <div class="flex flex-col gap-2>
        <p class="text-shade-800">Date: ${formattedDate}</p>
        <p class="text-shade-800">Hours Worked: ${report.hoursWorked}</p>
        <p class="text-shade-800">Description: ${report.description}</p>
        </div>
        ${DeleteText("Delete time report")}

      </section>
    `;
  } catch (error: any) {
    return `<p class="text-red">Failed to load time report: ${error.message}</p>`;
  }
}

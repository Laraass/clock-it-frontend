import { InputField } from "../components/Inputfield";
import { Button } from "../components/Button";
import { Back } from "../components/Back";
import { getSpecificTimeReport } from "../utils/reports";

interface TimeReportData {
  _id: string;
  project: string;
  date: string;
  hoursWorked: string;
  description: string;
}

export async function EditTimeReport(reportId: string): Promise<string> {
  const report: TimeReportData = await getSpecificTimeReport(reportId);

  // Format date till YYYY-MM-DD
  const formattedDate = new Date(report.date).toISOString().split("T")[0];

  return `
    <section class="w-full flex flex-col gap-4">
      ${Back({ page: "All reports", id: "back-button" })}
      <h1 class="text-2xl font-bold text-shade-800">Edit Time Report</h1>

      <form id="edit-report-form" class="flex flex-col gap-4" data-id="${
        report._id
      }">
        ${InputField({
          title: "Project",
          placeholder: "Enter project name",
          name: "project",
          value: report.project,
        })}
        
        ${InputField({
          title: "Date",
          placeholder: "YYYY-MM-DD",
          name: "date",
          inputType: "date",
          value: formattedDate,
        })}

        ${InputField({
          title: "Hours worked",
          placeholder: "e.g. 4",
          name: "hoursWorked",
          inputType: "number",
          value: report.hoursWorked.toString(),
        })}

        ${InputField({
          title: "Description",
          placeholder: "Enter description",
          name: "description",
          type: "description",
          value: report.description,
        })}

        <div class="mt-4 flex gap-4 items-center">
          ${Button({ text: "Update", id: "update-report-button" })}
          <span 
            id="cancel" 
            class="text-shade-800 cursor-pointer hover:underline active:underline"
          >
            Cancel
          </span>
        </div>
      </form>
    </section>

    <script>
      document.getElementById('edit-report-form')!.addEventListener('submit', async (event) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const project = formData.get('project') as string;
        const date = formData.get('date') as string;
        const hoursWorked = formData.get('hoursWorked') as string;
        const description = formData.get('description') as string;

        const updatedReport = await updateTimeReport(reportId, project, date, hoursWorked, description);

        alert('Report updated successfully!');
      });
    </script>
  `;
}

import { InputField } from "../components/Inputfield";
import { Button } from "../components/Button";
import { Back } from "../components/Back";

export function CreateTimeReport(): string {
  return `
    <section class="w-full flex flex-col gap-4">
      ${Back({ page: "Time reports", id: "back-button" })}

      <h1 class="text-2xl font-bold text-shade-800">Create time report</h1>

      <form id="create-report-form" class="flex flex-col gap-4">
        ${InputField({
          title: "Project",
          placeholder: "Enter project name",
          name: "project"
        })}

        ${InputField({
          title: "Date",
          placeholder: "YYYY‑MM‑DD",
          name: "date",
          inputType: "date"
        })}

        ${InputField({
          title: "Hours worked",
          placeholder: "e.g. 4",
          name: "hoursWorked",
          inputType: "number"
        })}

        ${InputField({
          title: "Description",
          placeholder: "Enter description",
          name: "description",
          type: "description"
        })}

        <div class="mt-4 flex gap-4 items-center">
          ${Button({ text: "Create", id: "create-report-button" })}
          <span 
            id="cancel" 
            class="text-shade-800 cursor-pointer hover:underline active:underline"
          >
            Cancel
          </span>
        </div>
      </form>
    </section>
  `;
}

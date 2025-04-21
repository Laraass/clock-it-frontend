import { Task } from "../components/Task";
import { Back } from "../components/Back";

export function TimeReports(): string {
    return `
      <section class="w-full flex flex-col gap-4">
      ${Back({ page: "Home", id: "back-button" })}
        <h1 class="text-2xl font-bold text-shade-800">Time Reports</h1>
        
        <div class="flex flex-wrap gap-4 justify-start">
        ${Task({ task: "Create time report", id: "time-reports-create" })}
        ${Task({ task: "See my time reports", id: "time-reports" })}
        ${Task({ task: "Update time report", id: "time-reports" })}
        ${Task({ task: "Delete time report", id: "time-reports" })}
        </div>
      </section>
    `;
  }
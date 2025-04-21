import { Task } from "../components/Task";

export function Home(): string {
    return `
      <section class="w-full flex flex-col gap-4">
        <h1 class="text-2xl font-bold text-shade-800">Home</h1>
        
        <div class="flex flex-wrap gap-4 justify-start">
        ${Task({ task: "Time reports", id: "time-reports" })}
        </div>
      </section>
    `;
  }
  
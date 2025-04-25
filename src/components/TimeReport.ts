import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";

type TimeReportProps = {
  project: string;
  date: string;
  hoursWorked: string;
  description: string;
  projectId: string;
};

export function TimeReport({
  project,
  date,
  hoursWorked,
  description,
  projectId,
}: TimeReportProps): string {
  const formattedDate = new Date(date).toLocaleDateString('sv-SE');

  // Kolla om användaren är inloggad
  const isAuthenticated = localStorage.getItem("token");

  // Om användaren inte är inloggad, visa meddelande och länka till sign-in
  if (!isAuthenticated) {
    return `
      <section class="flex flex-col gap-4">
        <h2 class="font-bold text-2xl">You need to log in to view this report.</h2>
        <a href="/signin" class="text-blue-500">Click here to log in</a>
      </section>
    `;
  }

  return `
    <a href="/timereports/${projectId}" 
       class="bg-off-white text-shade-800 w-full rounded-md 
              shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4 flex flex-col gap-1 
              hover:outline-2 hover:outline-shade-200 
              active:outline-2 active:outline-shade-200
              transition-shadow duration-300">
      
      <div class="flex justify-between items-start">
        <h2 class="font-bold">${project}</h2>
        <div class="flex gap-2">
          ${EditButton()}
          ${DeleteButton()}
        </div>
      </div>

      <p class="text-[12px] text-shade-200">${formattedDate}, ${hoursWorked}h</p>
      <p class="text-[12px] text-shade-200 line-clamp-3">${description}</p>
    </a>
  `;
}

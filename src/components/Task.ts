type TaskProps = {
  task: string;
  id?: string;
};

export function Task({ task, id }: TaskProps): string {
  return `
    <div
      id="${id || ""}"
      class="flex items-center justify-center text-center bg-primary text-shade-800 px-4 py-2 rounded-md border-2 border-secondary
             size-32 
             font-medium
             cursor-pointer
             hover:shadow-[inset_0_0_20px_5px_#5FA3D7] 
             active:shadow-[inset_0_0_20px_5px_#5FA3D7] 
             transition-all duration-300"
    >
      ${task}
    </div>
  `;
}

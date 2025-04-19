export function Button(text: string): string {
  return `
      <button
        class="text-shade-800 px-4 py-2 rounded-md font-semibold bg-primary-crude 
               shadow-[inset_0_0_10px_5px_#7AB5E0] 
               cursor-pointer
               hover:bg-secondary 
               hover:shadow-[inset_0_0_10px_5px_#2933806B] 
               active:bg-secondary
               active:shadow-[inset_0_0_10px_5px_#2933806B]
               transition-all duration-300"
      >
        ${text}
      </button>
    `;
}

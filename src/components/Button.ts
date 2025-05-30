type ButtonProps = {
  text: string;
  id?: string;
};

export function Button({ text, id }: ButtonProps): string {
  return `
      <button
        id="${id || ''}"
        class="text-shade-800 px-4 py-2 rounded-md font-medium bg-primary-crude 
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


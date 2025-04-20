export function CreateText(text: string): string {
    return `
      <div class="flex items-center gap-1 text-shade-800 transform hover:scale-102 active:scale-102 cursor-pointer duration-300">
        <span class="iconify size-6 " data-icon="ei:plus"></span>
        <span class="font-medium">${text}</span>
      </div>
    `;
  }
  
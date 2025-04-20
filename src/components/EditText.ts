export function EditText(text: string): string {
  return `
      <div class="flex items-center gap-1 text-shade-800 hover:text-secondary active:text-secondary cursor-pointer transition-colors duration-200">
        <span class="iconify" data-icon="fluent:edit-48-regular"></span>
        <span class="font-medium">${text}</span>
      </div>
    `;
}

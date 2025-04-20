export function DeleteText(text: string): string {
    return `
      <div class="flex items-center gap-1 text-shade-800 hover:text-red active:text-red cursor-pointer transition-colors duration-200">
        <span class="font-medium">${text}</span>
        <span class="iconify size-4.5" data-icon="weui:delete-outlined" data-inline="false"></span>
      </div>
    `;
  }
  
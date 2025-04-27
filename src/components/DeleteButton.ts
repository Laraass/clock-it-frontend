export function DeleteButton(projectId: string): string {
  return `
    <button 
      class="delete-btn text-shade-800 text-[1.125rem] hover:text-red active:text-red transition-colors duration-300 cursor-pointer" 
      data-id="${projectId}">
      <span class="iconify" data-icon="weui:delete-outlined"></span>
    </button>
  `;
}

export function EditButton(reportId: string): string {
  return `
    <a href="#/timereports/edit/${reportId}" class="edit-btn text-shade-800 text-1 hover:text-secondary active:text-secondary transition-colors duration-300 cursor-pointer">
      <span class="iconify" data-icon="fluent:edit-48-regular"></span>
    </a>
  `;
}

type BackButtonProps = {
  Page: string;
  id?: string;
};

export function BackButton({ Page, id }: BackButtonProps): string {
  return `
    <button
      ${id ? `id="${id}"` : ""}
      class="flex items-center text-sm text-shade-200 hover:text-shade-800 active:text-shade-800 transition-colors duration-300 cursor-pointer"
    >
      <span class="iconify text-[1.125rem]" data-icon="ci:chevron-left"></span>
      <span>${Page}</span>
    </button>
  `;
}

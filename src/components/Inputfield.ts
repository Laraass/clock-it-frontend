type InputFieldProps = {
  title: string;
  placeholder: string;
  name?: string;
  type?: "default" | "description";
  inputType?: "text" | "password" | "number" | "date";
};

export function InputField({
  title,
  placeholder,
  name = title.toLowerCase().replace(/\s+/g, "_"),
  type = "default",
  inputType = "text",
}: InputFieldProps): string {
  const isDescription = type === "description";
  const inputId = name;

  const inputElement = isDescription
    ? `<textarea
         name="${name}"
         placeholder="${placeholder}"
         class="w-full p-2 rounded-md bg-off-white placeholder-shade-200 text-shade-800
                text-base min-h-16 max-h-64 resize-y
                shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                border-2 border-transparent
                focus:outline-none focus:border-shade-200"
       ></textarea>`
    : inputType === "password"
    ? `<div class="relative">
            <input
              id="${inputId}-input"
              name="${name}"
              type="${inputType}"
              placeholder="${placeholder}"
              class="w-full p-2 pr-10 rounded-md bg-off-white placeholder-shade-200 text-shade-800
                     shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                     border-2 border-transparent
                     focus:outline-none focus:border-shade-200"
            />
            <span
              id="toggle-${inputId}"
              class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-shade-600 hover:text-shade-800"
            >
              <span class="iconify text-shade-800" data-icon="clarity:eye-hide-solid"></span>
            </span>
          </div>`
    : inputType === "number"
    ? `<input
         name="${name}"
         type="number"
         placeholder="${placeholder}"
         step="0.1"
         class="w-full p-2 rounded-md bg-off-white placeholder-shade-200 text-shade-800
                shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                border-2 border-transparent
                focus:outline-none focus:border-shade-200"
       />`
    : inputType === "date"
    ? `<input
         name="${name}"
         type="date"
         placeholder="${placeholder}"
         class="w-full p-2 rounded-md bg-off-white placeholder-shade-200 text-shade-800
                shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                border-2 border-transparent
                focus:outline-none focus:border-shade-200"
       />`
    : `<input
         name="${name}"
         type="text"
         placeholder="${placeholder}"
         class="w-full p-2 rounded-md bg-off-white placeholder-shade-200 text-shade-800
                shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                border-2 border-transparent
                focus:outline-none focus:border-shade-200"
       />`;

  return `
    <div class="flex flex-col gap-1 max-w-lg">
      <label class="font-bold text-shade-800">${title}</label>
      ${inputElement}
    </div>
  `;
}

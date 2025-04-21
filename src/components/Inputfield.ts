type InputFieldProps = {
  title: string;
  placeholder: string;
  type?: "default" | "description";
};

export function InputField({
  title,
  placeholder,
  type = "default",
}: InputFieldProps): string {
  const isDescription = type === "description";

  const inputElement = isDescription
    ? `<textarea
           placeholder="${placeholder}"
           class="w-full p-2 rounded-md bg-off-white placeholder-shade-200 text-shade-800
                  text-base min-h-16 max-h-64 resize-y
                  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                  border-2 border-transparent
                  focus:outline-none focus:border-shade-200"
         ></textarea>`
    : `<input
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

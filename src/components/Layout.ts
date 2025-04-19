import { Navbar } from "./Navbar";

export function Layout(): string {
  return `
    <div class="flex flex-col items-center bg-white text-shade-800">
    ${Navbar}

      <main class="min-h-screen w-full flex-1 p-20 md:p-16 px-4">
      </main>

    </div>
  `;
}

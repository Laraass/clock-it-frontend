

export function Layout(children: string): string {
  return `
    <div class="flex flex-col items-center bg-primary text-shade-100">
    // Header here

      <main class="min-h-screen w-full flex-1 pb-20 md:pb-16 px-4">
        ${children}
      </main>

    </div>
  `
}

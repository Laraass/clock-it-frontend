export function Navbar(): string {
  return `
    <nav class="bg-primary fixed w-full z-50">
      <div class="p-4 flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="/" class="cursor-pointer">
            <img src="/clockit_logo.svg" alt="Logo" class="h-7 w-auto" />
          </a>
        </div>

        <!-- Desktop nav -->
        <div class="hidden md:flex gap-4 items-baseline" id="navbar-desktop">
          <button data-nav="home" class="nav-btn hover:underline cursor-pointer">Home</button>
          <button data-nav="reports" class="nav-btn hover:underline cursor-pointer">Time reports</button>
        </div>

        <!-- Mobile toggle -->
        <button id="navbar-toggle" class="md:hidden">
          <span class="iconify text-shade-800 size-12 cursor-pointer" data-icon="lineicons:menu-hamburger-1"></span>
        </button>
      </div>

      <!-- Mobile nav -->
      <div id="navbar-mobile" class="md:hidden bg-shade-900 overflow-hidden max-h-0 opacity-0 transition-all duration-500">
        <div class="flex flex-col gap-3 p-4">
          <button data-nav="home" class="nav-btn hover:underline cursor-pointer">Home</button>
          <button data-nav="reports" class="nav-btn hover:underline cursor-pointer">Time reports</button>
        </div>
      </div>
    </nav>
  `;
}


export function setupNavbarListeners(): void {
  // Toggle mobile menu visibility
  document.getElementById('navbar-toggle')?.addEventListener('click', () => {
    const mobileNav = document.getElementById('navbar-mobile');
    if (mobileNav) {
      mobileNav.classList.toggle('max-h-0');
      mobileNav.classList.toggle('opacity-0');
      mobileNav.classList.toggle('max-h-32');
      mobileNav.classList.toggle('opacity-100');
    }
  });

  // Nav buttons
  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement;
      const navData = target.dataset.nav;
      if (navData) {
        console.log(`Navigating to ${navData}`);
        // Nav logic here (routes)
      }
    });
  });
}

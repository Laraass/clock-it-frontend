// navbarLogic.ts

// Funktion för att hantera öppning/stängning av mobilmenyn
export function toggleMobileMenu(): void {
  const mobileMenu = document.getElementById('navbar-mobile');
  const navbarToggle = document.getElementById('navbar-toggle');
  
  if (mobileMenu && navbarToggle) {
    const isMenuOpen = mobileMenu.classList.contains('max-h-[500px]');
    
    if (isMenuOpen) {
      mobileMenu.classList.remove('max-h-[500px]');
      mobileMenu.classList.add('max-h-0', 'opacity-0');
    } else {
      mobileMenu.classList.remove('max-h-0', 'opacity-0');
      mobileMenu.classList.add('max-h-[500px]', 'opacity-100');
    }
  }
}

// Funktion för att hantera klick på navigationsknappar
export function handleNavClick(event: Event): void {
  const target = event.target as HTMLElement;
  if (target && target.dataset.nav) {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Ta bort 'active' klass från alla knappar
    navButtons.forEach((button) => button.classList.remove('active'));
    
    // Lägg till 'active' klass på den valda knappen
    target.classList.add('active');
  }
}

// Mobile menu functions
export function toggleMobileMenu(): void {
  const mobileMenu = document.getElementById('navbar-mobile');
  const navbarToggle = document.getElementById('navbar-toggle');
  
  if (mobileMenu && navbarToggle) {
    const isMenuOpen = mobileMenu.classList.contains('max-h-32');
    
    if (isMenuOpen) {
      mobileMenu.classList.remove('max-h-32');
      mobileMenu.classList.add('max-h-0', 'opacity-0');
    } else {
      mobileMenu.classList.remove('max-h-0', 'opacity-0');
      mobileMenu.classList.add('max-h-32', 'opacity-100');
    }
  }
}

// Nav buttons
export function handleNavClick(event: Event): void {
  const target = event.target as HTMLElement;
  if (target && target.dataset.nav) {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Remove 'active' class
    navButtons.forEach((button) => button.classList.remove('active'));
    
    // Add 'active' class on current button
    target.classList.add('active');
  }
}

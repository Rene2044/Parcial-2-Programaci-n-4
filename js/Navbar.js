// js/Navbar.js

// 1. Definimos la estructura HTML de la Navbar usando Tailwind CSS
const navbarHTML = `
<nav class="bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg fixed top-0 left-0 w-full z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      
      <div class="flex items-center">
        <a href="#" class="flex-shrink-0 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <span class="text-white font-bold text-xl tracking-tight">SkyCast</span>
        </a>
        
        <div class="hidden md:block ml-10">
          <div class="flex items-baseline space-x-4">
            <a href="#" class="bg-white/20 text-white px-3 py-2 rounded-md text-sm font-medium transition hover:bg-white/30" aria-current="page">Inicio</a>
            <a href="#" class="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition">Mapa</a>
            <a href="#" class="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition">Configuración</a>
          </div>
        </div>
      </div>

      <div class="hidden md:block">
        <button class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5 transition duration-150 active:scale-95 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Ubicación Actual
        </button>
      </div>

      <div class="-mr-2 flex md:hidden">
        <button id="mobile-menu-button" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition">
          <span class="sr-only">Abrir menú</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div id="mobile-menu" class="md:hidden max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-black/10 backdrop-blur-sm">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/10">
      <a href="#" class="bg-white/20 text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
      <a href="#" class="text-white/80 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium transition">Mapa</a>
      <a href="#" class="text-white/80 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium transition">Configuración</a>
      <button class="w-full mt-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold flex items-center justify-center gap-1.5 transition shadow-md">
            Ubicación Actual
      </button>
    </div>
  </div>
</nav>
`;

// 2. Lógica para inyectar y controlar la Navbar
document.addEventListener('DOMContentLoaded', () => {
    // Inyectar el HTML
    const navbarContainer = document.getElementById('navbar-app');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
        
        // --- Lógica del Menú Móvil (Funcionalidad extra!) ---
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuButton && mobileMenu) {
            menuButton.addEventListener('click', () => {
                // Alternamos la visibilidad usando altura máxima (animación fluida)
                if (mobileMenu.classList.contains('max-h-0')) {
                    mobileMenu.classList.remove('max-h-0');
                    mobileMenu.classList.add('max-h-96'); // Altura máxima aproximada
                } else {
                    mobileMenu.classList.remove('max-h-96');
                    mobileMenu.classList.add('max-h-0');
                }
            });
        }
    } else {
        console.error('No se encontró el contenedor "navbar-app" en el index.html');
    }
});
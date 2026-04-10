// js/Navbar.js

const navbarHTML = `
<nav class="bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-lg fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
            
            <div class="flex items-center">
                <a href="index.html" class="flex-shrink-0 flex items-center gap-3 group">
                    <img src="assets/Cap.png" alt="SkyCast Logo" class="h-10 w-10 group-hover:rotate-12 transition-transform duration-300">
                    <span class="text-white font-bold text-2xl tracking-tight">SkyCast</span>
                </a>
                
                <div class="hidden md:block ml-12">
                    <div class="flex items-baseline space-x-6">
                        <a href="index.html" class="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors">Inicio</a>
                        <a href="historial.html" class="text-white/70 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors">Historial</a>
                        <a href="mapas.html" class="text-white/70 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors">Mapas</a>
                        <a href="login.html" class="text-white/70 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors">Login</a>
                    </div>
                </div>
            </div>

            <div class="hidden md:block">
                <button id="geo-btn" class="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-yellow-400/20">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Ubicación Actual
                </button>
            </div>

            <div class="-mr-2 flex md:hidden">
                <button id="mobile-menu-button" type="button" class="inline-flex items-center justify-center p-2.5 rounded-xl text-white bg-white/10 hover:bg-white/20 transition-all">
                    <svg id="menu-icon" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div id="mobile-menu" class="md:hidden max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-slate-900/90 backdrop-blur-xl">
        <div class="px-6 pt-4 pb-8 space-y-2 border-t border-white/10">
            <a href="index.html" class="text-white block px-4 py-3 rounded-xl text-base font-medium hover:bg-white/10">Inicio</a>
            <a href="historial.html" class="text-white/70 block px-4 py-3 rounded-xl text-base font-medium hover:bg-white/10">Historial</a>
            <a href="mapas.html" class="text-white/70 block px-4 py-3 rounded-xl text-base font-medium hover:bg-white/10">Mapas</a>
            <a href="login.html" class="text-white/70 block px-4 py-3 rounded-xl text-base font-medium hover:bg-white/10">Login</a>
            
            <div class="pt-4">
                <button id="geo-btn-mobile" class="w-full bg-yellow-400 text-slate-900 px-4 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Ubicación Actual
                </button>
            </div>
        </div>
    </div>
</nav>
`;

document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar-app');
    
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
        
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuButton && mobileMenu) {
            menuButton.addEventListener('click', () => {
                // Alternar la altura máxima para el efecto de slide
                const isOpen = mobileMenu.classList.contains('max-h-96');
                
                if (isOpen) {
                    mobileMenu.classList.remove('max-h-96');
                    mobileMenu.classList.add('max-h-0');
                } else {
                    mobileMenu.classList.remove('max-h-0');
                    mobileMenu.classList.add('max-h-96');
                }
            });
        }
    }
});
// js/Footer.js

const footerHTML = `
<footer class="relative w-full text-white/70 pt-20 pb-16 mt-16 px-0 overflow-hidden">
    
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-transparent -z-10"></div>

    <div class="w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-40">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16 items-start">
            
            <div class="space-y-6 lg:col-span-1 md:col-span-2 lg:mb-0 mb-10">
                <div class="flex items-center gap-3.5">
                    <img src="assets/Cap.png" alt="SkyCast Logo" class="h-11 w-11">
                    <span class="text-white font-bold text-4xl tracking-tight">SkyCast</span>
                </div>
                <p class="text-base leading-relaxed text-white/60 max-w-xl">
                    Tu aliado confiable para pronósticos precisos al instante. 
                    Simplificando el clima, maximizando tu día.
                </p>
                <p class="text-[11px] text-white/30 uppercase tracking-[0.2em] font-medium pt-2">
                    © 2026 SkyCast Labs | San Miguel, El Salvador
                </p>
            </div>

            <div class="space-y-4">
                <h4 class="text-white font-semibold text-sm uppercase tracking-[0.25em] mb-8">Explorar</h4>
                <ul class="space-y-4 text-base font-medium">
                    <li><a href="index.html" class="hover:text-yellow-400 transition-colors">Inicio</a></li>
                    <li><a href="mapas.html" class="hover:text-yellow-400 transition-colors">Mapas Climatológicos</a></li>
                    <li><a href="configuracion.html" class="hover:text-yellow-400 transition-colors">Configuración</a></li>
                </ul>
            </div>

            <div class="space-y-4">
                <h4 class="text-white font-semibold text-sm uppercase tracking-[0.25em] mb-8">Información</h4>
                <ul class="space-y-4 text-base font-medium">
                    <li><a href="#" class="hover:text-yellow-400 transition-colors">Soporte Técnico</a></li>
                    <li><a href="#" class="hover:text-yellow-400 transition-colors">Aviso de Privacidad</a></li>
                    <li><a href="#" class="hover:text-yellow-400 transition-colors">Términos de Servicio</a></li>
                </ul>
            </div>

            <div class="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl space-y-5">
                <h4 class="text-white font-semibold text-2xl mb-2">Alertas</h4>
                <p class="text-sm text-white/50 mb-5">Notificaciones climatológicas directas a tu correo.</p>
                
                <div class="flex flex-col gap-3.5">
                    <input type="email" placeholder="correo@ejemplo.com" 
                        class="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-base text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-yellow-400/50">
                    <button class="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-extrabold py-4 rounded-2xl shadow-lg shadow-yellow-400/25 active:scale-95 transition-all text-lg">
                        Suscribirme
                    </button>
                </div>
            </div>
        </div>

        <div class="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-white/20 uppercase tracking-[0.25em]">
            <div class="flex gap-10">
                <a href="#" class="hover:text-white transition">Privacidad</a>
                <a href="#" class="hover:text-white transition">Accesibilidad</a>
            </div>
            <p>Parcial 2 - Programación IV - UGB 2026</p>
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footer-app');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});
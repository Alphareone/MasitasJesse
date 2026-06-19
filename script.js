/**
 * Masas Jessy - Motor Lógico e Interacciones
 * Arquitectura Segmentada Segura
 */

document.addEventListener("DOMContentLoaded", () => {
    // Inicialización segura de módulos independientes
    initScrollReveal();
    initMarketingBanner();
});

/**
 * MÓDULO 1: Scroll Reveal (Aparición Fluida al Deslizar)
 */
function initScrollReveal() {
    try {
        const elementsToReveal = document.querySelectorAll('.scroll-reveal');
        
        // Cláusula de guarda por seguridad si no existen elementos en el DOM
        if (elementsToReveal.length === 0) return;

        const revealOnScroll = () => {
            // Activa el efecto cuando el elemento entra al 88% del alto de pantalla
            const triggerBottom = window.innerHeight * 0.88;

            elementsToReveal.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < triggerBottom) {
                    el.classList.add('active');
                }
            });
        };

        // Escucha pasiva de scroll para optimizar rendimiento en móviles
        window.addEventListener('scroll', revealOnScroll, { passive: true });
        revealOnScroll(); // Disparo inicial
        
    } catch (error) {
        console.error("Error controlado en el módulo Scroll Reveal:", error);
    }
}

/**
 * MÓDULO 2: Banner de Ventas de Fin de Semana (Viernes a Domingo)
 */
function initMarketingBanner() {
    try {
        const currentDay = new Date().getDay();
        // 5 = Viernes, 6 = Sábado, 0 = Domingo
        const isWeekend = [5, 6, 0].includes(currentDay);

        if (isWeekend) {
            const weekendBanner = document.createElement("div");
            
            // Clases utilitarias de Tailwind combinadas para el diseño del anuncio superior
            weekendBanner.className = "bg-rojo-amor text-white text-center py-2.5 px-4 font-bold text-sm sticky top-0 z-50 shadow-md transition-all duration-300";
            weekendBanner.innerHTML = "✨ ¡Fin de semana en Masas Jessy! Asegura hoy tus packs congelados familiares ❤️";
            
            // Inyección limpia al principio del body
            document.body.insertBefore(weekendBanner, document.body.firstChild);
        }
    } catch (error) {
        console.error("Error controlado en el módulo Banner Comercial:", error);
    }
}

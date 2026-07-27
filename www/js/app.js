// ============================
// BRIGHTER-PAD - App Principal
// ============================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 BRIGHTER-PAD Iniciado');
    
    // Tema oscuro/claro
    const themeToggle = document.getElementById('themeToggle');
    let isDark = true;
    
    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        const body = document.body;
        
        if (isDark) {
            body.style.background = '#0A0A0A';
            body.style.color = '#FFFFFF';
            themeToggle.querySelector('.theme-icon').textContent = '🌙';
            document.querySelector('.header').style.background = 'rgba(10, 10, 10, 0.8)';
        } else {
            body.style.background = '#F5F5F5';
            body.style.color = '#1A1A1A';
            themeToggle.querySelector('.theme-icon').textContent = '☀️';
            document.querySelector('.header').style.background = 'rgba(255, 255, 255, 0.8)';
            
            // Ajustar textos en modo claro
            document.querySelectorAll('.card-subtitle, .card-count, .section-subtitle').forEach(el => {
                el.style.color = '#666666';
            });
        }
    });
    
    // Detectar si el usuario prefiere tema oscuro
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        themeToggle.click();
    }
    
    // Efecto de partículas sutiles (solo en desktop)
    if (window.innerWidth > 768) {
        createParticles();
    }
    
    // Animación de bienvenida con consola
    console.log('%c✨ BRIGHTER-PAD ✨', 'font-size: 24px; font-weight: bold; color: #2BBC91;');
    console.log('%cPantallas Interactivas para el Futuro', 'font-size: 14px; color: #FF5440;');
    console.log('%c📱 Desarrollado con ❤️ para Brighter', 'font-size: 12px; color: #FF6E2B;');
});

// Crear partículas de fondo
function createParticles() {
    const container = document.createElement('div');
    container.className = 'particles';
    document.body.appendChild(container);
    
    const colors = ['#2BBC91', '#FF5440', '#FF6E2B', '#CD1D2D', '#EC232A'];
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        container.appendChild(particle);
    }
}

// Gestión de errores global
window.addEventListener('error', (e) => {
    console.error('❌ Error en BRIGHTER-PAD:', e.message);
});

// Performance logging
if (window.performance) {
    const perfData = window.performance.timing;
    const loadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`⏱️ Tiempo de carga: ${loadTime}ms`);
}

// Detectar pantallas táctiles
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.body.classList.add('touch-device');
    console.log('👆 Dispositivo táctil detectado');
}

// Prevenir zoom en doble tap (para pantallas táctiles)
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });
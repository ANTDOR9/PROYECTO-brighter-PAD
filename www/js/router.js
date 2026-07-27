// ============================
// BRIGHTER-PAD - Router
// ============================

class Router {
    constructor() {
        this.currentSection = 'home';
        this.currentCategory = null;
        this.history = [];
        
        // Elementos DOM
        this.homeSection = document.getElementById('homeSection');
        this.appsSection = document.getElementById('appsSection');
        this.categoriesGrid = document.getElementById('categoriesGrid');
        this.appsGrid = document.getElementById('appsGrid');
        this.categoryTitle = document.getElementById('categoryTitle');
        this.categoryDescription = document.getElementById('categoryDescription');
        this.searchInput = document.getElementById('searchInput');
        this.backButton = document.getElementById('backButton');
        this.modal = document.getElementById('appModal');
        
        // Bind events
        this.bindEvents();
    }
    
    bindEvents() {
        // Back button
        this.backButton.addEventListener('click', () => this.goHome());
        
        // Modal close
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.modal.classList.contains('active')) {
                    this.closeModal();
                } else if (this.currentSection === 'apps') {
                    this.goHome();
                }
            }
        });
        
        // Search
        let searchTimeout;
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.filterApps(e.target.value);
            }, 300);
        });
    }
    
    navigateTo(section, categoryId = null) {
        if (section === 'home') {
            this.goHome();
        } else if (section === 'apps' && categoryId) {
            this.goToCategory(categoryId);
        }
    }
    
    goHome() {
        this.currentSection = 'home';
        this.currentCategory = null;
        
        // Hide/Show sections
        this.homeSection.classList.add('active');
        this.appsSection.classList.remove('active');
        
        // Clear search
        this.searchInput.value = '';
        
        // Render categories
        this.renderCategories();
        
        // Update history
        this.history = [];
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    goToCategory(categoryId) {
        const category = appData.categories.find(c => c.id === categoryId);
        if (!category) return;
        
        this.currentSection = 'apps';
        this.currentCategory = category;
        
        // Hide/Show sections
        this.homeSection.classList.remove('active');
        this.appsSection.classList.add('active');
        
        // Update category info
        this.categoryTitle.textContent = category.name;
        this.categoryDescription.textContent = `${category.apps.length} aplicaciones disponibles`;
        
        // Render apps
        this.renderApps(category);
        
        // Add to history
        this.history.push(categoryId);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    renderCategories() {
        const grid = this.categoriesGrid;
        grid.innerHTML = '';
        
        appData.categories.forEach((category, index) => {
            const card = document.createElement('div');
            card.className = 'card stagger';
            card.style.animationDelay = `${index * 0.05}s`;
            card.innerHTML = `
                <div class="card-accent ${category.accent}"></div>
                <div class="card-icon">${category.name.split(' ')[0]}</div>
                <div class="card-title">${category.name}</div>
                <div class="card-subtitle">${category.description}</div>
                <div class="card-count">${category.apps.length} aplicaciones</div>
            `;
            card.addEventListener('click', () => this.goToCategory(category.id));
            grid.appendChild(card);
        });
    }
    
    renderApps(category) {
        const grid = this.appsGrid;
        grid.innerHTML = '';
        
        category.apps.forEach((app, index) => {
            const card = document.createElement('div');
            card.className = 'card stagger';
            card.style.animationDelay = `${index * 0.05}s`;
            card.innerHTML = `
                <div class="card-accent" style="background: ${app.color}"></div>
                <div class="card-icon">${app.icon}</div>
                <div class="card-title">${app.name}</div>
                <div class="card-subtitle">${app.description}</div>
                <div class="card-count">🔗 Haga clic para abrir</div>
            `;
            card.addEventListener('click', () => this.openAppModal(app));
            grid.appendChild(card);
        });
    }
    
    filterApps(query) {
        if (this.currentSection !== 'apps' || !this.currentCategory) return;
        
        const cards = this.appsGrid.querySelectorAll('.card');
        const searchTerm = query.toLowerCase().trim();
        
        cards.forEach((card, index) => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const subtitle = card.querySelector('.card-subtitle').textContent.toLowerCase();
            const match = title.includes(searchTerm) || subtitle.includes(searchTerm);
            
            if (searchTerm === '') {
                card.style.display = 'flex';
                card.style.animation = `slideUp 0.4s ease ${index * 0.05}s forwards`;
            } else if (match) {
                card.style.display = 'flex';
                card.style.animation = `slideUp 0.3s ease forwards`;
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    openAppModal(app) {
        document.getElementById('modalIcon').textContent = app.icon;
        document.getElementById('modalTitle').textContent = app.name;
        document.getElementById('modalDescription').textContent = app.description;
        
        // Configurar botones
        const downloadBtn = document.getElementById('modalDownload');
        const openBtn = document.getElementById('modalOpen');
        
        if (app.url && app.url !== '#') {
            openBtn.style.display = 'flex';
            openBtn.onclick = () => {
                window.open(app.url, '_blank');
                this.closeModal();
            };
        } else {
            openBtn.style.display = 'none';
        }
        
        downloadBtn.onclick = () => {
            // Simular descarga
            downloadBtn.innerHTML = '✅ ¡Descargado!';
            downloadBtn.style.background = '#2BBC91';
            setTimeout(() => {
                downloadBtn.innerHTML = '📥 Descargar';
                downloadBtn.style.background = '';
                this.closeModal();
            }, 1500);
            
            // Mostrar notificación (simple)
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(43, 188, 145, 0.9);
                backdrop-filter: blur(20px);
                padding: 16px 32px;
                border-radius: 16px;
                color: #0A0A0A;
                font-weight: 600;
                font-family: 'Inter', sans-serif;
                z-index: 2000;
                animation: slideUp 0.3s ease;
                box-shadow: 0 8px 32px rgba(43, 188, 145, 0.3);
                border: 1px solid rgba(255, 255, 255, 0.1);
            `;
            notification.textContent = `📥 ${app.name} - Descarga iniciada`;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'fadeIn 0.3s ease reverse';
                setTimeout(() => notification.remove(), 300);
            }, 2500);
        };
        
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Inicializar router
document.addEventListener('DOMContentLoaded', () => {
    window.router = new Router();
});
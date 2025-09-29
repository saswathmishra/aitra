// Travel Resource Manager JavaScript

class TravelResourceManager {
    constructor() {
        this.resources = this.loadResources();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setDefaultDates();
        this.renderResources();
        this.updateFilterStatus();
    }

    setupEventListeners() {
        // Form submission
        document.getElementById('resourceForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addResource();
        });

        // Date validation
        document.getElementById('startDate').addEventListener('change', this.validateDates.bind(this));
        document.getElementById('endDate').addEventListener('change', this.validateDates.bind(this));
    }

    setDefaultDates() {
        const today = new Date().toISOString().split('T')[0];
        const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        
        document.getElementById('startDate').value = today;
        document.getElementById('endDate').value = tomorrow;
    }

    validateDates() {
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        
        if (startDate && endDate && startDate > endDate) {
            document.getElementById('endDate').setCustomValidity('End date must be after start date');
        } else {
            document.getElementById('endDate').setCustomValidity('');
        }
    }

    addResource() {
        const form = document.getElementById('resourceForm');
        const formData = new FormData(form);
        
        const resource = {
            id: Date.now().toString(),
            title: formData.get('title').trim(),
            url: formData.get('url').trim(),
            startDate: formData.get('startDate'),
            endDate: formData.get('endDate'),
            createdAt: new Date().toISOString()
        };

        // Validate URL
        if (!this.isValidUrl(resource.url)) {
            this.showMessage('Please enter a valid URL', 'error');
            return;
        }

        // Check for duplicate URLs
        if (this.resources.some(r => r.url === resource.url)) {
            this.showMessage('A resource with this URL already exists', 'error');
            return;
        }

        this.resources.push(resource);
        this.saveResources();
        this.renderResources();
        this.updateFilterStatus();
        form.reset();
        this.setDefaultDates();
        this.showMessage('Resource added successfully!', 'success');
    }

    deleteResource(id) {
        if (confirm('Are you sure you want to delete this resource?')) {
            this.resources = this.resources.filter(r => r.id !== id);
            this.saveResources();
            this.renderResources();
            this.updateFilterStatus();
            this.showMessage('Resource deleted successfully!', 'success');
        }
    }

    isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    getResourceStatus(resource) {
        const today = new Date().toISOString().split('T')[0];
        const startDate = resource.startDate;
        const endDate = resource.endDate;

        if (today < startDate) {
            return 'future';
        } else if (today > endDate) {
            return 'expired';
        } else {
            return 'active';
        }
    }

    getFilteredResources() {
        const today = new Date().toISOString().split('T')[0];
        
        // Find the earliest start date among all resources
        const earliestDate = this.resources.length > 0 
            ? this.resources.reduce((earliest, resource) => 
                resource.startDate < earliest ? resource.startDate : earliest, 
                this.resources[0].startDate)
            : today;

        // Filter resources from earliest date until today (passed dates)
        return this.resources.filter(resource => {
            return resource.startDate >= earliestDate && resource.endDate >= today;
        }).sort((a, b) => {
            // Sort by start date, then by title
            if (a.startDate !== b.startDate) {
                return a.startDate.localeCompare(b.startDate);
            }
            return a.title.localeCompare(b.title);
        });
    }

    renderResources() {
        const resourcesList = document.getElementById('resourcesList');
        const emptyState = document.getElementById('emptyState');
        const filteredResources = this.getFilteredResources();

        if (filteredResources.length === 0) {
            resourcesList.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }

        resourcesList.style.display = 'block';
        emptyState.style.display = 'none';

        resourcesList.innerHTML = filteredResources.map(resource => {
            const status = this.getResourceStatus(resource);
            const statusClass = `status-${status}`;
            const statusText = status.charAt(0).toUpperCase() + status.slice(1);

            return `
                <div class="resource-item" data-id="${resource.id}">
                    <div class="resource-header">
                        <div>
                            <div class="resource-title">${this.escapeHtml(resource.title)}</div>
                            <a href="${this.escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer" class="resource-url">
                                ${this.escapeHtml(resource.url)}
                            </a>
                        </div>
                        <button class="btn btn-danger" onclick="travelManager.deleteResource('${resource.id}')">
                            Delete
                        </button>
                    </div>
                    <div class="resource-dates">
                        <div class="date-item">
                            <span class="date-label">Valid From:</span>
                            <span class="date-value">${this.formatDate(resource.startDate)}</span>
                        </div>
                        <div class="date-item">
                            <span class="date-label">Valid Until:</span>
                            <span class="date-value">${this.formatDate(resource.endDate)}</span>
                        </div>
                    </div>
                    <div class="resource-status ${statusClass}">${statusText}</div>
                </div>
            `;
        }).join('');
    }

    updateFilterStatus() {
        const filterStatus = document.getElementById('filterStatus');
        const filteredResources = this.getFilteredResources();
        const totalResources = this.resources.length;
        
        if (totalResources === 0) {
            filterStatus.textContent = 'No resources to display';
            return;
        }

        const earliestDate = this.resources.reduce((earliest, resource) => 
            resource.startDate < earliest ? resource.startDate : earliest, 
            this.resources[0].startDate);
        
        const today = new Date().toISOString().split('T')[0];
        const formattedEarliest = this.formatDate(earliestDate);
        const formattedToday = this.formatDate(today);

        filterStatus.textContent = `Showing ${filteredResources.length} of ${totalResources} resources (${formattedEarliest} to ${formattedToday})`;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showMessage(message, type = 'info') {
        // Remove existing messages
        const existingMessage = document.querySelector('.success-message, .error-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
        messageDiv.textContent = message;
        
        const form = document.getElementById('resourceForm');
        form.parentNode.insertBefore(messageDiv, form);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 3000);
    }

    // Local Storage methods
    saveResources() {
        try {
            localStorage.setItem('travelResources', JSON.stringify(this.resources));
        } catch (error) {
            console.error('Error saving resources:', error);
            this.showMessage('Error saving resources to local storage', 'error');
        }
    }

    loadResources() {
        try {
            const stored = localStorage.getItem('travelResources');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading resources:', error);
            this.showMessage('Error loading resources from local storage', 'error');
            return [];
        }
    }
}

// Initialize the application
let travelManager;

document.addEventListener('DOMContentLoaded', () => {
    travelManager = new TravelResourceManager();
});

// Add error message styles
const style = document.createElement('style');
style.textContent = `
    .error-message {
        background: #f8d7da;
        color: #721c24;
        padding: 12px 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        border: 1px solid #f5c6cb;
        animation: slideIn 0.3s ease-out;
    }
`;
document.head.appendChild(style);

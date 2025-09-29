// Thailand Travel Itinerary App

class TravelItinerary {
    constructor() {
        this.tripData = null;
        this.currentDayIndex = 0;
        this.init();
    }

    init() {
        try {
            this.loadTripData();
            this.setupEventListeners();
            this.renderQuickNavigation();
            this.showDay(this.currentDayIndex);
        } catch (error) {
            console.error('Error initializing app:', error);
            this.showError('Failed to load trip data');
        }
    }

    loadTripData() {
        // Embedded trip data to avoid CORS issues when opening file directly
        this.tripData = {
            "trip": {
                "title": "Thailand Adventure",
                "destination": "Thailand",
                "departure": "Bhubaneswar",
                "startDate": "2025-09-29",
                "endDate": "2025-10-07",
                "totalDays": 9
            },
            "itinerary": [
                {
                    "date": "2025-09-29",
                    "day": 1,
                    "location": "Bhubaneswar → Thailand",
                    "type": "travel",
                    "activities": [
                        {
                            "time": "21:45",
                            "title": "Baggage Check-in Closes",
                            "description": "Flight 6E 1065 - Bhubaneswar to Thailand",
                            "location": "Bhubaneswar Airport",
                            "type": "flight",
                            "details": {
                                "flightNumber": "6E 1065",
                                "departure": "23:00",
                                "arrival": "03:15 AM (next day)",
                                "seats": "11-A,B,C,D,E,F",
                                "pnr": "P8933N",
                                "baggageClose": "21:45"
                            },
                            "links": [
                                {
                                    "title": "Flight Tickets",
                                    "url": "https://drive.google.com/drive/u/0/folders/1P5Fm8HsFFMAmCdAMbQA5zK_3GjfZfceR"
                                }
                            ]
                        }
                    ]
                },
                {
                    "date": "2025-09-30",
                    "day": 2,
                    "location": "Pattaya",
                    "type": "accommodation",
                    "activities": [
                        {
                            "time": "Check-in",
                            "title": "Hotel Check-in",
                            "description": "Arrive in Thailand and check into Pattaya hotel",
                            "location": "Pattaya",
                            "type": "hotel",
                            "details": {
                                "checkIn": "2025-09-30",
                                "checkOut": "2025-10-03",
                                "duration": "3 nights"
                            },
                            "links": [
                                {
                                    "title": "Hotel Booking",
                                    "url": "https://www.airbnb.co.in/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMR2DJA2RN"
                                }
                            ]
                        },
                        {
                            "time": "Morning",
                            "title": "Thailand Digital Arrival Card",
                            "description": "Complete digital arrival card for Thailand entry",
                            "location": "Online",
                            "type": "document",
                            "links": [
                                {
                                    "title": "Digital Arrival Card",
                                    "url": "https://drive.google.com/drive/u/0/folders/1vKKc6Vy0RSsw9WaqCLC8Ok5sRzBKK1JB"
                                }
                            ]
                        }
                    ]
                },
                {
                    "date": "2025-10-01",
                    "day": 3,
                    "location": "Pattaya",
                    "type": "exploration",
                    "activities": [
                        {
                            "time": "Full Day",
                            "title": "Explore Pattaya",
                            "description": "Discover Pattaya's beaches, temples, and local attractions",
                            "location": "Pattaya",
                            "type": "activity"
                        }
                    ]
                },
                {
                    "date": "2025-10-02",
                    "day": 4,
                    "location": "Pattaya",
                    "type": "exploration",
                    "activities": [
                        {
                            "time": "Full Day",
                            "title": "Pattaya Adventures",
                            "description": "Continue exploring Pattaya and nearby attractions",
                            "location": "Pattaya",
                            "type": "activity"
                        }
                    ]
                },
                {
                    "date": "2025-10-03",
                    "day": 5,
                    "location": "Pattaya → Phuket",
                    "type": "travel",
                    "activities": [
                        {
                            "time": "Check-out",
                            "title": "Hotel Check-out",
                            "description": "Check out from Pattaya hotel",
                            "location": "Pattaya",
                            "type": "hotel"
                        },
                        {
                            "time": "01:00",
                            "title": "Flight to Phuket",
                            "description": "Bangkok Airways PG-281 - Pattaya to Phuket",
                            "location": "Pattaya Airport",
                            "type": "flight",
                            "details": {
                                "flightNumber": "PG-281",
                                "airline": "Bangkok Airways",
                                "departure": "01:00",
                                "arrival": "14:40",
                                "pnr": "FRYMAB"
                            },
                            "links": [
                                {
                                    "title": "Flight Tickets (PG-281)",
                                    "url": "https://drive.google.com/drive/u/0/folders/1GxBtGFzwzOesYwkoGBEAFWGu2b6hOueT"
                                }
                            ]
                        },
                        {
                            "time": "Check-in",
                            "title": "Hotel Check-in Phuket",
                            "description": "Check into Phuket hotel",
                            "location": "Phuket",
                            "type": "hotel",
                            "details": {
                                "checkIn": "2025-10-03",
                                "checkOut": "2025-10-05",
                                "duration": "2 nights"
                            },
                            "links": [
                                {
                                    "title": "Phuket Hotel Booking",
                                    "url": "https://www.airbnb.co.in/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMSR9D9SX8"
                                }
                            ]
                        }
                    ]
                },
                {
                    "date": "2025-10-04",
                    "day": 6,
                    "location": "Phuket",
                    "type": "exploration",
                    "activities": [
                        {
                            "time": "Full Day",
                            "title": "Explore Phuket",
                            "description": "Discover Phuket's beautiful beaches and island attractions",
                            "location": "Phuket",
                            "type": "activity"
                        }
                    ]
                },
                {
                    "date": "2025-10-05",
                    "day": 7,
                    "location": "Phuket",
                    "type": "travel",
                    "activities": [
                        {
                            "time": "Check-out",
                            "title": "Hotel Check-out",
                            "description": "Check out from first Phuket hotel",
                            "location": "Phuket",
                            "type": "hotel"
                        },
                        {
                            "time": "Check-in",
                            "title": "Hotel Check-in Phuket (2nd)",
                            "description": "Check into second Phuket hotel",
                            "location": "Phuket",
                            "type": "hotel",
                            "details": {
                                "checkIn": "2025-10-05",
                                "checkOut": "2025-10-06",
                                "duration": "1 night"
                            },
                            "links": [
                                {
                                    "title": "Phuket Hotel Booking (2nd)",
                                    "url": "https://www.airbnb.co.in/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMATNQC4CA"
                                }
                            ]
                        }
                    ]
                },
                {
                    "date": "2025-10-06",
                    "day": 8,
                    "location": "Phuket → Bangkok",
                    "type": "travel",
                    "activities": [
                        {
                            "time": "Check-out",
                            "title": "Hotel Check-out",
                            "description": "Check out from Phuket hotel",
                            "location": "Phuket",
                            "type": "hotel"
                        },
                        {
                            "time": "10:20",
                            "title": "Flight to Bangkok",
                            "description": "Bangkok Airways PG-272 - Phuket to Bangkok",
                            "location": "Phuket Airport",
                            "type": "flight",
                            "details": {
                                "flightNumber": "PG-272",
                                "airline": "Bangkok Airways",
                                "departure": "10:20",
                                "arrival": "11:55",
                                "pnr": "EA2FMQ"
                            },
                            "links": [
                                {
                                    "title": "Flight Tickets (PG-272)",
                                    "url": "https://drive.google.com/drive/u/0/folders/1JSHCZDwGrMolcTtJVAyEpEo5MNtXkByZ"
                                }
                            ]
                        },
                        {
                            "time": "Check-in",
                            "title": "Hotel Check-in Bangkok",
                            "description": "Check into Bangkok hotel",
                            "location": "Bangkok",
                            "type": "hotel",
                            "details": {
                                "checkIn": "2025-10-06",
                                "checkOut": "2025-10-07",
                                "duration": "1 night"
                            },
                            "links": [
                                {
                                    "title": "Bangkok Hotel Booking",
                                    "url": "https://www.airbnb.co.in/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMSAW8EWN2"
                                }
                            ]
                        }
                    ]
                },
                {
                    "date": "2025-10-07",
                    "day": 9,
                    "location": "Bangkok → Bhubaneswar",
                    "type": "travel",
                    "activities": [
                        {
                            "time": "Check-out",
                            "title": "Hotel Check-out",
                            "description": "Check out from Bangkok hotel",
                            "location": "Bangkok",
                            "type": "hotel"
                        },
                        {
                            "time": "21:45",
                            "title": "Baggage Check-in Closes",
                            "description": "Flight 6E 1066 - Thailand to Bhubaneswar",
                            "location": "Bangkok Airport",
                            "type": "flight",
                            "details": {
                                "flightNumber": "6E 1066",
                                "departure": "04:15",
                                "arrival": "03:15 AM (next day)",
                                "seats": "11-A,B,C,D,E,F",
                                "pnr": "W5HUYM",
                                "baggageClose": "21:45"
                            },
                            "links": [
                                {
                                    "title": "Flight Tickets",
                                    "url": "https://drive.google.com/drive/u/0/folders/128gaSRdiPwGQGD5EBDI51vbcw0U634PU"
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }

    setupEventListeners() {
        // Navigation buttons
        document.getElementById('prevDay').addEventListener('click', () => {
            this.previousDay();
        });

        document.getElementById('nextDay').addEventListener('click', () => {
            this.nextDay();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousDay();
            } else if (e.key === 'ArrowRight') {
                this.nextDay();
            }
        });
    }

    previousDay() {
        if (this.currentDayIndex > 0) {
            this.currentDayIndex--;
            this.showDay(this.currentDayIndex);
        }
    }

    nextDay() {
        if (this.currentDayIndex < this.tripData.itinerary.length - 1) {
            this.currentDayIndex++;
            this.showDay(this.currentDayIndex);
        }
    }

    showDay(dayIndex) {
        if (!this.tripData || dayIndex < 0 || dayIndex >= this.tripData.itinerary.length) {
            return;
        }

        const day = this.tripData.itinerary[dayIndex];
        this.currentDayIndex = dayIndex;

        // Update navigation
        this.updateNavigation();
        
        // Update day overview
        this.updateDayOverview(day);
        
        // Update activities
        this.updateActivities(day);
        
        // Update day summary
        this.updateDaySummary(day);
        
        // Update quick navigation
        this.updateQuickNavigation();
    }

    updateNavigation() {
        const prevBtn = document.getElementById('prevDay');
        const nextBtn = document.getElementById('nextDay');
        const currentDate = document.getElementById('currentDate');
        const currentDay = document.getElementById('currentDay');

        const day = this.tripData.itinerary[this.currentDayIndex];
        
        // Update buttons
        prevBtn.disabled = this.currentDayIndex === 0;
        nextBtn.disabled = this.currentDayIndex === this.tripData.itinerary.length - 1;
        
        // Update date display
        currentDate.textContent = this.formatDate(day.date);
        currentDay.textContent = `Day ${day.day}`;
    }

    updateDayOverview(day) {
        document.getElementById('dayTitle').textContent = `Day ${day.day}: ${day.location}`;
        document.getElementById('dayLocation').textContent = day.location;
        document.getElementById('dayType').textContent = day.type;
        
        // Update quick access bar with relevant bookings
        this.updateQuickAccessBar(day);
    }

    updateActivities(day) {
        const activitiesList = document.getElementById('activitiesList');
        
        if (day.activities.length === 0) {
            activitiesList.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📅</div>
                    <h3>No activities scheduled</h3>
                    <p>Enjoy your free time!</p>
                </div>
            `;
            return;
        }

        activitiesList.innerHTML = day.activities.map(activity => {
            return this.createActivityHTML(activity);
        }).join('');
    }

    createActivityHTML(activity) {
        const typeClass = `type-${activity.type}`;
        const detailsHTML = activity.details ? this.createDetailsHTML(activity.details) : '';
        const linksHTML = activity.links ? this.createLinksHTML(activity.links) : '';

        return `
            <div class="activity-item">
                <div class="activity-header">
                    <div>
                        <div class="activity-title">${this.escapeHtml(activity.title)}</div>
                        <div class="activity-description">${this.escapeHtml(activity.description)}</div>
                        <div class="activity-location">${this.escapeHtml(activity.location)}</div>
                    </div>
                    <div class="activity-time">${activity.time}</div>
                </div>
                <div class="activity-type ${typeClass}">${activity.type}</div>
                ${detailsHTML}
                ${linksHTML}
            </div>
        `;
    }

    createDetailsHTML(details) {
        const detailItems = Object.entries(details).map(([key, value]) => {
            const label = this.formatLabel(key);
            return `
                <div class="detail-item">
                    <div class="detail-label">${label}</div>
                    <div class="detail-value">${this.escapeHtml(value)}</div>
                </div>
            `;
        }).join('');

        return `
            <div class="activity-details">
                <div class="details-grid">
                    ${detailItems}
                </div>
            </div>
        `;
    }

    createLinksHTML(links) {
        const linkButtons = links.map(link => {
            return `
                <a href="${this.escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer" class="link-btn">
                    ${this.escapeHtml(link.title)}
                </a>
            `;
        }).join('');

        return `
            <div class="activity-links">
                ${linkButtons}
            </div>
        `;
    }

    updateDaySummary(day) {
        const daySummary = document.getElementById('daySummary');
        
        const summaryItems = [];
        
        // Add location summary
        summaryItems.push(`
            <div class="summary-item">
                <h4>📍 Location</h4>
                <p>${this.escapeHtml(day.location)}</p>
            </div>
        `);
        
        // Add activities summary
        const activityTypes = [...new Set(day.activities.map(a => a.type))];
        summaryItems.push(`
            <div class="summary-item">
                <h4>🎯 Activities</h4>
                <p>${activityTypes.length} different types: ${activityTypes.join(', ')}</p>
            </div>
        `);
        
        // Add time summary
        const times = day.activities.map(a => a.time).filter(t => t && t !== 'Check-in' && t !== 'Check-out');
        if (times.length > 0) {
            summaryItems.push(`
                <div class="summary-item">
                    <h4>⏰ Key Times</h4>
                    <p>${times.join(', ')}</p>
                </div>
            `);
        }
        
        // Add links summary
        const totalLinks = day.activities.reduce((count, activity) => {
            return count + (activity.links ? activity.links.length : 0);
        }, 0);
        
        if (totalLinks > 0) {
            summaryItems.push(`
                <div class="summary-item">
                    <h4>🔗 Resources</h4>
                    <p>${totalLinks} important links and documents</p>
                </div>
            `);
        }
        
        daySummary.innerHTML = summaryItems.join('');
    }

    renderQuickNavigation() {
        const quickNavDays = document.getElementById('quickNavDays');
        
        quickNavDays.innerHTML = this.tripData.itinerary.map((day, index) => {
            const isActive = index === this.currentDayIndex;
            const activeClass = isActive ? 'active' : '';
            
            return `
                <button class="quick-nav-btn ${activeClass}" onclick="travelItinerary.showDay(${index})">
                    Day ${day.day}
                </button>
            `;
        }).join('');
    }

    updateQuickNavigation() {
        const quickNavButtons = document.querySelectorAll('.quick-nav-btn');
        quickNavButtons.forEach((btn, index) => {
            btn.classList.toggle('active', index === this.currentDayIndex);
        });
    }

    updateQuickAccessBar(day) {
        const quickAccessBar = document.querySelector('.quick-access-bar');
        
        // Get all hotel bookings that are active on this day
        const hotelBookings = [];
        
        // Check all days in the itinerary for hotel bookings that span this day
        this.tripData.itinerary.forEach(tripDay => {
            tripDay.activities.forEach(activity => {
                if (activity.type === 'hotel' && activity.links && activity.details) {
                    const checkIn = activity.details.checkIn;
                    const checkOut = activity.details.checkOut;
                    
                    // Check if current day falls within the hotel stay period
                    if (checkIn && checkOut && day.date >= checkIn && day.date < checkOut) {
                        activity.links.forEach(link => {
                            if (link.url.includes('airbnb')) {
                                hotelBookings.push({
                                    title: link.title,
                                    url: link.url,
                                    checkIn: checkIn,
                                    checkOut: checkOut,
                                    location: activity.location
                                });
                            }
                        });
                    }
                }
            });
        });

        // Create HTML for quick access items
        let quickAccessHTML = `
            <div class="quick-access-item">
                <span class="quick-access-icon">📋</span>
                <a href="https://drive.google.com/drive/u/0/folders/1vKKc6Vy0RSsw9WaqCLC8Ok5sRzBKK1JB" target="_blank" rel="noopener noreferrer" class="quick-access-link">
                    Thailand Digital Arrival Card
                </a>
            </div>
        `;

        // Add flight tickets
        if (day.date === '2025-09-29') {
            quickAccessHTML += `
                <div class="quick-access-item">
                    <span class="quick-access-icon">✈️</span>
                    <a href="https://drive.google.com/drive/u/0/folders/1P5Fm8HsFFMAmCdAMbQA5zK_3GjfZfceR" target="_blank" rel="noopener noreferrer" class="quick-access-link">
                        Flight Tickets (6E 1065)
                    </a>
                </div>
            `;
        }

        if (day.date === '2025-10-03') {
            quickAccessHTML += `
                <div class="quick-access-item">
                    <span class="quick-access-icon">✈️</span>
                    <a href="https://drive.google.com/drive/u/0/folders/1GxBtGFzwzOesYwkoGBEAFWGu2b6hOueT" target="_blank" rel="noopener noreferrer" class="quick-access-link">
                        Flight Tickets (PG-281)
                    </a>
                </div>
            `;
        }

        if (day.date === '2025-10-06') {
            quickAccessHTML += `
                <div class="quick-access-item">
                    <span class="quick-access-icon">✈️</span>
                    <a href="https://drive.google.com/drive/u/0/folders/1JSHCZDwGrMolcTtJVAyEpEo5MNtXkByZ" target="_blank" rel="noopener noreferrer" class="quick-access-link">
                        Flight Tickets (PG-272)
                    </a>
                </div>
            `;
        }

        if (day.date === '2025-10-07') {
            quickAccessHTML += `
                <div class="quick-access-item">
                    <span class="quick-access-icon">✈️</span>
                    <a href="https://drive.google.com/drive/u/0/folders/128gaSRdiPwGQGD5EBDI51vbcw0U634PU" target="_blank" rel="noopener noreferrer" class="quick-access-link">
                        Flight Tickets (6E 1066)
                    </a>
                </div>
            `;
        }

        // Add hotel bookings for this day
        hotelBookings.forEach(booking => {
            const checkInDate = booking.checkIn ? this.formatDate(booking.checkIn) : '';
            const checkOutDate = booking.checkOut ? this.formatDate(booking.checkOut) : '';
            const dateRange = checkInDate && checkOutDate ? ` (${checkInDate} - ${checkOutDate})` : '';
            
            quickAccessHTML += `
                <div class="quick-access-item">
                    <span class="quick-access-icon">🏨</span>
                    <a href="${this.escapeHtml(booking.url)}" target="_blank" rel="noopener noreferrer" class="quick-access-link">
                        ${this.escapeHtml(booking.title)}${dateRange}
                    </a>
                </div>
            `;
        });

        quickAccessBar.innerHTML = quickAccessHTML;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    formatLabel(key) {
        const labels = {
            'flightNumber': 'Flight Number',
            'departure': 'Departure',
            'arrival': 'Arrival',
            'seats': 'Seats',
            'pnr': 'PNR',
            'baggageClose': 'Baggage Close',
            'checkIn': 'Check-in',
            'checkOut': 'Check-out',
            'duration': 'Duration'
        };
        return labels[key] || key;
    }

    escapeHtml(text) {
        if (typeof text !== 'string') {
            text = String(text);
        }
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showError(message) {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <div class="error-state">
                <h2>⚠️ Error</h2>
                <p>${message}</p>
                <button onclick="location.reload()" class="btn btn-primary">Retry</button>
            </div>
        `;
    }
}

// Initialize the app
let travelItinerary;

document.addEventListener('DOMContentLoaded', () => {
    travelItinerary = new TravelItinerary();
});

// Add error state styles
const style = document.createElement('style');
style.textContent = `
    .error-state {
        background: white;
        padding: 60px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        text-align: center;
        margin: 50px auto;
        max-width: 500px;
    }
    
    .error-state h2 {
        color: #e74c3c;
        margin-bottom: 20px;
        font-size: 2rem;
    }
    
    .error-state p {
        color: #666;
        margin-bottom: 30px;
        font-size: 1.1rem;
    }
    
    .btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
`;
document.head.appendChild(style);

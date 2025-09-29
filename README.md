# AITRA - Travel Itinerary Manager

A modern web application for managing travel itineraries with day-by-day navigation and quick access to bookings.

## Features

### Travel Resource Manager (`index.html`)
- Add and manage travel resources with URLs
- Set validity dates for resources
- Automatic filtering from earliest date until today
- Data persistence with localStorage
- Modern, responsive design

### Travel Itinerary (`itinerary.html`)
- Interactive day-by-day itinerary navigation
- Quick access bar with relevant bookings for each day
- Flight details with PNR, seats, and booking links
- Hotel bookings with check-in/check-out dates
- Responsive design for desktop and mobile
- Keyboard navigation support (arrow keys)

## Thailand Adventure Itinerary

**Trip Details:**
- **Duration:** September 29 - October 7, 2025 (9 days)
- **Route:** Bhubaneswar → Thailand → Bhubaneswar
- **Cities:** Pattaya, Phuket, Bangkok

### Flights
- **6E 1065:** Bhubaneswar → Thailand (Sep 29)
- **PG-281:** Pattaya → Phuket (Oct 3)
- **PG-272:** Phuket → Bangkok (Oct 6)
- **6E 1066:** Thailand → Bhubaneswar (Oct 7)

### Accommodations
- **Pattaya:** Sep 30 - Oct 3 (3 nights)
- **Phuket:** Oct 3 - Oct 5 (2 nights)
- **Phuket:** Oct 5 - Oct 6 (1 night)
- **Bangkok:** Oct 6 - Oct 7 (1 night)

## Quick Start

1. Open `index.html` for the resource manager
2. Open `itinerary.html` for the Thailand itinerary
3. Navigate through days using Previous/Next buttons or arrow keys
4. Access booking links from the quick access bar

## Files

- `index.html` - Travel Resource Manager
- `itinerary.html` - Thailand Travel Itinerary
- `styles.css` - Resource Manager styles
- `itinerary.css` - Itinerary app styles
- `script.js` - Resource Manager JavaScript
- `itinerary.js` - Itinerary app JavaScript
- `travel-data.json` - Trip data (embedded in itinerary.js)

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript
- localStorage for data persistence
- Responsive design principles

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT License

// Initialize the map and set its view to New York
var map = L.map('map').setView([40.7128, -74.0060], 12);  // Center on New York City

// Set up the tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Coordinates for New York and Chicago
var newYorkCoords = [40.7128, -74.0060];  // New York City
var chicagoCoords = [41.8781, -87.6298];  // Chicago

// Add markers for New York and Chicago
L.marker(newYorkCoords).bindPopup('New York City').addTo(map);
L.marker(chicagoCoords).bindPopup('Chicago').addTo(map);

// Function to show the accurate route
function showAccurateRoute() {
    // Add a polyline (blue route) from New York to Chicago
    var route = L.polyline([newYorkCoords, chicagoCoords], {
        color: 'blue',
        weight: 6,
        opacity: 0.7
    }).addTo(map);

    // Fit the map bounds to the polyline (route)
    map.fitBounds(route.getBounds());
}

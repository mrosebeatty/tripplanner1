const mapbox = require("mapbox-gl");


const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    if(type === 'hotel'){
        const markerDomEl = document.createElement("div");
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = iconURLs.hotels;
        return markerDomEl
    } else if (type === 'restaurant') {
        const markerDomEl = document.createElement("div");
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = iconURLs.restaurants;
        return markerDomEl
    } else if (type === 'activity') {
        const markerDomEl = document.createElement("div");
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = iconURLs.activities;
        return markerDomEl
    }
};


module.exports = buildMarker ;
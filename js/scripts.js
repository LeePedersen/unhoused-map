let map;
let markers = [];
const tent = "./tentIconResized.png";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.75466197035792, lng: -104.98515233629519 },
    zoom: 13.5,
    styles: mapStyle
  });
  addMarkers();
}

function addMarkers() {
  // iterate through the months, 2 second wait time on first month, 4 second on second one and so on
  Object.entries(campsByMonth).forEach((month, key) =>
    addMarkersWithTimeout(month[1], (2000 + (key * 2000)))
  );
  // iterate through the camps in the month, add them all
  function addMarkersWithTimeout(month, timeout) {
    Object.entries(month).forEach((camp, key) => {
      window.setTimeout(() => {
        markers.push(
          new google.maps.Marker({
            position: camp[1].center,
            map,
            // icon: tent
          })
        );
      }, timeout)
    })
  }
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

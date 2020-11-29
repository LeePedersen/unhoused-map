let map;
let markers = [];
const tent = "./tentIconResized.png";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.75466197035792, lng: -104.98515233629519 },
    zoom: 14,
    styles: mapStyle
  });
  addMonths();
}

function addMonths() {
  Object.entries(campsByMonth).forEach((month, key) => {
    window.setTimeout(() => {
      clearMarkers();
      addMarkers(month[1]);
    }, (2000 + (key * 2000)));
  });
}

function addMarkers(month) {
  Object.entries(month).forEach((camp, key) => {
    markers.push(
      new google.maps.Marker({
        position: camp[1].center,
        map,
        // icon: tent
      })
    );
  })
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

let map;
let markers = [];

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
    }, (1000 + (key * 2000)));
  });
}

function addMarkers(month) {
  Object.entries(month).forEach((camp, key) => {
    let color;
    { camp[1].swept ? color = "#FF0000" : color = "#134ead" }
    markers.push(
      new google.maps.Circle({
        strokeWeight: 0,
        fillColor: color,
        fillOpacity: 0.35,
        map,
        center: camp[1].center,
        radius: camp[1].population,
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

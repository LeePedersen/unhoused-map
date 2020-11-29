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
    }, (1000 + (key * 1000)));
  });
}

function addMarkers(month) {
  Object.entries(month).forEach((camp, key) => {
    if (camp[1].swept) {
      markers.push(
        new google.maps.Circle({
          // strokeColor: "#FF0000",
          // strokeOpacity: 0.8,
          strokeWeight: 0,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
          map,
          center: camp[1].center,
          radius: camp[1].population,
          // icon: tent
        })
      );
    } else {
      markers.push(
        new google.maps.Circle({
          strokeWeight: 0,
          fillColor: "#134ead",
          fillOpacity: 0.35,
          map,
          center: camp[1].center,
          radius: camp[1].population,
          // icon: tent
        })
      );
    }
  })
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

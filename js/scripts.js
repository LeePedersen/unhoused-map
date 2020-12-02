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
    let size;
    { camp[1].population < 41 ? size = 20 : size = camp[1].population / 2 }
    let url;
    { camp[1].swept ? url = "./redTent.svg" : url = "./blackTent.svg" }
    markers.push(
      new google.maps.Marker({
        position: camp[1].center,
        map,
        label: "camp",
        icon: {
          url: url,
          scaledSize: new google.maps.Size(size, size)
        }
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

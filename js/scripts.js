let map;
let markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.756394427359105, lng: -104.98740673111536 },
    zoom: 14,
    styles: mapStyle,
    disableDefaultUI: true,
  });
  addMonths();
}

function addMonths() {
  Object.entries(campsByMonth).forEach((month, key) => {
    window.setTimeout(() => {
      clearMarkers();
      addMarkers(month[1]);
      printMonth(month[1]);
    }, (1000 + (key * 2000)));
  });
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

function addMarkers(month) {
  Object.entries(month).forEach((camp, key) => {
    if (!camp[1].monthName) {
      let size;
      { camp[1].population < 41 ? size = 20 : size = camp[1].population / 2 }
      let url;
      { camp[1].swept ? url = "./redTent.svg" : url = "./blackTent.svg" }
      markers.push(
        new google.maps.Circle({
          strokeWeight: 0,
          fillColor: "#ff5959",
          fillOpacity: 0.25,
          map,
          center: camp[1].center,
          radius: (camp[1].population * 3),
        })
      );
      let image = {
        url: url,
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(13, 15),
        scaledSize: new google.maps.Size(25, 25)
      };
      let marker = new google.maps.Marker({
        position: camp[1].center,
        map,
        icon: image,
      })
      const infowindow = new google.maps.InfoWindow({
        content: "<div> <p>" + camp[1].name + "</p> <p> Number of residents: " + camp[1].population + "</p> </div>",
      });
      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
      markers.push(marker);
    }
  })
}

function printMonth(month) {
  document.getElementById("monthName").textContent = month.monthName;
}

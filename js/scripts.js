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
      document.getElementById("monthName").textContent = month[1].monthName;
    }, (1000 + (key * 2000)));
  });
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
          fillColor: "grey",
          fillOpacity: 0.55,
          map,
          center: camp[1].center,
          radius: (size * 4),
        })
      );
      // markers.push(
      //   new google.maps.Marker({
      //     position: camp[1].center,
      //     map,
      //     // label: {
      //     //   text: camp[1].name,
      //     //   // color: "#ffffff",
      //     //   fontWeight: "bold",
      //     // },
      //     icon: {
      //       url: url,
      //       // scaledSize: new google.maps.Size(size, size)
      //       scaledSize: new google.maps.Size(30, 30)
      //     }
      //   })
      // );
      var image = {
        url: url,
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(13, 14),
        scaledSize: new google.maps.Size(25, 25)
      };
      markers.push(
        new google.maps.Marker({
          position: camp[1].center,
          map,
          // label: {
          //   text: camp[1].name,
          //   // color: "#ffffff",
          //   fontWeight: "bold",
          // },
          icon: image,
        })
      );
    }
  })
}
//
// function addMarkers(month) {
//   Object.entries(month).forEach((camp, key) => {
//     let color;
//     { camp[1].swept ? color = "#FF0000" : color = "#134ead" }
//     markers.push(
//       new google.maps.Circle({
//         strokeWeight: 0,
//         fillColor: color,
//         fillOpacity: 0.35,
//         map,
//         center: camp[1].center,
//         radius: camp[1].population,
//       })
//     );
//   })
// }

function clearMarkers() {
  console.log(markers);
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

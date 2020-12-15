let map;
let markers = [];
let infowindow = null;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.75466423113205, lng: -104.98520534653767 },
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
      let info;
      if (camp[1].swept) {
        url = "./img/redTent.svg";
        info = "<div> <p>" + camp[1].name + "</p> <p> Number of residents: ~" + camp[1].population + "</p> <p> Swept on " + camp[1].sweepDate + ". " + camp[1].notes + "</p> </div>";
      } else {
        url = "./img/blackTent.svg";
        info = "<div> <p>" + camp[1].name + "</p> <p> Number of residents: ~" + camp[1].population + "</p> </div>";
      }
      markers.push(
        new google.maps.Circle({
          strokeWeight: 0,
          fillColor: "white",
          fillOpacity: 0.4,
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
      marker.addListener('click', () => {
        {infowindow && infowindow.close()}
        infowindow = new google.maps.InfoWindow({
          content: info,
          maxWidth: 200,
        });
        infowindow.open(map, marker);
      });
      markers.push(marker);
    }
  })
}

function printMonth(month) {
  for (let i = 0; i < 8; i++) {
    let monthText = document.getElementsByClassName("monthName")[i];
    if (monthText.innerText === month.monthName) {
      monthText.id = "selected";
    } else {
      monthText.id = null;
    }
  }
}

document.addEventListener("DOMContentLoaded", function selectMonths(e) {
  let elements = document.getElementsByClassName("monthName");
  Array.from(elements).forEach(function (element) {
    element.addEventListener("click", () => {
      Array.from(elements).forEach(function (element) {
        element.id = null;
      })
      element.id = "selected";
      showMonth(element.innerText.toString());
    })
  });
})

function showMonth(monthString) {
  clearMarkers();
  Object.entries(campsByMonth).forEach((month, key) => {
    if (month[1].monthName.toString() === monthString) {
      addMarkers(month[1]);
    }
  })
}

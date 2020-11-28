let map;

const campsByMonth = {
  mayCamps: {
    stout22nd: {
      center: { lat: 39.7514, lng: -104.9858 },
      population: 150,
    },
    california21st: {
      center: { lat: 39.74988081444342, lng: -104.98614049754438 },
      population: 100,
    },
    arkins: {
      center: { lat: 39.770366437456126, lng: -104.98156603283451 },
      population: 150,
    },
    washington13th: {
      center: { lat: 39.736901630492326, lng: -104.97873995993287 },
      population: 100,
    },
    arapahoe25th: {
      center: { lat: 39.7563385156032, lng: -104.98483701760286 },
      population: 10,
    },
    welton25th: {
      center: { lat: 39.75298262156344, lng: -104.98049675993238 },
      population: 20,
    },
    blairCaldwell: {
      center: { lat: 39.75240922793768, lng: -104.98160900226182 },
      population: 50,
    },
  },
  midMayCamps: {
    stout22nd: {
      center: { lat: 39.7514, lng: -104.9858 },
      population: 300,
    },
    california21st: {
      center: { lat: 39.74988081444342, lng: -104.98614049754438 },
      population: 50,
    },
    glenarm21st: {
      center: { lat: 39.7484783836163, lng: -104.98446157533128 },
      population: 50,
    },
    clarkson13th: {
      center: { lat: 39.73688467944993, lng: -104.97760917348667 },
      population: 100,
    },
    arkins: {
      center: { lat: 39.770366437456126, lng: -104.98156603283451 },
      population: 150,
    },
    washington13th: {
      center: { lat: 39.736901630492326, lng: -104.97873995993287 },
      population: 100,
    },
    welton29th: {
      center: { lat: 39.75667593136853, lng: -104.97563640226254 },
      population: 4,
    },
    arapahoe25th: {
      center: { lat: 39.7563385156032, lng: -104.98483701760286 },
      population: 50,
    },
    welton25th: {
      center: { lat: 39.75298262156344, lng: -104.98049675993238 },
      population: 20,
    },
    blake20th: {
      center: { lat: 39.753924220898696, lng: -104.99384281575655 },
      population: 20,
    },
    blairCaldwell: {
      center: { lat: 39.75240922793768, lng: -104.98160900226182 },
      population: 50,
    },
  },
};

console.log(campsByMonth.mayCamps.welton25th.center);

let markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.75466197035792, lng: -104.98515233629519 },
    zoom: 13.5,
    styles: mapStyle
  });
  const tent = {
    url: "./tentIconResized.png",
  };
  console.log("hit initMap");
  // console.log(mayCamps.size);
}

Object.entries(campsByMonth).forEach((month, key) => {
    console.log(month[1]);
    // iterate through the months, 0 seconds wait time on first month, 2 seconds on second one and so on
    addMarkersWithTimeout(month[1], key * 2000)
  }
);

function addMarkersWithTimeout(month, timeout) {
  // iterate through the camps in the month
  Object.entries(month).forEach((camp, key) => {
    window.setTimeout(() => {
      markers.push(
        new google.maps.Marker({
          position: camp[1].center,
          map,
        })
      );
    }, timeout)
  }
  )
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

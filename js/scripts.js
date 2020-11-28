let map;

const mayCamps = {
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
};

const midMayCamps = {
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
    center: { lat: 39.7484783836163, lng: -104.98446157533128 },
    population: 50,
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
};

console.log(mayCamps.welton25th.center);

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

Object.entries(mayCamps).forEach((camp, key) => addMarkerWithTimeout(camp[1].center, key * 1000));
  // addMarkerWithTimeout(camp[1].center, key * 200);

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(() => {
    markers.push(
      new google.maps.Marker({
        position: position,
        map,
        // animation: google.maps.Animation.DROP,
      })
    );
  }, timeout);
}

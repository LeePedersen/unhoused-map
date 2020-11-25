let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.739, lng: -104.990 },
    zoom: 14,
  });
  const marker = new google.maps.Marker({
    position: { lat: 39.739, lng: -104.990 },
    map: map,
  });
}

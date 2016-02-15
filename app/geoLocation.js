function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

module.exports = getLocation();

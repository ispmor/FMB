function initMap(){
  var court =  {lat: 52.2260917, lng: 21.0114511};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center:court
  });
  var marker = new google.maps.Marker({
    position: court,
    map: map
  });
}

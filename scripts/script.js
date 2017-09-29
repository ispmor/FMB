$(document).ready(function(){
  function initMap(){
    var court =  {lat: 52.232, lng: 20.920};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center:court
    });
    var marker = new google.maps.Marker({
      position: court,
      map: map
    });
  }
});

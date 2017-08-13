$( document ).ready(function() {

  var $root = $('html, body');

  $( ".a-menu" ).click(function() {
    $('nav li').each(function() {
      $(this).attr("class", "");
    });
    $(this).parent().attr("class", "active");

    $root.animate({
        scrollTop: $( $(this).attr('href') ).offset().top + -85
    }, 500);
    return false;

  });

});

function initMap() {
  var uluru = {lat: -33.4400572, lng: -70.73290689999999};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru,
    gestureHandling: 'cooperative'
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

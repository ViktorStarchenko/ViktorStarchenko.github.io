
	function initMap() {
        var uluru = {lat: 50.4491873343781, lng: 30.4927882042627};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          draggable: true,
          styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#002444"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20},{"color":"#2787d1"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},{"weight":2},{"gamma":0.8},{"color":"#002444"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30},{"color":"#002444"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20},{"color":"#01152b"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20},{"color":"#011c39"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25},{"color":"#004988"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20},{"color":"#001e38"}]}],
          center: uluru
});
        var marker = new google.maps.Marker({
          position: {lat: 50.4491873343781, lng: 30.4927882042627},
          map: map, 
          title: 'Hello world',
          icon: src='assets/img/marker.png'
        });

      }

      initMap()





     

$(document).ready(function() {
    //carousel
    if ($('.js-carousel').length > 1) {
        $('.js-carousel').owlCarousel({
            loop:true,
            nav:false,
            items: 1,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 1000,
            dotsSpeed: 500
        });
    }
    else {
        $('.rotator img').css('display', 'block');
    }
    

    //ScrollPane

    $('.scroll-pane').jScrollPane({
        animateScroll: true,

    });

    //map
    if ($('#map-canvas').length) {
        function initialize() {
            var mapOptions = {
                zoom: 12,
                disableDefaultUI: true,
                scrollwheel: false,
                panControl: false,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.RIGHT_CENTER
                },
                scaleControl: true,
                center: new google.maps.LatLng(53.650501, 23.854669)
            };

            map = new google.maps.Map(document.getElementById('map-canvas'),
              mapOptions);
            var image = 'img/marker.png';
            var myLatLng = new google.maps.LatLng(53.650501, 23.854669);
            var beachMarker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    };
  
});

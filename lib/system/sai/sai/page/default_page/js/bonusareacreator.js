
var service_url = "http://www.da-sense.de/productive/analysis.php";

var map;

var latlng;
var radius; // [meters]
var active = true;

var currentAngle;
var resizeMarker;
var marker;
var circle;

var storedBonusAreas = [];

var myOptions;
var storedCircleOptions;
var circleOptions;

/** jQuery on document ready */
function init() {
    $('#datepicker').datepicker({
        format: 'dd-mm-yyyy',
        weekStart: 1
    });
    $('#timepicker').timepicker();
    
    latlng = new google.maps.LatLng(49.87367, 8.65105);
    radius = 500;
   
    // map initialization
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
   
    circleOptions = {
         strokeColor: "#61ade7",
         strokeOpacity: 0.6,
         strokeWeight: 1,
         fillColor: "#61ade7",
         fillOpacity: 0.45,
         map: map,
         center: latlng ,
         radius: radius,
         clickable:false
     };

     storedCircleOptions = {
         strokeColor: "#00ff00",
         strokeOpacity: 0.6,
         strokeWeight: 1,
         fillColor: "#00ff00",
         fillOpacity: 0.2,
         map: map,
         center: latlng ,
         radius: radius,
         clickable:true
     };

     myOptions = {
         zoom: 15,
         maxZoom:18,
         minZoom:7,
         center: latlng,
         mapTypeId: google.maps.MapTypeId.ROADMAP
       };

    updateAddress();
    updateRadius();
    updateExploration();
    reload();

    // set google maps marker
    marker = new google.maps.Marker({
         position: latlng,
         map: map,
         title: 'Center point of bonus area',
         icon: new google.maps.MarkerImage("dasense/page/default_developer/img/geo_point.png",new google.maps.Size(16,16),new google.maps.Point(0,0),new google.maps.Point(8,8)),
         cursor: "move",
         draggable: true
    });

    google.maps.event.addListener(marker, 'dragstart', function(e) {
         currentAngle = GEO_FUNCTIONS.getAngle(e.latLng, resizeMarker.getPosition());
    });

    google.maps.event.addListener(marker, 'drag', function(e) {
         dragCenterPoint(e);
    });

    google.maps.event.addListener(marker, 'dragend', function(e) {
         dragCenterPoint(e);
         //fitZoom();
         map.setCenter(latlng);

         updateAddress();
         updateExploration();
    });

    google.maps.event.addListener(map, 'rightclick', function(e) {
         dragCenterPoint(e)
         marker.setPosition(latlng);
     });

    // set google maps overlay: circle with specified radius and 'geopoint-marker' as centerpoint
    var resMarkPos = GEO_FUNCTIONS.getDestination(latlng, radius, 0.25*Math.PI); 
    resizeMarker = new google.maps.Marker({
         position: resMarkPos,
         map: map,
         title: "Radius resizer",
         icon: new google.maps.MarkerImage("dasense/page/default_developer/img/geo_resize.png",new google.maps.Size(10,10),new google.maps.Point(0,0),new google.maps.Point(5,5)),
         cursor: "move",
         draggable: true
    });

    circle = new google.maps.Circle(circleOptions);
    
    google.maps.event.addListener(resizeMarker, 'dragend', function(e) {
         var dist = GEO_FUNCTIONS.getDistance(e.latLng, latlng);
         circle.setOptions({radius: dist});
         radius = dist;
         fitZoom();

         updateRadius();
         updateExploration();
    });

    google.maps.event.addListener(resizeMarker, 'drag', function(e) {
         var dist = GEO_FUNCTIONS.getDistance(e.latLng, latlng);
         radius = dist;

         updateRadius();
         circle.setOptions({radius: dist});
    });	

     fitZoom();
    
    // send button
/*    $('#submit_icon').click(function () {  
    	cleanErrorFields();
    	
    	// simple validation of input fields
    	var label 		= $('#field_label').val();
    	var multiplier 	= $('#field_multiplier').val();
    	var timeSlot 	= $('#field_timeSlot').val();
    	var password 	= $('#field_password').val();
    	
    	var valid_label 		= validate(label,true,255,'string');
    	if(valid_label === false) {
    		$('#field_error_label').html("Check label field: string (max 255 chars)");
    		return;
    	}
    	
    	var valid_multiplier 	= validate(multiplier,true,255,'real');
    	if(valid_multiplier === false){
    		$('#field_error_multiplier').html("Check multiplier field: double");
    		return;
    	}
    	
    	var valid_timeSlot 		= validate(timeSlot,true,255,'int');
    	if(valid_timeSlot === false){
    		$('#field_error_timeSlot').html("Check time slot field: int [seconds]");
    		return;
    	}
    	
    	var valid_password 		= validate(password,true,45,'string');
    	if(valid_password === false){
    		$('#field_error_password').html("Check password field: string [max 45 chars]");
    		return;
    	}
    	
    	var formatted_address = $('#field_address').html();
    	
    	$(this).addClass('loader');
    	marker.setMap(null);
    	resizeMarker.setMap(null);
    	circle.setOptions({fillOpacity: 0.3, fillColor: '#ff0000', strokeColor: '#ff0000'});
    	
    	var json = '{"geo":{"lat":'+latlng.lat()+',"lng":'+latlng.lng()+',"radius":'+radius+',"faddress":"'+encodeURI(JSON.stringify(formatted_address))+'"},"starttime":'+new Date().getTime()+',"slot":'+timeSlot*1000+',"multiplier":'+multiplier+',"label":"'+encodeURI(JSON.stringify(label))+'"}';
    	
    	// service call
    	$.post(service_url,
		  {
    		ctrl: 'barea',
    		mthd: 'insert',
		    pswd: password,
		    json: json
		  },
		  function(data,textStatus,jqXHR) {
			  $('#submit_icon').removeClass('loader');
			  
			   // service call response
			  if(data['result']['status'] != null && data['result']['status'].toLowerCase() == 'ok'){
				  $('#submit_icon').addClass('clean').html('Bonus area has been pushed to all registered devices.<br>Thank you for using this nice service :-)');
				  circle.setOptions(storedCircleOptions);
				  circle.setOptions({radius: radius, center: latlng});
			  }else if(data['result']['status'] != null){
				  marker.setMap(map);
				  resizeMarker.setMap(map);
				  circle.setOptions(circleOptions);
				  circle.setOptions({radius: radius, center: latlng});
				  $('#field_password').val('');
				  $('#field_error_password').html("Wrong service password");
			  }
				  
		  })
		  .error(function() { alert("An unexpected error occurred, please try again later !"); });
    	
    });
    
    // clean all error fields
    function cleanErrorFields(){
    	$('#field_error_label').html("<br>");
    	$('#field_error_multiplier').html("<br>");
    	$('#field_error_timeSlot').html("<br>");
    	$('#field_error_password').html("<br>");
    }
    
    // fit button
    $('#fit_icon').click(function(){
    	fitZoom();
    });
    
    // get all bonus areas
    $('#ref_all').click(function(){
    	active = false;
    	$(this).addClass('active');
    	$('#ref_active').removeClass('active');
    	
    	reload();
    });
    
    // get all active bonus areas
    $('#ref_active').click(function(){
    	active = true;
    	$(this).addClass('active');
    	$('#ref_all').removeClass('active');
    	
    	reload();
    });*/
	
};


function updateAddress(){
    $('#field_coords').html("("+latlng.lat() +", " + latlng.lng()+")");
    new google.maps.Geocoder().geocode({'latLng': latlng, 'language': 'de_DE'}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                    $('#field_address').html(results[0]['formatted_address']);
            }
    });		
}

function updateRadius(){
    $('#field_radius').html(radius.toFixed(2)+" m");
}

function updateExploration(){
    /*$.getJSON(service_url+'?ctrl=data&mthd=explore&coord='+latlng.lat()+','+latlng.lng()+'&'+'radius='+radius , function(data) {
            if(data.result.length > 0){
                    $("#field_exploration").html(Number((1-Number(data.result[0].explore))* 100).toFixed(2) + " %");
            }
    });*/
}

function dragCenterPoint(e){
    var curPos = e.latLng;
    circle.setOptions({center: curPos});
    latlng = curPos;
    resizeMarker.setPosition(GEO_FUNCTIONS.getDestination(curPos, radius, currentAngle));
    $('#field_coords').html("("+latlng.lat() +", " + latlng.lng()+")");
}

function fitZoom(){
    map.fitBounds(
        new google.maps.LatLngBounds(
                GEO_FUNCTIONS.getDestination(latlng, 2.5*radius, 1.25*Math.PI),
                GEO_FUNCTIONS.getDestination(latlng, 2.5*radius, 0.25*Math.PI)));
}

// reload markers
function reload(){
    clearOverlays();
    getStoredBonusAreas();
}

// Removes the overlays from the map, but keeps them in the array
function clearOverlays() {
    if (storedBonusAreas) {
      for (i in storedBonusAreas) {
        storedBonusAreas[i].setMap(null);
      }
    }
    storedBonusAreas = [];
}

function getStoredBonusAreas(){
    storedBonusAreas = [];

    // service call
/*    $.getJSON(service_url,
            {
          ctrl: 'barea',
          mthd: ((active == true)?'getallactive':'getall')
            },
            function(data,textStatus,jqXHR) {	
                    // >> creat circles + storedCircleOptions + tooltip (!!! replace radius + center !!!)
                    var i=0;
                    $.each(data['result'], function(key, value) { 
                            var sCircle = new google.maps.Circle(storedCircleOptions);
                            sCircle.setOptions({radius: value['radius'], center: new google.maps.LatLng(value['lat'],value['lng'])});
                            storedBonusAreas[i++] = sCircle;				  
                          });
            })
            .error(function() { alert("An unexpected error occurred, please try again later !"); });*/
}
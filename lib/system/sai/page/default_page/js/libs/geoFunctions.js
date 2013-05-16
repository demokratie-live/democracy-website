/**
 *  Geographical help functions 
 *  
 *  @author chris
 */
function GEO_FUNCTIONS(){
	
}

/* earth radius */
GEO_FUNCTIONS.R = 6371*1000; //[m]

/* transformation factor between deg and meters */
GEO_FUNCTIONS.DEG2MET =  Math.PI / 180;

/**
 * Calculate the distance between to LatLng-Points
 * >> Haversine formula
 * 
 * @param p1 [google.maps.latLng]
 * @param p2 [google.maps.latLng]
 * 
 * @returns Distance [m]
 */
GEO_FUNCTIONS.getDistance = function(p1,p2){
	var dLat = (p2.lat()-p1.lat()) * GEO_FUNCTIONS.DEG2MET;
	var dLon = (p2.lng()-p1.lng()) * GEO_FUNCTIONS.DEG2MET;
	var lat1 = p1.lat() * GEO_FUNCTIONS.DEG2MET;
	var lat2 = p2.lat() * GEO_FUNCTIONS.DEG2MET;

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	return GEO_FUNCTIONS.R * c; // in meters
};

/**
 * Get the destination point from starting point with distance (in meters) and angle (in radians, clockwise from north);
 * 
 * @param start [google.maps.latLng]
 * @param dist - distance [m]
 * @param angle - clockwise from north [rad]
 * 
 * @returns destination point [google.maps.latLng]
 */
GEO_FUNCTIONS.getDestination = function(start,dist,angle){
	var lat1 = start.lat() * GEO_FUNCTIONS.DEG2MET;
	var lon1 = start.lng() * GEO_FUNCTIONS.DEG2MET;
	var lat2 = Math.asin( Math.sin(lat1)*Math.cos(dist/GEO_FUNCTIONS.R) + Math.cos(lat1)*Math.sin(dist/GEO_FUNCTIONS.R)*Math.cos(angle) );
	var lon2 = lon1 + Math.atan2(Math.sin(angle)*Math.sin(dist/GEO_FUNCTIONS.R)*Math.cos(lat1), Math.cos(dist/GEO_FUNCTIONS.R)-Math.sin(lat1)*Math.sin(lat2));
	return new google.maps.LatLng(lat2/GEO_FUNCTIONS.DEG2MET,lon2/GEO_FUNCTIONS.DEG2MET); // google maps geopoint [google.maps.latLng]
};

/**
 * Get the angle between line of two points and the line to north (clockwise)
 * 
 * @param p1 [google.maps.latLng]
 * @param p2 [google.maps.latLng]
 * 
 * @returns angle - clockwise from north [rad]
 */
GEO_FUNCTIONS.getAngle = function(p1,p2){
	var dLat = (p2.lat()-p1.lat()) * GEO_FUNCTIONS.DEG2MET;
	var dLon = (p2.lng()-p1.lng()) * GEO_FUNCTIONS.DEG2MET;
	var lat1 = p1.lat() * GEO_FUNCTIONS.DEG2MET;
	var lat2 = p2.lat() * GEO_FUNCTIONS.DEG2MET;
	
	var y = Math.sin(dLon) * Math.cos(lat2);
	var x = Math.cos(lat1 )* Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
	return Math.atan2(y, x); // in radian
};
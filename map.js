// Google map
$(document).ready(function() {
	// Google maps shows on Find us page.
	$('#map_canvas').gmap({'center': '60.1900495, 24.8384881', 'zoom': 15, 'disableDefaultUI':true, 'callback': function() {
		var self = this;
		self.addMarker({'position': this.get('map').getCenter() }).click(function() {
			self.openInfoWindow({ 'content': 'Hello World!' }, this);
		});	
	}});
})
	
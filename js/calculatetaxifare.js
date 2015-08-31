 $(function() {
	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
	var map;
	var origin;
		if (typeof window.origin === "undefined") {
			origin = sessionStorage.getItem("origin");
		} else {
			origin = window.origin;
		}            
		var destination = sessionStorage.getItem("dest");
		var timeOfPickup = sessionStorage.getItem("timeOfPickup");
		var cabCosts = [];
		var service = new google.maps.DistanceMatrixService();            
            service.getDistanceMatrix({
                origins: [origin],
                destinations: [destination],
                travelMode: google.maps.TravelMode.DRIVING,                
                durationInTraffic: true,
                avoidHighways: false,
                avoidTolls: false
            }, callback);
			
		function callback(response, status) {
			if (status == google.maps.DistanceMatrixStatus.OK) {
				var origins = response.originAddresses;
				var destinations = response.destinationAddresses;
				var distance;
				var duration;
				for (var i = 0; i < origins.length; i++) {
					var results = response.rows[i].elements;
					for (var j = 0; j < results.length; j++) {
							var element = results[j];
								distance = element.distance.text;
								duration = element.duration.text;
							console.log("Distance : "+distance);
							$("#distance").html(distance);
							console.log("duration : "+duration);
							$("#travelTime").html(duration);
							var from = origins[i];
							var to = destinations[j];
					}
				}
			} else {
				$("#dlg-unknownlocation-error").popup("open");
			}
			displayTaxiFares(distance,duration);
        }            
		function displayTaxiFares(distance, duration) {
			$('#rideWiseList').empty();
			distance = parseFloat(distance).toFixed(2);
			duration = parseFloat(duration).toFixed(2);
                
			cabCosts.push(mumbaiCabs.getMeruCabFare(distance, timeOfPickup));
			cabCosts.push(mumbaiCabs.getEasyCabsFare(distance, timeOfPickup));
			cabCosts.push(mumbaiCabs.getOlaSedanFare(distance));
			cabCosts.push(mumbaiCabs.getOlaMiniFare(distance));
			cabCosts.push(mumbaiCabs.getOlaPrimeFare(distance));
			cabCosts.push(mumbaiCabs.getTabCabFare(distance, timeOfPickup));
				
			cabCosts.push(mumbaiCabs.getTaxiForSureHatchBackFare(distance, duration, timeOfPickup));
			cabCosts.push(mumbaiCabs.getTaxiForSureSedanFare(distance, duration, timeOfPickup));
			cabCosts.push(mumbaiCabs.getTaxiForSureSUVFare(distance, duration, timeOfPickup));
			cabCosts.push(mumbaiCabs.getBookMyCabACFare(distance, duration, timeOfPickup));
			cabCosts.push(mumbaiCabs.getBookMyCabNonACFare(distance, duration, timeOfPickup));
			cabCosts.push(mumbaiCabs.getUberXFare(distance, duration, timeOfPickup));
			cabCosts.push(mumbaiCabs.getUberBlackFare(distance, duration, timeOfPickup));
				                
            var listItemHtml;
            var sortedCosts = _.sortBy(cabCosts,'cost');
            $.each(sortedCosts, function(i,currCab){
				listItemHtml = '<li data-icon="phone" class="list"><a href="'+currCab.contact+'" class="listAnchor">'+currCab.logo+'<h2>'+currCab.type+'</h2> <span class="ui-li-count"> Rs '+(parseFloat(currCab.cost)).toFixed(0)+' - Rs '+(parseFloat(currCab.cost) + 50).toFixed(0)+'</span></a></li>';
				$("#rideWiseList").append(listItemHtml);
			});
			$('#rideWiseList').listview('refresh');
			$("a.listAnchor").css({
				background : "#f6f6f6",
				height : "85px"	
			});
			$("a").css({
				color: "black"			
			});
			$("img").css({
				"padding" : "5px",
				"padding-top" : "12px",
				"height" : "62px",
				"width" : "80px"
			});
				//$("img").css("padding-top", "12px");				
               calcRoute();
		}
		function calcRoute() {
			console.log("Calculating Route..");  
			var start = origin;
			var end = destination;
			var request = {
				origin:start,
				destination:end,
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsService.route(request, function(response, status) {
				if (status == google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(response);
				}
			});
		} 
});

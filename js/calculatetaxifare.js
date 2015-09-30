 $(function() {
	 $.mobile.loading( "show", {
      	text: "Loading...",
        textVisible: true,
        theme: "z",
        html: ""
     });
	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
	var map;
	var geocoder = new google.maps.Geocoder();
	var origin;
		if (typeof window.origin === "undefined") {
			origin = sessionStorage.getItem("origin");
			geocoder.geocode( { 'address': origin}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					var start_latitude = results[0].geometry.location.lat();
					var start_longitude = results[0].geometry.location.lng();
					
					sessionStorage.setItem("start_latitude",start_latitude);
					sessionStorage.setItem("start_longitude",start_longitude);
				} 
			}); 
		} else {
			origin = window.origin;
			var splitOrigin = origin.split(",");
			
			var splitLatitude = splitOrigin[0].split("(");
			var start_latitude = splitLatitude[1];
			
			var splitLongitude = splitOrigin[1].split(")");
			var start_longitude = splitLongitude[0];
			
			sessionStorage.setItem("start_latitude",start_latitude);
			sessionStorage.setItem("start_longitude",start_longitude);
		}
		var destination = sessionStorage.getItem("dest");
		geocoder.geocode( { 'address': destination}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var end_latitude = results[0].geometry.location.lat();
				var end_longitude = results[0].geometry.location.lng();
					
				sessionStorage.setItem("end_latitude",end_latitude);
				sessionStorage.setItem("end_longitude",end_longitude);
			} 
		}); 
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
			var City = sessionStorage.getItem("City");			
				
			$('#rideWiseList').empty();
			distance = parseFloat(distance).toFixed(2);
			//duration = parseFloat(duration).toFixed(2);
			var splitduration = duration.split(" ");
			var duration = "";
			if(splitduration[1] == "hour") {
				var durationofhour = parseInt(splitduration[0] * 60);
				var durationmin = parseInt(splitduration[2]);
				duration = durationofhour + durationmin;
			}
			else if(splitduration[1] == "mins") {
				var durationmin = parseInt(splitduration[0]);
				duration = durationmin;
			}
			
			var env = environment.getEnv();
			$.get("http://www.ziftapp.com/"+env+"/api/ziftapi.php?City="+City+"&method=CheapestRideAsPerCity&format=json")
			//$.get("http://localhost/ZiftAPI/api/ziftapi.php?City="+City+"&method=CheapestRideAsPerCity&format=json")
			.done(function (response){
				var uberX = {};
				var uberBlack = {};
				$.each(response.responseCheapestRideAsPerCity, function(index,serviceProviderDetails){			
					var City = serviceProviderDetails.City;
					var Contact = serviceProviderDetails.Contact;
					var Service_Type = serviceProviderDetails.Service_Type;				
					var Day_Cost = serviceProviderDetails.Day_Cost;
					var Night_Cost = serviceProviderDetails.Night_Cost;
					var Day_perKM = serviceProviderDetails.Day_perKM;
					var Night_perKM = serviceProviderDetails.Night_perKM;
					var First_x_KM = serviceProviderDetails.First_x_KM;
					var per_minute_rate = serviceProviderDetails.per_minute_rate;
					var Minimum_Rates = serviceProviderDetails.Minimum_Rates;
					var Waiting_Charges_Day = serviceProviderDetails.Waiting_Charges_Day;
					var Waiting_Charges_Night = serviceProviderDetails.Waiting_Charges_Night;
					
					var logo= serviceProviderDetails.logo;
					var Fleet= serviceProviderDetails.Fleet;
					var app_link= serviceProviderDetails.app_link;
					var Terms_n_Conditions= serviceProviderDetails.Terms_n_Conditions;
					
					Day_Cost = parseFloat(Day_Cost);
					Night_Cost = parseFloat(Night_Cost);
					Day_perKM = parseFloat(Day_perKM);
					Night_perKM = parseFloat(Night_perKM);
					First_x_KM = parseFloat(First_x_KM);
					per_minute_rate = parseFloat(per_minute_rate);
					
					if(Service_Type == "BookMyCab A/C Cool Cab"){						
						cabCosts.push(mumbaiCabs.getBookMyCabACFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM, Contact, logo, First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));
					}
					else if(Service_Type == "BookMyCab Kali Peeli"){
						cabCosts.push(mumbaiCabs.getBookMyCabNonACFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));
					}
					else if(Service_Type == "EasyCabs"){
						cabCosts.push(mumbaiCabs.getEasyCabsFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));						
					}
					else if(Service_Type == "Meru"){						
						cabCosts.push(mumbaiCabs.getMeruCabFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));					
					}
					else if(Service_Type == "TabCab"){
						cabCosts.push(mumbaiCabs.getTabCabFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));			
					}
					else if(Service_Type == "TabCab Gold"){
						cabCosts.push(mumbaiCabs.getTabCabGoldFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));			
					}
					else if(Service_Type == "Taxi For Sure Hatchback"){
						cabCosts.push(mumbaiCabs.getTaxiForSureHatchBackFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));
					}
					else if(Service_Type == "Taxi For Sure Sedan"){
						cabCosts.push(mumbaiCabs.getTaxiForSureSedanFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));
					}
					else if(Service_Type == "Taxi For Sure SUV"){
						cabCosts.push(mumbaiCabs.getTaxiForSureSUVFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));
					}
					else if(Service_Type == "Taxi For Sure Eeco"){
						cabCosts.push(mumbaiCabs.getTaxiForSureEecoFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));
					}
					else if(Service_Type == "Ola Mini"){
						cabCosts.push(mumbaiCabs.getOlaMiniFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));
					}
					else if(Service_Type == "Ola Prime"){
						cabCosts.push(mumbaiCabs.getOlaPrimeFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));
					}
					else if(Service_Type == "Ola Economy Sedan"){
						cabCosts.push(mumbaiCabs.getOlaSedanFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));
					}
					else if(Service_Type == "Priyadarshini"){
						cabCosts.push(mumbaiCabs.getPriyadarshiniFare(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));
					}
					else if(Service_Type == "Cel Cabs Comfort"){
						cabCosts.push(mumbaiCabs.getcelcabsComfort(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));
					}
					else if(Service_Type == "Cel Cabs Economy"){
						cabCosts.push(mumbaiCabs.getcelcabsEconomy(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet));
					}
				});
				
				uberX = mumbaiCabs.getUberXFare(distance, duration);
				if(uberX.cost) {
					cabCosts.push(uberX);
				}
				
				uberBlack = mumbaiCabs.getUberBlackFare(distance, duration);
				if(uberBlack.cost) {
					cabCosts.push(uberBlack);
				}
				sortByCost();
				calcRoute();
			})
			
		}
		function sortByCost() {
				var listItemHtml;
				var sortedCosts =cabCosts.sort(compareTaxiFare);
				$.mobile.loading("hide");
				$.each(sortedCosts, function(i,currCab){
					if(jQuery.isEmptyObject(currCab) === false) {
						if(currCab.type=="Uber X" || currCab.type=="Uber Black"){
							cabCost = 'Rs '+(parseFloat(currCab.cost)).toFixed(0)+' - Rs '+(parseFloat(currCab.maxcost)).toFixed(0);
							imageName="uber.png";
						}else {
							cabCost = 'Rs '+(parseFloat(currCab.cost)).toFixed(0)+' - Rs '+(parseFloat(currCab.cost) + 50).toFixed(0);
							var logo= currCab.logo;
							var value = logo.split("/");
							var imageName = value[2];
						}
						var env = environment.getEnv();
						listItemHtml = '<li data-icon="arrow-r" class="list"><a href="#" class="listAnchor"><img style="padding:5px; padding-top:12px" height="62px" width="80px" src="http://www.ziftapp.com/'+env+'/taxiservices_images/'+imageName+'"/><h2>'+currCab.type+'</h2><p id="distance">'+currCab.distance+'</p><p id="duration">'+currCab.duration+'</p><p id="contact">'+currCab.contact+'</p><p id="Fleet">'+currCab.Fleet+'</p><p id="CostOfDayOrNight">'+currCab.CostOfDayOrNight+'</p><p id="CostPerKMOfDayOrNight">'+currCab.CostPerKMOfDayOrNight+'</p><p id="firstXKM">'+currCab.First_x_KM+'</p><p id="perMinuteRate">'+currCab.per_minute_rate+'</p><p id="WaitingChargesForDayOrNight">'+currCab.WaitingChargesForDayOrNight+'</p><p id="appLink">'+currCab.app_link+'</p><p id="termsNCondition">'+currCab.Terms_n_Conditions+'</p> <span class="ui-li-count">'+cabCost+'</span></a></li>';
						$("#rideWiseList").append(listItemHtml);
						$.mobile.loading("hide");
					}else{
						return true;
					}
					});
					$('#rideWiseList').listview('refresh');
					cabCosts.splice(0,3);
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
					$("p#contact,p#CostOfDayOrNight,p#Fleet,p#CostPerKMOfDayOrNight,p#duration,p#distance,p#firstXKM,p#perMinuteRate,p#WaitingChargesForDayOrNight,p#appLink,p#termsNCondition,p#totalCost").css({
						display : "none"
					});
					$("li.list").on('click', function(){
						var currentListItem = $(this);
						var logo = currentListItem.find("img").attr("src");
						var serviceType = currentListItem.find("h2").html();
						var contact = currentListItem.find("p#contact").html();
						var duration = currentListItem.find("p#duration").html();
						var distance = currentListItem.find("p#distance").html();
						var WaitingChargesForDayOrNight = currentListItem.find("p#WaitingChargesForDayOrNight").html();											
						var appLink = currentListItem.find("p#appLink").html();
						var Fleet = currentListItem.find("p#Fleet").html();
						var termsNCondition = currentListItem.find("p#termsNCondition").html();
						var totalCost= currentListItem.find(".ui-li-count").html();
						
						sessionStorage.setItem("logo", logo);
						sessionStorage.setItem("serviceType", serviceType);
						sessionStorage.setItem("contact", contact);
						sessionStorage.setItem("duration", duration);
						sessionStorage.setItem("distance", distance);
						sessionStorage.setItem("WaitingChargesForDayOrNight", WaitingChargesForDayOrNight);			
						sessionStorage.setItem("appLink", appLink);
						sessionStorage.setItem("Fleet", Fleet);
						sessionStorage.setItem("termsNCondition", termsNCondition);
						sessionStorage.setItem("totalCost", totalCost);
						
						window.location.href = "cheaprideoptiontermscondition.html";
					});
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
		function compareTaxiFare(obj1, obj2) {
			if (parseFloat(obj1.cost) < parseFloat(obj2.cost))
				return -1;
			if (parseFloat(obj1.cost) > parseFloat(obj2.cost))
				return 1;
			return 0;
		}
});

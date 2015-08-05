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


            function calculateFaresForBookMyCab(distance, duration, timeOfPickup) {
                    //For bookmycab
                    //Between 5 am and 12 am

                    if(timeOfPickup === "day") {

                        var listItemHtml;
                        var bmcACCost;
                        var bmcAC = {};
                        bmcAC.type = "A/C Cool Cabs";

                        if(distance <= 1.5) {
                            bmcACCost = 26;
                        } else {
                            bmcACCost = 26 + (distance - 1.5)*17.50;
                            bmcACCost = bmcACCost.toFixed(2);
                        }
                        bmcAC.logo='<img src="images/bookmycab_logo.jpg"></img>';
                        bmcAC.cost = bmcACCost;
                        bmcAC.contact = 'tel:02261234567';
                        cabCosts.push(bmcAC);
                        
                        var bmcCost;
                        var bmcNonAc = {};
                        bmcNonAc.type = "Kali Peeli";
                        if(distance <= 1.5) {
                            bmcCost = 21;
                        } else {
                            bmcCost = 21 + (distance - 1.5)*14;
                            bmcCost = bmcCost.toFixed(2);
                        }
                        bmcNonAc.logo='<img src="images/bookmycab_logo.jpg"></img>';
                        bmcNonAc.contact = 'tel:02261234567';
                        bmcNonAc.cost = bmcCost;
                        cabCosts.push(bmcNonAc);

                    } else { //It is a night time pick up. 12am - 5am

                        var listItemHtml;
                        var bmcACCost;
                        var bmcAC = {};
                        bmcAC.type = "A/C Cool Cabs"
                        if(distance <= 1.5) {
                            bmcACCost = 26 + (0.25*23);
                        } else {
                            bmcACCost = (26 + (distance - 1.5)*17.50)*1.25;
                            bmcACCost = bmcACCost.toFixed(2);
                        }
                        bmcAC.logo='<img src="images/bookmycab_logo.jpg"></img>';
                        bmcAC.cost = bmcACCost;
                        bmcAC.contact = 'tel:02261234567';
                        cabCosts.push(bmcAC);
                        
                        var bmcCost;
                        var bmcNonAc = {};
                        bmcNonAc.type = "Kali Peeli";
                        if(distance <= 1.5) {
                            bmcCost = 21 + (0.25*21);
                            bmcCost = bmcCost.toFixed(2);
                        } else {
                            bmcCost = (21 + (distance - 1.5)*14)*1.25;
                            bmcCost = bmcCost.toFixed(2);
                        }
                        bmcNonAc.logo='<img src="images/bookmycab_logo.jpg"></img>';
                        bmcNonAc.cost = bmcCost;
                        bmcNonAc.contact = 'tel:02261234567';
                        cabCosts.push(bmcNonAc);
                    }
                     
            }

            function calculateFaresForTaxiForSure(distance, duration, timeOfPickup) {
                //Taxi For Sure
                    //Between 5am and 12 am
                    //For Hatchback
                    if(timeOfPickup === "day") {

                        var listItemHtml;
                        var tfsHatchBackCost;
                        var tfsHatchBack = {};
                        tfsHatchBack.type = "Hatchback";
                        if(distance <= 6) {
                            tfsHatchBackCost = 150;
                        } else{
                            tfsHatchBackCost = 150+ (distance - 6)*15;
                            tfsHatchBackCost = tfsHatchBackCost.toFixed(2);
                        }
                        tfsHatchBack.logo = '<img src="images/taxiforsure_logo.png"></img>';
                        tfsHatchBack.contact = 'tel:02260601010';
                        tfsHatchBack.cost = tfsHatchBackCost;
                        cabCosts.push(tfsHatchBack);
                        //For Sedan
                        var tfsSedanCost;
                        var tfsSedan = {};

                        tfsSedan.type = "Sedan";

                        if(distance <= 6) {
                            tfsSedanCost = 150;
                        } else {
                            tfsSedanCost = 150 + (distance - 6)*18;
                            tfsSedanCost = tfsSedanCost.toFixed(2);
                        }
                        tfsSedan.logo = '<img src="images/taxiforsure_logo.png"></img>';
                        tfsSedanCost.contact = 'tel:02260601010';
                        tfsSedan.cost = tfsSedanCost;
                        cabCosts.push(tfsSedan);

                        //For SUV
                        var tfsSuvCost;
                        var tfsSuv = {};

                        tfsSuv.type = "SUV";

                        if(distance <= 6) {
                            tfsSuvCost = 200;
                        } else {
                            tfsSuvCost = 200 + (distance - 6)*21;
                            tfsSuvCost = tfsSuvCost.toFixed(2);
                        }
                        tfsSuv.logo = '<img src="images/taxiforsure_logo.png"></img>';
                        tfsSuv.contact = 'tel:02260601010';
                        tfsSuv.cost = tfsSuvCost;
                        cabCosts.push(tfsSuv);


                    } else { //Night time pick up between 12am - 5am

                        var listItemHtml;
                        var tfsHatchBackCost;
                        var tfsHatchBack = {};

                        tfsHatchBack.type = " Hatchback";

                        if(distance <= 6) {
                            tfsHatchBackCost = 185;
                        } else{
                            tfsHatchBackCost = 185+ (distance - 6)*18;
                            tfsHatchBackCost = tfsHatchBackCost.toFixed(2);
                        }
                        tfsHatchBack.logo = '<img src="images/taxiforsure_logo.png"></img>';
                        tfsHatchBack.contact = 'tel:02260601010';
                        tfsHatchBack.cost = tfsHatchBackCost;
                        cabCosts.push(tfsHatchBack);

                        //For Sedan
                        var tfsSedanCost;
                        var tfsSedan = {};
                        tfsSedan.type = "Sedan";

                        if(distance <= 6) {
                            tfsSedanCost = 185;
                        } else {
                            tfsSedanCost = 185 + (distance - 6)*22;
                            tfsSedanCost = tfsSedanCost.toFixed(2);
                        }
                        tfsSedan.logo = '<img src="images/taxiforsure_logo.png"></img>';
                        tfsSedan.contact = 'tel:02260601010';
                        tfsSedan.cost = tfsSedanCost;
                        cabCosts.push(tfsSedan);

                        //For SUV
                        var tfsSuvCost;
                        tfsSuv = {};
                        tfsSuv.type = "SUV";

                        if(distance <= 6) {
                            tfsSuvCost = 250;
                        } else {
                            tfsSuvCost = 250 + (distance - 6)*26;
                            tfsSuvCost = tfsSuvCost.toFixed(2);
                        }
                        tfsSuv.logo = '<img src="images/taxiforsure_logo.png"></img>';
                        tfsSuv.contact = 'tel:02260601010';
                        tfsSuv.cost = tfsSuvCost;
                        cabCosts.push(tfsSuv);

                    }
            }

            
            function displayTaxiFares(distance, duration) {
                $('#rideWiseList').empty();
                distance = parseFloat(distance).toFixed(2);
                duration = parseFloat(duration).toFixed(2);
                
                calculateFaresForBookMyCab(distance, duration, timeOfPickup);
                calculateFaresForTaxiForSure(distance, duration, timeOfPickup);
                cabCosts.push(mumbaiCabs.getMeruCabFare(distance, timeOfPickup));
                cabCosts.push(mumbaiCabs.getEasyCabsFare(distance, timeOfPickup));
                cabCosts.push(mumbaiCabs.getOlaSedanFare(distance));
                cabCosts.push(mumbaiCabs.getOlaMiniFare(distance));
                cabCosts.push(mumbaiCabs.getOlaPrimeFare(distance));
                cabCosts.push(mumbaiCabs.getTabCabFare(distance, timeOfPickup));
                
                var listItemHtml;
                var sortedCosts = _.sortBy(cabCosts,'cost');
                $.each(sortedCosts, function(i,currCab){
                listItemHtml = '<li data-icon="phone"> <a href="'+currCab.contact+'" class="customlistbgcolor">'+currCab.logo+" "+currCab.type+' <span class="ui-li-count"> Rs '+currCab.cost+' - Rs '+(parseFloat(currCab.cost) + 50).toFixed(2)+'</span></a></li>';
                $("#rideWiseList").append(listItemHtml);

                });
                $('#rideWiseList').listview('refresh');
				$("a.customlistbgcolor").css({
					background: "#f6f6f6"			
				})
				$("a").css({
					color: "black"			
				})
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

        

        //When user hits the "user current location option"
        /*$("#useCurrentLocation").bind("click", function(event, ui){

            $.mobile.loading( "show", {
                  text: "Getting Location..",
                  textVisible: true,
                  theme: "b",
                  html: ""
            }); 
            //Get the current latitude and longitude.
                if(navigator.geolocation) {
                    $("#calculateOptions").button("disable");
                    navigator.geolocation.getCurrentPosition(function(position) {
                        var latitude = parseFloat(position.coords.latitude).toFixed(4);
                        var longitude = parseFloat(position.coords.longitude).toFixed(4);

                        window.origin = new google.maps.LatLng(latitude,longitude);
                        $("#source").val("Current Location");
                        $("#calculateOptions").button("enable");
                        $.mobile.loading( "hide" ); 
                    });
                    
                } else {
                    //console.log("Current location Not Found !");
                    $("#source").val("latitude and longitude not found");
                    $.mobile.loading( "hide" ); 
                }


        });*/
});

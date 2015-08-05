$(function() {
	$( "#calculateOptions" ).click(function(){
			
		var source = $("#source").val();
		if(source === "Current Location"){
			sessionStorage.setItem("origin", window.origin);
		}else{			
			sessionStorage.setItem("origin",source);
		}
		var destination=$("#dest").val();
		var timeOfPickup=$("input[name*=radio-choice]:checked").val();
		
		sessionStorage.setItem("dest",destination);
		sessionStorage.setItem("timeOfPickup",timeOfPickup);
		window.location="cheapestridesearchresults.html";
	});

	//When user hits the "user current location option"
        $("#useCurrentLocation").bind("click", function(event, ui){

            $.mobile.loading( "show", {
                  text: "Getting Location..",
                  textVisible: true,
                  theme: "a",
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
                    },
					function (error) {
						switch(error.code) {
							case error.PERMISSION_DENIED:
								alert("Please turn on your location.");
								
							break;
							case error.POSITION_UNAVAILABLE:
								alert("Location information is unavailable.");
								
								break;
							casealert( "The request to get user location timed out.");
							
								break;
							case error.UNKNOWN_ERROR:
								alert("An unknown error occurred.");
								
								break;
						}$.mobile.loading( "hide" );
				});
                    
                } else {
                    //console.log("Current location Not Found !");
                    $("#source").val("latitude and longitude not found");
                    $.mobile.loading( "hide" ); 
                }
        }); 
		
		
});

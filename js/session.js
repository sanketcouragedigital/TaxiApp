$(function() {
	$( "#calculateOptions" ).click(function(){
			
		var source = $("#source").val();
		if(source === "Current Location"){
			alert("current location is set..");
			sessionStorage.setItem("origin", window.origin);
		}else{
			alert("Location is not set");
			sessionStorage.setItem("origin",source);
		}
		var destination=$("#dest").val();
		var timeOfPickup=$("input[name*=radio-choice]:checked").val();
		
		sessionStorage.setItem("dest",destination);
		sessionStorage.setItem("timeOfPickup",timeOfPickup);
		window.location="Result.html";
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
                    });
                    
                } else {
                    //console.log("Current location Not Found !");
                    $("#source").val("latitude and longitude not found");
                    $.mobile.loading( "hide" ); 
                }
        }); 
		
		
});

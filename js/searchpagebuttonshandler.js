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
            //getCurrentLocation();
            checkGPSStateAndGetCurrentLocation();
            
        });
        
        function checkGPSStateAndGetCurrentLocation(){
            cordova.plugins.diagnostic.isLocationEnabled(function(enabled){
                if(enabled) {
                    calcuateCurrentLocationCoordinates();
                }
                else{
                    $.mobile.loading( "hide" );
                    //to turn on your Gps
                    $("#dlg-location-error").popup("open");
                }
            }, onError);
        }
        function onError(error){
            alert("An error occurred: "+error);
        }


        function calcuateCurrentLocationCoordinates() {
             if(navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        
                        var latitude = parseFloat(position.coords.latitude).toFixed(4);
                        var longitude = parseFloat(position.coords.longitude).toFixed(4);

                        window.origin = new google.maps.LatLng(latitude,longitude);
                        $("#source").val("Current Location");
                        $.mobile.loading( "hide" );
                    },
                    function (error) {
                        $.mobile.loading( "hide" );
                        //to set high accuracy (location setting)
                        $("#dlg-location-highAccuracy-error").popup("open");
                    },
                    
                    {
                        timeout: 10000, enableHighAccuracy: true
                    });
                    
                    //setTimeout(checkState, 500);
                }
        }

        $( "#locationError, #locationHighAccuracyError" ).click(function(){
            cordova.plugins.diagnostic.switchToLocationSettings();
        });

});

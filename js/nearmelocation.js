 $(function() {

     $.mobile.loading( "show", {
     text: "Getting Location..",
     textVisible: true,
     theme: "b",
     html: ""
    }); 
    // to Get the current latitude and longitude of user
     if(navigator.geolocation) {            
		navigator.geolocation.getCurrentPosition(function(position) {
        var userLatitude = parseFloat(position.coords.latitude).toFixed(4);
        var userLongitude = parseFloat(position.coords.longitude).toFixed(4);	
		$.mobile.loading( "hide" );
		var url = "http://www.ziftapp.com/dev/api/ziftapi.php?userLatitude="+userLatitude+"&userLongitude="+userLongitude+"&method=nearme&format=json";
		$.get(url).done(function(response){
			if(typeof response.nearestDrivers !== 'undefined' && response.nearestDrivers.length > 0)
			{
				var img="";
				$.each(response.nearestDrivers, function(index, nearestDistance){
					if(nearestDistance.isVerify==true ){
						img='<img src="../images/verify.png" style="position:relative"></img>';
					}
					else{
						img='<img src="../images/notverify.png" style="position:relative"></img>';
					}
						var listItemHtml;
						listItemHtml='<li data-icon="phone"><a href="'+nearestDistance.mobileno+'" class="customlistbgcolor"><h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+nearestDistance.name+'</h2><p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+nearestDistance.taxino+" "+nearestDistance.img+'</strong></p><p class="ui-li-aside">'+(parseFloat(nearestDistance.distance)).toFixed(2)+' KM</p></a></li>';
						$("#distanceWiseList").append(listItemHtml);				
					});
					$("#distanceWiseList").listview('refresh');
						$("a.customlistbgcolor").css({
						background : "#f6f6f6"
						})
						$("a").css({
							color : "black"
						})
			}
			else{
				$("#dlg-save-error").popup("open");
			}
		});
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
           alert('latitude and longitude not found');
           $.mobile.loading( "hide" ); 
    }
});
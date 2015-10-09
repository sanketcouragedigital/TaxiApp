var ubercabs = (function(){
function calculateFaresForUberX(distance, duration ) {
			var start_latitude = sessionStorage.getItem("start_latitude");
			var start_longitude = sessionStorage.getItem("start_longitude");
			var end_latitude = sessionStorage.getItem("end_latitude");
			var end_longitude = sessionStorage.getItem("end_longitude");
			var uberX = {};			
			var uberXRequest = $.ajax({
				url : "https://api.uber.com/v1/estimates/price?start_latitude="+start_latitude+"&start_longitude="+start_longitude+"&end_latitude="+end_latitude+"&end_longitude="+end_longitude+"&server_token=tGQhjuUgoJyx-TL3IczOGZhH7EIXgLrwbii7FZgs",
				method: "GET",
				async: false
			});
			uberXRequest.done(function(response){
				uberX.type = "Uber X";
					var uberMinCost;
					var uberMaxCost;
					$.each(response.prices,function (index,loadUberPrices){
						if(loadUberPrices.product_id=="a2b80c84-8d64-4c20-b731-6bf07d32cc9a") {
							uberMinCost = loadUberPrices.low_estimate;
							uberMaxCost = loadUberPrices.high_estimate;
						}
					});
					//uberX.logo='<img src="images/uber.png"></img>';
					uberX.cost = uberMinCost;
					uberX.maxcost = uberMaxCost;
					uberX.contact = 'https://play.google.com/store/apps/details?id=com.ubercab';	
					uberX.distance = distance;
					uberX.duration = duration;
					uberX.Terms_n_Conditions = "Uber is not a transportation provider. No need to tip. Applicable tolls, airport charges and surcharges may be added to your fare. Commercial vehicles might attract additional state government taxes, which would be over & above the toll. Cleaning or Repair Fee might be applicable in case of damage to the vehicle. At times of intense demand, our rates change over time to keep vehicles available.";
			});
			uberXRequest.fail(function() {
				//alert("Failed");	
			});
			return uberX;	
	}    
	function calculateFaresForUberBlack(distance, duration ){
			var start_latitude = sessionStorage.getItem("start_latitude");
			var start_longitude = sessionStorage.getItem("start_longitude");
			var end_latitude = sessionStorage.getItem("end_latitude");
			var end_longitude = sessionStorage.getItem("end_longitude");
			var uberBlack = {};
			
			var uberBlackRequest = $.ajax({
				url : "https://api.uber.com/v1/estimates/price?start_latitude="+start_latitude+"&start_longitude="+start_longitude+"&end_latitude="+end_latitude+"&end_longitude="+end_longitude+"&server_token=tGQhjuUgoJyx-TL3IczOGZhH7EIXgLrwbii7FZgs",
				method: "GET",
				async: false
			});

			uberBlackRequest.done(function(response){
				uberBlack.type = "Uber Black";
					var uberMinCost;
					var uberMaxCost;
					$.each(response.prices,function (index,loadUberPrices){
						if(loadUberPrices.product_id=="65849e62-1044-4b64-ac22-7451023f7eaf") {
							uberMinCost = loadUberPrices.low_estimate;
							uberMaxCost = loadUberPrices.high_estimate;
						}
					});
					//uberBlack.logo='<img src="images/uber.png"></img>';
					uberBlack.cost = uberMinCost;
					uberBlack.maxcost = uberMaxCost;
					uberBlack.contact = 'https://play.google.com/store/apps/details?id=com.ubercab';
					uberBlack.distance = distance;
					uberBlack.duration = duration;
					uberBlack.Terms_n_Conditions = "Uber is not a transportation provider. No need to tip. Applicable tolls, airport charges and surcharges may be added to your fare. Commercial vehicles might attract additional state government taxes, which would be over & above the toll. Cleaning or Repair Fee might be applicable in case of damage to the vehicle. At times of intense demand, our rates change over time to keep vehicles available. ";
					
			});

			uberBlackRequest.fail(function() {
				//alert("Failed");	
			});
			return uberBlack;
	} 
	
	
	return {
		getUberXFare : calculateFaresForUberX,
		getUberBlackFare : calculateFaresForUberBlack
	
	}

})()
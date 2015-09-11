var mumbaiCabs = (function(){
	function calculateFaresForBookMyCabAC(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM) {                 
		if(timeOfPickup === "day") {
			var bmcACCost;
			var bmcAC = {};
			bmcAC.type = "A/C Cool Cabs";
			if(distance <= 1.5){
				bmcACCost = Day_Cost;
			}else {
				bmcACCost = ((distance - 1.5) * Day_perKM) + Day_Cost;
				//bmcACCost = bmcACCost.toFixed(2);
			}
				bmcAC.logo='<img src="images/bookmycab_logo.jpg"></img>';
				bmcAC.cost = bmcACCost;
				bmcAC.contact = 'tel:02261234567';
			}else{
				var bmcACCost;
				var bmcAC = {};
				bmcAC.type = "A/C Cool Cabs"
				if(distance <= 1.5){
					bmcACCost = Night_Cost;
				}else {
					bmcACCost = ((distance - 1.5)*  Night_perKM) + Night_Cost ;
					//bmcACCost = bmcACCost.toFixed(2);
				}
				bmcAC.logo='<img src="images/bookmycab_logo.jpg"></img>';
				bmcAC.cost = bmcACCost;
				bmcAC.contact = 'tel:02261234567';
			}
			return bmcAC;
	}
	function calculateFaresForBookMyCabNonAC(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM){			 
		if(timeOfPickup === "day"){
			var bmcCost;
			var bmcNonAc = {};
			bmcNonAc.type = "Kali Peeli";
			if(distance <= 1.5){
				bmcCost = Day_Cost;
			}else {
				bmcCost =  ((distance - 1.5) * Day_perKM) + Day_Cost;
				//bmcCost = bmcCost.toFixed(2);
			}
				bmcNonAc.logo='<img src="images/bookmycab_logo.jpg"></img>';
				bmcNonAc.contact = 'tel:02261234567';
				bmcNonAc.cost = bmcCost;                        
			} else if(timeOfPickup === "night") { 
				var bmcCost;
				var bmcNonAc = {};
				bmcNonAc.type = "Kali Peeli";
				if(distance <= 1.5) {
					bmcCost = Night_Cost;
				}else {
					bmcCost = ((distance - 1.5)* Night_perKM) +Night_Cost;
					//bmcCost = bmcCost.toFixed(2);
				}
				bmcNonAc.logo='<img src="images/bookmycab_logo.jpg"></img>';
				bmcNonAc.cost = bmcCost;
				bmcNonAc.contact = 'tel:02261234567';
			}
			return bmcNonAc;
	}   
	function calculateFareForEasyCabs(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM) {
		if(timeOfPickup === "day") {
            var easyCabCost;
            var easyCab = {};
            easyCab.type = "Easy Cabs";
            if(distance <= 1.0) {
                easyCabCost = Day_Cost;
			} else {
				easyCabCost = ((distance - 1.0) * Day_perKM) + Day_Cost;
               	//easyCabCost = easyCabCost.toFixed(2);
			}
			easyCab.logo='<img src="images/easycabs_logo.png"></img>';
			easyCab.cost = easyCabCost;        
			easyCab.contact = 'tel:02243434343';
        } else { //It is a night time pick up. 12am - 5am
			var easyCabCost;
            var easyCab = {};
            easyCab.type = "Easy Cabs";
            if(distance <= 1.0) {
				easyCabCost = Night_Cost;
            } else {
               	easyCabCost = ((distance - 1.0) * Night_perKM) + Night_Cost;
				//easyCabCost = easyCabCost.toFixed(2);
            }
            easyCab.logo='<img src="images/easycabs_logo.png"></img>';
            easyCab.cost = easyCabCost;        
            easyCab.contact = 'tel:02243434343';    							
        }
        return easyCab;
	}
	function calculateFareForMeru(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM) {       
        var meruCost;
        var meru = {};
        meru.type = "Meru";
        if(timeOfPickup === "day") {
            if(distance <= 1) {
                meruCost = Day_Cost;
            } else {
                meruCost = ((distance - 1) * Day_perKM) + Day_Cost;
                //meruCost = meruCost.toFixed(2);
            }
            meru.logo = '<img src="images/meru_logo.png"></img>';
            meru.contact = 'tel:02242731000';
            meru.cost = meruCost;
        } else {
            if(distance <= 1) {
                meruCost =Night_Cost;
            } else {
                meruCost = ((distance - 1) * Night_perKM) + Night_Cost;
               // meruCost = meruCost.toFixed(2);
            }
            meru.logo = '<img src="images/meru_logo.png"></img>';
            meru.contact = 'tel:02242731000';
            meru.cost = meruCost;
            
        }
        return meru;
    }
    function calculateFareForTabCab(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM) {
    	var tabCabCost;   
        var tabCab = {};
        tabCab.type = "TAB Cab";
        if(timeOfPickup === "day") {
            if(distance <= 1) {
                tabCabCost = Day_Cost;
            } else {
                tabCabCost = ((distance - 1) * Day_perKM) + Day_Cost;
                //tabCabCost = tabCabCost.toFixed(2);
            }
            tabCab.logo = '<img src="images/TABcab_logo.png"></img>';
            tabCab.contact = 'tel:02242731000';
            tabCab.cost = tabCabCost;            
        } else {
			if(distance <= 1) {
                tabCabCost = Night_Cost;
            } else {
                tabCabCost = ((distance - 1) * Night_perKM) + Night_Cost;
                //tabCabCost = tabCabCost.toFixed(2);
            }
            tabCab.logo = '<img src="images/TABcab_logo.png"></img>';
            tabCab.contact = 'tel:02242731000';
            tabCab.cost = tabCabCost;            
        }
        return tabCab;
    }
    
	function calculateFaresForTaxiForSureHatchBack(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM){
		if(timeOfPickup === "day") {
			var listItemHtml;
			var tfsHatchBackCost;
			var tfsHatchBack = {};
			tfsHatchBack.type = "Hatchback";
			if(distance <= 6){
				tfsHatchBackCost = Day_Cost;
			} else{
				tfsHatchBackCost = ((distance - 6) * Day_perKM) + Day_Cost;
				//tfsHatchBackCost = tfsHatchBackCost.toFixed(2);
			}
			tfsHatchBack.logo = '<img src="images/taxiforsure_logo.png"></img>';
			tfsHatchBack.contact = 'tel:02260601010';
			tfsHatchBack.cost = tfsHatchBackCost;
		}else{
			var listItemHtml;
			var tfsHatchBackCost;
			var tfsHatchBack = {};
			tfsHatchBack.type = " Hatchback";
			if(distance <= 6) {
				tfsHatchBackCost = Night_Cost;
			} else{
				tfsHatchBackCost = ((distance - 6) * Night_perKM) + Night_Cost;
				//tfsHatchBackCost = tfsHatchBackCost.toFixed(2);
			}
			tfsHatchBack.logo = '<img src="images/taxiforsure_logo.png"></img>';
			tfsHatchBack.contact = 'tel:02260601010';
			tfsHatchBack.cost = tfsHatchBackCost;
		}
		return tfsHatchBack;
	}
	function calculateFaresForTaxiForSureSedan(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM){
		if(timeOfPickup === "day"){
			var tfsSedanCost;
			var tfsSedan = {};
			tfsSedan.type = "Sedan";
			if(distance <= 6) {
				tfsSedanCost = Day_Cost;
			}else {
				tfsSedanCost = ((distance - 6) * Day_perKM) + Day_Cost;
				//tfsSedanCost = tfsSedanCost.toFixed(2);
			}
			tfsSedan.logo = '<img src="images/taxiforsure_logo.png"></img>';
			tfsSedanCost.contact = 'tel:02260601010';
			tfsSedan.cost = tfsSedanCost;
		}else{
			var tfsSedanCost;
			var tfsSedan = {};
			tfsSedan.type = "Sedan";
			if(distance <= 6){
				tfsSedanCost = Night_Cost;
			} else {
				tfsSedanCost = ((distance - 6) * Night_perKM) + Night_Cost;
				//tfsSedanCost = tfsSedanCost.toFixed(2);
			}
			 tfsSedan.logo = '<img src="images/taxiforsure_logo.png"></img>';
			 tfsSedan.contact = 'tel:02260601010';
			 tfsSedan.cost = tfsSedanCost;
		} 
		return tfsSedan;
	}		
	function calculateFaresForTaxiForSureSUV(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM){             
		if(timeOfPickup === "day"){
			var tfsSuvCost;
			var tfsSuv = {};
			tfsSuv.type = "SUV";
			if(distance <= 6) {
				tfsSuvCost = Day_Cost;
			} else {
				tfsSuvCost = ((distance - 6) * Day_perKM) + Day_Cost;
				//tfsSuvCost = tfsSuvCost.toFixed(2);
			}
			tfsSuv.logo = '<img src="images/taxiforsure_logo.png"></img>';
			tfsSuv.contact = 'tel:02260601010';
			tfsSuv.cost = tfsSuvCost;
		}else{
			var tfsSuvCost;
			tfsSuv = {};
			tfsSuv.type = "SUV";
			if(distance <= 6) {
				tfsSuvCost = Night_Cost;
			} else {
				tfsSuvCost = ((distance - 6) * Night_perKM) + Night_Cost;
				//tfsSuvCost = tfsSuvCost.toFixed(2);
			}
			tfsSuv.logo = '<img src="images/taxiforsure_logo.png"></img>';
			tfsSuv.contact = 'tel:02260601010';
			tfsSuv.cost = tfsSuvCost;
		}
			return tfsSuv;
	}
	function calculateFareForOlaSedan(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM) {
        var olaSedanCost;
        var olaSedan = {};
		olaSedan.type = "Sedan";
        olaSedanCost = distance * Day_perKM;
        if(olaSedanCost <= 150) {
        	olaSedanCost = Day_Cost;
        } else {
            olaSedanCost = olaSedanCost;
           // olaSedanCost = olaSedanCost.toFixed(2);
        }
        olaSedan.logo='<img src="images/ola.jpg"></img>';
        olaSedan.contact='tel:02233553355';
        olaSedan.cost = olaSedanCost;
        return olaSedan;
    }
    function calculateFareForOlaMini(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM) {
        var olaMiniCost;
        var olaMini = {};
        olaMini.type = "Mini";
        if(distance <= 4) {
        	olaMiniCost = Day_Cost;
        } else {
        	olaMiniCost = ((distance - 4) * Day_perKM) + Day_Cost;
        	//olaMiniCost = olaMiniCost.toFixed(2);
        }
		olaMini.logo='<img src="images/ola.jpg"></img>';
		olaMini.contact = 'tel:02233553355'
        olaMini.cost = olaMiniCost;
        return olaMini;
    }
    function calculateFareOlaPrime(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM) {
        var olaPrimeCost;
        var olaPrime = {};
        olaPrime.type = "Prime";
        if(distance <= 5) {
        	olaPrimeCost = Day_Cost;
        } else {
        	olaPrimeCost = ((distance - 5)* Day_perKM) + Day_Cost;
        	//olaPrimeCost = olaPrimeCost.toFixed(2);
        }
        olaPrime.logo='<img src="images/ola.jpg"></img>';
        olaPrime.contact = 'tel:02233553355';
        olaPrime.cost = olaPrimeCost;
        return olaPrime;    
    }
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
						if(loadUberPrices.display_name=="uberX") {
							uberMinCost = loadUberPrices.low_estimate;
							uberMaxCost = loadUberPrices.high_estimate;
						}
					});
					uberX.logo='<img src="images/uber.png"></img>';
					uberX.cost = uberMinCost;
					uberX.maxcost = uberMaxCost;
					uberX.contact = 'https://play.google.com/store/apps/details?id=com.ubercab';
					
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
						if(loadUberPrices.display_name=="UberBLACK") {
							uberMinCost = loadUberPrices.low_estimate;
							uberMaxCost = loadUberPrices.high_estimate;
						}
					});
					uberBlack.logo='<img src="images/uber.png"></img>';
					uberBlack.cost = uberMinCost;
					uberBlack.maxcost = uberMaxCost;
					uberBlack.contact = 'https://play.google.com/store/apps/details?id=com.ubercab';
					
			});

			uberBlackRequest.fail(function() {
				//alert("Failed");	
			});
			return uberBlack;
	}
	//declare public variables and methods
	return {

		getEasyCabsFare : calculateFareForEasyCabs,
		getOlaSedanFare : calculateFareForOlaSedan,
		getOlaMiniFare  : calculateFareForOlaMini,
		getOlaPrimeFare : calculateFareOlaPrime,
		getTabCabFare   : calculateFareForTabCab,
		getMeruCabFare  : calculateFareForMeru,
		getTaxiForSureHatchBackFare : calculateFaresForTaxiForSureHatchBack,
		getTaxiForSureSedanFare     : calculateFaresForTaxiForSureSedan,
		getTaxiForSureSUVFare       : calculateFaresForTaxiForSureSUV,
		getBookMyCabACFare          : calculateFaresForBookMyCabAC,
		getBookMyCabNonACFare       : calculateFaresForBookMyCabNonAC,
		getUberXFare : calculateFaresForUberX,
		getUberBlackFare : calculateFaresForUberBlack
				
	}

})()
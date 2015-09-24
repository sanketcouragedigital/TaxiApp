var mumbaiCabs = (function(){
	function calculateFareForEasyCabs(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM) {
		if(timeOfPickup === "day") {
            var easyCabCost;
            var easyCab = {};
            easyCab.type = "Easy Cabs";
            if(distance <= First_x_KM) {
                easyCabCost = Day_Cost;
			} else {
				easyCabCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost);
               	//easyCabCost = easyCabCost.toFixed(2);
			}
			easyCab.logo=logo;
			easyCab.cost = easyCabCost;        
			easyCab.contact = 'tel:'+Contact;
        } else { //It is a night time pick up. 12am - 5am
			var easyCabCost;
            var easyCab = {};
            easyCab.type = "Easy Cabs";
            if(distance <= First_x_KM) {
				easyCabCost = Night_Cost;
            } else {
               	easyCabCost = (((distance - First_x_KM) * Night_perKM) + Night_Cost);
				//easyCabCost = easyCabCost.toFixed(2);
            }
            easyCab.logo=logo;
            easyCab.cost = easyCabCost;        
            easyCab.contact = 'tel:'+Contact;    							
        }
        return easyCab;
	}
	function calculateFareForOlaSedan(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM,per_minute_rate) {
        var olaSedanCost;
        var olaSedan = {};
		olaSedan.type = "Economy Sedan";
        olaSedanCost = distance * Day_perKM;
		if(distance <= First_x_KM) {
        	olaSedanCost = Day_Cost;
        } else {
        	olaSedanCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
        	//olaSedanCost = olaSedanCost.toFixed(2);
        }
        olaSedan.logo=logo;
        olaSedan.contact='tel:'+Contact;
        olaSedan.cost = olaSedanCost;
        return olaSedan;
    }
    function calculateFareForOlaMini(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM,per_minute_rate) {
        var olaMiniCost;
        var olaMini = {};
		var time = duration;
        olaMini.type = "Mini";
        if(distance <= First_x_KM) {
        	olaMiniCost = Day_Cost;
        } else {
        	olaMiniCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
        	//olaMiniCost = olaMiniCost.toFixed(2);
        }
		olaMini.logo=logo;
		olaMini.contact = 'tel:'+Contact;
        olaMini.cost = olaMiniCost;
        return olaMini;
    }
    function calculateFareOlaPrime(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM,per_minute_rate) {
        var olaPrimeCost;
        var olaPrime = {};
        olaPrime.type = "Prime";
        if(distance <= First_x_KM) {
        	olaPrimeCost = Day_Cost;
        } else {
        	olaPrimeCost = (((distance - First_x_KM)* Day_perKM) + Day_Cost) +(duration * per_minute_rate);
        	//olaPrimeCost = olaPrimeCost.toFixed(2);
        }
        olaPrime.logo=logo;
        olaPrime.contact = 'tel:'+Contact;
        olaPrime.cost = olaPrimeCost;
        return olaPrime;    
    }
   function calculateFareForTabCab(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM) {
    	var tabCabCost;   
        var tabCab = {};
        tabCab.type = "TAB Cab";
        if(timeOfPickup === "day") {
            if(distance <= First_x_KM) {
                tabCabCost = Day_Cost;
            } else {
                tabCabCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost);
                //tabCabCost = tabCabCost.toFixed(2);
            }
            tabCab.logo = logo;
            tabCab.contact = 'tel:'+Contact;
            tabCab.cost = tabCabCost;            
        } else {
			if(distance <= First_x_KM) {
                tabCabCost = Night_Cost;
            } else {
                tabCabCost = (((distance - First_x_KM) * Night_perKM) + Night_Cost);
                //tabCabCost = tabCabCost.toFixed(2);
            }
            tabCab.logo = logo;
            tabCab.contact = 'tel:'+Contact;
            tabCab.cost = tabCabCost;            
        }
        return tabCab;
    }
	function calculateFareForTabCabGold(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM) {
    	var tabCabGoldCost;   
        var tabCabGold = {};
        tabCabGold.type = "TAB Cab Gold";
        if(timeOfPickup === "day") {
            if(distance <= First_x_KM) {
                tabCabGoldCost = Day_Cost;
            } else {
                tabCabGoldCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost);
                //tabCabGoldCost = tabCabGoldCost.toFixed(2);
            }
            tabCabGold.logo = logo;
            tabCabGold.contact = 'tel:'+Contact;
            tabCabGold.cost = tabCabGoldCost;            
        } else {
			if(distance <= First_x_KM) {
                tabCabGoldCost = Night_Cost;
            } else {
                tabCabGoldCost = (((distance - First_x_KM) * Night_perKM) + Night_Cost);
                //tabCabGoldCost = tabCabGoldCost.toFixed(2);
            }
            tabCabGold.logo = logo;
            tabCabGold.contact = 'tel:'+Contact;
            tabCabGold.cost = tabCabGoldCost;            
        }
        return tabCabGold;
    }
    function calculateFareForMeru(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM) {       
        var meruCost;
        var meru = {};
        meru.type = "Meru";
        if(timeOfPickup === "day") {
            if(distance <= First_x_KM) {
                meruCost = Day_Cost;
            } else {
                meruCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost);
                //meruCost = meruCost.toFixed(2);
            }
            meru.logo = logo;
            meru.contact = 'tel:'+Contact;
            meru.cost = meruCost;
        } else {
            if(distance <= First_x_KM) {
                meruCost =Night_Cost;
            } else {
                meruCost = (((distance - First_x_KM) * Night_perKM) + Night_Cost);
               // meruCost = meruCost.toFixed(2);
            }
            meru.logo = logo;
            meru.contact = 'tel:'+Contact;
            meru.cost = meruCost;
            
        }
        return meru;
    }
	function calculateFaresForTaxiForSureHatchBack(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM,per_minute_rate){
		if(timeOfPickup === "day") {
			var listItemHtml;
			var tfsHatchBackCost;
			var tfsHatchBack = {};
			tfsHatchBack.type = "Hatchback";
			if(distance <= First_x_KM){
				tfsHatchBackCost = Day_Cost;
			} else{
				tfsHatchBackCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) +(duration * per_minute_rate);
				//tfsHatchBackCost = tfsHatchBackCost.toFixed(2);
			}
			tfsHatchBack.logo = logo;
			tfsHatchBack.contact = 'tel:'+Contact;
			tfsHatchBack.cost = tfsHatchBackCost;
		}else{
			var listItemHtml;
			var tfsHatchBackCost;
			var tfsHatchBack = {};
			tfsHatchBack.type = " Hatchback";
			if(distance <= First_x_KM) {
				tfsHatchBackCost = Day_Cost;
			} else{
				tfsHatchBackCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) +(duration * per_minute_rate);
				//tfsHatchBackCost = tfsHatchBackCost.toFixed(2);
			}
			tfsHatchBack.logo = logo;
			tfsHatchBack.contact = 'tel:'+Contact;
			tfsHatchBack.cost = tfsHatchBackCost;
		}
		return tfsHatchBack;
	}
	function calculateFaresForTaxiForSureSedan(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM,per_minute_rate){
		if(timeOfPickup === "day"){
			var tfsSedanCost;
			var tfsSedan = {};
			tfsSedan.type = "Sedan";
			if(distance <= First_x_KM) {
				tfsSedanCost = Day_Cost;
			}else {
				tfsSedanCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
				//tfsSedanCost = tfsSedanCost.toFixed(2);
			}
			tfsSedan.logo = logo;
			tfsSedanCost.contact = 'tel:'+Contact;
			tfsSedan.cost = tfsSedanCost;
		}else{
			var tfsSedanCost;
			var tfsSedan = {};
			tfsSedan.type = "Sedan";
			if(distance <= First_x_KM){
				tfsSedanCost = Day_Cost;
			} else {
				tfsSedanCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) +(duration * per_minute_rate);
				//tfsSedanCost = tfsSedanCost.toFixed(2);
			}
			 tfsSedan.logo = logo;
			 tfsSedan.contact = 'tel:'+Contact;
			 tfsSedan.cost = tfsSedanCost;
		} 
		return tfsSedan;
	}	
	function calculateFaresForTaxiForSureEeco(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM,per_minute_rate){
		if(timeOfPickup === "day"){
			var tfsEecoCost;
			var tfsEeco = {};
			tfsEeco.type = "Eeco";
			if(distance <= First_x_KM) {
				tfsEecoCost = Day_Cost;
			}else {
				tfsEecoCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
				//tfsEecoCost = tfsEecoCost.toFixed(2);
			}
			tfsEeco.logo = logo;
			tfsEecoCost.contact = 'tel:'+Contact;
			tfsEeco.cost = tfsEecoCost;
		}else{
			var tfsEecoCost;
			var tfsEeco = {};
			tfsEeco.type = "Sedan";
			if(distance <= First_x_KM){
				tfsEecoCost = Day_Cost;
			} else {
				tfsEecoCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
				//tfsEecoCost = tfsEecoCost.toFixed(2);
			}
			 tfsEeco.logo = logo;
			 tfsEeco.contact = 'tel:'+Contact;
			 tfsEeco.cost = tfsEecoCost;
		} 
		return tfsEeco;
	}
	function calculateFaresForTaxiForSureSUV(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM,per_minute_rate){             
		if(timeOfPickup === "day"){
			var tfsSuvCost;
			var tfsSuv = {};
			tfsSuv.type = "SUV";
			if(distance <= First_x_KM) {
				tfsSuvCost = Day_Cost;
			} else {
				tfsSuvCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
				//tfsSuvCost = tfsSuvCost.toFixed(2);
			}
			tfsSuv.logo = logo;
			tfsSuv.contact = 'tel:'+Contact;
			tfsSuv.cost = tfsSuvCost;
		}else{
			var tfsSuvCost;
			tfsSuv = {};
			tfsSuv.type = "SUV";
			if(distance <= First_x_KM) {
				tfsSuvCost = Day_Cost;
			} else {
				tfsSuvCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
				//tfsSuvCost = tfsSuvCost.toFixed(2);
			}
			tfsSuv.logo = logo;
			tfsSuv.contact = 'tel:'+Contact;
			tfsSuv.cost = tfsSuvCost;
		}
			return tfsSuv;
	}
	function calculateFaresForBookMyCabAC(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM) {                 
		if(timeOfPickup === "day") {
			var bmcACCost;
			var bmcAC = {};
			bmcAC.type = "A/C Cool Cabs";
			if(distance <= First_x_KM){
				bmcACCost = Day_Cost;
			}else {
				bmcACCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost);
				//bmcACCost = bmcACCost.toFixed(2);
			}
				bmcAC.logo=logo;
				bmcAC.cost = bmcACCost;
				bmcAC.contact = 'tel:'+Contact;
			}else if(timeOfPickup === "night") {
				var bmcACCost;
				var bmcAC = {};
				bmcAC.type = "A/C Cool Cabs"
				if(distance <= First_x_KM){
					bmcACCost = Day_Cost;
				}else {
					cost = (((distance - First_x_KM)* Day_perKM) + Day_Cost);
					bmcACCost = cost + (0.25 * cost);
				}
				bmcAC.logo=logo;
				bmcAC.cost = bmcACCost;
				bmcAC.contact = 'tel:'+Contact;
			}
			return bmcAC;
	}
	function calculateFaresForBookMyCabNonAC(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM){			 
		if(timeOfPickup === "day"){
			var bmcCost;
			var bmcNonAc = {};
			bmcNonAc.type = "Kali Peeli";
			if(distance <= First_x_KM){
				bmcCost = Day_Cost;
			}else {
				bmcCost =  (((distance - First_x_KM) * Day_perKM) + Day_Cost);
				//bmcCost = bmcCost.toFixed(2);
			}
				bmcNonAc.logo=logo;
				bmcNonAc.contact = 'tel:'+Contact;
				bmcNonAc.cost = bmcCost;                        
			} else if(timeOfPickup === "night") { 
				var bmcCost;
				var bmcNonAc = {};
				bmcNonAc.type = "Kali Peeli";
				if(distance <= First_x_KM) {
					bmcCost = Day_Cost;
				}else {
					cost = (((distance - First_x_KM)* Day_perKM) + Day_Cost);
					bmcCost = cost + (0.25 * cost);
					//bmcCost = bmcCost.toFixed(2);
				}
				bmcNonAc.logo=logo;
				bmcNonAc.cost = bmcCost;
				bmcNonAc.contact = 'tel:'+Contact;
			}
			return bmcNonAc;
	}   
	function calculateFaresForPriyadarshini(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM){			 
		if(timeOfPickup === "day"){
			var priyadarshiniCost;
			var priyadarshini = {};
			priyadarshini.type = "Priyadarshini";
			if(distance <= First_x_KM){
				priyadarshiniCost = Day_Cost;
			}else {
				priyadarshiniCost =  (((distance - First_x_KM) * Day_perKM) + Day_Cost);
				//priyadarshiniCost = priyadarshiniCost.toFixed(2);
			}
				priyadarshini.logo=logo;
				priyadarshini.contact = 'tel:'+Contact;
				priyadarshini.cost = priyadarshiniCost;                        
			} else if(timeOfPickup === "night") { 
				var priyadarshiniCost;
				var priyadarshini = {};
				priyadarshini.type = "Priyadarshini";
				if(distance <= First_x_KM) {
					priyadarshiniCost = Night_Cost;
				}else {
					priyadarshiniCost = (((distance - First_x_KM)* Night_perKM) + Night_Cost);
					//priyadarshiniCost = priyadarshiniCost.toFixed(2);
				}
				priyadarshini.logo=logo;
				priyadarshini.cost = priyadarshiniCost;
				priyadarshini.contact = 'tel:'+Contact;
			}
			return priyadarshini;
	}   
	function calculateFarecelcabsEconomy(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM) {
        var celcabsEconomyCost;
        var celcabsEconomy = {};
        celcabsEconomy.type = "Economy Indica AC";
        if(distance <= First_x_KM) {
        	celcabsEconomyCost = Day_Cost;
        } else {
        	celcabsEconomyCost = (((distance - First_x_KM)* Day_perKM) + Day_Cost);
        	//celcabsEconomyCost = celcabsEconomyCost.toFixed(2);
        }
        celcabsEconomy.logo=logo;
        celcabsEconomy.contact = 'tel:'+Contact;
        celcabsEconomy.cost = celcabsEconomyCost;
        return celcabsEconomy;    
    }
	function calculateFarecelcabsComfort(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM) {
        var celcabsComfortCost;
        var celcabsComfort = {};
        celcabsComfort.type = "Comfort Indigo,Logan";
        if(distance <= First_x_KM) {
        	celcabsComfortCost = Day_Cost;
        } else {
        	celcabsComfortCost = (((distance - First_x_KM)* Day_perKM) + Day_Cost);
        	//celcabsComfortCost = celcabsComfortCost.toFixed(2);
        }
        celcabsComfort.logo=logo;
        celcabsComfort.contact = 'tel:'+Contact;
        celcabsComfort.cost = celcabsComfortCost;
        return celcabsComfort;    
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
						if(loadUberPrices.product_id=="a2b80c84-8d64-4c20-b731-6bf07d32cc9a") {
							uberMinCost = loadUberPrices.low_estimate;
							uberMaxCost = loadUberPrices.high_estimate;
						}
					});
					//uberX.logo='<img src="images/uber.png"></img>';
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
						if(loadUberPrices.product_id=="65849e62-1044-4b64-ac22-7451023f7eaf") {
							uberMinCost = loadUberPrices.low_estimate;
							uberMaxCost = loadUberPrices.high_estimate;
						}
					});
					//uberBlack.logo='<img src="images/uber.png"></img>';
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
		getTabCabGoldFare   : calculateFareForTabCabGold,
		getMeruCabFare  : calculateFareForMeru,
		getTaxiForSureHatchBackFare : calculateFaresForTaxiForSureHatchBack,
		getTaxiForSureSedanFare     : calculateFaresForTaxiForSureSedan,
		getTaxiForSureSUVFare       : calculateFaresForTaxiForSureSUV,
		getTaxiForSureEecoFare : calculateFaresForTaxiForSureEeco,
		getBookMyCabACFare          : calculateFaresForBookMyCabAC,
		getBookMyCabNonACFare       : calculateFaresForBookMyCabNonAC,
		getPriyadarshiniFare : calculateFaresForPriyadarshini,
		getcelcabsComfort    : calculateFarecelcabsComfort,
		getcelcabsEconomy    : calculateFarecelcabsEconomy,		
		getUberXFare : calculateFaresForUberX,
		getUberBlackFare : calculateFaresForUberBlack
				
	}

})()
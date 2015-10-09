var celcabs = (function(){
function calculateFarecelcabsEconomy(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet) {
        var celcabsEconomyCost;
        var celcabsEconomy = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
        celcabsEconomy.type = "CelCabs Economy";
        if(distance <= First_x_KM) {
        	celcabsEconomyCost = Day_Cost;
        } else {
        	celcabsEconomyCost = (((distance - First_x_KM)* Day_perKM) + Day_Cost);
        	//celcabsEconomyCost = celcabsEconomyCost.toFixed(2);
        }
        celcabsEconomy.logo=logo;
        celcabsEconomy.contact ='tel:'+ Contact;
        celcabsEconomy.cost = celcabsEconomyCost;
		celcabsEconomy.First_x_KM = First_x_KM;
		celcabsEconomy.app_link = app_link;
		celcabsEconomy.Terms_n_Conditions = Terms_n_Conditions;
		celcabsEconomy.per_minute_rate = per_minute_rate;
		celcabsEconomy.distance = distance;
		celcabsEconomy.duration = duration;	
		CostOfDayOrNight = Day_Cost;
		CostPerKMOfDayOrNight = Day_perKM;
		WaitingChargesForDayOrNight = Waiting_Charges_Day;
		celcabsEconomy.CostOfDayOrNight = CostOfDayOrNight;
		celcabsEconomy.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		celcabsEconomy.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
		celcabsEconomy.Fleet = Fleet;
        return celcabsEconomy;    
    }
	function calculateFarecelcabsComfort(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet) {
        var celcabsComfortCost;
        var celcabsComfort = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
        celcabsComfort.type = "CelCabs Comfort";
        if(distance <= First_x_KM) {
        	celcabsComfortCost = Day_Cost;
        } else {
        	celcabsComfortCost = (((distance - First_x_KM)* Day_perKM) + Day_Cost);
        	//celcabsComfortCost = celcabsComfortCost.toFixed(2);
        }
        celcabsComfort.logo=logo;
        celcabsComfort.contact ='tel:'+ Contact;
        celcabsComfort.cost = celcabsComfortCost;
		celcabsComfort.First_x_KM = First_x_KM;
		celcabsComfort.app_link = app_link;
		celcabsComfort.Terms_n_Conditions = Terms_n_Conditions;
		celcabsComfort.per_minute_rate = per_minute_rate;
		celcabsComfort.distance = distance;
		celcabsComfort.duration = duration;
		CostOfDayOrNight = Day_Cost;
		CostPerKMOfDayOrNight = Day_perKM;
		WaitingChargesForDayOrNight = Waiting_Charges_Day;
		celcabsComfort.CostOfDayOrNight = CostOfDayOrNight;
		celcabsComfort.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		celcabsComfort.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
		celcabsComfort.Fleet = Fleet;
        return celcabsComfort;    
    }
	
	function calculateFarecelcabsSUV(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet) {
        var celcabsSUVCost;
        var celcabsSUV = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
        celcabsSUV.type = "CelCabs SUV";
        if(distance <= First_x_KM) {
        	celcabsSUVCost = Day_Cost;
        } else {
        	celcabsSUVCost = (((distance - First_x_KM)* Day_perKM) + Day_Cost);
        	//celcabsSUVCost = celcabsSUVCost.toFixed(2);
        }
        celcabsSUV.logo=logo;
        celcabsSUV.contact ='tel:'+ Contact;
        celcabsSUV.cost = celcabsSUVCost;
		celcabsSUV.First_x_KM = First_x_KM;
		celcabsSUV.app_link = app_link;
		celcabsSUV.Terms_n_Conditions = Terms_n_Conditions;
		celcabsSUV.per_minute_rate = per_minute_rate;
		celcabsSUV.distance = distance;
		celcabsSUV.duration = duration;
		CostOfDayOrNight = Day_Cost;
		CostPerKMOfDayOrNight = Day_perKM;
		WaitingChargesForDayOrNight = Waiting_Charges_Day;
		celcabsSUV.CostOfDayOrNight = CostOfDayOrNight;
		celcabsSUV.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		celcabsSUV.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
		celcabsSUV.Fleet = Fleet;
        return celcabsSUV;    
    }
	function calculateFaresForCelCabsStandard(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){			 
		if(timeOfPickup === "day"){
			var celcabsStandardCost;
			var celcabsStandard = {};
			var CostOfDayOrNight;
			var CostPerKMOfDayOrNight;
			var WaitingChargesForDayOrNight;
			celcabsStandard.type = "Cel Cabs Standard";
			if(distance <= First_x_KM){
				celcabsStandardCost = Day_Cost;
			}else {
				celcabsStandardCost =  (((distance - First_x_KM) * Day_perKM) + Day_Cost);
				//celcabsStandardCost = celcabsStandardCost.toFixed(2);
			}
				celcabsStandard.logo=logo;
				celcabsStandard.contact ='tel:'+ Contact;
				celcabsStandard.cost = celcabsStandardCost;  
				celcabsStandard.First_x_KM = First_x_KM;
				celcabsStandard.app_link = app_link;
				celcabsStandard.Terms_n_Conditions = Terms_n_Conditions;
				celcabsStandard.per_minute_rate = per_minute_rate;
				celcabsStandard.distance = distance;
				celcabsStandard.duration = duration;
				CostOfDayOrNight = Day_Cost;
				CostPerKMOfDayOrNight = Day_perKM;
				WaitingChargesForDayOrNight = Waiting_Charges_Day;
				celcabsStandard.Fleet = Fleet;
			} else if(timeOfPickup === "night") { 
				var celcabsStandardCost;
				var celcabsStandard = {};
				celcabsStandard.type = "Cel Cabs Standard";
				if(distance <= First_x_KM) {
					celcabsStandardCost = Day_Cost;
				}else {
					cost = (((distance - First_x_KM)* Day_perKM) + Day_Cost);
					celcabsStandardCost = cost + (0.25 * cost);
					//celcabsStandardCost = celcabsStandardCost.toFixed(2);
				}
				celcabsStandard.logo=logo;
				celcabsStandard.cost = celcabsStandardCost;
				celcabsStandard.contact ='tel:'+ Contact;
				celcabsStandard.First_x_KM = First_x_KM;
				celcabsStandard.app_link = app_link;
				celcabsStandard.Terms_n_Conditions = Terms_n_Conditions;
				celcabsStandard.per_minute_rate = per_minute_rate;	
				celcabsStandard.distance = distance;
				celcabsStandard.duration = duration;
				CostOfDayOrNight = Night_Cost;
				CostPerKMOfDayOrNight = Night_perKM;
				WaitingChargesForDayOrNight = Waiting_Charges_Night;
				celcabsStandard.Fleet = Fleet;
			}
			celcabsStandard.CostOfDayOrNight = CostOfDayOrNight;
			celcabsStandard.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
			celcabsStandard.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
			return celcabsStandard;
	} 
	return {
		getcelcabsComfortFare    : calculateFarecelcabsComfort,
		getcelcabsEconomyFare    : calculateFarecelcabsEconomy,	
		getcelcabsSUVFare    	 : calculateFarecelcabsSUV,
		getcelcabsStandardFare   : calculateFaresForCelCabsStandard
	
	
	}

})()
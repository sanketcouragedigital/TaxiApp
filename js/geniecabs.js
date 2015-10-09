
var geniecabs = (function(){
	function calculateFaresForGenieCabs(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){			 
		if(timeOfPickup === "day"){
			var geniecabCost;
			var geniecab = {};
			var CostOfDayOrNight;
			var CostPerKMOfDayOrNight;
			var WaitingChargesForDayOrNight;
			geniecab.type = "Genie Cab";
			if(distance <= First_x_KM){
				geniecabCost = Day_Cost;
			}else {
				geniecabCost =  (((distance - First_x_KM) * Day_perKM) + Day_Cost);
				//geniecabCost = geniecabCost.toFixed(2);
			}
				geniecab.logo=logo;
				geniecab.contact ='tel:'+ Contact;
				geniecab.cost = geniecabCost;  
				geniecab.First_x_KM = First_x_KM;
				geniecab.app_link = app_link;
				geniecab.Terms_n_Conditions = Terms_n_Conditions;
				geniecab.per_minute_rate = per_minute_rate;
				geniecab.distance = distance;
				geniecab.duration = duration;
				CostOfDayOrNight = Day_Cost;
				CostPerKMOfDayOrNight = Day_perKM;
				WaitingChargesForDayOrNight = Waiting_Charges_Day;
				geniecab.Fleet = Fleet;
			} else if(timeOfPickup === "night") { 
				var geniecabCost;
				var geniecab = {};
				geniecab.type = "Genie Cab";
				if(distance <= First_x_KM) {
					geniecabCost = Day_Cost;
				}else {
					cost = (((distance - First_x_KM)* Day_perKM) + Day_Cost);
					geniecabCost = cost + (0.25 * cost);
					//geniecabCost = geniecabCost.toFixed(2);
				}
				geniecab.logo=logo;
				geniecab.cost = geniecabCost;
				geniecab.contact ='tel:'+ Contact;
				geniecab.First_x_KM = First_x_KM;
				geniecab.app_link = app_link;
				geniecab.Terms_n_Conditions = Terms_n_Conditions;
				geniecab.per_minute_rate = per_minute_rate;	
				geniecab.distance = distance;
				geniecab.duration = duration;
				CostOfDayOrNight = Night_Cost;
				CostPerKMOfDayOrNight = Night_perKM;
				WaitingChargesForDayOrNight = Waiting_Charges_Night;
				geniecab.Fleet = Fleet;
			}
			geniecab.CostOfDayOrNight = CostOfDayOrNight;
			geniecab.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
			geniecab.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
			return geniecab;
	} 
	return {
	
		getgeniecabFare : calculateFaresForGenieCabs
	
	}

})()
var megacabs = (function(){
function calculateFaresForMegaCabs(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){			 
		if(timeOfPickup === "day"){
			var megacabCost;
			var megacab = {};
			var CostOfDayOrNight;
			var CostPerKMOfDayOrNight;
			var WaitingChargesForDayOrNight;
			megacab.type = "Mega Cab";
			if(distance <= First_x_KM){
				megacabCost = Day_Cost;
			}else {
				megacabCost =  (((distance - First_x_KM) * Day_perKM) + Day_Cost);
				//megacabCost = megacabCost.toFixed(2);
			}
				megacab.logo=logo;
				megacab.contact ='tel:'+ Contact;
				megacab.cost = megacabCost;  
				megacab.First_x_KM = First_x_KM;
				megacab.app_link = app_link;
				megacab.Terms_n_Conditions = Terms_n_Conditions;
				megacab.per_minute_rate = per_minute_rate;
				megacab.distance = distance;
				megacab.duration = duration;
				CostOfDayOrNight = Day_Cost;
				CostPerKMOfDayOrNight = Day_perKM;
				WaitingChargesForDayOrNight = Waiting_Charges_Day;
				megacab.Fleet = Fleet;
			} else if(timeOfPickup === "night") { 
				var megacabCost;
				var megacab = {};
				megacab.type = "Mega Cab";
				if(distance <= First_x_KM) {
					megacabCost = Day_Cost;
				}else {
					cost = (((distance - First_x_KM)* Day_perKM) + Day_Cost);
					megacabCost = cost + (0.25 * cost);
					//megacabCost = megacabCost.toFixed(2);
				}
				megacab.logo=logo;
				megacab.cost = megacabCost;
				megacab.contact ='tel:'+ Contact;
				megacab.First_x_KM = First_x_KM;
				megacab.app_link = app_link;
				megacab.Terms_n_Conditions = Terms_n_Conditions;
				megacab.per_minute_rate = per_minute_rate;	
				megacab.distance = distance;
				megacab.duration = duration;
				CostOfDayOrNight = Night_Cost;
				CostPerKMOfDayOrNight = Night_perKM;
				WaitingChargesForDayOrNight = Waiting_Charges_Night;
				megacab.Fleet = Fleet;
			}
			megacab.CostOfDayOrNight = CostOfDayOrNight;
			megacab.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
			megacab.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
			return megacab;
	} 
	
	return {
		getmegacabFare : calculateFaresForMegaCabs
	
	}

})()
var bookmycabs = (function(){
function calculateFaresForBookMyCabAC(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet) {                 
		if(timeOfPickup === "day") {
			var bmcACCost;
			var bmcAC = {};
			var CostOfDayOrNight;
			var CostPerKMOfDayOrNight;
			var WaitingChargesForDayOrNight;
			bmcAC.type = "BookMyCab A/C Cool Cabs";
			if(distance <= First_x_KM){
				bmcACCost = Day_Cost;
			}else {
				bmcACCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost);
				//bmcACCost = bmcACCost.toFixed(2);
			}
				bmcAC.logo=logo;
				bmcAC.cost = bmcACCost;
				bmcAC.contact ='tel:'+ Contact;
				bmcAC.First_x_KM = First_x_KM;
				bmcAC.app_link = app_link;
				bmcAC.Terms_n_Conditions = Terms_n_Conditions;				
				bmcAC.per_minute_rate = per_minute_rate;
				bmcAC.distance = distance;
				bmcAC.duration = duration;
				bmcAC.Fleet = Fleet;
				CostOfDayOrNight = Day_Cost;
				CostPerKMOfDayOrNight = Day_perKM;
				WaitingChargesForDayOrNight = Waiting_Charges_Day;
			}else if(timeOfPickup === "night") {
				var bmcACCost;
				var bmcAC = {};
				bmcAC.type = "BookMyCab A/C Cool Cabs"
				if(distance <= First_x_KM){
					bmcACCost = Day_Cost;
				}else {
					cost = (((distance - First_x_KM)* Day_perKM) + Day_Cost);
					bmcACCost = cost + (0.25 * cost);
				}
				bmcAC.logo=logo;
				bmcAC.cost = bmcACCost;
				bmcAC.contact ='tel:'+ Contact;
				bmcAC.First_x_KM = First_x_KM;
				bmcAC.app_link = app_link;
				bmcAC.Terms_n_Conditions = Terms_n_Conditions;
				bmcAC.per_minute_rate = per_minute_rate;
				bmcAC.distance = distance;
				bmcAC.duration = duration;
				bmcAC.Fleet = Fleet;
				CostOfDayOrNight = Night_Cost;
				CostPerKMOfDayOrNight = Night_perKM;
				WaitingChargesForDayOrNight = Waiting_Charges_Night;
			}
			bmcAC.CostOfDayOrNight = CostOfDayOrNight;
			bmcAC.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
			bmcAC.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
			return bmcAC;
	}
	function calculateFaresForBookMyCabNonAC(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){			 
		if(timeOfPickup === "day"){
			var bmcCost;
			var bmcNonAc = {};
			var CostOfDayOrNight;
			var CostPerKMOfDayOrNight;
			var WaitingChargesForDayOrNight;
			bmcNonAc.type = "BookMyCab Kali Peeli";
			if(distance <= First_x_KM){
				bmcCost = Day_Cost;
			}else {
				bmcCost =  (((distance - First_x_KM) * Day_perKM) + Day_Cost);
				//bmcCost = bmcCost.toFixed(2);
			}
				bmcNonAc.logo=logo;
				bmcNonAc.contact ='tel:'+ Contact;
				bmcNonAc.cost = bmcCost;  
				bmcNonAc.First_x_KM = First_x_KM;
				bmcNonAc.app_link = app_link;
				bmcNonAc.Terms_n_Conditions = Terms_n_Conditions;
				bmcNonAc.per_minute_rate = per_minute_rate;
				bmcNonAc.distance = distance;
				bmcNonAc.duration = duration;
				CostOfDayOrNight = Day_Cost;
				CostPerKMOfDayOrNight = Day_perKM;
				WaitingChargesForDayOrNight = Waiting_Charges_Day;
				bmcNonAc.Fleet = Fleet;
			} else if(timeOfPickup === "night") { 
				var bmcCost;
				var bmcNonAc = {};
				bmcNonAc.type = "BookMyCab Kali Peeli";
				if(distance <= First_x_KM) {
					bmcCost = Day_Cost;
				}else {
					cost = (((distance - First_x_KM)* Day_perKM) + Day_Cost);
					bmcCost = cost + (0.25 * cost);
					//bmcCost = bmcCost.toFixed(2);
				}
				bmcNonAc.logo=logo;
				bmcNonAc.cost = bmcCost;
				bmcNonAc.contact ='tel:'+ Contact;
				bmcNonAc.First_x_KM = First_x_KM;
				bmcNonAc.app_link = app_link;
				bmcNonAc.Terms_n_Conditions = Terms_n_Conditions;
				bmcNonAc.per_minute_rate = per_minute_rate;	
				bmcNonAc.distance = distance;
				bmcNonAc.duration = duration;
				CostOfDayOrNight = Night_Cost;
				CostPerKMOfDayOrNight = Night_perKM;
				WaitingChargesForDayOrNight = Waiting_Charges_Night;
				bmcNonAc.Fleet = Fleet;
			}
			bmcNonAc.CostOfDayOrNight = CostOfDayOrNight;
			bmcNonAc.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
			bmcNonAc.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
			return bmcNonAc;
	}   
	
	return {
		getBookMyCabACFare          : calculateFaresForBookMyCabAC,
		getBookMyCabNonACFare       : calculateFaresForBookMyCabNonAC
	
	}

})()
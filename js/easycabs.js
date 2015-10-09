var easycabs = (function(){
function calculateFareForEasyCabs(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet) {
		if(timeOfPickup === "day") {
            var easyCabCost;
            var easyCab = {};
			var CostOfDayOrNight;
			var CostPerKMOfDayOrNight;
			var WaitingChargesForDayOrNight;
            easyCab.type = "Easy Cabs";
            if(distance <= First_x_KM) {
                easyCabCost = Day_Cost;
			} else {
				easyCabCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost);
               	//easyCabCost = easyCabCost.toFixed(2);
			}
			easyCab.logo=logo;
			easyCab.cost = easyCabCost;        
			easyCab.contact ='tel:'+ Contact;
			easyCab.First_x_KM = First_x_KM;
			easyCab.per_minute_rate = per_minute_rate;
			easyCab.app_link = app_link;
			easyCab.Terms_n_Conditions = Terms_n_Conditions;
			easyCab.distance = distance;
			easyCab.duration = duration;
			easyCab.Fleet = Fleet;
			CostOfDayOrNight = Day_Cost;
			CostPerKMOfDayOrNight = Day_perKM;
			WaitingChargesForDayOrNight = Waiting_Charges_Day;
			
        }else { 
		
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
            easyCab.contact ='tel:'+ Contact;  
			easyCab.First_x_KM = First_x_KM;
			easyCab.per_minute_rate = per_minute_rate;
			easyCab.app_link = app_link;
			easyCab.Terms_n_Conditions = Terms_n_Conditions;
			easyCab.distance = distance;
			easyCab.duration = duration;
			easyCab.Fleet = Fleet;
			CostOfDayOrNight = Night_Cost;
			CostPerKMOfDayOrNight = Night_perKM;
			WaitingChargesForDayOrNight = Waiting_Charges_Night;
			
        }
		easyCab.CostOfDayOrNight = CostOfDayOrNight;
		easyCab.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		easyCab.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
        return easyCab;
	}
	
	return {

		getEasyCabsFare : calculateFareForEasyCabs
	}

})()
var priyadarshiniabs = (function(){
function calculateFaresForPriyadarshini(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){			 
		if(timeOfPickup === "day"){
			var priyadarshiniCost;
			var priyadarshini = {};
			var CostOfDayOrNight;
			var CostPerKMOfDayOrNight;
			var WaitingChargesForDayOrNight;
			priyadarshini.type = "Priyadarshini";
			if(distance <= First_x_KM){
				priyadarshiniCost = Day_Cost;
			}else {
				priyadarshiniCost =  (((distance - First_x_KM) * Day_perKM) + Day_Cost);
				//priyadarshiniCost = priyadarshiniCost.toFixed(2);
			}
				priyadarshini.logo=logo;
				priyadarshini.contact ='tel:'+ Contact;
				priyadarshini.cost = priyadarshiniCost;  
				priyadarshini.First_x_KM = First_x_KM;				
				priyadarshini.app_link = app_link;
				priyadarshini.Terms_n_Conditions = Terms_n_Conditions;				
				priyadarshini.per_minute_rate = per_minute_rate;
				priyadarshini.distance = distance;
				priyadarshini.duration = duration;
				CostOfDayOrNight = Day_Cost;
				CostPerKMOfDayOrNight = Day_perKM;
				WaitingChargesForDayOrNight = Waiting_Charges_Day;
				priyadarshini.Fleet = Fleet;
			} else  { 
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
				priyadarshini.contact ='tel:'+ Contact;
				priyadarshini.First_x_KM = First_x_KM;
				priyadarshini.app_link = app_link;
				priyadarshini.Terms_n_Conditions = Terms_n_Conditions;
				priyadarshini.per_minute_rate = per_minute_rate;
				priyadarshini.distance = distance;
				priyadarshini.duration = duration;
				CostOfDayOrNight = Night_Cost;
				CostPerKMOfDayOrNight = Night_perKM;
				WaitingChargesForDayOrNight = Waiting_Charges_Night;
				priyadarshini.Fleet = Fleet;
			}
			priyadarshini.CostOfDayOrNight = CostOfDayOrNight;
			priyadarshini.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
			priyadarshini.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
			
			return priyadarshini;
	}   
	return {
		getPriyadarshiniFare : calculateFaresForPriyadarshini
	
	}

})()
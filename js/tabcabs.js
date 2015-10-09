var tabcabs = (function(){
function calculateFareForTabCab(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet) {
    	var tabCabCost;   
        var tabCab = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
        tabCab.type = "TAB Cab";
        if(timeOfPickup === "day") {
            if(distance <= First_x_KM) {
                tabCabCost = Day_Cost;
            } else {
                tabCabCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost);
                //tabCabCost = tabCabCost.toFixed(2);
            }
            tabCab.logo = logo;
            tabCab.contact ='tel:'+ Contact;
            tabCab.cost = tabCabCost;  
			tabCab.First_x_KM = First_x_KM;	
			tabCab.app_link = app_link;
			tabCab.Terms_n_Conditions = Terms_n_Conditions;	
			tabCab.per_minute_rate = per_minute_rate;
			tabCab.distance = distance;
			tabCab.duration = duration;
			tabCab.Fleet = Fleet;
			CostOfDayOrNight = Day_Cost;
			CostPerKMOfDayOrNight = Day_perKM;
			WaitingChargesForDayOrNight = Waiting_Charges_Day;
        } else {
			if(distance <= First_x_KM) {
                tabCabCost = Night_Cost;
            } else {
                tabCabCost = (((distance - First_x_KM) * Night_perKM) + Night_Cost);
                //tabCabCost = tabCabCost.toFixed(2);
            }
            tabCab.logo = logo;
            tabCab.contact ='tel:'+ Contact;
            tabCab.cost = tabCabCost; 
			tabCab.First_x_KM = First_x_KM;	
			tabCab.app_link = app_link;
			tabCab.Terms_n_Conditions = Terms_n_Conditions;	
			tabCab.per_minute_rate = per_minute_rate;
			tabCab.distance = distance;
			tabCab.duration = duration;			
			tabCab.Fleet = Fleet;
			CostOfDayOrNight = Night_Cost;
			CostPerKMOfDayOrNight = Night_perKM;
			WaitingChargesForDayOrNight = Waiting_Charges_Night;
        }
		tabCab.CostOfDayOrNight = CostOfDayOrNight;
		tabCab.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		tabCab.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
        return tabCab;
    }
	function calculateFareForTabCabGold(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet) {
    	var tabCabGoldCost;   
        var tabCabGold = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
        tabCabGold.type = "TAB Cab Gold";
        if(timeOfPickup === "day") {
            if(distance <= First_x_KM) {
                tabCabGoldCost = Day_Cost;
            } else {
                tabCabGoldCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost);
                //tabCabGoldCost = tabCabGoldCost.toFixed(2);
            }
            tabCabGold.logo = logo;
            tabCabGold.contact ='tel:'+ Contact;
            tabCabGold.cost = tabCabGoldCost;
			tabCabGold.First_x_KM = First_x_KM;
			tabCabGold.app_link = app_link;
			tabCabGold.Terms_n_Conditions = Terms_n_Conditions;		
			tabCabGold.per_minute_rate = per_minute_rate;
			tabCabGold.distance = distance;
			tabCabGold.duration = duration;
			tabCabGold.Fleet = Fleet;
			CostOfDayOrNight = Day_Cost;
			CostPerKMOfDayOrNight = Day_perKM;
			WaitingChargesForDayOrNight = Waiting_Charges_Day;
        } else {
			if(distance <= First_x_KM) {
                tabCabGoldCost = Night_Cost;
            } else {
                tabCabGoldCost = (((distance - First_x_KM) * Night_perKM) + Night_Cost);
                //tabCabGoldCost = tabCabGoldCost.toFixed(2);
            }
            tabCabGold.logo = logo;
            tabCabGold.contact ='tel:'+ Contact;
            tabCabGold.cost = tabCabGoldCost; 
			tabCabGold.First_x_KM = First_x_KM;
			tabCabGold.app_link = app_link;
			tabCabGold.Terms_n_Conditions = Terms_n_Conditions;	
			tabCabGold.per_minute_rate = per_minute_rate;
			tabCabGold.distance = distance;
			tabCabGold.duration = duration;
			tabCabGold.Fleet = Fleet;
			CostOfDayOrNight = Night_Cost;
			CostPerKMOfDayOrNight = Night_perKM;
			WaitingChargesForDayOrNight = Waiting_Charges_Night;
        }
		tabCabGold.CostOfDayOrNight = CostOfDayOrNight;
		tabCabGold.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		tabCabGold.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
        return tabCabGold;
    }
	return {
		getTabCabFare   : calculateFareForTabCab,
		getTabCabGoldFare   : calculateFareForTabCabGold
	
	}

})()
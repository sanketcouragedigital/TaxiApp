var merucabs = (function(){
function calculateFareForMeru(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet) {       
        var meruCost;
        var meru = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
        meru.type = "Meru";
        if(timeOfPickup === "day") {
            if(distance <= First_x_KM) {
                meruCost = Day_Cost;
            } else {
                meruCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost);
                //meruCost = meruCost.toFixed(2);
            }
            meru.logo = logo;
            meru.contact ='tel:'+ Contact;
            meru.cost = meruCost;
			meru.First_x_KM = First_x_KM;
			meru.app_link = app_link;
			meru.Terms_n_Conditions = Terms_n_Conditions;
			meru.per_minute_rate = per_minute_rate;
			meru.distance = distance;
			meru.duration = duration;
			meru.Fleet = Fleet;
			CostOfDayOrNight = Day_Cost;
			CostPerKMOfDayOrNight = Day_perKM;
			WaitingChargesForDayOrNight = Waiting_Charges_Day;
        } else {
            if(distance <= First_x_KM) {
                meruCost =Night_Cost;
            } else {
                meruCost = (((distance - First_x_KM) * Night_perKM) + Night_Cost);
               // meruCost = meruCost.toFixed(2);
            }
            meru.logo = logo;
            meru.contact ='tel:'+ Contact;
            meru.cost = meruCost;
			meru.First_x_KM = First_x_KM;
			meru.app_link = app_link;
			meru.Terms_n_Conditions = Terms_n_Conditions;
			meru.per_minute_rate = per_minute_rate;
			meru.distance = distance;
			meru.duration = duration;
			meru.Fleet = Fleet;
			CostOfDayOrNight = Night_Cost;
			CostPerKMOfDayOrNight = Night_perKM;
			WaitingChargesForDayOrNight = Waiting_Charges_Night;
            
        }
		meru.CostOfDayOrNight = CostOfDayOrNight;
		meru.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		meru.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
        return meru;
    }
	return {
		getMeruCabFare  : calculateFareForMeru
	}

})()
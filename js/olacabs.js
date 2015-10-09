var olacabs = (function(){
function calculateFareForOlaSedan(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet) {
        var olaSedanCost;
        var olaSedan = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
		olaSedan.type = "Ola Economy Sedan";
        olaSedanCost = distance * Day_perKM;
		if(distance <= First_x_KM) {
        	olaSedanCost = Day_Cost;
        } else {
        	olaSedanCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
        	//olaSedanCost = olaSedanCost.toFixed(2);
        }
        olaSedan.logo=logo;
        olaSedan.contact= Contact;
        olaSedan.cost = olaSedanCost;
		olaSedan.First_x_KM = First_x_KM;
		olaSedan.per_minute_rate = per_minute_rate;
		olaSedan.app_link = app_link;
		olaSedan.Terms_n_Conditions = Terms_n_Conditions;
		olaSedan.per_minute_rate = per_minute_rate;
		olaSedan.distance = distance;
		olaSedan.duration = duration;
		olaSedan.Fleet = Fleet;
		CostOfDayOrNight = Day_Cost;
		CostPerKMOfDayOrNight = Day_perKM;
		WaitingChargesForDayOrNight = Waiting_Charges_Day;
	
		olaSedan.CostOfDayOrNight = CostOfDayOrNight;
		olaSedan.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		olaSedan.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
        return olaSedan;
    }
    function calculateFareForOlaMini(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet) {
        var olaMiniCost;
        var olaMini = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
		var time = duration;
        olaMini.type = "Ola Mini";
        if(distance <= First_x_KM) {
        	olaMiniCost = Day_Cost;
        } else {
        	olaMiniCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
        	//olaMiniCost = olaMiniCost.toFixed(2);
        }
		olaMini.logo=logo;
		olaMini.contact ='tel:'+ Contact;
        olaMini.cost = olaMiniCost;
		olaMini.First_x_KM = First_x_KM;
		olaMini.per_minute_rate = per_minute_rate;
		olaMini.app_link = app_link;
		olaMini.Terms_n_Conditions = Terms_n_Conditions;
		olaMini.per_minute_rate = per_minute_rate;
		olaMini.distance = distance;
		olaMini.duration = duration;
		olaMini.Fleet = Fleet;
		CostOfDayOrNight = Day_Cost;
		CostPerKMOfDayOrNight = Day_perKM;
		WaitingChargesForDayOrNight = Waiting_Charges_Day;
		
		olaMini.CostOfDayOrNight = CostOfDayOrNight;
		olaMini.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		olaMini.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
        return olaMini;		
    }
    function calculateFareOlaPrime(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet) {
        var olaPrimeCost;
        var olaPrime = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
        olaPrime.type = "Ola Prime";
        if(distance <= First_x_KM) {
        	olaPrimeCost = Day_Cost;
        } else {
        	olaPrimeCost = (((distance - First_x_KM)* Day_perKM) + Day_Cost) +(duration * per_minute_rate);
        	//olaPrimeCost = olaPrimeCost.toFixed(2);
        }
        olaPrime.logo=logo;
        olaPrime.contact ='tel:'+ Contact;
        olaPrime.cost = olaPrimeCost;
		olaPrime.First_x_KM = First_x_KM;
		olaPrime.per_minute_rate = per_minute_rate;
		olaPrime.app_link = app_link;
		olaPrime.Terms_n_Conditions = Terms_n_Conditions;
		olaPrime.per_minute_rate = per_minute_rate;
		olaPrime.distance = distance;
		olaPrime.duration = duration;
		olaPrime.Fleet = Fleet;
		CostOfDayOrNight = Day_Cost;
		CostPerKMOfDayOrNight = Day_perKM;
		WaitingChargesForDayOrNight = Waiting_Charges_Day;
			
		olaPrime.CostOfDayOrNight = CostOfDayOrNight;
		olaPrime.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		olaPrime.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
        return olaPrime;    
    }
	return {
		getOlaSedanFare : calculateFareForOlaSedan,
		getOlaMiniFare  : calculateFareForOlaMini,
		getOlaPrimeFare : calculateFareOlaPrime
	
	}

})()
var taxiforsurecabs = (function(){
	function calculateFaresForTaxiForSureHatchBack(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){	
		var listItemHtml;
		var tfsHatchBackCost;
		var tfsHatchBack = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
		tfsHatchBack.type = "TaxiForSure Hatchback";
		if(distance <= First_x_KM){
			tfsHatchBackCost = Day_Cost;
		} else{
			tfsHatchBackCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) +(duration * per_minute_rate);
			//tfsHatchBackCost = tfsHatchBackCost.toFixed(2);
		}
		tfsHatchBack.logo = logo;
		tfsHatchBack.contact ='tel:'+ Contact;
		tfsHatchBack.cost = tfsHatchBackCost;
		tfsHatchBack.First_x_KM = First_x_KM;
		tfsHatchBack.app_link = app_link;
		tfsHatchBack.Terms_n_Conditions = Terms_n_Conditions;
		tfsHatchBack.per_minute_rate = per_minute_rate;
		tfsHatchBack.distance = distance;
		tfsHatchBack.duration = duration;
		tfsHatchBack.Fleet = Fleet;
		CostOfDayOrNight = Day_Cost;
		CostPerKMOfDayOrNight = Day_perKM;
		WaitingChargesForDayOrNight = Waiting_Charges_Day;

		tfsHatchBack.CostOfDayOrNight = CostOfDayOrNight;
		tfsHatchBack.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		tfsHatchBack.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
		return tfsHatchBack;
	}
	function calculateFaresForTaxiForSureSedan(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){
		var tfsSedanCost;
		var tfsSedan = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
		tfsSedan.type = "TaxiForSure Sedan";
		if(distance <= First_x_KM) {
			tfsSedanCost = Day_Cost;
		}else {
			tfsSedanCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
			//tfsSedanCost = tfsSedanCost.toFixed(2);
		}
		tfsSedan.logo = logo;
		tfsSedanCost.contact ='tel:'+ Contact;
		tfsSedan.cost = tfsSedanCost;
		tfsSedan.First_x_KM = First_x_KM;
		tfsSedan.app_link = app_link;
		tfsSedan.Terms_n_Conditions = Terms_n_Conditions;
		tfsSedan.per_minute_rate = per_minute_rate;
		tfsSedan.distance = distance;
		tfsSedan.duration = duration;
		tfsSedan.Fleet = Fleet;
		CostOfDayOrNight = Day_Cost;
		CostPerKMOfDayOrNight = Day_perKM;
		WaitingChargesForDayOrNight = Waiting_Charges_Day;
			
		tfsSedan.CostOfDayOrNight = CostOfDayOrNight;
		tfsSedan.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		tfsSedan.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
		return tfsSedan;
	}	
	function calculateFaresForTaxiForSureEeco(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){		
		var tfsEecoCost;
		var tfsEeco = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
		tfsEeco.type = "TaxiForSure Eeco";
		if(distance <= First_x_KM) {
			tfsEecoCost = Day_Cost;
		}else {
			tfsEecoCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
			//tfsEecoCost = tfsEecoCost.toFixed(2);
		}
		tfsEeco.logo = logo;
		tfsEecoCost.contact ='tel:'+ Contact;
		tfsEeco.cost = tfsEecoCost;
		tfsEeco.First_x_KM = First_x_KM;
		tfsEeco.app_link = app_link;
		tfsEeco.Terms_n_Conditions = Terms_n_Conditions;
		tfsEeco.per_minute_rate = per_minute_rate;
		tfsEeco.distance = distance;
		tfsEeco.duration = duration;
		tfsEeco.Fleet = Fleet;
		CostOfDayOrNight = Day_Cost;
		CostPerKMOfDayOrNight = Day_perKM;
		WaitingChargesForDayOrNight = Waiting_Charges_Day;
			
		tfsEeco.CostOfDayOrNight = CostOfDayOrNight;
		tfsEeco.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		tfsEeco.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
		return tfsEeco;
	}
	function calculateFaresForTaxiForSureSUV(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){             
		var tfsSuvCost;
		var tfsSuv = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
		tfsSuv.type = "TaxiForSure SUV";
		if(distance <= First_x_KM) {
			tfsSuvCost = Day_Cost;
		} else {
			tfsSuvCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
			//tfsSuvCost = tfsSuvCost.toFixed(2);
		}
		tfsSuv.logo = logo;
		tfsSuv.contact ='tel:'+ Contact;
		tfsSuv.cost = tfsSuvCost;
		tfsSuv.First_x_KM = First_x_KM;
		tfsSuv.app_link = app_link;
		tfsSuv.Terms_n_Conditions = Terms_n_Conditions;
		tfsSuv.per_minute_rate = per_minute_rate;
		tfsSuv.distance = distance;
		tfsSuv.duration = duration;
		tfsSuv.Fleet = Fleet;
		CostOfDayOrNight = Day_Cost;
		CostPerKMOfDayOrNight = Day_perKM;
		WaitingChargesForDayOrNight = Waiting_Charges_Day;
			
		tfsSuv.CostOfDayOrNight = CostOfDayOrNight;
		tfsSuv.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		tfsSuv.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
		return tfsSuv;
	}
		
	function calculateFaresForTaxiForSureNano(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){             
		var tfsNanoCost;
		var tfsNano = {};
		var CostOfDayOrNight;
		var CostPerKMOfDayOrNight;
		var WaitingChargesForDayOrNight;
		tfsNano.type = "TaxiForSure Nano";
		if(distance <= First_x_KM) {
			tfsNanoCost = Day_Cost;
		} else {
			tfsNanoCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
			//tfsNanoCost = tfsNanoCost.toFixed(2);
		}
		tfsNano.logo = logo;
		tfsNano.contact ='tel:'+ Contact;
		tfsNano.cost = tfsNanoCost;
		tfsNano.First_x_KM = First_x_KM;
		tfsNano.app_link = app_link;
		tfsNano.Terms_n_Conditions = Terms_n_Conditions;
		tfsNano.per_minute_rate = per_minute_rate;
		tfsNano.distance = distance;
		tfsNano.duration = duration;
		tfsNano.Fleet = Fleet;
		CostOfDayOrNight = Day_Cost;
		CostPerKMOfDayOrNight = Day_perKM;
		WaitingChargesForDayOrNight = Waiting_Charges_Day;
			
		tfsNano.CostOfDayOrNight = CostOfDayOrNight;
		tfsNano.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		tfsNano.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
		return tfsNano;
	}

	return {
		getTaxiForSureHatchBackFare : calculateFaresForTaxiForSureHatchBack,
		getTaxiForSureSedanFare     : calculateFaresForTaxiForSureSedan,
		getTaxiForSureSUVFare       : calculateFaresForTaxiForSureSUV,
		getTaxiForSureEecoFare : calculateFaresForTaxiForSureEeco,
		getTaxiForSureNanoFare: calculateFaresForTaxiForSureNano
	}

})()
var mumbaiCabs = (function(){
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
	function calculateFaresForTaxiForSureHatchBack(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){
		if(timeOfPickup === "day") {
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
		}else{
			var listItemHtml;
			var tfsHatchBackCost;
			var tfsHatchBack = {};
			tfsHatchBack.type = "TaxiForSure Hatchback";
			if(distance <= First_x_KM) {
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
			CostOfDayOrNight = Night_Cost;
			CostPerKMOfDayOrNight = Night_perKM;
			WaitingChargesForDayOrNight = Waiting_Charges_Night;
		}
		tfsHatchBack.CostOfDayOrNight = CostOfDayOrNight;
		tfsHatchBack.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		tfsHatchBack.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
		return tfsHatchBack;
	}
	function calculateFaresForTaxiForSureSedan(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){
		if(timeOfPickup === "day"){
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
		}else{
			var tfsSedanCost;
			var tfsSedan = {};
			tfsSedan.type = "TaxiForSure Sedan";
			if(distance <= First_x_KM){
				tfsSedanCost = Day_Cost;
			} else {
				tfsSedanCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) +(duration * per_minute_rate);
				//tfsSedanCost = tfsSedanCost.toFixed(2);
			}
			tfsSedan.logo = logo;
			tfsSedan.contact ='tel:'+ Contact;
			tfsSedan.cost = tfsSedanCost;
			tfsSedan.First_x_KM = First_x_KM;
			tfsSedan.app_link = app_link;
			tfsSedan.Terms_n_Conditions = Terms_n_Conditions;
			tfsSedan.per_minute_rate = per_minute_rate;
			tfsSedan.distance = distance;
			tfsSedan.duration = duration;
			tfsSedan.Fleet = Fleet;
			CostOfDayOrNight = Night_Cost;
			CostPerKMOfDayOrNight = Night_perKM;
			WaitingChargesForDayOrNight = Waiting_Charges_Night;
		} 
		tfsSedan.CostOfDayOrNight = CostOfDayOrNight;
		tfsSedan.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		tfsSedan.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
		return tfsSedan;
	}	
	function calculateFaresForTaxiForSureEeco(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){
		if(timeOfPickup === "day"){
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
		}else{
			var tfsEecoCost;
			var tfsEeco = {};
			tfsEeco.type = "TaxiForSure Eeco";
			if(distance <= First_x_KM){
				tfsEecoCost = Day_Cost;
			} else {
				tfsEecoCost = (((distance - First_x_KM) * Day_perKM) + Day_Cost) + (duration * per_minute_rate);
				//tfsEecoCost = tfsEecoCost.toFixed(2);
			}
			tfsEeco.logo = logo;
			tfsEeco.contact ='tel:'+ Contact;
			tfsEeco.cost = tfsEecoCost;
			tfsEeco.First_x_KM = First_x_KM;
			tfsEeco.app_link = app_link;
			tfsEeco.Terms_n_Conditions = Terms_n_Conditions;
			tfsEeco.per_minute_rate = per_minute_rate;
			tfsEeco.distance = distance;
			tfsEeco.duration = duration;
			tfsEeco.Fleet = Fleet;
			CostOfDayOrNight = Night_Cost;
			CostPerKMOfDayOrNight = Night_perKM;
			WaitingChargesForDayOrNight = Waiting_Charges_Night;
		}
		tfsEeco.CostOfDayOrNight = CostOfDayOrNight;
		tfsEeco.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		tfsEeco.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
		return tfsEeco;
	}
	function calculateFaresForTaxiForSureSUV(distance, duration, timeOfPickup, Day_Cost, Day_perKM, Night_Cost, Night_perKM,Contact,logo,First_x_KM, per_minute_rate, Waiting_Charges_Day, Waiting_Charges_Night, app_link,Terms_n_Conditions,Fleet){             
		if(timeOfPickup === "day"){
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
		}else{
			var tfsSuvCost;
			tfsSuv = {};
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
			CostOfDayOrNight = Night_Cost;
			CostPerKMOfDayOrNight = Night_perKM;
			WaitingChargesForDayOrNight = Waiting_Charges_Night;
		}
		tfsSuv.CostOfDayOrNight = CostOfDayOrNight;
		tfsSuv.CostPerKMOfDayOrNight = CostPerKMOfDayOrNight;
		tfsSuv.WaitingChargesForDayOrNight = WaitingChargesForDayOrNight;
		return tfsSuv;
	}
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
	function calculateFaresForUberX(distance, duration ) {
			var start_latitude = sessionStorage.getItem("start_latitude");
			var start_longitude = sessionStorage.getItem("start_longitude");
			var end_latitude = sessionStorage.getItem("end_latitude");
			var end_longitude = sessionStorage.getItem("end_longitude");
			var uberX = {};			
			var uberXRequest = $.ajax({
				url : "https://api.uber.com/v1/estimates/price?start_latitude="+start_latitude+"&start_longitude="+start_longitude+"&end_latitude="+end_latitude+"&end_longitude="+end_longitude+"&server_token=tGQhjuUgoJyx-TL3IczOGZhH7EIXgLrwbii7FZgs",
				method: "GET",
				async: false
			});
			uberXRequest.done(function(response){
				uberX.type = "Uber X";
					var uberMinCost;
					var uberMaxCost;
					$.each(response.prices,function (index,loadUberPrices){
						if(loadUberPrices.product_id=="a2b80c84-8d64-4c20-b731-6bf07d32cc9a") {
							uberMinCost = loadUberPrices.low_estimate;
							uberMaxCost = loadUberPrices.high_estimate;
						}
					});
					//uberX.logo='<img src="images/uber.png"></img>';
					uberX.cost = uberMinCost;
					uberX.maxcost = uberMaxCost;
					uberX.contact = 'https://play.google.com/store/apps/details?id=com.ubercab';	
					uberX.distance = distance;
					uberX.duration = duration;
					uberX.Terms_n_Conditions = "Uber is not a transportation provider. No need to tip. Applicable tolls, airport charges and surcharges may be added to your fare. Commercial vehicles might attract additional state government taxes, which would be over & above the toll. Cleaning or Repair Fee might be applicable in case of damage to the vehicle. At times of intense demand, our rates change over time to keep vehicles available.";
			});
			uberXRequest.fail(function() {
				//alert("Failed");	
			});
			return uberX;	
	}    
	function calculateFaresForUberBlack(distance, duration ){
			var start_latitude = sessionStorage.getItem("start_latitude");
			var start_longitude = sessionStorage.getItem("start_longitude");
			var end_latitude = sessionStorage.getItem("end_latitude");
			var end_longitude = sessionStorage.getItem("end_longitude");
			var uberBlack = {};
			
			var uberBlackRequest = $.ajax({
				url : "https://api.uber.com/v1/estimates/price?start_latitude="+start_latitude+"&start_longitude="+start_longitude+"&end_latitude="+end_latitude+"&end_longitude="+end_longitude+"&server_token=tGQhjuUgoJyx-TL3IczOGZhH7EIXgLrwbii7FZgs",
				method: "GET",
				async: false
			});

			uberBlackRequest.done(function(response){
				uberBlack.type = "Uber Black";
					var uberMinCost;
					var uberMaxCost;
					$.each(response.prices,function (index,loadUberPrices){
						if(loadUberPrices.product_id=="65849e62-1044-4b64-ac22-7451023f7eaf") {
							uberMinCost = loadUberPrices.low_estimate;
							uberMaxCost = loadUberPrices.high_estimate;
						}
					});
					//uberBlack.logo='<img src="images/uber.png"></img>';
					uberBlack.cost = uberMinCost;
					uberBlack.maxcost = uberMaxCost;
					uberBlack.contact = 'https://play.google.com/store/apps/details?id=com.ubercab';
					uberBlack.distance = distance;
					uberBlack.duration = duration;
					uberBlack.Terms_n_Conditions = "Uber is not a transportation provider. No need to tip. Applicable tolls, airport charges and surcharges may be added to your fare. Commercial vehicles might attract additional state government taxes, which would be over & above the toll. Cleaning or Repair Fee might be applicable in case of damage to the vehicle. At times of intense demand, our rates change over time to keep vehicles available. ";
					
			});

			uberBlackRequest.fail(function() {
				//alert("Failed");	
			});
			return uberBlack;
	} 
	//declare public variables and methods
	return {

		getEasyCabsFare : calculateFareForEasyCabs,
		getOlaSedanFare : calculateFareForOlaSedan,
		getOlaMiniFare  : calculateFareForOlaMini,
		getOlaPrimeFare : calculateFareOlaPrime,
		getTabCabFare   : calculateFareForTabCab,
		getTabCabGoldFare   : calculateFareForTabCabGold,
		getMeruCabFare  : calculateFareForMeru,
		getTaxiForSureHatchBackFare : calculateFaresForTaxiForSureHatchBack,
		getTaxiForSureSedanFare     : calculateFaresForTaxiForSureSedan,
		getTaxiForSureSUVFare       : calculateFaresForTaxiForSureSUV,
		getTaxiForSureEecoFare : calculateFaresForTaxiForSureEeco,
		getBookMyCabACFare          : calculateFaresForBookMyCabAC,
		getBookMyCabNonACFare       : calculateFaresForBookMyCabNonAC,
		getPriyadarshiniFare : calculateFaresForPriyadarshini,
		getcelcabsComfort    : calculateFarecelcabsComfort,
		getcelcabsEconomy    : calculateFarecelcabsEconomy,		
		getUberXFare : calculateFaresForUberX,
		getUberBlackFare : calculateFaresForUberBlack
				
	}

})()
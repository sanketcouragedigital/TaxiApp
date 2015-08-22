var mumbaiCabs = (function(){
	
	//declare private variables and methods
	
	function calculateFareForEasyCabs(distance, timeOfPickup) {
		if(timeOfPickup === "day") {

            var easyCabCost;
            var easyCab = {};
            easyCab.type = "Easy Cabs";

            if(distance <= 1.0) {
                	easyCabCost = 27;
                } else {
                	easyCabCost = 27 + (distance - 1.0)*20.00;
                	easyCabCost = easyCabCost.toFixed(2);
                }
                easyCab.logo='<img src="images/easycabs_logo.png"></img>';
                easyCab.cost = easyCabCost;        
                easyCab.contact = 'tel:02243434343';
        } else { //It is a night time pick up. 12am - 5am

            var easyCabCost;
            var easyCab = {};
            easyCab.type = "Easy Cabs";

            if(distance <= 1.0) {
                	easyCabCost = 33.75;
            } else {
                	easyCabCost = 33.75 + (distance - 1.0)*25.00;
                	easyCabCost = easyCabCost.toFixed(2);
            }
            easyCab.logo='<img src="images/easycabs_logo.png"></img>';
            easyCab.cost = easyCabCost;        
            easyCab.contact = 'tel:02243434343';    
                        
        }
        return easyCab;
                     
	}

	function calculateFareForOlaSedan(distance) {
        //For OLA Sedan:
        var olaSedanCost;
        var olaSedan = {};
        olaSedanCost = distance * 21;
        if(olaSedanCost <= 150) {
        	olaSedanCost = 150;
        } else {
            //olaSedanCost = 150 + (distance - 7.14)*21;
            olaSedanCost = olaSedanCost.toFixed(2);
        }
        olaSedan.logo='<img src="images/ola.jpg"></img>';
        olaSedan.type = "Sedan";
        olaSedan.contact='tel:02233553355';
        olaSedan.cost = olaSedanCost;
        return olaSedan;
    }

    function calculateFareForOlaMini(distance) {
    	//For OLA Mini
        var olaMiniCost;
        var olaMini = {};
        olaMini.logo='<img src="images/ola.jpg"></img>';
        olaMini.type = "Mini";
        olaMini.contact = 'tel:02233553355';
        if(distance <= 4) {
        	olaMiniCost = 100;
        } else {
        	olaMiniCost = 100 + (distance - 4)*15;
        	olaMiniCost = olaMiniCost.toFixed(2);
        }
        olaMini.cost = olaMiniCost;
        return olaMini;
    }
            
    
    function calculateFareOlaPrime(distance) {
    	//For OLA Prime
        var olaPrimeCost;
        var olaPrime = {};

        olaPrime.type = "Prime";
        if(distance <= 5) {
        	olaPrimeCost = 200;
        } else {
        	olaPrimeCost = 200 + (distance - 5)*17;
        	olaPrimeCost = olaPrimeCost.toFixed(2);
        }
        olaPrime.logo='<img src="images/ola.jpg"></img>';
        olaPrime.contact = 'tel:02233553355';
        olaPrime.cost = olaPrimeCost;
        return olaPrime;    
    }

    function calculateFareForTabCab(distance, timeOfPickup) {
    	var tabCabCost;
        
        var tabCab = {};
        tabCab.type = "TAB Cab";

        if(timeOfPickup === "day") {
            if(distance <= 1) {
                tabCabCost = 27;
            } else {
                tabCabCost = 27 + (distance - 1)*20;
                tabCabCost = tabCabCost.toFixed(2);
            }
            tabCab.logo = '<img src="images/tabcab_logo.jpg"></img>';
            tabCab.contact = 'tel:02242731000';
            tabCab.cost = tabCabCost;
            

        } else {
            if(distance <= 1) {
                tabCabCost = 33.75;
            } else {
                tabCabCost = 33.75 + (distance - 1)*25;
                tabCabCost = tabCabCost.toFixed(2);
            }
            tabCab.logo = '<img src="images/tabcab_logo.jpg"></img>';
            tabCab.contact = 'tel:02242731000';
            tabCab.cost = tabCabCost;
            
        }
        return tabCab;
    }

    function calculateFareForMeru(distance,timeOfPickup) {
            
        var meruCost;
        var meru = {};
        meru.type = "Meru";
        if(timeOfPickup === "day") {
            if(distance <= 1) {
                meruCost = 27;
            } else {
                meruCost = 27 + (distance - 1)*20;
                meruCost = meruCost.toFixed(2);
            }
            meru.logo = '<img src="images/meeru_logo.png"></img>';
            meru.contact = 'tel:02242731000';
            meru.cost = meruCost;
        } else {
            if(distance <= 1) {
                meruCost = 33.75;
            } else {
                meruCost = 33.75 + (distance - 1)*25;
                meruCost = meruCost.toFixed(2);
            }
            meru.logo = '<img src="images/meeru_logo.png"></img>';
            meru.contact = 'tel:02242731000';
            meru.cost = meruCost;
            
        }
        return meru;

    }
	function calculateFaresForTaxiForSureHatchBack(distance, duration, timeOfPickup)
	{
		if(timeOfPickup === "day") 
		{
			var listItemHtml;
			var tfsHatchBackCost;
			var tfsHatchBack = {};
			tfsHatchBack.type = "Hatchback";
			if(distance <= 6)
			{
				tfsHatchBackCost = 150;
			} 
			else
			{
				tfsHatchBackCost = 150+ (distance - 6)*15;
				tfsHatchBackCost = tfsHatchBackCost.toFixed(2);
			}
			tfsHatchBack.logo = '<img src="images/taxiforsure_logo.png"></img>';
			tfsHatchBack.contact = 'tel:02260601010';
			tfsHatchBack.cost = tfsHatchBackCost;
		}
		else//Night time pick up between 12am - 5am
		{
							var listItemHtml;
							var tfsHatchBackCost;
							var tfsHatchBack = {};

							tfsHatchBack.type = " Hatchback";

							if(distance <= 6) {
								tfsHatchBackCost = 185;
							} else{
								tfsHatchBackCost = 185+ (distance - 6)*18;
								tfsHatchBackCost = tfsHatchBackCost.toFixed(2);
							}
							tfsHatchBack.logo = '<img src="images/taxiforsure_logo.png"></img>';
							tfsHatchBack.contact = 'tel:02260601010';
							tfsHatchBack.cost = tfsHatchBackCost;
		}
					return tfsHatchBack;
	}
	function calculateFaresForTaxiForSureSedan(distance, duration, timeOfPickup)
	{
		if(timeOfPickup === "day")
		{
			var tfsSedanCost;
			var tfsSedan = {};

			tfsSedan.type = "Sedan";
			if(distance <= 6) 
			{
				tfsSedanCost = 150;
			}
			else 
			{
				tfsSedanCost = 150 + (distance - 6)*18;
				tfsSedanCost = tfsSedanCost.toFixed(2);
			}
			tfsSedan.logo = '<img src="images/taxiforsure_logo.png"></img>';
			tfsSedanCost.contact = 'tel:02260601010';
			tfsSedan.cost = tfsSedanCost;
		}
		else//Night time pick up between 12am - 5am
		{
			var tfsSedanCost;
			var tfsSedan = {};
			tfsSedan.type = "Sedan";

			if(distance <= 6)
			{
				tfsSedanCost = 185;
			} 
			else 
			{
				tfsSedanCost = 185 + (distance - 6)*22;
				tfsSedanCost = tfsSedanCost.toFixed(2);
			}
			 tfsSedan.logo = '<img src="images/taxiforsure_logo.png"></img>';
			 tfsSedan.contact = 'tel:02260601010';
			 tfsSedan.cost = tfsSedanCost;
		} 
		return tfsSedan;
	}		
	function calculateFaresForTaxiForSureSUV(distance, duration, timeOfPickup)
	{             
		if(timeOfPickup === "day")
		{
			var tfsSuvCost;
			var tfsSuv = {};

			tfsSuv.type = "SUV";

			if(distance <= 6) {
			tfsSuvCost = 200;
			} else {
			 tfsSuvCost = 200 + (distance - 6)*21;
			 }
			 tfsSuv.logo = '<img src="images/taxiforsure_logo.png"></img>';
			 tfsSuv.contact = 'tel:02260601010';
			  tfsSuv.cost = tfsSuvCost;
			}
		else//Night time pick up between 12am - 5am
		{
			var tfsSuvCost;
			tfsSuv = {};
			tfsSuv.type = "SUV";

			if(distance <= 6) 
			{
				tfsSuvCost = 250;
			} 
			else 
			{
				tfsSuvCost = 250 + (distance - 6)*26;
				tfsSuvCost = tfsSuvCost.toFixed(2);
			}
			tfsSuv.logo = '<img src="images/taxiforsure_logo.png"></img>';
			tfsSuv.contact = 'tel:02260601010';
			tfsSuv.cost = tfsSuvCost;
		}
			return tfsSuv;
	}
	function calculateFaresForBookMyCabAC(distance, duration, timeOfPickup) 
	{          
		 if(timeOfPickup === "day") 
			{
				var bmcACCost;
				var bmcAC = {};
				bmcAC.type = "A/C Cool Cabs";
				if(distance <= 1.5) 
				{
					bmcACCost = 26;
				} 
				else 
				{
					bmcACCost = 26 + (distance - 1.5)*17.50;
					bmcACCost = bmcACCost.toFixed(2);
				}
				bmcAC.logo='<img src="images/bookmycab_logo.jpg"></img>';
				bmcAC.cost = bmcACCost;
				bmcAC.contact = 'tel:02261234567';
			}
			else//for night
			{
				var bmcACCost;
				var bmcAC = {};
				bmcAC.type = "A/C Cool Cabs"
				if(distance <= 1.5) 
				{
					bmcACCost = 26 + (0.25*23);
				}
				else 
				{
					bmcACCost = (26 + (distance - 1.5)*17.50)*1.25;
					bmcACCost = bmcACCost.toFixed(2);
				}
				bmcAC.logo='<img src="images/bookmycab_logo.jpg"></img>';
				bmcAC.cost = bmcACCost;
				bmcAC.contact = 'tel:02261234567';
			}
			return bmcAC;
	}
	function calculateFaresForBookMyCabNonAC(distance, duration, timeOfPickup) 
	{			 
		if(timeOfPickup === "day") 
			{
				var bmcCost;
				var bmcNonAc = {};
				bmcNonAc.type = "Kali Peeli";
				if(distance <= 1.5) 
				{
					bmcCost = 21;
				}
				else 
				{
					bmcCost = 21 + (distance - 1.5)*14;
					bmcCost = bmcCost.toFixed(2);
				}
				bmcNonAc.logo='<img src="images/bookmycab_logo.jpg"></img>';
				bmcNonAc.contact = 'tel:02261234567';
				bmcNonAc.cost = bmcCost;                        
			} 
			else //It is a night time pick up. 12am - 5am
			{ 
				var bmcCost;
				var bmcNonAc = {};
				bmcNonAc.type = "Kali Peeli";
				if(distance <= 1.5) 
				{
					bmcCost = 21 + (0.25*21);
					bmcCost = bmcCost.toFixed(2);
				}
				else 
				{
					bmcCost = (21 + (distance - 1.5)*14)*1.25;
					bmcCost = bmcCost.toFixed(2);
				}
				bmcNonAc.logo='<img src="images/bookmycab_logo.jpg"></img>';
				bmcNonAc.cost = bmcCost;
				bmcNonAc.contact = 'tel:02261234567';
			}
			return bmcNonAc;
	}       
	//declare public variables and methods
	return {

		getEasyCabsFare : calculateFareForEasyCabs,
		getOlaSedanFare : calculateFareForOlaSedan,
		getOlaMiniFare  : calculateFareForOlaMini,
		getOlaPrimeFare : calculateFareOlaPrime,
		getTabCabFare   : calculateFareForTabCab,
		getMeruCabFare  : calculateFareForMeru,
		getTaxiForSureHatchBackFare : calculateFaresForTaxiForSureHatchBack,
		getTaxiForSureSedanFare     : calculateFaresForTaxiForSureSedan,
		getTaxiForSureSUVFare       : calculateFaresForTaxiForSureSUV,
		getBookMyCabACFare          : calculateFaresForBookMyCabAC,
		getBookMyCabNonACFare       : calculateFaresForBookMyCabNonAC
		
		
	}

})()
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

    function calculateFareForTaxiForSureHatchBack(distance, timeOfPickup) {
    	var tfsHatchBack = {};
    	var tfsHatchBackCost;
    	tfsHatchBack.type = "Hatchback";
    	tfsHatchBack.logo = '<img src="images/taxiforsure_logo.png"></img>';
        tfsHatchBack.contact = 'tel:02260601010';
    	if(timeOfPickup === "day") {
            if(distance <= 6) {
                tfsHatchBackCost = 150;
            } else{
                tfsHatchBackCost = 150+ (distance - 6)*15;
                tfsHatchBackCost = tfsHatchBackCost.toFixed(2);
            }
            tfsHatchBack.cost = tfsHatchBackCost;
            
            //cabCosts.push(tfsHatchBack);
    	} else {
    		if(distance <= 6) {
                tfsHatchBackCost = 185;
            } else{
                tfsHatchBackCost = 185+ (distance - 6)*18;
                tfsHatchBackCost = tfsHatchBackCost.toFixed(2);
            }
            tfsHatchBack.cost = tfsHatchBackCost;
    	}

    	return tfsHatchBack;

    }

    function calculateFareForTaxiForSureSedan(distance, timeOfPickup) {
    	
    }
      
    function calculateFareForTaxiForSuv(distance, timeOfPickup) {
    	
    }        
	

	//declare public variables and methods
	return {

		getEasyCabsFare : calculateFareForEasyCabs,
		getOlaSedanFare : calculateFareForOlaSedan,
		getOlaMiniFare  : calculateFareForOlaMini,
		getOlaPrimeFare : calculateFareOlaPrime,
		getTabCabFare   : calculateFareForTabCab,
		getMeruCabFare  : calculateFareForMeru 
	}

})()
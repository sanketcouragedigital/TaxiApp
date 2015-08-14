$ (function(){
	var carDetailsArray = sessionStorage.getItem("carDetails");
	var carDetailsArrayObjects = $.parseJSON(carDetailsArray);
	
	var userChoice = sessionStorage.getItem("userChoice");
	var selecteddate = sessionStorage.getItem("weekdayOrWeekend");
	var totaltime = sessionStorage.getItem("totalHour");
	var totaltime = sessionStorage.getItem("noOfDays");
	var noOfWeekEnds = sessionStorage.getItem("noOfWeekends");
	var noOfWeekDays = sessionStorage.getItem("noOfWeekdays");
	var expectedKm = sessionStorage.getItem("expectedKm");
	
	$.each(carDetailsArrayObjects, function(index, carDetails){
		//alert(index+" "+ carDetails.carMake +" "+carDetails.serviceProviderName +" "+ carDetails.serviceByHourly+" "+ carDetails.hourlyWeekdayRate +" "+ carDetails.hourlyWeekendRate +" "+ carDetails.dailyWeekdayRate +" "+ carDetails.dailyWeekendRate +" "+ carDetails.extraChargePerKm +" "+ carDetails.deposit );
		
		var carMake = carDetails.carMake;
		var serviceProviderName = carDetails.serviceProviderName;
		var serviceByHourly = carDetails.serviceByHourly;
		var hourlyWeekdayRate = carDetails.hourlyWeekdayRate;
		var hourlyWeekendRate = carDetails.hourlyWeekendRate;
		var dailyWeekdayRate = carDetails.dailyWeekdayRate;
		var dailyWeekendRate = carDetails.dailyWeekendRate;
		var extraChargePerKm = carDetails.extraChargePerKm;
		var deposit = carDetails.deposit;
		
		//now calculation as per car selected 
	var amount;
	var totalAmount;
	var extracharges;
	
	//to calculate Total Amount As per user choice
	if(userChoice == "hour")
	{
		if(serviceByHourly == 1)
		{
		
			if(selecteddate== "Monday" || selecteddate== "Tuesday" || selecteddate== "Wednesday" || selecteddate== "Thursday")
			{
				amount = (hourlyWeekdayRate * totaltime) ;
				totalAmount = amount + extracharges;
			}
			else 
			{
				amount = (hourlyWeekendRate * totaltime );
				totalAmount = amount + extracharges;
			}
			//making list of hourly searched cars.
			var carsList='<li><h2 style="font:18px QuickSand !important; font-weight:bold !important">'+serviceProviderName+'<span class="ui-li-aside" style="right: 0.50em !important; top: 1.7em !important; font:14px QuickSand !important">Rs : '+amount+'</span></h2> <p><strong style="font:16px QuickSand !important">'+carMake+'<span class="ui-li-aside" style="right: 0.50em !important;  top: 3.6em !important; font:14px QuickSand !important">Extra Charges : '+extracharges+'</span></strong></p><p style="font:14px QuickSand !important">Deposit : '+deposit+'<span class="ui-li-aside" style="right: 0.50em !important;  top: 4.7em !important; font:16px QuickSand !important; font-weight: bold !important"> Total Rs : '+totalAmount+'</span></p> </li>';
			$("#listOfCars").append(carsList);
			$("#listOfCars").listview('refresh');
		}
	
	}
	else if(userChoice == "day")
	{
		//to calculate extracharges 
		if(expectedKm !==0)
		{
			if(expectedKm <= noOfDays * 240)
			{
				extracharges=0;
			}
			else
			{
				extracharges = (noOfDays * 240 - expectedKm) * extraChargePerKm *(-1) ;
			}			
		}
		else 
		{
			extracharges=0;
		}
			amount = (dailyWeekdayRate * noOfWeekDays) + (dailyWeekendRate * noOfWeekEnds);
			totalAmount = amount + extracharges;
	}
			var carsList='<li><h2 style="font:18px QuickSand !important; font-weight:bold !important">'+serviceProviderName+'<span class="ui-li-aside" style="right: 0.50em !important; top: 1.7em !important; font:14px QuickSand !important">Rs : '+amount+'</span></h2> <p><strong style="font:16px QuickSand !important">'+carMake+'<span class="ui-li-aside" style="right: 0.50em !important;  top: 3.6em !important; font:14px QuickSand !important">Extra Charges : '+extracharges+'</span></strong></p><p style="font:14px QuickSand !important">Deposit : '+deposit+'<span class="ui-li-aside" style="right: 0.50em !important;  top: 4.7em !important; font:16px QuickSand !important; font-weight: bold !important"> Total Rs : '+totalAmount+'</span></p> </li>';
			$("#listOfCars").append(carsList);
			$("#listOfCars").listview('refresh');
	
	})
	
});


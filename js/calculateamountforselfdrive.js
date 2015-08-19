$ (function()
{
	var carDetailsArray = sessionStorage.getItem("carDetails");
	var carDetailsArrayObjects = $.parseJSON(carDetailsArray);
	
	var userChoice = sessionStorage.getItem("userChoice");
	var expectedKm = sessionStorage.getItem("expectedKm");
	var selecteddate = sessionStorage.getItem("weekdayOrWeekend");
	var totaltime = sessionStorage.getItem("totalHour");
	var noOfDays = sessionStorage.getItem("noOfDays");
	var noOfWeekEnds = sessionStorage.getItem("noOfWeekends");
	var noOfWeekdays = sessionStorage.getItem("noOfWeekdays");
	
	var noOfWeekendsForUDrive = sessionStorage.getItem("noOfWeekendsForUDrive");
	var noOfWeekdaysUDrive = sessionStorage.getItem("noOfWeekdaysUDrive");
	
	$.each(carDetailsArrayObjects, function(index, carDetails)
	{			
		var carMake = carDetails.carMake;
		var serviceProviderName = carDetails.serviceProviderName;
		var serviceByHourly = carDetails.serviceByHourly;
		var hourlyWeekdayRate = carDetails.hourlyWeekdayRate;
		var hourlyWeekendRate = carDetails.hourlyWeekendRate;
		var dailyWeekdayRate = carDetails.dailyWeekdayRate;
		var dailyWeekendRate = carDetails.dailyWeekendRate;
		var weeklyRate = carDetails.weeklyRate;
		var monthlyRate = carDetails.monthlyRate;
		var extraChargePerKm = carDetails.extraChargePerKm;
		var deposit = carDetails.deposit;
		var city = carDetails.city;
		
//now calculation as per car selected 
		var amount;
		var totalAmount;
		var extracharges;
//to calculate Total Amount As per user choice
	// calculation for daily service
		if(userChoice == "hour")
		{
			if(expectedKm !==0)
			{
				if(expectedKm <= totaltime * 10)
				{
					extracharges=0;
				}
				else
				{
					extracharges = (totaltime * 10 - expectedKm) * extraChargePerKm *(-1) ;
				}			
			}
			else 
			{
				extracharges=0;
			}
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
	// calculation for daily service
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
				extracharges = 0;
			}
	//seviceType= Girikand..
			if(serviceProviderName == "Girikand")
			{
				if(noOfDays >= 26)
				{
					amount = monthlyRate * noOfDays;
					totalAmount = amount+  extracharges;
				}
			
				if(noOfDays >= 7 && noOfDays <= 25)
				{
					amount = weeklyRate * noOfDays;
					totalAmount = amount ;
				}
				if(noOfDays <= 7)
				{
					amount =  dailyWeekdayRate * noOfDays;
					totalAmount = amount;
				}
			}		
	//seviceType= Udrive..
			if(serviceProviderName == "U Drive")
			{
				if(noOfDays >= 30)
				{
					amount =  monthlyRate * noOfDays;
					totalAmount = amount;				
				}
				else if(noOfDays >= 7 && noOfDays <=29)
				{
					amount = weeklyRate * noOfDays;
					totalAmount = amount;				
				}
				else
				{
					amount = (dailyWeekdayRate *noOfWeekdaysUDrive) + (dailyWeekendRate *noOfWeekendsForUDrive);
					totalAmount = amount;				
				}
			}

	//seviceType= Carz On Rent..
			if(serviceProviderName == "Carz On Rent")
			{
				if(noOfDays == 90 )
				{
					amount = monthlyRate * 66;
					totalAmount = amount+  extracharges;
				}
				else if(noOfDays == 60)
				{
					amount = monthlyRate * 44;
					totalAmount = amount+  extracharges;
				}
				else if(noOfDays == 30 )
				{
					amount = monthlyRate * 22;
					totalAmount = amount+  extracharges;
				}
				else if(noOfDays == 7)
				{
					amount = (dailyWeekdayRate * 2) + (dailyWeekendRate * 4);
					totalAmount = amount+  extracharges;
				}
				else
				{
					amount = (dailyWeekdayRate * noOfWeekDays) + (dailyWeekendRate * noOfWeekEnds);
					totalAmount = amount+  extracharges;
				}
			}
		//seviceType= Zoom car..
			if(serviceProviderName =="Zoom Car" )
			{
				if(noOfDays ==30)
				{
					amount = monthlyRate + extracharges;
					totalAmount = amount+  extracharges;
				} 
				else if(noOfDays == 7)
				{
					amount = weeklyRate + extracharges ;
					totalAmount = amount +  extracharges;
				}
				//calculate how many months & week from nofodays
				/*else 
				{
					amount = (dailyWeekdayRate * noOfWeekDays) + (dailyWeekendRate * noOfWeekEnds);
					totalAmount = amount+  extracharges;
				}*/
			}
				var carsList='<li><h2 style="font:18px QuickSand !important; font-weight:bold !important">'+serviceProviderName+'<span class="ui-li-aside" style="right: 0.50em !important; top: 1.7em !important; font:14px QuickSand !important">Rs : '+amount+'</span></h2> <p><strong style="font:16px QuickSand !important">'+carMake+'<span class="ui-li-aside" style="right: 0.50em !important;  top: 3.6em !important; font:14px QuickSand !important">Extra Charges : '+extracharges+'</span></strong></p><p style="font:14px QuickSand !important">Deposit : '+deposit+'<span class="ui-li-aside" style="right: 0.50em !important;  top: 4.7em !important; font:16px QuickSand !important; font-weight: bold !important"> Total Rs : '+totalAmount+'</span></p> </li>';
			$("#listOfCars").append(carsList);
		}
			
			$("#listOfCars").listview('refresh');
	
	})
	
});


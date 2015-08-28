$ (function()
{
	var carDetailsArray = sessionStorage.getItem("carDetails");
	var carDetailsArrayObjects = $.parseJSON(carDetailsArray);
	
	var userChoice = sessionStorage.getItem("userChoice");
	var expectedKm = sessionStorage.getItem("expectedKm");
	var selecteddate = sessionStorage.getItem("weekdayOrWeekend");
	var totaltime = sessionStorage.getItem("totalHour");
	var noOfDays = sessionStorage.getItem("noOfDays");
	var noOfWeekEndsforall = sessionStorage.getItem("noOfWeekends");
	var noOfWeekdaysforall = sessionStorage.getItem("noOfWeekdays");
	
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
		sessionStorage.setItem("deposit",deposit);
		var city = carDetails.city;
		
//now calculation as per car selected 
		var amount;
		var totalAmount;
		var extracharges = "";
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
				var carsList='<li class="list"><a href="selfdrivelistdetails.html" class="listAnchor" data-ajax="false"><h2 id="serviceProviderName">'+serviceProviderName+'<span class="ui-li-aside" id="totalAmount" style="right: 0.50em !important;">Total Rs : '+totalAmount+'</span></h2> <p><strong id="carMake">'+carMake+'</strong></p> <p>More Info...</p> <p id="deposit">'+deposit+'</p> <p id="extracharges">'+extracharges+'</p> <p id="totaltime">'+totaltime+'</p></a></li>';
				$("#listOfCars").append(carsList);
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
					amount = (dailyWeekdayRate * noOfWeekdaysforall) + (dailyWeekendRate * noOfWeekEndsforall);
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
				else 
				{
					amount = (dailyWeekdayRate * noOfWeekdaysforall) + (dailyWeekendRate * noOfWeekEndsforall);
					totalAmount = amount+  extracharges;
				}
			}
				


				var carsList='<li class="list"><a href="selfdrivelistdetails.html" class="listAnchor" data-ajax="false"><h2 id="serviceProviderName">'+serviceProviderName+'<span class="ui-li-aside" id="totalAmount" style="right: 0.50em !important;">Total Rs : '+totalAmount+'</span></h2> <p><strong id="carMake">'+carMake+'</strong></p> <p>More Info...</p> <p id="deposit">'+deposit+'</p> <p id="extracharges">'+extracharges+'</p> <p id="noOfDays">'+noOfDays+'</p></a></li>';
				$("#listOfCars").append(carsList);
		}
				
	})
				$("#listOfCars").listview('refresh');	
				$("a.listAnchor").css({
					background : "#f6f6f6"
				});
				$("a").css({
					color : "black"
				});
				
				$("p#deposit, p#extracharges, p#totaltime, p#noOfDays").css("display","none");
				$("li.list").on('click',function(){
					var carListItem = $(this);
					var serviceProviderName=carListItem.find("h2#serviceProviderName").html();
					var value = serviceProviderName.split("<");
					var selectedListServiceProviderName=value[0];
					var selectedListCarMake=carListItem.find("strong#carMake").html();
					var totalAmount=carListItem.find("span#totalAmount").html();
					var value = totalAmount.split(":");
					var selectedListTotalAmount=value[1];
					var selectedListDeposit=carListItem.find("p#deposit").html();
					var selectedListExtracharges=carListItem.find("p#extracharges").html();
					
					sessionStorage.setItem("selectedListServiceProviderName",selectedListServiceProviderName);
					sessionStorage.setItem("selectedListCarMake",selectedListCarMake);
					sessionStorage.setItem("selectedListTotalAmount",selectedListTotalAmount);
					sessionStorage.setItem("selectedListDeposit",selectedListDeposit);
					sessionStorage.setItem("selectedListExtracharges",selectedListExtracharges);
					if(userChoice == "day") {
						var selectedListNoOfDays=carListItem.find("p#noOfDays").html();
						sessionStorage.setItem("selectedListNoOfDays",selectedListNoOfDays);
					}
					else {
						var selectedListTotalTime=carListItem.find("p#totaltime").html();
						sessionStorage.setItem("selectedListTotalTime",selectedListTotalTime);
					}
				});
				
});


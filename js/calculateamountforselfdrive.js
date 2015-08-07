$ (function(){

	var selectedCar = sessionStorage.getItem("selectCar");
	var hour = sessionStorage.getItem("hour");
	var pickupTimeHours = sessionStorage.getItem("pickupTimeHr");
	var pickupTimeMins = sessionStorage.getItem("pickupTimeMinute");
	var dropoffTimeHours = sessionStorage.getItem("dropoffTimeHr");
	var dropoffTimeMins = sessionStorage.getItem("dropoffTimeMinute");
	var day = sessionStorage.getItem("day");
	var pickupDay = sessionStorage.getItem("pickupDate");
	var dropoffDay = sessionStorage.getItem("dropoffDate");
	var week = sessionStorage.getItem("week");
	var month = sessionStorage.getItem("month");
	var expectedKm = sessionStorage.getItem("kms");
	
	// calculate todays day
		
		var todaysDate = new Date();
		var days = new Array(4);		
		days[1] = "Monday";
		days[2] = "Tuesday";
		days[3] = "Wednesday";
		days[4] = "Thursday";
		days[5] = "Friday";
		days[6] = "Saturday";
		days[0]=  "Sunday";

		var todaysDay = days[todaysDate.getDay()];
		
		if( todaysDay=="Monday"||  todaysDay=="Tuesday" || todaysDay=="Wednesday"  ||todaysDay=="Thursday"){
			var weekday=todaysDay;
		}
		else( todaysDay=="Monday"||  todaysDay=="Tuesday" || todaysDay=="Wednesday")
		{
			var weekend=todaysDay;
		}
		
    
});
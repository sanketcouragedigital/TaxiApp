$ (function(){

	var carDetailsArray = sessionStorage.getItem("carDetails");
		
    //seprate the sessionStorage like carMake  Hrlyweekde hrlyweeknd dailyweekde dailyweekend
	
	//now calculation as per car selected 
	var totalAmount;
	var extrachages= totaltime*10 - expectedkm
					if(totaltime*10 < expectedkm)
					{
						extrachages= (totaltime*10 - expectedkm)*extraRs(column);
					}
					else
					{
						extrachages=0;
					}

	
	if(usercoice=hour)
	{
		if(today==weekday)
		{
			totalAmount= Hrlyweekde(column)*expectedHour+extrachages;
		}
		else if(today==weekend)
		{
			totalAmount= Hrlyweekend(column)*expectedHour+extrachages;
		}
	}
	else if(usercoice=daily)
	{
		if(today==weekday)
		{
			totalAmount= Dailylyweekde(column)*totalDays+extrachages;
		}
		else if(today==weekend)
		{
			totalAmount= daillyweekend(column)*totalDays+extrachages;
		}
	}
	else if(usercoice=weekly)
	{
		totalAmount= Dailylyweekde(column)*totalDays+extrachages;
	}
	else if(usercoice=monthly)
	{
		totalAmount= Dailylyweekde(column)*totalDays+extrachages;
	}
	
});
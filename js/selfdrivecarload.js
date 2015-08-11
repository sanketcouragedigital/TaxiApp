//to check How user want hourly or dayly
function userChoice(choice)
	{
		if(choice == 'hour')
		{
			$("#pickupDropoffTimePicker").show();
			$("#pickupDropoffDatePicker").hide();
			//alert("Will go Hourly");
			var $hourlyPickupDate =  $("#hourlyPickupDate");
			//to find weeekday. or weekend
			$hourlyPickupDate.datepicker({
				onClose: function() {
					var todaysDate = $hourlyPickupDate.datepicker('getDate');
					var days = new Array(6);		
					days[1] = "Monday";
					days[2] = "Tuesday";
					days[3] = "Wednesday";
					days[4] = "Thursday";
					days[5] = "Friday";
					days[6] = "Saturday";
					days[0]=  "Sunday";
					var todaysDay = days[todaysDate.getDay()];
					alert(todaysDay);
				}
			});
			
		}
		else if(choice =='day') 
		{
			$("#pickupDropoffDatePicker").show();
			$("#pickupDropoffTimePicker").hide();
			//alert("Will go Daily");
			//to find No of  days 			
			var $pickupDate =  $( "#pickupDate" );
			var $dropoffDate =  $( "#dropoffDate" );
			$pickupDate.datepicker();
			$dropoffDate.datepicker({
				onClose: function() {
					var fromDate = $pickupDate.datepicker('getDate');
					var toDate = $dropoffDate.datepicker('getDate');
					// date difference in millisec
					var diff = new Date(toDate - fromDate);
					// date difference in days
					var days = diff/1000/60/60/24;				 
					alert(days);
					var totalDays=days;
				}
			});
		}
		else if(choice ==  'week' || choice ==  'month')
		{
			$("#pickupDropoffDatePicker").show();
			$("#pickupDropoffTimePicker").hide();	
			var $pickupDate =  $( "#pickupDate" );
			var $dropoffDate =  $( "#dropoffDate" );
			$pickupDate.datepicker();
			$dropoffDate.datepicker({
				onClose: function() {
					var fromDate = $pickupDate.datepicker('getDate');
					var toDate = $dropoffDate.datepicker('getDate');
					// date difference in millisec
					var diff = new Date(toDate - fromDate);
					// date difference in days
					var days = diff/1000/60/60/24;				 
					alert(days);
					var totalDays=days;
				}
			});
		}
	}	

$(function (){
	$("#pickupDropoffDatePicker").hide();
	$("#pickupDropoffTimePicker").hide();
	
//-----------to laod car car in dropdown list as per type of car-------------------------------------------------------------------------
	
	$("#typeOfCar").on("change",function(){
		var selectedTypeOfCar=$('option:selected',this).index();		
		var select = document.getElementById("selectCar");
		var length = select.options.length;
		for(i=length-1;i>=0;i--){
			select.remove(i);
		}		
	$.get("http://localhost/ZiftAPI/api/ziftapi.php?selectedTypeOfCar="+selectedTypeOfCar+"&method=loadCars&format=json")
		.done(function(response){		
			var select = document.getElementById("selectCar");	
			$.each(response.loadCarsList,function(index,loadCar){
				var loadCarObj = loadCar;
				var carMake = loadCarObj.carMake;
				var option = document.createElement('option');
				option.text= option.value=carMake;
				select.add(option);				
			});
 		})
		.fail(function (){   
             $("#dlg-loadcar-error").popup("open"); 
         });
	});
// when user click on Calculate button	
	$("#calculateAmount").click(function (){
		
		var carMake = document.getElementById("selectCar").value;
			
		var data={
			"carMake" : carMake,
			"method"  : "selfdrivecar",
			"format" : "json"
		};
		$.post("http://localhost/ZiftAPI/api/ziftapi.php",data)
			.done(function (response){
				carDetailsArray=response.responseSelfdrivecar
				sessionStorage.setItem("carDetails",carDetailsArray);
				window.location.href="selfdriveresult.html"
			})
			.fail(function(){
				$("#dlg-laod-error").popup("open");
			})
	});
	
	
});
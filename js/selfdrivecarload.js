//to check How user want hourly or dayly
function userChoice(choice)
	{
		if(choice == 'hour')
		{
			$("#pickupDropoffTimePicker").show();
			$("#pickupDropoffDatePicker").hide();
			alert("Will go Hourly");
			$(function(){
				 var timepicker = $('input.timepicker').timepicker({
					timeFormat: 'HH:mm',
					interval: 30,
					scrollbar:true
				});
			});
				var timeStart = $("#timepickerfrom").getTime();
				var timeEnd = $("#timepickerto").getTime();
				var hourDiff = timeEnd - timeStart; //in ms
				var secDiff = hourDiff / 1000; //in s
				var minDiff = hourDiff / 60 / 1000; //in minutes
				var hDiff = hourDiff / 3600 / 1000; //in hours
				
				var humanReadable = {};
				humanReadable.hours = Math.floor(hDiff);
				humanReadable.minutes = minDiff - 60 * humanReadable.hours;
				alert(humanReadable.hours+" "+ humanReadable.minutes);
		}
		else if(choice =='day' || choice ==  'week' || choice ==  'month')
		{
			$("#pickupDropoffDatePicker").show();
			$("#pickupDropoffTimePicker").hide();
			alert("Will go Daily");
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
		var data={
			"carMake" : carMake,
			"method"  : "selfdrivecar",
			"format" : "json"
		};
		$.post("http://localhost/ZiftAPI/api/ziftapi.php",data)
			.done(function (response){
				sessionStoarage.setItem("response",response.responseSelfdrivecar)
			})
			.fail(function(){
				$("#dlg-laod-error").popup("open");
			})
	});
});
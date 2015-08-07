$(function (){

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
				//$("#selectCar").append();
			});
 		})
		.fail(function (){   
             $("#dlg-loadcar-error").popup("open"); 
         });
	});
	
// when user click on Calculate button

	
		
	//create session
	$("#calculateAmount").click(function (){
		var carMake=$("#selectCar option:selected").text();
		
		var hour=$("#hour").val();	
		sessionStoarage.setItem("hour",hour);	
		
		var pickupTimeHours=$("#pickupTimeHr option:selected").text();
		sessionStoarage.setItem("pickupTimeHr",pickupTimeHours);	
		
		var pickupTimeMins=$("#pickupTimeMinute option:selected").text();
		sessionStoarage.setItem("pickupTimeMinute",pickupTimeMins);
		
		var dropoffTimeHours=$("#dropoffTimeHr option:selected").text();
		sessionStoarage.setItem("dropoffTimeHr",dropoffTimeHours);
		
		var dropoffTimeMins=$("#dropoffTimeMinute option:selected").text();
		sessionStoarage.setItem("dropoffTimeMinute",dropoffTimeMins);	
		
		var day=$("#day").val();
		sessionStoarage.setItem("day",day);	
		
		var pickupDay=$("#pickupDate").val();
		sessionStoarage.setItem("pickupDate",pickupDay);	
		
		var dropoffDay=$("#dropoffDate").val();
		sessionStoarage.setItem("dropoffDate",dropoffDate);	
		
		var week=$("#week").val();
		sessionStoarage.setItem("week",week);	
		
		var month=$("#month").val();
		sessionStoarage.setItem("month",month);	
		
		var expectedKm=$("#kms").val();
		sessionStoarage.setItem("kms",expectedKm);	
		
		var data={
			"carMake" : carMake,
			"method"  : "selfdrivecar",
			"formate" : "json"
		};
		$.post("http://localhost/ZiftAPI/api/ziftapi.php",data)
			.done(function (){
				
			})
			.fail(function(){
				$("#dlg-laod-error").popup("open");
			})



	});

	
	
	
});
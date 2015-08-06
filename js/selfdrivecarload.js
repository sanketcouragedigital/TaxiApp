$(function (){

	$("#typeOfCar").on("change",function(){
		var selectedTypeOfCar=$('option:selected',this).index();
		
		var select = document.getElementById("selectCar");
		var length = select.options.length;
		for(i=length-1;i>=0;i--){
			select.remove(i);
		}		
	$.get("http://www.ziftapp.com/dev/api/ziftapi.php?selectedTypeOfCar="+selectedTypeOfCar+"&method=loadCars&format=json")
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
});
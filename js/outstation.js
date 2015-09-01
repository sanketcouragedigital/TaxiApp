function userChoice(choice){
	if(choice == 'oneWay'){
		$("#endDateTime").hide();
		$("#btnAddMultipleCities").hide();
		$("#btnRemoveMultipleCities").hide();
	}else if(choice == 'roundTrip'){
		$("#endDateTime").show();
		$("#btnAddMultipleCities").hide();
		$("#btnRemoveMultipleCities").hide();
	}else if(choice == 'multiCity'){
		$("#endDateTime").show();
		$("#btnAddMultipleCities").show();
		$("#btnRemoveMultipleCities").hide();
	}
}
$(function(){
	$("#btnAddMultipleCities").hide();
	$("#btnRemoveMultipleCities").hide();
	$("#endDateTime").hide();
//to add hrs & mins in dropdown
	function selectStartHrs(){
		var select = document.getElementById('startTimeHours');
		for (var i=0; i<23; i++) {
			select.options[select.options.length] = new Option(i+1, i);
		} 
	}
		selectStartHrs();
	function selectStartMins() {
		var select = document.getElementById('startTimeMins');
		for (var i=0; i<60; i=i+5){
			select.options[select.options.length] = new Option(i);
		} 
	}
		selectStartMins();	
	function selectEndHrs() {
		var select = document.getElementById('endTimeHours');
		for (var i=0; i<23; i++) {
			select.options[select.options.length] = new Option(i+1, i);
		} 
	}
		selectEndHrs();
	function selectEndMins() {
		var select = document.getElementById('endTimeMins');
		for (var i=0; i<60; i=i+5) {
			select.options[select.options.length] = new Option(i);
		} 
	}
		selectEndMins();
// to create date picker in textbox		
	var $startDate =  $( "#startDate" );
	var $endDate =  $( "#endDate" );
	$startDate.datepicker();
	$endDate.datepicker();	
	
// to load Cities in dropdown
	$.get("/ZiftAPI/api/ziftapi.php?method=outStationLoadCity&format=json")
		.done(function (response){
			sessionStorage.setItem("response",JSON.stringify(response.loadCityList));
			var select=document.getElementById("selectCity");
			$.each(response.loadCityList,function (index,outStationLoadCity){
				var loadCityObj=outStationLoadCity;
				var city=loadCityObj.city_name;
				var option=document.createElement('option');
				option.text=option.value=city;
				select.add(option);
			});
			var select=document.getElementById("selectCityTo");
			$.each(response.loadCityList,function (index,outStationLoadCity){
				var loadCityObj=outStationLoadCity;
				var city=loadCityObj.city_name;
				var option=document.createElement('option');
				option.text=option.value=city;
				select.add(option);
			});
		})
		.fail(function (){   
            // $("#dlg-laod-error").popup("open"); 
         });
//to add dropdown list 
		$("#btnAddMultipleCities").click(function(){
			$("#btnRemoveMultipleCities").show();
			generateSourceList();
			generateDestinationList();
		});

		function generateSourceList() {
			var responseOfCities = sessionStorage.getItem("response");
			var responseCityobj = $.parseJSON(responseOfCities);
			var generatedSource = $('<select/>');			
			$.each(responseCityobj,function (index,outStationLoadCity){
				$('<option />', {value: outStationLoadCity.city_name, text: outStationLoadCity.city_name}).appendTo(generatedSource);
			});		
			generatedSource.appendTo("#ddlCities");
			$("#ddlCities").find("select").addClass("userSelectedSources");
			return;
		}
		function generateDestinationList() {
			var responseOfCities = sessionStorage.getItem("response");
			var responseCityobj = $.parseJSON(responseOfCities);
			var generatedDestination = $('<select />');
			
			$.each(responseCityobj,function (index,outStationLoadCity){
				$('<option />', {value: outStationLoadCity.city_name, text: outStationLoadCity.city_name}).appendTo(generatedDestination);
			});
			generatedDestination.appendTo("#ddlCities");
			$("#ddlCities").find("select").addClass("userSelectedDestinations");
			return;
		}
//to remove Added dropdown list
		$('#btnRemoveMultipleCities').click(function(){
			$('.userSelectedSources').each( function() {
				$(this).remove();
			});
			$('.userSelectedDestinations').each( function() {
				$(this).remove();
			});
		});
});			
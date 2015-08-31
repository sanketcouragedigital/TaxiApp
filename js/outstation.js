function userChoice(choice){
	if(choice == 'oneWay'){
		$("#endDateTime").hide();
		$("#add_btn").hide();
	}else if(choice == 'roundTrip'){
		$("#endDateTime").show();
		$("#add_btn").hide();
	}else if(choice == 'multiCity'){
		$("#endDateTime").show();
		$("#add_btn").show();
	}
}
$(function(){
	$("#add_btn").hide();
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
		document.getElementById( 'add_btn' ).addEventListener( 'click', function ( event ) {
			event.preventDefault();
			var ctyToCity = document.getElementById( 'ctyToCity' ).cloneNode( true );
			document.getElementById( 'outstationForm' ).appendChild( ctyToCity );
		}, false );
});			
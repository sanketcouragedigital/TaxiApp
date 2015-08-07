//----------------------------------------------------------------------for dropdown list-------------------------------------------------------------------------------------------------------
		  var options = {
    "Compact" : {
        'comp1': '',
        'comp2': '',
        'comp3': '',
        'comp4': ''
    },
        "Sedans" : {
        'Sed1': '',
        'Sed2': '',
        'Sed3': ''
    },
     "High End Sedans" : {
        'HSed1': '',
        'HSed2': '',
        'HSed3': '',
        'HSed4': ''
    },
        "SUV" : {
        'S1': '',
        'S2': '',
        'S3': ''
    }
    
}
function changelist(v){
    var $t = $("#selectCar");
    
    //clear old options
    $t.html('');
    
    //fill up new options
    if(options[v]){
        for(var i in options[v]){
            if(options[v].hasOwnProperty(i)){
                $t.append('<option value="' + options[v][i] + '">' + i + '<\/option>')
            }
        }
    }
}
//----------------------------------------------------------------------for Show n hide -------------------------------------------------------------------------------------------------------
$(function (){
	
	$("#pickupDropoffDatePicker").hide();
	$("#pickupDropoffTimePicker").hide();
	
	$("#hour").click(function (){
		$("#pickupDropoffTimePicker").show();
		$("#pickupDropoffDatePicker").hide();
		return true;
	});
	$("#day").click(function (){
		$("#pickupDropoffDatePicker").show();
		$("#pickupDropoffTimePicker").hide();
		return true;
	});
	$("#week").click(function (){
		$("#pickupDropoffDatePicker").show();
		$("#pickupDropoffTimePicker").hide();
		return true;
	});
	$("#month").click(function (){
		$("#pickupDropoffDatePicker").show();
		$("#pickupDropoffTimePicker").hide();
		return true;
	});
	
//----------------------------------------------------------------------for calender loading-------------------------------------------------------------------------------------------------------	
	//reset type=date inputs to text
		  $( document ).bind( "mobileinit", function(){
			$.mobile.page.prototype.options.degradeInputs.date = true;
		  });			  
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
	
});





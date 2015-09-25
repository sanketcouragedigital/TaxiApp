$(function() {
	var servicelogo = sessionStorage.getItem("servicelogo");
	var Service_Type = sessionStorage.getItem("Service_Type");
	var cost = sessionStorage.getItem("cost");
	var City = sessionStorage.getItem("City");
	
	

	$("#servicelogo").append('<img height="100px" width="100px" src="'+servicelogo+'"/>');
	$("#Service_Type").append('<h2 style="font: 26px QuickSand !important; font-weight: bold !important">'+Service_Type+'</h2>');
	$("#cost").append('<span style="padding: 5px">'+cost+'</span>');
	var env = environment.getEnv();
	//$.get("http://www.ziftapp.com/"+env+"/api/ziftapi.php?City="+City+"&Service_Type="+Service_Type+"&method=showTermsNCondition&format=json")
	$.get("http://localhost/ZiftAPI/api/ziftapi.php?City="+City+"&Service_Type="+Service_Type+"&method=showTermsNCondition&format=json")
			.done(function (response){
				$.each(response.showTaxiTermsNCondition, function(index,termsNConditions){			
					var City = termsNConditions.City;
					var Service_Type = termsNConditions.Service_Type;
					var Contact = termsNConditions.Contact;
					var Day_Cost = termsNConditions.Day_Cost;
					var Night_Cost = termsNConditions.Night_Cost;
					var Day_perKM = termsNConditions.Day_perKM;
					var Night_perKM = termsNConditions.Night_perKM;
					var Minimum_Rates = termsNConditions.Minimum_Rates;
					var First_x_KM = termsNConditions.First_x_KM;
					var per_minute_rate = termsNConditions.per_minute_rate;
					var Waiting_Charges_Day = termsNConditions.Waiting_Charges_Day;
					var Waiting_Charges_Night = termsNConditions.Waiting_Charges_Night;
					var Terms_n_Conditions = termsNConditions.Terms_n_Conditions;
					
				});
			})
			
	
	
});
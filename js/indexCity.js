$(function() {
	
	var env = environment.getEnv();
	$.get("http://www.ziftapp.com/"+env+"/api/ziftapi.php?method=indexPageCity&format=json")
		.done(function (response){
			var select=document.getElementById("selectCity");
			$.each(response.loadCityList,function (index,loadCity){
				var loadCityObj=loadCity;
				var city=loadCity.City
				var option=document.createElement('option');
				option.text=option.value=city;
				select.add(option);
			});
		})
	.fail(function (){   
        // $("#dlg-laod-error").popup("open"); 
	});
	
	$("#selectCity").on("change",function(){
		var selectedCity=$("#selectCity").val();
		sessionStorage.setItem("City",selectedCity);
		window.location="mainindex.html";
	});
	
	$("#wifienable").click(function() {
		cordova.plugins.diagnostic.switchToWifiSettings();
	});
	$("#dataenable").click(function() {
		cordova.plugins.diagnostic.switchToMobileDataSettings();
	}); 
	$("#cancel").click(function() {
		navigator.app.exitApp();
	}); 

});

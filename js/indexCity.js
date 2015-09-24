$(function() {
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

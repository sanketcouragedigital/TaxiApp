$(function (){
		
	var serviceProviderName = sessionStorage.getItem("selectedListServiceProviderName");
	var carMake = sessionStorage.getItem("selectedListCarMake");
	var totalAmount = sessionStorage.getItem("selectedListTotalAmount");
	var extracharges = sessionStorage.getItem("selectedListExtracharges");
	
	var noOfDays = sessionStorage.getItem("selectedListNoOfDays");
	var totalTime = sessionStorage.getItem("selectedListTotalTime");
	
		
	$("#serviceProviderName").append(serviceProviderName);
	$("#carMake").append(carMake);
	$("#totalAmount").append(totalAmount);
	$("#extracharges").append(extracharges);
	$("#noOfDays").append(noOfDays);
	$("#totalTime").append(totalTime);
	
	
	
});
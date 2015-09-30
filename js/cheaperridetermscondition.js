$(function() {
	var logo = sessionStorage.getItem("logo");
	var serviceType = sessionStorage.getItem("serviceType");
	var totalCost = sessionStorage.getItem("totalCost");
	var contact = sessionStorage.getItem("contact");
	var distance = sessionStorage.getItem("distance");
	var duration = sessionStorage.getItem("duration");
	var WaitingChargesForDayOrNight = sessionStorage.getItem("WaitingChargesForDayOrNight");
	var appLink = sessionStorage.getItem("appLink");
	var termsNCondition = sessionStorage.getItem("termsNCondition");
	var Fleet = sessionStorage.getItem("Fleet");
	if(duration>=60)
	{
		var durationhrs = duration / 60;
		var splithours = durationhrs.toString().split(".");
		var durationmin  = duration % 60;
		var duration =  splithours[0] +" " +"Hours" +" "+ durationmin;
	}
	else{
		var duration = duration;
	}
	if(serviceType=="Uber X" || serviceType=="Uber Black"){
		$("#logo").append('<img height="100px" width="100px" src="'+logo+'"/>');
		$("#serviceType").append('<h2 style="font: 26px QuickSand !important; font-weight: bold !important">'+serviceType+'</h2>');
		$("#distance").append('<span style="padding: 5px">'+distance+' Km</span>');
		$("#duration").append('<span style="padding: 5px">'+duration+' Mins</span>');
		$("#totalCost").append('<span style="padding: 5px">'+totalCost+'</span>');
		$("#termsNCondition").append('<span style="padding: 5px">'+termsNCondition+'</span>');
		$("#waitingCharges").hide();
		$("#availableFleet").hide();
	}else {
		
		$("#logo").append('<img height="100px" width="100px" src="'+logo+'"/>');
		$("#serviceType").append('<h2 style="font: 26px QuickSand !important; font-weight: bold !important">'+serviceType+'</h2>');
		$("#distance").append('<span style="padding: 5px">'+distance+' Km</span>');
		$("#duration").append('<span style="padding: 5px">'+duration+' Mins</span>');
		$("#totalCost").append('<span style="padding: 5px">'+totalCost+'</span>');
		$("#WaitingChargesForDayOrNight").append('<span style="padding: 5px">'+WaitingChargesForDayOrNight+' Rs/Min</span>');
		$("#termsNCondition").append('<span style="padding: 5px">'+termsNCondition+'</span>');
		$("#Fleet").append('<span style="padding: 5px">'+Fleet+'</span>');
	}
	var btnopeninapp = document.createElement("A");
	btnopeninapp.appendChild(document.createTextNode("Open in App"));
	btnopeninapp.setAttribute("onClick",'href="'+appLink+'"');
	btnopeninapp.setAttribute("data-role","button");
	btnopeninapp.setAttribute("data-inline","false");
	btnopeninapp.setAttribute("data-corners","false");
	btnopeninapp.setAttribute("data-theme","f");
	btnopeninapp.setAttribute("id","openInAppbtn");

	var btncall = document.createElement("A");
	btncall.appendChild(document.createTextNode("Call"));
	btncall.setAttribute("onClick",'href=" tel:'+contact+'"');
	btncall.setAttribute("data-role","button");
	btncall.setAttribute("data-inline","false");
	btncall.setAttribute("data-corners","false");
	btncall.setAttribute("data-theme","f");
	btncall.setAttribute("id","callbtn");
	
	if(serviceType =="Uber X" || serviceType =="Uber Black" ){ 
		var btnopeninapp = document.createElement("A");
		btnopeninapp.appendChild(document.createTextNode("Open in App"));
		btnopeninapp.setAttribute("onClick",'href="'+contact+'"');
		btnopeninapp.setAttribute("data-role","button");
		btnopeninapp.setAttribute("data-inline","false");
		btnopeninapp.setAttribute("data-corners","false");
		btnopeninapp.setAttribute("data-theme","f");
		btnopeninapp.setAttribute("id","uberopenInAppbtn");
		$('#eventforbtn').append(btnopeninapp).trigger('create');
	}
	else if (serviceType === "Cel Cabs Economy" || serviceType === "Cel Cabs Comfort" || serviceType === "Priyadarshini"){
		$('#eventforbtn').append(btncall).trigger('create');	
	}
	else{
		$('#eventforbtn').append(btncall).trigger('create');
		$('#eventforbtn').append(btnopeninapp).trigger('create');	
	}
	
});
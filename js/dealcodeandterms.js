$(function() {
	var offerImage = sessionStorage.getItem("offerImage");
	var offerCompanyName = sessionStorage.getItem("offerCompanyName");
	var offerShortDescription = sessionStorage.getItem("offerShortDescription");
	var offerCode = sessionStorage.getItem("offerCode");
	var offerValidUptoDate = sessionStorage.getItem("offerValidUptoDate");
	var offerTerms = sessionStorage.getItem("offerTerms");
	
	$("#image").append('<img height="100px" width="100px" src="'+offerImage+'"/>');
	$("#companyName").append('<h2 style="font: 26px QuickSand !important; font-weight: bold !important">'+offerCompanyName+'</h2>');
	$("#offerName").append('<h3 style="font: 20px QuickSand !important; font-weight: bold !important">'+offerShortDescription+'</h3>');
	$("#offerCode").append('<span style="padding: 5px">'+offerCode+'</span>');
	$("#offerTerms").append('<p style="font: 16px QuickSand !important">'+offerTerms+'</p>');
	$("#validUptoDate").append('<p style="font: 18px QuickSand !important; font-weight: bold !important">Offer Valid Date: <strong style="font: 18px QuickSand !important; font-style: italic !important">'+offerValidUptoDate+'</strong><p>');
});
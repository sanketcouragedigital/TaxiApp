$(function() {
	$("#panelListShareIt").on("click",function (){
		$("#dlg-shareit").popup("open");
	});
	$("#facebook").on("click",function (){
		url ="https://play.google.com/store/apps/details?id=com.couragedigital.zift";
		window.location = "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
	});
	$("#twitter").on("click",function (){
		text = "Checkout ZiftApp";
        url ="https://play.google.com/store/apps/details?id=com.couragedigital.zift";
		window.location = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "&url=" + encodeURIComponent(url);
	});
	$("#email").on("click",function (){
		subject="I came accros this new app ZIFT APP.";
		body="Hi, I here is a really cool app called ZIFT for comparing rides in this city ! For more information and to download the app please visit: https://play.google.com/store/apps/details?id=com.couragedigital.zift ";
		$.mobile.back();
		window.location.href = "mailto:?subject=" + subject + "&body=" + body;
	});
});

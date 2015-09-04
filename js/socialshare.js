
function handleSocialShare(){
	$('#select-choice-share option:selected').each(function(){
    	text = "Checkout ZiftApp";
        url ="https://play.google.com/store/apps/details?id=com.couragedigital.zift";
		subject="I came accros this new app ZIFT APP.";
		body="Hi, I here is a really cool app called ZIFT for comparing rides in this city ! For more information and to download the app please visit: https://play.google.com/store/apps/details?id=com.couragedigital.zift ";

        shareService = $(this).val();
        if(shareService == "facebook") {			
        	shareFacebookLike(url);
        }
        else if(shareService == "twitter") {				
        	shareTwitter(url, text);
        }
        else if(shareService == "email") {
        	shareEmail(subject, body);
        }
		$('#select-choice-share').val(0);
		$.mobile.loading("hide");
    });
}
function shareFacebookLike(url){	
	$.mobile.loading( "show", {
    	text: "Loading...",
        textVisible: true,
        theme: "z",
        html: ""
    });
    window.location = "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
}
function shareTwitter(url, text){
	$.mobile.loading( "show", {
		text: "Loading...",
		textVisible: true,
		theme: "z",
		html: ""
	});	
    window.location = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "&url=" + encodeURIComponent(url);
}
function shareEmail(subject, body){
	$.mobile.loading( "show", {
      	text: "Loading...",
        textVisible: true,
        theme: "z",
        html: ""
    });
    window.location.href = "mailto:?subject=" + subject + "&body=" + body;
}


function handleSocialShare(){
    $('#select-choice-share option:selected').each(function(){
        text = "Checkout ZiftApp";
        url ="http://www.ziftapp.com";
		subject="I came accros this new app ZIFT APP.";
		body="Hi i would like to inform you checkout this new app...This is link (add play storeslink here.)";

        shareService = $(this).val()
        switch (shareService) {
            case "facebook":			
                shareFacebookLike(url);
                break;
            case "twitter":				
                shareTwitter(url, text);
                break;
            case "email":
                shareEmail(url, text);
                break;
            default:
        }
		$('#select-choice-share').val(0);
    });
}
function shareFacebookLike(url){	
	 $.mobile.loading( "show", {
      	text: "Loading...",
        textVisible: true,
        theme: "f",
        html: ""
     });
    window.location="http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
	$.mobile.loading( "hide" );
}
function shareTwitter(url, text){
	 $.mobile.loading( "show", {
			text: "Loading...",
			textVisible: true,
			theme: "f",
			html: ""
	 });	
    window.location = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "&url=" + encodeURIComponent(url);
	$.mobile.loading( "hide" );
}
function shareEmail(subject, body){
	 $.mobile.loading( "show", {
      	text: "Loading...",
        textVisible: true,
        theme: "f",
        html: ""
     });
    window.location = "mailsubject:&subject=" + subject + "&body=" + body;
	$.mobile.loading( "hide" );
}

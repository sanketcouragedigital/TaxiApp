function handleSocialShare()
{
    $('#select-choice-share option:selected').each(function()
    {
        text = "Courage Digital..";
        url ="http://www.sebastianviereck.de/flash-html5-trendanalyse/#.ULTEkYb9n2A";

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
    });
}
function shareFacebookLike(url)
{	
    window.location="http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
}
function shareTwitter(url, text)
{	
    window.location = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "&url=" + encodeURIComponent(url);
}
function shareEmail(subject, body)
{
    window.location = "mailto:&subject=" + subject + "&body=" + body;
}
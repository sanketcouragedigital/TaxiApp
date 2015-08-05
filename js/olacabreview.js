 $(function () {
    
        
        //show the loading icon
        $.mobile.loading( "show", {
                  text: "Loading reviews...",
                  textVisible: true,
                  theme: "z",
                  html: ""
        });
       $.get("http://www.ziftapp.com/dev/api/ziftUserReview.php?serviceName=olacabs&method=showReview&format=json")
            .done(function(response) {
                $.mobile.loading( "hide" );
                //alert(response);
				if(typeof response.showReviewData !== 'undefined' && response.showReviewData.length > 0)
				{
					$.each(response.showReviewData, function(index, review){
						  var reviewObj = review;
						  var rating = reviewObj.rating;
						  var comment = reviewObj.comment;				  
						  var date = reviewObj.date;
						  var value = date.split(" ");
						  var fullDate = value[0];
						  var fulTime = value[1];
						  var dateSeparator = fullDate.split("-");
						  var yyyy = dateSeparator[0];
						  var mm = dateSeparator[1];
						  var dd = dateSeparator[2]; 
						  var dateWhenRated = dd+"/"+mm+"/"+yyyy+" "+" "+fulTime;  
						  
						  var ratingInStars = buildStarsToShowRating(rating);
						  var showReviewAndComment = ratingInStars+ "<p>"+comment+"</p><p>"+String(dateWhenRated)+"</p>";
						  $("#reviewList").append('<li style="padding-left: 16px;">'+showReviewAndComment+'</li>');
					});
					$('#reviewList').listview('refresh');
				}
				else{
					$("#dlg-list-error").popup("open");
				}
                
            })
            .fail(function (){
                $.mobile.loading( "hide" );
                $("#dlg-review-error").popup("open"); 
             })
             .always(function(){
                $.mobile.loading( "hide" );
             });

});

function buildStarsToShowRating(rating) {
  var startHtml="";
  for(var i=1; i<=rating; i++) {
    startHtml += '<img src="../images/reviewstarsmall.png" style="position:relative"></img>';
  }
  return startHtml;
}    


 $(function () {  
	//show the loading icon
	$.mobile.loading( "show", {
		text: "Loading reviews...",
		textVisible: true,
		theme: "z",
		html: ""
	});
	var env = environment.getEnv();
	$.get("http://www.ziftapp.com/"+env+"/api/ziftapi.php?serviceName=easyCabs&method=showReview&format=json")
		.done(function(response) {
			$.mobile.loading( "hide" );
			//alert(response);
			if(typeof response.showReviewData !== 'undefined' && response.showReviewData.length > 0){
				$.each(response.showReviewData, function(index, review){	
						var reviewObj = review;
						var rating = reviewObj.rating;
						var comment = reviewObj.comment;				  
						var dateOfReview = new Date(reviewObj.date);
						var date = new Date(reviewObj.date);	 
						var newdate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
						var offset = date.getTimezoneOffset() / 60;
						var hours = date.getHours();
						newdate.setHours(hours - offset);
						var localdate = newdate.toString();
						var value = localdate.split(" ");
						var month = value[1];
						var date = value[2];
						var year = value[3];
						var fullTime = value[4];
						var dateWhenRated = date+" "+month+" "+year+" "+" "+fullTime;
						var ratingInStars = buildStarsToShowRating(rating);
						var showReviewAndComment = ratingInStars+ "<p>"+comment+"</p><p>"+String(dateWhenRated)+"</p>";
					$("#reviewList").append('<li class="list" data-icon="false"><a class="reviewAnchor" >'+showReviewAndComment+'</li>');
				});
				$('#reviewList').listview('refresh');
				$("a.reviewAnchor").css({
					background : "#f6f6f6"
				});
				$("a").css({
					color : "black"
				});
			}else{
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


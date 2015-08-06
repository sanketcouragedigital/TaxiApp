 $(function () {
    
    $("#scriptRating").igRating({
        value: 3
     });

     $("#saveRatings").on("click", function(){
         var ratingValue = $("#htmlRating").igRating("option","value");
         var comment = $("#comment").val();
         if(comment === "") {
         	comment = "N/A";
         }
         var serviceName = $("#serviceName").val();		
         var data = {
			"serviceName" : serviceName,
			"ratingNumber" : ratingValue,
			"comment" : comment,			
			"method" : "userReview",
			"format" : "json"

         };
          //alert("Rating value = "+ratingValue+" Comments = "+comment);
         $.mobile.loading( "show", {
                  text: "Saving Feedback..",
                  textVisible: true,
                  theme: "b",
                  html: ""
          }); 
         $.post("http://www.ziftapp.com/dev/api/ziftapi.php", data)
            .done(function( msg ) {
                $.mobile.loading( "hide" );
                //alert(msg); 
                $("#dlg-save-success").popup("open");
                //window.location = "home.html";
            })
            .fail(function (){
                $.mobile.loading( "hide" ); 
                $("#dlg-save-error").popup("open");
             })
             .always(function(){
                $.mobile.loading( "hide" );
             });

       });
});

    


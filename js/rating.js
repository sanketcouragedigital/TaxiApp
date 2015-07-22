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
          "ratingNumber" : ratingValue,
          "comment" : comment,
          "serviceName" : serviceName

         };
          //alert("Rating value = "+ratingValue+" Comments = "+comment);
         $.mobile.loading( "show", {
                  text: "Saving Feedback..",
                  textVisible: true,
                  theme: "b",
                  html: ""
          }); 
         $.ajax({
                  type: "POST",
                  contentType:"application/json",
                  dataType : "json",
                  crossDomain: true,
                  url: "http://taxiapp.azurewebsites.net/ratings/addrating",
                  data: JSON.stringify(data)
            })
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

    


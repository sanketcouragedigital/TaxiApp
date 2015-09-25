
$("uber").hide();
$(function() {
	 $.mobile.loading( "show", {
      	text: "Loading Contacts...",
        textVisible: true,
        theme: "z",
        html: ""
     });
	 var env = environment.getEnv();
	 var City = sessionStorage.getItem("City");
      $.get("http://www.ziftapp.com/"+env+"/api/ziftapi.php?City="+City+"&method=showTaxiContact&format=json")
      	.done(function(response) {
			$.each(response.showTaxiContactList, function(index,taxiContacts){			
				var Contact = taxiContacts.Contact;
				var Owner = taxiContacts.Owner;
				var logo = taxiContacts.logo;
				var City = taxiContacts.City;
				var value = logo.split("/");
				var imageName = value[2];
				var listItemHtml;
				listItemHtml = '<li data-icon="phone" class="list"><a href="'+Contact+'" class="listAnchor"><img style="padding:5px; padding-top:12px" height="62px" width="80px" src="http://www.ziftapp.com/'+env+'/taxiservices_images/'+imageName+'"/><h2>'+Owner+'</h2></a></li>';
				$("#taxicontactList").append(listItemHtml);
				$("uber").show();
            })			
            $.mobile.loading( "hide" );
			$('#taxicontactList').listview('refresh');
			
			$("a.listAnchor").css({
				background : "#f6f6f6",
				height : "85px"	
			});
			$("a").css({
				color: "black"			
			});
			$("img").css({
				"padding" : "5px",
				"padding-top" : "12px",
				"height" : "62px",
				"width" : "80px"
			});
		})
            .fail(function (){
                $.mobile.loading( "hide" );
                $("#dlg-deals-server-error").popup("open"); 
             })
             .always(function(){
                $.mobile.loading( "hide" );
             });
});

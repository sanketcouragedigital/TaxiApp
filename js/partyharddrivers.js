$(function() {
	 $.mobile.loading( "show", {
      	text: "Loading reviews...",
        textVisible: true,
        theme: "z",
        html: ""
     });
      $.get("http://www.ziftapp.com/dev/api/ziftapi.php?&method=showPHD&format=json")
      	.done(function(response) {
                $.mobile.loading( "hide" );
				if(typeof response.showPHDList !== 'undefined' && response.showPHDList.length > 0)
				{
					var img="";
					$.each(response.showPHDList, function(index, phdList){
						if(dealsList.image_path!=="") {
							var image_path = phdList.image_path; 
							var value = image_path.split("/");
							var imageName = value[2];
						}
						else {
							var imageName = "default_image.jpg";
						}
						
						if(phdList.isVerify==true ){
							img='<img height="20px" width="20px" src="../images/verify.png" style="position:relative"></img>';
						}
						else{
							img='<img height="20px" width="20px" src="../images/notverify.png" style="position:relative"></img>';
						}
							var listItemHtml;
							listItemHtml='<li data-icon="phone"><a href="'+phdList.mobileno+'" class="customlistbgcolor"><img height="80px" width="100px" src="http://www.ziftapp.com/dev/phd_images/'+imageName+'"/><h6 style="font: 18px monscrrat !important; font-weight: bold !important">'+phdList.serviceName+'</h6><p><strong style="font: 16px monscrrat !important">'+phdList.city+'&nbsp;'+img+'</strong></p></a></li>';
							$("#partyHardDriversList").append(listItemHtml);				
					});
					$("#partyHardDriversList").listview('refresh');
					$("a.customlistbgcolor").css({
						background : "#f6f6f6"
					});
					$("a").css({
						color : "black"
					});
				}
				else{
					$("#dlg-phd-error").popup("open");
				}
               
            })
            .fail(function (){
                $.mobile.loading( "hide" );
                $("#dlg-phd-server-error").popup("open"); 
             })
             .always(function(){
                $.mobile.loading( "hide" );
             });
});

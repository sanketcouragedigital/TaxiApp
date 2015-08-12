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
						if(phdList.image_path!=="") {
							var image_path = phdList.image_path; 
							var value = image_path.split("/");
							var imageName = value[2];
						}
						else {
							var imageName = "default_image.png";
						}
						
						if(phdList.isVerify==true ){
							img='<img height="20px" width="20px" src="http://www.ziftapp.com/dev/misc_images/verify.png" style="position:relative"></img>';
						}
						else{
							img='<img height="20px" width="20px" src="http://www.ziftapp.com/dev/misc_images/notverify.png" style="position:relative"></img>';
						}
						
						var listItemHtml;
						listItemHtml='<li data-icon="phone"><a href="tel:'+phdList.mobileno+'" class="customlistbgcolor"><img height="80px" width="80px" src="http://www.ziftapp.com/dev/phd_images/'+imageName+'"/><h6 style="font: 18px QuickSand !important; font-weight: bold !important">'+phdList.serviceName+'</h6><p><strong style="font: 16px QuickSand !important">'+phdList.city+'&nbsp;'+img+'</strong></p></a></li>';
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

$(function() {
	 $.mobile.loading( "show", {
      	text: "Loading Party Hard Drivers...",
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
							img='<img height="15px" width="15px" src="http://www.ziftapp.com/dev/misc_images/verify.png" style="position:relative"></img>';
						}
						else{
							img='<img height="15px" width="15px" src="http://www.ziftapp.com/dev/misc_images/notverify.png" style="position:relative"></img>';
						}
						
						var listItemHtml;
						listItemHtml='<li data-icon="phone" class="phdList"><a href="tel:'+phdList.mobileno+'" class="customlist"><img style="padding:5px; padding-top:12px" height="62px" width="80px" src="http://www.ziftapp.com/dev/phd_images/'+imageName+'"/><h6 style="font: 18px QuickSand !important; font-weight: bold !important">'+phdList.serviceName+'</h6><p><strong style="font: 16px QuickSand !important">'+phdList.city+'</strong></p><p style="font: 14px QuickSand !important">'+displayTrueFalseForInt(parseInt(phdList.isVerify))+'&nbsp;'+img+'</p></a></li>';
						$("#partyHardDriversList").append(listItemHtml);				
					});
					$("#partyHardDriversList").listview('refresh');
					function displayTrueFalseForInt(isVerified) {
						if(isVerified === 0) {
							return "Not Verified";
						}
						return "Verified";
					}
					$("a.customlist").css({
						background : "#f6f6f6"
					});
					$("a").css({
						color : "black"
					});
					$("li.phdList").css("border", "#DCDCDC solid 1px");
					$("a.customlist").css("border", "#DCDCDC 1px");
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

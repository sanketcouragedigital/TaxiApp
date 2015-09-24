$(function() {
	 $.mobile.loading( "show", {
      	text: "Loading Deals...",
        textVisible: true,
        theme: "z",
        html: ""
     });
	 var env = environment.getEnv();
      $.get("http://www.ziftapp.com/"+env+"/api/ziftapi.php?&method=showDeals&format=json")
      	.done(function(response) {
                $.mobile.loading( "hide" );
				if(typeof response.showDealsList !== 'undefined' && response.showDealsList.length > 0)
				{
					var img="";
					$.each(response.showDealsList, function(index, dealsList){
						if(dealsList.image_path!=="") {
							var image_path = dealsList.image_path; 
							var value = image_path.split("/");
							var imageName = value[2];
						}
						else {
							var imageName = "default_image.png";
						}
						
						if(dealsList.isVerify==true ){
							img='<img height="15px" width="15px" src="http://www.ziftapp.com/dev/misc_images/verify.png" style="position:relative"></img>';
						}
						else{
							img='<img height="15px" width="15px" src="http://www.ziftapp.com/dev/misc_images/notverify.png" style="position:relative"></img>';
						}
						
						var date = dealsList.validUptoDate;
						var dateSeparator = date.split("-");
						var yyyy = dateSeparator[0];
						var mm = dateSeparator[1];
						var dd = dateSeparator[2]; 
						var validUptoDate = dd+"/"+mm+"/"+yyyy;
						
						var listItemHtml = [];
						listItemHtml[index] ='<li class="list" data-icon="false"><a href="#" class="listAnchor" data-ajax="false"><img style="padding:5px; padding-top:12px" height="62px" width="80px" src="http://www.ziftapp.com/dev/deals_images/'+imageName+'"/><h2 id="offerCompanyName" style="font: 18px QuickSand !important; font-weight: bold !important">'+dealsList.companyName+'</h2><p style="padding-right: 10px"><strong id="offerShortDescription" style="font: 16px QuickSand !important; ">'+dealsList.offer+'</strong></p><p style="font: 14px QuickSand !important">'+displayTrueFalseForInt(parseInt(dealsList.isVerify))+'&nbsp;'+img+'</p><p id="offerCode">'+dealsList.offerCode+'</p><p id="offerValidUptoDate">'+validUptoDate+'</p><div id="offerTerms">'+dealsList.offerTerms+'</div></a></li>';
						$("#dealsList").append(listItemHtml);
							
					});
					$("#dealsList").listview('refresh');
					function displayTrueFalseForInt(isVerified) {
						if(isVerified === 0) {
							return "Not Verified";
						}
						return "Verified";
					}
					$("a.listAnchor").css({
						background : "#f6f6f6"
					});
					$("a").css({
						color : "black"
					});
					
					$("p#offerCode,p#offerValidUptoDate,div#offerTerms").css({
						display : "none"
					});
					$("li.list").on('click', function(){
						var currentListItem = $(this);
						var offerImage = currentListItem.find("img").attr("src");
						var offerCompanyName = currentListItem.find("h2#offerCompanyName").html();
						var offerShortDescription = currentListItem.find("strong#offerShortDescription").html();
						var offerCode = currentListItem.find("p#offerCode").html();
						var offerValidUptoDate = currentListItem.find("p#offerValidUptoDate").html();
						var offerTerms = currentListItem.find("div#offerTerms").html();
						sessionStorage.setItem("offerImage", offerImage);
						sessionStorage.setItem("offerCompanyName", offerCompanyName);
						sessionStorage.setItem("offerShortDescription", offerShortDescription);
						sessionStorage.setItem("offerCode", offerCode);
						sessionStorage.setItem("offerValidUptoDate", offerValidUptoDate);
						sessionStorage.setItem("offerTerms", offerTerms);
						window.location.href = "dealcodeandterms.html";
					});
				}
				else{
					$("#dlg-deals-error").popup("open");
				}
               
            })
            .fail(function (){
                $.mobile.loading( "hide" );
                $("#dlg-deals-server-error").popup("open"); 
             })
             .always(function(){
                $.mobile.loading( "hide" );
             });
});

$(function() {
	 $.mobile.loading( "show", {
      	text: "Loading reviews...",
        textVisible: true,
        theme: "z",
        html: ""
     });
      $.get("http://www.ziftapp.com/dev/api/ziftapi.php?&method=showDeals&format=json")
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
							img='<img height="20px" width="20px" src="http://www.ziftapp.com/dev/misc_images/verify.png" style="position:relative"></img>';
						}
						else{
							img='<img height="20px" width="20px" src="http://www.ziftapp.com/dev/misc_images/notverify.png" style="position:relative"></img>';
						}
						
						var date = dealsList.validUptoDate;
						var dateSeparator = date.split("-");
						var yyyy = dateSeparator[0];
						var mm = dateSeparator[1];
						var dd = dateSeparator[2]; 
						var validUptoDate = dd+"/"+mm+"/"+yyyy;
						
						var listItemHtml = [];
						listItemHtml[index] ='<li data-role="list-divider"></li><li class="dealsList"><a href="#" class="customlistbgcolor" data-ajax="false"><img height="80px" width="80px" src="http://www.ziftapp.com/dev/deals_images/'+imageName+'"/><h2 id="offerCompanyName" style="font: 18px QuickSand !important; font-weight: bold !important">'+dealsList.companyName+'</h2><p><strong id="offerShortDescription" style="font: 16px QuickSand !important">'+dealsList.offer+'&nbsp;'+img+'</strong></p><p id="offerCode">'+dealsList.offerCode+'</p><p id="offerValidUptoDate">'+validUptoDate+'</p><div id="offerTerms">'+dealsList.offerTerms+'</div></a></li>';
						$("#dealsList").append(listItemHtml);
							
					});
					$("#dealsList").listview('refresh');
					$("a.customlistbgcolor").css({
						background : "#f6f6f6"
					});
					$("a").css({
						color : "black"
					});
					$("p#offerCode,p#offerValidUptoDate,div#offerTerms").css({
						display : "none"
					});
					$("li.dealsList").on('click', function(){
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

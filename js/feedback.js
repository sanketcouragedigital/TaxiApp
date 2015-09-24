 $(function () {
		$.validator.addMethod('customMobile', function(value, element) {
			return this.optional(element) || /^([789]\d{9})$/.test(value);
		},  "Please enter a valid 10 digit number");

		$('#feedbackForm').validate({
			rules: {
				mobileno : {
					customMobile : true,						
				},
				email : {
					email : true,
					required:true
				},
				feedback: {
					required:true
				}
			},
			messages: {
				email : {
					required : "Please enter Email Id",
					email:"Please enter valid Email Id"
				}
			},
			errorPlacement: function( error, element ) {
			 	error.insertAfter( element.parent() );
			}
		});
		$("#btnsubmit").on("click",function (){
			if($('#email').valid() && $('#feedback').valid()){
				if($('#mobileno').valid()){
					var data={
							email: $("#email").val(),
							mobileno: $("#mobileno").val(),
							feedback: $("#feedback").val(),
							method: "userFeedback",
							format:"json"
						};
					var env = environment.getEnv();
					$.post("http://www.ziftapp.com/"+env+"/api/ziftapi.php",data)
						.done(function (response){
							if(response.mailFeedback==true){
								$("#dlg-feedback-success").popup("open");
							}
							else{
								$("#dlg-feedback-error").popup("open");
							}
					}).fail(function(){
							$("#dlg-feedback-server-error").popup("open");
					});
				}
			}

		});

});  


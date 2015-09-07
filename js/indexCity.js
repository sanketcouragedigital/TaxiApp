$(function() {
	$("#selectCity").on("change",function(){
		var selectedCity=$("#selectCity").val();
		if(selectedCity=="Mumbai"){
			window.location="mainindex.html";
		}
	});
});
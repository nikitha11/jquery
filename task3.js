debugger
$("#display").hide();
$("button").click(function(){
	if($("#first_name").val()=="" || $("#last_name").val()== "" || $("#e_mail").val()=="" || $("#a_dress").val()== "")
	{
		window.alert("every field should be filled");
	}else{
		debugger
		$("#formValidate").hide();
		$("#display").show();
		var firstname=$("#first_name").val();
		$("#display_first_name").text(firstname);
		var lastname=$("#last_name").val();
		$("#display_last_name").text(lastname);
		var email=$("#e_mail").val();
		$("#display_e_mail").text(email);
		var adress=$("#a_dress").val();
		$("#display_a_dress").text(adress);
	}
});



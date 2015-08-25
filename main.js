$(document).ready(function(){

	alert("hello world");

	var email="";
	var pass1="";
	var pass2="";

	$("#submitBtn").click(function(){
		console.log("click works");

		email=$("#email").val();
		pass1=$("#p1").val();
		pass2=$("#p2").val();

		console.log("e-mail");
		console.log("p1");
		console.log("p2");

		validate( "email",email);
	});

	function validate(dataType, data) {
		var result= "false";

		if (data!==""){
			console.log("continue validation...");

			switch (dataType){
				case "email":
						if(data.indexOf('@')==-1){
							console.log("The @ is found")
						} else {
							console.log("no @ was found")
						}
					break;
				case "password":
					break;

			}
		}
	}
});

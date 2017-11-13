function messageRecieved(){
	console.log("test")
	$("#submitButton").fadeOut();
	var para = $("<p>Your message has been received!</p>");
	$("#submitDiv").append(para);
	return false;
}	
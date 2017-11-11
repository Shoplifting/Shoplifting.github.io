function messageRecieved(){
	$("#submitButton").fadeOut();
	var para = $("<p>Your message has been received!</p>");
	$("#submitDiv").append(para);
}	
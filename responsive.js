$(function() {
  
  var srcURL = "http://mathieu-tremblay.tumblr.com";
  $("iframe").attr("src", srcURL);
  
  function UpdateFrame() {
  var getURL = $("#getURL").val();
  
  if (getURL.match(/^http:/)) {
  $("iframe").attr("src", getURL);
  }
  else  {
  var validURL = "http://" + getURL;
  $("iframe").attr("src", validURL);
  }
  }
  
  $("button").click(function() {
					UpdateFrame();
					});
  
  $("#getURL").keypress(function(e){
						if(e.which == 13){
						UpdateFrame();
						}
						});
  });
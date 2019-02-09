
var sheetID = "1XPmeY6xjK4VGTGxjff_NrPkpzwKk3U0x6p90cqg09dc"  
var url = "https://spreadsheets.google.com/feeds/list/" + sheetID +"/1/public/values?alt=json";

  
  $.getJSON(url, function(data) {
	  
	var entry = data.feed.entry;

  $(entry).each(function(){
  
  var x = data.feed.entry[0].gsx$lunes.$t;
  var y = data.feed.entry[0].gsx$martes.$t;
  var w = data.feed.entry[0].gsx$miercoles.$t;
  var j = data.feed.entry[0].gsx$jueves.$t;
  var v = data.feed.entry[0].gsx$viernes.$t;

  //var x = data.feed.entry[1].gsx$name.$t;
  //var w = data.feed.entry[1].gsx$age.$t;

 
  
  console.log(x);
  document.getElementById("l9").innerHTML=x;
  document.getElementById("m9").innerHTML=y;
  document.getElementById("w9").innerHTML=w;
  document.getElementById("j9").innerHTML=j;
  document.getElementById("v9").innerHTML=v;
  
  });

	
	
	

	
  });

  
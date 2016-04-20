$(document).ready(function(){
	$("#calculate").click(function(){
		var x = $("#userInput").val();
		var y = $("#planetSelected").val();
		var total = x * y;
		var z = $("#planetSelected option:selected").html();
		if(!$("p"))
		{		
		$("body").append("<p><span>If you were on " + z + ", you would weight " + total + "lbs!</span></p>");
		} else {
		$("p").empty().append("<p><span>If you were on " + z + ", you would weight " + total + "lbs!</span></p>");
		}

		});	
	});
	
$(function() {

	$('textarea').focus(function() {

		$(this).addClass('expand');
		$("#tweet-controls").show();
		$(".button").show();
	// });

		$('textarea').keydown(function() {
			var count= $(this).val().length;

			$('#char-count').text(140-count);
			if (count > 130) {
				$('#char-count').css('color', 'red');
			} else {
				$('#char-count').css('color', 'black');
			}

			if (count > 140) {
				$('.button').attr("disabled","disabled");
			} else {
				$('.button').removeAttr("disabled");
			};
			}); //ends text typing

		// $( "#tweet-submit" ).mousedown(function() {
		//   	mousedownHappened= true;
		// });

		$("textarea").blur(function() {
				$(this).removeClass('expand');
				$("#tweet-controls").hide();
			});
			
	// });

	   });//ends text area click
	$('#tweet-submit').mousedown(function() {
		var tweetWords	= $(".tweet-compose").val(),
			// newTweet 	= $(".tweet").clone().eq(0),
			newTweet 	= $(".tweet:first-child").clone(),
		 	oneName 	= $("#realName").text(),
			picture 	= $("#myAvatar").attr("src");

		newTweet.find(".tweet-text").html(tweetWords);
		newTweet.find(".fullname").html(oneName);
		newTweet.find(".username").html("@matt_hopkins")
		newTweet.find(".avatar").attr("src", picture);

		// $('#stream').prepend($(newTweet));
		newTweet.prependTo('#stream');

		$('textarea').val();
		$('char-count').text("140");
});
//ends tweet submit click
	$("body").on('click', ".tweet", function() {
		$(this).find(".stats").animate({ 
			height: "toggle"}, 500);
		$(this).find(".reply").animate({ 
			height: "toggle"}, 500);
	});//end tweet click function

});//ends all functions
	


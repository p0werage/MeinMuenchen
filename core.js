$(document).ready(function() {
	if ($(window).width() <= 1133) {
		$(".heading").css("top", 0);
	}
});

$(window).scroll(function(e) {
var scroller_anchor = $(".scroller_anchor").offset().top;	

if ($(window).width() > 1133) {
    if ($(this).scrollTop() >= scroller_anchor && $('.heading').css('position') != 'fixed') 
    {
        $('.heading').css({
            'position': 'fixed',
            'top': '10px',
			'transition': 'none !important'
        });
        $('.scroller_anchor').css('height', '110px');
    } 
    else if ($(this).scrollTop() < scroller_anchor && $('.heading').css('position') != 'relative') 
    {
        $('.scroller_anchor').css('height', '10px');
        $('.heading').css({
            'position': 'relative',
			'top':'110px',
			'transition': 'none'
        });
    }
} else {
    {
        $('.heading').css({
            'position': 'fixed',
            'top': '0px',
			'transition': 'none !important'
        });
        $('.scroller_anchor').css('height', '0px');
    }
}
});


$(window).on("resize", function() {
	if ($(window).width() < 1133) {
		$('.scroller_anchor').css('height', '0px');
		$(".heading").css("top", 0);
	} else {
		$(".heading").css("top");
		$('.scroller_anchor').css('height');
	}
	if ($(window).width() > 921) {
		$(".navigationClose").remove();
	}
	if ($(window).width() >= 610 && $(".navigationFlip").height() > 21) {
		$(".navigationClose").remove();
		$(".navigationFlip").css({"height": 21, "background": "url(navi.png)", "cursor": "pointer", "border-bottom": "3px solid #333"});
		$(".heading").css("margin-top", 0);
	}
	if ($(window).width() <= 939 && $(window).width() >= 626 && $(".navigationFlip").width() > 20) {
				$(".navigationFlip").after('<div class="navigationClose">');
			}
});
$(function weiterlesen() {
	$(".weiterlesen").hover(function() {
		$(this).parent().css("z-index", 1001);
		$(".heading").css("z-index", 100);
		$(".overlay").fadeIn(300);
	}, function() {
		$(".overlay").stop().fadeOut(0);
		$(this).parent().css("z-index", 1);
		setTimeout(function() {
		$(".heading").css("z-index", 100);
		}, 0);
	});
});

$(function flipNavi() {
	var navi = $(".navigationFlip");
		$(navi).click(function() {
			if ($(window).width() <= 939 && $(window).width() >= 626) {
				if ($(".navigationFlip").width() > 20) {
					setTimeout(function() {
						$(navi).css({"background": "url(navi.png)", "cursor": "pointer", "border-bottom": "3px solid #333"});}, 400);
				} else {
					$(navi).css({"background": "#333", "cursor": "inherit", "border-bottom": "3px solid #ffd900"}).animate({"width": 100 + "%"}, 300);
					setTimeout(function() {
						$(navi).after('<div class="navigationClose">');}, 400); }
			} else {
				if ($(".navigationFlip").height() > 21) {
					setTimeout(function() {
						$(navi).css({"background": "url(navi2.png)", "cursor": "pointer", "border-bottom": "3px solid #333"});}, 250);
				} else {
					$(".navigationFlip").css({"background": "#333", "cursor": "inherit", "border-bottom": "3px solid #ffd900"}).animate({"height": 100}, 200);
					$(".heading").css("margin-top", 76);
					$(".container").css("margin-top", 76);
					setTimeout(function() {
						$(navi).after('<div class="navigationClose">');}, 250); }
			}
		});
		$(document).on("click", (".navigationClose"), function() {
			$(".navigationClose").remove();
			if ($(window).width() <= 939 && $(window).width() >= 626) {
				$(navi).animate({"width": 20}, 300);
				setTimeout(function() {
					$(navi).css({"background": "url(navi.png)", "cursor": "pointer", "border-bottom": "3px solid #333"});}, 400);
			} else if ($(window).width() < 626) {
				$(navi).animate({"height": 21}, 250);
				$(".heading").css("margin-top", 0);
				$(".container").css("margin-top", 0);
				setTimeout(function() {
					$(".navigationFlip").css({"background": "url(navi2.png)", "cursor": "pointer", "border-bottom": "3px solid #333"});}, 300);			
			}
		});
});

$(function buttonsActive() {
	$(".navigation").children().click(function() {
		$(".navigation").children().removeClass("active");
		$(this).addClass("active");
	});
	$(".navigationFlip").children().children().click(function() {
		$(".navigationFlip").children().children().removeClass("active2");
		$(this).addClass("active2");
		if ($(window).width() <= 939 && $(window).width() >= 626) {
			$(".navigationFlip").animate({"width": 20}, 300);
		} else if ($(window).width() <626) {
			$(".navigationFlip").animate({"height": 21}, 250);
			$(".heading").css("margin-top", 0);
			$(".container").css("margin-top", 0);
		}
		$(".navigationClose").remove();
	});
});
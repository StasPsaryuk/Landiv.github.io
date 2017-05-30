$(document).ready(function() {

         $('.action_buttons ul li a,.action_buttons a.acion_button1,.action_buttons ul li a.action_button2,#newsletter button, .submit, .subscribe, .social img, .columns a.more_button, a.tour_button,.botttom_contact a#map-inline img,.botttom_contact a#contactform-inline').tipsy({fade: true});

	// Button Hover
	if($.browser.msie && $.browser.version == "7.0") {
		$(".action_buttons ul li a.action_button1, #newsletter button.submit,#content .column img, .social ul li,.columns a.more_button, .form_input button,a.tour_button,.botttom_contact img,a#contactform-inline").css("padding-top", "0px");
	} else {
		jQuery('.action_buttons ul li a.action_button1,.action_buttons ul li a.action_button2, #newsletter button.submit, #content .column img, #content .column_last img, .social ul li,.columns a.more_button, .form_input button,a.tour_button,.botttom_contact img,a#contactform-inline').hover(
			function() { jQuery(this).stop().animate({opacity:0.6},400); },
			function() { jQuery(this).stop().animate({opacity:1},400); }
		);
	}

});





		$(document).ready(function() {
			$('#slider_images').cycle({
				fx: 'fade',
				pager:'#sliderNav',
				pause: 1
			});
		});
		

/***************************************************
		CAROUSEL
***************************************************/
function mycarousel_initCallback(carousel) {
    jQuery('.carousel-next').bind('click', function() {
        carousel.next();
        return false;
    });

    jQuery('.carousel-prev').bind('click', function() {
        carousel.prev();
        return false;
    });
};

jQuery(document).ready(function() {
    jQuery(".carousel").jcarousel({
        scroll: 1,
        initCallback: mycarousel_initCallback,
        // This tells jCarousel NOT to autobuild prev/next buttons
        buttonNextHTML: null,
        buttonPrevHTML: null
    });
});


/***************************************************
		IMAGE ZOOM
***************************************************/
$(document).ready(function() {
	$("a.zoom img").mouseover(function(){
		$(this).stop(true,true);
		$(this).fadeTo(300, 0.6);
	});

	$("a.zoom img").mouseout(function(){
		$(this).fadeTo(400, 1.0);
	});
	
		// FancyBox
		$("a#moredesc-inline1,a#moredesc-inline2,a#moredesc-inline3,a#map-inline,a#contactform-inline").fancybox({
			'transitionIn'		:'elastic',
			'overlayShow'		:true,
			'speedIn'			:600,
			'titleShow':false
		});


});


  // Twitter script config


	getTwitters('twitter', {
        id: 'envatowebdesign',
        count: 2,
        enableLinks: true,
        ignoreReplies: false,
        template: '<span class="twitterPrefix"><span class="twitterStatus">%text%</span> <span class="username"><a href="http://twitter.com/%user_screen_name%"><br/>- Follow %user_screen_name%</a></span>',
        newwindow: true

 	});

	$('#testimonial').cycle({
 		fx:'fade',
 		timeout:4000
 	});
 	
 	






/***************************************************
		PRETTYPHOTO  & Ajax contact form
***************************************************/

$(document).ready(function(){
	$("a[rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',autoplay_slideshow: false});
	
	
		//Ajax Contact Form Submission
		$("#ajax-contact-form").submit(function(){
		var str = $(this).serialize();
		   $.ajax({
		   type: "POST",
		   url: "contact/contact.php",
		   data: str,
		   success: function(msg){
			$("#notification").ajaxComplete(function(event, request, settings){
			if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
			{
			result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
			$("#fields").hide();
			}
			else
			{
			result = msg;
			}
			$(this).html(result);
			});
			}
		 });
		return false;
		});
});






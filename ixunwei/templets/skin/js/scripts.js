/* Custom Scripts */
$(document).ready(function () {

	// Start Parallax script
	$('.setupArea').parallax("50%", 0.1);

	// Start Main Content Slider
	$('#main-slider').flexslider({
		animation: "fade",
  	slideshowSpeed: 5000,
    pauseOnHover: false, 
		useCSS: false,
		touch: true,
		prevText: "<span class='fa fa-angle-left'></span>",
		nextText: "<span class='fa fa-angle-right'></span>",
	});
	
      $('.flexslider2').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 230,
        itemMargin: 0,
		prevText: "<span class='fa fa-angle-left'></span>",
		nextText: "<span class='fa fa-angle-right'></span>",
		controlNav: false,
        start: function(slider){
          $('body').removeClass('loading');
        }
      });

	// Start Header Animation
	$(window).scroll(function () {
		if ($(document).scrollTop() == 0) {
			$('.top-menu').removeClass('tiny');
		} else {
			$('.top-menu').addClass('tiny');
		}
	});

	// Start ToolTip
	$('[data-toggle=tooltip]').tooltip() 
	
	// Start PoPover
	$('[data-toggle=popover]').popover()
	

	// prettyPhoto script start here
    $('a[data-gal]').each(function() {
        $(this).attr('rel', $(this).data('gal'));
    });     
    $("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});

});	
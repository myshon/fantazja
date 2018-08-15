// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 500;
var section_show_time = 500;

// jQuery stuff
jQuery(document).ready(function($) {

	// Switch section
	$("a", '.mainmenu').click(function() 
	{
		if( ! $(this).hasClass('current-active') ) { 
			current_item = this;
			
			var old_active = $('.mainmenu a.current-active');
			var new_active = $(current_item);
			
			var new_href = new_active.attr('href');
			var new_section_id = new_href.replace('#','');
			
			var old_href = old_active.attr('href');
			var old_section_id = old_href.replace('#','');
			
			var old_background = $('.background-container .bg.'+old_section_id);
			var new_background = $('.background-container .bg.'+new_section_id);
			
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				
				var new_section = $( new_href );
				new_section.fadeIn( section_show_time );
				//var bgurl = new_section.attr('bg-url')
				//$('html').css({background : '#505D6E ' + bgurl + ' no-repeat center center fixed'})
			} );
			
			old_active.removeClass('current-active');
			new_active.addClass('current-active');
			
			old_background.css('z-index',10);
			new_background.css('z-index',9);
			new_background.addClass('current-active');
			old_background.fadeOut(section_hide_time, function(){
				old_background.removeClass('current-active');
				old_background.attr('style','');
			});
			
			
			//$('#navbarCollapse').slideUp(1000, function() { $(this).removeClass('in').addClass('collapse');});
			$('#navbarCollapse').collapse('hide');
		}
		return false;
	});		
});
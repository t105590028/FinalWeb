;(function () {

	'use strict';



	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Main Menu Superfish
	var mainMenu = function() {

		$('#fh5co-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};


	// Offcanvas and cloning of the main menu
	var offcanvas = function() {

		var $clone = $('#fh5co-menu-wrap').clone();
		$clone.attr({
			'id' : 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class' : '',
			'id' : ''
		});

		$('#fh5co-page').prepend($clone);

		// click the burger
		$('.js-fh5co-nav-toggle').on('click', function(){

			if ( $('body').hasClass('fh5co-offcanvas') ) {
				$('body').removeClass('fh5co-offcanvas');
			} else {
				$('body').addClass('fh5co-offcanvas');
			}
			// $('body').toggleClass('fh5co-offcanvas');

		});

		$('#offcanvas-menu').css('height', $(window).height());

		$(window).resize(function(){
			var w = $(window);


			$('#offcanvas-menu').css('height', w.height());

			if ( w.width() > 769 ) {
				if ( $('body').hasClass('fh5co-offcanvas') ) {
					$('body').removeClass('fh5co-offcanvas');
				}
			}

		});

	}

	var y=0;
	var rownav=0;
	var wdth=$(window).width();
	$(window).resize(function() {
	    wdth=$(window).width()
	});
	if ($(this).scrollTop() >= 473) {        // If page is scrolled more than 50px
	    $('#return-to-top').fadeIn(200);    // Fade in the arrow
	}
	if ($(this).scrollTop() > 0) {
	    $('.row_navbar').addClass('row_navbar_1');
	}
	if($(this).scrollTop()==0&&wdth<=1250){
	    $('.row_navbar').addClass('row_navbar_1');
	}

	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 473) {        // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else if($(this).scrollTop()>0&&y==0&&wdth>1250){
	       $('.row_navbar').addClass('row_navbar_1');
	       $('body,html').animate({
	            scrollTop : 947
	        }, 750);
	    }
	    else if($(this).scrollTop() ==0&&wdth>1250){
	        $('.row_navbar').removeClass('row_navbar_1');
	    }
	    else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	    y=$(this).scrollTop();
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 750);
	});

	$(document).ready(function(){
	    $('[data-toggle="tooltip"]').tooltip();
	    $(window).resize(function() {
	        if (wdth <1250&&$(this).scrollTop()==0) {
	           $('.row_navbar').addClass('row_navbar_1');
	        }
	        else if(wdth>=1250&&$(this).scrollTop()==0){
	            $('.row_navbar').removeClass('row_navbar_1');
	        }

	    });
	});

	$('.handle').on('click',function(){
	    if(rownav==0){
	        $('.row_nav').addClass('row_nav_1');
	        rownav=1;
	    }
	    else{
	        $('.row_nav').removeClass('row_nav_1');
	        rownav=0;
	    }
	});
	$('.handle1').on('click',function(){
	    if(rownav==0){
	        $('.row_nav').addClass('row_nav_2');
	        rownav=1;
	    }
	    else{
	        $('.row_nav').removeClass('row_nav_2');
	        rownav=0;
	    }
	});
	$('.navbar_row').on('click',function(){
	    $('.row_nav').removeClass('row_nav_1');
	        $('.row_nav').removeClass('row_nav_2');
	        rownav=0;
	});

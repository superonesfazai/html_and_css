/*
Symmetry - Coming Soon Page
Author: AsceticDesigners
Version: 1.0
Email: md.ashiful.haque@gmail.com
*/
(function($){
	'use strict';
	/*============= Full page scroll ===========*/
	function fullPageSectiona(){
		$('#fullpage').fullpage({
			scrollingSpeed: 800,
			autoScrolling: true,
			scrollBar: true,
			easing: 'easeInQuart',
			resize : false,
			responsiveWidth: 970
		});
		
		$('.scroll-btn a').on('click', function(event){
			event.preventDefault();
			$.fn.fullpage.moveSectionDown();
		});
	}
	
/*============= Welcome section count down ===========*/
	
	function countDown(){
		$("#count-down-wrapper").countdown({
			date: "1 january 2017 09:00:00", // Change this to your desired date to countdown to
			format: "on"
		});
	} 
	 
	/*============= linked click function ===========*/ 
	function linkedClick(){
		 $('.angle-links a.angle-link-left, .angle-links a.angle-link-right').on('click', function(event){
				event.preventDefault();
				var $this = $(this),
					$id = $this.data("id");
				 $('.angle-links a.angle-link-left, .angle-links a.angle-link-right').removeClass("active");	
				$this.addClass("active");	
				$('.linked-content').attr("id",$id);
				console.log($id);
			});
	} 
	
	/*============= Fetured single items hover function ===========*/ 
	function feturedHover(){
		$(".single-fetured").hover(function(){
			$(".single-fetured").removeClass("active");
			$(this).addClass("active");
		});
	}
	/*============= WOW JS INSTALL ===========*/
function WowJsInitT(){
	new WOW().init();
	
}	/*============= jParticle Effect JS INSTALL ===========*/
function jParticleEffect(){
	$(".particle-effect").jParticle({
		background: "rgba(0, 0, 0, 0) none repeat scroll 0 0",
		color: "rgba(243, 204, 41,0.5)"
	});
}

/*============= All function variable call ===========*/	
 
$(function(){
	if (typeof fullPageSectiona == 'function'){ 
			fullPageSectiona(); 
		}
	if (typeof countDown == 'function'){ 
			countDown(); 
		}
	if (typeof linkedClick == 'function'){ 
			linkedClick(); 
		}
	if (typeof feturedHover == 'function'){ 
			feturedHover(); 
		}	
	if (typeof WowJsInitT == 'function'){ 
			WowJsInitT(); 
		}	
	if (typeof jParticleEffect == 'function'){ 
			jParticleEffect(); 
		}	
	
});

/*============= preloder ===========*/	
$(window).load(function(){
	$("#loader-wrapper").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
	$("body").removeClass("preloder_priview");
});

})(jQuery);  

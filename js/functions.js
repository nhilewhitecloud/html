(function($){
	$(document).ready(function (){

		$('.az-mntop-icon').click(function(){
			$('.az-menutop').toggle(300);
		});

		var azswiper = new Swiper('.az-swiper', {
			slidesPerView: 1,
			spaceBetween: 0,
			pagination: '.az-swiper .swiper-pagination',
			paginationClickable: true,
			preventClicks: false,
			preventClicksPropagation: true,
			autoplay: 3000,
			autoplayDisableOnInteraction: false
		});

	});

/* optional triggers
	$(window).load(function() {
		});
	$(window).resize(function() {
		});
*/
})(window.jQuery);
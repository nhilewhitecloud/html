(function($){
	$(document).ready(function (){
        /*HEADER*/
        $('.kmt-iconsearch-mobi').click(function(){
            $('.kmt-search-site').toggle(300);
        });

        $('.ip-pif-label1').click(function(){
            $('.ip-pif-box').hide(150);
        });
        $('.ip-pif-label2').click(function(){
            $('.ip-pif-box').show(150);
        });

        var newSwiper = new Swiper('.kmt-news-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 60,
            paginationClickable: true,
            pagination: '.kmt-news-swiper .swiper-pagination',
            preventClicks: false,
            preventClicksPropagation: true
        });

        var ipswipershop = new Swiper('.ipswipershop', {
            slidesPerView: 1,
            spaceBetween: 5,
            paginationClickable: true,
            nextButton: '.ipswipershop .swiper-button-next',
            prevButton: '.ipswipershop .swiper-button-prev',
            preventClicks: false,
            preventClicksPropagation: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: false
        });

        wow = new WOW({
            animateClass: 'animated',
            offset:       100
        });
        wow.init();



	});
})(window.jQuery);

(function($){
	$(document).ready(function (){
        /*HEADER*/
        $('.kmt-iconsearch-mobi').click(function(){
            $('.kmt-search-site').toggle(300);
        });

        /*MAIN*/
        $('#nd5-counter-num').countdown('2015/9/10 12:34:56', function(event) {
            $(this).html(event.strftime('CÒN <i>%D</i>  NGÀY <i> %H:%M:%S </i>'));
        });

        var swiper = new Swiper('.nd5-news-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 60,
            pagination: '.swiper-pagination',
            paginationClickable: true
        });



	});



    $(window).scroll(function() {

        $('.nd5-box1 .nd5-boxing').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("fadeInRight animated");
                $(this).css("opacity","1");
            }
        });

        $('.nd5-box1 .nd5-box1-info').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("fadeInLeft animated");
                $(this).css("opacity","1");
            }
        });


        $('.nd5-box2 .nd5-box2-info').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("fadeInRight animated");
                $(this).css("opacity","1");
            }
        });

        $('.nd5-box2 .nd5-boxing').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("fadeInLeft animated");
                $(this).css("opacity","1");
            }
        });

        $('.nd5-box3 .nd5-boxing').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("fadeInRight animated");
                $(this).css("opacity","1");
            }
        });

        $('.nd5-box3 .nd5-box3-info').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("fadeInLeft animated");
                $(this).css("opacity","1");
            }
        });

        $('.nd5-box4 .nd5-box4-info').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("fadeInRight animated");
                $(this).css("opacity","1");
            }
        });

        $('.nd5-box4 .nd5-boxing').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("fadeInLeft animated");
                $(this).css("opacity","1");
            }
        });

        $('.nd5-box5').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("fadeInUp animated");
                $(this).css("opacity","1");
            }
        });

    });


/*
    $(window).load(function() {
    });
    $(window).resize(function() {
    });
*/
})(window.jQuery);

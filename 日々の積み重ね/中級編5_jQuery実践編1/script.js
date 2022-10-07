$(function(){
    $('.scroll-btn').hide();
    $('.nav-course').hide();


    $('#nav-course-item').hover(
        function(){
            $('.nav-course').slideDown();
        },
        function(){
            $('.nav-course').slideUp();           
        }
    );

    $('#nav-course-item').click(function(){
        $('.nav-course').toggle('fast');
    });

    $(window).scroll(function(){

        var windowTop = $(window).scrollTop();

        if(windowTop < 400){
            $('.scroll-btn').fadeOut(300);
        } else{
            $('.scroll-btn').fadeIn(300);

        };
        });

        $('.scroll-btn').click(function(){
            $('body,html').animate({scrollTop:0} ,500);
        });


});
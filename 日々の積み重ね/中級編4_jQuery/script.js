$(function(){
    // $('h2').text('デイトラ');
    // $('a').hide();

    // const status = $('#user-status').val();
    // const button = $('#register');

    // if(status === "visiter"){
    //     button.text('登録');
    //     button.removeClass('btn-login');
    //     button.addClass('btn-register');
    // } else if(status === 'user'){
    //     button.text('ログイン');
    //     button.removeClass('btn-register');
    //     button.addClass('btn-login');
    //     $('.login-area').append('<a href="https://tokyofreelance.jp/" class="btn btn-withdraw">退会</a>')

    // }

    // var links = $('#js-for-web').find('a');
    // console.log(links[0]);

    $('#button').click(function(){
        $('#service-title').text('クリックされた');

    });

    $('#service-title').hover(
        function(){
            $('#service-title').css('color','orange');
            $('#register').slideDown();
            $('#button').fadeIn();

        },
        function(){
            $('#service-title').css('color','black');
            $('#register').slideUp();
            $('#button').fadeOut();
        }
    );
});

// $(function(){
//     var links = $('#js-for-web').children('a');
//     console.log(links[0]);
// });
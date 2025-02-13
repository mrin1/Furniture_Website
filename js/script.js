$(document).ready(function(){
    $('.icon').click(function(){
        $('.icon').toggleClass('fa-xmark');
        $('.nav-menu ul').slideToggle(1000);
    });
    $(window).resize(function(){
        if($(document).width() <= 767){
            $('.nav-menu ul').hide();
        }
        if($(document).width() > 767){
            $('.nav-menu ul').show();
        }
    });
});
$(function(){
    // search section start
        
    $('.search_show_btn').on('click', ()=>{
        $('#search').addClass('show');
    });
    $('.search_hide_btn').on('click', ()=>{
        $('#search').removeClass('show');
    });
    // card section start
    $('.card_show_btn').on('click', ()=>{
        $('#card').addClass('show');
    });
    $('.card_hide_btn').on('click', ()=>{
        $('#card').removeClass('show');
    });
    // pop up section
    $('.pop_up_hide_btn').on('click',()=>{
        $('#pop_up').addClass('hide');
    })
   // banner section
    $('.banner_slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.banner_slider_dots_container'),
        dotsClass:'banner_slider_dots',
        autoplay:true,
        autoplaySpeed:3000,
        fade: true,
        speed:1000,
      });
})



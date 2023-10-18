$(function() {
    let btnWish = $('.btn-wish')
    let btn = $('.btn')
    btn.on('click', function() {
        $(this).toggleClass('active');
            if($(this).hasClass('active')) {
                $(this).attr({src:'img/list-black-heart.png'})
            } else {
                $(this).attr({src:'img/list-white-heart.png'})
            }
    })
})
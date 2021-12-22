$('.controls .buttons').click(function(){
    $(this).addClass('button-active').siblings().removeClass('button-active');
    let filter = $(this).attr('data-filter');
    if(filter == 'all'){
        $('.order .image').show(400);
    }else{
        $('.order .image').not('.'+filter).hide(200);
        $('.order .image').filter('.'+filter).show(400);
    }
});
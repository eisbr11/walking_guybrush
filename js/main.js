var animation_mover = {

    init : function(){
        $('input#left').on('click', function(){
            animation_mover.move_to_left($('.guybrush'));
        });
        $('input#right').on('click', function(){
            animation_mover.move_to_right($('.guybrush'));
        });
        $('input#stand').on('click', function(){
            animation_mover.stand($('.guybrush'));
        });
    },
    move_to_left : function(gb){
        gb.stop().removeClass('stand').removeClass('right').addClass('walk').addClass('left');
        animation_mover.move_right_pix(gb, -80);
    },

    move_to_right : function(gb) {
        gb.stop().removeClass('stand').removeClass('left').addClass('walk').addClass('right');
        animation_mover.move_right_pix(gb, 80);
    },
    
    stand : function(gb) {
        gb.stop().removeClass('walk').removeClass('left').removeClass('right').addClass('stand');
    },
    
    move_right_pix : function(gb, pix){
        gb.animate({left: "+=" + pix + "px"},500, 'linear', function(){
            animation_mover.move_right_pix(gb, pix);
        });
    }
}

$(function() {
    animation_mover.init();
});
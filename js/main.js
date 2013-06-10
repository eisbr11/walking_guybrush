var animation_mover = {

    init : function(){
        $('input#left').on('click', function(){
            animation_mover.move_to_left($('.guybrush'));
        });
        $('input#right').on('click', function(){
            animation_mover.move_to_right($('.guybrush'));
        });
    },
    move_to_left : function(gb){
        gb.stop().removeClass('right').addClass('left');
        animation_mover.move_right_pix(gb, -80);
    },

    move_to_right : function(gb) {
        gb.stop().removeClass('left').addClass('right');
        animation_mover.move_right_pix(gb, 80);
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
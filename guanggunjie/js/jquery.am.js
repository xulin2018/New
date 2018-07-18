/**
 * Function:__frames_animation
 * author: Trent
 * date:2015-3-5
 * history:repeat 2015.10.21
 *
 */
;(function($){
    var rounder = 1,
    __frames_animation = function(opt){//TODO多帧,传参数
        var $t = $(opt.target),
            keyframes = opt.keyframes,
            time = opt.time,
            class_head = opt.class_head,
            times_arr = [],
            timer = null,
            timer_reload = null
        ;
        $t.prop('keyframes',true);
        var i = 0;
        if(opt.starti){
            i =opt.starti;
        }
        for (;i<keyframes;i++){
            times_arr.push(class_head+'_'+i);
        }
        // console.log(times_arr)
        $t.removeClass(times_arr.join(' '));
        $.each(times_arr,function(index,item){
            var timer = setTimeout(function(){
                $t.addClass(item);
            },time*(index+1));
        });
        // setTimeout(function(){
        //     $t.addClass('y_1');
        // },100);
        // setTimeout(function(){
        //     $t.addClass('y_2');
        // },200);
        // setTimeout(function(){
        //     $t.addClass('y_3');
        // },300);
        // setTimeout(function(){
        //     $t.addClass('y_4');
        // },400);
        // setTimeout(function(){
        //     $t.addClass('y_5');
        // },500);
        // setTimeout(function(){
        //     $t.addClass('y_6');
        // },600);
        // setTimeout(function(){
        //     $t.addClass('y_7');
        // },700);
        // setTimeout(function(){
        //     $t.addClass('y_8');
        // },800);
        // setTimeout(function(){
        //     $t.addClass('y_9');
            
        // },900);
        timer_reload = setTimeout(function(){
            clearTimeout(timer);
            if(opt.rounder){
                if(opt.rounder&&rounder<opt.rounder){
                    __frames_animation(opt);
                }else{
                    clearTimeout(timer_reload);
                    $t.prop('keyframes',false);
                    if(opt.callback){
                        opt.callback();
                    }
                }
            }else{
                __frames_animation(opt);
            }

            rounder++;
        },opt.duration||(time*keyframes+100));
    }
    $.extend({
        'framesAnimation':function(opt){
            var defaults = {
            }
            ;
            opt = $.extend({}, defaults, opt||{});
            __frames_animation(opt);
            return false;
        }
    });
    $.fn.extend({
        'framesAnimation':function(opt){
            var defaults = {
            }
            ;
            opt = $.extend({}, defaults, opt||{});
            return this.each(function(inx,item){
                opt.target=this;
                $.framesAnimation(opt);
            });
        }
    });
})(jQuery);
$(function () {
    /*1.全屏切换的初始化*/
    $('.container').fullpage({
        /*2.不垂直居中*/
        verticalCentered: false,
        /*3.设置背景颜色*/
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        /*4.设置指示器*/
        navigation: true,
        /*屏动画切换的时间*/
        scrollingSpeed:1500,
        /*5.点击更多切换下一屏*/
        /*在插件没有初始化成功的时候 去调用插件的功能可能调用不了*/
        /*等插件初始化成功*/
        afterRender: function () {
            $('.more').on('click', function () {
                /*切换下一页*/
                /*jquery的插件封装机制  基于  $.fn.fullpage */
                $.fn.fullpage.moveSectionDown();
            });
        },
        /*6.跟多按钮的  显示隐藏功能*/
        /*当离开某一屏都要动画的隐藏  当进入下一屏的时候显示*/
        /*什么时候离开  什么时候进入*/
        onLeave: function (index, nextIndex, direction) {
            /*当离开某一个屏幕触发  当前离开的屏幕的序号  下一个进入的屏幕的序号  切换的方向*/
            $('.more').fadeOut();
            /*确定是第2到第3*/
            if(index == 2 && nextIndex == 3){
                $('.screen02').find('.sofa').addClass('animated');
            }else if(index == 3 && nextIndex == 4){
                /*1.隐藏横的沙发*/
                /*2.显示斜的沙发*/
                $('.screen03').find('.sofa').hide().siblings('.skewSofa').show().addClass('animated').on('animationend',function () {
                    /*3.斜沙发掉下之后显示 购物车当中的沙发*/
                    /*jquery animate(需要动画的属性类型是对象，动画的时间，动画的速度（swing,linear），动画结束的回调函数)*/
                    /* animationend  事件 动画结束事件*/
                    /* transitionend  事件 过渡结束事件*/
                    $('.screen04').find('.sofaImg').show();
                    $('.screen04').find('.cart').addClass('animated').on('animationend',function () {
                        /*4.显示收货地址的文字 上*/
                        $('.screen04').find('.text img').hide().eq(1).show();
                        /*5.显示收货地址容器*/
                        $('.screen04').find('.address').fadeIn(1000,function () {
                            /*6.显示收货地址文字 下*/
                            $('.screen04').find('.address .addressImg').fadeIn();
                        });

                    });
                });
            }
        },
        afterLoad: function (link, index) {
            /*当完全进入某一屏的时候触发  link导航链接  index当前屏序号 */
            $('.more').fadeIn();
            /*实现动画  过渡和动画的原理：只有属性发生改变触发动画 */
            /*过渡怎么改变属性  动画怎么加上animation*/
            $(this).addClass('selected');
        }
    });
});
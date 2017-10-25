$(function () {
   //全屏切换的初始化
   $(".container").fullpage({
       //不垂直居中
       verticalCentered: false,
       //设置背景颜色
       sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        //设置指示器
       navigation:true,
       //屏动画切换时间
       scrollingSpeed:1500,
       /*点击更多切换下一屏*/
       /*在插件没有初始化成功的时候 去调用插件的功能可能调用不了*/
       /*等插件初始化成功*/
       afterRender: function () {
           $(".more").on("click", function () {
           //    切换下一页
           //    jquery的插件封装机制 基于$.fn.fullpage
               $.fn.fullpage.moveSectionDown();
           });
       //    第五屏的鼠标效果
           $(".screen05 .handImg").on("transitionend", function () {
              $(".screen05 .mouse02Img").show();
           });
       //    第八屏的效果 手跟着鼠标动
           $(".screen08").on("mousemove", function (e) {
              $(this).find(".hand").css({
                  left: e.clientX+20,
                  top: e.clientY+20
              });
           //    进入开始购物按钮 显示gif那张按钮
           }).find(".btn").on("mouseenter", function () {
               $(this).find(".btn02Img").show().siblings().hide();
           }).on("mouseleave", function () {
               $(this).find(".btn02Img").hide().siblings().show();
           }).siblings(".again").on("click", function () {
           //    跳到第一屏 清空所有动画
               $.fn.fullpage.moveTo(1);
               /*当前例子 实现动画有三个方式*/
               /*1. animated */
               /*2. jquery show() fadeIn()  会给当前元素添加行内样式 */
               /*3. selected*/
               /*干掉它们*/
               /*$node.remove() $node 自杀 */
               /*$node.empty() $node  清理门户 */
               $(".animated").removeClass("animated");
               $(".section [style]").removeAttr("style");
               $(".selected").removeClass("selected");
           })
       },
       /*更多按钮的  显示隐藏功能*/
       /*当离开某一屏都要动画的隐藏  当进入下一屏的时候显示*/
       /*什么时候离开  什么时候进入*/
       onLeave: function (index,nextIndex,direction) {
           /*当离开某一个屏幕触发  当前离开的屏幕的序号  下一个进入的屏幕的序号  切换的方向*/
           $(".more").fadeOut();
           if(index==2 && nextIndex==3){
               $(".screen02").find(".sofa").addClass("animated");
           }else if(index==3 && nextIndex==4){
           //    隐藏横的沙发，显示斜的沙发
               $(".screen03").find(".sofa").hide().siblings(".skewSofa").show().addClass("animated").on("animationend", function () {
               //    斜沙发掉下来之后显示 购物车当中的沙发
               //    jquery中的animate(需要动画的属性 类型是对象, 动画的事件 , 动画的速度 swing linear , 动画结束的回调函数)
               //    animationend 事件 动画结束事件
               //    transitionend 事件 过渡结束事件
                   $(".screen04").find(".sofaImg").show();
                   $(".screen04").find(".cart").addClass("animated").on("animationend", function () {
                   //    显示购物车上边的文字
                       $(".screen04").find(".text img").hide().eq(1).show();
                   //    显示收货地址的容器
                       $(".screen04").find(".address").fadeIn(1000, function () {
                       //    显示收货地址
                           $(".screen04").find(".address .addressImg").fadeIn();
                       });
                   });
               });
           }else if(index==5 && nextIndex==6){
               $(".screen05 .sofa").addClass("animated");
           //    为了让离开第五屏的时候就立马执行selected的动画
               $(".screen06").parent().addClass("selected");
           }else if(index==6 && nextIndex==7){
           //    星星动画
               $(".screen07 .start img").each(function(i,e){
                  // delay() 在执行动画之前使用 单位是毫秒
                   //fadeIn 默认值是400 slow normal fast
                   $(e).delay(500*i).fadeIn();
               //    延时     0s 0.5s 1s 1.5s 2s 2.5s
               //    动画时间 0.4s
               });
               $(".screen07 .text").addClass("animated");
           }
       },
       afterLoad: function (link,index) {
           /*当完全进入某一屏的时候触发  link导航链接  index当前屏序号 */
           $(".more").fadeIn();
           $(this).addClass("selected");
       }
   });
});

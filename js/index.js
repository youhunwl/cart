$(function () {
   //ȫ���л��ĳ�ʼ��
   $(".container").fullpage({
       //����ֱ����
       verticalCentered: false,
       //���ñ�����ɫ
       sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        //����ָʾ��
       navigation:true,
       //�������л�ʱ��
       scrollingSpeed:1500,
       /*��������л���һ��*/
       /*�ڲ��û�г�ʼ���ɹ���ʱ�� ȥ���ò���Ĺ��ܿ��ܵ��ò���*/
       /*�Ȳ����ʼ���ɹ�*/
       afterRender: function () {
           $(".more").on("click", function () {
           //    �л���һҳ
           //    jquery�Ĳ����װ���� ����$.fn.fullpage
               $.fn.fullpage.moveSectionDown();
           });
       //    �����������Ч��
           $(".screen05 .handImg").on("transitionend", function () {
              $(".screen05 .mouse02Img").show();
           });
       //    �ڰ�����Ч�� �ָ�����궯
           $(".screen08").on("mousemove", function (e) {
              $(this).find(".hand").css({
                  left: e.clientX+20,
                  top: e.clientY+20
              });
           //    ���뿪ʼ���ﰴť ��ʾgif���Ű�ť
           }).find(".btn").on("mouseenter", function () {
               $(this).find(".btn02Img").show().siblings().hide();
           }).on("mouseleave", function () {
               $(this).find(".btn02Img").hide().siblings().show();
           }).siblings(".again").on("click", function () {
           //    ������һ�� ������ж���
               $.fn.fullpage.moveTo(1);
               /*��ǰ���� ʵ�ֶ�����������ʽ*/
               /*1. animated */
               /*2. jquery show() fadeIn()  �����ǰԪ�����������ʽ */
               /*3. selected*/
               /*�ɵ�����*/
               /*$node.remove() $node ��ɱ */
               /*$node.empty() $node  �����Ż� */
               $(".animated").removeClass("animated");
               $(".section [style]").removeAttr("style");
               $(".selected").removeClass("selected");
           })
       },
       /*���ఴť��  ��ʾ���ع���*/
       /*���뿪ĳһ����Ҫ����������  ��������һ����ʱ����ʾ*/
       /*ʲôʱ���뿪  ʲôʱ�����*/
       onLeave: function (index,nextIndex,direction) {
           /*���뿪ĳһ����Ļ����  ��ǰ�뿪����Ļ�����  ��һ���������Ļ�����  �л��ķ���*/
           $(".more").fadeOut();
           if(index==2 && nextIndex==3){
               $(".screen02").find(".sofa").addClass("animated");
           }else if(index==3 && nextIndex==4){
           //    ���غ��ɳ������ʾб��ɳ��
               $(".screen03").find(".sofa").hide().siblings(".skewSofa").show().addClass("animated").on("animationend", function () {
               //    бɳ��������֮����ʾ ���ﳵ���е�ɳ��
               //    jquery�е�animate(��Ҫ���������� �����Ƕ���, �������¼� , �������ٶ� swing linear , ���������Ļص�����)
               //    animationend �¼� ���������¼�
               //    transitionend �¼� ���ɽ����¼�
                   $(".screen04").find(".sofaImg").show();
                   $(".screen04").find(".cart").addClass("animated").on("animationend", function () {
                   //    ��ʾ���ﳵ�ϱߵ�����
                       $(".screen04").find(".text img").hide().eq(1).show();
                   //    ��ʾ�ջ���ַ������
                       $(".screen04").find(".address").fadeIn(1000, function () {
                       //    ��ʾ�ջ���ַ
                           $(".screen04").find(".address .addressImg").fadeIn();
                       });
                   });
               });
           }else if(index==5 && nextIndex==6){
               $(".screen05 .sofa").addClass("animated");
           //    Ϊ�����뿪��������ʱ�������ִ��selected�Ķ���
               $(".screen06").parent().addClass("selected");
           }else if(index==6 && nextIndex==7){
           //    ���Ƕ���
               $(".screen07 .start img").each(function(i,e){
                  // delay() ��ִ�ж���֮ǰʹ�� ��λ�Ǻ���
                   //fadeIn Ĭ��ֵ��400 slow normal fast
                   $(e).delay(500*i).fadeIn();
               //    ��ʱ     0s 0.5s 1s 1.5s 2s 2.5s
               //    ����ʱ�� 0.4s
               });
               $(".screen07 .text").addClass("animated");
           }
       },
       afterLoad: function (link,index) {
           /*����ȫ����ĳһ����ʱ�򴥷�  link��������  index��ǰ����� */
           $(".more").fadeIn();
           $(this).addClass("selected");
       }
   });
});

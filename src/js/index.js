$(document).ready(function () {
    //轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      }) 

      //选项卡
      $('.banner .container ul li').mouseover(function(){
        if($(this).index()>=2){
        $('.banner aside').css('display','block').children().eq($(this).index()-2).addClass('active').siblings().removeClass('active')
        }
      })
      $('.banner .swiper-container').mouseenter(function(){
        $('.banner aside').css('display','none') 
      })
      $('.banner aside').mouseleave(function(){
        $(this).css('display','none') 
      })

      //切换到列表页面
      
   })
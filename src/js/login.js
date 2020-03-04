$('.loginBox .login ul').children().on('click',function(){
    $(this).addClass('active').siblings().removeClass('active')
    $('.loginBox .login ol').children().eq($(this).index()).addClass('active').siblings().removeClass('active')
})
$('.btn-login').click(function(e){
    e.preventDefault()
    $.ajax({
        url:'/login',
        method:'get',
        data:{
            'telNumber':$('.telNumber').prop('value'),
            'pwd':$('.pwd').prop('value')
        },
        datatype:'json',
        success:function(res){
            let result=JSON.parse(res);
            if(result["status"]){
                //登录成功就跳转到首页
                location.href='./index.html'
            }else{
                //用户或者密码错误
            }
        }
    })
})
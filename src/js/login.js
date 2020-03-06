//选项卡
$('.loginBox .login ul').children().on('click',function(){
    $(this).addClass('active').siblings().removeClass('active')
    $('.loginBox .login ol').children().eq($(this).index()).addClass('active').siblings().removeClass('active')
})
//登录功能
$('.btn-login').click(function(e){
    e.preventDefault()
    $.ajax({
        url:'/login',
        method:'get',
        data:{
            'username':$('.username').prop('value'),
            'pwd':$('.pwd').prop('value')
        },
        datatype:'json',
        success:function(res){
            let result=JSON.parse(res);
            if(result["status"]){
                //登录成功就跳转到首页
                location.href='./index.html'
            }else{
                alert('你输入的用户名或者密码错误!')
            }
        }
    })
})
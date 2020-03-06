
//注册功能
$('.btn-register').click(function(e){
    e.preventDefault()
    $.ajax({
        url:'/register',
        method:'get',
        data:{
            'username':$('.username').prop('value'),
            'pwd':$('.pwd').prop('value')
        },
        datatype:'json',
        success:function(res){
            let result=JSON.parse(res);
            if(result["status"]){
                //注册成功就跳转到登录页面
                location.href='./login.html'
            }
            //注册失败没写
        }
    })
})
//把localstorage中的数据先渲染到页面上
setData()
//渲染页面的函数 传参是一个数组,数组的中的每个数据都是对象
function setData(){
    // 获取localstorage中的数据
    let arr=JSON.parse(localStorage.getItem('cart'))
    let str=''
    if(arr&&arr[0]){// 如果cart中有数据
        arr.forEach(item => {
            str+=`<tr data-id=${item.ItemCode}><td><input type='checkbox'></td><td><img src='//img01.hua.com/uploadpic/newpic/${item.ItemCode}.jpg_80x87.jpg'></td><td class='orange'>${item.Cpmc}</td><td><s>${item.LinePrice}</s></td><td class='orange'>${item.Price}</td><td><input type='button' value='-' class="btn btn-danger minus"><input type='text' value=${item.num} class="form-control"><input type='button' value='+' class="btn btn-primary plus"></td><td>${item.num*item.Price}</td><td><button class="btn btn-danger del">删除</button></td></tr>`
            $('tbody').html(str)
        });
        total()
    }else{//当cart中没有数据
        str='<h3><a class="orange" href="./list.html">购物车中什么也没有,快去加购吧</a><h3>'
        // $('table').remove()
        // $('p').remove()
        $('.cartBox').empty().html(str)
    }
    
}
//减少数量
$('.container table tr td .minus').click(function(){
    let id=$(this).parents('tr').data('id')
    let arr=JSON.parse(localStorage.getItem('cart'))
    arr.forEach(function(item){
        if(item.ItemCode==id){
            if(item.num===1){//数量是1
                alert('数量已经是最小了')
            }else{
                item.num-=1
            }
        }
    })
    localStorage.setItem('cart',JSON.stringify(arr))
    setData()
    location.reload()
})
//增加数量
$('.container table tr td .plus').click(function(){
    let id=$(this).parents('tr').data('id')
    let arr=JSON.parse(localStorage.getItem('cart'))
    arr.forEach(function(item){
        if(item.ItemCode==id){
            item.num+=1
        }
    })
    localStorage.setItem('cart',JSON.stringify(arr))
    setData()
    location.reload()
})
//删除按钮
$('.container table tr td .del').click(function(){
    let id=$(this).parents('tr').data('id')
    let arr=JSON.parse(localStorage.getItem('cart'))
    arr.forEach(function(item,index,array){
        if(item.ItemCode==id){
            array.splice(index,1)
        }
    })
    localStorage.setItem('cart',JSON.stringify(arr))
    setData()
    location.reload()
})
//全选反选
$(function(){
    $("thead #checkAll").bindCheck($("tbody :checkbox"),$("#unCheck"));
});
//计算总数,计算总件数
function total(){
    let arr=JSON.parse(localStorage.getItem('cart'))
    let allNum=0
    let allPrice=0
    arr.forEach(function(item){
        allNum+=item.num
        allPrice+=item.num*item.Price
    })
    $('.container p').html(`<span>共计:&nbsp;&nbsp;&nbsp;${allNum}&nbsp;&nbsp;&nbsp;件，</span>共计:&nbsp;&nbsp;&nbsp;${allPrice}&nbsp;&nbsp;&nbsp;元<span></span>`)
}
//清空购物车
$('.delAll .btn').click(function(){
    localStorage.removeItem('cart')
    setData()
})

let pageIndex=1;
let arr=[];
//列表中的数据
function getData(){
    $.ajax({
        data:'itemcodes=9010966%2C9012450%2C9012177%2C9012154%2C9010969%2C9012009%2C9010011%2C9012455%2C9012243%2C9012332%2C9012452%2C9012451%2C9012089%2C9010849%2C9010731%2C9012223%2C9012441%2C9012446%2C9012175%2C9010855%2C9010947%2C9010736%2C9012055%2C9012345%2C9012092%2C9012201%2C9012440%2C9012060%2C9012009%2C9010877%2C9010969%2C9092117%2C9012055%2C9012458%2C9012457%2C9012456%2C9012455%2C9012454%2C9012453%2C9012452%2C9012451%2C9012450%2C9012449%2C9012448%2C9012447%2C9012446%2C9012441%2C9012440%2C9012438%2C9012437%2C9012436%2C9012435%2C9012434%2C9012433%2C9012432%2C9012431%2C9012430%2C9012415%2C9012414%2C9012413%2C9012412%2C9012009%2C9010877%2C9010969%2C9092117%2C9012055%2C9010999%2C9012287%2C9010609%2C9012291%2C9012292%2C9012286%2C9012281%2C9010917%2C9012285%2C9012284%2C9012283%2C9010620%2C9012274%2C9092120%2C9092112%2C9012275%2C9012149%2C9012148%2C9012061%2C9012335%2C9012300%2C9012299%2C9012298%2C9012297%2C9012296%2C9012295%2C9012294%2C9012293%2C9012009%2C9010877%2C9010969%2C9092117%2C9012055%2C9010846%2C&perf=v0%2C200%2C1583314929485%2C258',
        url:'/data',
        type:"post",
        success:function(res){
            arr=res.Datas.ProductPrices;
            //将销量中的万变成数字
            arr.forEach(function(item,index){
                if(item.Sales.slice(-1)==='万'){
                    item.Sales=item.Sales.slice(0,-1)*10000
                }
            })
            //分页功能
            $('.paginationBox').pagination({
                pageCount: 7,
                jump: true,
                coping: true,
                homePage: '首页',
                endPage: '末页',
                prevContent: '上页',
                nextContent: '下页',
                current:1,
                callback: function (api) {//触发才会执行的
                    pageIndex=api.getCurrent()
                    let arr2=arr.slice((pageIndex - 1) * 16,pageIndex*16)
                    setData(arr2)
                }
                
            });
            setData(arr.slice(0,16))
        }
    })
}
getData()
//渲染页面函数 传参是要渲染进去的数据,数组格式的
function setData(arr){
    let str=''
    arr.forEach(function(item){
        str+=`<li><img src='//img01.hua.com/uploadpic/newpic/${item.ItemCode}.jpg_220x240.jpg'><p>￥${item.Price}</p><div>${item.Cpmc}-${item.Instro}</div><button>加入购物车</button></li>`
    })
    $('aside .container ul').html(str)
}

//点击综合按钮  变成初始状态
$('.btn-all').click(function(){
    getData()
})
//点击销量按钮,变成按销量排序
let a=true;
$('.btn-sells').click(function(){
    //将销量中的万变成数字
    a=!a;//每次都取下反
    arr.sort(function(n1,n2){
        if(a){
            return n1.Sales-n2.Sales
        }else{
            return n2.Sales-n1.Sales
        }
    })
    $('.paginationBox').pagination({
        pageCount: 7,
        jump: true,
        coping: true,
        homePage: '首页',
        endPage: '末页',
        prevContent: '上页',
        nextContent: '下页',
        current:1,
        callback: function (api) {//触发才会执行的
            pageIndex=api.getCurrent()
            let arr2=arr.slice((pageIndex - 1) * 16,pageIndex*16)
            setData(arr2)
        }
        
    });
    setData(arr.slice(0,16))
})
//价格排序
$('.btn-price').click(function(){
    //将销量中的万变成数字
    a=!a;//每次都取下反
    arr.sort(function(n1,n2){
        if(a){
            return n1.Price-n2.Price
        }else{
            return n2.Price-n1.Price
        }
    })
    $('.paginationBox').pagination({
        pageCount: 7,
        jump: true,
        coping: true,
        homePage: '首页',
        endPage: '末页',
        prevContent: '上页',
        nextContent: '下页',
        current:1,
        callback: function (api) {//触发才会执行的
            pageIndex=api.getCurrent()
            let arr2=arr.slice((pageIndex - 1) * 16,pageIndex*16)
            setData(arr2)
        }
        
    });
    setData(arr.slice(0,16))
})
//获取localstorage里面的数据
let obj=JSON.parse(localStorage.getItem('detail'))
$('article .container h4').text(obj.Cpmc)
$('article .container .box img').attr('src',`//img01.hua.com/uploadpic/newpic/${obj.ItemCode}.jpg_220x240.jpg`)
$('article .container .box aside h5').text(`${obj.Cpmc}--${obj.Instro}`)
$('article .container .box aside span span').text(`${obj.Sales}`)
$('article .container .box aside ul li span').eq(1).text(`${obj.ItemCode}`)
$('article .container .box aside ul li span').eq(2).text(`${obj.Instro}`)
$('article .container .box aside p span').text(`￥${obj.Price}`)
$('article .container .box aside p s').text(`原价￥${obj.LinePrice}`)

//点击添加到购物车
$('article .container .box aside button').click(function(){
    addProduct(obj.ItemCode)
})
let arr=[]
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
    }
})
//添加商品到localstorage中
function addProduct(id){
    //根据id找到对应的数据
    let obj={}
    arr.forEach(function(item){
        if(item.ItemCode==id){
            obj=item
        }
    })
    // 首先判断localStorage中有没有购物车数据
    if(!localStorage.getItem('cart')){//没有购物车数据
        obj.num=1
        let arrProductNew=[]
        arrProductNew.push(obj)
        localStorage.setItem('cart',JSON.stringify(arrProductNew))
    }else{//有购物车数组了
        //再判断有没有这个商品,先取得这个数组
        let arrProduct=JSON.parse(localStorage.getItem('cart'))
        let result=arrProduct.some(function(item){
            return item.ItemCode==id
        })
        if(result){
            arrProduct.forEach(function(item,index){
                if(item.ItemCode==id){
                    item.num+=1
                }
            })
        }else{//没有这个商品
            obj.num=1;
            arrProduct.push(obj)
        }
        //再把数组塞回去
        localStorage.setItem('cart',JSON.stringify(arrProduct))
    }
}

jQuery(function(){
    $(".my-foto").imagezoomsl({  
        innerzoommagnifier: true,
        classmagnifier: window.external ? window.navigator.vendor === "Yandex" ? "" : "round-loupe" : "",
        magnifierborder: "5px solid #F0F0F0", 
        zoomrange: [2, 8],
        zoomstart: 4,
        magnifiersize: [150, 150]		
    });
  });  
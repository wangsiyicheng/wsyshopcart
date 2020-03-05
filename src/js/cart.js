// 获取localstorage中的数据
let arr=JSON.parse(localStorage.getItem('cart'))

//把localstorage中的数据先渲染到页面上
setData(arr)

//渲染页面的函数 传参是一个数组,数组的中的每个数据都是对象
function setData(array){
    let str=''
    // 如果cart中有数据
    if(array){
        array.forEach(item => {
            str+=`<tr><td><input type='checkbox'></td><td><img src='//img01.hua.com/uploadpic/newpic/${item.ItemCode}.jpg_80x87.jpg'><span>${item.Cpmc}</span></td><td>${item.LinePrice}</td><td>${item.Price}</td><td><input type='button' value='-'><input type='text' value=${item.num}><input type='button' value='+'></td><td>${item.num*item.Price}</td><td><button>删除</button></td></tr>`
        });
        $('tbody').html(str)
    }else{//当cart中没有数据

    }
}
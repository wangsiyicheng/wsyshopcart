"use strict";var pageIndex=1,arr=[];function getData(){$.ajax({data:"itemcodes=9010966%2C9012450%2C9012177%2C9012154%2C9010969%2C9012009%2C9010011%2C9012455%2C9012243%2C9012332%2C9012452%2C9012451%2C9012089%2C9010849%2C9010731%2C9012223%2C9012441%2C9012446%2C9012175%2C9010855%2C9010947%2C9010736%2C9012055%2C9012345%2C9012092%2C9012201%2C9012440%2C9012060%2C9012009%2C9010877%2C9010969%2C9092117%2C9012055%2C9012458%2C9012457%2C9012456%2C9012455%2C9012454%2C9012453%2C9012452%2C9012451%2C9012450%2C9012449%2C9012448%2C9012447%2C9012446%2C9012441%2C9012440%2C9012438%2C9012437%2C9012436%2C9012435%2C9012434%2C9012433%2C9012432%2C9012431%2C9012430%2C9012415%2C9012414%2C9012413%2C9012412%2C9012009%2C9010877%2C9010969%2C9092117%2C9012055%2C9010999%2C9012287%2C9010609%2C9012291%2C9012292%2C9012286%2C9012281%2C9010917%2C9012285%2C9012284%2C9012283%2C9010620%2C9012274%2C9092120%2C9092112%2C9012275%2C9012149%2C9012148%2C9012061%2C9012335%2C9012300%2C9012299%2C9012298%2C9012297%2C9012296%2C9012295%2C9012294%2C9012293%2C9012009%2C9010877%2C9010969%2C9092117%2C9012055%2C9010846%2C&perf=v0%2C200%2C1583314929485%2C258",url:"/data",type:"post",success:function(t){(arr=t.Datas.ProductPrices).forEach(function(t,e){"万"===t.Sales.slice(-1)&&(t.Sales=1e4*t.Sales.slice(0,-1))}),$(".paginationBox").pagination({pageCount:7,jump:!0,coping:!0,homePage:"首页",endPage:"末页",prevContent:"上页",nextContent:"下页",current:1,callback:function(t){pageIndex=t.getCurrent(),setData(arr.slice(16*(pageIndex-1),16*pageIndex))}}),setData(arr.slice(0,16))}})}function setData(t){var e="";t.forEach(function(t){e+="<li data-itemcode=".concat(t.ItemCode,"><img src='//img01.hua.com/uploadpic/newpic/").concat(t.ItemCode,".jpg_220x240.jpg'><p>￥").concat(t.Price,"</p><div>").concat(t.Cpmc,"-").concat(t.Instro,"</div><button>加入购物车</button></li>")}),$("aside .container ul").html(e),$("aside .container ul li div").click(function(){detailShow($(this).parents("li").data("itemcode"))}),$("aside .container ul li img").click(function(){detailShow($(this).parents("li").data("itemcode"))}),$("aside .container ul li button").click(function(){addProduct($(this).parents("li").data("itemcode"))})}getData(),$(".btn-all").click(function(){getData()});var a=!0;function detailShow(e){localStorage.setItem("detail","");var a={};arr.forEach(function(t){t.ItemCode==e&&(a=t)}),localStorage.setItem("detail",JSON.stringify(a)),location.href="http://www.wsyhua.com:8080/pages/detail.html"}function addProduct(a){var e={};if(arr.forEach(function(t){t.ItemCode==a&&(e=t)}),localStorage.getItem("cart")){var t=JSON.parse(localStorage.getItem("cart"));t.some(function(t){return t.ItemCode==a})?t.forEach(function(t,e){t.ItemCode==a&&(t.num+=1)}):(e.num=1,t.push(e)),localStorage.setItem("cart",JSON.stringify(t))}else{e.num=1;var n=[];n.push(e),localStorage.setItem("cart",JSON.stringify(n))}}$(".btn-sells").click(function(){a=!a,arr.sort(function(t,e){return a?t.Sales-e.Sales:e.Sales-t.Sales}),$(".paginationBox").pagination({pageCount:7,jump:!0,coping:!0,homePage:"首页",endPage:"末页",prevContent:"上页",nextContent:"下页",current:1,callback:function(t){pageIndex=t.getCurrent(),setData(arr.slice(16*(pageIndex-1),16*pageIndex))}}),setData(arr.slice(0,16))}),$(".btn-price").click(function(){a=!a,arr.sort(function(t,e){return a?t.Price-e.Price:e.Price-t.Price}),$(".paginationBox").pagination({pageCount:7,jump:!0,coping:!0,homePage:"首页",endPage:"末页",prevContent:"上页",nextContent:"下页",current:1,callback:function(t){pageIndex=t.getCurrent(),setData(arr.slice(16*(pageIndex-1),16*pageIndex))}}),setData(arr.slice(0,16))});
// 设置接口路径
var url="http://myyouta.com/mzXL/getOrders";
function get(data){
    // 定义一个变量，接受ajax返回的值
    var json;
    // start
    $.ajax({
        // 设置调用接口的地址
        url:url,
        // 设置参数
        data:data,
        //默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
        async:false,
        // 设置请求方式
        options:"get",
        // 请求成功执行函数
        success:function(res){
            if(res.code==100000){
                // 将获取到的值传递到最外层
                json=res.data;
            }
        },
        error:function(){
            alert("请求失败，请稍后重试");
        }, timeout:3000 
    })
    // 返回参数
    return json
}
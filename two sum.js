// 输入一个数组，一个目标值 
// 返回数组中 相加等于目标值的 索引


function twoSum(arr,tar) {
    var obj ={},
        num=0,
        key =0;

    for( var x=0,l=arr.length;x<l;x++){
        // 遍历目标数组
        num = arr[x];
        // 赋值 num 当前值
        key= target-num;
        // 赋值 key 输入值减去num
        if( typeof  obj[key] == 'number'){ retrun [obj[key],x]}
         // 如果 obj 中存在 key  返回 key 的索引 和当前索引
        obj[key]= num;
        // 将当前值 存入 obj 中
    }

}
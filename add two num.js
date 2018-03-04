// 给两个链表，返回数组各项相加的链表，要求十进一
 // {"val":2,"next":{"val":4,"next":{"val":3,"next":null}}}
function ListNode(cal) {
    this.val= val;
    this.next =null;
}

function addTwoNum(l1,l2) {

     var tem =0;
     // 缓存十进一
     var data =new ListNode(0);
    // 创建目标链表
    var poin = data;
    // 创建指针指向 data

  while (l1||l2||tem){
      // 当链表1  当链表2 和进位存在时
      var val1 = l1?(l1.val!=null?l1.val:0):0;
      var val2 = l2?(l2.val!=null?l2.val:0):0;
      // 赋值链表当前值

      var sun  =val1+ val2 + tem;
       // 缓存 当前总和
      tem= sun>=10?1:0;
      // 计算是否大于时=十
      var info = new ListNode(sun%10);
         // 创建新链表
      poin.next =info;
      // 目标链表中接入新链表
        poin=poin.next;
      // 指针指向下一个
      l1= l1?(l1.next!=null?l1.next:null):null;
      l2= l2?(l2.next!=null?l2.next:null):null;
      // 各自指针指向下一个
  }
  return data.next;

}
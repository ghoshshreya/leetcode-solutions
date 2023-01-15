class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var mergeTwoLists = function (list1, list2) {
  console.log(1);
  let dummyNode = new ListNode(null);
  const tail = dummyNode;
  while (list1?.val || list2?.val) {
    // let updatedVal;
    // if (list1?.val < list2?.val) {
    //   updatedVal = list1.val;
    //   list1 = list1.next;
    // } else if (list2) {
    //   updatedVal = list2.val;
    //   list2 = list2.next;
    // }
    // console.log(updatedVal);
    // if (dummyNode.val !== null) {
    //   dummyNode.val = updatedVal;
    // } else {
    //   tail.next = new ListNode(updatedVal);
    //   tail = tail.next;
    // }
    // break;
    console.log(list1, list2);
    list1 = list1?.next;
    list2 = list2?.next;
  }
  // console.log(dummyNode);
  return null;
};

console.log(
  mergeTwoLists(
    {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
    },
    {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null,
        },
      },
    }
  )
);

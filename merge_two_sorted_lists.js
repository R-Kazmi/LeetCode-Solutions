var mergeTwoLists = function (list1, list2) {
  var newListIni = { val: 0, next: null };
  var newList = newListIni;
  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      newList.next = list1;
      list1 = list1.next;
    } else {
      newList.next = list2;
      list2 = list2.next;
    }
    newList = newList.next;
  }
  newList.next = list1 || list2;
  return newListIni.next;
};

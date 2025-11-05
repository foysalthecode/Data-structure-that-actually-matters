class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    (this.head = null), (this.tail = null), (this.length = 0);
  }

  append(value) {
    const newNode = new Node(value);
    //if the link list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if the link is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  prepend() {}
  insert() {}
  remove() {}
  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr.join(" --> "), " --> null ");
  }
}

const linkedlist = new LinkedList();

linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);

linkedlist.print();

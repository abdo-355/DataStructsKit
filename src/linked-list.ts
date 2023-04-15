// linked list node
export class LinkedListNode {
  value: any;
  next: LinkedListNode | null;

  constructor(val: any) {
    this.value = val;
    this.next = null;
  }
}

export default class LinkedList {
  public head: LinkedListNode;
  public tail: LinkedListNode | null;
  public length: number;

  constructor(val: any) {
    this.head = new LinkedListNode(val);
    this.tail = this.head;
    this.length = 1;
  }

  public add = (val: any) => {
    const newNode = new LinkedListNode(val);

    this.tail!.next = newNode;
    this.tail = newNode;
    this.length++;
  };

  public insert = (index: number, val: any) => {
    const newNode = new LinkedListNode(val);

    if (index <= 0) {
      // add to the beginning if  index is 0
      newNode.next = this.head;
      this.head = newNode;
    } else if (index >= this.length) {
      // add to the end if index equals or is greater than the length
      this.tail!.next = newNode;
      this.tail = newNode;
    } else {
      let temp: LinkedListNode | null = this.head;

      for (let i = 0; i < index - 1; i++) {
        temp = temp!.next;
      }

      newNode.next = temp!.next;
      temp!.next = newNode;
    }

    this.length++;
  };

  public toArray = () => {
    let temp: LinkedListNode | null = this.head;
    const values = [];

    while (temp) {
      values.push(temp.value);
      temp = temp.next;
    }

    return values;
  };
}

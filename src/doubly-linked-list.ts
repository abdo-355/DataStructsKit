export class DoublyLinkedListNode {
  public value: any;
  public prev: DoublyLinkedListNode | null;
  public next: DoublyLinkedListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  public head: DoublyLinkedListNode;
  public tail: DoublyLinkedListNode | null;
  public length: number;

  constructor(value: any) {
    const newNode = new DoublyLinkedListNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  public add = (value: any) => {
    const newNode = new DoublyLinkedListNode(value);

    this.tail!.next = newNode;
    newNode.prev = this.tail;

    this.tail = newNode;
    this.length++;
  };

  public insert = (index: number, value: any) => {
    const newNode = new DoublyLinkedListNode(value);

    if (index <= 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    } else if (index >= this.length - 1) {
      this.add(value);
    } else {
      let temp: DoublyLinkedListNode | null = this.head;

      for (let i = 0; i < index - 1; i++) {
        temp = temp!.next;
      }

      newNode.next = temp!.next;
      newNode.prev = temp;
      temp!.next!.prev = newNode;
      temp!.next = newNode;

      this.length++;
    }
  };

  public delete = (index: number) => {
    if (index <= 0) {
      this.head = this.head.next as DoublyLinkedListNode;
      this.head.prev = null;
    } else if (index >= this.length - 1) {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
    } else {
      let temp: DoublyLinkedListNode | null = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp!.next;
      }

      temp!.prev!.next = temp!.next;
      temp!.next!.prev = temp!.prev;
    }

    this.length--;
  };

  public toArray = () => {
    const values: any[] = [];
    let temp: DoublyLinkedListNode | null = this.head;

    while (temp) {
      values.push(temp.value);
      temp = temp.next;
    }

    return values;
  };

  public has = (value: any) => {
    return this.toArray().includes(value);
  };
}

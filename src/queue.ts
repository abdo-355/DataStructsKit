import { LinkedListNode } from "./linked-list";

export class Queue {
  public first: LinkedListNode | null;
  public last: LinkedListNode | null;
  public size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  public isEmpty = () => {
    return this.size === 0;
  };

  public toArray = () => {
    const items = [];

    let temp = this.first;

    while (temp) {
      items.push(temp.value);
      temp = temp.next;
    }

    return items;
  };

  public peek = () => {
    return this.first!.value;
  };

  public enqueue = (value: any) => {
    const newItem = new LinkedListNode(value);

    // if the queue empty we assign the both the first and last element to it
    if (this.size === 0) {
      this.last = newItem;
      this.first = newItem;
    } else {
      this.last!.next = newItem;
      this.last = newItem;
    }

    this.size++;
    return this;
  };

  public dequeue = () => {
    if (this.size === 0) return;

    let removed: any;
    removed = this.first!.value;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first!.next;
    }

    this.size--;

    return removed;
  };

  public clear = () => {
    this.first = null;
    this.last = null;
    this.size = 0;
    return this;
  };
}

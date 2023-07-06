export default class Stack {
  public items: any[];
  public length: number;

  constructor() {
    this.items = [];
    this.length = 0;
  }

  public peek = () => {
    return this.items[this.length - 1];
  };

  public isEmpty = () => {
    return this.length === 0;
  };

  public push = (value: any) => {
    this.items.push(value);

    this.length++;

    return this;
  };

  public pop = () => {
    if (this.length === 0) return;

    this.length--;
    return this.items.pop();
  };
}

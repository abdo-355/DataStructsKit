type BSTVNodeValue = string | number | Date;

export class BinarySearchTreeNode {
  // the value should be only these so that we can compare them with > and <
  public value: BSTVNodeValue;
  public frequency: number;
  public right: BinarySearchTreeNode | null;
  public left: BinarySearchTreeNode | null;

  constructor(value: BSTVNodeValue) {
    if (!this.isValid(value)) {
      throw new Error(
        `type of Binary search tree node value must be string, number or Date`
      );
    }
    this.value = value;
    this.frequency = 1;
    this.right = null;
    this.left = null;
  }

  private isValid = (value: any) => {
    return (
      typeof value === "string" ||
      typeof value === "number" ||
      value instanceof Date
    );
  };
}

export class BinarySearchTree {
  public root: BinarySearchTreeNode | null;
  public dataType: string | null;

  constructor(value?: BSTVNodeValue) {
    // we don't create a node for the root if not given a value
    if (!value) {
      this.root = null;
      this.dataType = null;
    } else {
      this.root = new BinarySearchTreeNode(value);
      this.dataType = this.getType(value);
    }
  }

  private getType = (value: any) => {
    /*
     * if it's a date. 'typeof value' will return a 'object' value
     * we fix it by doing this
     */
    return value instanceof Date ? "date" : typeof value;
  };

  public search = (value: BSTVNodeValue) => {
    let curr = this.root;

    while (curr) {
      if (curr.value === value) return curr;

      if (value > curr.value) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }

    return null;
  };

  public insert(value: BSTVNodeValue) {
    const newNode = new BinarySearchTreeNode(value);

    // if there is no root, we set the new node as the root and we set the data type
    if (!this.root) {
      this.root = newNode;
      // view the constructor to understand this line
      this.dataType = this.getType(value);
      return this;
    }

    // if the data type doesn't match we throw an error
    if (this.getType(value) !== this.dataType) {
      throw new Error(
        `tree of type ${this.dataType} doesn't support ${this.getType(
          value
        )} value`
      );
    }

    let curr: BinarySearchTreeNode | null = this.root;
    let prev: BinarySearchTreeNode;

    while (curr) {
      if (value === curr.value) {
        curr.frequency++;
        return this;
      } else if (value > curr.value) {
        prev = curr;
        curr = curr.right;
      } else {
        prev = curr;
        curr = curr.left;
      }
    }

    if (value > prev!.value) {
      prev!.right = newNode;
    } else {
      prev!.left = newNode;
    }

    return this;
  }
}

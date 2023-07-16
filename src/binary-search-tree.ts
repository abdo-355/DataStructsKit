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

  public remove = (value: BSTVNodeValue) => {
    let curr: BinarySearchTreeNode | null = this.root;
    let prev: BinarySearchTreeNode;

    while (curr) {
      if (value > curr.value) {
        prev = curr;
        curr = curr.right;
      } else if (value < curr.value) {
        prev = curr;
        curr = curr.left;
      } else {
        if (curr.frequency > 1) {
          curr.frequency--;
          return this;
        }

        if (!curr.right && !curr.left) {
          if (prev!.right === curr) {
            prev!.right = null;
          } else {
            prev!.left = null;
          }
          return this;
        } else if (!curr.right) {
          if (prev!.right === curr) {
            prev!.right = curr.left;
          } else {
            prev!.left = curr.left;
          }
          return this;
        } else if (!curr.left) {
          if (prev!.right === curr) {
            prev!.right = curr.right;
          } else {
            prev!.left = curr.right;
          }
          return this;
        } else {
          if (!curr.right.left) {
            curr.right.left = curr.left;

            // if the current value is the root we don't have a prev
            if (this.root === curr) {
              curr.right.left = curr.left;
              this.root = curr.right;
              return this;
            }

            if (prev!.right === curr) {
              prev!.right = curr.right;
            } else {
              prev!.left = curr.right;
            }
            return this;
          }

          let curr2 = curr.right.left;
          let prev2 = curr.right;

          while (curr2.left) {
            prev2 = curr2;
            curr2 = curr2.left;
          }

          if (curr2.right) {
            prev2!.left = curr2.right;
          }

          curr2.right = curr.right;
          curr2.left = curr.left;

          // if the current value is the root we don't have a prev
          if (this.root === curr) {
            this.root = curr2;
            return this;
          }

          if (prev!.right === curr) {
            prev!.right = curr2;
          } else {
            prev!.left = curr2;
          }

          return this;
        }
      }
    }

    return this;
  };

  public minimum = () => {
    if (!this.root) return null;

    let curr = this.root;
    while (curr!.left) {
      curr = curr!.left;
    }

    return curr;
  };

  public maximum = () => {
    if (!this.root) return null;

    let curr = this.root;
    while (curr!.right) {
      curr = curr!.right;
    }

    return curr;
  };

  public clear = () => {
    this.root = null;
    this.dataType = null;

    return this;
  };
}

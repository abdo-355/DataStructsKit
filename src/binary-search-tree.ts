type BSTVNodeValue = string | number | Date;

export class BinarySearchTreeNode {
  // the value should be only these so that we can compare them with > and <
  public value: BSTVNodeValue;
  public right: BinarySearchTreeNode | null;
  public left: BinarySearchTreeNode | null;

  constructor(value: BSTVNodeValue) {
    if (!this.isValid(value)) {
      throw new Error(
        `type of Binary search tree node value must be string, number or Date`
      );
    }
    this.value = value;
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

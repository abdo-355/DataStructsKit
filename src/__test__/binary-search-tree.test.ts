import { BinarySearchTreeNode } from "../binary-search-tree";

describe("BinarySearchTreeNode", () => {
  it("should create a correct binary search tree node", () => {
    const node = new BinarySearchTreeNode(1);
    expect(node.value).toBe(1);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  it("should accept string as value", () => {
    const node = new BinarySearchTreeNode("test");
    expect(node.value).toBe("test");
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  it("should accept number as value", () => {
    const node = new BinarySearchTreeNode(1);
    expect(node.value).toBe(1);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  it("should accept Date as value", () => {
    const node = new BinarySearchTreeNode(new Date());
    expect(node.value).toBeInstanceOf(Date);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  it("should throw error when trying to create a node with anything other than string, number or date value", () => {
    expect(() => {
      //@ts-ignore
      new BinarySearchTreeNode(null);
    }).toThrowError(
      "type of Binary search tree node value must be string, number or Date"
    );
  });
});

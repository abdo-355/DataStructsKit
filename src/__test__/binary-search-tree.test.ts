import { BinarySearchTreeNode, BinarySearchTree } from "../binary-search-tree";

describe("BinarySearchTreeNode", () => {
  it("should create a correct binary search tree node", () => {
    const node = new BinarySearchTreeNode(1);
    expect(node.value).toBe(1);
    expect(node.frequency).toBe(1);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  it("should accept string as value", () => {
    const node = new BinarySearchTreeNode("test");
    expect(node.value).toBe("test");
    expect(node.frequency).toBe(1);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  it("should accept number as value", () => {
    const node = new BinarySearchTreeNode(1);
    expect(node.value).toBe(1);
    expect(node.frequency).toBe(1);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  it("should accept Date as value", () => {
    const node = new BinarySearchTreeNode(new Date());
    expect(node.value).toBeInstanceOf(Date);
    expect(node.frequency).toBe(1);
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

describe("BinarySearchTree", () => {
  describe("creation", () => {
    it("should create an empty binary search tree if not given any value", () => {
      const tree = new BinarySearchTree();
      expect(tree.root).toBeNull();
      expect(tree.dataType).toBeNull();
    });

    it("should create a correct binary search tree with a given data type", () => {
      const tree = new BinarySearchTree("test");
      const expectedRoot = new BinarySearchTreeNode("test");

      // JSON.stringify is used to compare the object because the object's reference is different
      expect(JSON.stringify(tree.root)).toEqual(JSON.stringify(expectedRoot));
      expect(tree.dataType).toBe("string");
    });

    it("should have a number dateType if given a number", () => {
      const tree = new BinarySearchTree(1);
      expect(tree.dataType).toBe("number");
    });

    it("should have a date dateType if given a date", () => {
      const tree = new BinarySearchTree(new Date());
      expect(tree.dataType).toBe("date");
    });
  });

  describe("insertion", () => {
    it("should insert to the root if the tree is empty", () => {
      const tree = new BinarySearchTree();
      expect(tree.root).toBeNull();

      tree.insert(1);
      expect(tree.root).toBeDefined();
      expect(tree.root?.value).toBe(1);
    });

    it("should insert in descending order if the value is lower than the previous node", () => {
      const tree = new BinarySearchTree(5);
      tree.insert(3);
      tree.insert(2);

      /*
              5
            3
          2
      */
      expect(tree.root?.value).toBe(5);
      expect(tree.root?.left?.value).toBe(3);
      expect(tree.root?.left?.left?.value).toBe(2);
    });

    it("should insert in ascending order if the value is higher than the previous node", () => {
      const tree = new BinarySearchTree(5);
      tree.insert(7);
      tree.insert(8);

      /*
              5
                 7
                    8
      */
      expect(tree.root?.value).toBe(5);
      expect(tree.root?.right?.value).toBe(7);
      expect(tree.root?.right?.right?.value).toBe(8);
    });

    it("should insert to the correct position", () => {
      const tree = new BinarySearchTree(5);
      tree
        .insert(3)
        .insert(1)
        .insert(2)
        .insert(4)
        .insert(6)
        .insert(9)
        .insert(7)
        .insert(10)
        .insert(8);

      /*
         5
       /   \
      3     6
     / \     \
    1   4     9
     \       / \
      2     7   10
             \
              8
      */

      // Validate the structure of the tree
      expect(tree?.root!.value).toBe(5);

      // Left subtree
      expect(tree.root!.left!.value).toBe(3);
      expect(tree.root!.left!.left!.value).toBe(1);
      expect(tree.root!.left!.left!.right!.value).toBe(2);
      expect(tree.root!.left!.right!.value).toBe(4);

      // Right subtree
      expect(tree.root!.right!.value).toBe(6);
      expect(tree.root!.right!.right!.value).toBe(9);
      expect(tree.root!.right!.right!.left!.value).toBe(7);
      expect(tree.root!.right!.right!.right!.value).toBe(10);
      expect(tree.root!.right!.right!.left!.right!.value).toBe(8);
    });

    it("should increase the frequency of the node if it already exists", () => {
      const tree = new BinarySearchTree(5);
      expect(tree.root?.frequency).toBe(1);

      tree.insert(5);

      expect(tree.root?.value).toBe(5);
      expect(tree.root?.frequency).toBe(2);

      const tree2 = new BinarySearchTree(5);

      tree2.insert(3);
      tree2.insert(1);
      tree2.insert(3);

      expect(tree2.root?.left?.frequency).toBe(2);
    });

    it("should support method chaining", () => {
      const tree = new BinarySearchTree(5);

      tree.insert(5).insert(3).insert(1).insert(3);

      expect(tree.root?.left?.frequency).toBe(2);
      expect(tree.root?.left?.left?.value).toBe(1);
    });

    it("should throw an error if we insert unsupported data types", () => {
      const tree = new BinarySearchTree();
      expect(() => {
        //@ts-ignore
        tree.insert([5]);
      }).toThrowError(
        "type of Binary search tree node value must be string, number or Date"
      );
    });

    it("should throw an error if the value doesn't match the tree's data type", () => {
      const tree = new BinarySearchTree(5);
      expect(() => {
        tree.insert("test");
      }).toThrowError("tree of type number doesn't support string value");
      expect(() => {
        tree.insert(new Date());
      }).toThrowError("tree of type number doesn't support date value");

      const tree2 = new BinarySearchTree("test");
      expect(() => {
        tree2.insert(1);
      }).toThrowError("tree of type string doesn't support number value");

      const tree3 = new BinarySearchTree(new Date());
      expect(() => {
        tree3.insert(1);
      }).toThrowError("tree of type date doesn't support number value");
    });
  });

  describe("search", () => {
    it("should return null if the value doesn't exist", () => {
      const tree = new BinarySearchTree(5);
      expect(tree.search(6)).toBeNull();
      expect(tree.search(5)).not.toBeNull();
    });

    it("should return the node with the given value", () => {
      const tree = new BinarySearchTree(5);
      tree
        .insert(3)
        .insert(1)
        .insert(2)
        .insert(4)
        .insert(6)
        .insert(9)
        .insert(7)
        .insert(10)
        .insert(8);

      // the root
      expect(tree.search(5)).not.toBeNull();
      expect(tree.search(5)).toEqual(tree.root);

      // the smallest value
      expect(tree.search(1)).not.toBeNull();
      expect(tree.search(1)).toEqual(tree.root!.left!.left);

      // the biggest value
      expect(tree.search(10)).not.toBeNull();
      expect(tree.search(10)).toEqual(tree.root!.right!.right!.right);

      // random value
      expect(tree.search(8)).not.toBeNull();
      expect(tree.search(8)).toEqual(tree.root!.right!.right!.left!.right);
    });

    it("should work on a tree with one node", () => {
      const tree = new BinarySearchTree(5);
      expect(tree.search(5)).not.toBeNull();
      expect(tree.search(5)).toEqual(tree.root);
    });
  });

  describe("remove", () => {
    let tree: BinarySearchTree;

    beforeEach(() => {
      tree = new BinarySearchTree(5);
      tree
        .insert(3)
        .insert(1)
        .insert(2)
        .insert(4)
        .insert(6)
        .insert(9)
        .insert(7)
        .insert(13)
        .insert(12)
        .insert(11)
        .insert(10)
        .insert(8);

      /*
         5
       /   \
      3     6
     / \     \
    1   4      9
     \       /  \
      2     7    13
            \    /
             8  12
                /
              11
              /
             10
      */
    });

    it("should remove leaf nodes", () => {
      tree.remove(2);

      expect(tree.search(2)).toBeNull();
      expect(tree.search(1)!.right).toBeNull();
      expect(tree.search(1)!.left).toBeNull();
    });

    it("should remove nodes with one right child", () => {
      tree.remove(1);

      expect(tree.search(1)).toBeNull();
      expect(tree.search(3)!.left).toEqual(tree.search(2));

      tree.remove(6);

      expect(tree.search(6)).toBeNull();
      expect(tree.search(5)!.right).toEqual(tree.search(9));
    });

    it("should remove nodes with one left child", () => {
      tree.remove(13);

      expect(tree.search(13)).toBeNull();
      expect(tree.search(9)!.right).toEqual(tree.search(12));
    });

    it("should remove nodes with two children", () => {
      tree.remove(3);

      expect(tree.search(3)).toBeNull();
      expect(tree.search(5)!.left).toEqual(tree.search(4));
      expect(tree.search(4)!.left).toEqual(tree.search(1));

      tree.remove(9);

      expect(tree.search(9)).toBeNull();
      expect(tree.search(6)!.right).toEqual(tree.search(10));
      expect(tree.search(10)!.right).toEqual(tree.search(13));
      expect(tree.search(10)!.left).toEqual(tree.search(7));
    });

    it("should remove the root node", () => {
      tree.remove(5);

      expect(tree.search(5)).toBeNull();
      expect(tree.root).toEqual(tree.search(6));

      tree.remove(6);

      expect(tree.search(6)).toBeNull();
      expect(tree.root).toEqual(tree.search(7));
    });

    it("should support method chaining", () => {
      tree.remove(5).remove(6).remove(7);

      expect(tree.search(5)).toBeNull();
      expect(tree.search(6)).toBeNull();
      expect(tree.search(7)).toBeNull();
    });

    it("shouln't break if we remove a value that doesn't exist", () => {
      expect(tree.search(99)).toBeNull();

      expect(() => {
        tree.remove(99);
      }).not.toThrowError();

      expect(tree.remove(99)).toEqual(tree);
    });
  });

  describe("minimum and maximum", () => {
    it("should work properly on a multi level tree", () => {
      const tree = new BinarySearchTree(5);
      tree
        .insert(3)
        .insert(1)
        .insert(2)
        .insert(4)
        .insert(6)
        .insert(9)
        .insert(7)
        .insert(13)
        .insert(12);

      expect(tree.minimum()).toEqual(tree.search(1));
      expect(tree.maximum()).toEqual(tree.search(13));
    });

    it("should work properly on a single node tree", () => {
      const tree = new BinarySearchTree(5);

      expect(tree.minimum()).toEqual(tree.search(5));
      expect(tree.maximum()).toEqual(tree.search(5));
    });

    it("should return null if the tree is empty", () => {
      const tree = new BinarySearchTree();

      expect(tree.minimum()).toBeNull();
      expect(tree.maximum()).toBeNull();
    });
  });

  describe("clearing", () => {
    it("should clear the tree", () => {
      const tree = new BinarySearchTree(5);
      tree
        .insert(3)
        .insert(1)
        .insert(2)
        .insert(4)
        .insert(6)
        .insert(9)
        .insert(7)
        .insert(13)
        .insert(12)
        .clear();

      expect(tree.root).toBeNull();
      expect(tree.search(4)).toBeNull();
      expect(tree.search(13)).toBeNull();
    });

    it("should support method chaiining", () => {
      const tree = new BinarySearchTree(5);
      tree.insert(3).clear().insert(1);

      expect(tree.search(3)).toBeNull();
      expect(tree.root).not.toBeNull();
      expect(tree.search(1)).not.toBeNull();
    });

    it("shouldn't break if we call clear on an empty tree", () => {
      const tree = new BinarySearchTree();
      expect(() => {
        tree.clear();
      }).not.toThrowError();

      expect(tree.root).toBeNull();
      expect(tree.clear()).toEqual(tree);
    });
  });
});

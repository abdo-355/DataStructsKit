import { DoublyLinkedList, DoublyLinkedListNode } from "../doubly-linked-list";

describe("DoublyLinkedListNode", () => {
  it("should create list node with value", () => {
    const newNode = new DoublyLinkedListNode("value");

    expect(newNode).toEqual({
      value: "value",
      next: null,
      prev: null,
    });
  });
});

describe("DoublyLinkedList", () => {
  describe("creation", () => {
    it("should create a correct doubly linked list", () => {
      const list = new DoublyLinkedList("value");

      const expectedNode = {
        value: "value",
        next: null,
        prev: null,
      };

      expect(list.head).toEqual(expectedNode);
      expect(list.tail).toEqual(expectedNode);
      expect(list.length).toBe(1);
    });
  });

  describe("insertion", () => {
    it("should add new node to the end of the list", () => {
      const list = new DoublyLinkedList("value");

      list.add("new value");

      expect(list.head.value).toBe("value");
      expect(list.head.next!.value).toBe("new value");
      expect(list.tail!.value).toBe("new value");
      expect(list.tail!.prev!.value).toBe("value");
      expect(list.length).toBe(2);
    });

    it("should insert new node to the beginning of the list if index is 0 of less", () => {
      const list = new DoublyLinkedList("value");

      list.insert(0, "new value");

      expect(list.head.value).toBe("new value");
      expect(list.head.next!.value).toBe("value");
      expect(list.tail!.value).toBe("value");
      expect(list.tail!.prev!.value).toBe("new value");
      expect(list.length).toBe(2);

      list.insert(-4, "new value2");

      expect(list.head.value).toBe("new value2");
      expect(list.head.next!.value).toBe("new value");
      expect(list.tail!.value).toBe("value");
      expect(list.tail!.prev!.value).toBe("new value");
      expect(list.length).toBe(3);
    });

    it("should insert new node to the end of the list if index is equal to length of list or greater", () => {
      const list = new DoublyLinkedList("value");

      list.insert(1, "new value");

      expect(list.head.value).toBe("value");
      expect(list.head.next!.value).toBe("new value");
      expect(list.tail!.value).toBe("new value");
      expect(list.tail!.prev!.value).toBe("value");
      expect(list.length).toBe(2);

      list.insert(100, "new value2");

      expect(list.head.value).toBe("value");
      expect(list.head.next!.value).toBe("new value");
      expect(list.tail!.value).toBe("new value2");
      expect(list.tail!.prev!.value).toBe("new value");
      expect(list.length).toBe(3);
    });

    it("should insert new node to the correct index of the list", () => {
      const list = new DoublyLinkedList(0);

      list.add(1);
      list.add(2);
      list.add(3);

      list.insert(2, "value");

      expect(list.toArray()).toEqual([0, 1, "value", 2, 3]);
      expect(list.length).toBe(5);
    });
  });

  describe("deletion", () => {
    it("should 'delete' the first node of the list if index is 0 or less", () => {
      const list = new DoublyLinkedList(0);
      list.add(1);
      list.add(2);
      list.add(3);

      list.delete(0);

      expect(list.toArray()).toEqual([1, 2, 3]);
      expect(list.length).toBe(3);

      list.delete(-2);

      expect(list.toArray()).toEqual([2, 3]);
      expect(list.length).toBe(2);
    });

    it("should 'delete' the last node of the list if index is equal to length of list or greater", () => {
      const list = new DoublyLinkedList(0);
      list.add(1);
      list.add(2);
      list.add(3);

      list.delete(3);

      expect(list.toArray()).toEqual([0, 1, 2]);
      expect(list.length).toBe(3);

      list.delete(100);

      expect(list.toArray()).toEqual([0, 1]);
      expect(list.length).toBe(2);
    });

    it("should 'delete' the correct node of the list", () => {
      const list = new DoublyLinkedList(0);
      list.add(1);

      list.add(2);
      list.add(3);
      list.add(4);

      list.delete(2);

      expect(list.toArray()).toEqual([0, 1, 3, 4]);
      expect(list.length).toBe(4);
    });
  });

  describe("values", () => {
    it("should show values of the list as an array with the to Array method", () => {
      const list = new DoublyLinkedList(0);

      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);

      expect(list.toArray()).toEqual([0, 1, 2, 3, 4]);
    });

    it("should check check if the list has a certian value with the has method", () => {
      const list = new DoublyLinkedList(0);

      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);

      expect(list.has(1)).toBeTruthy();
      expect(list.has(5)).toBeFalsy();
    });
  });
});

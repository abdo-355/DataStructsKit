import LinkedList, { LinkedListNode } from "../linked-list";

describe("LinkedListNode", () => {
  it("should create a linked list node", () => {
    const newNode = new LinkedListNode("test");

    expect(newNode).toEqual({ value: "test", next: null });
  });
});

describe("LinkedList", () => {
  describe("creation", () => {
    it("should create a linked list where the head equals the tail equals the new node and the length is 1", () => {
      const newLinkedList = new LinkedList("test");

      expect(newLinkedList.head).toEqual(newLinkedList.tail);
      expect(newLinkedList.head).toEqual({ value: "test", next: null });
      expect(newLinkedList.length).toBe(1);
    });
  });

  describe("insertion", () => {
    it("should 'add' a new node to the end of the linked list", () => {
      const newLinkedList = new LinkedList("testValue");

      newLinkedList.add("testValue2");

      expect(newLinkedList.head.value).toBe("testValue");
      expect(newLinkedList.tail!.value).toBe("testValue2");
      expect(newLinkedList.length).toBe(2);

      newLinkedList.add("testValue3");

      expect(newLinkedList.head.value).toBe("testValue");
      expect(newLinkedList.tail!.value).toBe("testValue3");
      expect(newLinkedList.length).toBe(3);
    });

    it("should 'insert' a new node as the head if the given index is 0 or a negative number", () => {
      const newLinkedList = new LinkedList("testValue");

      newLinkedList.insert(0, "testValue2");

      expect(newLinkedList.head.value).toBe("testValue2");
      expect(newLinkedList.tail!.value).toBe("testValue");
      expect(newLinkedList.length).toBe(2);

      newLinkedList.insert(-1, "testValue3");

      expect(newLinkedList.head.value).toBe("testValue3");
    });

    it("should 'insert' a new node as the tail if the given index is the length of the linked list or larger", () => {
      const newLinkedList = new LinkedList("testValue");

      newLinkedList.insert(1, "testValue2");

      expect(newLinkedList.head.value).toBe("testValue");
      expect(newLinkedList.tail!.value).toBe("testValue2");
      expect(newLinkedList.length).toBe(2);

      newLinkedList.insert(4, "testValue3");

      expect(newLinkedList.head.value).toBe("testValue");
      expect(newLinkedList.tail!.value).toBe("testValue3");
      expect(newLinkedList.length).toBe(3);
    });

    it("should 'insert' a new node in the correct index", () => {
      const newLinkedList = new LinkedList("0");

      newLinkedList.add("1");
      newLinkedList.add("2");
      newLinkedList.add("3");

      newLinkedList.insert(2, "val1");
      newLinkedList.insert(1, "val2");

      expect(newLinkedList.toArray()).toEqual([
        "0",
        "val2",
        "1",
        "val1",
        "2",
        "3",
      ]);
    });
  });

  describe("showing values", () => {
    it("should return an array of the linked list values when calling the linkedlist toArray method", () => {
      const newLinkedList = new LinkedList("test");

      expect(newLinkedList.toArray()).toEqual(["test"]);

      newLinkedList.add("test2");
      expect(newLinkedList.toArray()).toEqual(["test", "test2"]);
      expect(newLinkedList.length).toBe(2);
    });
  });
});

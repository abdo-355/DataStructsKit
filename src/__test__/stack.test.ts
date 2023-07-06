import Stack from "../stack";

describe("Stack", () => {
  describe("stack items", () => {
    it("should return the values in an array with the 'items' property", () => {
      const newStack = new Stack();

      expect(newStack.items).toEqual([]);
    });

    it("should return the length of the stack with the 'length' property", () => {
      const newStack = new Stack();

      expect(newStack.length).toEqual(0);

      newStack.push(1).push(2).push(3);
      expect(newStack.length).toEqual(3);
    });

    it("should return the last item added to the stack with the 'peek' method", () => {
      const newStack = new Stack();

      newStack.push(1).push(2).push(3);
      expect(newStack.peek()).toEqual(3);
    });

    it("should return true if the stack is empty with the 'isEmpty' method", () => {
      const newStack = new Stack();

      expect(newStack.isEmpty()).toEqual(true);
    });

    it("should return false if the stack is not empty with the 'isEmpty' method", () => {
      const newStack = new Stack();

      newStack.push(1);
      expect(newStack.isEmpty()).toEqual(false);
    });
  });

  describe("push", () => {
    it("should add an item to the stack", () => {
      const newStack = new Stack();

      newStack.push(1);
      expect(newStack.items).toEqual([1]);
    });

    it("should chain other methods", () => {
      const newStack = new Stack();

      newStack.push(1).push(2).push(3);
      expect(newStack.items).toEqual([1, 2, 3]);
    });

    it("should increase the length of the stack", () => {
      const newStack = new Stack();

      newStack.push(1);
      expect(newStack.length).toEqual(1);

      newStack.push(2).push(3).push(4);
      expect(newStack.length).toEqual(4);
    });
  });
});

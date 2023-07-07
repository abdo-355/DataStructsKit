import { Queue } from "../queue";

describe("Queue", () => {
  describe("creation", () => {
    it("should create a new empty queue", () => {
      const newQueue = new Queue();

      expect(newQueue.size).toBe(0);
      expect(newQueue.isEmpty()).toBe(true);
      expect(newQueue.toArray()).toEqual([]);
    });
  });

  describe("queue items", () => {
    it("should tell if the queue is empty or not", () => {
      const newQueue = new Queue();

      expect(newQueue.isEmpty()).toBe(true);

      newQueue.enqueue(1);
      expect(newQueue.isEmpty()).toBe(false);
    });

    it("should return the items in the queue as an array", () => {
      const newQueue = new Queue();

      newQueue.enqueue(1).enqueue(2);

      expect(newQueue.toArray()).toEqual([1, 2]);
    });

    it("should tell the size of the queue", () => {
      const newQueue = new Queue();

      newQueue.enqueue(1).enqueue(2);

      expect(newQueue.size).toBe(2);
    });

    it("should return the item at the begining of the queue", () => {
      const newQueue = new Queue();

      newQueue.enqueue(1).enqueue(2);

      expect(newQueue.peek()).toBe(1);
    });
  });

  describe("enqueue", () => {
    it("should add an item to the queue", () => {
      const newQueue = new Queue();

      newQueue.enqueue(1);
      expect(newQueue.size).toBe(1);
      expect(newQueue.toArray()).toEqual([1]);
    });

    it("should chain other methods", () => {
      const newQueue = new Queue();

      newQueue.enqueue(1).enqueue(2).enqueue(3);
      expect(newQueue.size).toBe(3);
      expect(newQueue.toArray()).toEqual([1, 2, 3]);
    });
  });

  describe("dequeue", () => {
    it("should remove an item from the begining of the queue", () => {
      const newQueue = new Queue();

      newQueue.enqueue(1).enqueue(2).enqueue(3);

      newQueue.dequeue();
      expect(newQueue.size).toBe(2);
      expect(newQueue.toArray()).toEqual([2, 3]);
    });

    it("should return the item that was removed", () => {
      const newQueue = new Queue();

      newQueue.enqueue(1).enqueue(2).enqueue(3);

      expect(newQueue.dequeue()).toBe(1);
    });

    it("should decrease the size of the queue", () => {
      const newQueue = new Queue();

      newQueue.enqueue(1).enqueue(2).enqueue(3);

      newQueue.dequeue();
      expect(newQueue.size).toBe(2);
    });

    it("should return undefined if the queue is empty", () => {
      const newQueue = new Queue();

      expect(newQueue.dequeue()).toBe(undefined);
    });
  });

  describe("clear", () => {
    it("should clear the queue", () => {
      const newQueue = new Queue();

      newQueue.enqueue(1).enqueue(2).enqueue(3);

      newQueue.clear();
      expect(newQueue.size).toBe(0);
      expect(newQueue.isEmpty()).toBe(true);
      expect(newQueue.toArray()).toEqual([]);
    });
  });
});

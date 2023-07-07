# DataStructsKit

The `DataStructsKit` package provides a simple implementation of a collection of data structure. The package is designed to be lightweight and easy to use, and currently supports the following data structures:

- [`linked lists & doubly linked lists`](#linked-lists--doubly-linked-lists)
- [`stacks`](#stack)
- [`queues`](#queue)

### Installation

```bash
npm install datastructskit
```

### Usage

To use the `DataStructsKit` package, simply import the data structure you want to use from the package:

```javascript
import {
  LinkedListNode,
  LinkedList,
  DoublyLinkedList,
  DoublyLinkedListNode,
  Stack,
  Queue,
} from "datastructskit";
```

## Linked lists & Doubly linked lists

You can create a new linked list(singly) or a doubly linked list by calling the `LinkedList` or `DoublyLinkedList` constructor:

```javascript
const linkedList = new LinkedList("head");
const doublyLinkedList = new DoublyLinkedList("head");
```

This creates a new linked list with a single node, with the value `"head"`.

#### The generated list has the following properties:

- `head`: A reference to the first node in the linked list.
- `tail`: A reference to the last node in the linked list.
- `length`: The number of nodes in the linked list.

#### And the following methods:

##### `add`

The `add` method adds a new node to the end of the linked list.

```javascript
linkedList.add("new tail");
```

##### `insert`

The `insert` method inserts a new node at a specified position in the linked list.

```javascript
linkedList.insert(1, "new node");
```

##### `toArray`

The `toArray` method returns an array of all the values in the linked list.

```javascript
const values = linkedList.toArray();
```

##### `has`

The `has` method returns `true` if the specified value is found in the linked list, `false` otherwise.

```javascript
const hasValue = linkedList.has("new tail");
```

##### `delete`

The `delete` method deletes the node at the specified `index` in the linked list.

```javascript
linkedList.delete(1);
```

#### Datatypes

**Note** that the `LinkedList` and the `DoublyLinkedList` support any datatype, and not just strings or numbers. You can use any valid JavaScript datatype as the value for a node in the list.

# Stack

You can create a new stack by calling the `Stack` constructor:

```javascript
const stack = new Stack();
```

This creates a new stack with no elements.

#### The stack has the following properties:

- `items`: An array that holds the elements of the stack.
- `length`: The number of elements in the stack.

#### And the following methods:

##### `peek`

The `peek` method returns the element at the top of the stack without removing it.

```javascript
const topElement = stack.peek();
```

##### `isEmpty`

The `isEmpty` method returns `true` if the stack is empty, `false` otherwise.

```javascript
const emptyStatus = stack.isEmpty();
```

##### `push`

The `push` method adds a new element to the top of the stack.

```javascript
stack.push(value);
```

It returns the updated `Stack` instance, allowing you to chain other methods to perform additional operations on the stack. For example:

```javascript
stack.push(value).push(anotherValue);
```

##### `pop`

The `pop` method removes and **returns** the element at the top of the stack.

```javascript
const removedElement = stack.pop();
```

##### `clear`

The `clear` method removes all elements from the stack, making it empty.

```javascript
stack.clear();
```

#### Data Types

Note that the `Stack` class supports any data type. You can use any valid JavaScript data type as the value for an element in the stack.

# Queue

To create a new queue, call the `Queue` constructor:

```javascript
const queue = new Queue();
```

This creates a new empty queue.

#### The queue has the following properties:

- `first`: A reference to the first node in the queue.
- `last`: A reference to the last node in the queue.
- `size`: The number of nodes in the queue.

#### And the following methods:

##### `isEmpty`

The `isEmpty` method returns `true` if the queue is empty, `false` otherwise.

```javascript
const emptyStatus = queue.isEmpty();
```

##### `toArray`

The `toArray` method returns an array containing all the values in the queue, in the order they were added.

```javascript
const items = queue.toArray();
```

##### `peek`

The `peek` method returns the value of the first node in the queue without removing it.

```javascript
const firstValue = queue.peek();
```

##### `enqueue`

The `enqueue` method adds a new element to the end of the queue.

```javascript
queue.enqueue(value);
```

Certainly! Here's an updated version of the documentation for the `enqueue` method that includes information about chaining other methods:

##### `enqueue`

The `enqueue` method adds a new element to the end of the queue.

```javascript
queue.enqueue(value);
```

It returns the updated `Queue` instance, allowing you to chain other methods to perform additional operations on the queue. For example:

```javascript
queue.enqueue(value).enqueue(anotherValue);
```

##### `dequeue`

The `dequeue` method removes and returns the value of the first node in the queue.

```javascript
const removedValue = queue.dequeue();
```

##### `clear`

The `clear` method removes all nodes from the queue, making it empty.

```javascript
queue.clear();
```

Note that the `enqueue`, `dequeue`, and `peek` methods operate on the first and last nodes of the queue using the `LinkedListNode` class.

### Data Types

The `Queue` class supports any data type. You can use any valid JavaScript data type as the value for a node in the queue.

## license

The MIT license, Full license is [here](https://github.com/abdo-355/DataStructsKit/blob/master/LICENSE)

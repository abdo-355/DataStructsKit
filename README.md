# DataStructsKit

The `DataStructsKit` package provides a simple implementation of a collection of data structure. The package is designed to be lightweight and easy to use, and currently supports the following data structures:

- [`linked lists & doubly linked lists`](#linked-lists--doubly-linked-lists)
- [`stacks`](#stacks)

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

# stacks

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

## license

The MIT license, Full license is [here](https://github.com/abdo-355/DataStructsKit/blob/master/LICENSE)

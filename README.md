# DataStructsKit

The `DataStructsKit` package provides a simple implementation of a collection of data structure. The package is designed to be lightweight and easy to use, and currently supports the following data structures:

- [`linked lists`](#linkedlists)

### Installation

```bash
npm install datastructskit
```

### Usage

To use the `DataStructsKit` package, simply import the data structure you want to use from the package:

```javascript
import { LinkedListNode, LinkedList } from "datastructskit";
```

## Linked lists {#linkedlists}

#### supported methods:

- [`add`](#linkedlist-add): Adds a new node to the end of the linked list.
- [`insert`](#linkedlist-insert): Inserts a new node at a specified position in the linked list.
- [`toArray`](#linkedlist-toarray): Returns an array of all the values in the linked list.
- [`has`](#linkedlist-has): Returns `true` if the specified value is found in the linked list, `false` otherwise.
- [`delete`](#linkedlist-delete): Deletes the node at the specified index in the linked list.

You can then create a new linked list by calling the `LinkedList` constructor:

```javascript
const linkedList = new LinkedList("head");
```

This creates a new linked list with a single node, with the value `'head'`.

#### The `LinkedList` has the following properties:

- `head`: A reference to the first node in the linked list.
- `tail`: A reference to the last node in the linked list.
- `length`: The number of nodes in the linked list.

#### And the following methods:

##### `add` {#linkedlist-add}

The `add` method adds a new node to the end of the linked list.

```javascript
linkedList.add("new tail");
```

##### `insert` {#linkedlist-insert}

The `insert` method inserts a new node at a specified position in the linked list.

```javascript
linkedList.insert(1, "new node");
```

##### `toArray` {#linkedlist-toarray}

The `toArray` method returns an array of all the values in the linked list.

```javascript
const values = linkedList.toArray();
```

##### `has` {#linkedlist-has}

The `has` method returns `true` if the specified value is found in the linked list, `false` otherwise.

```javascript
const hasValue = linkedList.has("new tail");
```

##### `delete` {#linkedlist-delete}

The `delete` method deletes the node at the specified `index` in the linked list.

```javascript
linkedList.delete(1);
```

#### Datatypes

**Note** that the `LinkedList` package supports any datatype, and not just strings or numbers. You can use any valid JavaScript datatype as the value for a node in the linked list.

## license

The MIT license, Full license is [here](https://github.com/abdo-355/DataStructsKit/blob/master/LICENSE)

# Linked lists

Linked lists are a type of data structure that store values in the form of a list. Within the list, each value is considered a node, and each node is connected with the following value in the list (or null in case the element is the last in the list) through a pointer.

There are two kinds of linked lists, singly linked lists and doubly linked lists. Both work very similarly, but the difference is in singly linked lists each node has a single pointer that indicates the next node on the list. While in doubly linked lists, each node has two pointers, one pointing to the next node and another pointing to the previous node.

The first element of the list is considered the head, and the last element is considered the tail. Like with arrays, the length property is defined as the number of elements the list contains.

The main differences compared with arrays are the following:

- Lists don't have indexes. Each value only "knows" the values to which it's connected through pointers.
- Since lists don't have indexes, we can't access values randomly. When we want to access a value, we always have to look for it by iterating through the list starting from its head or tail.
- The good thing of not having indexes, is that insertion/deletion in any part of the list is more efficient than with arrays. We just have to redirect the pointers of the "neighbor" values, while in arrays, values need to be re-indexed.
- Like any data structure, different methods are implemented in order to operate over the data. The most common ones include: push, pop, unshift, shift, get, set, insert, remove, and reverse.

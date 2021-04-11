const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.root = new ListNode();
    this.size = 0;
    this.last = null;
  }

  enqueue(element) {
    if (this.size === 0) {
      this.root.value = element;
      this.last = this.root;
    } else {
      const newEl = new ListNode(element);
      this.last.next = newEl;
      this.last = this.last.next;
    }
    this.size += 1;
  }

  dequeue() {
    if (!this.size) return null;
    const result = this.root.value;
    if (this.size === 1) {
      this.root.value = null;
    } else {
      this.root = this.root.next;
    }
    this.size -= 1;
    return result;
  }
}

module.exports = Queue;

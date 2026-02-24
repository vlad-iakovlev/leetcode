type Node = {
  key: number;
  value: number;
  next?: Node;
  prev?: Node;
};

class LRUCache {
  private capacity: number;
  private head: Node;
  private tail: Node;
  private map = new Map<number, Node>();

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head = { key: -1, value: -1 };
    this.tail = { key: -1, value: -1 };
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (node) {
      this.removeNode(node);
      this.addNode(node);
      return node.value;
    }

    return -1;
  }

  put(key: number, value: number): void {
    const existingNode = this.map.get(key);
    if (existingNode) {
      existingNode.value = value;
      this.removeNode(existingNode);
      this.addNode(existingNode);
      return;
    }

    if (this.map.size >= this.capacity) {
      const lastNode = this.tail.prev!;
      this.removeNode(lastNode);
      this.map.delete(lastNode.key);
    }

    const newNode = { key, value };
    this.addNode(newNode);
    this.map.set(key, newNode);
  }

  private addNode(node: Node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  private removeNode(node: Node) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

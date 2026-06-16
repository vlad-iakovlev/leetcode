class MyQueue {
  private stack: number[] = [];
  private stack2: number[] = [];

  constructor() {}

  push(x: number): void {
    while (this.stack.length) {
      this.stack2.push(this.stack.pop());
    }
    this.stack.push(x);
    while (this.stack2.length) {
      this.stack.push(this.stack2.pop());
    }
  }

  pop(): number {
    return this.stack.pop();
  }

  peek(): number {
    return this.stack[this.stack.length - 1];
  }

  empty(): boolean {
    return !this.stack.length;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

class MinStack {
  valStack: number[] = [];
  minStack: number[] = [];

  constructor() {}

  push(val: number): void {
    this.valStack.push(val);

    if (this.minStack.length) {
      this.minStack.push(Math.min(this.getMin(), val));
    } else {
      this.minStack.push(val);
    }
  }

  pop(): void {
    this.valStack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.valStack.at(-1);
  }

  getMin(): number {
    return this.minStack.at(-1);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

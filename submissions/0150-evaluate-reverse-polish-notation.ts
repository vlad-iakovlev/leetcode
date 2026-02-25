function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (let token of tokens) {
    switch (token) {
      case "+": {
        const y = stack.pop();
        const x = stack.pop();
        stack.push(x + y);
        break;
      }

      case "-": {
        const y = stack.pop();
        const x = stack.pop();
        stack.push(x - y);
        break;
      }

      case "*": {
        const y = stack.pop();
        const x = stack.pop();
        stack.push(x * y);
        break;
      }

      case "/": {
        const y = stack.pop();
        const x = stack.pop();
        stack.push(Math.trunc(x / y));
        break;
      }

      default:
        stack.push(Number(token));
    }
  }

  return stack[0];
}

function convertToTitle(columnNumber: number): string {
  let res = "";

  while (columnNumber) {
    columnNumber--;
    res = String.fromCharCode(65 + (columnNumber % 26)) + res;
    columnNumber = Math.trunc(columnNumber / 26);
  }

  return res;
}

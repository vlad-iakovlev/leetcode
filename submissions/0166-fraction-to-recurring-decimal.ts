function fractionToDecimal(numerator: number, denominator: number): string {
  if (!numerator) return "0";

  let fraction: string[] = [];
  if (numerator / denominator < 0) fraction.push("-");
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  fraction.push(Math.trunc(numerator / denominator).toString());
  numerator %= denominator;
  if (!numerator) return fraction.join("");

  fraction.push(".");
  const indexMap = new Map<number, number>();
  while (numerator) {
    if (indexMap.has(numerator)) {
      fraction.splice(indexMap.get(numerator)!, 0, "(");
      fraction.push(")");
      return fraction.join("");
    }

    indexMap.set(numerator, fraction.length);
    numerator *= 10;
    fraction.push(Math.trunc(numerator / denominator).toString());
    numerator %= denominator;
  }

  return fraction.join("");
}

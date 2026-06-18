const c1 = [
  "",
  "One ",
  "Two ",
  "Three ",
  "Four ",
  "Five ",
  "Six ",
  "Seven ",
  "Eight ",
  "Nine ",
  "Ten ",
  "Eleven ",
  "Twelve ",
  "Thirteen ",
  "Fourteen ",
  "Fifteen ",
  "Sixteen ",
  "Seventeen ",
  "Eighteen ",
  "Nineteen ",
];
const c2 = [
  "",
  "",
  "Twenty ",
  "Thirty ",
  "Forty ",
  "Fifty ",
  "Sixty ",
  "Seventy ",
  "Eighty ",
  "Ninety ",
];
const c3 = ["", "Thousand ", "Million ", "Billion "];

function numberToWords(num: number): string {
  let res = "";
  for (let i = 0; num > 0; i++) {
    let small = num % 1000;
    if (small) res = calcSmall(small) + c3[i] + res;
    num = Math.floor(num / 1000);
  }

  return res.trim() || "Zero";
}

function calcSmall(num: number) {
  if (num < 20) return c1[num];
  if (num < 100) return c2[Math.floor(num / 10)] + c1[num % 10];
  return c1[Math.floor(num / 100)] + "Hundred " + calcSmall(num % 100);
}

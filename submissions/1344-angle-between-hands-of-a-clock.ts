function angleClock(hour: number, minutes: number): number {
  const a = Math.abs(hour * 30 - minutes * 5.5);
  return Math.min(a, 360 - a);
}

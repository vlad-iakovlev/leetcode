function maxPoints(points: number[][]): number {
  let max = 1;

  for (let i = 0; i < points.length - 1; i++) {
    const slopes = new Map<number, number>();

    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i][0] - points[j][0];
      const dy = points[i][1] - points[j][1];
      const slope = dx ? dy / dx : 1e5;
      slopes.set(slope, (slopes.get(slope) ?? 1) + 1);
    }

    max = Math.max(max, ...slopes.values());
  }

  return max;
}

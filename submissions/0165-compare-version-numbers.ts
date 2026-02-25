function compareVersion(version1: string, version2: string): number {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");

  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    const segment1 = arr1[i] ? parseInt(arr1[i], 10) : 0;
    const segment2 = arr2[i] ? parseInt(arr2[i], 10) : 0;
    const diff = segment1 - segment2;
    if (diff) return diff / Math.abs(diff);
  }

  return 0;
}

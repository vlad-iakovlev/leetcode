/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

type IsBadVersion = (version: number) => boolean;

const solution = function (isBadVersion: IsBadVersion) {
  return function (n: number): number {
    let l = 1;
    let r = n;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (isBadVersion(m)) r = m;
      else l = m + 1;
    }

    return r;
  };
};

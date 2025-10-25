// O(n+m)
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const length = nums1.length + nums2.length
    const medianIndex1 = Math.floor((length - 1) / 2)
    const medianIndex2 = Math.ceil((length - 1) / 2)

    let mediansSum = 0

    for (let i = 0, j = 0; i < nums1.length || j < nums2.length;) {
        if (i < nums1.length && (j >= nums2.length || nums1[i] <+ nums2[j])) {
            if (i + j === medianIndex1) mediansSum += nums1[i]
            if (i + j === medianIndex2) mediansSum += nums1[i]
            i++
        } else {
            if (i + j === medianIndex1) mediansSum += nums2[j]
            if (i + j === medianIndex2) mediansSum += nums2[j]
            j++
        }
    }

    return mediansSum / 2
}

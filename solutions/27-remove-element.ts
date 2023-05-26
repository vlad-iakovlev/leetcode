function removeElement(nums: number[], val: number): number {
    let len = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[len++] = nums[i]
        }
    }

    return len
}

class MyHashSet {
    nums = Array<number>(1e6 >> 5 + 1)

    add(key: number): void {
        this.nums[key >> 5] |= 1 << (key & 0x1f)
    }

    remove(key: number): void {
        this.nums[key >> 5] &= ~(1 << (key & 0x1f))
    }

    contains(key: number): boolean {
        return !!(this.nums[key >> 5] & (1 << (key & 0x1f)))
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

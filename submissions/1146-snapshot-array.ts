class SnapshotArray {
    snapId = 0
    data: [number, number][][]

    constructor(length: number) {
        this.data = new Array(length)
        for (let i = 0; i < length; i++) this.data[i] = []
    }

    set(index: number, val: number): void {
        this.data[index].push([this.snapId, val])
    }x

    snap(): number {
        return this.snapId++
    }

    get(index: number, snapId: number): number {
        const item = this.data[index]

        let l = 0
        let r = item.length
        while (l < r) {
            const m = Math.floor((l + r) / 2)
            if (item[m][0] > snapId) r = m
            else l = m + 1
        }

        return r ? item[r - 1][1] : 0
    }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

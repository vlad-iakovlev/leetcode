function insert(intervals: number[][], newInterval: number[]): number[][] {
    intervals = intervals.filter(interval => {
        if (
            interval[0] <= newInterval[0] && interval[1] >= newInterval[1] ||
            interval[0] >= newInterval[0] && interval[1] <= newInterval[1] ||
            interval[0] >= newInterval[0] && interval[0] <= newInterval[1] ||
            interval[1] >= newInterval[0] && interval[1] <= newInterval[1]
        ) {
            if (interval[0] < newInterval[0]) newInterval[0] = interval[0]
            if (interval[1] > newInterval[1]) newInterval[1] = interval[1]
            
            return false
        }

        return true
    })

    let i = intervals.findIndex(interval => interval[0] > newInterval[0])
    if (i >= 0) intervals.splice(i, 0, newInterval)
    else intervals.push(newInterval)

    return intervals
}

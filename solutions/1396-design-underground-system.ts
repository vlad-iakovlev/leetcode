interface CheckIn {
    stationName: string
    t: number
}

interface Avg {
    sum: number
    count: number
}

class UndergroundSystem {
    checkIns = new Map<number, CheckIn>()
    avgs = new Map<string, Avg>()

    checkIn(id: number, stationName: string, t: number): void {
        this.checkIns.set(id, { stationName, t })
    }

    checkOut(id: number, stationName: string, t: number): void {
        const checkIn = this.checkIns.get(id)
        const route = `${checkIn.stationName}/${stationName}`
        if (!this.avgs.has(route)) this.avgs.set(route, { sum: 0, count: 0 })
        const avg = this.avgs.get(route)
        avg.sum += t - checkIn.t
        avg.count++
    }

    getAverageTime(startStation: string, endStation: string): number {
        const avg = this.avgs.get(`${startStation}/${endStation}`)
        return avg.sum / avg.count
    }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

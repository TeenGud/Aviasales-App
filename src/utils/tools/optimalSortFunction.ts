export const optimalSortFunction = (prev, cur) => {
    if((prev.price - cur.price >= 0) || (prev.segments[0].duration - cur.segments[0].duration >= 0)) {
        return 1
    }
    return -1
}
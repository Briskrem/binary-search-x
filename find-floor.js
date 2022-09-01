function findFloor(arr, x) {

    let floor = rec(arr, x)
    console.log(floor, 'floooor')
    return floor

    function rec(arr, x, low=0, high= arr.length - 1){
      
        let mid = Math.floor((high - low)/2) + low
        console.log(low, high, mid, arr[mid], x)
        if (x >= arr[high]) return arr[high];
        if(x < arr[low]) return -1
        if(high >= low){
            if( ( x == arr[mid - 1] || x > arr[mid - 1] ) && x >= arr[mid]){
                return arr[mid]
            }else if(low === high){
                console.log('hehes')
                return arr[mid]
            }else if(x > arr[mid]){
                return rec(arr, x, mid + 1, high)
            }else if(x < arr[mid]){
                return rec(arr, x, low, mid - 1)
            }
        }
        return -1
    }
}

findFloor([1,2,8,10,10,12,19], 9)

module.exports = findFloor
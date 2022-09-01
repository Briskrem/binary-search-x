function findRotatedIndex(arr, num) {

    let minVal = Math.min(...arr)
    let minValIndex  = arr.indexOf(minVal)
    let secondArray = arr.splice(minValIndex)
    let joinedArray = [...secondArray, ...arr]

    let inDex = so(joinedArray, num)
    

    
    
    console.log(inDex - arr.length)
}

function so(joinedArray, num, low=0, high = joinedArray.length -1){
        
    let mid = Math.floor((high - low)/2) + low
    console.log(low, high, mid, joinedArray[mid], num)

    if(high >= low){
        if(joinedArray[mid] == num){
            console.log(mid,'done')   
            return mid
        }else if(num < joinedArray[mid]){
            return so(joinedArray, low, mid - 1)
        }else if(num > joinedArray[mid]){
            return so(joinedArray, num,  mid + 1 , high)
        }
    }
    return -1
}

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)

module.exports = findRotatedIndex


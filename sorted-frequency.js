function sortedFrequency(arr, val) {

    let start = 0;
    let end;

    function sor(arr, val, low=0, high=arr.length -1){
        
        let mid = Math.floor((high -low)/2)
        if((mid == 0 || arr[mid - 1] !==  val) && arr[mid] == val && start == false){
            start = mid
            if(arr[mid + 1] != val){
                end = mid
            }else{
                sor(arr, val, mid + 2, high )
            }
        }else if(arr[mid - 1] == val && arr[mid] == val )
    }
    sor()
    return [start, end]
}


console.log(sortedFrequency([1,1,2,2,2,2,3],2))

module.exports = sortedFrequency

// function countZeroes(arr) {
//     let t = 0
//     let leftIdx = 0;
//     let rightIdx = arr.length - 1

//     let numberOfOnes= []
//     while(rightIdx >= leftIdx || t == 20){
//         let middleIdx = Math.floor((rightIdx - leftIdx)/2)
//         console.log(middleIdx, 'middle idx'.red)

//         if(arr[middleIdx] != 1){
//             if(arr[leftIdx] == 1){
//                 rightIdx = middleIdx - 1
//                 console.log(leftIdx, rightIdx)
//                 t++
//             }else{
//                 return arr.length
//             }
//         }
//         if(arr[middleIdx] == 1){
//             if(arr[rightIdx] != 1){
//                 leftIdx = middleIdx + 1
//                 let x = arr.slice(rightIdx, middleIdx).length
//                 numberOfOnes.push(x)
//                 console.log(leftIdx, rightIdx)
//                 t++
//             }else{
//                 return arr.length
//             }
//         }
//     }
//     return numberOfOnes
// }
console.log('happy')
function countZeroes(arr) {
    // add whatever parameters you deem necessary - good luck!
    let firstZero = findFirst(arr)
    if (firstZero === -1) return 0;
  
    return arr.length - firstZero
  }
  
  function findFirst(arr, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = low + Math.floor((high - low) / 2)
      if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
        return mid;
      } else if (arr[mid] === 1) {
        return findFirst(arr, mid + 1, high)
      }
      return findFirst(arr, low, mid - 1)
    }
    return -1;
  }

module.exports = countZeroes
console.log('hasssssssss')
console.log(countZeroes([1,1,1,1,0,0]))
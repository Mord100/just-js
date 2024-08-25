// Binary Search

const sortedArray = [10, 13, 23, 45, 69, 100, 201, 236];

// function binarySearch (arr, low, high, x){
    
//     let mid = Math.floor((low + high)/2) ;

//     if(arr[mid] == x) {
//         return mid;
//     }

//     if(x < arr[mid]){
//         return binarySearch(arr, low, mid-1, x);
//     } else { return binarySearch(arr, mid+1, high , x)
//        }
// }

// const found = binarySearch(sortedArray, 0, sortedArray.length - 1, 201);

// console.log('X is in the index of:'+found);



function binarySearch(arr, low, high, x){

    console.log(low, high);

    if(low > high) return 'element not found';

    const mid = Math.floor((low + high)/2);

    if (arr[mid] == x){
        return mid;
       }
        if(x < arr[mid]){
            return binarySearch(arr, low, mid-1, x)
        } else {
            return binarySearch(arr, mid+1, high, x)
        }
    
}

const found = binarySearch(sortedArray, 0, sortedArray.length - 1, 201);
console.log('x is in the index of:'+found);






















// Linear Search Algo

const numbersArr = [3, 5, 11, 12, 17, 24];

//  function linearSearch (arr, x){
//     let len = arr.length;

//     for(let i = 0; i < len; i++){
//         if(x == arr[i]) return i;
//     }

//     return -1
//  }

//  console.log(linearSearch(numbersArr, 5));


function linearSearch (arr, x){
    let len = arr.length;

    for(let i = 0; i < len; i++){
        if(x == arr[i]) return i;
    }

    return 'not found'
}

console.log(linearSearch(numbersArr, 12));

























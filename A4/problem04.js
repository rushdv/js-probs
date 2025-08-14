// =========== Problem-04 ============ 

function  isSame(arr1 , arr2 ) {
          // You have to write your code here

    if (Array.isArray(arr1) === false || Array.isArray(arr2) === false){
        return "Invalid";
    }

    if (arr1.length !== arr2.length){
        return false;
    }

    for (let i = 0 ; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }

    return true;
}


// console.log(isSame([1, 2, 3], [1, 2, 3]));
// // true

// console.log(isSame([34, 5, 7, 9], [34, 5, 7]));
// // false

// console.log(isSame([1, undefined, 3], [1, null, 3]));
// // false

// console.log(isSame([1, 4, 5], [1, 4, 5]));
// // true

// console.log(isSame([1, "4", 4], [1, 4, 4]));
// // false

// console.log(isSame([2, 5, 6], 256));
// // "Invalid"

// console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6]));
// // "Invalid"

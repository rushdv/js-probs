// =========== Problem-01 ============ 

function totalFine( fare ) {
          // You have to write your code here
    if (typeof fare !== "number" || fare <= 0){
        return "Invalid" ;
    }

    let fine = fare + (fare*0.20) + 30 ;

    return fine ;
}

// console.log(totalFine(200));     // 270
// console.log(totalFine(0));     // 270
// console.log(totalFine(50));     // 270
// console.log(totalFine(552));     // 270
// console.log(totalFine(-35));     // 270
// console.log(totalFine("65"));     // 270
// console.log(totalFine("Gorib tai ticket katinai"));     // 270







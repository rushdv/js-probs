// =========== Problem-01 ============ 

function totalFine( fare ) {
          // You have to write your code here
    if (typeof fare !== "number" || fare <= 0){
        return "Invalid" ;
    }

    const fine = fare + (fare*0.20) + 30 ;

    return fine ;
}






// =========== Problem-02 ============ 

function  onlyCharacter( str ) {
          // You have to write your code here
    if (typeof str !== "string"){
        return "Invalid"
    }

    const result = str.split(" ").join("").toUpperCase();

    return result;


}







// =========== Problem-03 ============ 

function  bestTeam( player1, player2 ) {
          // You have to write your code here
    
    if (typeof player1 !== "object" || player1 === null ||
        typeof player2 !== "object" || player2 == null
    ) {
        return "Invalid";
    }

    const team1Penalty = player1.foul + player1.cardY + player1.cardR;
    const team2Penalty = player2.foul + player2.cardY + player2.cardR;

    

    if (team1Penalty < team2Penalty){
        return player1.name;
    }
    else if (team2Penalty < team1Penalty){
        return player2.name;
    }
    else{
        return "Tie";
    }

}





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






// =========== Problem-05 ============ 

function  resultReport( marks ) {
          // You have to write your code here
    if (Array.isArray(marks) === false ){
        return "Invalid";
    }

    if (marks.length === 0){
        return { finalScore: 0, pass: 0, fail: 0};
    }

    let total = 0;
    let passCount = 0;
    let failCount = 0;

    for (let i = 0; i< marks.length; i++){
        total += marks[i];
        if (marks[i] >= 40){
            passCount++;
        }
        else{
            failCount++;
        }
    }

    const average = Math.round(total / marks.length);

    return {
        finalScore: average,
        pass: passCount,
        fail: failCount
    }

}

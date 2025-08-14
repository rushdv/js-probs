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


console.log(bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
)); 
// Brazil

console.log(bestTeam(
    { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
    { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
));
// Tie

console.log(bestTeam(
    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
    { name: "France", foul: 10, cardY: 2, cardR: 1 }
));
// Germany

console.log(bestTeam(
    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
    "France"
));
// Invalid



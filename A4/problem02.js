// =========== Problem-02 ============ 

function  onlyCharacter( str ) {
          // You have to write your code here
    if (typeof str !== "string"){
        return "Invalid"
    }

    let result = str.split(" ").join("").toUpperCase();

    return result;


}



// console.log(onlyCharacter("  h e llo wor   ld")); // HELLOWORLD
// console.log(onlyCharacter("Cy   bar- At  tac k  ")); // CYBAR-ATTACK
// console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  ")); // CYBAR-ATTACK
// console.log(onlyCharacter("Serv er : : Do wn")); // CYBAR-ATTACK
// console.log(onlyCharacter(["hack", "me"])); // CYBAR-ATTACK
// console.log(onlyCharacter(true)); // CYBAR-ATTACK

/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

if ( fileName[0] === "#"){
    console.log("Store")
}
else if( fileName.indexOf(".pdf") === fileName.length - 4){
    console.log("Store")
}
else if ( fileName.indexOf(".docx") === fileName.length - 5){
    console.log("Store")
}
else{
    console.log("Delete")
}
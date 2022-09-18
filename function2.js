function getresult(assignment1,assignment2,assignment3){
    console.log(assignment1,assignment2,assignment3)
    const totalmark=assignment1+assignment2+assignment3;
    return totalmark;
}
const assignment1=60;
const assignment2=55;
const assignment3=59;
var avgmark=getresult(assignment1,assignment2,assignment3);
console.log(avgmark);
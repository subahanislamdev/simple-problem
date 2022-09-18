
function getnumber(){
    let result = 1;
    for(var i=1; i<6; i++){
        result=result*i;
    }
    return result;
}
var results=getnumber(6);
console.log(results);
var sum =0;
function getresult(array){
for(var i =0 ; i<array.length; i++){
    var numbers=array[i];
    if(numbers%2==0){
        sum = numbers+sum;
    }
}
return sum;
}
 var array =[11,22,33,44,55,21,34];
 var result= getresult(array)
 console.log(result)
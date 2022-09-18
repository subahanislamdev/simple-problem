function result(n1,n2){
    var sum=n1+n2;
    return sum;
}
var result1=result(2,3);
var result2=result(5,5);

var result3=result(5,5);
var result4=result(5,10);
// first call
var finalresult=result(result1,result2);
// second call
var finalresult1=result(result3,result4);
console.log(finalresult);
console.log(finalresult1);
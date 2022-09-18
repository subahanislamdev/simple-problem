var year=2020;
if(year%4==0){
    console.log('leap year')
}else{
    console.log('not leap year')
}
// using function for leap year
function leapyear(year){
    if(year%4==0){
        return 'leap-year';
    }
    else{
        return 'not leap-year';
    }
} 
 var result3 = leapyear(2023);
 var result4 = leapyear(2020);
 console.log(result3,result4)
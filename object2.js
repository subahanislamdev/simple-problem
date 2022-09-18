var shoppingCard={
    mobile:'sansung', price:12000,color:'black',camera:'dual',bettary:'2000mp'
}
var key=Object.keys(shoppingCard);
var value=Object.values(shoppingCard);
console.log(key,value,shoppingCard);
// for object of property
for(var i=0; i<key.length;i++){
    var metal=key[i]
    console.log(metal);
}
// for object of value
for(var j=0; j<value.length; j++){
    var metals=value[j];
    console.log(metals);
}

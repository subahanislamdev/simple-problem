var shoppingCard={
    mobile:'sansung', price:12000,color:'black',camera:'dual',bettary:'2000mp'
}
// when we will findout the propery then
var metal= Object.keys(shoppingCard);
console.log(metal);
// when we will findout the property value then
var metalValue=Object.values(shoppingCard);
console.log(metalValue);
// when we will find the specific element then
var metalSpecific=shoppingCard.camera;
console.log(metalSpecific);
// alternative way
console.log(shoppingCard['bettary']);
// when we will findout the total object then
console.log(shoppingCard); 
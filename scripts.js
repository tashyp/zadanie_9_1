//scripts.js

function getTriangleArea(a, h) {
if ( (a <= 0) && (h <= 0) ) {
console.log('Incorrect data');
} 
else if ( (a > 0) && (h > 0) ) {    
return(a*h/2);
} 
else {
console.log('Data is ok');
}
}
console.log(getTriangleArea(10, 6))

var triangle1Area = getTriangleArea(10,15);
var	triangle2Area = getTriangleArea(8,13);
var	triangle3Area = getTriangleArea(5,10);


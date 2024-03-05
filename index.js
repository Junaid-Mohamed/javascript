
//  for call stack.
var x = 7;

function getName(){
    console.log("Junaid")
}

getName();
console.log(x)
console.log(getName)

// functions

var y =1;
a();
b();
console.log(y)

function a(){
    var y =10;
    console.log(y)
}

function b(){
    var y =100
    console.log(y)
}
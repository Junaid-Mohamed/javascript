
//  for call stack.
// var x = 7;

// function getName(){
//     console.log("Junaid")
// }

// getName();
// console.log(x)
// console.log(getName)

// // functions

// var y =1;
// a();
// b();
// console.log(y)

// function a(){
//     var y =10;
//     console.log(y)
// }

// function b(){
//     var y =100
//     console.log(y)
// }

// scope & lexical env
// console.log(x,a);
// var x = 10;

// let a = 20;

// a = 30;

// console.log(x,a);

// function a(){
//     var b = 10
//     bq();
//     function bq(){
//         var c=20;
//     }
//     console.log(c);
// }

// a();

// closures.

function x(){
    var z = 10;
    function y(){
        console.log(z);
    }
    z=20;
    return y;
}

var a = x();
a();
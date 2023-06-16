// //Q1:-
// function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// // var counter = counter();
// // alert(counter());
// // alert(counter());
// // alert(counter());
// // alert(counter());




// //Q2:
// let count = 0;
//               (function () {
//                 if(count === 0){
//                   let count = 1;
//                 console.log(count);//What is logged?
//                 }
//                 console.log(count);// What is logged?
//             })();
      




// //Q3:-
//  for(var i = 0 ;i<3 ;i++){
// setTimeout(function log () {
//  console.log(i); //What is logged?
// },1000);
//  }




// //  //Q4:-
// //  function area(length,breadth){
// //     function area1(breadth){
// //         console.log("Area of rectangle : ",length*breadth);
// //     }
// //     area1(breadth)
// //  }
// //  area(10,20)

//  //Output- area : 200

//or


//  //Q4:-
//  function calculateRectangleArea(length) {
//     function innerFunction(breadth) {
//       return length * breadth;
//     }
//     return innerFunction;
//   }
  
//   // output// 
//   const rectangleArea = calculateRectangleArea(9); // Outer function is called with the length parameter
//   const area = rectangleArea(15); // Inner function is called with the breadth parameter
//   console.log(area);




//   //Q5:-
//   function outerfunction(){
//     var a =0;
//     function innerFunction(){
//         a++;
//         console.log(a);
//     }
//     return innerFunction
//   }

//Q6:--
// Print output:
//               var a =12;
//               (function(){
//                             alert(a);
//               })()


//Q7:
// var a =10;
//             var  x =(function(){
//               var a =12;
//               return function (){
//                             alert(a);
//               }
//             })();
//             x();


//Q8:
// var globalVar = "xyz";

// (function outerFunc(outerArg){
//     var outerVar = 'a';

//     (function innerFunc(innerArg){
//               var innerVar = 'b';

//  console.log(
//               "outerArg = " + outerArg + "\n" +
//               "innerArg = " + innerArg + "\n" +
//               "outerVar = " + outerVar + "\n" +
//               "innerVar = " + innerVar + "\n" +
//               "globalVar = " + globalVar);
//     }
//     )(456);
// })(123);








  // //Example of Closure:-
  // function Sum(a){
  //   function result(b){
  //     console.log(a*b);
  //   }
  //   result(20)
  // }
  // Sum(10)
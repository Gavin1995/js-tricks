// 使以下代码打印出：true

// 1.1 console.log(a == 1 && a == 2 && a == 3); // true

const a = {
  valueOf: (function(){
    let x = 1;
    return () => x++;
  })()
};
console.log(a == 1 && a == 2 && a == 3);


// 1.2 browser: console.log(a === 1 && a === 2 && a === 3); // true

// let i = 0;
// Object.defineProperty(window, 'a', {
//   get: function() {
//     return ++i;
//   }
// });
// console.log(a === 1 && a === 2 && a === 3);
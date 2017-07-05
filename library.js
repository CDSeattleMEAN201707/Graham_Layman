var _ = {
   map: function(arr, func) {
        let result = [];
        for(let idx in arr){
            result.push(func(arr[idx]));
        }
        return result;
     //code here;
   },
   reduce: function(arr, func) {
       let result;
       for(let idx in arr){
            result += func(arr[idx]);
       }

     // code here;
   },
   find: function(arr, func) {   
        for(let idx in arr){
            if(func(arr[idx])){
                return arr[idx];
            }
        }
     // code here;
   },
   filter: function(arr, func) {
        let result = [];
        for (let idx in arr){
            if(func(arr[idx])){
                result.push(arr[idx]);
            }
        }
        return result;

     // code here;
   },
   reject: function(arr, func) {
       let result = [];
       for(let idx in arr){
           if(!func(arr[idx])){
                result.push(arr[idx]);
           }
       } 
       return result;
     // code here;
   }
 }
// you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var mapit = _.map([1,2,3,4], function(num){return num * 2;});
console.log(mapit);

var findit = _.find([2, 3, 5, 7, 9], function(num){return num == 7;});
console.log(findit);

var reject = _.reject([2, 3, 5, 7, 9], function(num){return num % 2;});
console.log(reject);
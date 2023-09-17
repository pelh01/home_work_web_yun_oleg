//Create Hello World Function
var createHelloWorld = function() {
    return function() {
        return "Hello World"
    }
};

 const f = createHelloWorld();
 f(); // "Hello World"

//Counter
var createCounter = function(n) {
    let ans =n-1;
    return ()=> {
        ans += 1;
        return ans;
    };
};

//To Be Or Not To Be
var expect = function (val) {
  return {
    toBe: function (toVal) {
      if (val === toVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (notToVal) {
      if (val !== notToVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

//Counter II
var createCounter = function(init) {
    let k = init;
    return {
        increment:() => {
            return k+=1;
        },
        decrement:()=>{
            return k-=1;
        },
        reset:()=>{
            k=init;
            return k;
        }
    }
};

const ans = createCounter(10);
console.log(ans.decrement());
console.log(ans.increment());
console.log(ans.reset());
console.log(ans.increment());

//Apply Transform Over Each Element in Array
var map = function(arr, fn) {
    const ans =[];
    for(let i=0; i<arr.length; i++){
        ans.push(fn(arr[i],i));
    }
    return ans;
};

//Filter Elements from Array
var filter = function(arr, fn) {
    const ans = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i],i))ans.push(arr[i]);
    }
    return ans;
};

//Array Reduce Transformation
var reduce = function(nums, fn, init) {
    for(let i=0; i<nums.length; i++)init= fn(init,nums[i]);
    return init;
};

//Function Composition
var compose = function(functions) {
    return function(x) {
        // x는 숫자 입력값
        if(functions.length ===0) return x;
        let input =x;
        for(let i= functions.length-1; i>=0;i--){
            // k는 함수
            const k = functions[i];
            //input은 k함수를 거치고 나온 숫자.
            input = k(input);

        }
        return input;
    }
};

//Return Length of Arguments Passed
var argumentsLength = function (...args) {
  return args.length;
};

//Allow One Function Call
var once = function(fn) {
    let called =false;
    return function(...args){
        if(called){
            return undefined;
        }else{
            called = true;
            return fn(...args);
        }
    }
};

//Add Two Promises
var addTwoPromises = async function (promise1, promise2) {
  const p1 = await promise1;
  const p2 = await promise2;
  return p1 + p2;
};

//Sleep
async function sleep(millis) {
    await new Promise(res=>setTimeout(res,millis));
}

//Timeout Cancellation
var timeLimit = function(fn, t) {
    return async function(...args) {
        const errAns = new Promise((resolve,reject)=>{
            setTimeout(()=>reject("Time Limit Exceeded"),t)
        });
        const ans = fn(...args);
        return Promise.race([errAns,ans]);
    }
};

//Interval Cancellation
var cancellable = function(fn, args, t) {
    fn(...args); // call the function immediately
    let intervalId = setInterval(() => fn(...args), t);
    return () => clearInterval(intervalId);
}

//Is Object Empty
function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}

//Chunk Array
var chunk = function(arr, size) {
    const chunkedArray = [];
    let index = 0;

    while (index < arr.length) {
        let count = size;
        const temp = [];

        while (count-- > 0 && index < arr.length) {
            temp.push(arr[index]);
            index++;
        }

        chunkedArray.push(temp);
    }

    return chunkedArray;
};

//Array Prototype Last
Array.prototype.last = function() {
    if(this.length ===0) return -1;
    return this[this.length-1];
};

//Sort By
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

//Array Wrapper
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((a,b)=>a+b,0);
}

ArrayWrapper.prototype.toString = function() {
    return "["+this.nums.join(',')+"]";
}

//Calculator with Method Chaining
class Calculator {
  constructor(value) {
    this.result = value;
  }
  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  getResult() {
    return this.result;
  }
}

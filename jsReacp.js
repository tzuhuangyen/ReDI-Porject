//1.Variable Manipulation:
//1-1.創建不同類型的變量並進行操作
// 數字類型變量
let age = 10; // 這是一個數字
let height = 1.75; // 這也是一個數字

// 字符串類型變量
let lastName = 'Alice'; // 這是一個字符串
let greeting = 'Hello, ' + lastName + '!'; // 連接字符串

// 布爾值類型變量
let isStudent = true; // 這是一個布爾值

// 進行操作
let totalHeight = height + 0.25; // 總高度為1.75 + 0.25
console.log(totalHeight); // 輸出: 2.0

console.log(greeting); // 輸出: Hello, Alice!

//1-2.數據類型轉換和類型強制轉換
// 數據類型轉換
let numStr = '123'; // 字符串類型
let num = Number(numStr); // 將字符串轉換為數字
console.log(num + 1); // 輸出: 124

// 類型強制轉換
let num1 = 10;
let str1 = '5';
let result = num1 + str1; // JavaScript 自動把數字 10 轉換成字符串 "10" 來進行連接
console.log(result); // 輸出: "105"

// 類型強制轉換的例子
let isActive = 'false'; // 字符串類型
let isActiveBool = Boolean(isActive); // 將字符串轉換為布爾值，"false" 會變成 true
console.log(isActiveBool); // 輸出: true

//2.Conditional Logic:
//2-1. 年齡驗證程序
// 年齡驗證程序
function checkAge(age) {
  if (age >= 18) {
    console.log('you are allowed to enter');
  } else {
    console.log('you are Not allowed to enter');
  }
}

// 使用函數進行驗證
checkAge(20); // 輸出: 你已滿18歲，可以進入這個網站。
checkAge(16); // 輸出: 你未滿18歲，無法進入這個網站。

//2-2. 基本計算器
// 基本計算器
function calculate(operation, num1, num2) {
  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operation';
  }
  return result;
}

// 使用函數進行計算
console.log(calculate('add', 5, 3)); // 輸出: 8
console.log(calculate('subtract', 10, 4)); // 輸出: 6
console.log(calculate('multiply', 7, 6)); // 輸出: 42
console.log(calculate('divide', 8, 2)); // 輸出: 4
console.log(calculate('modulus', 8, 2)); // 輸出: 無效的操作

//3.Loops and Arrays:
//3-1 Iterating over arrays using different types of loops.
//3-1-1 for
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(`for:${numbers[i]}`); // 輸出每個數字
}
//3-1-2 for...of
for (const number of numbers) {
  console.log(` for...of,${number}`); // 輸出每個數字
}
//3-1-3 forEach

numbers.forEach(function (number) {
  console.log(`forEach:${number}`); // 輸出每個數字
});
//3-2 Creating a function that finds the largest number in an array.
function findMaxNumber(arr) {
  if (arr.length === 0) {
    return null; // 如果陣列是空的，返回 null
  }

  let max = arr[0]; // 假設第一個數字是最大的

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // 更新最大值
    }
  }

  return max;
}
theLargestNumber = findMaxNumber([10, 2, 3, 4, 5]);
console.log(`the Largest Number:${theLargestNumber}`); // 輸出: 5

//4.Functions and Scope:
//4-1 Writing functions to encapsulate logic and understanding how scope affects variable accessibility.
//4-1-1 Writing functions to encapsulate logic 定義一個函數來計算兩個數字的和
function add(a, b) {
  return a + b;
}

// 使用函數
let sum = add(5, 3);
console.log(sum); // 輸出: 8
//4-1-2 understanding how scope affects variable accessibility.
let globalVar = 'I am global'; // 全局變量

function exampleFunction() {
  let localVar = 'I am local'; // 局部變量

  console.log(globalVar); // 可以訪問全局變量
  console.log(localVar); // 可以訪問局部變量
}

exampleFunction();

console.log(globalVar); // 可以訪問全局變量
//console.log(localVar); // 會報錯，因為 localVar 在函數外部不可訪問

//4-2 Implementing higher-order functions that take other functions as arguments.
// 高階函數，接受一個函數作為參數
function operateOnNumbers(a, b, operation) {
  return operation(a, b);
}

// 定義一個加法函數
function add(x, y) {
  return x + y;
}

// 定義一個乘法函數
function multiply(x, y) {
  return x * y;
}

// 使用高階函數
console.log(operateOnNumbers(5, 3, add)); // 輸出: 8
console.log(operateOnNumbers(5, 3, multiply)); // 輸出: 15

//5. Event Handling and DOM Manipulation:
//5-1 Building an interactive web page that responds to user clicks and form submissions.
//5-2. Creating a to-do list application where users can add and remove tasks dynamically.

//6 Error Handling and Debugging:
//6-1 Practicing error handling by writing code that intentionally throws and catches errors.
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error('Cannot divide by zero,yo');
    }
    return a / b;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

console.log(divideNumbers(10, 2)); // 輸出: 5
console.log(divideNumbers(10, 0)); // 輸出: Error: Cannot divide by zero

//6-2 Using browser developer tools to set breakpoints and inspect the state of the application during execution.

//7 Asynchronous Operations:
//7-1-1 Fetching data from an API using Promises and async/await.
// 使用 Promises函數來獲取用戶數據
function fetchUserData() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

// 使用 Promise
fetchUserData()
  .then((userData) => {
    console.log(userData); // 顯示用戶數據
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
//使用 async/await
// 使用 async/await 獲取用戶數據
async function fetchUserData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// 使用 async/await
fetchUserData().then((userData) => {
  console.log(userData); // 顯示用戶數據
});

//7-2 Building a simple application that displays user data retrieved from a server.

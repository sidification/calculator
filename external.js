let a
let b
let arr = []

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(arr) {
  let low = 0;
  let high = 0;
  let res = 0; 

  while(high < arr.length) {
    let num1 = res;
    let num2 = '';
    let operator = '';
    
    // if there is a number at ith index, add it to num1
    while(Number(arr[low]) || arr[low] == '0') {
      num1 += arr[low];
      low++;
    }
    operator = arr[low];
    high = low + 1;
    // from i+1th index store numbers in num2
    while(Number(arr[high]) || arr[high] == '0') {
      num2 += arr[high];
      high++
    }
    
    // based on the value of the operator, carry out operation
    if (operator == '+') {
      res = add(Number(num1), Number(num2))
    }

    if(operator == '-') {
      res = subtract(Number(num1), Number(num2))
    }

    if(operator == '*') {
      res = multiply(Number(num1), Number(num2))
    }

    if(operator == '/') {
      res = divide(Number(num1), Number(num2))
    }
    low = high;
  } 
  return res;
}

// display text in display box
const rows = Array.from(document.getElementsByClassName('row'));
const display = document.querySelector("div.display")


rows.forEach(row => {
  let rowChild = row.children;
  for(let i = 0; i < rowChild.length; i++) {
    rowChild[i].addEventListener("click", (e) => {
      if(!(e.target.textContent == '=')) {
        arr += e.target.textContent
        display.textContent = arr
      }
      else {
        display.textContent = ''
        display.textContent = operate(arr);
        arr = [];
      }
    }); 
  }
});




// clear text
  const clear = document.getElementById("C")
  clear?.addEventListener("click", () => {
    arr = []
  if (display) {
    display.textContent= arr;
  }
});
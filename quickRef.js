// const numbers = [1, 2, "rshul", 4];

// const numbersObject = numbers.reduce((acc, curr) => {
//   acc[curr] = curr; // Setting the key and value as the current number
//   return acc;
// }, {});

// console.log(numbersObject.rshul); // Output: {1: 1, 2: 2, 3: 3, 4: 4}



// let array = [10, 55, 30, 40, 50];

// // Outer loop to go through each element
// for (let i = 0; i < array.length; i++) {
//     console.log("Outer Loop: Element at index " + i + " is " + array[i]);

//     // Inner loop to compare the element at index i with the next elements
//     for (let j = i + 1; j < array.length; j++) {
//         console.log("    Comparing with element at index " + j + ": " + array[j]);
//     }
// }

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          // If the current element is greater than the next, swap them
          if (arr[j] > arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
  return arr;
}

let arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort(arr1));

// function newWord() {
  // let smallW = `aBcdeFF`;
  let smallW = `dddddd`;
let splitArr = smallW.toLowerCase().split("");
console.log(splitArr);
let newWord = smallW.toUpperCase().split("");
console.log(newWord);

let arr = splitArr.concat(newWord);
console.log(arr);


let one = arr[0]+newWord[1]+arr[2]+newWord[3]+arr[4]+newWord[5];
let two = newWord[0]+arr[1]+newWord[2]+arr[3]+newWord[4]+arr[5];
console.log([one, two]);









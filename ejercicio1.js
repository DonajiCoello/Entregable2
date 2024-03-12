
let arr =["This", "is", "a", "sentence."];

console.log("Utilizando un join");
console.log(arr.join(" "));

function printOutString(arr) {
    let sentence = "";
    for (let wordIndex = 0; wordIndex < arr.length; wordIndex++) {
        sentence += " "+arr[wordIndex];
    }
    return sentence;
  }
  console.log(printOutString(arr));


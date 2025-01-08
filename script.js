let newStr = "Hello, World!";

console.log(newStr);
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(newStr));

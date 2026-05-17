"use strict";
// 1. Echo Function with Generics
function echo(input) {
    return input;
}
// String
const text = echo("Hello");
console.log(text);
// Number
const numberValue = echo(100);
console.log(numberValue);
// Array
const numbers = echo([1, 2, 3]);
console.log(numbers);
// Object
const user = echo({
    name: "Zakir",
    age: 20
});
console.log(user);
// ApiResult<string>
const message = {
    status: "success",
    data: "User created"
};
console.log(message);
// ApiResult<object>
const userResult = {
    status: "success",
    data: {
        id: 1,
        name: "Ali"
    }
};
console.log(userResult);
// 3. First Element Function
function first(items) {
    return items[0];
}
// Numbers
const firstNumber = first([10, 20, 30]);
console.log(firstNumber);
// Strings
const firstString = first(["A", "B", "C"]);
console.log(firstString);
// Objects
const firstUser = first([
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Ali" }
]);
console.log(firstUser);

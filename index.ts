// 1. Echo Function with Generics

function echo<T>(input: T): T {
  return input;
}

// String
const text = echo<string>("Hello");
console.log(text);

// Number
const numberValue = echo<number>(100);
console.log(numberValue);

// Array
const numbers = echo<number[]>([1, 2, 3]);
console.log(numbers);

// Object
const user = echo<{ name: string; age: number }>({
  name: "Zakir",
  age: 20
});

console.log(user);


// 2. Generic Interface

interface ApiResult<T> {
  status: string;
  data: T;
}

// ApiResult<string>
const message: ApiResult<string> = {
  status: "success",
  data: "User created"
};

console.log(message);

// ApiResult<object>
const userResult: ApiResult<{ id: number; name: string }> = {
  status: "success",
  data: {
    id: 1,
    name: "Ali"
  }
};

console.log(userResult);


// 3. First Element Function

function first<T>(items: T[]): T {
  return items[0];
}

// Numbers
const firstNumber = first<number>([10, 20, 30]);
console.log(firstNumber);

// Strings
const firstString = first<string>(["A", "B", "C"]);
console.log(firstString);

// Objects
const firstUser = first<{ id: number; name: string }>([
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Ali" }
]);

console.log(firstUser);
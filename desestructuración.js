//PROBLEMA 1
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output: Tesla, Mercedes
console.log(randomCar);
console.log(otherRandomCar);

//PROBLEMA 2
const employee = {
  name: "Elon",
  age: 47,
  company: "Tesla",
};
const { name: otherName } = employee;
//Predict the output: la variable name no está definida, no existe
console.log(name);
console.log(otherName);

//PROBLEMA 3
const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output: 12345, el hashedPassword no está definido porque no existe dentro del objeto
console.log(password);
console.log(hashedPassword);

//PROBLEMA 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output: TRUE, FALSE
console.log(first == second);
console.log(first == third);

//PROBLEMA 5
const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output: value, [1, 5, 1, 8, 3, 3], 1, 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

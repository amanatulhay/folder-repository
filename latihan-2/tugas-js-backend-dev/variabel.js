// Buat program yang mendemonstrasikan penggunaan variabel let, const, dan var.
let studentAge = 10;
const studentName = "Nobita";
var studentStatus = "active"; 

console.log(studentAge);
console.log(studentName);
console.log(studentStatus, "\n");

// Buat program yang mencakup semua tipe data primitif dan non-primitif, serta menggunakan operator aritmatika dan perbandingan.

// Tipe data primitif
let color = "white"; // string
let weight = 850; // number
let isAvailable = true; // boolean
let brand = null; // null
let price; // undefined

// Tipe data non-primitif
const car = {        // Object
    brand: "Perodua Alza",
    year: 2019
}; 
const carBrands = ["Perodua", "Proton", "Toyota"]; // Array

console.log(color);
console.log(weight);
console.log(isAvailable);
console.log(brand);
console.log(price);
console.log(car);
console.log(carBrands, "\n");

// Operator aritmatika
let x1 = 2024
let x2 = 12
let total = x1 + x2; // +
let selisih = x1 - x2 // -
let perkalian = x1 * x2 // *
let bagi = x1 / x2 // /
let sisaBagi = x1 % x2 // %

console.log(total);
console.log(selisih);
console.log(perkalian);
console.log(bagi);
console.log(sisaBagi, "\n");

// Operator perbandingan

let x3 = 0;
let x4 = 1000;
let x5 = "1000";

console.log(x4 == x5);
console.log(x4 === x5);
console.log(x4 != x5);
console.log(x4 !== x5);
console.log(x3 > x4);
console.log(x3 <= x4);

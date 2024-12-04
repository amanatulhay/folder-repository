const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Buat fungsi yang menghitung luas lingkaran berdasarkan jari-jari yang diberikan.
const areaOfACircle = (radius) => Math.PI * Math.pow(radius, 2);

const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question("Masukkan jari-jari lingkaran = ", (answer) => {
            resolve(parseInt(answer));
        });
    });
};

// Buat fungsi yang menerima array angka dan mengembalikan array baru dengan angka-angka yang dikuadratkan.
const arrayKuadrat = (input) => input.map(el => Math.pow(el, 2));

const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question("Masukkan jumlah elemen array = ", (answer) => {
            resolve(parseInt(answer));
        });
    });
};

const question3 = (index) => {
    return new Promise((resolve, reject) => {
        rl.question(`Masukkan elemen array ke-${index} = `, (answer) => {
            resolve(parseInt(answer));
        });
    });
};

const main = async () => {
    const radius = await question1();
    console.log(areaOfACircle(radius)) // luas lingkaran

    const length = await question2();
    let inputArray = [];
    for (let i = 0; i < length; i++) {
        let element = await question3(i);
        inputArray.push(element);
    }  
    console.log(arrayKuadrat(inputArray)); // kuadrat dari array     

    rl.close()
}
  
main();
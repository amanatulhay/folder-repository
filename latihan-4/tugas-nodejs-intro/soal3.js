const jumlahModule = require('./jumlah'); // imoort module jumlah
const readline = require("readline");

// input angka
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = (n) => {
    return new Promise((resolve, reject) => {
        rl.question(`Masukkan input angka ke-${n} = `, (answer) => {
            resolve(parseInt(answer));
        });
    });
};

const main = async () => {
    const x = await question(1); // angka ke-1
    const y = await question(2); // angka ke-2
    rl.close()
    const result = jumlahModule.jumlahDuaAngka(x,y); // pemanggilan modul jumlah
    console.log("Jumlah dua angka =", result);
}
main();



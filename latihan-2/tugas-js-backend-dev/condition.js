// Buat program yang meminta input dari pengguna dan menggunakan struktur if else untuk menentukan apakah angka tersebut genap atau ganjil.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question("Masukkan input angka = ", (answer) => {
            if (parseInt(answer) % 2 === 0 ){
                console.log(`Angka ${answer} adalah genap`);
            } else {
                console.log(`Angka ${answer} adalah ganjil`);
            }
            console.log();
            resolve();
        });
    });
};

// Buat program yang menggunakan switch untuk mencetak nama hari berdasarkan nomor hari (1 untuk Senin, 2 untuk Selasa, dst.).
const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question("Masukkan nomor hari = ", (answer) => {
            let namaHari;
            switch (parseInt(answer)) {
                case 1:
                    namaHari = "Senin";
                    break;
                case 2:
                    namaHari = "Selasa";
                    break;
                case 3:
                    namaHari = "Rabu";
                    break;
                case 4:
                    namaHari = "Kamis";
                    break;
                case 5:
                    namaHari = "Jumat";
                    break;
                case 6:
                    namaHari = "Sabtu";
                    break;
                case 7:
                    namaHari = "Minggu";
                    break;
                default:
                    namaHari = "Input hari tidak valid";
            }
            console.log(namaHari);
            resolve();
        });
    });
};

const main = async () => {
    await question1()
    await question2()
    rl.close()
  }
  
main();
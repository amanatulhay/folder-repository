// Tugas
// 1. Buatlah function yang mempunyai parameter / argument object tasks kemudian return value nya berupa string (gunakan teknik string literal). 
function taskString (task) {
    return `task title: ${task.title}, description: ${task.description}, isDone: ${task.isDone}`;
}

const taskSample = {
    title: "Cleaning task",
    description: "Membersihkan seluruh bagian rumah, menyapu dan mengepel",
    isDone: false,
};

console.log(taskString(taskSample));

// 2. Tolong jelaskan dengan caramu sendiri tentang kode berikut ini: 
function sumOfNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

const result = sumOfNumbers(1, 2, 3, 4, 5);
console.log(`The sum of 1, 2, 3, 4, and 5 is: ${result}`);

// Jawaban:
// Code pada soal nomor 2 merupakan fungsi penjumlahan angka bernama sumOfNumbers,
// yaitu sebuah function dengan rest parameter, yaitu mengumpulkan argumen dalam
// sebuah array yang bernama numbers.

// Dalam code di atas, fungsi sumOfNumbers dipanggil dengan argumen-argumennya
// adalah angka 1 sampai dengan 5 yang akan dikumpulkan menjadi array numbers
// (numbers = [1, 2, 3, 4, 5]).

// Di dalam fungsi sumOfNumbers terdapat fungsi reducer yang dipanggil di setiap iterasi
// elemen array sehingga menghasilkan satu nilai tunggal.

// Dalam kasus di atas, accumulator adalah variable total, current value adalah number,
// dan initial value adalah 0. Output yang dihasilkan pada console adalah “The sum of 1, 2, 3, 4, and 5 is: 15”

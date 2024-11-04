// Fungsi untuk membuat input sesuai jumlah mata pelajaran
function updateFields() {
    const subjectCount = document.getElementById("subjectCount").value;
    const scoreFields = document.getElementById("scoreFields");
    scoreFields.innerHTML = "";  // Bersihkan input sebelumnya

    // Validasi input harus berupa angka
    if (isNaN(subjectCount) || subjectCount < 1) {
        alert("Masukkan angka yang valid untuk jumlah mata pelajaran!");
        return;
    }

    // Membuat input nilai
    for (let i = 0; i < subjectCount; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = `Nilai Mata Pelajaran ${i + 1}`;
        input.className = "score";
        input.setAttribute("oninput", "checkNumber(this)");  // Mengecek tipe data langsung saat input
        scoreFields.appendChild(input);
    }
}

// Fungsi untuk validasi nilai input
function checkNumber(input) {
    if (isNaN(input.value)) {
        input.value = "";  // Hapus nilai jika bukan angka
        alert("Nilai harus berupa angka!");
    }
}

// Fungsi untuk menghitung rata-rata dan grade
function calculateGrades() {
    const scores = document.getElementsByClassName("score");
    let total = 0;

    // Loop untuk memproses setiap nilai
    for (let i = 0; i < scores.length; i++) {
        const score = scores[i].value;

        if (score === "" || isNaN(score)) {
            alert("Semua nilai harus diisi dengan angka!");
            return;
        }

        total += parseFloat(score);
    }

    // Menghitung rata-rata
    const average = total / scores.length;
    let grade;

    // Menentukan grade berdasarkan rata-rata
    if (average >= 90) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else {
        grade = "C";
    }

    // Menampilkan hasil menggunakan innerHTML
    document.getElementById("result").innerHTML = `
        <h3>Hasil:</h3>
        <p>Rata-rata Nilai: ${average.toFixed(2)}</p>
        <p>Grade: ${grade}</p>
    `;
}

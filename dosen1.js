//daerah perpindahan halaman---------------------------
function pindah2() {
            window.location.href = "dosen2.html";
}

function pindah3() {
            window.location.href = "dosen3.html";
}
//-----------------------------------------------------


//daerah admiministrator jadwal---------------------
const senin = [
    {
        kelas: "MI 4",
        waktu: "09:00 - 09:50",
        kode: "MKMI0206",
        matkul: "Struktur Data",
        sks: 1,
        dosen: "Fitriani Dwi Ratna",
        ruang: "LAB 1"
    },
    {
        kelas: "MI 4",
        waktu: "09:50 - 12:20",
        kode: "MKMI0206P",
        matkul: "Praktikum Struktur Data",
        sks: 3,
        dosen: "Fitriani Dwi Ratna",
        ruang: "LAB 1"
    },
    {
        kelas: "MI 6A",
        waktu: "09:00 - 10:40",
        kode: "MKDU0061",
        matkul: "Ke-PGRIan",
        sks: 2,
        dosen: "Mucharobin",
        ruang: "RK 1"
    },
    {
        kelas: "MI 6A",
        waktu: "10:40 - 12:20",
        kode: "MKMI0124",
        matkul: "Desain Grafis",
        sks: 2,
        dosen: "Agus Jaka Sri H",
        ruang: "RK 1"
    },
    {
        kelas: "MI 6B",
        waktu: "16:00 - 17:40",
        kode: "MKMI0125",
        matkul: "Kewirausahaan",
        sks: 2,
        dosen: "Fandi Ahmad Kurniawan",
        ruang: "RK 1"
    }
];

///------------------------------------------------------
const selasa = [
    {
        kelas: "MI 4",
        waktu: "09:00 - 09:50",
        kode: "MKMI0206",
        matkul: "Struktur Data",
        sks: 1,
        dosen: "Fitriani Dwi Ratna",
        ruang: "LAB 1"
    },
    {
        kelas: "MI 4",
        waktu: "09:50 - 12:20",
        kode: "MKMI0206P",
        matkul: "Praktikum Struktur Data",
        sks: 3,
        dosen: "Fitriani Dwi Ratna",
        ruang: "LAB 1"
    },
    {
        kelas: "MI 6A",
        waktu: "09:00 - 10:40",
        kode: "MKDU0061",
        matkul: "Ke-PGRIan",
        sks: 2,
        dosen: "Mucharobin",
        ruang: "RK 1"
    },
    {
        kelas: "MI 6A",
        waktu: "10:40 - 12:20",
        kode: "MKMI0124",
        matkul: "Desain Grafis",
        sks: 2,
        dosen: "Agus Jaka Sri H",
        ruang: "RK 1"
    },
    {
        kelas: "MI 6B",
        waktu: "16:00 - 17:40",
        kode: "MKMI0125",
        matkul: "Kewirausahaan",
        sks: 2,
        dosen: "Fandi Ahmad Kurniawan",
        ruang: "RK 1"
    }
];

//---------------------------------------------------
const rabu = [
    {
        kelas: "MI 4",
        waktu: "09:00 - 09:50",
        kode: "MKMI0206",
        matkul: "Struktur Data",
        sks: 1,
        dosen: "Fitriani Dwi Ratna",
        ruang: "LAB 1"
    },
    {
        kelas: "MI 4",
        waktu: "09:50 - 12:20",
        kode: "MKMI0206P",
        matkul: "Praktikum Struktur Data",
        sks: 3,
        dosen: "Fitriani Dwi Ratna",
        ruang: "LAB 1"
    },
    {
        kelas: "MI 6A",
        waktu: "09:00 - 10:40",
        kode: "MKDU0061",
        matkul: "Ke-PGRIan",
        sks: 2,
        dosen: "Mucharobin",
        ruang: "RK 1"
    },
    {
        kelas: "MI 6A",
        waktu: "10:40 - 12:20",
        kode: "MKMI0124",
        matkul: "Desain Grafis",
        sks: 2,
        dosen: "Agus Jaka Sri H",
        ruang: "RK 1"
    },
    {
        kelas: "MI 6B",
        waktu: "16:00 - 17:40",
        kode: "MKMI0125",
        matkul: "Kewirausahaan",
        sks: 2,
        dosen: "Fandi Ahmad Kurniawan",
        ruang: "RK 1"
    }
];

//---------------------------------------------------
const kamis = [
    {
        kelas: "MI 4",
        waktu: "09:00 - 09:50",
        kode: "MKMI0206",
        matkul: "Struktur Data",
        sks: 1,
        dosen: "Fitriani Dwi Ratna",
        ruang: "LAB 1"
    },
    {
        kelas: "MI 4",
        waktu: "09:50 - 12:20",
        kode: "MKMI0206P",
        matkul: "Praktikum Struktur Data",
        sks: 3,
        dosen: "Fitriani Dwi Ratna",
        ruang: "LAB 1"
    },
    {
        kelas: "MI 6A",
        waktu: "09:00 - 10:40",
        kode: "MKDU0061",
        matkul: "Ke-PGRIan",
        sks: 2,
        dosen: "Mucharobin",
        ruang: "RK 1"
    },
    {
        kelas: "MI 6A",
        waktu: "10:40 - 12:20",
        kode: "MKMI0124",
        matkul: "Desain Grafis",
        sks: 2,
        dosen: "Agus Jaka Sri H",
        ruang: "RK 1"
    },
    {
        kelas: "MI 6B",
        waktu: "16:00 - 17:40",
        kode: "MKMI0125",
        matkul: "Kewirausahaan",
        sks: 2,
        dosen: "Fandi Ahmad Kurniawan",
        ruang: "RK 1"
    }
];

//---------------------------------------------------
const jumat = [
    {
        kelas: "MI 4",
        waktu: "09:00 - 09:50",
        kode: "MKMI0206",
        matkul: "Struktur Data",
        sks: 1,
        dosen: "Fitriani Dwi Ratna",
        ruang: "LAB 1"
    },
    {
        kelas: "MI 4",
        waktu: "09:50 - 12:20",
        kode: "MKMI0206P",
        matkul: "Praktikum Struktur Data",
        sks: 3,
        dosen: "Fitriani Dwi Ratna",
        ruang: "LAB 1"
    },
    {
        kelas: "MI 6A",
        waktu: "09:00 - 10:40",
        kode: "MKDU0061",
        matkul: "Ke-PGRIan",
        sks: 2,
        dosen: "Mucharobin",
        ruang: "RK 1"
    },
    {
        kelas: "MI 6A",
        waktu: "10:40 - 12:20",
        kode: "MKMI0124",
        matkul: "Desain Grafis",
        sks: 2,
        dosen: "Agus Jaka Sri H",
        ruang: "RK 1"
    },
    {
        kelas: "MI 6B",
        waktu: "16:00 - 17:40",
        kode: "MKMI0125",
        matkul: "Kewirausahaan",
        sks: 2,
        dosen: "Fandi Ahmad Kurniawan",
        ruang: "RK 1"
    }
];
const tsenin = document.querySelector("#jadwal-senin tbody");
const tselasa = document.querySelector("#jadwal-selasa tbody");
const trabu = document.querySelector("#jadwal-rabu tbody");
const tkamis = document.querySelector("#jadwal-kamis tbody");
const tjumat = document.querySelector("#jadwal-jumat tbody");

senin.forEach(item => {
    tsenin.innerHTML += `
        <tr>
            <td>${item.kelas}</td>
            <td>${item.waktu}</td>
            <td>${item.kode}</td>
            <td>${item.matkul}</td>
            <td>${item.sks}</td>
            <td>${item.dosen}</td>
            <td>${item.ruang}</td>
        </tr>
    `;
});

selasa.forEach(item => {
    tselasa.innerHTML += `
        <tr>
            <td>${item.kelas}</td>
            <td>${item.waktu}</td>
            <td>${item.kode}</td>
            <td>${item.matkul}</td>
            <td>${item.sks}</td>
            <td>${item.dosen}</td>
            <td>${item.ruang}</td>
        </tr>
    `;
});

rabu.forEach(item => {
    trabu.innerHTML += `
        <tr>
            <td>${item.kelas}</td>
            <td>${item.waktu}</td>
            <td>${item.kode}</td>
            <td>${item.matkul}</td>
            <td>${item.sks}</td>
            <td>${item.dosen}</td>
            <td>${item.ruang}</td>
        </tr>
    `;
});

kamis.forEach(item => {
    tkamis.innerHTML += `
        <tr>
            <td>${item.kelas}</td>
            <td>${item.waktu}</td>
            <td>${item.kode}</td>
            <td>${item.matkul}</td>
            <td>${item.sks}</td>
            <td>${item.dosen}</td>
            <td>${item.ruang}</td>
        </tr>
    `;
});

jumat.forEach(item => {
    tjumat.innerHTML += `
        <tr>
            <td>${item.kelas}</td>
            <td>${item.waktu}</td>
            <td>${item.kode}</td>
            <td>${item.matkul}</td>
            <td>${item.sks}</td>
            <td>${item.dosen}</td>
            <td>${item.ruang}</td>
        </tr>
    `;
});
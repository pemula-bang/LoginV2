const musik = document.getElementById("musik");
const pause = document.getElementById("pause");
const lanjut = document.getElementById("lanjut");
const kembali = document.getElementById("kembali");
const daftar = document.querySelectorAll(".lagu");

let sekarang = 0;

//fungsi utama---------------------------------------
function putar(index) {
    sekarang = index;

    if (sekarang >= daftar.length) sekarang = 0;
    if (sekarang < 0) sekarang = daftar.length -1;

    musik.src = daftar[sekarang].dataset.src;
    musik.play();
};
//---------------------------------------------------


//klik daftar lagu-----------------------
daftar.forEach((lagu, index) => {
    lagu.onclick = () => putar(index);
});
//---------------------------------------


// tombol lanjut---------------------------------
pause.onclick = () => {
    musik.paused ? musik.play() : musik.pause()
}
//-----------------------------------------------



//tombol lanjut-----------------------------
lanjut.onclick = () => putar(sekarang + 1);
//------------------------------------------


//tombol kemabali---------------------------
kembali.onclick = () => putar(sekarang - 1);
//------------------------------------------



//auto lanjut------------------------------
musik.onended = () => putar(sekarang + 1);
//-----------------------------------------



//kunci volume--------------------------------
let suara = document.getElementById("musik");
suara.volume = 0.3;
//--------------------------------------------
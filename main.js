AOS.init({
    easing: 'ease-out-back',
    duration: 1000
}); 

/*=== DEFAULT PROFIL ===*/
$(window).on("load", function() {
    $('img').each(function() {
        var $this = $(this) $this.attr('src', $this.attr('src').replace('//resources.blogblog.com/img/blank.gif', '//3.bp.blogspot.com/-UNjtW9_9fcs/VrvrBJi_8CI/AAAAAAAABP4/jjFMkoCi6Ig/s1600/blank-user-avatar.png'))
    })
}); 

/*=== BUKU TAMU ===*/
var modal = document.getElementById("qr-modal");
var btn = document.getElementById("buka-bt");
var span = document.getElementsByClassName("tutup")[0];
btn.onclick = function() {
    modal.style.display = "flex";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
var nama = document.getElementById("nama").innerText;
var alamat = document.getElementById("alamat").innerText;
var linkUndangan = document.getElementById("link-undangan").innerHTML;
var pesan = 'Alhamdulillah, telah hadir:';
var namaBefore = '*Nama :*';
var alamatBefore = '*Alamat :*';
var waktuBefore = '*Waktu Kehadiran:*';
var linkUndanganBefore = '*Link Undangan:*';
var teksNama = encodeURIComponent(nama);
var teksAlamat = encodeURIComponent(alamat);
var teksPesan = encodeURIComponent(pesan);
var today = new Date();
var Date1 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var date = Date1.split('-')[2] + '-' + Date1.split('-')[1] + '-' + Date1.split('-')[0];
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var waktu = date + ' ' + time;
var linkWA = "https://wa.me/" + nomorBT + "?text=" + teksPesan + "%0A%0A" + namaBefore + "%0A" + teksNama + "%0A%0A" + alamatBefore + "%0A" + teksAlamat + "%0A%0A" + waktuBefore + "%0A" + waktu + "%0A%0A" + linkUndanganBefore + "%0A" + linkUndangan;
var str = linkWA;
document.getElementById("result").value = linkWA;
QRCode.toCanvas(document.getElementById("canvas"), str, function(error) {});
document.getElementById("judul-bt").innerHTML = judulBT;
document.getElementById("teks-bt-atas").innerHTML = kalimatAtas;
document.getElementById("teks-bt-bawah").innerHTML = kalimatBawah; 

/*=== NAVIGASI ===*/
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOffset sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id') if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll', scrollActive) 

/*=== AUDIO ===*/ document.getElementById("result-audio").src = urlAudio;
let t;
let toast = document.getElementById("toast");

function showToast() {
    clearTimeout(t);
    toast.style.transform = "translateY(0)";
    t = setTimeout(() => {
        toast.style.transform = "translateY(-80px)"
    }, 4000);
}; 

/*=== HITUNGAN MUNDUR ===*/
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("hitung").innerHTML = "<p>" + days + "<span>Hari</span></p>" + "<p>" + hours + "<span>Jam</span></p>" + "<p>" + minutes + "<span>Menit</span></p>" + "<p>" + seconds + "<span>Detik</span></p>";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = selesai;
        var element = document.getElementById("ingat");
        element.classList.add("hide");
    }
}, 1000); 

/*=== GOOGLE CALENDAR ===*/
var urlEvent = document.getElementById('url-event').innerHTML;
var resultEvent = document.getElementById('ingat').href = urlEvent; 

/*=== DROPDOWN MENU ===*/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var drop2;
        for (drop2 = 0; drop2 < dropdowns.length; drop2++) {
            var openDropdown = dropdowns[drop2];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

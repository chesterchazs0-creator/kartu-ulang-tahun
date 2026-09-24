// ================================
// TOMBOL BUKA SEKARANG
// ================================

const openButton = document.getElementById("openButton");
const birthday = document.getElementById("birthday");

// ================================
// BUKA HADIAH + CONFETTI
// ================================

openButton.addEventListener("click", function () {

     // Mulai musik
    const birthdayMusic = document.getElementById("birthdayMusic");

    birthdayMusic.play();

    // Scroll ke ucapan
    birthday.scrollIntoView({
        behavior: "smooth"
    });

    // Confetti
    for (let i = 0; i < 60; i++) {
        createConfetti();
    }

});

    // Scroll ke ucapan ulang tahun
    birthday.scrollIntoView({
        behavior: "smooth"
    });

    // Buat confetti
    for (let i = 0; i < 60; i++) {

        createConfetti();

    }

// ================================
// FUNGSI CONFETTI
// ================================

function createConfetti() {

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    const bentuk = [
        "🎉",
        "✨",
        "💖",
        "💕",
        "🌸",
        "⭐"
    ];

    confetti.innerHTML =
        bentuk[Math.floor(Math.random() * bentuk.length)];

    confetti.style.left =
        Math.random() * 100 + "vw";

    confetti.style.animationDuration =
        (Math.random() * 2 + 2) + "s";

    confetti.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    document.body.appendChild(confetti);

    setTimeout(function () {

        confetti.remove();

    }, 4000);

}

// ================================
// TOMBOL BUKA PESAN
// ================================

const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

messageButton.addEventListener("click", function () {

    message.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(function () {

        if (index === 0) {
            mulaiMengetik();
        }

    }, 1000);

});

// ================================
// ANIMASI HATI
// ================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 6000);
}


// Buat hati setiap 500ms
setInterval(createHeart, 500);

// ================================
// TOMBOL PLAY / PAUSE MUSIK
// ================================

const birthdayMusic =
    document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");


musicButton.addEventListener("click", function () {

    if (birthdayMusic.paused) {

        birthdayMusic.play();

        musicButton.textContent = "🎵";

        musicButton.classList.add("playing");

    } else {

        birthdayMusic.pause();

        musicButton.textContent = "🔇";

        musicButton.classList.remove("playing");

    }

});

// ================================
// EFEK MENGETIK
// ================================

const typingText =
    document.getElementById("typingText");

const finalMessage =
    document.getElementById("finalMessage");

const pesan =
`Selamat ulang tahun, Dodol. 🎂❤️

Aku selalu mencintai kamu.

Kamu adalah pilihan masa depan aku yang terpilih.

Dan kalau kamu bertanya,
siapa jawaban dari doa-doa aku selama ini...

Jawabannya adalah kamu. ❤️`;


let index = 0;


function mulaiMengetik() {

    if (index < pesan.length) {

        typingText.textContent += pesan.charAt(index);

        index++;

        setTimeout(mulaiMengetik, 45);

    } else {

        setTimeout(function () {

            finalMessage.style.display = "block";

        }, 800);

    }

}
// ================================
// ANIMASI SAAT SECTION MUNCUL
// ================================

const revealElements =
    document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    observer.observe(element);

});
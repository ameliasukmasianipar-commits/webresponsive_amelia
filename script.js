// ==========================================
// 1. NAVIGASI HAMBURGER DAN SIDEBAR
// ==========================================

const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebarKiri = document.getElementById('sidebarKiri');
const navLinks = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', function () {
  sidebarKiri.classList.toggle('aktif');
  navLinks.classList.toggle('aktif');
});


// ==========================================
// 2. DATABASE PERTANYAAN DAN JAWABAN
// ==========================================

const qaData = {

  1: {
    q: "Dimana lokasi SMKN 9 Medan?",
    a: "SMK Negeri 9 Medan beralamat di Jl. Patriot No. 20 A, Lalang, Kec. Medan Sunggal, Kota Medan, Sumatera Utara."
  },

  2: {
    q: "Apa saja jurusan di SMKN 9 Medan?",
    a: 
`1. (RPL)Rekayasa Perangkat Lunak
2. (TKJ)Teknik Jaringan Komputer 
3. (DKV)Desain Komunikasi Visual
4. (BCF)Broadcasting dan Perfilman
5. (Peksos)Pekerjaan Sosial
6. Animasi`
  },

  3: {
    q: "Apa yang dipelajari di jurusan RPL?",
    a: "Siswa mempelajari pemrograman web (HTML, CSS, JS, PHP), pemrograman mobile (Android), basis data (MySQL), serta pengembangan perangkat lunak berbasis objek."
  },

  4: {
    q: "Siapa saja nama guru di SMKN 9 Medan?",
    a: `Berikut daftar nama guru SMKN 9 Medan:
1. Novelman Manurung, ST
2. Roy Hendro Siburian, S.Kom
3. Gira Berlian Gabriela Htg, S.Pd
4. Herbet Helvi Roberto Bakkara, S.Kom
5. Pirmando Gultom, M.Kom
6. Annisah Husni Daulay, M.Kom
7. Ardiansyah, ST
8. Senty Liastanova Sembiring, S.Kom
9. Shinta Hastia Putri, S.Pd`
  }

};


// ==========================================
// 3. MENGAMBIL ELEMEN CHATBOT
// ==========================================

const chatToggleBtn = document.getElementById('chatToggleBtn');
const chatbotBox = document.getElementById('chatbotBox');
const chatCloseBtn = document.getElementById('chatCloseBtn');
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');


// ==========================================
// 4. MEMBUKA DAN MENUTUP CHATBOT
// ==========================================

chatToggleBtn.addEventListener('click', () => {
  chatbotBox.classList.toggle('open');
});

chatCloseBtn.addEventListener('click', () => {
  chatbotBox.classList.remove('open');
});


// ==========================================
// 5. MENAMBAHKAN PESAN KE LAYAR CHAT
// ==========================================

function appendMessage(text, sender) {

  const msgDiv = document.createElement('div');

  msgDiv.classList.add('msg', sender);
  msgDiv.textContent = text;

  chatMessages.appendChild(msgDiv);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ==========================================
// 6. FUNGSI INPUT PERTANYAAN MANUAL
// ==========================================

chatForm.addEventListener('submit', function (e) {

  e.preventDefault();

  const userText = chatInput.value.trim();

  if (!userText) return;

  appendMessage(userText, 'user');

  chatInput.value = '';

  const lower = userText.toLowerCase();

  let reply = "Maaf, saya belum memahami pertanyaan tersebut";


  // PERTANYAAN LOKASI
  if (
    lower.includes('lokasi') ||
    lower.includes('alamat') ||
    lower.includes('dimana')
  ) {

    reply = qaData[1].a;

  }

  // PERTANYAAN JURUSAN
  else if (
    lower.includes('jurusan') ||
    lower.includes('prodi') ||
    lower.includes('keahlian')
  ) {

    reply = qaData[2].a;

  }

  // PERTANYAAN MATERI RPL
  else if (
    lower.includes('rpl') ||
    lower.includes('pelajari') ||
    lower.includes('belajar') ||
    lower.includes('materi')
  ) {

    reply = qaData[3].a;

  }

  // PERTANYAAN NAMA GURU
  else if (
    lower.includes('guru') ||
    lower.includes('nama guru') ||
    lower.includes('pengajar') ||
    lower.includes('siapa saja guru')
  ) {

    reply = qaData[4].a;

  }


  // MENAMPILKAN JAWABAN BOT
  setTimeout(() => {
    appendMessage(reply, 'bot');
  }, 400);

});
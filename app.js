
const app = document.querySelector("#app");
const school = "mak.jpg";

let news = [];
let newsLoadMessage = "Yangiliklar yuklanmoqda…";

const esc = s => String(s ?? "").replace(
  /[&<>"']/g,
  c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c])
);

const head = (title, sub) => `
  <section class="page-hero">
    <div class="wrap">
      <span class="kicker">ZARAFSHON • 13-MAKTAB</span>
      <h1>${title}</h1>
      <p>${sub}</p>
    </div>
  </section>
`;

const newsCards = (items = news, emptyMessage = "Hozircha yangiliklar mavjud emas.") => items.length
  ? items.map(n => `
    <article class="card">
      <div class="card-body">
        <span class="chip">📅 ${esc(n.date)}</span>
        <h3>${esc(n.title)}</h3>
        <p>${esc(n.body)}</p>
      </div>
    </article>
  `).join("")
  : `<p>${esc(newsLoadMessage || emptyMessage)}</p>`;

const announcementCards = () => newsCards(
  news.filter(item => item.isAnnouncement),
  "Hozircha muhim e’lonlar yo‘q."
);

function renderTeam() {
  const leadership = [
    ["Hotamova Zilola Akramovna", "Maktab direktori"],
    ["Rajabova Shahnoza Fattullayevna", "Direktor o‘rinbosari"],
    ["Kurbonova Nodira Aminovna", "Direktor o‘rinbosari"],
    ["Naimova Latofat Foxirovna", "Direktor o‘rinbosari"]
  ];

  const teachers = [
    ["Nasullayeva Ozoda Xayrullayevna", "Matematika metod birlashmasi rahbari"],
    ["Davronova Dilorom Toshpolatovna", "Informatika"],
    ["Yo‘ldosheva Gulbahor Azimovna", "Ona tili"],
    ["Mingboyev Guljahon Suyindikovna", "Jismoniy tarbiya"],
    ["Mustafoyeva Toshbuvi Erkinovna", "Fizika"],
    ["Jusipova Saltanat Jumaxmetovna", "Ingliz tili"],
    ["Amonova Nilufar Bahodirovna", "Rus tili"]
  ];

  const teamCards = (people, highlightDirector = false) => people.map(
    ([name, role], index) => {
      const initials = name.split(" ").slice(0, 2).map(word => word[0]).join("");
      const director = highlightDirector && index === 0;

      return `
        <article style="padding:24px;border:1px solid #d7aa57;border-radius:18px;
          background:${director ? "#0b203d" : "#fffcf6"};
          color:${director ? "#fff8ea" : "#0b203d"}">
          <span aria-hidden="true" style="display:inline-grid;place-items:center;
            width:48px;height:48px;border-radius:50%;background:#f5d28b;
            color:#0b203d;font-weight:700">${initials}</span>
          <h3 style="color:inherit;margin:14px 0 6px">${name}</h3>
          <p style="color:inherit;margin:0">${role}</p>
        </article>`;
    }
  ).join("");

  const teamGrid = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,255px),1fr));gap:16px';

  return head("Bizning jamoamiz", "Maktab rahbariyati va ustozlar.") + `
    <section class="section" style="background:#faf5e9">
      <div class="wrap">
        <h2>Maktab rahbariyati</h2>
        <div style="${teamGrid}">${teamCards(leadership, true)}</div>
        <h2 style="margin-top:42px">Pedagoglar jamoasi</h2>
        <div style="${teamGrid}">${teamCards(teachers)}</div>
      </div>
    </section>`;
}

const pages = {
  home: () => `
    <section class="hero">
      <div class="hero-inner">
        <span class="eyebrow">
          ✨ ZARAFSHON SHAHRIDAGI 13-SONLI MAKTAB
        </span>
        <h1>Kelajak <em>bilimdan</em> boshlanadi!</h1>
        <p>
          Ayrim fanlar chuqur o‘qitiladigan sinflari
          mavjud umumiy o‘rta ta’lim maktabimizga
          xush kelibsiz.
        </p>
        <div class="hero-actions">
          <a href="#about" class="btn yellow">
            Maktabimiz bilan tanishing ↗
          </a>
          <a href="#news" class="btn light">
            So‘nggi yangiliklar →
          </a>
          <a href="#admissions" class="btn light">
            1-sinfga qabul →
          </a>
          <a href="#clubs" class="btn light">
            To‘garaklar →
          </a>
        </div>
      </div>
    </section>

    <section class="section alt" aria-labelledby="announcementsTitle">
      <div class="wrap">
        <div class="section-head">
          <h2 id="announcementsTitle">Muhim e’lonlar</h2>
        </div>
        <div class="grid" data-announcement-cards>${announcementCards()}</div>
      </div>
    </section>

    <div class="wrap">
      <div class="stats">
        <div class="stat"><strong>13</strong><span>Maktab raqami</span></div>
        <div class="stat"><strong>📚</strong><span>Bilim va ta’lim</span></div>
        <div class="stat"><strong>🏆</strong><span>Yutuqlar sari</span></div>
        <div class="stat"><strong>🌟</strong><span>Yorqin kelajak</span></div>
      </div>
    </div>

    <section class="section">
      <div class="wrap feature">
        <div class="video-preview">
          <img src="${school}" alt="13-maktab binosi">
          <button class="video-play" id="openSchoolVideo"
                  type="button" aria-label="Videoni ko‘rish">
            ▶
          </button>
          <span class="video-caption">
            ▶ Maktabimiz haqida video
          </span>
        </div>
        <div>
          <span class="kicker">BIZ HAQIMIZDA</span>
          <h2>Ilm, tarbiya va imkoniyatlar maskani</h2>
          <p>
            13-maktab — Navoiy viloyati Zarafshon shahrida
            joylashgan, ayrim fanlar chuqur o‘qitiladigan
            sinflari mavjud umumiy o‘rta ta’lim maktabi.
          </p>
          <a href="#about" class="btn">Batafsil ma’lumot →</a>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <div class="section-head">
          <span class="kicker">IMKONIYATLAR</span>
          <h2>Bizning yo‘nalishlarimiz</h2>
          <p class="lead">Bilim, ijodkorlik va yuksak marralar sari.</p>
        </div>
        <div class="grid">
          <article class="card"><div class="card-body">
            <h3>📘 Chuqurlashtirilgan ta’lim</h3>
            <p>Fanlarni chuqur o‘rganish imkoniyatlari.</p>
          </div></article>
          <article class="card"><div class="card-body">
            <h3>💡 Ijodkorlik</h3>
            <p>Mustaqil fikrlash va yangi g‘oyalar.</p>
          </div></article>
          <article class="card"><div class="card-body">
            <h3>🏅 Yutuqlar</h3>
            <p>Olimpiada va tanlovlarda ishtirok.</p>
          </div></article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <span class="kicker">MAKTAB HAYOTI</span>
          <h2>So‘nggi yangiliklar</h2>
        </div>
        <div class="grid" data-news-cards>${newsCards()}</div>
        <p><a href="#news" class="btn">Barcha yangiliklar →</a></p>
      </div>
    </section>
  `,

    about: () => head(
    "Maktabimiz haqida",
    "Zarafshon shahridagi 13-maktab bilan tanishing."
  ) + `
    <section class="section">
      <div class="wrap feature">
        <img src="${school}"
             alt="Zarafshon shahridagi 13-maktab binosi">
        <article class="card"
                 style="padding:clamp(22px,3vw,40px)">
          <h2 style="margin-top:0">13-maktab — bilim va tarbiya maskani</h2>
          <p>
            Maktabimiz Navoiy viloyatining Zarafshon shahrida joylashgan.
            Bu yerda ayrim fanlar chuqur o‘qitiladigan sinflar mavjud.
          </p>
          <p>
            O‘quvchilar informatika to‘garagida dasturlash, veb-sahifa
            yaratish va animatsiya bo‘yicha amaliy mashg‘ulotlarda
            qatnashishlari mumkin.
          </p>
          <a class="btn" href="#clubs">To‘garaklar bilan tanishing →</a>
        </article>
      </div>
    </section>
  `,

  team: renderTeam,

  news: () => head(
    "Yangiliklar",
    "Maktab hayotidagi so‘nggi xabarlar."
  ) + `<section class="section"><div class="wrap">
    <div class="grid" data-news-cards>${newsCards()}</div>
  </div></section>`,

  success: () => head(
    "Yutuqlarimiz",
    "O‘quvchilarimizning muvaffaqiyatlari."
  ),

  gallery: () => head(
    "Fotogalereya",
    "Maktabimiz hayotidan lavhalar."
  ) + `<section class="section"><div class="wrap">
    <div class="grid">
      <img src="${school}" alt="Maktab binosi" style="width:100%;border-radius:20px">
    </div>
  </div></section>`,

  clubs: () => head(
    "To‘garaklar",
    "13-maktabdagi qo‘shimcha mashg‘ulotlar."
  ) + `<section class="section">
    <div class="wrap">
      <article class="card">
        <div class="card-body">
          <h2>Informatika va axborot texnologiyalari</h2>
          <p>Informatika bo‘yicha bilimlarni mustahkamlashga qaratilgan amaliy mashg‘ulotlar.
             Dasturlash, HTML, kompyuter tarmoqlari, video va animatsiya mavzulari o‘rganiladi.</p>
          <dl>
            <dt>To‘garak rahbari</dt>
            <dd>Sayfiddinova Kenjaxon Qo‘chqarboy qizi</dd>
            <dt>Mashg‘ulot vaqti</dt>
            <dd>08:00–09:00</dd>
            <dt>Mashg‘ulot joyi</dt>
            <dd>110-xona</dd>
            <dt>Dastur hajmi</dt>
            <dd>34 soat</dd>
          </dl>
          <p>Mashg‘ulot kunlari va qaysi sinflar qatnashishi haqida to‘garak rahbaridan so‘rashingiz mumkin.</p>
        </div>
      </article>
    </div>
  </section>`,

  admissions: () => head(
    "1-sinfga qabul",
    "Zarafshon shahridagi 13-maktabga farzandini bermoqchi bo‘lgan ota-onalar uchun."
  ) + `<section class="section">
    <div class="wrap">
      <article class="card">
        <div class="card-body">
          <h2>Qabul haqida ma’lumot</h2>
          <p>Qabul sanalari, ariza topshirish tartibi va kerakli hujjatlar ro‘yxati
             tasdiqlangach, shu sahifada e’lon qilinadi.</p>
          <a href="#news" class="btn">Maktab yangiliklari →</a>
        </div>
      </article>
    </div>
  </section>`,

  contact: () => head(
    "Bog‘lanish",
    "13-maktab manzili va direktor qabuli."
  ) + `<section class="section">
    <div class="wrap grid">
      <article class="card"><div class="card-body">
        <h2>Manzil</h2>
        <p>Navoiy viloyati, Zarafshon shahri, 12-mikrorayon</p>
      </div></article>
      <article class="card"><div class="card-body">
        <h2>Direktor qabuli</h2>
        <p>09:00–12:00</p>
      </div></article>
    </div>
  </section>`,

  admin: () => head(
    "Boshqaruv paneli",
    "Demo boshqaruv bo‘limi."
  ) + `<section class="section"><div class="wrap">
    <p>Admin panelning to‘liq imkoniyatlari keyingi bosqichda ulanadi.</p>
  </div></section>`
};

function openSchoolVideo() {
  const overlay = document.querySelector("#videoModal");
  const player = document.querySelector("#schoolVideo");
  if (!overlay || !player) return;
  overlay.hidden = false;
  player.load();
  const result = player.play();
  if (result && result.catch) result.catch(() => {});
}

function closeSchoolVideo() {
  const overlay = document.querySelector("#videoModal");
  const player = document.querySelector("#schoolVideo");
  if (!overlay || !player) return;
  player.pause();
  player.currentTime = 0;
  overlay.hidden = true;
}

function render() {
  const key = location.hash.slice(1) || "home";
  app.innerHTML = (pages[key] || pages.home)();

  document.querySelectorAll("nav a").forEach(a => {
    a.classList.toggle("active", a.dataset.page === key);
  });

  document.querySelector("#nav")?.classList.remove("open");

  const play = document.querySelector("#openSchoolVideo");
  if (play) play.onclick = openSchoolVideo;

  window.scrollTo(0, 0);
}

document.querySelector("#menu").onclick = () => {
  document.querySelector("#nav").classList.toggle("open");
};

document.querySelector("#closeSchoolVideo").onclick =
  closeSchoolVideo;

document.querySelector("#videoModal").onclick = e => {
  if (e.target.id === "videoModal") closeSchoolVideo();
};

document.querySelector("#closeModal").onclick = () => {
  document.querySelector("#modal").hidden = true;
};

document.querySelector("#year").textContent =
  new Date().getFullYear();

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeSchoolVideo();
});

window.addEventListener("hashchange", render);
render();

/* Admin panel: yangiliklarni boshqarish */

const newsAdminId = "71e17b5f-1b06-4960-9946-88ee47a5f6df";
let canManageNews = false;

pages.admin = () => head(
  "Boshqaruv paneli",
  "Yangiliklarni qo‘shish va boshqarish."
) + (canManageNews ? `
<section class="section">
  <div class="wrap">
    <div class="card">
      <h2>📝 Yangilik qo‘shish</h2>
      <form id="newsForm">
        <input type="hidden" id="newsId">

        <p>
          <label for="newsTitle">Sarlavha</label>
          <input id="newsTitle" required maxlength="150"
                 placeholder="Yangilik sarlavhasi">
        </p>

        <p>
          <label for="newsDate">Sana</label>
          <input id="newsDate" type="date" required>
        </p>

        <p>
          <label for="newsBody">Yangilik matni</label>
          <textarea id="newsBody" rows="5" required
                    placeholder="Yangilik matnini kiriting"></textarea>
        </p>

        <p>
          <label><input id="newsAnnouncement" type="checkbox"> Bosh sahifada muhim e’lon sifatida ko‘rsatish</label>
        </p>

        <button type="submit" class="btn" id="saveNews">
          Saqlash
        </button>
        <button type="button" class="btn light"
                id="cancelEdit" hidden>
          Bekor qilish
        </button>
      </form>
    </div>

    <h2>📋 Mavjud yangiliklar</h2>
    <div id="adminNewsList"></div>
  </div>
</section>
` : `
<section class="section">
  <div class="wrap">
    <button type="button" class="btn" onclick="adminLogin()">
      🔐 Administrator sifatida kirish
    </button>
  </div>
</section>
`);

function adminRenderList() {
  const list = document.querySelector("#adminNewsList");
  if (!list) return;

  list.innerHTML = news.length
    ? news.map(n => `
      <article class="card" style="margin-bottom:15px">
        <small>${esc(n.date)}${n.isAnnouncement ? " · Muhim e’lon" : ""}</small>
        <h3>${esc(n.title)}</h3>
        <p>${esc(n.body)}</p>
        <button class="btn" data-edit="${esc(n.id)}">
          Tahrirlash
        </button>
        <button class="btn" data-delete="${esc(n.id)}">
          O‘chirish
        </button>
      </article>
    `).join("")
    : `<p>${esc(newsLoadMessage || "Yangiliklar mavjud emas.")}</p>`;
}

function setupAdmin() {
  const form = document.querySelector("#newsForm");
  if (!form) return;

  const title = document.querySelector("#newsTitle");
  const date = document.querySelector("#newsDate");
  const body = document.querySelector("#newsBody");
  const idInput = document.querySelector("#newsId");
  const announcement = document.querySelector("#newsAnnouncement");
  const cancel = document.querySelector("#cancelEdit");

  const saveButton = form.querySelector("#saveNews");
  const resetForm = () => {
    form.reset();
    idInput.value = "";
    date.value = new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Tashkent" });
    cancel.hidden = true;
  };

  resetForm();

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const id = idInput.value;
    const item = {
      title: title.value.trim(),
      content: body.value.trim(),
      news_date: date.value,
      is_announcement: announcement.checked
    };
    if (!item.title || !item.content || !item.news_date) return;

    saveButton.disabled = true;
    try {
      const table = supabaseClient.from("news");
      const query = id ? table.update(item).eq("id", id) : table.insert(item);
      const { error } = await query.select("id").single();
      if (error) {
        alert("Saqlashda xatolik: " + error.message);
        return;
      }
      resetForm();
      await loadNews();
      alert("Yangilik saqlandi!");
    } finally {
      saveButton.disabled = false;
    }
  });

  cancel.onclick = resetForm;

  document.querySelector("#adminNewsList")
    .addEventListener("click", async e => {
      const edit = e.target.closest("[data-edit]");
      const del = e.target.closest("[data-delete]");

      if (edit) {
        const item = news.find(n =>
          String(n.id) === edit.dataset.edit
        );
        if (!item) return;

        idInput.value = item.id;
        title.value = item.title;
        date.value = item.date;
        body.value = item.body;
        announcement.checked = item.isAnnouncement;
        cancel.hidden = false;
        const headerHeight = document.querySelector(".header")?.offsetHeight ?? 0;
        form.style.scrollMarginTop = (headerHeight + 16) + "px";
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (del) {
        if (!confirm("Yangilik o‘chirilsinmi?")) return;
        del.disabled = true;
        try {
          const { error } = await supabaseClient.from("news")
            .delete().eq("id", del.dataset.delete).select("id").single();
          if (error) {
            alert("O‘chirishda xatolik: " + error.message);
            return;
          }
          if (idInput.value === del.dataset.delete) resetForm();
          await loadNews();
        } finally {
          del.disabled = false;
        }
      }
    });

  adminRenderList();
}

/* Admin sahifasini ochganda funksiyalarni ulash */
const originalRender = render;

function renderWithAdmin() {
  originalRender();
  if (location.hash === "#admin") setupAdmin();
}

window.removeEventListener("hashchange", render);
window.addEventListener("hashchange", renderWithAdmin);
renderWithAdmin();
const originalHome = pages.home;

pages.home = () => originalHome().replace(
  /<section class="hero">[\s\S]*?<\/section>/,
  `
  <style>
    .hero.school-cover {
      min-height: 420px;
      display: grid;
      align-items: center;
      padding: 55px 8%;
      background:
        linear-gradient(90deg, #0b203d 10%, #0b203de8 32%, #0b203d12 78%),
        url("mak.jpg") right center / cover no-repeat;
    }
    .school-cover .hero-inner { width: 100%; }
    .school-cover h1 {
      margin: 0;
      color: #ffe0a3;
      font: bold clamp(52px, 8vw, 110px)/1 Georgia, serif;
    }
    .school-cover p { font: clamp(22px, 3vw, 38px)/1.3 Georgia, serif; }
    .school-links {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 16px;
      margin: 30px auto;
    }
    .school-links a {
      display: grid;
      justify-items: center;
      gap: 12px;
      padding: 22px 10px;
      background: #fffaf0;
      border: 1px solid #c49347;
      border-radius: 18px;
      color: #0b203d;
      text-align: center;
      font: bold clamp(16px, 2vw, 25px)/1.2 Georgia, serif;
    }
    .school-links a:hover, .school-links a:focus-visible {
      background: #f7e8c9;
      outline: 2px solid #157776;
    }
    .school-links span {
      display: grid;
      place-items: center;
      width: clamp(66px, 9vw, 112px);
      aspect-ratio: 1;
      border: 3px solid #d7aa57;
      border-radius: 50%;
      background: radial-gradient(circle at top, #24616b, #0b203d 70%);
      font-size: clamp(30px, 5vw, 58px);
    }
    @media (max-width: 650px) {
      .school-links { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
  </style>
  <section class="hero school-cover">
    <div class="hero-inner">
      <h1>13-maktab</h1>
      <p>Zarafshon shahri</p>
      <a class="btn yellow" href="#admissions">1-sinfga qabul →</a>
    </div>
  </section>
  <div class="wrap school-links">
    <a href="#announcements"><span aria-hidden="true">🔔</span>Muhim e’lonlar</a>
    <a href="#admissions"><span aria-hidden="true">📖</span>1-sinfga qabul</a>
    <a href="#clubs"><span aria-hidden="true">⚗️</span>To‘garaklar</a>
    <a href="#gallery"><span aria-hidden="true">📷</span>Galereya</a>
  </div>
  `
);

pages.announcements = () => `
  <section class="section" aria-labelledby="announcementsTitle">
    <div class="wrap">
      <h1 id="announcementsTitle">Muhim e’lonlar</h1>
      <div class="grid" data-announcement-cards>${announcementCards()}</div>
    </div>
  </section>
`;

renderWithAdmin();
const educationGuide = `
  <section class="section" aria-labelledby="educationGuideTitle"
           style="background:#fbf7ef">
    <div class="wrap">
      <div class="section-head">
        <h2 id="educationGuideTitle">Ta’lim qo‘llanmasi</h2>
        <p>Ota-onalar va o‘quvchilar uchun qisqa javoblar</p>
      </div>
      <div class="grid">
        <details class="card">
          <summary><strong>1-sinfga qabul haqida qayerdan bilaman?</strong></summary>
          <p>Qabul sanalari va hujjatlar bo‘yicha ma’lumotlar maktabning qabul sahifasida e’lon qilinadi.</p>
          <a href="#admissions">Qabul sahifasini ochish →</a>
        </details>
        <details class="card">
          <summary><strong>Ta’limga oid qonunni qayerdan o‘qiyman?</strong></summary>
          <p>«Ta’lim to‘g‘risida»gi O‘RQ-637-son Qonunning rasmiy matni LexUZ’da joylashgan.</p>
          <a href="https://lex.uz/docs/-5013007">Qonunni LexUZ’da o‘qish →</a>
        </details>
        <details class="card">
          <summary><strong>Maktab rahbariyatiga qanday murojaat qilaman?</strong></summary>
          <p>Maktab manzili va direktorning qabul vaqti «Bog‘lanish» sahifasida ko‘rsatilgan.</p>
          <a href="#contact">Bog‘lanish sahifasini ochish →</a>
        </details>
      </div>
    </div>
  </section>
`;

const homeBeforeEducationGuide = pages.home;

pages.home = () => homeBeforeEducationGuide()
  .replace(
    '<span aria-hidden="true">🔔</span>Muhim e’lonlar',
    '<span aria-hidden="true">📚</span>Ta’lim qo‘llanmasi'
  )
  .replace(
    /<section class="section alt" aria-labelledby="announcementsTitle">[\s\S]*?<\/section>/,
    educationGuide
  );

pages.announcements = () =>
  head("Ta’lim qo‘llanmasi", "Qabul, rasmiy hujjatlar va maktab bilan bog‘lanish.") +
  educationGuide;

renderWithAdmin();// Supabase bilan ulanish
const SUPABASE_URL = "https://gruqoodldhswlnkptpyo.supabase.co";

const SUPABASE_KEY = "sb_publishable_AEZWu5rpkZKKvrumLzwAPA_LB-_lFb0"
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
async function loadNews() {
  const { data, error } = await supabaseClient.from("news").select("*");
  if (error) {
    news = [];
    newsLoadMessage = "Yangiliklarni yuklashda xatolik: " + error.message;
  } else {
    newsLoadMessage = "";
    news = data.map(row => ({
      id: row.id,
      title: row.title,
      body: row.content,
      isAnnouncement: row.is_announcement === true,
      date: row.news_date || (row.created_at || "").slice(0, 10)
    })).sort((first, second) => second.date.localeCompare(first.date));
  }
  document.querySelectorAll("[data-news-cards]").forEach(list => {
    list.innerHTML = newsCards();
  });
  document.querySelectorAll("[data-announcement-cards]").forEach(list => {
    list.innerHTML = announcementCards();
  });
  adminRenderList();
}

loadNews();

function adminLogin() {
  if (document.getElementById("adminLoginBox")) return;

  const box = document.createElement("div");
  box.id = "adminLoginBox";

  box.innerHTML = `
    <div style="position:fixed;inset:0;background:#0009;
                display:flex;align-items:center;justify-content:center;
                z-index:9999;padding:20px">
      <form id="loginForm" style="background:white;padding:30px;
            border-radius:18px;width:100%;max-width:400px">
        <h2>🔐 Administrator kirishi</h2>

        <input id="loginEmail" type="email" required
               placeholder="Email manzil"
               autocomplete="username"
               style="width:100%;padding:12px;margin:10px 0;box-sizing:border-box">

        <input id="loginPassword" type="password" required
               placeholder="Parol"
               autocomplete="current-password"
               style="width:100%;padding:12px;margin:10px 0;box-sizing:border-box">

        <button type="submit" class="btn">Kirish</button>
        <button type="button" id="closeLogin" class="btn">
          Bekor qilish
          </button>

       <button type="button" id="forgotPassword" class="btn">
  Parolni unutdingizmi?
          </button>
        <p id="loginError" role="alert"></p>
      </form>
    </div>
  `;

  document.body.appendChild(box);

  document.getElementById("closeLogin").onclick = () => box.remove();
document.getElementById("forgotPassword").onclick = async () => {
  const email = document.getElementById("loginEmail").value.trim();

  if (!email) {
    alert("Avval email manzilingizni kiriting!");
    return;
  }

  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: "https://kenjahonbonu-code.github.io/zarafshon13/"
  });

  if (error) {
    alert("Xatolik: " + error.message);
  } else {
    alert("Parolni tiklash xati yuborildi. Emailingizni tekshiring!");
  }
};
  document.getElementById("loginForm").onsubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const errorBox = document.getElementById("loginError");

    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      errorBox.textContent = "Kirishda xatolik: " + error.message;
      return;
    }

    if (data.user?.id !== newsAdminId) {
      errorBox.textContent = "Bu akkauntda yangiliklarni boshqarish ruxsati yo‘q.";
      return;
    }

    box.remove();
    alert("Tizimga muvaffaqiyatli kirdingiz!");
  };
}

async function setupPasswordRecovery() {
  const { data: { subscription } } =
    supabaseClient.auth.onAuthStateChange((event) => {
      if (
  event !== "PASSWORD_RECOVERY" &&
  !(event === "SIGNED_IN" && location.hash.includes("type=recovery"))
) return;
      setTimeout(() => {
        if (document.getElementById("resetPasswordBox")) return;

        const box = document.createElement("div");
        box.id = "resetPasswordBox";
        box.style.cssText =
          "position:fixed;inset:0;background:#0009;display:flex;align-items:center;justify-content:center;z-index:10000;padding:20px";

        box.innerHTML = `
          <form id="resetPasswordForm"
            style="background:white;padding:30px;border-radius:18px;width:100%;max-width:420px">
            <h2>🔐 Yangi parol o‘rnatish</h2>
            <input id="newPassword" type="password"
              placeholder="Yangi parol" minlength="8" required
              style="width:100%;padding:12px;margin:10px 0;box-sizing:border-box">
            <input id="confirmPassword" type="password"
              placeholder="Parolni takrorlang" minlength="8" required
              style="width:100%;padding:12px;margin:10px 0;box-sizing:border-box">
            <button type="submit" class="btn">Parolni saqlash</button>
            <p id="resetError" role="alert"></p>
          </form>
        `;

        document.body.appendChild(box);

        document.getElementById("resetPasswordForm").onsubmit =
          async (e) => {
            e.preventDefault();

            const password =
              document.getElementById("newPassword").value;
            const confirm =
              document.getElementById("confirmPassword").value;
            const errorBox =
              document.getElementById("resetError");

            if (password !== confirm) {
              errorBox.textContent = "Parollar bir xil emas!";
              return;
            }

            const { error } =
              await supabaseClient.auth.updateUser({
                password: password
              });

            if (error) {
              errorBox.textContent = "Xatolik: " + error.message;
              return;
            }

            alert("Parol muvaffaqiyatli yangilandi!");
            box.remove();
            await supabaseClient.auth.signOut();
            history.replaceState(null, "", location.pathname);
          };
      }, 0);
    });
}

setupPasswordRecovery();

supabaseClient.auth.onAuthStateChange((event, session) => {
  const isAdmin = event !== "PASSWORD_RECOVERY" && session?.user?.id === newsAdminId;
  if (canManageNews === isAdmin) return;

  canManageNews = isAdmin;
  if (location.hash === "#admin") renderWithAdmin();
});

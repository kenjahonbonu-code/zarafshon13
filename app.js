
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

const newsCards = () => news.length
  ? news.map(n => `
    <article class="card">
      <div class="card-body">
        <span class="chip">📅 ${esc(n.date)}</span>
        <h3>${esc(n.title)}</h3>
        <p>${esc(n.body)}</p>
      </div>
    </article>
  `).join("")
  : `<p>${esc(newsLoadMessage || "Hozircha yangiliklar mavjud emas.")}</p>`;

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
        </div>
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
    "Ta’lim va tarbiya maskani."
  ) + `
    <section class="section">
      <div class="wrap feature">
        <img src="${school}" alt="13-maktab">
        <div>
          <h2>13-maktab — bilim maskani</h2>
          <p>Zarafshon shahridagi umumiy o‘rta ta’lim maktabi.</p>
        </div>
      </div>
    </section>
  `,

  team: () => head(
    "Bizning jamoamiz",
    "Maktab rahbariyati va ustozlar."
  ) + `<section class="section"><div class="wrap">
    <h2>Pedagoglar jamoasi</h2>
    <p>O‘qituvchilar haqidagi ma’lumotlar qo‘shiladi.</p>
  </div></section>`,

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

  contact: () => head(
    "Bog‘lanish",
    "Navoiy viloyati, Zarafshon shahri."
  ),

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

pages.admin = () => head(
  "Boshqaruv paneli",
  "Yangiliklarni qo‘shish va boshqarish."
) + `
<section class="section">
  <div class="wrap">
    <div class="card">
      <h2>📝 Yangilik qo‘shish</h2>



<button type="button" class="btn" onclick="adminLogin()">
  🔐 Administrator sifatida kirish
</button>

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
`;

function adminRenderList() {
  const list = document.querySelector("#adminNewsList");
  if (!list) return;

  list.innerHTML = news.length
    ? news.map(n => `
      <article class="card" style="margin-bottom:15px">
        <small>${esc(n.date)}</small>
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
      news_date: date.value
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
        cancel.hidden = false;
        form.scrollIntoView({ behavior: "smooth" });
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
// Supabase bilan ulanish
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
      date: row.news_date || (row.created_at || "").slice(0, 10)
    })).sort((first, second) => second.date.localeCompare(first.date));
  }
  document.querySelectorAll("[data-news-cards]").forEach(list => {
    list.innerHTML = newsCards();
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

    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      errorBox.textContent = "Kirishda xatolik: " + error.message;
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

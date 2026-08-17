/* ============================================================
   BizHub Mir — shared site core (icons, nav, header/footer, i18n base, lang switching, mobile UI)
   Loaded by every page before that page's own inline script, which
   supplies page-specific T.ko.<page> / T.en.<page> content and a
   renderCurrentPage() function.
   ============================================================ */

/* ---------- icon library (feather-style outline) ---------- */
const ICONS = {
  coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>',
  briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
  target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  building:'<rect x="4" y="2" width="16" height="20" rx="1"/><line x1="9" y1="6" x2="9" y2="6"/><line x1="15" y1="6" x2="15" y2="6"/><line x1="9" y1="10" x2="9" y2="10"/><line x1="15" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="9" y2="14"/><line x1="15" y1="14" x2="15" y2="14"/><line x1="9" y1="18" x2="15" y2="18"/>',
  users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  mapPin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  chat:'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  check:'<polyline points="20 6 9 17 4 12"/>',
  wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',
  lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  printer:'<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  gift:'<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
  arrowRight:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  menu:'<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  camera:'<rect x="2" y="3" width="20" height="18" rx="4"/><circle cx="12" cy="12" r="4"/>',
  shield:'<path d="M12 2 3 6v6c0 5.5 3.8 9.7 9 11 5.2-1.3 9-5.5 9-11V6z"/>',
  chevDown:'<polyline points="6 9 12 15 18 9"/>',
  cluster:'<circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><line x1="8.5" y1="7.5" x2="15.5" y2="16.5"/><line x1="15.5" y1="7.5" x2="8.5" y2="16.5"/>',
  x:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
};
function icon(name, size=20){
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||''}</svg>`;
}
function ph(label, theme=''){
  return `<div class="photo-ph ${theme}">${icon('image',26)}<span>${label}</span></div>`;
}
function eyebrow(text, extraClass=''){
  return `<div class="eyebrow ${extraClass}"><span class="bar"></span>${text}</div>`;
}

/* ---------- nav structure (labels resolved via T[lang].nav) ---------- */
const NAV = [
  {key:'bizhub', children:[{key:'about'},{key:'location'},{key:'news'}]},
  {key:'cafe', children:[{key:'cafe-menu'},{key:'cafe-space'}]},
  {key:'office', children:[{key:'office-guide'},{key:'office-consulting'}]},
  {key:'golf', children:[{key:'golf-fitting'},{key:'golf-business'}]},
  {key:'membership'},
];
const CRUMB = {
  home:null, about:'bizhub', location:'bizhub', news:'bizhub',
  'cafe-menu':'cafe', 'cafe-space':'cafe',
  'office-guide':'office', 'office-consulting':'office', 'consulting-pt':'office', 'consulting-report':'office',
  'golf-fitting':'golf', 'golf-business':'golf', 'golf-fitting-body':'golf', 'golf-fitting-club':'golf',
  membership:null, contact:null
};
/* ---------- sub-pages one level below a NAV child (not shown in the menu, but should still highlight their parent group) ---------- */
const SUBPAGE_TOP = { 'golf-fitting-body':'golf', 'consulting-pt':'office', 'consulting-report':'office', 'golf-fitting-club':'golf' };

/* ---------- logical page key -> static file ---------- */
const PAGE_URL = {
  home:'index.html', about:'about.html', location:'location.html', news:'news.html',
  'cafe-menu':'cafe-menu.html', 'cafe-space':'cafe-space.html',
  'office-guide':'office-guide.html', 'office-consulting':'office-consulting.html', 'consulting-pt':'consulting-PT.html', 'consulting-report':'consulting-report.html',
  'golf-fitting':'golf-fitting.html', 'golf-business':'golf-business.html', 'golf-fitting-body':'golf-fitting-body.html', 'golf-fitting-club':'golf-fitting-club.html',
  membership:'membership.html', contact:'contact.html'
};
function navigate(key){ window.location.href = PAGE_URL[key] || 'index.html'; }

/* ---------- shared translations (nav / common / footer) ---------- */
const T = { ko:{}, en:{} };
T.ko.nav = { home:`Home`, bizhub:`BizHub`, about:`BizHub 소개`, location:`오시는 길`, news:`소식`,
  cafe:`1F 카페`, 'cafe-menu':`메뉴판`, 'cafe-space':`공간 & 인테리어`,
  office:`2F 오피스`, 'office-guide':`오피스 안내`, 'office-consulting':`창업 컨설팅`, 'consulting-pt':`법인설립 서비스`, 'consulting-report':`OSS · Coretax 신고 서비스`,
  golf:`3F 골프피팅`, 'golf-fitting':`피팅 서비스`, 'golf-business':`비즈니스 골프`, 'golf-fitting-body':`Body Fitting`, 'golf-fitting-club':`Club Fitting`,
  membership:`멤버십`, contact:`문의하기` };
T.en.nav = { home:`Home`, bizhub:`BizHub`, about:`About BizHub`, location:`Location`, news:`News`,
  cafe:`1F Café`, 'cafe-menu':`Menu`, 'cafe-space':`Space & Interior`,
  office:`2F Office`, 'office-guide':`Office Guide`, 'office-consulting':`Startup Consulting`, 'consulting-pt':`Incorporation Service`, 'consulting-report':`OSS · Coretax Filing Service`,
  golf:`3F Golf Fitting`, 'golf-fitting':`Fitting Service`, 'golf-business':`Business Golf`, 'golf-fitting-body':`Body Fitting`, 'golf-fitting-club':`Club Fitting`,
  membership:`Membership`, contact:`Contact` };

T.ko.common = { whatsappTitle:`WhatsApp 문의` };
T.en.common = { whatsappTitle:`WhatsApp Chat` };

T.ko.footer = { sitemap:`SITEMAP`, contact:`CONTACT`, addr1:`Ruko Hollywood Boulevard, Jl. Movie Land No.21 Blok A5B, Cikarang Utara`, addr2:`Jababeka · Cikarang Utara, Indonesia`, copyright:`© 2026 BizHub Mir · PT. Golf Fitting Lab`, place:`Jababeka, Cikarang Utara` };
T.en.footer = { sitemap:`SITEMAP`, contact:`CONTACT`, addr1:`Ruko Hollywood Boulevard, Jl. Movie Land No.21 Blok A5B, Cikarang Utara`, addr2:`Jababeka · Cikarang Utara, Indonesia`, copyright:`© 2026 BizHub Mir · PT. Golf Fitting Lab`, place:`Jababeka, Cikarang Utara` };

/* ---------- header / footer builders ---------- */
function langSwitch(lang){
  return `<div class="lang-switch">
    <button class="lang-btn ${lang==='ko'?'active':''}" onclick="setLang('ko')" aria-label="한국어" title="한국어">KR</button>
    <button class="lang-btn ${lang==='en'?'active':''}" onclick="setLang('en')" aria-label="English" title="English">EN</button>
  </div>`;
}
function siteHeader(current, lang){
  const t = T[lang];
  const topKeyOf = k => { if(['home','membership','contact'].includes(k)) return k; if(SUBPAGE_TOP[k]) return SUBPAGE_TOP[k]; for(const n of NAV){ if(n.children && n.children.some(c=>c.key===k)) return n.key; } return k; };
  const activeTop = topKeyOf(current);
  const items = NAV.map(n=>{
    const isActive = activeTop===n.key;
    if(n.children){
      const open = isActive ? 'open':'';
      return `<div class="gnb-item ${open}">
        <button class="gnb-btn ${isActive?'on':''}" onclick="toggleDrop(this)">${t.nav[n.key]}${icon('chevDown',12)}</button>
        <div class="gnb-drop">
          ${n.children.map(c=>`<button class="${current===c.key?'on':''}" onclick="event.stopPropagation();navigate('${c.key}')">${t.nav[c.key]}</button>`).join('')}
        </div>
      </div>`;
    }
    return `<div class="gnb-item"><button class="gnb-btn ${isActive?'on':''}" onclick="navigate('${n.key}')">${isActive?'<span class="dot"></span>':''}${t.nav[n.key]}</button></div>`;
  }).join('');
  const mobileItems = NAV.map(n=>{
    const isActive = activeTop===n.key;
    if(n.children){
      const open = isActive ? 'open':'';
      return `<div class="mnav-group ${open}">
        <button class="mnav-top ${isActive?'on':''}" onclick="toggleMobileGroup(this)">${t.nav[n.key]}${icon('chevDown',15)}</button>
        <div class="mnav-sub">
          ${n.children.map(c=>`<button class="${current===c.key?'on':''}" onclick="navigate('${c.key}')">${t.nav[c.key]}</button>`).join('')}
        </div>
      </div>`;
    }
    return `<button class="mnav-top single ${isActive?'on':''}" onclick="navigate('${n.key}')">${t.nav[n.key]}</button>`;
  }).join('');
  return `
  <header class="site-header">
    <div class="site-header-in">
      <a class="logo" onclick="navigate('home')">BizHub <span>Mir</span></a>
      <nav class="gnb">${items}</nav>
      <div class="hdr-right">
        ${langSwitch(lang)}
        <a class="hdr-link" onclick="navigate('location')">${t.nav.location}</a>
        <a class="btn-pill" onclick="navigate('contact')">${t.nav.contact}</a>
        <button class="btn-circle" onclick="navigate('contact')">${icon('arrowRight',16)}</button>
      </div>
      <button class="hamb" id="hambBtn" onclick="toggleMobileMenu()">${icon('menu',20)}</button>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <nav>${mobileItems}</nav>
      <div class="mobile-menu-cta">
        ${langSwitch(lang)}
        <a class="hdr-link" onclick="navigate('location')">${t.nav.location}</a>
        <a class="btn-pill btn-block" onclick="navigate('contact')">${t.nav.contact}</a>
      </div>
    </div>
  </header>`;
}
function crumbRow(current, lang){
  const t = T[lang];
  const parentKey = CRUMB[current];
  if(!parentKey) return '';
  return `<div class="crumbs">Home <span>›</span> ${t.nav[parentKey]} <span>›</span> <b>${t.nav[current]}</b></div>`;
}
function pageHero(current, theme, lang, eb, titleHtml, desc){
  return `<div class="page-hero ${theme}">
    <div class="page-hero-in">
      ${crumbRow(current, lang)}
      ${eyebrow(eb)}
      <h1>${titleHtml}</h1>
      <p>${desc}</p>
    </div>
  </div>`;
}
function siteFooter(lang){
  const t = T[lang];
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-col" style="max-width:260px;">
          <div class="footer-brand">BizHub Mir</div>
          <span>${t.footer.addr1}</span>
          <span>${t.footer.addr2}</span>
        </div>
        <div class="footer-col">
          <b>${t.footer.sitemap}</b>
          <a onclick="navigate('cafe-menu')">${t.nav.cafe}</a>
          <a onclick="navigate('office-guide')">${t.nav.office}</a>
          <a onclick="navigate('golf-fitting')">${t.nav.golf}</a>
          <a onclick="navigate('membership')">${t.nav.membership}</a>
        </div>
        <div class="footer-col">
          <b>${t.footer.contact}</b>
          <span>WhatsApp +62 8XX-XXXX-XXXX</span>
          <span>hello@bizcafe.id</span>
          <span>Instagram @bizcafe.id</span>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${t.footer.copyright}</span>
        <span>${t.footer.place}</span>
      </div>
    </div>
  </footer>`;
}
function fab(lang){
  return `<button class="fab" onclick="navigate('contact')" title="${T[lang].common.whatsappTitle}">${icon('chat',20)}</button>`;
}

/* ---------- language ---------- */
function safeGetStoredLang(){
  try{ return localStorage.getItem('bizcafe_lang'); }catch(e){ return null; }
}
function safeSetStoredLang(lang){
  try{ localStorage.setItem('bizcafe_lang', lang); }catch(e){ /* Safari private mode etc. — ignore, in-memory currentLang still applies */ }
}
function detectLang(){
  const saved = safeGetStoredLang();
  if(saved === 'ko' || saved === 'en') return saved;
  const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
  const primary = (langs[0] || 'en').toLowerCase();
  return primary.startsWith('ko') ? 'ko' : 'en';
}
let currentLang = detectLang();
function setLang(lang){
  currentLang = lang;
  safeSetStoredLang(lang);
  if(typeof renderCurrentPage === 'function') renderCurrentPage();
}

/* ---------- mobile nav / dropdown UI ---------- */
function toggleDrop(btn){
  const item = btn.closest('.gnb-item');
  const wasOpen = item.classList.contains('open');
  closeAllDrops();
  if(!wasOpen) item.classList.add('open');
}
function closeAllDrops(){ document.querySelectorAll('.gnb-item.open').forEach(i=>i.classList.remove('open')); }
document.addEventListener('click', e=>{
  if(!e.target.closest('.gnb-item')) closeAllDrops();
});

function toggleMobileMenu(){
  const el = document.getElementById('mobileMenu');
  const btn = document.getElementById('hambBtn');
  if(!el || !btn) return;
  const isOpen = el.classList.toggle('open');
  btn.innerHTML = isOpen ? icon('x',20) : icon('menu',20);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
function closeMobileMenu(){
  const el = document.getElementById('mobileMenu');
  const btn = document.getElementById('hambBtn');
  if(el) el.classList.remove('open');
  if(btn) btn.innerHTML = icon('menu',20);
  document.body.style.overflow = '';
}
function toggleMobileGroup(btn){
  const group = btn.closest('.mnav-group');
  group.classList.toggle('open');
}

/* ---------- app root ---------- */
const app = document.getElementById('app');

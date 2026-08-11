// SmartWash — language state + common (nav/footer) rendering
// Plain script on purpose — see note in content.js. Load this file
// AFTER content.js in every page's <script> tags.

window.SmartWash = window.SmartWash || {};

(function () {
  const LANG_KEY = 'smartwash-lang';

  function getLang() {
    const saved = window.localStorage ? window.localStorage.getItem(LANG_KEY) : null;
    if (saved === 'ro' || saved === 'en') return saved;
    return 'ro'; // default language
  }

  function setLang(lang) {
    if (window.localStorage) window.localStorage.setItem(LANG_KEY, lang);
  }

  // Renders the parts every page shares: nav labels, header call button, footer.
  function renderCommon(lang) {
    const CONTENT = window.SmartWash.CONTENT;
    const CONTACT = window.SmartWash.CONTACT;
    const c = CONTENT[lang];

    document.documentElement.setAttribute('lang', lang);

    const map = {
      '[data-i18n="nav.home"]': c.nav.home,
      '[data-i18n="nav.about"]': c.nav.about,
      '[data-i18n="nav.pricing"]': c.nav.pricing,
      '[data-i18n="nav.business"]': c.nav.business,
      '[data-i18n="nav.contact"]': c.nav.contact,
      '[data-i18n="nav.call"]': c.nav.call,
      '[data-i18n="footer.tagline"]': c.footer.tagline,
      '[data-i18n="footer.rights"]': c.footer.rights,
    };
    Object.entries(map).forEach(([selector, text]) => {
      document.querySelectorAll(selector).forEach((el) => { el.textContent = text; });
    });

    document.querySelectorAll('[data-contact="phoneTel"]').forEach((el) => el.setAttribute('href', CONTACT.phoneTel));
    document.querySelectorAll('[data-contact="phone"]').forEach((el) => { el.textContent = CONTACT.phone; });
    document.querySelectorAll('[data-contact="whatsapp"]').forEach((el) => el.setAttribute('href', CONTACT.whatsapp));
    document.querySelectorAll('[data-contact="email-href"]').forEach((el) => el.setAttribute('href', `mailto:${CONTACT.email}`));
    document.querySelectorAll('[data-contact="email"]').forEach((el) => { el.textContent = CONTACT.email; });

    // Toggle active state on the lang switch buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });
  }

  // Wires up the EN/RO buttons found in the header. `onChange` is called with
  // the new lang so each page can re-render its own dynamic content.
  function initLangToggle(onChange) {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLang(lang);
        renderCommon(lang);
        if (typeof onChange === 'function') onChange(lang);
      });
    });
  }

  window.SmartWash.getLang = getLang;
  window.SmartWash.setLang = setLang;
  window.SmartWash.renderCommon = renderCommon;
  window.SmartWash.initLangToggle = initLangToggle;
})();

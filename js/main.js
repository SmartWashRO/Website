// SmartWash — shared behaviour across all pages

document.addEventListener('DOMContentLoaded', () => {
  // Sticky header shadow state
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // Scroll reveal for generic elements + bay strip steps
  const revealTargets = document.querySelectorAll('.reveal, .bay-step');
  if ('IntersectionObserver' in window && revealTargets.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('in-view'));
  }

  // Contact form: booking vs partnership toggle + Formspree submit feedback
  const form = document.querySelector('.js-contact-form');
  if (form) {
    const successBox = document.querySelector('.form-success');
    form.addEventListener('submit', async (e) => {
      const endpoint = form.getAttribute('action') || '';
      if (endpoint.includes('YOUR_FORM_ID')) {
        // Formspree not yet configured — let it fail gracefully in dev, don't block the demo
        e.preventDefault();
        alert('Connect this form to Formspree: replace YOUR_FORM_ID in contact.html with your real form endpoint.');
        return;
      }
      e.preventDefault();
      const data = new FormData(form);
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          form.reset();
          if (successBox) successBox.classList.add('visible');
        } else {
          alert('Something went wrong sending your message — please try again or email us directly.');
        }
      } catch (err) {
        alert('Something went wrong sending your message — please try again or email us directly.');
      }
    });
  }
});

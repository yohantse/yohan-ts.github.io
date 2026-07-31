/* ─── Scroll-triggered Reveals ────────────────────────────── */
const revealEls = document.querySelectorAll(
  '.product-card, .feature-card, .testimonial-card, .section-header, .contact-item'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger reveals within a grid
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, (entry.target.dataset.delay || 0));
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach((el, i) => {
  // stagger siblings
  el.dataset.delay = (i % 3) * 100;
  revealObserver.observe(el);
});

/* ─── Navbar scroll effect ────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* ─── Active nav link on scroll ──────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { threshold: 0.35 }
);
sections.forEach(s => sectionObserver.observe(s));

/* ─── Mobile Hamburger ────────────────────────────────────── */
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('nav-mobile-menu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const open = mobileMenu.classList.contains('open');
  hamburger.setAttribute('aria-expanded', open);
});
// Close on link click
document.querySelectorAll('.mobile-link, .mobile-cta').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ─── Smooth scroll for all anchor links ─────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── Contact Form Handler ────────────────────────────────── */
function handleFormSubmit(event) {
  event.preventDefault();
  const btn = document.getElementById('form-submit-btn');
  const successMsg = document.getElementById('form-success-msg');
  
  btn.textContent = 'Sending...';
  btn.disabled = true;
  btn.style.opacity = '0.7';
  
  // Simulate form send (replace with real backend later)
  setTimeout(() => {
    btn.textContent = '✓ Sent!';
    successMsg.style.display = 'block';
    event.target.reset();
    
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      btn.style.opacity = '1';
    }, 4000);
  }, 1200);
}

/* ─── Animate stats counter on hero ──────────────────────── */
function animateValue(el, start, end, suffix, duration) {
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * (end - start) + start);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ─── Marquee pause on hover ──────────────────────────────── */
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  marqueeTrack.addEventListener('mouseenter', () => {
    marqueeTrack.style.animationPlayState = 'paused';
  });
  marqueeTrack.addEventListener('mouseleave', () => {
    marqueeTrack.style.animationPlayState = 'running';
  });
}

/* ─── Cursor glow effect (subtle) ────────────────────────── */
const glow = document.createElement('div');
glow.style.cssText = `
  position: fixed; width: 300px; height: 300px;
  border-radius: 50%; pointer-events: none;
  background: radial-gradient(circle, rgba(200,150,62,0.06) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: left 0.4s ease, top 0.4s ease;
  z-index: 0; mix-blend-mode: screen;
`;
document.body.appendChild(glow);
document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
}, { passive: true });

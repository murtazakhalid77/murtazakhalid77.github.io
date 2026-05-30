const portfolioData = {
  skills: [
    ['Java', 94], ['Spring Boot', 92], ['Spring Security', 86], ['Microservices', 90],
    ['Kafka', 84], ['RabbitMQ', 82], ['MySQL', 84], ['Oracle', 80],
    ['Docker', 78], ['Git', 88], ['REST APIs', 93], ['Banking Systems', 91],
    ['Payment Systems', 90], ['Linux', 80]
  ],
  typing: ['Java Backend Engineer', 'Spring Boot Microservices Specialist', 'Fintech & Payment Systems Builder', 'ISO 20022 / SWIFT MT-MX Engineer'],
  projects: [
    {
      title: 'RTGS - Real-Time Gross Settlement System',
      image: 'assets/images/project-rtgs.svg',
      icon: 'banknote',
      description: 'Backend engineering for Pakistan\'s national high-value interbank settlement platform, covering customer transfers, settlement workflows, and government securities transactions.',
      tech: ['Java', 'Spring Boot', 'ISO 20022', 'SWIFT MT/MX', 'Kafka', 'AWS EC2', 'S3', 'SQS'],
      wins: ['Migrated legacy SWIFT MT workflows toward ISO 20022 MX-compliant messaging.', 'Built parsers and generators for structured financial message processing.', 'Performed profiling and reliability work for real-time high-value transaction loads.']
    },
    {
      title: 'RAAST - Instant Payment Infrastructure',
      image: 'assets/images/project-raast.svg',
      icon: 'zap',
      description: 'Backend features for Pakistan\'s instant retail payment rail, supporting real-time fee-free transactions across banking channels and regulated payment participants.',
      tech: ['Java', 'Spring Boot', 'REST APIs', 'RabbitMQ', 'SAF', 'SBP Compliance'],
      wins: ['Delivered P2P flows for RAAST ID creation, linking, and delinking.', 'Worked on P2M merchant payment APIs and telecom bill payment integrations.', 'Implemented Store and Forward reliability behavior for network disruption scenarios.']
    },
    {
      title: 'Digital Bank Onboarding Workflows',
      image: 'assets/images/project-banking.svg',
      icon: 'shield',
      description: 'Regulated onboarding backend workflows for digital banking, integrating identity verification and secure customer validation services.',
      tech: ['Spring Boot', 'NADRA BVS', 'CNIC Verification', 'Spring Security', 'REST'],
      wins: ['Integrated identity verification workflows for compliant onboarding.', 'Supported secure communication patterns across banking APIs.', 'Aligned implementation with scheme rules and regulatory requirements.']
    },
    {
      title: 'SMSA Logistics Management Platform',
      image: 'assets/images/project-logistics.svg',
      icon: 'database',
      description: 'Backend and web application work for a Gulf-based courier platform with admin and user panels, parcel tracking, and bulk processing capabilities.',
      tech: ['Spring Boot', 'Spring Batch', 'MySQL', 'Email APIs', 'RBAC', 'Linux'],
      wins: ['Built parcel tracking, pseudo-customer generation, and admin workflows.', 'Processed thousands of Excel records efficiently with Spring Batch.', 'Managed on-premises deployment, releases, and system availability.']
    }
  ]
};

const icons = {
  banknote: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9v0M18 15v0"/></svg>',
  zap: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h8l-1 8 11-14h-8z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  database: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>',
  code: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V24h-4v-8.5c0-2 0-4.6-2.8-4.6s-3.2 2.2-3.2 4.5V24h-4V8z"/></svg>',
  github: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.1 3.4 1.5.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>'
};

function includeIcon(name) { return icons[name] || icons.code; }

function initNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

function initTyping() {
  const el = document.querySelector('[data-typing]');
  if (!el) return;
  let phrase = 0;
  let index = 0;
  let deleting = false;
  const tick = () => {
    const current = portfolioData.typing[phrase];
    el.textContent = current.slice(0, index);
    if (!deleting && index < current.length) index += 1;
    else if (!deleting) deleting = true;
    else if (deleting && index > 0) index -= 1;
    else { deleting = false; phrase = (phrase + 1) % portfolioData.typing.length; }
    const delay = deleting ? 34 : index === current.length ? 1300 : 58;
    window.setTimeout(tick, delay);
  };
  tick();
}

function renderSkills() {
  const mount = document.querySelector('[data-skills]');
  if (!mount) return;
  mount.innerHTML = portfolioData.skills.map(([name, level]) => `
    <article class="card skill-card reveal">
      <div class="skill-top"><span class="skill-name">${name}</span><span class="skill-level">${level}%</span></div>
      <div class="progress" aria-label="${name} proficiency"><span data-width="${level}%"></span></div>
    </article>
  `).join('');
}

function renderProjects() {
  const mount = document.querySelector('[data-projects]');
  if (!mount) return;
  mount.innerHTML = portfolioData.projects.map(project => `
    <article class="card project-card reveal">
      <div class="project-image"><img src="${project.image}" alt="${project.title} visual" loading="lazy"></div>
      <div class="card-pad">
        <div class="icon" aria-hidden="true">${includeIcon(project.icon)}</div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <ul class="project-list">${project.wins.map(w => `<li>${w}</li>`).join('')}</ul>
      </div>
    </article>
  `).join('');
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.progress span').forEach(bar => { bar.style.width = bar.dataset.width; });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .14 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const start = performance.now();
      const duration = 1100;
      const animate = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        el.textContent = Math.floor(progress * target) + suffix;
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.unobserve(el);
    });
  }, { threshold: .45 });
  counters.forEach(counter => observer.observe(counter));
}

function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get('subject') || 'Portfolio inquiry');
    const body = encodeURIComponent(`Hi Murtaza,\n\n${data.get('message') || ''}\n\nFrom: ${data.get('name') || ''}\nEmail: ${data.get('email') || ''}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=murtazakhalid888@gmail.com&su=${subject}&body=${body}`, `_blank`, `noopener,noreferrer`);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = includeIcon(el.dataset.icon); });
  initNavigation();
  initTyping();
  renderSkills();
  renderProjects();
  initReveal();
  initCounters();
  initContactForm();
});





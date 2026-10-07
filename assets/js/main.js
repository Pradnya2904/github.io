(() => {
  'use strict';
  const config = window.portfolioConfig || {};
  const projects = window.portfolioProjects || [];
  const $ = (id) => document.getElementById(id);
  const make = (tag, className, text) => { const el = document.createElement(tag); el.className = className || ''; if (text) el.textContent = text; return el; };
  const safeURL = (value) => { try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; } catch { return ''; } };
  const localPath = (value) => typeof value === 'string' && value.trim() && !/^(?:[a-z]+:|\/\/|\/)|(?:^|\/)\.\.(?:\/|$)/i.test(value) ? value : '';
  function external(label, url, className) { const a = make('a', className, label); a.href = safeURL(url); a.target = '_blank'; a.rel = 'noopener noreferrer'; return a; }
  function brandMark(project) {
    const box = make('div', `project-brand${project.logo?.compact ? ' brand-emblem' : ''}${project.logo?.dark ? ' brand-dark' : ''}`);
    if (localPath(project.logo?.src)) {
      const img = make('img', 'project-logo');
      img.alt = project.logo.alt || `${project.name} logo`;
      img.width = project.logo.width || 240; img.height = project.logo.height || 72;
      img.loading = 'lazy'; img.decoding = 'async';
      img.addEventListener('error', () => img.replaceWith(make('span', 'brand-fallback', project.name)), { once: true });
      img.src = project.logo.src; box.append(img);
    } else if (project.websites) {
      const icon = make('span', 'collection-mark', '↗'); icon.setAttribute('aria-hidden', 'true');
      box.append(icon, make('span', 'collection-label', 'City website collection'));
    } else box.append(make('span', 'brand-fallback', project.name));
    return box;
  }
  function preview(project, kind, eager = false) {
    const shot = project.screenshots?.[kind];
    if (!shot || !localPath(shot.src)) return brandMark(project);
    const img = make('img'); img.alt = shot.alt || `${project.name} ${kind} website screenshot`; img.width = shot.width || (kind === 'mobile' ? 390 : 1440); img.height = shot.height || (kind === 'mobile' ? 844 : 900); img.loading = eager ? 'eager' : 'lazy'; img.decoding = 'async'; img.addEventListener('error', () => img.replaceWith(make('p', 'asset-note', 'Screenshot unavailable.')), { once: true }); img.src = shot.src; return img;
  }
  const grid = $('project-grid');
  projects.forEach((project) => {
    const col = make('div', 'col-md-6'); col.dataset.category = project.category;
    const card = make('article', 'project-card'); const visual = make('div', 'project-card-top'); visual.append(brandMark(project));
    visual.append(make('span', 'project-number', String(projects.indexOf(project) + 1).padStart(2, '0')));
    const body = make('div', 'project-content'); body.append(make('span', 'eyebrow', project.category), make('h3', '', project.name), make('p', '', project.overview));
    const actions = make('div', 'project-actions');
    if (window.bootstrap?.Modal) { const button = make('button', 'detail-button', 'Explore project ↗'); button.type = 'button'; button.setAttribute('aria-label', `Explore ${project.name} project details`); button.addEventListener('click', () => openProject(project, button)); actions.append(button); }
    if (safeURL(project.url)) actions.append(external('Live website ↗', project.url));
    else { const link = make('a', '', 'View 14 websites ↓'); link.href = '#bus-collection'; link.addEventListener('click', () => { $('bus-collection').open = true; }); actions.append(link); }
    body.append(actions); card.append(visual, body); col.append(card); grid.append(col);
  });
  const filters = $('filters');
  ['All', ...new Set(projects.map((project) => project.category))].forEach((category) => {
    const button = make('button', 'filter-btn', category); button.type = 'button'; button.setAttribute('aria-pressed', String(category === 'All'));
    button.addEventListener('click', () => {
      filters.querySelectorAll('button').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      let count = 0; Array.from(grid.children).forEach((col) => { col.hidden = category !== 'All' && col.dataset.category !== category; if (!col.hidden) count++; });
      $('project-empty').hidden = count > 0; $('project-status').textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown for ${category}.`;
      $('bus-collection').hidden = !['All', 'Transportation'].includes(category);
    }); filters.append(button);
  });
  filters.hidden = false;
  function addList(parent, title, values) { if (!Array.isArray(values) || !values.length) return; parent.append(make('h3', '', title)); const list = make('ul'); values.forEach((value) => list.append(make('li', '', value))); parent.append(list); }
  let modalTrigger = null;
  function openProject(project, trigger) {
    modalTrigger = trigger; $('modal-title').textContent = project.name; $('modal-category').textContent = project.category;
    const body = $('modal-body'); body.replaceChildren(brandMark(project), make('p', 'mt-4', project.overview));
    const shotKinds = ['desktop', 'mobile'].filter((kind) => localPath(project.screenshots?.[kind]?.src));
    shotKinds.forEach((kind) => { const figure = make('figure', `screenshot-figure ${kind}`); figure.append(preview(project, kind, true), make('figcaption', '', `${kind === 'desktop' ? 'Desktop' : 'Mobile'} website screenshot`)); body.append(figure); });
    addList(body, 'Public website highlights', project.features);
    if (project.note) body.append(make('p', 'mt-3', project.note));
    addList(body, 'Confirmed technology stack', project.technologies); addList(body, 'My Contribution', project.contributions);
    if (safeURL(project.url)) body.append(external('Visit live website ↗', project.url, 'btn btn-primary mt-3'));
    if (project.websites) { body.append(make('h3', '', 'Live city websites')); const links = make('div', 'bus-grid'); project.websites.forEach((site) => links.append(cityLink(site))); body.append(links); }
    bootstrap.Modal.getOrCreateInstance($('project-modal')).show();
  }
  $('project-modal').addEventListener('hidden.bs.modal', () => modalTrigger?.focus());
  const buses = projects.find((project) => project.websites)?.websites || [];
  function cityLink([city, name, url]) {
    const link = external('', url); const logo = window.portfolioBusLogos?.[url];
    if (localPath(logo)) { const img = make('img', 'city-logo'); img.alt = `${name} logo`; img.width = 220; img.height = 66; img.loading = 'lazy'; img.decoding = 'async'; img.addEventListener('error', () => img.remove(), { once: true }); img.src = logo; link.append(img); }
    const label = make('span', 'city-link-label'); label.append(make('strong', '', city), make('span', '', name));
    link.append(label, make('span', 'city-arrow', '↗')); return link;
  }
  function renderBuses() { const query = $('city-search').value.trim().toLocaleLowerCase(); const matches = buses.filter(([city]) => city.toLocaleLowerCase().includes(query)); $('bus-grid').replaceChildren(...matches.map(cityLink)); $('city-empty').hidden = matches.length > 0; $('city-status').textContent = `${matches.length} of ${buses.length} websites`; }
  $('bus-search-controls').hidden = false; $('city-search').addEventListener('input', renderBuses); $('clear-search').addEventListener('click', () => { $('city-search').value = ''; renderBuses(); $('city-search').focus(); }); renderBuses();
  $('navigation').querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { if (window.bootstrap?.Collapse && window.matchMedia('(max-width: 767px)').matches) bootstrap.Collapse.getOrCreateInstance($('navigation'), { toggle: false }).hide(); }));
  // Keep navigation usable even if the local Bootstrap script becomes unavailable.
  if (!window.bootstrap) document.querySelector('.navbar-toggler').addEventListener('click', (event) => { const open = $('navigation').classList.toggle('show'); event.currentTarget.setAttribute('aria-expanded', String(open)); });
  const links = $('contact-links');
  function contactLink(label, value, href, symbol) {
    const link = make('a', 'contact-detail'); link.href = href;
    const icon = make('span', 'contact-icon', symbol); icon.setAttribute('aria-hidden', 'true');
    const copy = make('span', 'contact-copy'); copy.append(make('span', 'contact-label', label), make('span', 'contact-value', value));
    const arrow = make('span', 'contact-arrow', '↗'); arrow.setAttribute('aria-hidden', 'true');
    link.append(icon, copy, arrow); links.append(link);
  }
  if (typeof config.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) contactLink('Email me', config.email, `mailto:${config.email}`, '@');
  if (typeof config.phone === 'string' && /^\+?[\d\s()-]{7,20}$/.test(config.phone)) contactLink('Call me', config.phone, `tel:${config.phone.replace(/[^+\d]/g, '')}`, '☎');
  [['LinkedIn', config.linkedin], ['GitHub', config.github]].forEach(([label, url]) => { if (safeURL(url)) links.append(external(`${label} ↗`, url, 'text-link')); });
  $('contact-pending').hidden = links.children.length > 0;
  // Validate a configured resume file before making it public. Live Server/Pages serve HEAD requests.
  if (localPath(config.resume)) fetch(config.resume, { method: 'HEAD' }).then((response) => { if (!response.ok || /text\/html/i.test(response.headers.get('content-type') || '')) return; const a = make('a', 'nav-link', 'Resume ↗'); a.href = config.resume; a.download = ''; $('resume-nav').append(a); $('resume-nav').hidden = false; const contactResume = a.cloneNode(true); contactResume.className = 'text-link'; links.append(contactResume); }).catch(() => {});
  if (Array.isArray(config.additionalSkills) && config.additionalSkills.length) { $('additional-skills').append(...config.additionalSkills.map((skill) => make('span', '', skill))); $('additional-skills').hidden = false; }
  $('year').textContent = new Date().getFullYear();
  // One-time entrances keep the page calm and fully readable without JavaScript.
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window) {
    const entrance = new IntersectionObserver((entries, observer) => {
      entries.forEach(({ target, isIntersecting }) => { if (!isIntersecting) return; if (!motion.matches) target.classList.add('enter-view'); observer.unobserve(target); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.section-heading, .skill-card, .project-card, .about-copy, .contact-panel').forEach((el) => entrance.observe(el));
    const sections = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => { if (!isIntersecting) return; document.querySelectorAll('.section-rail a, #navigation a').forEach((a) => { const active = a.getAttribute('href') === `#${target.id}`; if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); }); });
    }, { rootMargin: '-15% 0px -60% 0px' });
    document.querySelectorAll('main section[id]').forEach((section) => sections.observe(section));
  }
})();

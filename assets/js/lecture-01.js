const slideRoot = document.querySelector('#slide');
const overview = document.querySelector('#overview');
const slideNumber = document.querySelector('#slide-no');
if (slideNumber && !document.querySelector('#footer-attribution')) {
  const attribution = document.createElement('span');
  attribution.id = 'footer-attribution';
  attribution.textContent = '@namnv';
  slideNumber.before(attribution);
}
let current = Number(location.hash.slice(1)) - 1;
if (!Number.isInteger(current) || current < 0 || current >= slides.length) current = 0;

const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

function renderVisual(slide) {
  if (slide.visual) {
    const asset = `../../assets/images/visuals/${slide.visual}.svg`;
    return `<figure class="visual teaching-visual visual-${slide.visual}"><img src="${asset}" alt="${escapeHTML(slide.t)}" decoding="async"></figure>`;
  }
  if (slide.flow) {
    const nodes = slide.flow.map((label, index) => `${index ? '<span class="arrow">→</span>' : ''}<div class="node">${escapeHTML(label).replaceAll('\n', '<br>')}</div>`).join('');
    return `<div class="visual"><div class="flow">${nodes}</div></div>`;
  }
  if (slide.code) return `<div class="visual"><pre class="code">${escapeHTML(slide.code)}</pre></div>`;
  return '';
}

function renderSlide() {
  const slide = slides[current];
  slideRoot.classList.toggle('has-diagram', Boolean(slide.visual));
  const count = `${String(current + 1).padStart(2, '0')} / ${slides.length}`;
  document.querySelector('#period').textContent = `Tiết học ${slide.p}`;
  document.querySelector('#number').textContent = document.querySelector('#slide-no').textContent = count;
  document.querySelector('#crumb').textContent = slide.c;
  document.querySelector('#progress').style.width = `${(current + 1) / slides.length * 100}%`;
  location.replace(`#${current + 1}`);

  if (slide.kind === 'cover') {
    slideRoot.innerHTML = `<article class="cover"><div><p class="eyebrow">${escapeHTML(slide.e)}</p><h1 class="title">${escapeHTML(slide.t)}</h1><p class="lead">${escapeHTML(slide.d)}</p><div class="pills">${slide.tags.map(tag => `<span class="pill">${escapeHTML(tag)}</span>`).join('')}</div></div><div class="cover-art"><div class="globe">WWW</div></div></article>`;
  } else {
    const split = slide.split ? `<div class="cards">${slide.split.map(item => `<div class="card"><b>${escapeHTML(item[0])}</b><p>${escapeHTML(item[1]).replaceAll('\n', '<br>')}</p></div>`).join('')}</div>` : '';
    const cards = slide.cards?.length ? `<div class="cards">${slide.cards.map(item => `<div class="card"><b>${escapeHTML(item[0])}</b><p>${escapeHTML(item[1])}</p></div>`).join('')}</div>` : '';
    const refs = slide.refs ? `<div class="cards reference-cards">${slide.refs.map(([title, description, url]) => `<div class="card"><a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(title)} ↗</a><p>${escapeHTML(description)}</p></div>`).join('')}</div>` : '';
    const demo = slide.demo ? `<div class="card runnable-demo"><b>${escapeHTML(slide.demo[0])}</b><p>${escapeHTML(slide.demo[1])} <a href="${escapeHTML(slide.demo[2])}" target="_blank" rel="noopener noreferrer">Mở minh họa ↗</a></p></div>` : '';
    slideRoot.innerHTML = `<article${slide.visual ? ' class="diagram-slide"' : ''}><p class="eyebrow">${escapeHTML(slide.e)}</p><h2 class="title">${escapeHTML(slide.t)}</h2>${split}${slide.d ? `<p class="lead">${escapeHTML(slide.d)}</p>` : ''}${slide.flow || slide.code || slide.visual ? renderVisual(slide) : ''}${cards}${slide.callout ? `<div class="callout">${escapeHTML(slide.callout)}</div>` : ''}${demo}${refs}</article>`;
  }

  overview.innerHTML = slides.map((item, index) => `<button class="thumb ${index === current ? 'active' : ''}" data-index="${index}"><small>${String(index + 1).padStart(2, '0')} · Tiết ${item.p}</small>${escapeHTML(item.t || 'Nền tảng Internet và Web')}</button>`).join('');
  slideRoot.scrollTop = 0;
}

function goToSlide(index) {
  current = (index + slides.length) % slides.length;
  renderSlide();
}

document.querySelector('#prev').addEventListener('click', () => goToSlide(current - 1));
document.querySelector('#next').addEventListener('click', () => goToSlide(current + 1));
document.querySelector('#menu').addEventListener('click', () => { overview.hidden = !overview.hidden; });
overview.addEventListener('click', event => {
  const button = event.target.closest('[data-index]');
  if (button) { overview.hidden = true; goToSlide(Number(button.dataset.index)); }
});
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === ' ') { event.preventDefault(); goToSlide(current + 1); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); goToSlide(current - 1); }
  if (event.key.toLowerCase() === 'o') overview.hidden = !overview.hidden;
  if (event.key === 'Escape') overview.hidden = true;
});
renderSlide();



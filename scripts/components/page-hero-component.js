// <page-hero title="…" images="a.png,b.png" cta-href="…" cta-text="…">Intro text</page-hero>
// Renders the shared inner-page hero; scripts/site.js handles the slideshow.
class PageHero extends HTMLElement {
  connectedCallback() {
    const imgs = (this.getAttribute('images') || '').split(',').map(s => s.trim()).filter(Boolean);
    const text = this.innerHTML.trim();
    const href = this.getAttribute('cta-href'), label = this.getAttribute('cta-text');
    this.innerHTML = `
      <section class="hero page-hero">
        <div class="slides">${imgs.map((src, i) =>
          `<div class="slide${i ? '' : ' on'}"><img src="${src}" alt="" ${i ? 'loading="lazy"' : 'fetchpriority="high"'}></div>`).join('')}</div>
        <h1 class="display big o">${this.getAttribute('title') || ''}</h1>
        <div class="hero-foot"><p class="lede-hero">${text}</p>${href ? `<a class="button" href="${href}">${label}</a>` : ''}</div>
      </section>`;
  }
}
customElements.define('page-hero', PageHero);
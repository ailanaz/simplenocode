const snippets = [
  {
    id: "cursor-follower",
    title: "Cursor Follower",
    type: "cursor",
    demo: "./snippets/cursor-follower/demo.html",
    thumb: "",
    summary: "A soft neon orb trails the pointer and grows over links or buttons.",
    description: "This is the fastest way to make a static page feel more tactile. It adds motion without forcing a bigger layout change, so it works well when you just want a premium interaction layer.",
    bestFor: "Portfolios, landing pages, interactive hero sections, and brand-heavy sites.",
    usage: [
      "Paste the CSS, HTML, and JavaScript near the end of your page so the floating cursor sits above everything else.",
      "Remove the cursor-hiding rule if you only want the effect on one area instead of the whole page.",
      "Add [data-cursor-hover] to any custom element you want the larger hover state to react to."
    ],
    fallback: `
      <div class="thumb-surface">
        <div class="thumb-orb"></div>
        <div class="thumb-pill-row">
          <span class="thumb-pill">Hover</span>
          <span class="thumb-pill is-muted">Move</span>
        </div>
      </div>
    `,
    code: `<style>
.snc-cursor {
  position: fixed;
  left: 0;
  top: 0;
  width: 26px;
  height: 26px;
  border: 1.5px solid #7dff9b;
  border-radius: 999px;
  background: rgba(125, 255, 155, 0.18);
  box-shadow: 0 0 28px rgba(125, 255, 155, 0.35);
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease, background 0.2s ease;
}

.snc-cursor.is-hover {
  width: 44px;
  height: 44px;
  background: rgba(125, 255, 155, 0.28);
}

html,
body,
a,
button {
  cursor: none;
}
</style>

<div class="snc-cursor" id="sncCursor"></div>

<script>
const sncCursor = document.getElementById("sncCursor");
let sncX = window.innerWidth / 2;
let sncY = window.innerHeight / 2;
let sncCurrentX = sncX;
let sncCurrentY = sncY;

window.addEventListener("mousemove", (event) => {
  sncX = event.clientX;
  sncY = event.clientY;
});

function renderCursor() {
  sncCurrentX += (sncX - sncCurrentX) * 0.16;
  sncCurrentY += (sncY - sncCurrentY) * 0.16;
  sncCursor.style.left = sncCurrentX + "px";
  sncCursor.style.top = sncCurrentY + "px";
  requestAnimationFrame(renderCursor);
}

renderCursor();

document.querySelectorAll("a, button, [data-cursor-hover]").forEach((element) => {
  element.addEventListener("mouseenter", () => sncCursor.classList.add("is-hover"));
  element.addEventListener("mouseleave", () => sncCursor.classList.remove("is-hover"));
});
</script>`
  },
  {
    id: "hover-buttons",
    title: "Hover Button",
    type: "buttons",
    demo: "./snippets/hover-buttons/demo.html",
    thumb: "",
    summary: "A polished CTA with lift, glow, and a soft neon green finish.",
    description: "This is a good default call-to-action when the rest of the page is already simple and you want the main button to carry more visual energy.",
    bestFor: "Primary CTAs, signup prompts, buy buttons, launch pages, and form submissions.",
    usage: [
      "Paste the styles and button markup where your main call-to-action should appear.",
      "Swap the text label and optionally change the gradient values to match your own accent color.",
      "If your site uses multiple CTA styles, keep this one for the most important conversion moment."
    ],
    fallback: `
      <div class="thumb-surface">
        <div class="thumb-glow-btn">Hover Me</div>
      </div>
    `,
    code: `<style>
.snc-glow-btn {
  border: 0;
  border-radius: 14px;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #7dff9b, #35d67b);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  box-shadow: 0 0 24px rgba(125, 255, 155, 0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.snc-glow-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 36px rgba(125, 255, 155, 0.42);
}
</style>

<button class="snc-glow-btn">Hover Me</button>`
  },
  {
    id: "loading-spinner",
    title: "Loading Spinner",
    type: "loaders",
    demo: "./snippets/loading-spinner/demo.html",
    thumb: "",
    summary: "A minimal loader with a green accent ring and a calm loading state.",
    description: "This is the kind of snippet you can drop into wait states without making the page feel broken or too empty. It works well in low-code and embed-heavy builds.",
    bestFor: "Form submits, API waits, embeds, dashboard placeholders, and content hydration states.",
    usage: [
      "Paste the spinner markup anywhere you need a loading placeholder to appear.",
      "Wrap it in your own container if the loader needs to reserve a bigger space while content is fetching.",
      "Match the accent color to the rest of your UI if you want a more branded loading state."
    ],
    fallback: `
      <div class="thumb-surface">
        <div class="thumb-spinner"></div>
        <span class="thumb-loading">Loading</span>
      </div>
    `,
    code: `<style>
.snc-spinner-wrap {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
}

.snc-spinner {
  width: 50px;
  height: 50px;
  border-radius: 999px;
  border: 4px solid rgba(255, 255, 255, 0.12);
  border-top-color: #7dff9b;
  animation: snc-spin 1s linear infinite;
}

.snc-spinner-label {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

@keyframes snc-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

<div class="snc-spinner-wrap">
  <div class="snc-spinner"></div>
  <span class="snc-spinner-label">Loading</span>
</div>`
  },
  {
    id: "marquee-text",
    title: "Marquee Text",
    type: "text",
    demo: "./snippets/marquee-text/demo.html",
    thumb: "",
    summary: "A looping banner that keeps keywords or announcements moving across the page.",
    description: "Use this when you want motion between sections without adding video. It is especially good for repeating service names, launch states, or fast-moving brand language.",
    bestFor: "Announcement bands, service lists, launch pages, transitions, and brand messaging strips.",
    usage: [
      "Paste the marquee container where you want a full-width moving band to live.",
      "Repeat the text sequence inside the track so the loop feels seamless with no empty gap.",
      "Slow the animation for editorial layouts or speed it up if you want a more energetic brand feel."
    ],
    fallback: `
      <div class="thumb-surface thumb-surface-marquee">
        <div class="thumb-marquee">
          <span>DESIGN</span>
          <span>BUILD</span>
          <span>LAUNCH</span>
          <span>DESIGN</span>
          <span>BUILD</span>
          <span>LAUNCH</span>
        </div>
      </div>
    `,
    code: `<style>
.snc-marquee {
  overflow: hidden;
  border-radius: 16px;
  background: #0f1117;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1rem 0;
}

.snc-marquee-track {
  display: flex;
  gap: 1.25rem;
  width: max-content;
  white-space: nowrap;
  animation: snc-marquee 16s linear infinite;
}

.snc-marquee-track span {
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #7dff9b;
}

@keyframes snc-marquee {
  to {
    transform: translateX(-50%);
  }
}
</style>

<div class="snc-marquee">
  <div class="snc-marquee-track">
    <span>DESIGN</span>
    <span>BUILD</span>
    <span>LAUNCH</span>
    <span>DESIGN</span>
    <span>BUILD</span>
    <span>LAUNCH</span>
  </div>
</div>`
  },
  {
    id: "modal-popup",
    title: "Modal Popup",
    type: "ui",
    demo: "./snippets/modal-popup/demo.html",
    thumb: "",
    summary: "A simple overlay modal with a close button and backdrop dismissal.",
    description: "This is a clean reusable shell for extra information, forms, or confirmation moments. It stays lightweight and easy to customize without needing a full component library.",
    bestFor: "FAQs, sign-up nudges, quick forms, confirmation states, and content overlays.",
    usage: [
      "Paste the trigger button, overlay, and script together so the open and close logic stays wired correctly.",
      "Replace the modal body with your own copy, form, or embed while keeping the same container classes.",
      "If you need multiple modals on one page, turn the IDs into unique names before duplicating the snippet."
    ],
    fallback: `
      <div class="thumb-surface">
        <div class="thumb-modal-box"></div>
        <div class="thumb-modal-box is-floating"></div>
      </div>
    `,
    code: `<style>
.snc-modal-trigger,
.snc-modal-close {
  border: 0;
  border-radius: 14px;
  padding: 0.95rem 1.35rem;
  background: linear-gradient(135deg, #7dff9b, #35d67b);
  color: #ffffff;
  font-weight: 700;
}

.snc-modal {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(5, 6, 10, 0.78);
  z-index: 9998;
}

.snc-modal.is-open {
  display: flex;
}

.snc-modal-card {
  width: min(100%, 360px);
  border-radius: 20px;
  padding: 1.25rem;
  background: #11131a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #ffffff;
  box-shadow: 0 26px 60px rgba(0, 0, 0, 0.35);
}

.snc-modal-card h2 {
  margin-bottom: 0.6rem;
}

.snc-modal-card p {
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.6;
}
</style>

<button class="snc-modal-trigger" id="openSnippetModal">Open Modal</button>

<div class="snc-modal" id="sncModal">
  <div class="snc-modal-card">
    <h2>Modal title</h2>
    <p>Drop any short form, message, or content block inside this panel.</p>
    <button class="snc-modal-close" id="closeSnippetModal">Close</button>
  </div>
</div>

<script>
const sncModal = document.getElementById("sncModal");

document.getElementById("openSnippetModal").addEventListener("click", () => {
  sncModal.classList.add("is-open");
});

document.getElementById("closeSnippetModal").addEventListener("click", () => {
  sncModal.classList.remove("is-open");
});

sncModal.addEventListener("click", (event) => {
  if (event.target === sncModal) {
    sncModal.classList.remove("is-open");
  }
});
</script>`
  },
  {
    id: "parallax-scroll",
    title: "Parallax Scroll",
    type: "scroll",
    demo: "./snippets/parallax-scroll/demo.html",
    thumb: "",
    summary: "Layered backgrounds move at different speeds to create depth while scrolling.",
    description: "This gives a section more atmosphere without needing a full video background. It is especially effective for hero blocks, product reveals, or immersive storytelling pages.",
    bestFor: "Hero sections, product reveals, event pages, transition moments, and visual storytelling blocks.",
    usage: [
      "Drop the section markup into the part of the page where you want a full-width depth effect.",
      "Keep the script once and add multiple background layers with different data-speed values if you want more depth.",
      "Use soft gradients or blurred shapes so the motion stays elegant instead of noisy."
    ],
    fallback: `
      <div class="thumb-surface thumb-surface-parallax">
        <div class="thumb-layer layer-back"></div>
        <div class="thumb-layer layer-mid"></div>
        <div class="thumb-layer layer-front"></div>
        <span class="thumb-parallax-text">Parallax</span>
      </div>
    `,
    code: `<style>
.snc-parallax {
  position: relative;
  min-height: 360px;
  overflow: hidden;
  border-radius: 24px;
  background: #0d1016;
  display: flex;
  align-items: center;
  justify-content: center;
}

.snc-parallax-bg {
  position: absolute;
  inset: -12%;
  border-radius: 24px;
  will-change: transform;
}

.snc-parallax-bg[data-speed="0.28"] {
  background:
    radial-gradient(circle at 30% 35%, rgba(125, 255, 155, 0.5), transparent 28%),
    linear-gradient(135deg, #151927, #090b11);
}

.snc-parallax-bg[data-speed="0.14"] {
  background:
    radial-gradient(circle at 70% 45%, rgba(255, 255, 255, 0.12), transparent 24%),
    radial-gradient(circle at 60% 70%, rgba(125, 255, 155, 0.16), transparent 22%);
  mix-blend-mode: screen;
}

.snc-parallax-copy {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #ffffff;
}

.snc-parallax-copy p {
  margin-bottom: 0.5rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
}

.snc-parallax-copy h2 {
  font-size: clamp(2rem, 6vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
}
</style>

<section class="snc-parallax">
  <div class="snc-parallax-bg" data-speed="0.28"></div>
  <div class="snc-parallax-bg" data-speed="0.14"></div>
  <div class="snc-parallax-copy">
    <p>Scroll the page</p>
    <h2>Soft green depth</h2>
  </div>
</section>

<script>
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  document.querySelectorAll(".snc-parallax-bg").forEach((layer) => {
    const speed = Number(layer.dataset.speed || 0.2);
    layer.style.transform = "translateY(" + scrollTop * speed + "px)";
  });
});
</script>`
  },
  {
    id: "text-reveal",
    title: "Text Reveal",
    type: "text",
    demo: "./snippets/text-reveal/demo.html",
    thumb: "",
    summary: "Content slides upward and fades in the first time it enters the viewport.",
    description: "This keeps intros feeling polished without being loud. It works especially well for headlines, section leads, or callouts where you want a softer entrance than a hard cut.",
    bestFor: "Headlines, section intros, testimonials, milestone cards, and editorial blocks.",
    usage: [
      "Add the reveal class to any block of text or card you want to animate into place.",
      "Keep the observer script once per page, then duplicate the reveal element pattern wherever you need it.",
      "Adjust the translateY distance or transition duration to make the effect more subtle or more dramatic."
    ],
    fallback: `
      <div class="thumb-surface thumb-surface-text">
        <span class="thumb-word is-dim">Your</span>
        <span class="thumb-word">text</span>
        <span class="thumb-word is-glow">appears</span>
      </div>
    `,
    code: `<style>
.snc-reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.05em;
  color: #ffffff;
}

.snc-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

<div class="snc-reveal" id="sncReveal">Hello, this text just slid into view.</div>

<script>
const sncReveal = document.getElementById("sncReveal");
const sncObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      sncObserver.unobserve(entry.target);
    }
  });
});

sncObserver.observe(sncReveal);
</script>`
  },
  {
    id: "scroll-to-top",
    title: "Scroll To Top",
    type: "ui",
    demo: "./snippets/scroll-to-top/demo.html",
    thumb: "",
    summary: "A floating button appears after scrolling and smoothly jumps back to the top.",
    description: "This keeps long pages easier to navigate without locking a permanent button into your layout. It is especially useful when a page has a lot of stacked sections or content blocks.",
    bestFor: "Sales pages, portfolios, documentation, tutorials, and long landing pages.",
    usage: [
      "Keep the fixed button markup and the scroll listener together so the visibility state stays synced.",
      "Change the scroll threshold if you want the control to appear sooner or later on the page.",
      "Use the same pattern for other floating utilities like chat launchers or quick action buttons."
    ],
    fallback: `
      <div class="thumb-surface">
        <div class="thumb-scroll-lines">
          <div class="thumb-scroll-line"></div>
          <div class="thumb-scroll-line mid"></div>
          <div class="thumb-scroll-line short"></div>
          <div class="thumb-scroll-line"></div>
        </div>
        <div class="thumb-arrow-badge">↑</div>
      </div>
    `,
    code: `<style>
.snc-scroll-top {
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  width: 52px;
  height: 52px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #7dff9b, #35d67b);
  color: #ffffff;
  font-size: 1.1rem;
  box-shadow: 0 0 30px rgba(125, 255, 155, 0.35);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.snc-scroll-top.is-visible {
  opacity: 1;
  pointer-events: auto;
}
</style>

<button class="snc-scroll-top" id="sncScrollTop" aria-label="Scroll to top">↑</button>

<script>
const sncScrollTop = document.getElementById("sncScrollTop");

window.addEventListener("scroll", () => {
  sncScrollTop.classList.toggle("is-visible", window.scrollY > 240);
});

sncScrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>`
  }
];

const filterLabels = {
  all: "All",
  cursor: "Cursor",
  text: "Text",
  scroll: "Scroll",
  buttons: "Buttons",
  loaders: "Loaders",
  ui: "UI"
};

const state = {
  filter: "all",
  selectedId: snippets[0].id,
  rotationIndex: 0,
  rotationTimer: null
};

const elements = {
  snippetCount: document.getElementById("snippetCount"),
  randomSnippetBtn: document.getElementById("randomSnippetBtn"),
  previewFrame: document.getElementById("previewFrame"),
  reloadPreviewBtn: document.getElementById("reloadPreviewBtn"),
  heroTypeBadge: document.getElementById("heroTypeBadge"),
  heroTitle: document.getElementById("heroTitle"),
  heroSummary: document.getElementById("heroSummary"),
  codeCaption: document.getElementById("codeCaption"),
  copyCodeBtn: document.getElementById("copyCodeBtn"),
  codeBlock: document.getElementById("codeBlock"),
  snippetDescription: document.getElementById("snippetDescription"),
  usageList: document.getElementById("usageList"),
  bestFor: document.getElementById("bestFor"),
  filterMeta: document.getElementById("filterMeta"),
  filters: document.getElementById("filters"),
  cardsGrid: document.getElementById("cardsGrid"),
  cardTemplate: document.getElementById("cardTemplate"),
  mapFloatPanel: document.getElementById("mapFloatPanel"),
  mapFloatHeader: document.getElementById("mapFloatHeader"),
  mapFloatToggle: document.getElementById("mapFloatToggle"),
  rotationViewport: document.getElementById("rotationViewport"),
  rotationType: document.getElementById("rotationType"),
  rotationTitle: document.getElementById("rotationTitle"),
  rotationSummary: document.getElementById("rotationSummary"),
  rotationDots: document.getElementById("rotationDots"),
  rotationSelectBtn: document.getElementById("rotationSelectBtn")
};

function getSnippetById(id) {
  return snippets.find((snippet) => snippet.id === id);
}

function getVisibleSnippets() {
  if (state.filter === "all") {
    return snippets;
  }

  return snippets.filter((snippet) => snippet.type === state.filter);
}

function lineCount(code) {
  return code.trim().split("\n").length;
}

function pluralize(word, count) {
  return count === 1 ? word : word + "s";
}

function previewSrc(snippet) {
  return `${snippet.demo}?v=${Date.now()}`;
}

function renderThumb(snippet) {
  if (snippet.thumb) {
    return `<img class="card-thumb-image" src="${snippet.thumb}" alt="${snippet.title} thumbnail">`;
  }

  return snippet.fallback;
}

function flashButton(button, nextLabel) {
  const originalLabel = button.dataset.originalLabel || button.textContent;
  button.dataset.originalLabel = originalLabel;
  button.textContent = nextLabel;
  window.setTimeout(() => {
    button.textContent = originalLabel;
  }, 1800);
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const fallback = document.createElement("textarea");
  fallback.value = text;
  fallback.setAttribute("readonly", "");
  fallback.style.position = "absolute";
  fallback.style.left = "-9999px";
  document.body.appendChild(fallback);
  fallback.select();
  document.execCommand("copy");
  document.body.removeChild(fallback);
}

async function copySnippet(snippet, button) {
  try {
    await copyText(snippet.code.trim());
    flashButton(button, "Copied!");
  } catch (error) {
    flashButton(button, "Copy Failed");
  }
}

function updateSnippetCount() {
  elements.snippetCount.textContent = `${snippets.length} ${pluralize("snippet", snippets.length)}`;
}

function renderFilters() {
  const filterOrder = ["all", ...new Set(snippets.map((snippet) => snippet.type))];
  elements.filters.innerHTML = "";

  filterOrder.forEach((filterKey) => {
    const button = document.createElement("button");
    button.className = "filter-chip" + (state.filter === filterKey ? " is-active" : "");
    button.type = "button";
    button.textContent = filterLabels[filterKey] || filterKey;
    button.addEventListener("click", () => setFilter(filterKey));
    elements.filters.appendChild(button);
  });
}

function renderCards() {
  const visible = getVisibleSnippets();
  elements.cardsGrid.innerHTML = "";

  visible.forEach((snippet) => {
    const node = elements.cardTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.snippetId = snippet.id;
    node.classList.toggle("is-selected", snippet.id === state.selectedId);
    node.querySelector("[data-role='thumb']").innerHTML = renderThumb(snippet);
    node.querySelector("[data-role='type-chip']").textContent = filterLabels[snippet.type];
    node.querySelector("[data-role='title']").textContent = snippet.title;
    node.querySelector("[data-role='summary']").textContent = snippet.summary;
    node.querySelector("[data-role='copy-size']").textContent = `${lineCount(snippet.code)} lines`;
    node.addEventListener("click", () => selectSnippet(snippet.id));

    const loadButton = node.querySelector("[data-role='load-btn']");
    loadButton.addEventListener("click", (event) => {
      event.stopPropagation();
      selectSnippet(snippet.id);
      if (window.innerWidth < 900) {
        document.querySelector(".hero").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    const copyButton = node.querySelector("[data-role='copy-btn']");
    copyButton.addEventListener("click", async (event) => {
      event.stopPropagation();
      await copySnippet(snippet, copyButton);
    });

    elements.cardsGrid.appendChild(node);
  });
}

function updateCardSelection() {
  document.querySelectorAll(".snippet-card").forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.snippetId === state.selectedId);
  });
}

function updateFilterMeta() {
  const visible = getVisibleSnippets();

  if (state.filter === "all") {
    elements.filterMeta.textContent = `Showing all ${visible.length} ${pluralize("snippet", visible.length)}`;
    return;
  }

  elements.filterMeta.textContent = `Showing ${visible.length} ${filterLabels[state.filter].toLowerCase()} ${pluralize("snippet", visible.length)}`;
}

function renderUsage(steps) {
  elements.usageList.innerHTML = "";
  steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    elements.usageList.appendChild(item);
  });
}

function selectSnippet(id, options = {}) {
  const snippet = getSnippetById(id);
  if (!snippet) {
    return;
  }

  state.selectedId = id;
  elements.heroTypeBadge.textContent = filterLabels[snippet.type];
  elements.heroTitle.textContent = snippet.title;
  elements.heroSummary.textContent = snippet.summary;
  elements.codeCaption.textContent = `${filterLabels[snippet.type]} snippet • ${lineCount(snippet.code)} lines ready to paste`;
  elements.codeBlock.textContent = snippet.code.trim();
  elements.snippetDescription.textContent = snippet.description;
  elements.bestFor.textContent = snippet.bestFor;
  renderUsage(snippet.usage);
  elements.previewFrame.src = previewSrc(snippet);
  updateCardSelection();

  if (options.syncRotation !== false) {
    const rotationPool = getVisibleSnippets();
    const poolIndex = rotationPool.findIndex((item) => item.id === id);
    if (poolIndex >= 0) {
      state.rotationIndex = poolIndex;
    }
    renderRotation();
  }
}

function setFilter(filterKey) {
  state.filter = filterKey;
  const visible = getVisibleSnippets();

  if (!visible.some((snippet) => snippet.id === state.selectedId) && visible[0]) {
    state.selectedId = visible[0].id;
  }

  renderFilters();
  renderCards();
  updateFilterMeta();
  selectSnippet(state.selectedId, { syncRotation: false });
  state.rotationIndex = 0;
  renderRotation();
}

function renderRotation() {
  const pool = getVisibleSnippets();
  if (!pool.length) {
    return;
  }

  if (state.rotationIndex >= pool.length) {
    state.rotationIndex = 0;
  }

  const snippet = pool[state.rotationIndex];
  elements.rotationViewport.innerHTML = renderThumb(snippet);
  elements.rotationType.textContent = filterLabels[snippet.type];
  elements.rotationTitle.textContent = snippet.title;
  elements.rotationSummary.textContent = snippet.summary;
  elements.rotationDots.innerHTML = "";

  pool.forEach((item, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "rotation-dot" + (index === state.rotationIndex ? " is-active" : "");
    dot.setAttribute("aria-label", `Show ${item.title}`);
    dot.addEventListener("click", (event) => {
      event.stopPropagation();
      state.rotationIndex = index;
      renderRotation();
    });
    elements.rotationDots.appendChild(dot);
  });
}

function startRotation() {
  stopRotation();
  state.rotationTimer = window.setInterval(() => {
    const pool = getVisibleSnippets();
    if (!pool.length) {
      return;
    }

    state.rotationIndex = (state.rotationIndex + 1) % pool.length;
    renderRotation();
  }, 3600);
}

function stopRotation() {
  if (state.rotationTimer) {
    window.clearInterval(state.rotationTimer);
    state.rotationTimer = null;
  }
}

function toggleRotationPanel() {
  const collapsed = elements.mapFloatPanel.classList.toggle("collapsed");
  elements.mapFloatToggle.textContent = collapsed ? "▼" : "▲";
}

function pickRandomSnippet() {
  const pool = getVisibleSnippets();
  if (!pool.length) {
    return;
  }

  const snippet = pool[Math.floor(Math.random() * pool.length)];
  selectSnippet(snippet.id);
}

function bindEvents() {
  elements.randomSnippetBtn.addEventListener("click", pickRandomSnippet);
  elements.reloadPreviewBtn.addEventListener("click", () => {
    selectSnippet(state.selectedId, { syncRotation: false });
  });
  elements.copyCodeBtn.addEventListener("click", async () => {
    const snippet = getSnippetById(state.selectedId);
    if (!snippet) {
      return;
    }

    await copySnippet(snippet, elements.copyCodeBtn);
  });
  elements.rotationSelectBtn.addEventListener("click", () => {
    const pool = getVisibleSnippets();
    const snippet = pool[state.rotationIndex];
    if (!snippet) {
      return;
    }

    selectSnippet(snippet.id);
    if (window.innerWidth < 900) {
      document.querySelector(".hero").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  elements.mapFloatHeader.addEventListener("click", toggleRotationPanel);
  elements.mapFloatPanel.addEventListener("mouseenter", stopRotation);
  elements.mapFloatPanel.addEventListener("mouseleave", startRotation);
}

function init() {
  updateSnippetCount();
  renderFilters();
  renderCards();
  updateFilterMeta();
  selectSnippet(state.selectedId, { syncRotation: false });
  renderRotation();
  bindEvents();
  startRotation();
}

init();

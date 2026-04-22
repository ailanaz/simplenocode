const snippets = [ { id: "cursor-follower", title: "Cursor Follower", type: "cursor", demo: "./snippets/cursor-follower/demo.html", thumb: "", summary: "A soft neon orb trails the pointer and grows over links or buttons.", description: "This is the fastest way to make a static page feel more tactile. It adds motion without forcing a bigger layout change, so it works well when you just want a premium interaction layer.", bestFor: "Portfolios, landing pages, interactive hero sections, and brand-heavy sites.", usage: [ "Paste the CSS, HTML, and JavaScript near the end of your page so the floating cursor sits above everything else.", "Remove the cursor-hiding rule if you only want the effect on one area instead of the whole page.", "Add [data-cursor-hover] to any custom element you want the larger hover state to react to." ], fallback: ` <div class="thumb-surface"> <div class="thumb-cursor-demo"> <svg class="thumb-cursor-path" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 100 Q60 20 100 60 Q140 100 180 30" stroke="rgba(26,102,64,0.3)" stroke-width="2" stroke-linecap="round" fill="none"/></svg> <div class="thumb-cursor-dot"></div> </div> </div> `, code: `<style> .snc-cursor { position: fixed; left: 0; top: 0; width: 26px; height: 26px; border: 1.5px solid #1a6640; border-radius: 999px; background: rgba(26, 102, 64, 0.18); box-shadow: 0 0 28px rgba(26, 102, 64, 0.35); pointer-events: none; z-index: 9999; transform: translate(-50%, -50%); transition: width 0.2s ease, height 0.2s ease, background 0.2s ease; } .snc-cursor.is-hover { width: 44px; height: 44px; background: rgba(26, 102, 64, 0.28); } html, body, a, button { cursor: none; } </style> <div class="snc-cursor" id="sncCursor"></div> <script> const sncCursor = document.getElementById("sncCursor"); let sncX = window.innerWidth / 2; let sncY = window.innerHeight / 2; let sncCurrentX = sncX; let sncCurrentY = sncY; window.addEventListener("mousemove", (event) => { sncX = event.clientX; sncY = event.clientY; }); function renderCursor() { sncCurrentX += (sncX - sncCurrentX) * 0.16; sncCurrentY += (sncY - sncCurrentY) * 0.16; sncCursor.style.left = sncCurrentX + "px"; sncCursor.style.top = sncCurrentY + "px"; requestAnimationFrame(renderCursor); } renderCursor(); document.querySelectorAll("a, button, [data-cursor-hover]").forEach((element) => { element.addEventListener("mouseenter", () => sncCursor.classList.add("is-hover")); element.addEventListener("mouseleave", () => sncCursor.classList.remove("is-hover")); }); <\/script>` }, { id: "hover-buttons", title: "Hover Button", type: "buttons", demo: "./snippets/hover-buttons/demo.html", thumb: "", summary: "A polished CTA with lift, glow, and a soft neon green finish.", description: "This is a good default call-to-action when the rest of the page is already simple and you want the main button to carry more visual energy.", bestFor: "Primary CTAs, signup prompts, buy buttons, launch pages, and form submissions.", usage: [ "Paste the styles and button markup where your main call-to-action should appear.", "Swap the text label and optionally change the gradient values to match your own accent color.", "If your site uses multiple CTA styles, keep this one for the most important conversion moment." ], fallback: ` <div class="thumb-surface"> <div class="thumb-btn-demo"> <div class="thumb-btn-solid">Hover Me</div> <div class="thumb-btn-outline">Hover Me</div> </div> </div> `, code: `<style> .snc-glow-btn { border: 0; border-radius: 14px; padding: 1rem 1.5rem; background: linear-gradient(135deg, #28ff0d, #28ff0d); color: #0171d3; font-size: 1rem; font-weight: 700; letter-spacing: 0.02em; cursor: pointer; box-shadow: 0 10px 22px rgba(40, 255, 13, 0.2), 0 0 0 rgba(40, 255, 13, 0); transition: transform 0.2s ease, box-shadow 0.2s ease; } .snc-glow-btn:hover { transform: translateY(-3px); box-shadow: 0 18px 32px rgba(40, 255, 13, 0.24), 0 0 42px rgba(40, 255, 13, 0.48); } </style> <button class="snc-glow-btn">Hover Me</button>` }, { id: "loading-spinner", title: "Loading Spinner", type: "loaders", demo: "./snippets/loading-spinner/demo.html", thumb: "", summary: "A minimal loader with a green accent ring and a calm loading state.", description: "This is the kind of snippet you can drop into wait states without making the page feel broken or too empty. It works well in low-code and embed-heavy builds.", bestFor: "Form submits, API waits, embeds, dashboard placeholders, and content hydration states.", usage: [ "Paste the spinner markup anywhere you need a loading placeholder to appear.", "Wrap it in your own container if the loader needs to reserve a bigger space while content is fetching.", "Match the accent color to the rest of your UI if you want a more branded loading state." ], fallback: ` <div class="thumb-surface"> <div style="display:flex;flex-direction:column;align-items:center;gap:10px;"> <div class="thumb-spinner" style="border-top-color:var(--accent);border-color:rgba(26,102,64,0.15);"></div> <span class="thumb-loading" style="position:static;">Loading...</span> </div> </div> `, code: `<style> .snc-spinner-wrap { display: inline-flex; flex-direction: column; align-items: center; gap: 0.9rem; } .snc-spinner { width: 50px; height: 50px; border-radius: 999px; border: 4px solid rgba(26, 102, 64, 0.18); border-top-color: #1a6640; animation: snc-spin 1s linear infinite; } .snc-spinner-label { color: #4a5a55; font-size: 0.8rem; letter-spacing: 0.14em; text-transform: uppercase; } @keyframes snc-spin { to { transform: rotate(360deg); } } </style> <div class="snc-spinner-wrap"> <div class="snc-spinner"></div> <span class="snc-spinner-label">Loading</span> </div>` }, { id: "marquee-text", title: "Marquee Text", type: "text", demo: "./snippets/marquee-text/demo.html", thumb: "", summary: "A looping banner that keeps keywords or announcements moving across the page.", description: "Use this when you want motion between sections without adding video. It is especially good for repeating service names, launch states, or fast-moving brand language.", bestFor: "Announcement bands, service lists, launch pages, transitions, and brand messaging strips.", usage: [ "Paste the marquee container where you want a full-width moving band to live.", "Repeat the text sequence inside the track so the loop feels seamless with no empty gap.", "Slow the animation for editorial layouts or speed it up if you want a more energetic brand feel." ], fallback: ` <div class="thumb-surface" style="flex-direction:column;gap:6px;background:#f9fafb;"> <div class="thumb-marquee-band"> <div class="thumb-marquee-inner"> <span>SCROLLING</span><span>&#8594;</span><span>MARQUEE</span><span>&#8594;</span><span>TEXT</span><span>&#8594;</span><span>SCROLLING</span><span>&#8594;</span> </div> </div> <div class="thumb-marquee-band"> <div class="thumb-marquee-inner"> <span>DESIGN</span><span>&#8592;</span><span>BUILD</span><span>&#8592;</span><span>LAUNCH</span><span>&#8592;</span><span>DESIGN</span><span>&#8592;</span> </div> </div> </div> `, code: `<style> .snc-marquee { overflow: hidden; border-radius: 16px; background: #111820; border: 1px solid rgba(255,255,255,0.08); padding: 1rem 0; } .snc-marquee-track { display: flex; gap: 1.25rem; width: max-content; white-space: nowrap; animation: snc-marquee 16s linear infinite; } .snc-marquee-track span { font-size: clamp(1rem, 2vw, 1.4rem); font-weight: 700; letter-spacing: 0.12em; color: #5aaf82; } @keyframes snc-marquee { to { transform: translateX(-50%); } } </style> <div class="snc-marquee"> <div class="snc-marquee-track"> <span>DESIGN</span> <span>BUILD</span> <span>LAUNCH</span> <span>DESIGN</span> <span>BUILD</span> <span>LAUNCH</span> </div> </div>` }, { id: "modal-popup", title: "Modal Popup", type: "ui", demo: "./snippets/modal-popup/demo.html", thumb: "", summary: "A simple overlay modal with a close button and backdrop dismissal.", description: "This is a clean reusable shell for extra information, forms, or confirmation moments. It stays lightweight and easy to customize without needing a full component library.", bestFor: "FAQs, sign-up nudges, quick forms, confirmation states, and content overlays.", usage: [ "Paste the trigger button, overlay, and script together so the open and close logic stays wired correctly.", "Replace the modal body with your own copy, form, or embed while keeping the same container classes.", "If you need multiple modals on one page, turn the IDs into unique names before duplicating the snippet." ], fallback: ` <div class="thumb-surface" style="background:#e8f0eb;"> <div class="thumb-modal-demo"> <div class="thumb-modal-backdrop"></div> <div class="thumb-modal-card-demo"> <h4>Modal Title</h4> <p>Drop any content, form, or message inside this panel.</p> <button class="thumb-modal-btn">Close</button> </div> </div> </div> `, code: `<style> .snc-modal-trigger, .snc-modal-close { border: 2px solid #1a6640; border-radius: 14px; padding: 0.95rem 1.35rem; background: #1a6640; color: #fff; font-weight: 700; cursor: pointer; transition: background 0.18s, color 0.18s; } .snc-modal-trigger:hover, .snc-modal-close:hover { background: #fff; color: #1a6640; } .snc-modal { position: fixed; inset: 0; display: none; align-items: center; justify-content: center; padding: 1.5rem; background: rgba(5, 6, 10, 0.78); z-index: 9998; } .snc-modal.is-open { display: flex; } .snc-modal-card { width: min(100%, 360px); border-radius: 20px; padding: 1.25rem; background: #11131a; border: 1px solid rgba(255, 255, 255, 0.08); color: #ffffff; box-shadow: 0 26px 60px rgba(0, 0, 0, 0.35); } .snc-modal-card h2 { margin-bottom: 0.6rem; } .snc-modal-card p { margin-bottom: 1rem; color: rgba(255, 255, 255, 0.72); line-height: 1.6; } </style> <button class="snc-modal-trigger" id="openSnippetModal">Open Modal</button> <div class="snc-modal" id="sncModal"> <div class="snc-modal-card"> <h2>Modal title</h2> <p>Drop any short form, message, or content block inside this panel.</p> <button class="snc-modal-close" id="closeSnippetModal">Close</button> </div> </div> <script> const sncModal = document.getElementById("sncModal"); document.getElementById("openSnippetModal").addEventListener("click", () => { sncModal.classList.add("is-open"); }); document.getElementById("closeSnippetModal").addEventListener("click", () => { sncModal.classList.remove("is-open"); }); sncModal.addEventListener("click", (event) => { if (event.target === sncModal) { sncModal.classList.remove("is-open"); } }); <\/script>` }, { id: "parallax-scroll", title: "Parallax Scroll", type: "scroll", demo: "./snippets/parallax-scroll/demo.html", thumb: "", summary: "Layered backgrounds move at different speeds to create depth while scrolling.", description: "This gives a section more atmosphere without needing a full video background. It is especially effective for hero blocks, product reveals, or immersive storytelling pages.", bestFor: "Hero sections, product reveals, event pages, transition moments, and visual storytelling blocks.", usage: [ "Drop the section markup into the part of the page where you want a full-width depth effect.", "Keep the script once and add multiple background layers with different data-speed values if you want more depth.", "Use soft gradients or blurred shapes so the motion stays elegant instead of noisy." ], fallback: ` <div class="thumb-surface" style="padding:0;"> <div class="thumb-parallax-demo"> <div class="thumb-parallax-glow"></div> <span class="thumb-parallax-label">Parallax Depth</span> </div> </div> `, code: `<style> .snc-parallax { position: relative; min-height: 360px; overflow: hidden; border-radius: 24px; background: #0d1016; display: flex; align-items: center; justify-content: center; } .snc-parallax-bg { position: absolute; inset: -12%; border-radius: 24px; will-change: transform; } .snc-parallax-bg[data-speed="0.28"] { background: radial-gradient(circle at 30% 35%, rgba(26, 102, 64, 0.4), transparent 28%), linear-gradient(135deg, #0d1a13, #060e09); } .snc-parallax-bg[data-speed="0.14"] { background: radial-gradient(circle at 70% 45%, rgba(255,255,255,0.08), transparent 24%), radial-gradient(circle at 60% 70%, rgba(26, 102, 64, 0.2), transparent 22%); mix-blend-mode: screen; } .snc-parallax-copy { position: relative; z-index: 1; text-align: center; color: #ffffff; } .snc-parallax-copy p { margin-bottom: 0.5rem; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255, 255, 255, 0.7); font-size: 0.8rem; } .snc-parallax-copy h2 { font-size: clamp(2rem, 6vw, 4rem); line-height: 0.95; letter-spacing: -0.06em; } </style> <section class="snc-parallax"> <div class="snc-parallax-bg" data-speed="0.28"></div> <div class="snc-parallax-bg" data-speed="0.14"></div> <div class="snc-parallax-copy"> <p>Scroll the page</p> <h2>Soft green depth</h2> </div> </section> <script> window.addEventListener("scroll", () => { const scrollTop = window.pageYOffset; document.querySelectorAll(".snc-parallax-bg").forEach((layer) => { const speed = Number(layer.dataset.speed || 0.2); layer.style.transform = "translateY(" + scrollTop * speed + "px)"; }); }); <\/script>` }, { id: "text-reveal", title: "Text Reveal", type: "text", demo: "./snippets/text-reveal/demo.html", thumb: "", summary: "Content slides upward and fades in the first time it enters the viewport.", description: "This keeps intros feeling polished without being loud. It works especially well for headlines, section leads, or callouts where you want a softer entrance than a hard cut.", bestFor: "Headlines, section intros, testimonials, milestone cards, and editorial blocks.", usage: [ "Add the reveal class to any block of text or card you want to animate into place.", "Keep the observer script once per page, then duplicate the reveal element pattern wherever you need it.", "Adjust the translateY distance or transition duration to make the effect more subtle or more dramatic." ], fallback: ` <div class="thumb-surface"> <div class="thumb-text-reveal"> <div class="thumb-reveal-line accent">Your text</div> <div class="thumb-reveal-line">appears here</div> <div class="thumb-reveal-line dim">on scroll.</div> </div> </div> `, code: `<style> .snc-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; font-size: clamp(1.8rem, 5vw, 3rem); font-weight: 700; line-height: 1; letter-spacing: -0.05em; color: #111820; } .snc-reveal.is-visible { opacity: 1; transform: translateY(0); } </style> <div class="snc-reveal" id="sncReveal">Hello, this text just slid into view.</div> <script> const sncReveal = document.getElementById("sncReveal"); const sncObserver = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); sncObserver.unobserve(entry.target); } }); }); sncObserver.observe(sncReveal); <\/script>` }, { id: "diagonal-marquee", title: "Diagonal Marquee Bands", type: "text", demo: "./snippets/diagonal-marquee/demo.html", thumb: "", summary: "Two full-width ticker bands cross in opposite directions over a section for a bold design statement.", description: "Lifted directly from the portfolio of Krish Kasodariya. Two marquee strips rotate at opposing angles and scroll in opposite directions, creating an X crossing effect that draws the eye and breaks up vertical scroll.", bestFor: "Hero transitions, agency portfolios, launch pages, and section dividers.", usage: [ "Paste the full block into the section between your hero and your next content block.", "Change the words inside each marquee track to match your own brand keywords.", "Adjust the rotation angles and animation duration to speed up or slow down the effect." ], fallback: ` <div class="thumb-surface" style="background:#f9fafb;overflow:hidden;"> <div class="thumb-diag-demo"> <div class="thumb-diag-band top"><span class="thumb-diag-text">DESIGN &#8594; DEVELOP &#8594; DEPLOY &#8594; DESIGN &#8594;</span></div> <div class="thumb-diag-band bot"><span class="thumb-diag-text">DEPLOY &#8592; DEVELOP &#8592; DESIGN &#8592; DEPLOY &#8592;</span></div> </div> </div> `, code: `<style>
.snc-bands {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 80px 0;
  background: transparent;
  pointer-events: none;
}
.snc-band {
  position: absolute;
  left: -10%;
  width: 120%;
  background: #111;
  padding: 18px 0;
  display: flex;
  overflow: hidden;
}
.snc-band-top {
  top: 30px;
  transform: rotate(-6deg);
}
.snc-band-bottom {
  top: 80px;
  transform: rotate(6deg);
}
.snc-band-track {
  display: flex;
  gap: 2rem;
  white-space: nowrap;
  animation: snc-marquee-left 14s linear infinite;
}
.snc-band-bottom .snc-band-track {
  animation: snc-marquee-right 14s linear infinite;
}
.snc-band-track span {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1.5px #fff;
}
@keyframes snc-marquee-left {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@keyframes snc-marquee-right {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}
</style>

<div class="snc-bands">
  <div class="snc-band snc-band-top">
    <div class="snc-band-track">
      <span>DESIGN</span><span>&#8594;</span>
      <span>DEVELOP</span><span>&#8594;</span>
      <span>DEPLOY</span><span>&#8594;</span>
      <span>DESIGN</span><span>&#8594;</span>
      <span>DEVELOP</span><span>&#8594;</span>
      <span>DEPLOY</span><span>&#8594;</span>
    </div>
  </div>
  <div class="snc-band snc-band-bottom">
    <div class="snc-band-track">
      <span>DESIGN</span><span>&#8594;</span>
      <span>DEVELOP</span><span>&#8594;</span>
      <span>DEPLOY</span><span>&#8594;</span>
      <span>DESIGN</span><span>&#8594;</span>
      <span>DEVELOP</span><span>&#8594;</span>
      <span>DEPLOY</span><span>&#8594;</span>
    </div>
  </div>
</div>` }, { id: "floating-dock-nav", title: "Floating Dock Nav", type: "ui", demo: "./snippets/floating-dock-nav/demo.html", thumb: "", summary: "A pill-shaped nav bar floats at the bottom of the screen with icon tabs and a solid CTA button.", description: "Taken from the navigation pattern on Krish Kasodariya's portfolio. Stays fixed as the user scrolls, picks up a subtle background on scroll, and contains icon-only links on the left and a solid call-to-action pill on the right.", bestFor: "Portfolios, single-page sites, mobile-first layouts, and product landing pages.", usage: [ "Paste the nav HTML and CSS at the very bottom of your body, above the closing tag.", "Replace each SVG icon with your own and update the href values to your section IDs or pages.", "Change the CTA button text and link to point at your contact form or booking page." ], fallback: ` <div class="thumb-surface" style="align-items:flex-end;padding:14px;"> <div class="thumb-dock-demo"> <div class="thumb-dock-bar"> <div class="thumb-dock-icon">&#8962;</div> <div class="thumb-dock-icon">&#9881;</div> <div class="thumb-dock-icon">&#9993;</div> <div class="thumb-dock-cta">Get Started</div> </div> </div> </div> `, code: `<style>
.snc-dock {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 999px;
  padding: 10px 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}
.snc-dock-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  color: #555;
  text-decoration: none;
  transition: background 0.18s, color 0.18s;
}
.snc-dock-link:hover,
.snc-dock-link.is-active {
  background: #f0f0f0;
  color: #111;
}
.snc-dock-link svg {
  width: 22px;
  height: 22px;
  stroke: currentColor;
  fill: none;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.snc-dock-cta {
  margin-left: 6px;
  padding: 12px 22px;
  border-radius: 999px;
  background: #111;
  color: #fff;
  font-size: 0.86rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: background 0.18s;
}
.snc-dock-cta:hover { background: #333; }
</style>

<nav class="snc-dock" aria-label="Site navigation">
  <a href="#" class="snc-dock-link is-active" aria-label="Home">
    <svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/></svg>
  </a>
  <a href="#services" class="snc-dock-link" aria-label="Services">
    <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-3 3z"/><path d="M5 20a2 2 0 002 2h10a2 2 0 002-2V8l-5-5H7a2 2 0 00-2 2v14z"/></svg>
  </a>
  <a href="#work" class="snc-dock-link" aria-label="Work">
    <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
  </a>
  <a href="#contact" class="snc-dock-link" aria-label="Contact">
    <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
  </a>
  <a href="#contact" class="snc-dock-cta">Get Started</a>
</nav>` }, { id: "cursor-ink-trail", title: "Cursor Ink Trail", type: "cursor", demo: "./snippets/cursor-ink-trail/demo.html", thumb: "", summary: "A smooth ink stroke follows the pointer and fades when the cursor goes idle.", description: "Taken from the cursor effect on Krish Kasodariya's portfolio. Uses a canvas element positioned over the page, a smoothed lerp to follow the mouse, and quadratic curves to draw a continuous fading stroke rather than choppy dots.", bestFor: "Portfolios, creative agencies, art direction sites, and brand-heavy interactive pages.", usage: [ "Paste the canvas element and the script block anywhere in your HTML — the script wires itself up automatically.", "The effect only activates on devices with a fine pointer like a mouse, and is skipped on touch-only devices.", "Change strokeColor and strokeWidth near the top of the script to match your brand." ], fallback: ` <div class="thumb-surface"> <div class="thumb-cursor-demo"> <svg class="thumb-cursor-path" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 110 Q50 30 90 70 Q130 110 170 20" stroke="#1a6640" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6"/><circle cx="170" cy="20" r="5" fill="#1a6640" opacity="0.7"/></svg> </div> </div> `, code: `<style>
#snc-cursor-canvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}
</style>

<canvas id="snc-cursor-canvas"></canvas>

<script>
(function() {
  var canvas = document.getElementById('snc-cursor-canvas');
  if (!canvas) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;
  var ctx = canvas.getContext('2d');
  var trail = [];
  var cursor = { x: -1000, y: -1000 };
  var smoothed = { x: -1000, y: -1000 };
  var lastMove = 0;
  var lastTick = 0;
  var trailMax = 15;
  var smoothing = 0.22;
  var idleFadeAfter = 20;
  var strokeWidth = 2.5;
  var dpr = window.devicePixelRatio || 1;

  function lerp(a, b, t) { return a + (b - a) * t; }
  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

  function resize() {
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('mousemove', function(e) {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    lastMove = Date.now();
  }, { passive: true });
  window.addEventListener('resize', resize);
  resize();

  function tick() {
    var now = Date.now();
    var dt = Math.min((now - lastTick) / 1000, 0.1);
    lastTick = now;
    var lf = 1 - Math.pow(smoothing, 60 * dt);
    smoothed.x = lerp(smoothed.x, cursor.x, lf);
    smoothed.y = lerp(smoothed.y, cursor.y, lf);
    if (trail.length === 0 || dist(smoothed, trail[trail.length - 1]) > 1.2) {
      trail.push({ x: smoothed.x, y: smoothed.y });
      if (trail.length > trailMax) trail.shift();
    }
    var idle = (now - lastMove) > idleFadeAfter;
    if (idle && trail.length > 0) {
      trail.forEach(function(p) { p.o = (p.o === undefined ? 1 : p.o) * 0.88; });
      trail = trail.filter(function(p) { return (p.o === undefined ? 1 : p.o) > 0.03; });
    }
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    if (trail.length >= 2) {
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);
      for (var i = 1; i < trail.length; i++) {
        var p0 = trail[i - 1], p1 = trail[i];
        ctx.quadraticCurveTo(p0.x, p0.y, p1.x, p1.y);
      }
      var op = idle && trail[0].o !== undefined ? trail[0].o : 1;
      ctx.strokeStyle = 'rgba(0,0,0,' + Math.max(0.05, op * 0.9) + ')';
      ctx.stroke();
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
<\/script>` }, { id: "scroll-reveal-section", title: "Scroll Reveal Section", type: "scroll", demo: "./snippets/scroll-reveal-section/demo.html", thumb: "", summary: "Sections and cards fade and slide in as they enter the viewport, using IntersectionObserver.", description: "Based on the animate-on-scroll system used throughout Krish Kasodariya's portfolio. A single IntersectionObserver watches for elements with the reveal class, adds an in-view class when they reach the center zone of the screen, and a scroll fallback ensures content never stays hidden.", bestFor: "Any multi-section page where you want content to animate in as the user reads down.", usage: [ "Add the class snc-reveal to any section, card, or block you want to animate in.", "The script only needs to be pasted once per page, no matter how many reveal elements you have.", "Adjust the translateY and opacity transition values in the CSS to change how dramatic the entrance feels." ], fallback: ` <div class="thumb-surface"> <div class="thumb-scroll-reveal-demo"> <div class="thumb-reveal-block vis">Visible block</div> <div class="thumb-reveal-block vis" style="opacity:0.7;">Fading in...</div> <div class="thumb-reveal-block faded">Hidden until scroll</div> </div> </div> `, code: `<style>
.snc-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.snc-reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}
.snc-reveal-delay-1 { transition-delay: 0.1s; }
.snc-reveal-delay-2 { transition-delay: 0.2s; }
.snc-reveal-delay-3 { transition-delay: 0.3s; }

/* Demo block styling */
.snc-reveal-demo {
  padding: 40px 24px;
  border-radius: 18px;
  background: #f5f5f5;
  margin: 20px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #111;
  text-align: center;
}
</style>

<div class="snc-reveal">
  <div class="snc-reveal-demo">I fade in on scroll</div>
</div>
<div class="snc-reveal snc-reveal-delay-1">
  <div class="snc-reveal-demo">I follow with a delay</div>
</div>
<div class="snc-reveal snc-reveal-delay-2">
  <div class="snc-reveal-demo">And I come in last</div>
</div>

<script>
(function() {
  var els = document.querySelectorAll('.snc-reveal');
  if (!els.length || !('IntersectionObserver' in window)) {
    els.forEach(function(el) { el.classList.add('in-view'); });
    return;
  }
  function inZone(el) {
    var rect = el.getBoundingClientRect();
    var vh = window.innerHeight;
    var center = rect.top + rect.height / 2;
    return (center >= vh * 0.1 && center <= vh * 0.98) || rect.bottom < vh * 0.1;
  }
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && inZone(entry.target)) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: [0, 0.2, 0.5] });
  els.forEach(function(el) { obs.observe(el); });
  function check() {
    els.forEach(function(el) {
      if (!el.classList.contains('in-view') && inZone(el)) {
        el.classList.add('in-view');
        obs.unobserve(el);
      }
    });
  }
  window.addEventListener('scroll', check, { passive: true });
  check();
})();
<\/script>` }, { id: "comparison-table", title: "Others vs Me Table", type: "ui", demo: "./snippets/comparison-table/demo.html", thumb: "", summary: "A two-column comparison layout that contrasts your offer against the generic alternative.", description: "Based on the comparison section on Krish Kasodariya's portfolio. A light left column lists common pain points with a red emoji, a dark right column lists your advantages with a green emoji. The contrast in background color does most of the persuasion work.", bestFor: "Freelancer portfolios, SaaS landing pages, agency sites, and any page where you need to position against the status quo.", usage: [ "Swap the list items in both columns to match your own talking points.", "Keep the same number of rows on each side so the columns stay aligned.", "Change the dark column background color to your own brand accent if needed." ], fallback: ` <div class="thumb-surface" style="padding:6px;"> <div class="thumb-compare-demo"> <div class="thumb-compare-col-demo light"> <div class="thumb-compare-heading-demo">Others</div> <div class="thumb-compare-row-demo">&#128577; Slow delivery</div> <div class="thumb-compare-row-demo">&#128577; Poor design</div> <div class="thumb-compare-row-demo">&#128577; Bad comms</div> </div> <div class="thumb-compare-col-demo dark"> <div class="thumb-compare-heading-demo">Me</div> <div class="thumb-compare-row-demo">&#128578; Fast delivery</div> <div class="thumb-compare-row-demo">&#128578; Modern design</div> <div class="thumb-compare-row-demo">&#128578; Clear comms</div> </div> </div> </div> `, code: `<style>
.snc-compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 860px;
  margin: 0 auto;
  font-family: inherit;
}
.snc-compare-col {
  border-radius: 20px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.snc-compare-col.others {
  background: #f5f5f5;
}
.snc-compare-col.me {
  background: #1a1a1a;
  color: #fff;
}
.snc-compare-heading {
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 8px;
}
.snc-compare-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 500;
}
.snc-compare-col.others .snc-compare-row {
  background: #ebebeb;
  color: #333;
}
.snc-compare-col.me .snc-compare-row {
  background: rgba(255,255,255,0.07);
  color: #eee;
}
@media (max-width: 600px) {
  .snc-compare { grid-template-columns: 1fr; }
}
</style>

<div class="snc-compare">
  <div class="snc-compare-col others">
    <div class="snc-compare-heading">Others</div>
    <div class="snc-compare-row">&#128577; Slow delivery</div>
    <div class="snc-compare-row">&#128577; Outdated design</div>
    <div class="snc-compare-row">&#128577; Poor communication</div>
    <div class="snc-compare-row">&#128577; Limited customization</div>
    <div class="snc-compare-row">&#128577; No clear process</div>
    <div class="snc-compare-row">&#128577; Hard to scale</div>
  </div>
  <div class="snc-compare-col me">
    <div class="snc-compare-heading">Me</div>
    <div class="snc-compare-row">&#128578; Fast &amp; efficient delivery</div>
    <div class="snc-compare-row">&#128578; Modern, user-focused design</div>
    <div class="snc-compare-row">&#128578; Clear &amp; open communication</div>
    <div class="snc-compare-row">&#128578; Fully custom solutions</div>
    <div class="snc-compare-row">&#128578; Structured workflow</div>
    <div class="snc-compare-row">&#128578; Scalable &amp; future-ready</div>
  </div>
</div>` }, { id: "phone-carousel", title: "Phone Mockup Carousel", type: "ui", demo: "./snippets/phone-carousel/demo.html", thumb: "", summary: "Three phone mockups sit side by side — click or use arrows to bring any one to center.", description: "Based on the app showcase carousel on Krish Kasodariya's portfolio. A fixed-width centered track translates on navigation. The active phone is scaled up and the side phones scale down, creating a stage effect without any library.", bestFor: "App portfolios, SaaS product showcases, mobile product pages, and multi-feature demos.", usage: [ "Replace the placeholder screen images inside each .snc-phone-screen with your own screenshots.", "Add or remove .snc-phone-item blocks to change the number of phones in the carousel.", "Update data-app-name on each item and the script will show the name above the carousel automatically." ], fallback: ` <div class="thumb-surface" style="gap:6px;"> <div class="thumb-phone-demo"> <div class="thumb-phone-frame-demo side"><div class="thumb-phone-screen-demo">App</div></div> <div class="thumb-phone-frame-demo center"><div class="thumb-phone-screen-demo">&#9733;</div></div> <div class="thumb-phone-frame-demo side"><div class="thumb-phone-screen-demo">App</div></div> </div> </div> `, code: `<style>
.snc-phones-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 32px 0 24px;
}
.snc-phones-track {
  display: flex;
  gap: 16px;
  align-items: center;
  transition: transform 0.45s cubic-bezier(.4,0,.2,1);
  will-change: transform;
}
.snc-phone-item {
  flex: 0 0 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.4s ease, opacity 0.4s ease;
  transform: scale(0.82);
  opacity: 0.55;
  cursor: pointer;
}
.snc-phone-item.is-center {
  transform: scale(1);
  opacity: 1;
  cursor: default;
}
.snc-phone-frame {
  width: 200px;
  height: 380px;
  border-radius: 36px;
  border: 5px solid #1a6640;
  overflow: hidden;
  background: #f0f0f0;
  box-shadow: 0 20px 60px rgba(0,0,0,0.18);
  position: relative;
}
.snc-phone-screen {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.snc-phone-notch {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 20px;
  background: #111;
  border-radius: 999px;
  z-index: 2;
}
.snc-phones-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid rgba(0,0,0,0.12);
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  z-index: 10;
  transition: background 0.18s;
}
.snc-phones-btn:hover { background: #1a6640; color: #fff; border-color: #1a6640; }
.snc-phones-prev { left: 8px; }
.snc-phones-next { right: 8px; }
</style>

<div class="snc-phones-wrap" id="sncPhonesWrap">
  <button class="snc-phones-btn snc-phones-prev" id="sncPhonesPrev" aria-label="Previous">&#8592;</button>
  <div class="snc-phones-track" id="sncPhonesTrack">
    <div class="snc-phone-item" data-app-name="App One" data-phone-index="0">
      <div class="snc-phone-frame">
        <div class="snc-phone-notch"></div>
        <img class="snc-phone-screen" src="https://placehold.co/400x750/6366f1/fff?text=App+One" alt="App One">
      </div>
    </div>
    <div class="snc-phone-item" data-app-name="App Two" data-phone-index="1">
      <div class="snc-phone-frame">
        <div class="snc-phone-notch"></div>
        <img class="snc-phone-screen" src="https://placehold.co/400x750/111/fff?text=Swipe" alt="Swipe">
      </div>
    </div>
    <div class="snc-phone-item" data-app-name="App Three" data-phone-index="2">
      <div class="snc-phone-frame">
        <div class="snc-phone-notch"></div>
        <img class="snc-phone-screen" src="https://placehold.co/400x750/7c3aed/fff?text=App+Three" alt="App Three">
      </div>
    </div>
  </div>
  <button class="snc-phones-btn snc-phones-next" id="sncPhonesNext" aria-label="Next">&#8594;</button>
</div>

<script>
(function() {
  var track = document.getElementById('sncPhonesTrack');
  var prev = document.getElementById('sncPhonesPrev');
  var next = document.getElementById('sncPhonesNext');
  if (!track) return;
  var items = Array.from(track.querySelectorAll('.snc-phone-item'));
  var total = items.length;
  var center = Math.floor(total / 2);
  var SLOT = 236;

  function update() {
    var offset = center * SLOT + SLOT / 2;
    track.style.transform = 'translateX(calc(50% - ' + offset + 'px))';
    items.forEach(function(item, i) {
      item.classList.toggle('is-center', i === center);
    });
  }

  function go(dir) {
    center = (center + dir + total) % total;
    update();
  }

  items.forEach(function(item, i) {
    item.addEventListener('click', function() {
      if (i === center) return;
      center = i;
      update();
    });
  });

  if (prev) prev.addEventListener('click', function() { go(-1); });
  if (next) next.addEventListener('click', function() { go(1); });
  update();
})();
<\/script>`}, { id: "scroll-to-top", title: "Scroll To Top", type: "ui", demo: "./snippets/scroll-to-top/demo.html", thumb: "", summary: "A floating button appears after scrolling and smoothly jumps back to the top.", description: "This keeps long pages easier to navigate without locking a permanent button into your layout. It is especially useful when a page has a lot of stacked sections or content blocks.", bestFor: "Sales pages, portfolios, documentation, tutorials, and long landing pages.", usage: [ "Keep the fixed button markup and the scroll listener together so the visibility state stays synced.", "Change the scroll threshold if you want the control to appear sooner or later on the page.", "Use the same pattern for other floating utilities like chat launchers or quick action buttons." ], fallback: ` <div class="thumb-surface"> <div class="thumb-scroll-top-demo"> <div class="thumb-page-lines"> <div class="thumb-page-line w-full"></div> <div class="thumb-page-line w-3q"></div> <div class="thumb-page-line w-full"></div> <div class="thumb-page-line w-half"></div> <div class="thumb-page-line w-3q"></div> <div class="thumb-page-line w-full"></div> </div> <div class="thumb-scroll-btn">&#8593;</div> </div> </div> `, code: `<style> .snc-scroll-top { position: fixed; right: 1.5rem; bottom: 1.5rem; width: 52px; height: 52px; border: 2px solid #1a6640; border-radius: 999px; background: #1a6640; color: #fff; font-size: 1.1rem; opacity: 0; pointer-events: none; cursor: pointer; transition: opacity 0.25s ease, background 0.18s, color 0.18s; } .snc-scroll-top.is-visible { opacity: 1; pointer-events: auto; } .snc-scroll-top:hover { background: #fff; color: #1a6640; } </style> <button class="snc-scroll-top" id="sncScrollTop" aria-label="Scroll to top">&#8593;</button> <script> const sncScrollTop = document.getElementById("sncScrollTop"); window.addEventListener("scroll", () => { sncScrollTop.classList.toggle("is-visible", window.scrollY > 240); }); sncScrollTop.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); }); <\/script>` } ];

const filterLabels = { all: "All", cursor: "Cursor", text: "Text", scroll: "Scroll", buttons: "Buttons", loaders: "Loaders", ui: "UI" };

const state = { filter: "all", selectedId: snippets[0].id, rotationIndex: 0, rotationTimer: null };

const elements = { snippetCount: document.getElementById("snippetCount"), randomSnippetBtn: document.getElementById("randomSnippetBtn"), previewSection: document.getElementById("previewSection"), previewFrame: document.getElementById("previewFrame"), heroTypeBadge: document.getElementById("heroTypeBadge"), heroTitle: document.getElementById("heroTitle"), heroSummary: document.getElementById("heroSummary"), codeCaption: document.getElementById("codeCaption"), copyCodeBtn: document.getElementById("copyCodeBtn"), codeBlock: document.getElementById("codeBlock"), snippetDescription: document.getElementById("snippetDescription"), usageList: document.getElementById("usageList"), bestFor: document.getElementById("bestFor"), filterMeta: document.getElementById("filterMeta"), filters: document.getElementById("filters"), cardsGrid: document.getElementById("cardsGrid"), cardTemplate: document.getElementById("cardTemplate"), mapFloatPanel: document.getElementById("mapFloatPanel"), mapFloatHeader: document.getElementById("mapFloatHeader"), mapFloatToggle: document.getElementById("mapFloatToggle"), rotationTitle: document.getElementById("rotationTitle"), rotationUse: document.getElementById("rotationUse"), rotationDots: document.getElementById("rotationDots"), rotationSelectBtn: document.getElementById("rotationSelectBtn") };

function getSnippetById(id) { return snippets.find((s) => s.id === id); }
function getVisibleSnippets() { if (state.filter === "all") { return snippets; } return snippets.filter((s) => s.type === state.filter); }
function lineCount(code) { return code.trim().split("\n").length; }
function pluralize(word, count) { return count === 1 ? word : word + "s"; }
function previewSrc(snippet) { return snippet.demo + "?v=" + Date.now(); }
function renderThumb(snippet) { if (snippet.thumb) { return '<img class="card-thumb-image" src="' + snippet.thumb + '" alt="' + snippet.title + ' thumbnail">'; } return snippet.fallback; }
function flashButton(button, nextLabel) { const orig = button.dataset.originalLabel || button.textContent; button.dataset.originalLabel = orig; button.textContent = nextLabel; window.setTimeout(() => { button.textContent = orig; }, 1800); }

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return; }
  const fb = document.createElement("textarea"); fb.value = text; fb.setAttribute("readonly", ""); fb.style.position = "absolute"; fb.style.left = "-9999px"; document.body.appendChild(fb); fb.select(); document.execCommand("copy"); document.body.removeChild(fb);
}

async function copySnippet(snippet, button) {
  try { await copyText(snippet.code.trim()); flashButton(button, "Copied!"); } catch (e) { flashButton(button, "Copy Failed"); }
}

function updateSnippetCount() { elements.snippetCount.textContent = snippets.length + " " + pluralize("snippet", snippets.length); }

function renderFilters() {
  const order = ["all", ...new Set(snippets.map((s) => s.type))];
  elements.filters.innerHTML = "";
  order.forEach((key) => {
    const btn = document.createElement("button");
    btn.className = "filter-chip" + (state.filter === key ? " is-active" : "");
    btn.type = "button";
    btn.textContent = filterLabels[key] || key;
    btn.addEventListener("click", () => setFilter(key));
    elements.filters.appendChild(btn);
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
    node.querySelector("[data-role='copy-size']").textContent = lineCount(snippet.code) + " lines";

    node.addEventListener("click", () => {
      state.selectedId = snippet.id;
      elements.previewFrame.src = previewSrc(snippet);
      updateCardSelection();
    });

    const loadButton = node.querySelector("[data-role='load-btn']");
    loadButton.addEventListener("click", (event) => {
      event.stopPropagation();
      selectSnippet(snippet.id);
      elements.previewSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
  if (state.filter === "all") { elements.filterMeta.textContent = "Showing all " + visible.length + " " + pluralize("snippet", visible.length); return; }
  elements.filterMeta.textContent = "Showing " + visible.length + " " + filterLabels[state.filter].toLowerCase() + " " + pluralize("snippet", visible.length);
}

function renderUsage(steps) {
  elements.usageList.innerHTML = "";
  steps.forEach((step) => { const li = document.createElement("li"); li.textContent = step; elements.usageList.appendChild(li); });
}

function selectSnippet(id, options = {}) {
  const snippet = getSnippetById(id);
  if (!snippet) { return; }
  state.selectedId = id;
  elements.heroTypeBadge.textContent = filterLabels[snippet.type];
  elements.heroTitle.textContent = snippet.title;
  elements.heroSummary.textContent = snippet.summary;
  elements.codeCaption.textContent = filterLabels[snippet.type] + " snippet \u2022 " + lineCount(snippet.code) + " lines ready to paste";
  elements.codeBlock.textContent = snippet.code.trim();
  elements.snippetDescription.textContent = snippet.description;
  elements.bestFor.textContent = snippet.bestFor;
  renderUsage(snippet.usage);
  elements.previewFrame.src = previewSrc(snippet);
  updateCardSelection();
  if (options.syncRotation !== false) {
    const pool = getVisibleSnippets();
    const poolIndex = pool.findIndex((item) => item.id === id);
    if (poolIndex >= 0) { state.rotationIndex = poolIndex; }
    renderRotation();
  }
}

function setFilter(key) {
  state.filter = key;
  const visible = getVisibleSnippets();
  if (!visible.some((s) => s.id === state.selectedId) && visible[0]) { state.selectedId = visible[0].id; }
  renderFilters();
  renderCards();
  updateFilterMeta();
  selectSnippet(state.selectedId, { syncRotation: false });
  state.rotationIndex = 0;
  renderRotation();
}

function renderRotation() {
  const pool = getVisibleSnippets();
  if (!pool.length) { return; }
  if (state.rotationIndex >= pool.length) { state.rotationIndex = 0; }
  const snippet = pool[state.rotationIndex];
  elements.rotationTitle.textContent = snippet.title;
  elements.rotationUse.textContent = snippet.summary;
  elements.rotationDots.innerHTML = "";
  pool.forEach((item, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "rotation-dot" + (index === state.rotationIndex ? " is-active" : "");
    dot.setAttribute("aria-label", "Show " + item.title);
    dot.addEventListener("click", (event) => { event.stopPropagation(); state.rotationIndex = index; renderRotation(); });
    elements.rotationDots.appendChild(dot);
  });
}

function startRotation() {
  stopRotation();
  state.rotationTimer = window.setInterval(() => {
    const pool = getVisibleSnippets();
    if (!pool.length) { return; }
    state.rotationIndex = (state.rotationIndex + 1) % pool.length;
    renderRotation();
  }, 3600);
}

function stopRotation() { if (state.rotationTimer) { window.clearInterval(state.rotationTimer); state.rotationTimer = null; } }

function toggleRotationPanel() {
  const collapsed = elements.mapFloatPanel.classList.toggle("collapsed");
  elements.mapFloatToggle.textContent = collapsed ? "\u25BC" : "\u25B2";
}

function pickRandomSnippet() {
  const pool = getVisibleSnippets();
  if (!pool.length) { return; }
  selectSnippet(pool[Math.floor(Math.random() * pool.length)].id);
}

function bindEvents() {
  elements.randomSnippetBtn.addEventListener("click", pickRandomSnippet);
  elements.copyCodeBtn.addEventListener("click", async () => {
    const snippet = getSnippetById(state.selectedId);
    if (!snippet) { return; }
    await copySnippet(snippet, elements.copyCodeBtn);
  });
  elements.rotationSelectBtn.addEventListener("click", () => {
    const pool = getVisibleSnippets();
    const snippet = pool[state.rotationIndex];
    if (!snippet) { return; }
    selectSnippet(snippet.id);
    if (elements.previewSection) { elements.previewSection.scrollIntoView({ behavior: "smooth", block: "start" }); }
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

<template>
  <section class="program">
    <div class="grid-bg"></div>
    <div class="glow glow-a"></div>
    <div class="glow glow-b"></div>

    <div class="wrap">
      <!-- HERO -->
      <header class="hero">
        <div class="hero-text">
          <span class="pill"><i></i> nexus Udaan career program</span>
          <h2>
            Learn today.
            <em>Lead tomorrow.</em>
          </h2>
          <p class="lead">
            A 3-month training and internship program. Learn industry skills,
            work on live projects and leave with real professional experience.
          </p>

          <div class="chips">
            <span>3 months</span>
            <span>Online &amp; offline</span>
            <span>Live projects</span>
          </div>

          <a href="#contact" class="cta">
            Explore program
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
          </a>
        </div>

        <div class="orbit" aria-hidden="true">
          <div class="ring ring-1"></div>
          <div class="ring ring-2"></div>
          <div class="core">
            <b>90</b>
            <small>days to grow</small>
          </div>
          <span class="tag tag-1">Learn</span>
          <span class="tag tag-2">Build</span>
          <span class="tag tag-3">Experience</span>
        </div>
      </header>

      <!-- JOURNEY -->
      <div class="journey">
        <div class="head">
          <h3>Your 90-day journey</h3>
          <p>Three months. Three stages. One step closer to your career.</p>
        </div>

        <div class="path"><span></span><span></span><span></span></div>

        <div class="cards">
          <article v-for="(step, index) in journey" :key="index" class="card">
            <span class="ghost">0{{ index + 1 }}</span>
            <span class="days">{{ step.days }}</span>
            <h4>{{ step.title }}</h4>
            <p>{{ step.description }}</p>
            <div class="bar"><i></i></div>
          </article>
        </div>
      </div>

      <!-- BENEFITS -->
      <div class="benefits">
        <div class="head">
          <h3>What you will gain</h3>
          <p>Everything you need to move forward with confidence.</p>
        </div>

        <div class="bento">
          <div v-for="(benefit, index) in benefits" :key="index" class="gain">
            <span class="tick">
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 10.5l3.5 3.5 7.5-8" /></svg>
            </span>
            {{ benefit }}
          </div>
        </div>

        <div class="final">
          <div>
            <h4>Ready to start your 90 days?</h4>
            <p>Seats are limited. Talk to our team and pick your batch.</p>
          </div>
          <a href="#contact" class="cta cta-light">Apply now</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InternshipProgram",

  data() {
    return {
      journey: [
        {
          days: "Days 1–30",
          title: "Learn",
          description:
            "Build your foundation with structured professional training."
        },
        {
          days: "Days 31–60",
          title: "Build",
          description:
            "Develop practical skills through assignments and projects."
        },
        {
          days: "Days 61–90",
          title: "Experience",
          description:
            "Work on assigned internship projects with mentor guidance."
        }
      ],

      benefits: [
        "Practical project experience",
        "Industry mentorship",
        "Portfolio development",
        "Technical skill development",
        "Career guidance",
        "Training and internship certificates"
      ]
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap");

.program {
  --bg: #051321;
  --panel: #092958;
  --ink: #eef5ff;
  --muted: #9bb2d3;
  --line: rgba(255, 255, 255, 0.12);
  --cyan: #4fc3ff;
  --teal: #2ee6c5;
  --amber: #ffc857;

  position: relative;
  padding: 50px 6%;
  background: var(--bg);
  color: var(--ink);
  font-family: "Bricolage Grotesque", system-ui, -apple-system, "Segoe UI", sans-serif;
  overflow: hidden;
  isolation: isolate;
}

.grid-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image:
    linear-gradient(rgba(79, 195, 255, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79, 195, 255, 0.07) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 80% 60% at 70% 20%, #000, transparent 75%);
}

.glow {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  filter: blur(90px);
}

.glow-a {
  width: 560px; height: 560px;
  right: -120px; top: -80px;
  background: rgba(31, 111, 255, 0.45);
}

.glow-b {
  width: 480px; height: 480px;
  left: -160px; bottom: 10%;
  background: rgba(9, 41, 88, 0.95);
}

.wrap { max-width: 1200px; margin: 0 auto; }

/* HERO */

.hero {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 40px;
  align-items: center;
  min-height: 560px;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 9px 16px;
  font-size: 13px;
  font-weight: 600;
  color: var(--cyan);
  background: rgba(79, 195, 255, 0.1);
  border: 1px solid rgba(79, 195, 255, 0.3);
  border-radius: 999px;
}

.pill i {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--teal);
  box-shadow: 0 0 0 0 rgba(46, 230, 197, 0.7);
  animation: ping 2s infinite;
}

.hero h2 {
  margin: 26px 0 0;
  font-size: clamp(35px, 7vw, 73px);
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: -0.04em;
}

.hero h2 em {
  display: block;
  font-style: normal;
  background: linear-gradient(90deg, var(--cyan), var(--teal), var(--cyan));
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shine 6s linear infinite;
}

.lead {
  max-width: 50ch;
  margin: 26px 0 0;
  font-size: 18px;
  line-height: 1.65;
  color: var(--muted);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px 0 36px;
}

.chips span {
  padding: 9px 16px;
  font-size: 14px;
  font-weight: 600;
  background: rgba(9, 41, 88, 0.7);
  border: 1px solid var(--line);
  border-radius: 10px;
}

.cta {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 17px 20px 17px 30px;
  font-weight: 800;
  font-size: 16px;
  color: var(--bg);
  text-decoration: none;
  background: linear-gradient(90deg, var(--cyan), var(--teal));
  border-radius: 999px;
  box-shadow: 0 14px 40px rgba(46, 230, 197, 0.3);
  transition: transform 0.25s, box-shadow 0.25s;
}

.cta svg {
  width: 34px; height: 34px;
  padding: 8px;
  background: var(--bg);
  border-radius: 50%;
  fill: none;
  stroke: var(--teal);
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.25s;
}

.cta:hover { transform: translateY(-3px); box-shadow: 0 20px 50px rgba(46, 230, 197, 0.45); }
.cta:hover svg { transform: rotate(45deg); }
.cta:focus-visible { outline: 3px solid var(--amber); outline-offset: 4px; }

/* ORBIT */

.orbit {
  position: relative;
  width: min(100%, 480px);
  aspect-ratio: 1;
  margin: 0 auto;
  display: grid;
  place-items: center;
}

.ring {
  position: absolute;
  border-radius: 50%;
}

.ring-1 {
  inset: 0;
  border: 2px dashed rgba(79, 195, 255, 0.45);
  animation: spin 40s linear infinite;
}

.ring-2 {
  inset: 14%;
  border: 1px solid rgba(46, 230, 197, 0.4);
  box-shadow: inset 0 0 60px rgba(31, 111, 255, 0.3);
  animation: spin 28s linear infinite reverse;
}

.ring-2::after {
  content: "";
  position: absolute;
  top: -6px; left: 50%;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--teal);
  box-shadow: 0 0 20px 4px var(--teal);
}

.core {
  position: relative;
  width: 52%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 25%, #1550a8, var(--panel) 70%);
  border: 1px solid rgba(79, 195, 255, 0.5);
  box-shadow: 0 0 80px rgba(31, 111, 255, 0.6), inset 0 0 40px rgba(79, 195, 255, 0.2);
}

.core b {
  font-size: clamp(70px, 11vw, 120px);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.05em;
  background: linear-gradient(180deg, #fff, var(--cyan));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.core small { margin-top: 8px; font-size: 14px; color: var(--muted); }

.tag {
  position: absolute;
  padding: 11px 18px;
  font-size: 14px;
  font-weight: 800;
  color: var(--ink);
  background: rgba(9, 41, 88, 0.85);
  border: 1px solid rgba(79, 195, 255, 0.5);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  animation: float 4s ease-in-out infinite;
  
}

.tag-1 { top: 6%; left: -2%; }
.tag-2 { top: 44%; right: -6%; animation-delay: 0.8s; }
.tag-3 { bottom: 4%; left: 6%; animation-delay: 1.6s; }

/* SHARED HEADINGS */

.head { text-align: center; margin-bottom: 50px; }

.head h3 {
  margin: 0 0 12px;
  font-size: clamp(32px, 4.5vw, 54px);
  font-weight: 800;
  letter-spacing: -0.035em;
}

.head p { margin: 0; color: var(--muted); font-size: 17px; }

/* JOURNEY */

.journey { margin-top: 50px; }

.path {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: -9px;
  padding: 0 calc(100% / 6 - 9px);
}

.path::before {
  content: "";
  position: absolute;
  left: calc(100% / 6);
  right: calc(100% / 6);
  top: 8px;
  height: 2px;
  background: linear-gradient(90deg, var(--cyan), var(--teal));
  box-shadow: 0 0 14px var(--cyan);
}

.path span {
  position: relative;
  justify-self: center;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: var(--bg);
  border: 3px solid var(--teal);
  box-shadow: 0 0 18px var(--teal);
}

.path span:first-child { justify-self: start; }
.path span:last-child { justify-self: end; }

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding-top: 34px;
}

.card {
  position: relative;
  padding: 34px 30px 30px;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(160deg, rgba(9, 41, 88, 0.95), rgba(5, 19, 33, 0.8));
  border: 1px solid var(--line);
  transition: transform 0.35s, border-color 0.35s, box-shadow 0.35s;
}

.card::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(140deg, var(--cyan), transparent 40%, var(--teal));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.55;
  pointer-events: none;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px rgba(31, 111, 255, 0.3);
}

.ghost {
  position: absolute;
  right: 18px; top: -6px;
  font-size: 120px;
  font-weight: 800;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(79, 195, 255, 0.3);
}

.days {
  position: relative;
  display: inline-block;
  padding: 6px 13px;
  font-size: 13px;
  font-weight: 600;
  color: var(--teal);
  background: rgba(46, 230, 197, 0.12);
  border-radius: 999px;
}

.card h4 {
  position: relative;
  margin: 76px 0 10px;
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: white;
}

.card p {
  position: relative;
  margin: 0;
  max-width: 32ch;
  line-height: 1.6;
  color: var(--muted);
}

.bar {
  height: 4px;
  margin-top: 28px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
}

.bar i {
  display: block;
  height: 100%;
  width: 33%;
  border-radius: 4px;
  background: linear-gradient(90deg, var(--cyan), var(--teal));
  transition: width 0.5s;
}

.card:nth-child(2) .bar i { width: 66%; }
.card:nth-child(3) .bar i { width: 100%; }
.card:hover .bar i { box-shadow: 0 0 14px var(--teal); }

/* BENEFITS */

.benefits { margin-top: 90px; }

.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.gain {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 28px 26px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  background: rgba(9, 41, 88, 0.55);
  border: 1px solid var(--line);
  border-radius: 20px;
  transition: background 0.3s, border-color 0.3s, transform 0.3s;
}

.gain:hover {
  background: var(--panel);
  border-color: rgba(46, 230, 197, 0.6);
  transform: translateY(-4px);
}

.tick {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 42px; height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--cyan), var(--teal));
  box-shadow: 0 8px 22px rgba(46, 230, 197, 0.3);
}

.tick svg {
  width: 20px; height: 20px;
  fill: none;
  stroke: var(--bg);
  stroke-width: 2.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.final {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;
  padding: 44px 48px;
  border-radius: 28px;
  background:
    radial-gradient(500px 240px at 100% 0%, rgba(46, 230, 197, 0.3), transparent 70%),
    linear-gradient(120deg, #0c3d85, var(--panel));
  border: 1px solid rgba(79, 195, 255, 0.4);
  display: none;
}

.final h4 { margin: 0 0 8px; font-size: clamp(24px, 3vw, 34px); font-weight: 800; letter-spacing: -0.02em; }
.final p { margin: 0; color: #c3d6f2; }

.cta-light {
  flex-shrink: 0;
  padding: 17px 34px;
  background: #fff;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.3);
}

/* MOTION */

@keyframes spin { to { transform: rotate(360deg); } }
@keyframes float { 50% { transform: translateY(-12px); } }
@keyframes shine { to { background-position: 200% 0; } }
@keyframes ping { 70% { box-shadow: 0 0 0 10px rgba(46, 230, 197, 0); } 100% { box-shadow: 0 0 0 0 rgba(46, 230, 197, 0); } }

/* RESPONSIVE */

@media (max-width: 960px) {
  .program { padding: 80px 6%; }
  .hero { grid-template-columns: 1fr; min-height: 0; gap: 70px; }
  .orbit { width: min(100%, 400px); }
  .bento { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 760px) {
  .path { display: none; }
  .cards { grid-template-columns: 1fr; padding-top: 0; }
  .journey, .benefits { margin-top: 80px; }
  .card h4 { margin-top: 56px; }
  .bento { grid-template-columns: 1fr; }
  .final { flex-direction: column; align-items: flex-start; padding: 32px 26px; }
  .tag-2 { right: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ring, .tag, .hero h2 em, .pill i { animation: none; }
}
</style>
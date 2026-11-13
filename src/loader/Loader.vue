
<template>
  <transition name="loader-exit">
    <div v-if="visible" class="loader-screen">

      <!-- 100 Images Animated Gallery -->
      <div class="photo-grid">
        <div
          v-for="(photo, index) in photos"
          :key="photo.id"
          class="photo"
          :style="{ animationDelay: `${index * 20}ms` }"
        >
          <img
            :src="photo.src"
            alt="Nexus Udaan Institute"
            referrerpolicy="no-referrer"
            @error="onError($event, index)"
          />
        </div>
      </div>

      <!-- Dark Overlay -->
      <div class="overlay"></div>

      <!-- Centre Branding -->
      <div class="brand">
        <div class="brand-content">
          <h2>NEXUS <span>UDAAN</span></h2>
           
        </div>
      </div>

    </div>
  </transition>
</template>

<script>
export default {
  name: "Loader",

  data() {
    return {
      visible: true,
      loaderTimer: null,

      photos: [
        // AI & Artificial Intelligence
        { id: 1, src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800" },
        { id: 2, src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800" },
        { id: 3, src: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800" },
        { id: 4, src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800" },
        { id: 5, src: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800" },
        { id: 6, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800" },
        { id: 7, src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800" },
        { id: 8, src: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800" },
        { id: 9, src: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800" },
        { id: 10, src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800" },

        // Full Stack & Coding
        { id: 11, src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800" },
        { id: 12, src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800" },
        { id: 13, src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800" },
        { id: 14, src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800" },
        { id: 15, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800" },
        { id: 16, src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800" },
        { id: 17, src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800" },
        { id: 18, src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800" },
        { id: 19, src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800" },
        { id: 20, src: "https://images.unsplash.com/photo-1505238680356-667803448bb6?w=800" },

        // UI/UX & Digital Design
        { id: 21, src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800" },
        { id: 22, src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800" },
        { id: 23, src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800" },
        { id: 24, src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800" },
        { id: 25, src: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800" },
        { id: 26, src: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800" },
        { id: 27, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800" },
        { id: 28, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
        { id: 29, src: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800" },
        { id: 30, src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800" },

        // Computer Lab & Institute
        { id: 31, src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800" },
        { id: 32, src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800" },
        { id: 33, src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800" },
        { id: 34, src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" },
        { id: 35, src: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800" },
        { id: 36, src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800" },
        { id: 37, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" },
        { id: 38, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" },
        { id: 39, src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800" },
        { id: 40, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800" },

        // Students & Learning
        { id: 41, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800" },
        { id: 42, src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800" },
        { id: 43, src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800" },
        { id: 44, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800" },
        { id: 45, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800" },
        { id: 46, src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800" },
        { id: 47, src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800" },
        { id: 48, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" },
        { id: 49, src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800" },
        { id: 50, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800" },

        // Technology & Computers
        { id: 51, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800" },
        { id: 52, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800" },
        { id: 53, src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800" },
        { id: 54, src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800" },
        { id: 55, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800" },
        { id: 56, src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800" },
        { id: 57, src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800" },
        { id: 58, src: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800" },
        { id: 59, src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800" },
        { id: 60, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" },

        // Robotics & Innovation
        { id: 61, src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800" },
        { id: 62, src: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=800" },
        { id: 63, src: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800" },
        { id: 64, src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800" },
        { id: 65, src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800" },
        { id: 66, src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800" },
        { id: 67, src: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?w=800" },
        { id: 68, src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800" },
        { id: 69, src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800" },
        { id: 70, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800" },

        // Digital Skills & Data
        { id: 71, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
        { id: 72, src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
        { id: 73, src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800" },
        { id: 74, src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800" },
        { id: 75, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" },
        { id: 76, src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800" },
        { id: 77, src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800" },
        { id: 78, src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800" },
        { id: 79, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800" },
        { id: 80, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800" },

        // Creative Workspace & Development
        { id: 81, src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800" },
        { id: 82, src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800" },
        { id: 83, src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800" },
        { id: 84, src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800" },
        { id: 85, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" },
        { id: 86, src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800" },
        { id: 87, src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800" },
        { id: 88, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" },
        { id: 89, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800" },
        { id: 90, src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800" },

        // More AI, Coding & Digital Innovation
        { id: 91, src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800" },
        { id: 92, src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800" },
        { id: 93, src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800" },
        { id: 94, src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800" },
        { id: 95, src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800" },
        { id: 96, src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800" },
        { id: 97, src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800" },
        { id: 98, src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800" },
        { id: 99, src: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800" },
        { id: 100, src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800" }
      ]
    };
  },

  mounted() {
    // 4 seconds loader display
    this.loaderTimer = setTimeout(() => {
      this.visible = false;
    }, 4000);
  },

  beforeUnmount() {
    clearTimeout(this.loaderTimer);
  },

  methods: {
    onError(e, index) {
      if (e.target.dataset.fallback) return;

      e.target.dataset.fallback = "1";

      const labels = [
        "COMPUTER",
        "AI",
        "FULL STACK",
        "UI / UX",
        "DATA",
        "CODE"
      ];

      const colors = [
        "#0b5fa5",
        "#1b7f8c",
        "#5b3fa0",
        "#0f4c81",
        "#14778a",
        "#2a5db0"
      ];

      const label = labels[index % labels.length];
      const color = colors[index % colors.length];

      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="400">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="${color}"/>
              <stop offset="1" stop-color="#061326"/>
            </linearGradient>
          </defs>
          <rect width="500" height="400" fill="url(#g)"/>
          <text x="50%" y="50%"
            fill="#35b8f5"
            font-size="42"
            font-family="Arial"
            font-weight="bold"
            text-anchor="middle"
            dominant-baseline="middle">${label}</text>
        </svg>
      `;

      e.target.src =
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(svg);
    }
  }
};
</script>

<style scoped>

/* MAIN LOADER */
.loader-screen {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  z-index: 99999;
  overflow: hidden;
  background: #061326;
  transform-origin: center;
  will-change: opacity, transform, filter;
}

/* GRID */
.photo-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 12vh;
  grid-auto-flow: dense;
  gap: 4px;
}

/* INDIVIDUAL PHOTO */
.photo {
  position: relative;
  min-height: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #0b5fa5, #061326);
  animation: photoReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  animation: imageZoom 8s ease-in-out infinite alternate;
  will-change: transform;
}

/* DIFFERENT TILE SIZES */
.photo:nth-child(7n) {
  grid-column: span 2;
  grid-row: span 2;
}

.photo:nth-child(11n) {
  grid-column: span 2;
}

.photo:nth-child(13n) {
  grid-row: span 2;
}

/* IMAGE REVEAL */
@keyframes photoReveal {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* CONTINUOUS IMAGE MOVEMENT */
@keyframes imageZoom {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.12);
  }
}

/* DARK OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(2, 14, 32, 0.55);
}

/* CENTRE BRANDING */
.brand {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.brand h2 {
  margin: 0;
  padding: 10px 20px;
  color: white;
  font-size: clamp(15px, 6vw, 65px);
  font-weight: 600;
  letter-spacing: 4px;
  text-align: center;
  background: rgba(3, 17, 40, 0.7);
  border-radius: 8px;
  backdrop-filter: blur(8px);
  animation: brandReveal 1.5s ease both;
}

.brand span {
  color: #35b8f5;
}

@keyframes brandReveal {
  from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@media (max-width: 600px) {
  .brand h2 {
    font-size: 32px;
    letter-spacing: 1px;
    padding: 18px;
  }
}

 

 

/* BRAND REVEAL */
@keyframes brandReveal {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
    filter: blur(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes lineReveal {
  from {
    width: 0;
    opacity: 0;
  }

  to {
    width: 65%;
    opacity: 1;
  }
}

/* CINEMATIC LOADER EXIT */
.loader-exit-leave-active {
  transition:
    opacity 1.8s cubic-bezier(0.22, 1, 0.36, 1),
    transform 1.8s cubic-bezier(0.22, 1, 0.36, 1),
    filter 1.8s ease;

  pointer-events: none;
}

.loader-exit-leave-to {
  opacity: 0;
  transform: scale(1.12);
  filter: blur(12px);
}

/* MOBILE RESPONSIVE */
@media (max-width: 600px) {
  .photo-grid {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 12vh;
  }

  .brand-content {
    padding: 20px 18px;
  }

  .brand h2 {
    font-size: 32px;
    letter-spacing: 1px;
  }

  .brand p {
    font-size: 9px;
    letter-spacing: 3px;
  }
}

/* REDUCED MOTION ACCESSIBILITY */
@media (prefers-reduced-motion: reduce) {
  .photo,
  .photo img,
  .brand-content,
  .brand-line {
    animation: none !important;
  }

  .loader-exit-leave-active {
    transition-duration: 0.5s;
  }
}

</style>

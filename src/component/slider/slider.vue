<template>
  <section class="hero-slider">
    <!-- Slides -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="slide"
      :class="{ active: currentSlide === index }"
    >
      <!-- Background Image -->
      <img
        :src="slide.image"
        :alt="slide.title"
        class="slide-image"
      />
      <!-- Dark Overlay -->
      <div class="overlay"></div>
      <!-- Content -->
      <div class="slide-content">
        <span class="badge-tag mb-3">Nexus Udaan</span>
        <h1>{{ slide.title }}</h1>
        <div class="img-section">
            <img src="../../assest/IMG/slider1.svg">
            <img src="../../assest/IMG/slider 2.svg">
        </div>
        <h4><span style="color: #0274C7 ;">Professional Training for the Next Generation of Tech Talent</span><br>
           <p v-html="slide.description"></p>
        </h4>
        <div class="buttons">
          <router-link to="/Join-us" class="join-btn">
            Join Us
          </router-link>
          <router-link to="/Different" class="program-btn">
            Explore Programs
          </router-link>
        </div>
      </div>
    </div>

    <!-- Previous Button -->
    <button
      class="slider-arrow prev"
      @click="prevSlide"
      aria-label="Previous Slide"
    >
      &#10094;
    </button>

    <!-- Next Button -->
    <button
      class="slider-arrow next"
      @click="nextSlide"
      aria-label="Next Slide"
    >
      &#10095;
    </button>
  </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const currentSlide = ref(0);
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",

    title:
      "From Learning to Earning Your Journey Starts Here",

    description:
       "Programs in Full Stack Development, Quality Assurance, Business Analysis & Product Management, UI/UX Design, DevOps, Data Analytics, Artificial Intelligence, and more – all designed to launch your career in the real-world IT industry."
  },

  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80",

    title:
      "Celebrating the Completion of Our First Batch",

    description:
      "Celebrating Excellence Together On 26th January, we proudly celebrated the successful completion of our first batch at the training center. This remarkable achievement marks a significant moment for both our learners and mentors, showcasing the hard work, dedication, and growth that have shaped this journey."
  },

  {
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80",

    title:
      "First Placement",

    description:
      "Level Up Begins Here!!!<br> We proudly mark our first placement, secured by a Ashwani Kashyap during the training phase itself. This accomplishment reflects the student’s dedication, skill development, and ability to rise to industry expectations early in his journey."
  },
];

const nextSlide = () => {
  currentSlide.value =
    (currentSlide.value + 1) % slides.length;
};
const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.length) % slides.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};


// Auto Slider
let sliderInterval = null;

onMounted(() => {
  sliderInterval = setInterval(() => {
    nextSlide();
  }, 5000);
});


// Clear interval
onBeforeUnmount(() => {
  clearInterval(sliderInterval);
});
</script>


<style scoped>

/* =========================================
   MAIN SLIDER
========================================= */

.hero-slider {
  position: relative;
  width: 100%;
  height: 620px;
  overflow: hidden;
  background: #06121f;
}
/* =========================================
   SLIDE
========================================= */

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.8s ease,
    visibility 0.8s ease;
}

.slide.active {
  opacity: 1;
  visibility: visible;
}
/* =========================================
   IMAGE
========================================= */

.slide-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  transition: transform 6s ease;
}

.slide.active .slide-image {
  transform: scale(1);
}
.img-section img{
    
    width: 90px;
    margin-left: 20px;
}

/* =========================================
   OVERLAY
========================================= */

.overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(3, 15, 27, 0.92) 0%,
      rgba(3, 20, 36, 0.75) 40%,
      rgba(3, 20, 36, 0.25) 100%
    );
}


/* =========================================
   CONTENT
========================================= */

.slide-content {
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
  color: white;
}


/* Small Heading */

.small-title {
  display: inline-block;
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #55b8ff;
}


/* Main Heading */

.slide-content h1 {
  max-width: 700px;
  margin: 0 0 20px;
  font-size: 38px;
  line-height: 1.1;
  font-weight: 800;
}


/* Description */

.slide-content h4 {
  max-width: 650px;
  margin: 20px 0 32px;
  font-size: 19px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.88);
}
.slide-content h4 p{
    max-width: 500px;
    margin: 10px 0 32px;
    font-size: 15px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.88);
}

.badge-tag {
    display: inline-block;
    padding: 8px 35px;
    background: linear-gradient(195deg, #000000 20%, #071a2e 50%, #0b3d91 90%);
    color: white;
    border: 1px solid #007bff;
    border-radius: 35px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.3px;
}


/* =========================================
   BUTTONS
========================================= */

.buttons {
  display: flex;
  align-items: center;
  gap: 15px;
}
/* Join Button */

.join-btn {
  display: inline-block;
  padding: 14px 30px;
  border-radius: 15px;
  background: #1261a0;
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
    border: 1px solid #1e88e5;
}

.join-btn:hover {
  background: #0d4778;
  transform: translateY(-2px);

}
/* Program Button */

.program-btn {
  display: inline-block;
  padding: 13px 28px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  backdrop-filter: blur(5px);
  transition: 0.3s ease;
}

.program-btn:hover {
    background: transparent;
    color: white;
    border: 1px solid #1e88e5;
    box-shadow: 0 10px 55px rgba(30, 136, 229, 0.25);
}
/* =========================================
   ARROWS
========================================= */

.slider-arrow {
  position: absolute;
  z-index: 5;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s ease;
}
.slider-arrow:hover {
  background: white;
  color: #1261a0;
}
.prev {
  left: 25px;
}
.next {
  right: 25px;
}
/* =========================================
   MOBILE
========================================= */

@media (max-width: 768px) {
  .hero-slider {
    height: 800px;
  }
  .slide-content {
    width: 82%;
    padding-top: 90px;
  }
  .slide-content h1 {
    font-size: 38px;
  }

  .slide-content p {
    font-size: 16px;
  }
  .buttons {
    flex-direction: column;
    align-items: flex-start;
  }

  .join-btn,
  .program-btn {
    padding: 12px 22px;
  }

  .slider-arrow {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
  .prev {
    left: 2px;
  }
  .next {
    right: 2px;
  }
}


/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 480px) {
  .hero-slider {
    height: 720px;
  }
  .slide-content {
    padding-top: 55px;
  }
  .slide-content h1 {
    font-size: 31px;
  }
  .slide-content p {
    font-size: 15px;
    line-height: 1.5;
  }
  .small-title {
    font-size: 12px;
  }
}

</style>
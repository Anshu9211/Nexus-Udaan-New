<template>
  <section class="gallery-section" id="gallery">
    <div class="gallery-container">

      <!-- Heading -->
      <div class="gallery-heading">
        <img src="../assest//IMG/logo.svg">
        <!-- <span class="small-title">nexusUdaan</span> -->
        <h1>Our <span>Gallery</span></h1>
        <p>
          Explore moments, activities, workshops and events from
          the <span style="font-size: 35px; color: #3D93D2;">nexusUdaan</span> journey.
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="filter-buttons">
        <button
          v-for="category in categories"
          :key="category"
          :class="{ active: activeCategory === category }"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <!-- Masonry Gallery -->
      <div class="masonry-gallery">
        <div
          v-for="image in filteredImages"
          :key="image.id"
          class="gallery-item"
          @click="openLightbox(image)"
        >
          <img
            :src="image.src"
            :alt="image.title"
            loading="lazy"
          />

          <div class="image-overlay">
            <div>
              <span>{{ image.category }}</span>
              <h3>{{ image.title }}</h3>
            </div>

            <div class="view-icon">
              <i class="bi bi-arrows-fullscreen"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty -->
      <div
        v-if="filteredImages.length === 0"
        class="no-images"
      >
        No images found.
      </div>
    </div>
    <!-- Lightbox -->
    <div
      v-if="selectedImage"
      class="lightbox"
      @click.self="closeLightbox"
    >
      <button
        class="close-btn"
        @click="closeLightbox"
      >
        <i class="bi bi-x-lg"></i>
      </button>

      <button
        class="lightbox-arrow prev"
        @click.stop="previousImage"
      >
        <i class="bi bi-chevron-left"></i>
      </button>

      <div class="lightbox-content">
        <img
          :src="selectedImage.src"
          :alt="selectedImage.title"
        />
        <div class="lightbox-info">
          <span>{{ selectedImage.category }}</span>
          <h2>{{ selectedImage.title }}</h2>
        </div>
      </div>
      <button
        class="lightbox-arrow next"
        @click.stop="nextImage"
      >
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  </section>
</template>
<script>
export default {
  name: "Gallery",
  data() {
    return {
      activeCategory: "All",
      selectedImage: null,
      categories: [
        "All",
        "Campus",
        "Events",
        "Students",
        "Workshops",
        "Activities"
      ],
      images: [
        {
          id: 1,
          title: "Learning Together",
          category: "Students",
          src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 2,
          title: "Campus Life",
          category: "Campus",
          src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 3,
          title: "Team Workshop",
          category: "Workshops",
          src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 4,
          title: "Students Discussion",
          category: "Students",
          src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 5,
          title: "Creative Workshop",
          category: "Workshops",
          src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 6,
          title: "Group Activity",
          category: "Activities",
          src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 7,
          title: "Learning Session",
          category: "Events",
          src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 8,
          title: "Student Presentation",
          category: "Students",
          src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 9,
          title: "Team Collaboration",
          category: "Activities",
          src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 10,
          title: "Training Program",
          category: "Events",
          src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 11,
          title: "Technology Workshop",
          category: "Workshops",
          src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 12,
          title: "Campus Activities",
          category: "Campus",
          src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 13,
          title: "Career Session",
          category: "Events",
          src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 14,
          title: "Student Team",
          category: "Students",
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 15,
          title: "Interactive Session",
          category: "Activities",
          src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85"
        },

        {
          id: 16,
          title: "Professional Training",
          category: "Workshops",
          src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"
        }
      ]
    };
  },
  computed: {
    filteredImages() {
      if (this.activeCategory === "All") {
        return this.images;
      }
      return this.images.filter(
        image => image.category === this.activeCategory
      );
    }
  },
  methods: {
    openLightbox(image) {
      this.selectedImage = image;
      document.body.style.overflow = "hidden";
    },
    closeLightbox() {
      this.selectedImage = null;
      document.body.style.overflow = "";
    },
    nextImage() {
      let currentIndex = this.filteredImages.findIndex(
        image => image.id === this.selectedImage.id
      );
      let nextIndex =
        (currentIndex + 1) % this.filteredImages.length;
      this.selectedImage = this.filteredImages[nextIndex];
    },
    previousImage() {
      let currentIndex = this.filteredImages.findIndex(
        image => image.id === this.selectedImage.id
      );
      let previousIndex =
        (currentIndex - 1 + this.filteredImages.length) %
        this.filteredImages.length;
      this.selectedImage = this.filteredImages[previousIndex];
    }
  },
  beforeUnmount() {
    document.body.style.overflow = "";
  }
};
</script>
<style scoped>

* {
  box-sizing: border-box;
}

.gallery-section {
  width: 100%;
  min-height: 100vh;
  padding: 90px 30px;
   background: linear-gradient(210deg, #000000 0%, #071a2e 30%, #0b3d91 100%);
}

.gallery-container {
  width: 100%;
  max-width: 1400px;
  margin: auto;
}


/* =========================
   HEADING
========================= */

.gallery-heading {
  text-align: center;
  max-width: 750px;
  margin: 0 auto 45px;
}

.small-title {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #1377c9;
}

.gallery-heading h1 {
  margin: 0;
  font-size: 52px;
  font-weight: 800;
  color: #dee0ea;
}

.gallery-heading h1 span {
  color: #1261a0;
  font-size: 50px;
}

.gallery-heading p {
  margin-top: 15px;
  color: white;
  font-size: 17px;
  line-height: 1.7;
}


/* =========================
   FILTER
========================= */

.filter-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 45px;
}

.filter-buttons button {
  border: 1px solid #d8e5ef;
  background: #ffffff;
  color: #183b56;
  padding: 11px 22px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-buttons button:hover {
  background: #1261a0;
  color: #ffffff;
  border-color: #1261a0;
  transform: translateY(-2px);
}

.filter-buttons button.active {
  background: #1261a0;
  color: white;
  border-color: #1261a0;
  box-shadow: 0 8px 20px rgba(18, 97, 160, 0.2);
}


/* =========================
   MASONRY
========================= */

.masonry-gallery {
  column-count: 4;
  column-gap: 22px;
}

.gallery-item {
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 22px;
  overflow: hidden;
  border-radius: 18px;
  cursor: pointer;
  break-inside: avoid;
  background: #ddd;
}

.gallery-item img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.6s ease;
}

.gallery-item:hover img {
  transform: scale(1.08);
}


/* =========================
   OVERLAY
========================= */

.image-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 25px;
  background:
    linear-gradient(
      to top,
      rgba(3, 20, 35, 0.9),
      rgba(3, 20, 35, 0.05) 70%
    );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gallery-item:hover .image-overlay {
  opacity: 1;
}

.image-overlay span {
  color: #1261A0;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.image-overlay h3 {
  margin: 6px 0 0;
  color: white;
  font-size: 19px;
}

.view-icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  font-size: 16px;
}


/* =========================
   NO IMAGES
========================= */

.no-images {
  padding: 60px;
  text-align: center;
  color: #718096;
}


/* =========================
   LIGHTBOX
========================= */

.lightbox {
  position: fixed;
  z-index: 9999;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: rgba(2, 12, 22, 0.94);
  backdrop-filter: blur(8px);
}

.lightbox-content {
  max-width: 1000px;
  max-height: 90vh;
  text-align: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.lightbox-info {
  margin-top: 15px;
}

.lightbox-info span {
  color: #9dd5ff;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.lightbox-info h2 {
  margin: 7px 0 0;
  color: white;
  font-size: 25px;
}


/* CLOSE */

.close-btn {
  position: absolute;
  top: 25px;
  right: 30px;
  width: 45px;
  height: 45px;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}


/* ARROWS */

.lightbox-arrow {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: white;
  font-size: 22px;
  cursor: pointer;
  transition: 0.3s;
}

.lightbox-arrow:hover {
  background: rgba(255, 255, 255, 0.25);
}
.lightbox-arrow.prev {
  left: 30px;
}
.lightbox-arrow.next {
  right: 30px;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1100px) {
  .masonry-gallery {
    column-count: 3;
  }
}

@media (max-width: 768px) {
  .gallery-section {
    padding: 40px 18px;
  }

  .gallery-heading h1 {
    font-size: 38px;
  }
  .gallery-heading p{
    line-height: 1.2;
  }

  .masonry-gallery {
    column-count: 2;
    column-gap: 14px;
  }

  .gallery-item {
    margin-bottom: 14px;
    border-radius: 12px;
  }

  .image-overlay {
    padding: 15px;
  }

  .image-overlay h3 {
    font-size: 15px;
  }

  .view-icon {
    width: 35px;
    height: 35px;
  }

  .lightbox {
    padding: 20px;
  }

  .lightbox-arrow {
    width: 40px;
    height: 40px;
  }

  .lightbox-arrow.prev {
    left: 10px;
  }

  .lightbox-arrow.next {
    right: 10px;
  }
}

@media (max-width: 480px) {
  .masonry-gallery {
    column-count: 1;
  }

  .gallery-heading h1 {
    font-size: 32px;
  }

  .filter-buttons {
    gap: 8px;
  }

  .filter-buttons button {
    padding: 9px 15px;
    font-size: 13px;
  }
}

</style>
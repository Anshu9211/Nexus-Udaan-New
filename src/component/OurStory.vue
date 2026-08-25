<template>
     <section class="about-us mt-4 mb-5 fade-section " id="about-us">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="text-center " style="color: white;">About <span style="color: #3D93D2;">Us</span></h1>
                        <p class="text-white slide-left">nexusUdaan is a premier IT training initiative located in Subathu, Solan, Himachal Pradesh, dedicated to equipping students and professionals with the skills required to thrive in today’s fast-paced digital world. We offer career-focused, job-ready programs in Software Testing, UI/UX Design, Data Analytics, Cloud Computing, Full Stack Development, Business Analysis, Artificial Intelligence, and more.What truly distinguishes us is our strong foundation built on over a decade of real industry experience. nexusUdaan is proudly powered by Farenexus – a trusted travel technology company with operations in India and Canada, and over 12 years of expertise in delivering enterprise IT solutions to global markets. This direct industry backing gives our learners exclusive access to real-world tools, live project exposure, and mentorship from experienced IT professionals.At nexusUdaan, we believe in learning by doing. Our programs are practical, mentorship-driven, and aligned with real business needs, ensuring every learner graduates confident, capable, and ready to succeed in the tech industry.</p>
                    </div>
                    <div class="nu-fields mt-4">
                        <div class="nu-field">
                            <span class="nu-field-label">Gate</span>
                            <span class="nu-field-value">nexusUdaan</span>
                        </div>
                        <div class="nu-field">
                            <span class="nu-field-label">Class</span>
                            <span class="nu-field-value">Mentorship</span>
                        </div>
                        <div class="nu-field">
                            <span class="nu-field-label">Experience</span>
                            <span class="nu-field-value">10+ Years</span>
                        </div>
                        <div class="nu-field">
                            <span class="nu-field-label">Tracks</span>
                            <span class="nu-field-value">8+ Programs</span>
                        </div>
                    </div>
                    <div class="container mt-3 bottom-section">
                        <div class="row align-items-center">
                            <div class="col-lg-6 mb-5">
                                <div class="demo bottom-section slide-left">
                                    <div class="map-data" id="mapCard">
                                        <a href="https://maps.app.goo.gl/oHSaKRu6japmxdXr6" target="_blank" rel="noopener" @click="sendMapClick">
                                            <!-- swap this src back to: assets/IMG/nexus tower.webp -->
                                            <img src="../assest/IMG/nexus tower.webp" alt="nexusTower location">
                                        </a>
                                    </div>
                                </div> 
                            </div>
                            <div class="col-lg-6">
                                <div class="about-img slide-right">
                                    <img src="https://nexusudaan.in/assets/img/carrerGrowth.webp">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
</template>

<script>
export default {
  name: "OurStory",
  mounted() {
    let elements = document.querySelectorAll(
      ".fade-section, .slide-left, .slide-right"
    );
    let sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
    elements.forEach((el) => sectionObserver.observe(el));
    let card = document.getElementById("mapCard");
    if (!card) return;
    if ("IntersectionObserver" in window) {
      let io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      io.observe(card);
    } else {
      card.classList.add("in-view");
      this.$emit('sendMap', this.sendMapClick);
    }
  },
};
</script>

<style>

/* ================================
   SECTION 7: ABOUT US
================================ */
.about-us h1{
    /* background-color: red; */
    font-weight: 400;
}
.bottom-section .about-img img{
    /* background-color: red; */
    width: 90%;
    height: 380px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    margin: auto;
    /* object-fit: cover; */

}
.bottom-section .about-img {
    width: 100%;
    /* background-color: red; */
}
.bottom-section .map-data{
    width: 100%;
    /* background-color: red; */
} 
.demo{ 
    max-width: 560px;
    margin:0 auto;

}
.bottom-section .map-data img{
    border-radius: 15px;
    width: 100%;
    height: 480px;
    object-fit: cover;
    /* background-color: red; */
}
.bottom-section .map-data a {
    position: relative;
    overflow: visible;
    display: block;
    
}
.bottom-section .map-data a::before{

    content: "";
    position: absolute;
    top: 45%;
    left: 50%;
    width: 15px;
    height: 15px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #D9572C;
    transition: 0.5s ease;
}
.bottom-section .map-data a:hover::before {
    content: "";
    position: absolute;
    top: 45%;
    left: 50%;
    width: 15px;
    height: 15px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #D9572C;
    box-shadow: 0 0 2px 15px rgba(197, 123, 32, 0.67);
    z-index: 5;
}
.bottom-section .map-data{
    width: 100%;
    position: relative;       
    overflow: hidden;          
    opacity: 2;
    transform: translateY(24px);
    animation: mapFadeUp 0.8s ease forwards;
    animation-delay: 0.1s;
    border: 2px solid transparent;
    border-radius: 15px;
    transition: border 0.3s ease, box-shadow 0.3s ease;

}
.bottom-section .map-data:hover {
    border: 2px solid #1e88e5;
    box-shadow: 0 10px 55px rgba(30, 136, 229, 0.25);
}
.bottom-section .map-data img{
    border-radius: 15px;
    width: 100%;
    height: 480px;
    object-fit: cover;
    /* display: block; */
    transition: transform 0.6s ease, filter 0.6s ease;

 }

.nu-fields {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    border-top: 2px solid white;
    border-bottom: 1px solid white;
    margin-bottom: 56px;
}

.nu-field {
    min-width: 0;
    padding: 18px 24px;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
}
.nu-field:last-child {
    border-right: none;
}
.nu-field-label {
    display: block;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #3D93D2;
    margin-bottom: 6px;
    font-weight: 700;
}

.nu-field-value {
    display: block;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 19px;
    color: white;
    line-height: 1.3;
}

@media (min-width: 768px) and (max-width: 992px) {
  
    .nu-fields {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
    }
    .nu-field {
        padding: 18px 20px;
        text-align: center;
        border-right: 1px solid white;
        border-bottom: 1px solid white;
    }
    .nu-field:nth-child(2n) {
        border-right: none;
    }
    .nu-field-label,
    .nu-field-value {
        text-align: center;
    }
}

@media (max-width: 767px) {
    .nu-fields {
        display: grid;
        grid-template-columns: 1fr !important;
        width: 100%;
        margin-bottom: 35px;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
    }
    .nu-field {
        width: 100%;
        min-width: 0;
        padding: 15px 16px;
        text-align: center;
        border-right: none !important;
        border-bottom: 1px solid white !important;
    }
    .nu-field:last-child {
        border-right: none !important;
        border-bottom: 1px solid white !important;
    }
    .nu-field-label,
    .nu-field-value {
        text-align: center;
    }
    .nu-field-label {
        font-size: 10px;
        margin-bottom: 5px;
        letter-spacing: 0.07em;
    }
    .nu-field-value {
        font-size: 14px;
        line-height: 1.4;
        white-space: normal;
        overflow-wrap: break-word;
    }
}

@media (max-width: 380px) {
    .nu-fields {
        margin-bottom: 30px;
    }
    .nu-field {
        padding: 13px 12px;
    }
    .nu-field-label {
        font-size: 9px;
        margin-bottom: 4px;
    }
    .nu-field-value {
        font-size: 13px;
    }
}
.fade-section.show,
.slide-left.show,
.slide-right.show,
.map-data.in-view {
    opacity: 1;
    transform: none;
}
</style>
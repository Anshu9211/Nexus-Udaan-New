<template>
    <section class="ews-initiative mt-4 " >
        <div class="container">
            <div class="row align-items-center g-3">
                <!-- IMAGE SIDE -->
                <div class="col-lg-6">
                    <div class="ews-img-wrap position-relative slide-left">
                        <img src="../assest/IMG/ShowCaseSection.webp" alt="nexusUdaan classroom "class="img-fluid rounded-4 w-100">
                        <div class="ews-img-glow"></div>
                        <!-- floating badge on image -->
                        <div class="ews-float-badge">
                            <i class="bi bi-geo-alt-fill"></i>
                            <span>Himachal Pradesh, India</span>
                        </div>
                    </div>
                </div>
                <!-- TEXT SIDE -->
                <div class="col-lg-6 slide-right">
                    <span class="badge-tag mb-3">Our Social Initiative</span>
                    <h2 class="text-white mb-2">
                        Bridging the Gap for <span style="color:#3D93D2;">Meritorious Students</span>
                    </h2>
                    <p class="text-white ews-para">
                        <span style="color:#3D93D2; font-weight:600;">nexusUdaan</span> is proud to launch an initiative aimed at providing international exposure to job seekers and meritorious students from Himachal Pradesh who possess a technical background but lack essential employability skills.
                    </p>
                    <p class="text-white ews-para">
                       {{ appData.nameData2 }}
                    </p>
                    <!-- DUAL STAT ROW -->
                    <div class="row g-3 my-4">
                        <div class="col-sm-7">
                            <div class="ews-stat-card d-flex align-items-center gap-3 h-100">
                                <div class="ews-stat-icon">
                                    <i class="bi bi-award-fill"></i>
                                </div>
                                <div>
                                    <h3 class="mb-0 text-white">12 Seats</h3>
                                    <p class="mb-0 text-white-50 small">Reserved for EWS/BPL students </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="ews-stat-card d-flex align-items-center gap-3 h-100">
                                <div class="ews-stat-icon ews-stat-icon-alt">
                                    <i class="bi bi-mortarboard-fill"></i>
                                </div>
                                <div>
                                    <h3 class="mb-0 text-white">50%</h3>
                                    <p class="mb-0 text-white-50 small">Free of Cost</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="d-flex align-items-center gap-3 flex-wrap">
                        <a href="#" class="btn ews-btn">
                            Apply for EWS/BPL Seat <i class="bi bi-arrow-right ms-2"></i>
                        </a>
                        <a href="#" class="ews-link-btn">
                            Know Eligibility Criteria <i class="bi bi-chevron-right"></i>
                        </a>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { appData } from "../constants/appData";
export default {
  name: "SocialCard",
  data() {
    return {
      appData,
    };
  },
  mounted() {
    let elements = document.querySelectorAll(
      ".fade-section, .slide-left, .slide-right"
    );
    let observer = new IntersectionObserver(
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
    elements.forEach((el) => observer.observe(el));
  },
};
</script>

<style>

/* ================================
   BASE
================================ */
html, body {
    overflow-x: hidden;
    max-width: 100%;
    background-color: #051321;
}

/* ================================
   GLOBAL UTILITIES (used across all sections)
================================ */
.fade-section {
    opacity: 0;
    transform: translateY(80px);
    transition: all 0.8s ease;
}
.slide-left {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 0.8s ease;
}
.slide-right {
    opacity: 0;
    transform: translateX(100px);
    transition: all 0.8s ease;
}
.fade-section.show,
.slide-left.show,
.slide-right.show {
    opacity: 1;
    transform: none;
}
.section-title :is(h2, h1)
{
    font-size: 36px
}

/* ================================
   SECTION 1: EWS INITIATIVE
================================ */
.ews-img-wrap {
    overflow: visible;
}

.ews-img-wrap img {
    position: relative;
    z-index: 2;
    transition: transform 0.5s ease;
}

.ews-img-wrap:hover img {
    transform: scale(1.02);
    border: 1px solid #1e88e5;
    box-shadow: 0 10px 55px rgba(30, 136, 229, 0.25);
}

.ews-img-glow {
    position: absolute;
    inset: -10px;
    background: linear-gradient(135deg, #3D93D2 0%, transparent 60%);
    border-radius: 10px;
    opacity: 0.25;
    z-index: 1;
    filter: blur(20px);
}

.ews-float-badge {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 3;
    background: rgba(13, 13, 13, 0.85);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(61, 147, 210, 0.4);
    color: white;
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.ews-float-badge i {
    color: #3D93D2;
}

.badge-tag {
    display: inline-block;
    padding: 6px 16px;
    /* background: rgba(61, 147, 210, 0.15); */
    background: linear-gradient(195deg, #000000 20%, #071a2e 50%, #0b3d91 90%);
    color: white;
    border: 1px solid #007bff;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.3px;
}

.ews-para {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 17px;
}

.ews-stat-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(61, 147, 210, 0.3);
    border-radius: 14px;
    padding: 16px 18px;
    transition: all 0.3s ease;
}

.ews-stat-card:hover {
    background: rgba(61, 147, 210, 0.08);
    border-color: #3D93D2;
    transform: translateY(-3px);
}

.ews-stat-icon {
    width: 48px;
    height: 48px;
    min-width: 48px;
    background: #3D93D2;
    color:white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
}

.ews-stat-icon-alt {
    background: transparent;
    border: 2px solid #3D93D2;
    color: #3D93D2;
}

.ews-btn {
    background: #3D93D2;
    color: #fff;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.ews-btn:hover {
    background: #2d7cb8;
    color: #fff;
    transform: translateX(3px);
    box-shadow: 0 8px 20px rgba(61, 147, 210, 0.3);
}

.ews-link-btn {
    color: #ffffffaa;
    font-size: 0.95rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: color 0.3s ease;
}

.ews-link-btn:hover {
    color: #3D93D2;
}

@media (max-width: 768px) {
    .ews-float-badge {
        font-size: 0.75rem;
        padding: 6px 12px;
    }
 
}
</style>
<template>
    <!-- JOIN NEXUS CODE STARTS  -->
    <section class="banner-section" id="join-nexus">
        <div class="container overflow-hidden">
            <div class="row banner-row align-items-center g-0">
                <div class="col-lg-6">
                    <div class="banner-data slide-left">
                        <h1 class="banner-title text-white">
                            Who can join <span style="color: #3D93D2;">nexusUdaan</span>?
                        </h1>
                        <p class="banner-text text-white">
                            At nexusUdaan, we welcome learners from a wide range of academic backgrounds:
                        </p>
                        <ul>
                            <li class="text-white"><strong class="fs-5">School Students:</strong> Classes 10 to 12 (explore early exposure to IT <br>and digital careers)</li>
                            <li class="text-white"><strong class="fs-5">Postgraduates:</strong> MCA, MBA, M.Sc., M.Com., and<br> other relevant fields</li>
                            <li class="text-white"><strong class="fs-5">Graduates:</strong>  BCA, BA, B.Sc., B.Com., BBA</li>
                        </ul>
                        <div class="banner-subtext text-white">
                        <h6> Whether you're still in school or have completed your degree, our programs are tailored to equip you with real-world skills and industry exposure to succeed in today’s technology-driven world.</h6>
                        </div>
                    </div>
                </div>
            <div class="col-lg-6"></div>
            </div>
        </div>
      <div class="image-wrap slide-right">
          <div
            class="image-shape"
            :style="{ backgroundImage: `url(${bannerImg})` }">
          </div>
        </div>
    </section>
</template>
<script>
import bannerImg from "../assest/IMG/whyDifferentSection.webp";
export default {
  name: "JoinUs",
  data() {
    return {
      bannerImg,
    };
  },
  mounted() {
    let elements = document.querySelectorAll(
      ".slide-left,.slide-right"
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
   SECTION 3: JOIN NEXUS BANNER
================================ */
/* BANNER SECTION CODE STARTS  */

.banner-section{
    position: relative;
    overflow: hidden;
    padding-top: 40px;
    padding-bottom: 100px;
    z-index: 1;
    background: linear-gradient(195deg, #000000 0%, #071a2e 60%, #0b3d91 100%);
   
  }
  .banner-title
  {
    max-width: 90%;
    font-size: 45px;
    font-weight: 600;
    line-height: 1.15;
    /* color: #012948; */
  }
  .banner-text
  {
    /* color: #012948; */
    font-size: 19px;
    margin-top: 20px;
    max-width: 75%;
  }
  .banner-subtext h6{
    max-width: 70%;
    margin-top: 25px;
    z-index: 3;
    font-size: 16px;
    color: white;
    display: block;
    position: relative;
    padding-left: 16px;
    font-weight: 400;
    &::before
    {
      content: "";
      position: absolute;
      top: 0;
      left: -0px;    
      height: 100%;
      width: 4px;
      background-color: #1692E5;
    }
  }
  .quote-block{
    border-left: 3px solid #14b8a6;
    padding-left: 16px;
    font-weight: 700;
    font-size: 1.02rem;
    line-height: 1.5;
    max-width: 360px;
  }
  .image-wrap{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;     
    width: 56%;
    height: 100%;
    min-height: 760px;
  }
  .image-shape{
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    clip-path:path('M 256 0 L 2000 0 L 2000 1000 L 520 1000 C 360 950, 220 860, 372 720 C 70 600, 40 470, 60 350 C 80 240, 140 146, 211 40 C 221 28, 247 -35, 277 0 Z');
  }
  @supports not (clip-path: path('M0 0')) {
    .image-shape{
      clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 6% 100%, 0% 70%, 0% 35%, 8% 18%);
    }
  }
 
 
/* BANNER SECTION CODE ENDS  */

@media(max-width:1200px)
{
    .section-title :is(h2, h1)
    {
      font-size: 32px !important;
    }
    .banner-title
    {
      font-size: 38px !important;
    }
    .banner-text
    {
      max-width: 85%;
    } 
}

@media(max-width:991px)
{
    .banner-section
    {
      padding: 30px 15px 40px 15px;
    }    
    .banner-title, .banner-text, .banner-subtext
    {
      max-width: 100%;
    }
    .banner-title
    {
      font-size: 35px;
    }
    .image-wrap{
      position: relative;
      width: 700px;
      margin:50px auto 20px auto;
      min-height: auto;
    }
    .image-shape{
      clip-path: none;
      border-radius: 16px;
      position: unset;
      height: 400px;
      background-size: cover;
    }  
}
@media(max-width:767px)
{
    .banner-title
    {
      font-size: 35px !important;
    }
    .image-wrap{
      position: relative;
      width: 500px;
    }
}
@media(max-width:576px)
{
    .section-title :is(h2, h1)
    {
      font-size: 28px !important;
    }
    .banner-section
    {
      padding: 30px 15px 10px 15px;
    }
    .banner-title
    {
      font-size: 28px !important;
    }
    .banner-text
    {
      font-size: 17px !important;
    }
    .image-wrap{
      position: relative;
      width: 100%;
    }
    .image-shape
    {
      height: 200px;
      border-radius: 10px;
    }
}
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
</style>
<template>
      <section class="card-about pt-3 pb-5  fade-section " id="Join-us" style="background-color: #111111; ">
            <div class="container-fluid">
                <div class="container why-choose">
                    <h1 class="text-center text-white pt-3 pb-5 display-5 " >Why Choose <span style="color: #3D93D2;">nexusUdaan</span> ?</h1>
                    <div class="row text-white">
                        <div class="col-lg-4 about-col card-1">
                            <div class="about-data">
                                <h3>Hands on Experience with Real Projects</h3>
                                <p>Gain practical exposure by working on live, enterprise-level projects—experience that mirrors real corporate environments.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 about-col card-2">
                            <div class="about-data">
                                <h3>Industry Experts as your Instructors</h3>
                                <p>Learn from experienced developers, analysts, QA engineers, and designers who are actively delivering tech solutions across global markets.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 about-col card-3">
                            <div class="about-data">
                                <h3>Training that Matches Real Job Expectations</h3>
                                <p>Programs are aligned with actual job roles—ensuring you develop not only technical skills, but also communication, reporting, and problem-solving capabilities employers seek. </p>
                            </div>
                        </div>
                        <div class="col-lg-4 about-col  card-4">
                            <div class="about-data">
                                <h3>Job Training & Internship Support</h3>
                                <p>Each program includes structured job-readiness training, mock interviews, resume workshops, and access to internship opportunities through our professional network. </p>
                            </div>
                        </div>
                        <div class="col-lg-4 about-col card-5">
                            <div class="about-data">
                                <h3>End-to-End Project Exposure</h3>
                                <p>Understand every phase of a real project—from requirement gathering and documentation to development, testing, and deployment. </p>
                            </div>
                        </div>
                        <div class="col-lg-4 about-col card-6">
                            <div class="about-data">
                                <h3>Hybrid Learning Options</h3>
                                <p>Attend sessions on campus in Subathu or join remotely with access to all tools, mentors, and support materials.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
  name: "JoinUs",
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

.nu-fields{
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 2px solid white;
    border-bottom: 1px solid white;
    margin-bottom: 56px;
}
.nu-field{
    padding: 18px 24px;
    border-right: 1px solid white;
}
.nu-field:last-child{ border-right: none; }.nu-field-label{
    display:block;
    font-family:'IBM Plex Mono', monospace;
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #3D93D2;
    margin-bottom: 6px;
    font-weight: bold;
}
.nu-field-value{
    display:block;
    font-family:'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 19px;
    color: white;
}

/* ================================
   SECTION 8: WHY CHOOSE NEXUSUDAAN
================================ */
.why-choose h1{
    font-weight: 600;
}

.card-about .about-data{
    padding: 15px;
}
.card-1{
    border-bottom: 1px solid #2563eb;
    border-right: 1px solid #2563eb;
}
.card-2{
    border-bottom: 1px solid #2563eb;
    border-right: 1px solid #2563eb;  
}
.card-3{
    border-bottom: 1px solid #2563eb;
}
.card-4 ,.card-5{
    border-right: 1px solid #2563eb;
}
.about-col{
    transition: 0.3s ease;
}
.about-col:hover{
    background: linear-gradient(135deg, #000000 0%, #071a2e 60%, #0b3d91 100%);
}

/* ================================
   RESPONSIVE - WHY CHOOSE
================================ */
/* ================================
   TABLET + MOBILE
   992px AND BELOW
================================ */

@media (max-width: 992px) {

    .card-about{
       
        padding-top: 0px !important;
    }
  .card-1,
  .card-2,
  .card-3,
  .card-4,
  .card-5 {
    border-left: none !important;
    border-right: none !important;
  }
  .card-1,
  .card-2,
  .card-3,
  .card-4,.card-5 ,.card-6 {
    border-bottom: 1px solid #2563eb !important;
  }
    .why-choose h1{
        padding-bottom: 10px !important;
    }
 
}
@media (max-width: 768px) {

  .why-choose h1 {
    font-size: 24px;
    text-align: center;
    /* background-color: green; */
    padding-bottom: 0 !important;
  }
   .card-about{
       
        padding-top: 0px !important;
    }

  .card-about .about-data {
    padding: 18px 15px;
    
  }
  /* Remove right borders on mobile */
  .card-1,
  .card-2,
  .card-3,
  .card-4,
  .card-5 {
    border-right: none !important;
    border-left: none !important;
  }

  /* Keep only bottom border */
  .card-1,
  .card-2,
  .card-3,
  .card-4 ,
  .card-5,.card-6 {
    border-bottom: 1px solid #2563eb;
  }

  /* Last card should not have bottom border */
  .card-5 {
    border-bottom: none;
  }

  .about-col {
    width: 100%;
  }
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

 

 
</style>
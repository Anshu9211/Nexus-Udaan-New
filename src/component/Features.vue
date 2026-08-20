<template>
      <section class="makes py-5 " id="Different">
            <div class="container-fluid">
                <div class=" text-center make-udaan py-5">
                    <h1 class="text-white display-5">What Makes <span style="color: #3D93D2;">nexusUdaan</span> Different?</h1>
                    <p class="text-white">nexusUdaan is proudly affiliated with Farenexus - a global travel technology company based in Canada and India. This unique <br>industry connection ensures our students gain real-world knowledge, mentorship from professionals, and exposure to live projects.</p>
                
                </div>
                <div class="container">
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-4">
                            <div class="make-udaan-card1 h-100 slide-left">
                                <i class="bi bi-rocket-takeoff text-primary fs-1 mb-3"></i>
                                <h4>Real Projects. Real Skills. Real Impact.</h4>
                                <p>Our programs are based on actual, ongoing enterprise projects—not theoretical assignments. You'll work with real scenarios, client-based requirements, and industry-grade tools from the very beginning.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="make-udaan-card1 h-100 fade-section">
                                <i class="bi bi-person-workspace text-primary fs-1 mb-3"></i>
                                <h4>Mentorship by Working Professionals.</h4>
                                <p>Each session is led by experienced engineers, analysts, testers, and designers—not academic instructors. You'll learn how real teams work, how real products are built, and what real employers expect.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="make-udaan-card1 h-100 slide-right">
                                <i class="bi bi-briefcase-fill text-primary fs-1 mb-3"></i>
                                <h4>Career-Focused Training, Not Just Courses.</h4>
                                <p>Our curriculum is tailored to in-demand job roles like Full Stack Developer, Business Analyst, QA Engineer, UI/UX Designer, and Data Analyst. From communication skills to Agile teamwork, we prepare you to succeed in interviews and on the job.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="make-udaan-card1 h-100 slide-left">
                                <i class="bi bi-robot text-primary fs-1 mb-3"></i>
                                <h4>AI & Future-Tech Readiness</h4>
                                <p>We don't just teach today's tools—we prepare you for tomorrow's technologies. Our programs integrate AI, cloud computing, and data automation to help you stay ahead in the evolving tech industry.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="make-udaan-card1 h-100 fade-section">
                                <i class="bi bi-person-check-fill text-primary fs-1 mb-3"></i>
                                <h4>Career Support That Stays With You</h4>
                                <p>Beyond training, we help you build your resume, strengthen your portfolio, prepare for interviews, and connect with recruiters. Our placement support continues even after you complete your program.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="make-udaan-card1 h-100 slide-right">
                                <i class="bi bi-people-fill text-primary fs-1 mb-3"></i>
                                <h4>Collaborative Learning Environment</h4>
                                <p>At nexusUdaan, you learn as part of a team—solving real-world challenges, sharing ideas, and developing the communication and collaboration skills employers value most.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
export default {
  name: "Features",
  mounted() {
    const elements = document.querySelectorAll(
      ".fade-section, .slide-left, .slide-right"
    );

    const observer = new IntersectionObserver(
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
   SECTION 2: WHAT MAKES NEXUSUDAAN DIFFERENT
================================ */
.makes .make-udaan-card1{
    color: white;
    border: 1px solid black;
    padding: 10px 12px;
    /* background-color: #0056b3; */
}
.make-udaan h1{
    /* background-color: red; */
    font-weight: 500;
}
.makes .make-udaan-card1 p{
    font-size: 14px;
}
.makes .make-udaan-card1 h4{
    font-size: 20px;
}


.make-udaan-card1{
    background: linear-gradient(195deg, #00000072 30%, #1b497a8e 60%, #0b3d91 80%);
    padding:30px;
    border-radius:16px;
    box-shadow:0 10px 30px rgba(0,0,0,.08);
    transition:.3s ease;
    text-align:center;
}

.make-udaan-card1:hover{
    transform:translateY(-8px);
    box-shadow:0 15px 40px rgba(0,0,0,.12);
    background-color: white;
    color: #051321;
}
.make-udaan-card1:hover p{
    /* background-color: white; */
    color: #051321;
   
}

.make-udaan-card1 i{
    display:inline-block;
    margin-bottom:15px;
}

.make-udaan-card1 h4{
    font-weight:700;
    margin-bottom:15px;
}

.make-udaan-card1 p{
    color:white;
    line-height:1.5;
    margin-bottom:0;
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
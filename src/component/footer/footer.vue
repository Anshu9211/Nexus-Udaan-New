<template>
  <div class="footer slide-right">
    <div class="top-data-footer">
      <h2>
        <span>R</span>eady to Begin Your Journey?
      </h2>
      <p>
        Choose the right program. Learn from experts. Get job-ready.
      </p>
      <div class="footer-buttons">
        <div>
          <a
            href="https://nexusudaan.in/brochure/Brochure-Full.pdf" target="_blank">
            <button>Brochure <i class="bi bi-arrow-down-circle-fill" style="color: green;"></i></button>
          </a>
        </div>
        <div>
          <button
            class="contact-btn"
            @click="testClick"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>


    <!-- ================= CONTACT MODAL ================= -->

    <div
      class="contact-modalo"
      v-if="showModal"
      @click.self="showModal = false"
    >
      <div class="contact-cardso">
        <span
          class="close-btn"
          @click="showModal = false"
        >
          &times;
        </span>
        <h2>Contact Us</h2>
        <form @submit.prevent="submitForm">
          <div class="name-row">
            <input
              type="text"
              placeholder="First Name"
              v-model="form.firstName"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              v-model="form.lastName"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            v-model="form.email"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            v-model="form.phone"
            required
          />
          <textarea
            placeholder="Enter your message"
            rows="5"
            v-model="form.message"
            required
          ></textarea>
          <div class="btn-groupp">
            <button
              type="button"
              class="cancel-btn"
              @click="showModal = false">Cancel</button>
            <button
              type="submit"
              class="submit-btn"
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
    <!-- ================= FOOTER CONTENT ================= -->

    <div class="footer-wrapper">
      <div class="footer-about">
        <img
          src="../../assest/IMG/logo.svg"
          alt="Nexus Udaan"
          class="footer-main-logo"
        />
        <p>
          NexusUdaan is an education platform dedicated to
          transforming careers through industry-focused learning,
          expert mentorship, and placement-driven programs.
        </p>
        <div class="social-links">
          <a
            href="https://www.instagram.com/nexusudaan17/"
            target="_blank"
          >
            <img
              src="../../assest/IMG/insta.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/nexusudaantraining"
            target="_blank"
          >
            <img
              src="../../assest/IMG/facebook.png"
              alt="Facebook"
            />
          </a>
        </div>
      </div>
      <!-- QUICK LINKS -->
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <router-link to="/" @click="closeMenu">Home</router-link>
          </li>
         <li>
            <router-link to="/pro-data" target="_blank" @click="closeMenu">
              Programs
            </router-link>
          </li>
         <li>
            <router-link to="/about-us"  target="_blank">
              About Us
            </router-link>
          </li>
          <li>
            <router-link to="/Join-us" target="_blank" @click="closeMenu">
              Privacy Policy
            </router-link>
          </li>
          <li>
            <router-link to="/Different" target="_blank" @click="closeMenu">
              Makes nexusUdaan
            </router-link>
          </li>
        </ul>

      </div>

      <!-- PROGRAMS -->
      <div class="footer-programs">
        <h4>Popular Programs</h4>
        <ul>
         <li>
          <router-link to="/pro-data/fullstack">Full Stack Development</router-link>
        </li>
        <li>
          <router-link to="/pro-data/data">Data Analytics</router-link>
        </li>
        <li>
          <router-link to="/pro-data/uiux">UI/UX Design</router-link>
        </li>
        <li>
          <router-link to="/pro-data/ai-ml">AI & Machine Learning</router-link>
        </li>
        <li>
          <router-link to="/pro-data/cloud-devops">Cloud Computing & DevOps</router-link>
        </li>
        </ul>
      </div>
      <!-- CONTACT -->
      <div class="footer-contact">
        <h4>Contact Information</h4>
        <div class="contact-item">
          Nexus Tower, Village Jadla,
          P.O. Kakkarhatti (Subathu),
          Solan, Himachal Pradesh – 173206
        </div>
        <div class="contact-item">
          +91 XXXXX-XXXXX
        </div>
        <div class="contact-item">
          contact@nexusudaan.in
        </div>
      </div>
    </div>
    <!-- ================= BOTTOM ================= -->
    <div class="footer-bottom">
      <p>
        © 2026
        <strong>NexusUdaan</strong>.
        All Rights Reserved.
      </p>
      <div>
        <a href="#">
          Terms & Conditions
        </a>
        <a href="#">
          Privacy Policy
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      },
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
    elements.forEach((el) => {
      observer.observe(el);
    });
  },
  methods: {
    testClick() {
      this.showModal = true;
    },
    submitForm() {
      alert("Thank you! Your message has been submitted.");
      this.showModal = false;
      this.form = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      };
    },
    selectCourse(course) {
      let courseElement =
        document.querySelector(
          `[data-course="${course}"]`
        );
      if (courseElement) {
        courseElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setTimeout(() => {
          courseElement.click();
        }, 300);
      }
    },
  },
};
</script>


<style>

.footer {
  background:linear-gradient(135deg,#000000 0%, #071a2e 60%, #0b3d91 100%);
  color: white;
  padding-top: 40px;
  position: relative;
  overflow: hidden;
}
.top-data-footer {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  text-align: center;
}
.top-data-footer h2 {
  font-size: 45px;
  font-weight: 500;
  margin: 0;
  line-height: 1.3;
}
.top-data-footer h2 span {
  color: #1e88e5;
  font-size: 60px;
}
.top-data-footer p {
  font-size: 18px;
  margin: 10px 0 20px;
  color: #d8e0eb;
}
.footer-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.footer-buttons button {
  border: 1px solid #1e88e5;
  padding: 8px 18px;
  border-radius: 10px;
  background: transparent;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}
.footer-buttons .contact-btn {
  background: #1e88e5;
  font-weight: 600;
}
.footer-buttons button:hover {
  background:
    linear-gradient(135deg, #93a2c4a3, #425b9188, #09423c);
  transform: translateY(-2px);
}
/* ==================================================
   FOOTER GRID
================================================== */
.footer-wrapper {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns:2fr 1fr 1fr 1.5fr;
  column-gap: 35px;
  padding: 40px 0 50px;
}
/* ==================================================
   ABOUT
================================================== */
.footer-main-logo {
  width: 180px;
  height: auto;
  margin-bottom: 15px;
}
.footer-about p {
  color: #cfd6e3;
  line-height: 1.8;
  margin: 0;
  font-size: 14px;
}
/* ==================================================
   SOCIAL
================================================== */
.social-links {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}
.social-links a {
  display: inline-block;
}
.social-links img {
  width: 35px;
  height: 35px;
  object-fit: contain;
  border-radius: 8px;
  display: block;
  transition: 0.3s;
}
.social-links img:hover {
  transform: scale(1.08);
}
/* ==================================================
   HEADINGS
================================================== */
.footer h4 {
  margin: 0 0 20px;
  font-size: 20px;
  font-weight: 600;
}
/* ==================================================
   LIST
================================================== */
.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer li {
  margin-bottom: 12px;
}
.footer a {
  color: #cfd6e3;
  text-decoration: none;
  transition: 0.3s;
}
.footer a:hover {
  color: #D9572C;
  padding-left: 2px;
}
/* ==================================================
   CONTACT
================================================== */
.contact-item {
  margin-bottom: 15px;
  color: #cfd6e3;
  line-height: 1.7;
  font-size: 14px;
}
/* ==================================================
   FOOTER BOTTOM
================================================== */
.footer-bottom {
  border-top:
    2px solid
    rgba(255, 255, 255, 0.1);
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-bottom p {
  color: #bfc6d3;
  margin: 0;
  font-size: 14px;
}


.footer-bottom a {
  margin-left: 18px;
  color: #bfc6d3;
}
.footer-bottom a:hover {
  color: #D9572C;
}


/* ==================================================
   CONTACT MODAL
================================================== */

.contact-modalo {
  position: fixed;
  inset: 0;
  background:
    rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 69;
  box-sizing: border-box;
}
.contact-cardso {
  background: #2676cb;
  width: 550px;
  max-width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 25px;
  border-radius: 12px;
  position: relative;
  box-sizing: border-box;
  animation: modalOpen 0.3s ease;
}


/* ==================================================
   MODAL ANIMATION
================================================== */

@keyframes modalOpen {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
/* ==================================================
   CLOSE
================================================== */
.close-btn {
  position: absolute;
  top: 8px;
  right: 15px;
  font-size: 30px;
  color: red;
  cursor: pointer;
  line-height: 1;
}

/* ==================================================
   MODAL TITLE
================================================== */
.contact-cardso h2 {
  text-align: center;
  margin: 0 0 20px;
  font-size: 28px;
}
/* ==================================================
   FORM
================================================== */
.name-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.contact-cardso input,
.contact-cardso textarea {
  width: 100%;
  padding: 11px;
  margin: 7px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
}
.contact-cardso textarea {
  resize: vertical;
}
.contact-cardso input:focus,
.contact-cardso textarea:focus {
  border-color: #007bff;
  box-shadow:
    0 0 5px
    rgba(0, 123, 255, 0.3);
}

/* ==================================================
   FORM BUTTONS
================================================== */

.btn-groupp {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}
.cancel-btn,
.submit-btn {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}
.cancel-btn {
  background: #ccc;
  color: #000;
}
.cancel-btn:hover {
  background: #aaa;
}
.submit-btn {
  background: green;
  color: white;
}
.submit-btn:hover {
  background: #006400;
}
/* ==================================================
   SCROLL ANIMATION
================================================== */
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
/* ==================================================
   TABLET
================================================== */
@media (max-width: 992px) {
  .top-data-footer h2 {
    font-size: 36px;
  }
  .top-data-footer h2 span {
    font-size: 50px;
  }
  .top-data-footer p {
    font-size: 16px;
  }
  .footer-wrapper {
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
  }
}

/* ==================================================
   MOBILE
================================================== */

@media (max-width: 768px) {
  .footer {
    padding-top: 30px;
  }
  .top-data-footer {
    width: 90%;
  }
  .top-data-footer h2 {
    font-size: 30px;
  }
  .top-data-footer h2 span {
    font-size: 42px;
  }
  .top-data-footer p {
    font-size: 15px;
  }
  .footer-buttons {
    flex-direction: column;
    gap: 10px;
  }
  .footer-buttons button {
    width: 180px;
  }
  .footer-wrapper {
    width: 88%;
    grid-template-columns: 1fr;
    column-gap: 0;
    padding: 35px 0;
  }
  .footer-about,
  .footer-links,
  .footer-programs,
  .footer-contact {
    text-align: center;
  }
  .footer-main-logo {
    width: 170px;
  }
  .social-links {
    justify-content: center;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  .footer-bottom a {
    margin: 0 7px;
  }
}
/* ==================================================
   SMALL MOBILE
================================================== */
@media (max-width: 480px) {
  .top-data-footer {
    width: 92%;
  }
  .top-data-footer h2 {
    font-size: 25px;
  }
  .top-data-footer h2 span {
    font-size: 36px;
  }
  .top-data-footer p {
    font-size: 14px;
  }
  .footer-wrapper {
    width: 90%;
  }
  .footer-main-logo {
    width: 150px;
  }
  .footer-about p {
    font-size: 13px;
  }
  .footer h4 {
    font-size: 18px;
  }
  .footer li a {
    font-size: 13px;
  }

  .contact-modalo {
    padding: 12px;
  }
  .contact-cardso {
    padding: 20px 15px;
    max-height: 90vh;
  }
  .contact-cardso h2 {
    font-size: 24px;
  }


  .name-row {
    grid-template-columns: 1fr;
    gap: 0;
  }


  .btn-groupp {
    flex-direction: column;
    gap: 8px;
  }
  .cancel-btn,
  .submit-btn {
    width: 100%;
  }
  .footer-bottom p {
    font-size: 12px;
  }
  .footer-bottom a {
    font-size: 12px;
  }
}


/* ==================================================
   VERY SMALL MOBILE
================================================== */

@media (max-width: 360px) {
  .top-data-footer h2 {
    font-size: 22px;
  }
  .top-data-footer h2 span {
    font-size: 30px;
  }
  .top-data-footer p {
    font-size: 13px;
  }
  .footer-wrapper {
    width: 92%;
  }
  .footer-buttons button {
    width: 150px;
  }
  .contact-cardso {
    padding: 18px 12px;
  }
}

</style>
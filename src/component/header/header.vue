<template>
  <header class="header">
    <nav class="navbar">
      <router-link
        to="/"
        class="navbar-brand"
        @click="closeMenu">
        <img
          :src="logo"
          alt="Nexus Udaan Logo"
        />
      </router-link>
      <button
        class="menu-toggle"
        type="button"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle navigation">
        <i
          :class="
            isMenuOpen
              ? 'bi bi-x-lg'
              : 'bi bi-list'
          "
        ></i>
      </button>
      <div
        class="navbar-menu"
        :class="{ 'menu-open': isMenuOpen }"
      >
        <ul class="nav-list">
          <li>
            <router-link
              to="/"
              @click="closeMenu"
            > <i class="bi bi-house-door-fill"></i>Home</router-link>
          </li>
          <li>
            <router-link
               to="/contact-us"
               target="_blank"
              @click="closeMenu"
            > <i class="bi bi-images"></i>Gallery</router-link>
          </li>
          <li class="nav-item dropdown">
            <button
              type="button"
              class="nav-link dropdown-toggle"
              @click="toggleDropdown('company')"
            > <i class="bi bi-building"></i><span>Our Company</span>
              <i
                class="bi"
                :class="
                  activeDropdown === 'company'
                    ? 'bi-chevron-up'
                    : 'bi-chevron-down'
                "
              ></i>
            </button>
            <ul
              class="dropdown-menu"
              :class="{
                show: activeDropdown === 'company'
              }">
              <li>
                <router-link
                  to="/about-us"
                  @click="closeMenu"
                >About Us
                </router-link>
              </li>
              <li>
                <router-link
                  to="/Join-us"
                  @click="closeMenu"
                >
                  Privacy Policy
                </router-link>
              </li>
              <li>
                <router-link
                  to="/Different"
                  @click="closeMenu"
                >
                  Makes nexusUdaan
                </router-link>
              </li>
              <li class="pro-menu">

                <button
                  type="button"
                  class="programs-button"
                  @click.stop="
                    programsOpen = !programsOpen
                  "
                >
                  <span>Programs</span>

                  <i
                    class="bi"
                    :class="
                      programsOpen
                        ? 'bi-chevron-up'
                        : 'bi-chevron-down'
                    "
                  ></i>
                </button>


                <!-- PROGRAM SUBMENU -->

                <ul
                  class="pro-dropdown"
                  :class="{
                    show: programsOpen
                  }"
                >

                  <!-- FULL STACK -->

                  <li>
                    <router-link
                      to="/pro-data/fullstack"
                      @click="closeMenu"
                    >
                      Full Stack Development
                    </router-link>
                  </li>


                  <!-- DATA ANALYTICS -->

                  <li>
                    <router-link
                      to="/pro-data/data"
                      @click="closeMenu"
                    >
                      Data Analytics
                    </router-link>
                  </li>


                  <!-- UI UX -->

                  <li>
                    <router-link
                      to="/pro-data/uiux"
                      @click="closeMenu"
                    >
                      UI/UX Design
                    </router-link>
                  </li>
                  <!-- AI ML -->

                  <li>
                    <router-link
                      to="/pro-data/ai-ml"
                      @click="closeMenu"
                    >
                      AI & Machine Learning
                    </router-link>
                  </li>


                  <!-- CLOUD DEVOPS -->

                  <li>
                    <router-link
                      to="/pro-data/cloud-devops"
                      @click="closeMenu"
                    >
                      Cloud Computing & DevOps
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


<script>
import logo from "../../assest/IMG/logo.svg";
export default {
  name: "Header",
  data() {
    return {
      logo,
      isMenuOpen: false,
      activeDropdown: null,
      programsOpen: false,
    };
  },
  methods: {
    toggleDropdown(menu) {
      if (this.activeDropdown === menu) {
        this.activeDropdown = null;
        this.programsOpen = false;
      } else {
        this.activeDropdown = menu;
        if (menu !== "company") {
          this.programsOpen = false;
        }
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.activeDropdown = null;
      this.programsOpen = false;
    },
  },
};

</script>


<style scoped>
.header {
  /* position: relative; */
  background: linear-gradient(
    120deg,
    #06121f 0%,
    #0a2540 45%,
    #0d4778 75%,
    #1261a0 100%
  );
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2px 0;
  z-index: 69;
}
.navbar {
  width: 100%;
  min-height: 75px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navbar-brand img {
  width: auto;
  height: 48px;
  display: block;
}


/* =========================================================
   NAVIGATION
========================================================= */

.navbar-menu {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-list > li {
  position: relative;
}


/* =========================================================
   NAV LINKS
========================================================= */

.nav-list a,
.nav-link,
.programs-button {
  border: none;
  background: transparent;
  padding: 12px 15px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  transition:
    color 0.3s ease,
    background 0.3s ease;
}

.nav-list a:hover,
.nav-link:hover,
.programs-button:hover {
  color: #5ee7f7;
}


/* REMOVE BOOTSTRAP ARROW */

.dropdown-toggle::after {
  display: none;
}


/* =========================================================
   ARROWS
========================================================= */

.dropdown-toggle i,
.programs-button i {
  font-size: 11px;
  transition:
    transform 0.25s ease;
}


/* =========================================================
   COMPANY DROPDOWN
========================================================= */

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  left: auto;
  min-width: 210px;
  margin: 0;
  padding: 8px 0;
  list-style: none;
  background: white;
  border-radius: 10px;
  box-shadow:0 12px 35px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0.25s ease;
}

@media (min-width: 993px) {
  .dropdown:hover > .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

}

.dropdown-menu li {
  width: 100%;
}

.dropdown-menu a {
  width: 100%;
  box-sizing: border-box;
  padding: 11px 18px;
  color: #243b53;
  font-size: 14px;
  border-radius: 6px;
}

.dropdown-menu a:hover {
  background: #eef9fb;
  color: #007f86;
}


/* =========================================================
   PROGRAMS
========================================================= */

.pro-menu {
  position: relative;
  width: 100%;
}


/* =========================================================
   PROGRAM BUTTON
========================================================= */

.programs-button {
  width: 100%;
  box-sizing: border-box;
  /* justify-content: space-between; */
  padding: 11px 18px;
  color: #243b53;
  font-size: 14px;
  border-radius: 6px;
}

.programs-button:hover {
  background: #eef9fb;
  color: #007f86;
}


/* =========================================================
   PROGRAM SUBMENU - DESKTOP
========================================================= */

.pro-dropdown {
  position: absolute;
  top: 0;
  right: 100%;
  min-width: 230px;
  margin: 0;
  padding: 8px 0;
  list-style: none;
  background: white;
  border-radius: 10px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateX(10px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0.25s ease;
}


/* =========================================================
   DESKTOP PROGRAM HOVER
========================================================= */

@media (min-width: 993px) {
  .pro-menu:hover > .pro-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

}


/* =========================================================
   PROGRAM LINKS
========================================================= */

.pro-dropdown li {
  width: 100%;
}

.pro-dropdown li a {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 11px 18px;
  color: #243b53;
  font-size: 14px;
  text-decoration: none;
  border-radius: 6px;
}

.pro-dropdown li a:hover {
  background: #eef9fb;
  color: #007f86;
}


/* =========================================================
   HAMBURGER
========================================================= */

.menu-toggle {
  display: none;
  border: none;
  background: transparent;
  font-size: 28px;
  color: white;

  cursor: pointer;

  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.menu-toggle:hover {

  color: #5ee7f7;
}


/* =========================================================
   1100px
========================================================= */

@media (max-width: 1100px) {

  .navbar {
    padding: 0 3%;
  }

  .nav-list a,
  .nav-link,
  .programs-button {
    padding: 10px;
    font-size: 14px;
  }

}


/* =========================================================
   992px RESPONSIVE
========================================================= */

@media (max-width: 992px) {

  /* NAVBAR */

  .navbar {
    min-height: 70px;
    padding: 0 25px;
  }
  /* LOGO */
  .navbar-brand img {
    height: 42px;
  }
  /* HAMBURGER */
  .menu-toggle {
    display: block;
    z-index: 1100;
  }


  /* MOBILE MENU */
  .navbar-menu {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 15px 25px 25px;
    box-sizing: border-box;
    background: white;
    box-shadow:0 10px 25px rgba(0, 0, 0, 0.12);
    display: none;
  }

  .navbar-menu.menu-open {
    display: block;
  }


  /* NAV LIST */

  .nav-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 3px;
  }

  .nav-list > li {
    width: 100%;
  }


  /* MOBILE LINKS */

  .nav-list a,
  .nav-link,
  .programs-button {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    padding: 14px 12px;
    border-radius: 8px;
    color: #102a43;
  }

  .nav-list a:hover,
  .nav-link:hover,
  .programs-button:hover {
    color: #007f86;
    background: #eef9fb;
  }


  /* =======================================================
     COMPANY DROPDOWN
  ======================================================= */

  .dropdown-menu {
    position: static;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 5px 0;
    box-sizing: border-box;
    background: #f8fbfc;
    border-radius: 8px;
    box-shadow: none;
    display: none;
    opacity: 1;
    visibility: visible;
    transform: none;
  }


  /* SHOW COMPANY */

  .dropdown-menu.show {
    display: block !important;
    opacity: 1;
    visibility: visible;
  }


  /* DISABLE DESKTOP HOVER */

  .dropdown:hover > .dropdown-menu {
    display: none;
    opacity: 1;
    visibility: visible;
  }


  /* KEEP CLICKED COMPANY OPEN */

  .dropdown > .dropdown-menu.show {
    display: block !important;
    opacity: 1;
    visibility: visible;
  }


  /* COMPANY LINKS */

  .dropdown-menu > li > a {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 11px 25px;
    color: #34495e;
    font-size: 14px;
  }

  .dropdown-menu > li > a:hover {
    background: #e8f7f9;
    color: #007f86;
  }


  /* =======================================================
     PROGRAMS
  ======================================================= */

  .pro-menu {
    position: relative;
    width: 100%;
  }


  /* PROGRAM BUTTON */

  .pro-menu .programs-button {
    width: 100%;
    padding: 11px 25px;
    color: #34495e;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
  }

  .pro-menu .programs-button:hover {
    background: #e8f7f9;
    color: #007f86;
  }


  /* =======================================================
     PROGRAM SUBMENU
  ======================================================= */

  .pro-dropdown {
    position: static !important;
    top: auto !important;
    right:auto !important;
    left: auto !important;
    width: 100% !important;
    min-width: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box;
    background: #edf5f7;
    border-radius: 8px;
    box-shadow: none;
    transform: none !important;
    display: none;
    opacity: 1;
    visibility: visible;
    list-style: none;
  }


  /* PROGRAM OPEN */

  .pro-dropdown.show {
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
  }


  /* PROGRAM ITEMS */

  .pro-dropdown li {
    width: 100%;
  }

  .pro-dropdown li a {
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 10px 40px;
    color: #34495e;
    font-size: 14px;
    line-height: 1.4;
    text-decoration: none;
    white-space: normal;
  }

  .pro-dropdown li a:hover {
    background: #e8f7f9;
    color: #007f86;
  }

}


/* =========================================================
   768px
========================================================= */

@media (max-width: 768px) {
  .navbar {
    min-height: 68px;
    padding: 0 20px;
  }
  .navbar-brand img {
    height: 40px;
  }
  .navbar-menu {
    top: 68px;
    padding: 12px 20px 22px;
  }
  .nav-list {
    gap: 2px;
  }
  .nav-list a,
  .nav-link,
  .programs-button {
    font-size: 14px;
    padding: 13px 12px;
  }
  .dropdown-menu {
    padding: 4px 0;
  }
  .dropdown-menu > li > a {
    padding: 10px 22px;
    font-size: 14px;
  }
  .pro-menu .programs-button {
    padding: 10px 22px;
  }
  .pro-dropdown li a {
    padding: 10px 35px;
    font-size: 14px;
  }
}

/* =========================================================
   576px
========================================================= */

@media (max-width: 576px) {
  .navbar {
    min-height: 65px;
    padding: 0 18px;
  }
  .navbar-brand img {
    height: 38px;
  }
  .menu-toggle {
    font-size: 26px;
  }
  .navbar-menu {
    top: 65px;
    left: 0;
    width: 100%;
    padding: 12px 18px 20px;
  }
  .nav-list a,
  .nav-link,
  .programs-button {
    font-size: 14px;
    padding: 12px 10px;
  }
  /* COMPANY */
  .dropdown-menu {
    padding: 3px 0;
    border-radius: 7px;
  }
  .dropdown-menu > li > a {
    padding: 10px 18px;
    font-size: 13px;
  }
  /* PROGRAM BUTTON */
  .pro-menu .programs-button {
    padding: 10px 18px;
    font-size: 13px;
  }
  /* PROGRAM SUBMENU */
  .pro-dropdown {
    width: 100% !important;
    border-radius: 7px;
  }
  .pro-dropdown li a {
    padding: 9px 30px;
    font-size: 13px;
    line-height: 1.4;
    white-space: normal;
    word-break: normal;
  }

}


/* =========================================================
   400px
========================================================= */

@media (max-width: 400px) {
  .navbar {
    padding: 0 14px;
  }
  .navbar-brand img {
    height: 34px;
  }
  .menu-toggle {
    font-size: 24px;
  }
  .navbar-menu {
    padding-left: 14px;
    padding-right: 14px;
  }
  .nav-list a,
  .nav-link,
  .programs-button {
    font-size: 13px;
  }
  .pro-dropdown li a {
    padding-left: 28px;
    padding-right: 20px;
    font-size: 12px;
  }
}
</style>
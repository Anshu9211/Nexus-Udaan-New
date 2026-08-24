<template>
  <header class="header">
    <nav class="navbar">

      <!-- LOGO -->
      <router-link to="/" class="navbar-brand" @click="closeMenu">
        <img :src="logo" alt="Nexus Udaan Logo" />
      </router-link>

      <!-- HAMBURGER -->
      <button
        class="menu-toggle"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle navigation"
      >
        <i :class="isMenuOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
      </button>

      <!-- NAVIGATION -->
      <div
        class="navbar-menu"
        :class="{ 'menu-open': isMenuOpen }"
      >
        <ul class="nav-list">

          <!-- HOME -->
          <li>
            <router-link to="/" @click="closeMenu">
              Home
            </router-link>
          </li>

          <!-- OUR COMPANY -->
          <li class="nav-item dropdown">

            <button
              class="nav-link dropdown-toggle"
              @click="toggleDropdown('company')"
            >
              Our Company
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
              :class="{ show: activeDropdown === 'company' }"
            >

              <!-- ABOUT US -->
              <li>
                <router-link
                  to="/about-us"
                  @click="closeMenu"
                >
                  About Us
                </router-link>
              </li>

              <!-- PRIVACY POLICY -->
              <li>
                <router-link
                  to="/Join-us"
                  @click="closeMenu"
                >
                  Privacy Policy
                </router-link>
              </li>

              <!-- MAKES NEXUS UDAAN -->
              <li>
                <router-link
                  to="/Different"
                  @click="closeMenu"
                >
                  Makes nexusUdaan
                </router-link>
              </li>

              <!-- PROGRAMS -->
              <li class="pro-menu">

                <button
                  class="programs-button"
                  @click.stop="toggleDropdown('programs')"
                >
                  Programs

                  <i
                    class="bi"
                    :class="
                      activeDropdown === 'programs'
                        ? 'bi-chevron-left'
                        : 'bi-chevron-right'
                    "
                  ></i>
                </button>

                <!-- PROGRAM SUBMENU -->
                <ul
                  class="pro-dropdown"
                  :class="{
                    show: activeDropdown === 'programs'
                  }"
                >

                  <li>
                    <router-link
                      to="/pro-data/fullstack"
                      @click="closeMenu"
                    >
                      Full Stack Development
                    </router-link>
                  </li>

                  <li>
                    <router-link
                      to="/pro-data/data"
                      @click="closeMenu"
                    >
                      Data Analytics
                    </router-link>
                  </li>

                  <li>
                    <router-link
                      to="/pro-data/uiux"
                      @click="closeMenu"
                    >
                      UI/UX Design
                    </router-link>
                  </li>

                  <li>
                    <router-link
                      to="/pro-data/ai-ml"
                      @click="closeMenu"
                    >
                      AI & Machine Learning
                    </router-link>
                  </li>

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
    };
  },

  methods: {
    toggleDropdown(menu) {
      if (this.activeDropdown === menu) {
        this.activeDropdown = null;
      } else {
        this.activeDropdown = menu;
      }
    },

    closeMenu() {
      this.isMenuOpen = false;
      this.activeDropdown = null;
    },
  },
};
</script>


<style scoped>

/* =========================
   HEADER
========================= */

.header {
  width: 100%;
  position: relative;
  z-index: 1000;

  background: linear-gradient(
    120deg,
    #06121f 0%,
    #0a2540 45%,
    #0d4778 75%,
    #1261a0 100%
  );

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
}


/* =========================
   NAVBAR
========================= */

.navbar {
  width: 100%;
  min-height: 75px;
  padding: 0 5%;

  display: flex;
  align-items: center;
  justify-content: space-between;
}


/* =========================
   LOGO
========================= */

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


/* =========================
   NAV MENU
========================= */

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


/* =========================
   NAV LINKS
========================= */

.nav-list a,
.nav-link,
.programs-button {
  border: none;
  background: transparent;

  padding: 12px 15px;

  color: #ffffff;

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


/* =========================
   ARROWS
========================= */

.dropdown-toggle i,
.programs-button i {
  font-size: 11px;
}


/* =========================
   COMPANY DROPDOWN
========================= */

.dropdown-menu {
  position: absolute;

  top: calc(100% + 8px);
  right: 0;
  left: auto;

  min-width: 210px;

  margin: 0;
  padding: 8px 0;

  list-style: none;

  background: #ffffff;

  border-radius: 12px;

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);

  opacity: 0;
  visibility: hidden;

  transform: translateY(10px);

  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0.25s ease;
}


/* DESKTOP SHOW */

@media (min-width: 993px) {

  .dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

}


/* =========================
   DROPDOWN ITEMS
========================= */

.dropdown-menu li {
  width: 100%;
}

.dropdown-menu a,
.programs-button {
  width: 100%;
  box-sizing: border-box;

  padding: 11px 18px;

  color: #243b53;

  font-size: 14px;

  border-radius: 6px;
}

.dropdown-menu a:hover,
.programs-button:hover {
  background: #eef9fb;
  color: #007f86;
}


/* =========================
   PROGRAMS
========================= */

.pro-menu {
  position: relative;
}


/* PROGRAM SUBMENU */

.pro-dropdown {
  position: absolute;

  top: 0;

  /* IMPORTANT:
     submenu right side mein open hoga */
  left: 100%;

  min-width: 230px;

  margin: 0;
  padding: 8px 0;

  list-style: none;

  background: #ffffff;

  border-radius: 12px;

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);

  opacity: 0;
  visibility: hidden;

  transform: translateX(10px);

  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0.25s ease;
}


/* DESKTOP PROGRAMS */

@media (min-width: 993px) {

  .pro-menu:hover > .pro-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

}


/* =========================
   HAMBURGER
========================= */

.menu-toggle {
  display: none;

  border: none;
  background: transparent;

  font-size: 28px;

  color: white;

  cursor: pointer;
}

.menu-toggle:hover {
  color: #5ee7f7;
}


/* =========================
   TABLET
========================= */

@media (max-width: 1100px) {

  .navbar {
    padding: 0 3%;
  }

  .nav-list a,
  .nav-link,
  .programs-button {
    padding: 10px 10px;
    font-size: 14px;
  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 992px) {

  .navbar {
    min-height: 70px;
    padding: 0 25px;
  }

  .navbar-brand img {
    height: 42px;
  }

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

    background: #ffffff;

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);

    display: none;
  }

  .navbar-menu.menu-open {
    display: block;
  }


  /* MOBILE LIST */

  .nav-list {
    width: 100%;

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

    justify-content: space-between;

    padding: 14px 12px;

    border-radius: 8px;

    color: #102a43;
  }


  /* MOBILE COMPANY DROPDOWN */

  .dropdown-menu {
    position: static;

    width: 100%;
    min-width: 0;

    padding: 5px 0;

    box-shadow: none;

    border-radius: 8px;

    background: #f8fbfc;

    opacity: 0;
    visibility: hidden;

    transform: none;

    display: none;
  }

  .dropdown-menu.show {
    display: block;

    opacity: 1;
    visibility: visible;
  }


  /* Disable desktop hover */

  .dropdown:hover .dropdown-menu {
    opacity: 0;
    visibility: hidden;
    display: none;
  }

  .dropdown .dropdown-menu.show {
    opacity: 1;
    visibility: visible;
    display: block;
  }


  /* MOBILE DROPDOWN LINKS */

  .dropdown-menu a,
  .programs-button {
    padding: 11px 25px;

    color: #34495e;
  }


  /* =========================
     MOBILE PROGRAM SUBMENU
  ========================= */

  .pro-dropdown {
    position: static;

    width: 100%;
    min-width: 0;

    margin: 0;
    padding: 0;

    box-sizing: border-box;

    background: #edf5f7;

    border-radius: 8px;

    box-shadow: none;

    opacity: 0;
    visibility: hidden;

    transform: none;

    display: none;
  }

  .pro-dropdown.show {
    display: block;

    opacity: 1;
    visibility: visible;
  }

  .pro-menu:hover > .pro-dropdown {
    opacity: 0;
    visibility: hidden;
    display: none;
  }

  .pro-menu > .pro-dropdown.show {
    opacity: 1;
    visibility: visible;
    display: block;
  }

  .pro-dropdown a {
    width: 100%;

    padding: 10px 40px;

    font-size: 14px;

    white-space: normal;

    box-sizing: border-box;
  }

}


/* =========================
   SMALL MOBILE
========================= */

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

    padding: 12px 18px 20px;
  }

  .nav-list a,
  .nav-link,
  .programs-button {
    font-size: 14px;
  }

  .pro-dropdown a {
    padding: 10px 35px;

    font-size: 14px;

    word-break: break-word;
  }

}

</style>
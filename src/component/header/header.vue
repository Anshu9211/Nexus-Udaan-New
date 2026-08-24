<template>
  <header class="header">
    <nav class="navbar">
      <router-link to="/" class="navbar-brand">
        <img :src="logo" alt="Nexus Udaan Logo" />
      </router-link>
      <button
        class="menu-toggle"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle navigation"><i :class="isMenuOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
      </button>
      <div class="navbar-menu"
        :class="{ 'menu-open': isMenuOpen }">
        <ul class="nav-list">
          <li>
            <router-link to="/" @click="closeMenu">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <button
              class="nav-link dropdown-toggle"
              @click="toggleDropdown('company')">
              Our Company <i class="bi bi-chevron-down"></i>
            </button>
            <ul
              class="dropdown-menu"
              :class="{ show: activeDropdown === 'company' }">
              <li>
                <router-link to="/about-us" target="_blank" @click="closeMenu">
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
              <li>
                <router-link to="/pro-data" target="_blank" @click="closeMenu">
                  Programs
                </router-link>
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


/* =========================
   NAV LINKS
========================= */

.nav-list > li {
  position: relative;
}

.nav-list a,
.nav-link {
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
    background 0.3s ease,
    transform 0.3s ease;
}


/* Hover */

.nav-list a:hover,
.nav-link:hover {
  color: #5ee7f7;
}


/* =========================
   DROPDOWN ARROW
========================= */

.dropdown-toggle i {
  font-size: 12px;

  transition: transform 0.3s ease;
}

.dropdown:hover .dropdown-toggle i {
  transform: rotate(180deg);
}


/* Remove default arrow */

.dropdown-toggle::after {
  display: none;
}


/* =========================
   DROPDOWN
========================= */

.dropdown-menu {
  position: absolute;

  top: calc(100% + 8px);
  left: 0;

  min-width: 210px;

  margin: 0;
  padding: 8px 0;

  list-style: none;

  background: #ffffff;

  border-radius: 10px;

  box-shadow:
    0 12px 35px rgba(0, 0, 0, 0.15);

  opacity: 0;
  visibility: hidden;

  transform: translateY(10px);

  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0.25s ease;
}


/* Desktop dropdown */

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

.dropdown-menu a {
  width: 100%;

  box-sizing: border-box;

  padding: 11px 18px;

  color: #243b53;

  font-size: 14px;

  border-radius: 6px;

  transition:
    background 0.25s ease,
    color 0.25s ease;
}


/* Dropdown hover */

.dropdown-menu a:hover {
  background: #eef9fb;
  color: #007f86;
}


/* =========================
   HAMBURGER
========================= */

.menu-toggle {
  display: none;

  border: none;
  background: transparent;

  font-size: 28px;

  color: #ffffff;

  cursor: pointer;

  transition:
    color 0.3s ease,
    transform 0.3s ease;
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
  .nav-link {
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


  /* Logo */

  .navbar-brand img {
    height: 42px;
  }


  /* Hamburger */

  .menu-toggle {
    display: block;
    z-index: 1100;
  }


  /* Mobile menu */

  .navbar-menu {
    position: absolute;

    top: 70px;
    left: 0;

    width: 100%;

    padding: 15px 25px 25px;

    box-sizing: border-box;

    background: #ffffff;

    box-shadow:
      0 10px 25px rgba(0, 0, 0, 0.12);

    display: none;
  }


  /* Open menu */

  .navbar-menu.menu-open {
    display: block;
  }


  /* Mobile nav list */

  .nav-list {
    width: 100%;

    flex-direction: column;
    align-items: stretch;

    gap: 3px;
  }


  .nav-list > li {
    width: 100%;
  }


  /* Mobile links */

  .nav-list a,
  .nav-link {
    width: 100%;

    box-sizing: border-box;

    justify-content: space-between;

    padding: 14px 12px;

    border-radius: 8px;

    color: #102a43;
  }


  /* Mobile hover */

  .nav-list a:hover,
  .nav-link:hover {
    color: #007f86;

    background: #eef9fb;
  }


  /* =========================
     MOBILE DROPDOWN
  ========================= */

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
  }


  /* Open dropdown */

  .dropdown-menu.show {
    display: block;

    opacity: 1;
    visibility: visible;
  }


  /* Dropdown links */

  .dropdown-menu a {
    padding: 11px 25px;

    color: #34495e;
  }


  .dropdown-menu a:hover {
    background: #e8f7f9;

    color: #007f86;
  }


  /* Disable desktop hover */

  .dropdown:hover .dropdown-menu {
    opacity: 0;
    visibility: hidden;

    display: none;
  }


  /* Show clicked dropdown */

  .dropdown .dropdown-menu.show {
    opacity: 1;
    visibility: visible;

    display: block;
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


  /* Logo */

  .navbar-brand img {
    height: 38px;
  }


  /* Hamburger */

  .menu-toggle {
    font-size: 26px;

    color: #ffffff;
  }


  /* Mobile menu */

  .navbar-menu {
    position: absolute;

    top: 100%;
    left: 0;
    right: 0;

    padding: 12px 18px 20px;

    background: #ffffff;

    z-index: 999;

    height: auto;
    min-height: 0;

    box-shadow:
      0 10px 25px rgba(0, 0, 0, 0.12);
  }


  /* Mobile links */

  .nav-list a,
  .nav-link {
    font-size: 14px;

    color: #102a43;
  }


  .nav-list a:hover,
  .nav-link:hover {
    color: #007f86;

    background: #eef9fb;
  }


  /* Dropdown */

  .dropdown-menu {
    background: #f8fbfc;
  }

  .dropdown-menu a {
    color: #34495e;
  }
}

</style>
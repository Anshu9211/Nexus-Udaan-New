import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CourceDetails from "../views/CourceDetails.vue";
import AboutUs from "../views/AboutUs.vue";
import JoinUs from "../views/ContactUs.vue";
import Programs from "../views/Programs.vue";
import Gallery from "../views/gall.vue";

let routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/Join-us",
    name: "contact",
    component:JoinUs,
  },
  {
    path: "/Different",
    name: "Careers",
    component:Programs,
     
  },
  {
    path: "/pro-data/:course",
    name: "Course",
    component: CourceDetails,
  },
  {
    path: "/gallery",
    name: "Course",
    component: Gallery,
  }
];
const router = createRouter({
 history: createWebHistory("/Nexus-Udaan-New/"),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
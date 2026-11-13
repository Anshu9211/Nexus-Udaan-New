<script setup>
import { nextTick, watch } from "vue";
import { useRoute } from "vue-router";
import carddetails from "../component/carddetails.vue";


let route = useRoute();
console.log("ROUTE:", route);

let showSelectedCourse = async () => {
  console.log("FUNCTION RUNNING");
  await nextTick();
  let course = route.params.course;
  
  console.log("COURSE:", course);
  console.log(course + " Hey Bro !");
  let startingCards = document.getElementById("pro-det");
  let allDetails = document.querySelectorAll(".info-details");

  if (!course) {
    if (startingCards) {
      startingCards.style.display = "block";
    }

    allDetails.forEach((section) => {
      section.style.display = "block";
    });

    return;
  }
  if (startingCards) {
    startingCards.style.display = "none";
  }

  allDetails.forEach((section) => {
    section.style.display = "none";
  });
  // Selected course show
  let selectedCourse = document.getElementById(course);

  if (selectedCourse) {
    selectedCourse.style.display = "block";

    setTimeout(() => {
      selectedCourse.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }
};
watch(
  () => route.params.course,
  () => {
    showSelectedCourse();
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <carddetails />
</template>
<script setup>
import { nextTick, watch } from "vue";
import { useRoute } from "vue-router";
import carddetails from "../component/carddetails.vue";

const route = useRoute();

const showSelectedCourse = async () => {
  await nextTick();

  const course = route.params.course;

  const startingCards = document.getElementById("pro-det");
  const allDetails = document.querySelectorAll(".info-details");

  // Agar /pro-data hai
  if (!course) {
    if (startingCards) {
      startingCards.style.display = "block";
    }

    allDetails.forEach((section) => {
      section.style.display = "block";
    });

    return;
  }

  // Starting cards hide
  if (startingCards) {
    startingCards.style.display = "none";
  }

  // Saare detailed cards hide
  allDetails.forEach((section) => {
    section.style.display = "none";
  });

  // Selected course show
  const selectedCourse = document.getElementById(course);

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

// First load + route change dono handle honge
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
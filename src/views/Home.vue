<template>
  <div>
    <Slider/>
    <SocialCard />
    <Features />
    <FeaturesGrid />
    <CardDetails />
    <JoinUs />
    <OurStory @mapClick="handleMapClick" />
  </div>
</template>

<script>
import CardDetails from "../component/carddetails.vue";
import Features from "../component/Features.vue";
import FeaturesGrid from "../component/FeaturesGrid.vue";
import OurStory from "../component/OurStory.vue";
import JoinUs from "../component/JoinUs.vue";
import SocialCard from "../component/socialcard.vue";
import Slider from "../component/slider/slider.vue"

export default {
  name: "Home",
  components: {
    CardDetails,
    Features,
    FeaturesGrid,
    OurStory,
    JoinUs,
    SocialCard,
    Slider
  },
  methods: {
    handleMapClick() {
      alert("Thank you for your interest! Visit our location on Google Maps.");
      console.log("Map clicked from OurStory component");
    },
  },
};
</script>

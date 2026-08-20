<template>
  <section class="placeholder-page">
    <div class="container text-center text-white">
      <h1>{{ title }}</h1>
      <p>This page is coming soon.</p>
      <router-link to="/" class="back-link">
        <i class="bi bi-arrow-left"></i> Back to Home
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "PlaceholderPage",
  props: {
    title: {
      type: String,
      default: "Page",
    },
  },
};
</script>

<style scoped>
.placeholder-page {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111;
  padding: 60px 20px;
}

.placeholder-page h1 {
  margin-bottom: 15px;
}

.placeholder-page p {
  margin-bottom: 25px;
  color: #ccc;
}

.back-link {
  color: #3d93d2;
  text-decoration: none;
  font-weight: 600;
}

.back-link:hover {
  text-decoration: underline;
}
</style>

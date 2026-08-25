<template>
  <div id="app">
    <Header />
     <main class="page-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./component/footer/footer.vue";
import Header from "./component/header/header.vue"

export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  overflow-x: hidden;
  background: black;
  font-family: Arial, Helvetica, sans-serif;
  
}
.page-content {
  padding-top: 80px;
}

@media (max-width: 992px) {
  .page-content {
    padding-top: 75px;
  }
}

@media (max-width: 576px) {
  .page-content {
    padding-top: 70px;
  }
}
</style>
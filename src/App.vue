<template>
  <div id="app">
    <Header />
    <router-view />
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
  background: #111;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
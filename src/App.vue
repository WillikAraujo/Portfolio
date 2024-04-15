<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$router.afterEach((to, from) => {
      document.body.classList.remove(`route-${from ? from.name : ""}`);
      document.body.classList.add(`route-${to.name}`);
    });
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}
</style>
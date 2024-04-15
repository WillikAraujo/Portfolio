<template>
  <TopHeader :color="'black'" />
  <MainHomeView />
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import MainHomeView from "../views/MainHomeView.vue";

export default {
  components: { MainHomeView, TopHeader },
};
</script>

<style scoped>
</style>
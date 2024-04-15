<template>
  <TopHeader :color="'white'" />
  <MainHabilidadesView />
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import MainHabilidadesView from "@/views/MainHabilidadesView.vue";
export default {
  components: { TopHeader, MainHabilidadesView },
};
</script>

<style scoped>
</style>

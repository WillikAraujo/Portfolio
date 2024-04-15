<template>
  <main>
    <HabilidadesComponent :habilidades="habilidades" />
    <SobreMimCompomenent />
  </main>
</template>

<script>
import { habilidadesData } from "@/data/habilidades.js";
import HabilidadesComponent from "@/components/HabilidadesComponent.vue";
import SobreMimCompomenent from "@/components/SobreMimCompomenent.vue";

export default {
  data() {
    return {
      habilidades: habilidadesData,
    };
  },

  components: { HabilidadesComponent, SobreMimCompomenent },
};
</script>

<style scoped>
main {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 450px) {
  main {
    margin: 0 25px;
    flex-direction: column;
  }
}
</style>
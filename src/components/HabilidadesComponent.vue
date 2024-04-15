<template>
  <div>
    <h1 class="titulo">{{ titulo }}</h1>
    <div
      v-for="habilidade in habilidades"
      :key="habilidade"
      class="habilidades"
    >
      <div class="right-hab">
        <img :src="habilidade.img.src" :alt="habilidade.img.alt" />
        <h3>{{ habilidade.area.toUpperCase() }}</h3>
      </div>
      <div class="divider">
        <img :src="divisorImg" alt="Divisor" />
      </div>
      <div class="card-hab">
        <img
          class="icon"
          v-for="especifica in habilidade.especificas"
          :key="especifica"
          :src="especifica.img.src"
          :alt="especifica.img.alt"
        />
      </div>
    </div>
  </div>
</template>

<script>
import divisorImg from "@/assets/imgs/divider.png";
export default {
  data() {
    return {
      titulo: "PRINCIPAIS HABILIDADES",
      divisorImg: divisorImg,
    };
  },
  props: ["habilidades"],
};
</script>

<style scoped>
main {
  margin: 0 100px;
}

.titulo {
  font-size: 40px;
  font-weight: 800;
  margin: 50px 0;
}
.habilidades {
  display: flex;
  align-items: center;
  justify-content: start;
}

.icon {
  width: 58px;
}

.habilidades:not(:last-child) {
  margin-bottom: 64px;
}

.right-hab {
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
}

h3 {
  color: rgba(58, 58, 58, 0.6);
  font-weight: 500;
}

.divider {
  margin-left: 25px;
}

.divider img {
  transform: translate3d(0px, 10px, 0px);
}

.card-hab {
  margin-left: 65px;
  padding: 22px 12px;
  border-radius: 14px;
  background: #3a3737;
  display: grid;
  justify-items: center;
  align-items: center;
  align-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px 10px;
}

@media (max-width: 450px) {
  .titulo {
    font-size: 32px;
    text-align: center;
  }
  .divider {
    margin-left: 0;
  }

  .divider img {
    transform: translate3d(0px, 10px, 0px);
  }

  .card-hab {
    margin-left: 10px;
  }

  .icon {
    width: 48px;
  }
}
</style>
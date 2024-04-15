<template>
  <main>
    <div class="line-1">
      <div class="title-page">
        <h1>
          OLÁ, <br />MEU NOME É <span>{{ nome }}</span
          >, <br />SOU
          <span>{{ profissao }}</span>
        </h1>
      </div>

      <div class="planeta">
        <img src="../assets/imgs/planet.png" alt="planeta" />
      </div>

      <SocialMedia />
    </div>
    <nav class="menu-center">
      <router-link to="habilidades">{{ textHabilidades }}</router-link>
      <router-link to="curriculo">{{ textCurriculo }}</router-link>
    </nav>
    <div class="terra">
      <img src="../assets/imgs/terra-branca.png" alt="" />
    </div>
  </main>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
export default {
  data() {
    return {
      nome: "WILLIK",
      profissao: "DESENVOLVEDOR WEB",
      textHabilidades: "ME CONHEÇA MELHOR",
      textCurriculo: "CURRÍCULO",
    };
  },

  components: { SocialMedia },
};
</script>

<style scoped>
main {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.line-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0;
}

h1 {
  font-size: 64px;
  color: #fff;
  font-weight: 100;
}

h1 span {
  font-weight: 800;
}

.menu-center {
  margin-top: 201px;
}

.menu-center a {
  font-size: 32px;
  color: #fff;
  font-weight: 600;
}

.menu-center a:not(:last-child) {
  margin-right: 40px;
}

.planeta {
  position: absolute;
  right: 650px;
  top: 0px;
  pointer-events: none;
  z-index: -1;
}

.planeta img {
  filter: grayscale(100%);
  pointer-events: none;
}

.terra {
  overflow: hidden;
  position: absolute;
  max-width: 527px;
  right: 0;
  bottom: 0;
  z-index: -2;
}

.terra img {
  position: relative;
  right: -100px;
  bottom: -200px;
}

@media (max-width: 475px) {
  main {
    margin: 20px 35px;
  }

  .line-1 {
    flex-direction: column;
    align-items: start;
  }

  h1 {
    font-size: 30px;
  }

  .menu-center {
    margin-top: 110px;
  }

  .menu-center a {
    font-size: 20px;
  }
  .planeta {
    right: 0;
    top: 0;
    overflow: hidden;
  }

  .planeta img {
    position: relative;
    right: -80px;
  }

  .terra img {
    position: relative;
    width: 100%;
    bottom: -200px;
    left: -200px;
    top: inherit;
  }
}
</style>
<template>
  <div class="social-media">
    <nav>
      <a v-for="rede in socialMedia" :key="rede" :href="rede.src"
        ><img :src="rede.imagem.src" :alt="rede.imagem.alt"
      /></a>
    </nav>
  </div>
</template>

<script>
import githubIcon from "@/assets/imgs/icons/github-icon.png";
import instagramIcon from "@/assets/imgs/icons/instagran-icon.png";
import linkedinIcon from "@/assets/imgs/icons/linkedin-icon.png";

export default {
  data() {
    return {
      socialMedia: [
        {
          id: 1,
          nome: "Github",
          src: "https://github.com/WillikAraujo",
          imagem: {
            alt: "Ícone do github",
            src: githubIcon,
          },
        },
        {
          id: 2,
          nome: "Instagram",
          src: "https://www.instagram.com/wiillik",
          imagem: {
            alt: "Ícone do instagram",
            src: instagramIcon,
          },
        },
        {
          id: 3,
          nome: "Linkedin",
          src: "https://www.linkedin.com/in/willik-araujo-10b517205/",
          imagem: {
            alt: "Ícone do Linkedin",
            src: linkedinIcon,
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  padding: 23px 15px;
}

nav a:not(:last-child) {
  margin-bottom: 28px;
}

@media (max-width: 475px) {
  nav {
    margin-top: 75px;
    padding: 10px 15px;
    flex-direction: row;
  }

  nav a {
    padding: 0;
  }
  nav a:not(:last-child) {
    margin-right: 37px;
    margin-bottom: 0;
  }
}
</style>
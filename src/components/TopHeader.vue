<template>
  <header :class="color === 'black' ? 'black' : 'white'">
    <div class="top-bar">
      <router-link to="/">PORTFÓLIO</router-link>
      <nav>
        <router-link to="/contato">CONTATO</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "black",
    },
  },
};
</script>

<style scoped>
.top-bar {
  max-width: 1240px;
  margin: 0 auto;
  padding: 48px 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid transparent;
}

header.white {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background: #fff;
}

header a {
  font-size: 32px;
  font-weight: 600;
}

header.black a {
  color: white;
}

header.white a {
  color: #3a3a3c;
}

@media (max-width: 450px) {
  header {
    padding: 0 35px;
  }

  header a {
    font-size: 20px;
    font-weight: 100;
  }
}
</style>
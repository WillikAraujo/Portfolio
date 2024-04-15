<template>
  <div class="card-sobre-mim">
    <h1 class="titulo">{{ titulo }}</h1>
    <h2 class="nome">{{ primeiroNome }}, {{ ultimoNome }}</h2>
    <p class="observacoes">{{ idade }} anos, {{ cidade }} - {{ uf }}</p>
    <p class="mensagem">{{ mensagem }}</p>
    <p class="aviso">{{ aviso }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Sobre mim",
      primeiroNome: "Willik",
      ultimoNome: "Pimenta",
      idade: "24",
      cidade: "Brasília",
      uf: "DF",
      mensagem:
        "ATUALMENTE TRABALHANDO COM ANÁLISE DE DADOS, MAS CONSTANTEMENTE ESTUDANDO E ME APRIMORANDO PARA CONQUISTAR O SONHO DE VIRAR PROGRAMADOR.ESTOU CONCLUINDO A FACULDADE DE ANÁLISE E DESENVOLVIMENTO DE SISTEMAS; TENHO UMA PAIXÃO ENORME POR FRAMEWORKS REATIVOS, DESENVOLVIMENTO DE DATABASES E O MAIS IMPORTANTE, TRANSFORMAR AS IDEIAS EM APLICAÇÕES DO DIA A DIA.",
      aviso:
        "ESTE PORTFÓLIO DE APRESENTAÇÃO FOI FEITO COM A AJUDA DO FRAMEWORK VUE.JS, O CÓDIGO-FONTE ESTARÁ DISPONÍVEL NO MEU GITHUB. UTILIZEI O NODE.JS E MONGODB PARA CRIAR E DISPONIBILIZAR AS APIS NECESSÁRIAS PARA CADA ROTA DO PORTFÓLIO.",
    };
  },
};
</script>

<style scoped>
.card-sobre-mim {
  margin-left: 150px;
  padding: 40px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50px;
}

.titulo {
  font-size: 40px;
}

.nome {
  font-size: 32px;
  font-weight: 500;
  margin-top: 15px;
}

p {
  font-size: 20px;
  font-weight: 100;
  text-align: justify;
}
p:not(:nth-of-type(1)) {
  margin-top: 40px;
}

.aviso {
  margin-bottom: 40px;
}

@media (max-width: 450px) {
  .card-sobre-mim {
    margin-left: 0;
    margin-top: 80px;
    padding: 40px 30px;
  }

  .titulo {
    font-size: 32px;
  }
  .nome {
    font-size: 24px;
  }

  p {
    font-size: 18px;
  }
}
</style>
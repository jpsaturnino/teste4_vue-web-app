<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <div>
      <input type="search" placeholder="Digite o texto a ser buscado..." v-model="texto" />
      <button @click="buscar">Buscar</button>
      <p>{{ trechos_encontrados.length }} trechos encontrados com "{{texto}}"</p>
    </div>
    <div class="bloco-trechos">
      <div class="col">
        <ul>
          <li v-for="trecho in trechos_encontrados" :key="{trecho}">
            {{ trecho }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../services/Api.js";

export default {
  name: "Busca",
  props: {
    titulo: String
  },
  data() {
    return {
      texto: "",
      trechos_encontrados: []
    };
  },
  methods: {
    async buscar() {
      const response = await api.post("/busca-textual",{texto: this.texto});
      this.trechos_encontrados = response.data;
    }
  }
};
</script>

<style scoped>
button {
  background-color: #42b983;
  border: none;
  padding: 5px 15px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  transition: 300ms;
  color: #fff;
}
button:hover {
  background-color: #2f855a;
}
input {
  width: 100%;
  padding: 3px;
  border: #42b983 solid 2px;
  border-radius: 4px;
  transition: 200ms;
}
input:focus {
  outline: none;
  border: #389c6f solid 2px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bloco-trechos {
  display: flex;
  padding: 5px;
  overflow: auto;
  width: 70vw;
  height: 500px;
  justify-content: center;
  margin: 3vh 0 3vh 0;
}
.col {
  display: flex;
  flex-direction: column;
  align-items: center;
}
li {
  list-style: none;
  padding: 5px;
  border: #42b983 solid 1px;
  border-radius: 5px;
  margin: 5px;
  font-size: 15px;
  font-weight: bold;
}
ul {
  list-style: none;
  padding: 0;
}
</style>

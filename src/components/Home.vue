<template>
  <div>
    <aside class="menu">
      <p class="menu-label">
        Menu
      </p>
      <ul class="menu-list">
        <li>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/upload">Subir CSV</router-link></li>
            <li><a v-on:click="getDataAsCsv">Exportar CSV</a></li>
            <li><a v-on:click="getTemplate">Descargar template</a></li>
          </ul>
        </li>
      </ul>
      <p class="menu-label">
        Visualización
      </p>
      <ul class="menu-list">
        <li>
          <ul>
            <li><router-link to="/charts">Gráficas</router-link></li>
          </ul>
        </li>
      </ul>
    </aside>
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="animated rollIn">¡Bienvenido/a!</h1>
          <ul class="animated slideInLeft">
            <li>1. Descarga el template</li>
            <li>2. Llénalo</li>
            <li>3. Sube</li>
            <li>4. Observa</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script>
export default {
  name: 'home',
  methods: {
    getTemplate (event) {
      if (event) window.open('http://localhost:5432/template', '_blank')
    },
    getDataAsCsv (event) {
      if (event) window.open('http://localhost:5432/company-data/csv', '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hero.is-success {
    background-color: #00d1b2;
    color: #fff;
  }
  h1, h2 {
    font-weight: normal;
  }
  aside {
    float: left;
    text-align: left;
  }
  .menu-label{
    margin: 20px;
    text-align: center;
  }
</style>

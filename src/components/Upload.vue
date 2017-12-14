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
    <section class="input-container">
      <form class="animated bounce" action="http://localhost:5432/company-data" enctype="multipart/form-data" method="post">
        <div class="field">
          <h1>Sube tu archivo aquí</h1>
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="file" placeholder="Email" name="file">
          </p>
        </div>
        <div class="field">
          <p class="control" >
            <button class="button block is-primary" type="submit">
              Subir archivo
            </button>
          </p>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'UploadComponent',
    data () {
      return {
        datacollection: null
      }
    },
    created () {},
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

<style scoped>
  .input-container{
    background-color: #fff;
    color: black;
    display: block;
    margin-left: 20%;
    margin-right: 5%;
    padding-top: 20%;
    
  }
  h1, h2 {
    font-weight: normal;
  }
  aside {
    float: left;
    position: fixed;
    text-align: left;
    background-color: #00d1b2;
    height: 100%;
  
  }
  .menu-label{
    margin: 20px;
    text-align: center;
    color: white;
  }
  a {
    color: white;
  }
</style>

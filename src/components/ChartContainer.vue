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
            <li><router-link to="/chartjs">Gráficas</router-link></li>
          </ul>
        </li>
      </ul>
    </aside>
    <section class="chart-container">
      <h1 class="animated bounce">Gráficas</h1>
    
      <reactive v-if="datacollection" :chart-data="datacollection"></reactive>   
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  import Reactive from '@/components/Reactive'

  export default {
    name: 'ChartContainer',
    components: {
      Reactive
    },
    data () {
      return {
        datacollection: null
      }
    },
    created () {
      this.getChartData()
    },
    methods: {
      fillData (fillableData) {
        const labels = Object.keys(fillableData[0])
        const data = fillableData || []
        const cleanData = data.reduce((prev, curr) => {
          prev.happy += parseInt(curr.happy)
          prev.neutral += parseInt(curr.neutral)
          prev.unhappy += parseInt(curr.unhappy)

          return prev
        }, {happy: 0, neutral: 0, unhappy: 0})

        this.datacollection = {
          labels,
          datasets: [
            {
              label: 'Diciembre 2017',
              backgroundColor: '#f87979',
              data: Object.values(cleanData)
            }
          ]
        }
      },
      async getChartData () {
        try {
          const response = await axios.get('http://localhost:5432/company-data')
          response.data = response.data.map(elem => {
            delete elem['_id']
            delete elem['insertionDate']
            return elem
          })

          this.fillData(response.data)
        } catch (error) {
          console.log(error)
        }
      },
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

  .chart-container{
    display: block;
    margin-left: 18%;
    padding-bottom: 5%;
    padding-top: 5%;
  }

  @media only screen and (max-width: 500px) {
    aside {
      display:none;
    }

    .chart-container{
      display: block; 
      margin: 20px;
    }
  }
</style>

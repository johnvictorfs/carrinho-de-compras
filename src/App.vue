<template>
  <div id="app">
    <NavBar></NavBar>
    <b-container>
      <b-row class="justify-content-md-left">
        <b-col md="auto">
          <ProductsTable :products="products"/>
        </b-col>
        <b-col md="auto">
          <!--<b-table striped hover :items="selected" />-->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import ProductsTable from './components/ProductsList.vue'
  import NavBar from './components/NavBar.vue'
  import axios from 'axios';

  export default {
    name: 'app',
    components: {
      ProductsTable,
      NavBar
    },
    data: () => ({
      products: [],
    }),
    created() {
      axios.get("https://api.jsonbin.io/b/5c63035e1198012fc895fba7").then(response => {
        this.products = response.data;
      })
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

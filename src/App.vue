<template>
  <div id="app">
    <NavBar></NavBar>
    <b-container>
      <b-row class="justify-content-md-left">
        <b-col md="auto" class="mt-3">

          <ProductsTable :products="products">
            <div class="d-flex justify-content-center mb-3" v-if="loading">
              <b-spinner label="Carregando..."/>
            </div>
          </ProductsTable>
        </b-col>
        <b-col></b-col>
        <b-col md="auto" class="mt-3">
          <ProductsSelected></ProductsSelected>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import ProductsTable from './components/ProductsList.vue'
  import ProductsSelected from './components/ProductsSelected.vue'
  import NavBar from './components/NavBar.vue'
  import axios from 'axios';

  export default {
    name: 'app',
    components: {
      ProductsTable,
      ProductsSelected,
      NavBar
    },
    data: () => ({
      products: [],
      loading: false
    }),
    created() {
      this.loading = true;
      axios.get("https://api.jsonbin.io/b/5c63035e1198012fc895fba7").then(response => {
        this.products = response.data;
        this.loading = false;
      })
    },
  }
</script>

<style>
  #app {
    font-family: 'Kanit', 'Rubik', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

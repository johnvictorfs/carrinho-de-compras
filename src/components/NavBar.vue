<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="fixed-top dark-grad">
    <b-navbar-brand href="/">
      <img :src="require('../assets/cart-icon.png')" width="32" height="32" class="d-inline-block align-top" alt="Cart Logo" />
      Carrinho de Compras
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"/>

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item disabled>
          feito por João Victor
        </b-nav-item>
        <b-nav-item href="https://github.com/johnvictorfs/carrinho-de-compras" target="_blank">
          <i class="fab fa-github"></i>
        </b-nav-item>
        <b-nav-item href="mailto:johnvictorfs@gmail.com" target="_blank">
          <i class="far fa-envelope"></i>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .dark-grad {
    background-image: linear-gradient(to left, #363535, #737872);
  }
</style>

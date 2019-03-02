<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="fixed-top">
    <b-navbar-brand href="/">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"/>

    <b-collapse is-nav id="nav_collapse">
      <!-- Left aligned nav items -->
      <b-navbar-nav>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item disabled>
          feito por João Victor
        </b-nav-item>
        <b-nav-item href="https://github.com/johnvictorfs/desafio-fb" target="_blank">
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

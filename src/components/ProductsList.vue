<template>
  <b-container>
    <b-form-group>
      <b-list-group>
        <b-form-input class="mb-3" v-model="search" type="text" placeholder="Pesquisar"></b-form-input>
        <b-card v-for="product in currentPageProducts" :key="product.id" class="shadow mb-3 bg-white rounded">
          <b-card-title>
            <b-form-checkbox v-model="selected" :value="product" @input="updateProducts">
              {{ toTitleCase(product.descricao) }}
            </b-form-checkbox>
          </b-card-title>
          <b-card-sub-title>
            <b-badge variant="info">
              <strong>R$ {{ product.valor.replace('.', ',') }}</strong>
            </b-badge>
          </b-card-sub-title>
        </b-card>
      </b-list-group>
    </b-form-group>
    <b-pagination-nav base-url="#" :number-of-pages="pages" v-model="currentPage"/>
  </b-container>
</template>

<script>
  import helper from '../helper.js'

  export default {
    name: 'ProductsTable',
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    data: () => ({
      search: '',
      currentPage: 1,
      pageSize: 5
    }),
    computed: {
      selected: {
        get() {
          return this.$store.state.selectedProducts;
        },
        set(products) {
          this.$store.dispatch('updateProducts', products).then();
        }
      },
      pages() {
        /**
         * Retorna o número de páginas que serão necessárias para acomodar a quantidade de produtos existentes
         *
         * @returns Number
         */
        let pages = Math.floor(this.filteredProducts.length / this.pageSize)
        if (pages <= 1) {
          return 1;
        }
        return pages;
      },
      currentPageProducts() {
        /**
         * Filtra os produtos visíveis na página de acordo com a página atual
         *
         * @returns Array
         */
        let start = (this.currentPage * this.pageSize) - this.pageSize;
        let end = start + this.pageSize;
        return this.filteredProducts.slice(start, end);
      },
      filteredProducts() {
        /**
         * Filtra os produtos visíveis na página de acordo com a pesquisa do usuário, também usa
         * o filtro da página atual em consideração
         *
         * @returns Array
         */
        return this.products.filter(prod => {
          return prod.descricao.toLowerCase().includes(this.search.toLowerCase());
        })
      }
    },
    methods: {
      updateProducts(products) {
        this.$store.dispatch('updateProducts', products).then();
      },
      toTitleCase: helper.toTitleCase
    }
  }
</script>


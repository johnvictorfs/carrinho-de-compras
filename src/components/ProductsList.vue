<template>
  <b-form-group>
    <b-list-group>
      <b-card v-for="product in visibleProducts" :key="product.id" class="shadow mb-3 bg-white rounded">
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
    <b-pagination-nav base-url="#" :number-of-pages="pages" v-model="currentPage"/>
  </b-form-group>
</template>

<script>
  import helper from '../helper.js'

  export default {
    name: 'ProductsTable',
    props: {
      products: Array
    },
    data: () => ({
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
        if (this.products.length === 0) {
          return 1;
        }
        return Math.ceil(this.products.length / this.pageSize) - 1;
      },
      visibleProducts() {
        /**
         * Filtra os produtos visíveis na página em determinado momento de acordo com a página atual
         *
         * @returns Array
         */
        return this.products.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
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


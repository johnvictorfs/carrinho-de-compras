<template>
  <b-form-group>
    <b-list-group>
      <b-card v-for="product in products" :key="product.id" class="shadow mb-3 bg-white rounded">
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
</template>

<script>
  import helper from '../helper.js'

  export default {
    name: 'ProductsTable',
    props: {
      products: Array
    },
    computed: {
      selected: {
        get() {
          return this.$store.state.selectedProducts
        },
        set(products) {
          this.$store.dispatch('updateProducts', products).then()
        }
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


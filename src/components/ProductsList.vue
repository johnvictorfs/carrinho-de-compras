<template>
  <b-form-group>
    <b-list-group>
      <b-card v-for="product in products" :key="product.id" class="shadow p-3 mb-3 bg-white rounded">
        <b-card-title>
          <b-form-checkbox v-model="selected" :value="product">
            {{ toTitleCase(product.descricao) }}
          </b-form-checkbox>
        </b-card-title>
        <b-card-sub-title>
          <b-button disabled variant="info">
            <strong>R$ {{ product.valor.replace('.', ',') }}</strong>
          </b-button>
        </b-card-sub-title>
      </b-card>
    </b-list-group>
  </b-form-group>
</template>

<script>
  export default {
    name: 'ProductsTable',
    props: {
      products: Array
    },
    data: () => ({
      selected: []
    }),
    methods: {
      toTitleCase(str) {
        /**
         * https://stackoverflow.com/a/196991
         * Converte string pra formato 'Title Case'
         *
         * @returns String
         */
        return str.replace(
          /\w\S*/g,
          function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }
    }
  }
</script>

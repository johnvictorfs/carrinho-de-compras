<template>
  <div class="fixed-center">
    <b-card header-tag="header" class="shadow bg-white rounded mb-3">
      <h3 slot="header" class="mb-0">Produtos Selecionados</h3>
      <b-card-text>
        <b-table responsive striped hover show-empty :items="selectedProducts" :fields="fields">
          <template slot="empty">
            <b-alert show variant="warning">Nenhum Produto Selecionado</b-alert>
          </template>
          <template slot="descricao" slot-scope="data">
            {{ toTitleCase(data.item.descricao) }}
          </template>
          <template slot="valor" slot-scope="data">
            R$ {{ data.item.valor.replace('.', ',') }}
          </template>
        </b-table>
        <b-button variant="danger" @click="clearProducts" :disabled="selectedProducts.length === 0">
          Limpar Carrinho
          <i class="fas fa-trash"></i>
        </b-button>
      </b-card-text>
    </b-card>
    <b-card class="shadow bg-white rounded" header-tag="header">
      <h6 slot="header" class="mb-0">
        Valor Total:
        <b-button disabled>
          {{ productsSum | formatCurrency }}
        </b-button>
      </h6>
      <b-card-text>
        <small class="text-muted">
          <b-button variant="outline-success" :disabled="selectedProducts.length === 0">
            Finalizar Compra <i class="fas fa-shopping-cart"></i>
          </b-button>
        </small>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
  import helper from '../helper.js'

  export default {
    name: "ProductsSelected",
    data: () => ({
      fields: [
        {key: 'descricao', label: 'Nome'},
        {key: 'valor', label: 'Preço'}
      ]
    }),
    filters: {
      formatCurrency: function (value) {
        /**
         * Formata um número para string como moeda real (Ex: 15.5000 -> "R$ 15,50")
         *
         * @param {Number} value
         * @returns String
         */
        return "R$ " + value.toFixed(2).toString().replace('.', ',');
      }
    },
    computed: {
      selectedProducts() {
        return this.$store.state.selectedProducts;
      },
      productsSum() {
        /**
         * Retorna a soma dos valores de todos os produtos selecionados
         *
         * @returns Number
         */
        if (this.selectedProducts.length === 0) {
          return 0;
        }
        let total = 0;
        for (let i = 0; i < this.selectedProducts.length; ++i) {
          total += parseFloat(this.selectedProducts[i].valor);
        }
        return total;
      }
    },
    methods: {
      toTitleCase: helper.toTitleCase,
      clearProducts() {
        this.$store.dispatch('clearProducts').then();
      }
    }
  }
</script>

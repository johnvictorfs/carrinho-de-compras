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
          <template slot="remove" slot-scope="data">
            <b-button size="sm" variant="danger" @click="removeProduct(data.item)">
              <i class="fas fa-times"></i>
            </b-button>
          </template>
        </b-table>
        <b-button variant="danger" @click="clearModal = true" :disabled="selectedProducts.length === 0">
          Limpar Carrinho
          <i class="fas fa-trash"></i>
        </b-button>
      </b-card-text>
    </b-card>
    <b-card class="shadow bg-white rounded mb-3" header-tag="header">
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

    <ConfirmModal
            v-model="clearModal"
            title="Limpar Carrinho"
            text="Tem certeza que deseja limpar o Carrinho de Compras?"
            @confirm="clearProducts"
    ></ConfirmModal>

  </div>
</template>

<script>
  import helper from '../helper.js'
  import ConfirmModal from './ConfirmModal.vue'

  export default {
    name: "ProductsSelected",
    components: {
      ConfirmModal
    },
    data: () => ({
      clearModal: false,
      fields: [
        {key: 'descricao', label: 'Nome', sortable: true},
        {key: 'valor', label: 'Preço', sortable: true},
        {key: 'remove', label: ''}
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
        let total = 0;
        for (let i = 0; i < this.selectedProducts.length; ++i) {
          total += parseFloat(this.selectedProducts[i].valor);
        }
        return total;
      }
    },
    methods: {
      toTitleCase: helper.toTitleCase,
      removeProduct(item) {
        this.$store.dispatch('removeProduct', item).then();
      },
      clearProducts() {
        this.clearModal = false;
        this.$store.dispatch('clearProducts').then();
      }
    }
  }
</script>

<template>
  <b-modal centered v-model="activated" :title="title">
    <p>{{ text }}</p>

    <div slot="modal-footer" class="w-100">
      <b-button-toolbar class="float-right">

        <b-button-group class="mx-1">
          <b-button size="sm" variant="danger" @click="activated = false">
            <i class="fas fa-times"></i>
            {{ cancelText }}
          </b-button>
        </b-button-group>

        <b-button-group class="mx-1">
          <b-button size="sm" variant="success" @click="$emit('confirm')">
            <i class="fas fa-check"></i>
            {{ confirmText }}
          </b-button>
        </b-button-group>

      </b-button-toolbar>
    </div>
  </b-modal>
</template>

<script>
  export default {
    name: "ConfirmModal",
    data: () => ({
      activated: false
    }),
    watch: {
      activated(value) {
        /**
         * Observa 'activated' para que o Modal possa ser fechado do componente Pai, visto que ele pode ser fechado
         * com a tecla Esc, clicando fora do Modal, ou clicando no botão de Cancelar
         *
         * @param value
         */
        this.$emit('input', value);
      },
      value(value) {
        /**
         * Atualiza varíavel local 'activated' de acordo com o v-model do componente, para não editar props diretamente
         *
         * @param value
         */
        this.activated = value;
      }
    },
    props: {
      value: {
        type: Boolean
      },
      title: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      cancelText: {
        type: String,
        required: false,
        default: 'Cancelar'
      },
      confirmText: {
        type: String,
        required: false,
        default: 'Confirmar'
      }
    }
  }
</script>
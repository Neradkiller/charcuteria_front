<template>
  <div>
    <v-col col="4">
      <v-card
        :loading="loading"
        class="mx-auto"
        max-width="374"
      >

        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>{{ data.nombre }}</v-card-title>

        <v-card-text>
          <div class="my-4 subtitle-1">
            Marca: {{ data.marca }}
          </div>

          <div class="my-4 subtitle-1">
            <v-icon>mdi-currency-usd</v-icon>
            {{ data.precio }}
          </div>

          <div class="my-4 subtitle-1">
            <v-icon>mdi-weight-kilogram</v-icon>
            {{ data.peso_kg }}
          </div>

          <div>
            <v-icon>mdi-comment-text-outline</v-icon>&nbsp;
            {{ data.descripcion }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn
            color="blue"
            text
            block
            @click="comprar()"
          >
            Comprar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  name: 'Producto',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      loading: false
    }
  },
  computed: {
    estaLogeado() {
      return this.$store.state.token.length !== 0;
    }
  },
  methods: {
    comprar() {
      if(!this.estaLogeado) {
        // TODO: Mostrar formulario de registro e inicio de sesión.
        return;
      }
    }
  }
}
</script>

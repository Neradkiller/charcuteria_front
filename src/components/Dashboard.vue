<template>
  <div>
    <div v-if="esCliente">
      <v-container>
        <v-row class="text-center">
          <v-col>
            <h1 class="display-2 font-weight-bold mb-3">
              ¡Bienvenido!
            </h1>
            <p class="subheading font-weight-regular">
              A continuación se muestran los productos disponibles.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div v-if="esAdmin">
      Admin
    </div>
    <productos v-if="esCliente" :productos="obtenerProductos()"></productos>
  </div>
</template>

<script>
import Productos from '@/components/Productos.vue';

export default {
  name: 'Dashboard',
  props: {
    tipoUsuario: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      loading: false
    }
  },
  methods: {
    obtenerProductos() {
      return this.$store.state.productos;
    }
  },
  computed: {
    esCliente() {
      return this.tipoUsuario === 'C';
    },
    esAdmin() {
      return this.tipousuario === 'A';
    }
  },
  components: {
    'productos': Productos
  }
}
</script>

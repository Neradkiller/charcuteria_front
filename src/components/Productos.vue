<template>
  <div>
    <v-container>
      <v-row>
        <producto v-for="(producto, index) in productos" :key="index" :data="producto"></producto>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Producto from '@/components/Producto.vue';

export default {
  name: 'Productos',
  props: {
    productos: {
      type: Array,
      required: true
    }
  },
  components: {
    'producto': Producto
  }
}
</script>

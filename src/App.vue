<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h3 class="text-h6 font-weight-regular">
          La Charcutería
        </h3>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        v-if="!estaLogeado"
        text
      >
        <span class="mr-2">Registrarse</span>
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>
      <v-btn
        v-if="!estaLogeado"
        text
      >
        <span class="mr-2">Iniciar Sesión</span>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
      <v-btn
        v-if="estaLogeado"
        text
      >
        <span class="mr-2">Cerrar Sesión</span>
        <v-icon>mdi-exit-run</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <Dashboard tipoUsuario="C" />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  },
  data: () => ({
    //
  }),
  computed: {
    estaLogeado() {
      return this.$store.state.token.length !== 0;
    }
  }
};
</script>

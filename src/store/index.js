import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    productos: [
      {
        'codigo': '54687',
        'nombre': 'Queso',
        'descripcion': 'Bulde Quesuo',
        'marca': 'Torondoy',
        'tipo': 'Queso',
        'fecha_vencimiento': '2021-02-28',
        'precio': 5,
        'peso_kg': 3
      },
      {
        'codigo': '54687',
        'nombre': 'Jamón',
        'descripcion': 'Ninguna',
        'marca': 'Hermo',
        'tipo': 'Jamón',
        'fecha_vencimiento': '2021-02-28',
        'precio': 5,
        'peso_kg': 3
      },
      {
        'codigo': '54687',
        'nombre': 'Chorizo',
        'descripcion': 'Sin detalles',
        'marca': 'Montserratina',
        'tipo': 'Chorizo',
        'fecha_vencimiento': '2021-02-28',
        'precio': 5,
        'peso_kg': 3
      },
      {
        'codigo': '54687',
        'nombre': 'Queso',
        'descripcion': 'Queso Blanco Duro',
        'marca': 'Blanco',
        'tipo': 'Queso',
        'fecha_vencimiento': '2021-02-28',
        'precio': 5,
        'peso_kg': 3
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

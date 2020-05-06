<template>
  <div id="app">
    <div id="nav">
      HOLA KEVIN PAGINA PRINCIPAL
      <!-- Declarar etiqueta creada -->
    <Navigation></Navigation>
    </div>
    <router-view/>
  </div>
</template>

<!-- poner script para que funcione el nav -->

<script>
//@ significa que busaca desde el src
import Navigation from '@/components/layout/Navigation'

export default {
  //declarar componentes
  components:{
    Navigation
  }
}
</script>
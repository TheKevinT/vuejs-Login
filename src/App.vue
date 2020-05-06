<template>
  <div id="app">
    <div id="nav">
      HOLA KEVIN PAGINA PRINCIPAL
      <!-- Declarar etiqueta creada -->
    <Navigation />
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


<!--importar estilos  -->
<style lang="scss">
  
    @import './scss/App.scss';
</style>
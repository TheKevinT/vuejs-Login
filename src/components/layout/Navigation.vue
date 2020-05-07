<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
   <router-link class="navbar-item" to='/' > 
      <h3 class="title is-3">LOGO</h3>
    </router-link>

    <a role="button" class="navbar-burger burger" :class="{'is-active' : isOpen}" @click.prevent="toggleMenu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active' : isOpen}">
    <div class="navbar-start">
      <router-link class="navbar-item" to='/'>
        Home
    </router-link> 

      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">



    <template v-if="user">
        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
            {{ user.displayName || user.email }}
            </a>

            <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/dashboard">
                Dashboard
            </router-link >
            <a class="navbar-item" @click.prevent="logout">
                Cerrar Sesión
            </a>

            </div>
        </div>
    </template>

        <template v-else>

        <div class="buttons">
                <router-Link class="button is-primary" to='/register'>
                    <strong>Registrarme</strong>
                </router-Link>
                <router-Link class="button is-light" to='/login'>
                    Iniciar Sesión
                </router-Link>
                </div>
        
        </template>



       
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import firebase from 'firebase'



//menu de navegacion responsive
export default {
    //crear propiedades, retornar objetos
    data() {
        return {

            isOpen:false,
            user:null
        }
    },
    methods: {
        //para abrir y cerrar
        toggleMenu(){
            const status = !this.isOpen
            this.isOpen = status

        },
    //cerrar sesion
        logout(){
            firebase.auth().signOut().then(()=>{
                this.$router.push({name: 'login'})
            })
        },

       
        
    },

    //ciclo de vida del componente --> cuando se crea el componente
     //recuperar el usuario que inicio sesion
    created(){
            firebase.auth().onAuthStateChanged(user =>{
                if(user){
                    this.user = user
                }else{
                    this.user = null
                }
            } )
        }
}
</script>
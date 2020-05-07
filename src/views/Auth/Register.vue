<template>
    <div class="container">
        <div class="columns">
            <div class="column is-6 is-offset-3">

                <h3 class="title is-3">CREAR UNA CUENTA</h3><hr>
            
                <form action="#" @submit.prevent="register">
                
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="e.g Alex Smith">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
                        </div>
                    </div>


                     <div class="field">
                        <label class="label">Contraseña</label>
                        <div class="control">
                            <input class="input" type="password" >
                        </div>
                    </div>
                
                <button type="submit" class="button is-primary">Registrarme</button>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Register',
    methods: {
        //para que no se envie el formulario al dar clic vacio
        register(){
         
        }
    },
}
</script>
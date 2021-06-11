<template>
    <div>
        <div id="footer" class="center">
            <div class="center">
            <v-row md="3" class="center">
                <v-col>
                    <h4>Redes Sociales</h4>
                    <div>
                        <v-btn icon><v-icon>mdi-twitter</v-icon></v-btn> |
                                    <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn> |
                                    <v-btn icon><v-icon>mdi-instagram</v-icon></v-btn> |
                                    <v-btn icon><v-icon>mdi-youtube</v-icon></v-btn> |
                                    <v-btn icon><v-icon>mdi-github</v-icon></v-btn>
                    </div>
                </v-col>
                <v-col>
                    <h4>Contacto</h4>
                    <p><v-icon>mdi-phone</v-icon>+54 1145459528</p>
                    <p><v-icon>mdi-email</v-icon>hola@thegordoylargo.com</p>
                </v-col>
                <v-col>
                    <h4>Encontranos</h4>
                    <p><v-icon>mdi-earth</v-icon>Florido 594(Centro micro,CABA)</p>
                </v-col>
            </v-row>
            </div>
        </div>
         <v-footer id="footeer" class="center">
                
         <p class="secondary--text center"> {{ new Date().getFullYear() }} — L.V<v-icon>mdi-copyright</v-icon></p>
        
            </v-footer>
    </div>
</template>
<script>

export default {
    name: 'footer',
    components:{
       
    },
    data: () =>{
        return{
           
        }
    }
}
</script>
<style scoped>
#footer{
    background-color: rgb(100, 100,100);
    height: 150px;
}
.center{
    display:flex;
     justify-content: center;
    align-items: center;
    text-align: center;
}
#footeer{
    background-color: rgb(50, 50, 50);
}
</style>
        
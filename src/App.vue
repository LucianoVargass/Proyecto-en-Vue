<template>
  <v-app>
    <v-card
    tile
    > 
      <v-toolbar
        app
        dense 
        dark
        >
          <v-btn
          icon
          @click="drawe =! drawe"
          >
            <v-icon>
              mdi-menu
              </v-icon>
          </v-btn>
        <v-toolbar-title>
          The Guard of the code
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <div>
          <a href="#home">Inicio</a>
          <a href="#nosotros">Nostros</a> 
          <a href="#proyectos">Proyectos</a> 
          <a href="contacto">Contacto</a>
          </div>
        </v-toolbar>
    </v-card>


    <v-navigation-drawer
      app
      dark
      v-model="drawe"
      temporary
      >
        <v-list-item
        class="mt-5"
        >
          <v-list-item-avatar>
          
            <v-img src="./assets/perfil.jpg" />
          
          </v-list-item-avatar>

          <v-list-item-content>

            <v-list-item-title
              class="font-weight-light"
            > 
              Richard Gaillardo
            </v-list-item-title>
          
          </v-list-item-content>
        </v-list-item>

            <v-divider></v-divider>

            <v-row 
              class="mt-3"
            >
              <v-col>
                <v-list-item
                  link
                >
                  <v-btn
                    outlined
                    to="/"
                  >
            <v-list-item-icon>
              <v-icon> 
                mdi-home
              </v-icon>
           
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>
                  Home
                </v-list-item-title>
          </v-list-item-content>
               </v-btn>
           </v-list-item>
               <v-list-item link>
                <v-btn outlined  >
          <v-list-item-icon>
            <v-icon>mdi-forum</v-icon>
           
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
               </v-btn>
           </v-list-item>
            <v-list-item link>
                <v-btn outlined  >
          <v-list-item-icon>
            <v-icon>mdi-cart</v-icon>
           
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Shop</v-list-item-title>
          </v-list-item-content>
               </v-btn>
           </v-list-item>
            <v-list-item link>
                <v-btn outlined  >
          <v-list-item-icon>
            <v-icon>mdi-book-open-variant</v-icon>
           
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Tareas</v-list-item-title>
          </v-list-item-content>
               </v-btn>
           </v-list-item>
              </v-col>
            </v-row>
    </v-navigation-drawer>

    
    <v-content>
      <menu-icon />
      <router-view/>
    </v-content>
    <Footer id="contacto" />
  </v-app>
  
</template>

<script>

import Footer from '../src/components/Footer.vue';

export default {
  name: 'App',

  components: {
  Footer
    
  },

  data ()  {
    return {
      //mdi-view-dashboard
      drawe: false,
    
      
    }
  },
};
</script>
<style scoped>
a{
  color: white !important;
  margin-left: 10px;
  text-decoration: none;
  
}
a:hover{
  color: grey !important;
}
</style>
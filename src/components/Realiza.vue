<template>
    <v-container>
      <div
        class="center"
      >
          <h3>
              Acompañanos a realizar tus sueños
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa consequuntur ad quibusdam porro quisquam quam!
          </p>
      </div>
      <div
      class="mt-5">
        <v-row>
            <v-col>
               <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum harum autem ipsam eligendi dolorem id debitis ratione consequuntur ea libero. Temporibus nemo obcaecati corrupti iure!
               </p>
                <v-dialog
                    v-model="dialog"
                    width="500"
                >
                    <template 
                        v-slot:activator="{ on, attrs }"
                    >
                        <v-btn 
                            small
                            outlined
                            v-bind="attrs"
                            v-on="on"
                        >
                            Saber mas
                        </v-btn>
                    </template>
                  <v-card>
                        <v-card-title
                            class="text-h5 grey lighten-2"
                        >
                            Lorem ipsum dolor sit.
                        </v-card-title>

                        <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                text
                                @click="dialog = false"
                            >
                                Salir
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                
            </v-col>
            <v-col
              v-for="(rombos, i) in items"
              :key="i"
              md="2"
            >
                <v-hover
                    v-slot="{ hover }"
                >
                    <div>
                       <v-card
                          id="rombo"
                          >
                       </v-card>
                       <v-img 
                          :elevation="hover ? 12 : 2"
                          :class="{  'on-hover': hover }"
                           v-bind:src="rombos.src"
                           class="src"
                        />
                    </div>
               </v-hover>
            </v-col>  
        </v-row>
      </div>
    </v-container>
</template>
<script>
export default {
    name: 'Realiza',
    data() {
        return{
            items: [
                {
                  src: require('@/assets/programador.jpg'),
                },
                 {
                  src: require('@/assets/ecome.png'),
                },
                 {
                  src: require('@/assets/teamwork.jpg'),
                },
               
            ],
             transparent: 'rgba(255, 255, 255, 0)',
             dialog: false,
        }
    },
}
</script>
<style scoped>
#rombo{
    position: absolute;
    justify-content: center;
    align-items: center;
      width: 100px; 
     height: 100px; 
     border: 2px solid #555; 
    -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
     -ms-transform: rotate(45deg);
     -o-transform: rotate(45deg);
     transform: rotate(45deg);
    transition: 1s;
}
 #rombo:hover{
      width: 100px; 
     height: 100px; 
     border: 2px solid #555; 
     transition: 1s;
     -webkit-transform: rotate(-45deg);
     -moz-transform: rotate(-45deg);
     -ms-transform: rotate(-45deg);
     -o-transform: rotate(-45deg);
     transform: rotate(-45deg);

}


.center{
    text-align: center;
}
.src {
  transition: opacity .4s ease-in-out;
  border-radius: 3px;
   width: 100px;
    height: 100px;
     position: absolute;
    justify-content: center;
    align-items: center;
    
}


.src:not(.on-hover) {
  opacity: 0.8;
 }


</style>
 
<template>
    <v-carousel
        height="600"
        cycle
        :interval="interval"
        hide-delimiters
        :show-arrows="false"
    >
        <v-carousel-item
            v-for="(imagen, i) in imagenes"
            :key="i"
            :src="imagen.src"
            :transition="slide-transition"
             gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
            <v-row
                class="fill-height"
                align="center"
                justify="center"
            >
            <v-col
            align="center"
            justify="center"
            >
                <div class="text-h3">
                    {{ imagen.title }}
                </div>
                <div
                  class="mt-2"
                >
                    {{ imagen.description }}
                </div> 
                <div
                  class="mt-2"
                >
                    <v-btn class="btn" outlined to="/About">Saber mas <v-icon>mdi-arrow-right</v-icon></v-btn>
                </div>
            </v-col>   
            </v-row>
            
        </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
  name: "Carrousel",
  components: {
   
  },
  data() {
    return{
       inerval: 2000,
        padless: true,
      variant: 'default',
       imagenes: [
          {
            src: require('@/assets/code.jpg'),
            title: "THE GUARD OF THE CODE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sint."
          },
          {
            src: require('@/assets/seguridad.jpg'),
            title: "Nuestra seguridad",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sint."
          },
          {
            src: require('@/assets/velocidad.jpg'),
            title: "Nuestra efectividad",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sint."
          },
          {
            src: require('@/assets/soporte.jpg'),
            title: "Nuestra solucion de problemas",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sint."
          },
         
        ],
    }
  }
}
</script>
<style scoped>
.btn{
    border-radius: 20px;
}
</style>
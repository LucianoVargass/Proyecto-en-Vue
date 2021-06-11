<template>
    <div>
        <v-container>
            <div class="center">
                <h2>
                    Algunos de los clientes con los que trabajamos
                </h2>
                <p>
                    Estamos orgullosos de lo que hacemos y con quién lo hacemos. Por eso decimos que si tu triunfas, nosotros triunfamos
                </p>
            </div>
            <div class="center-cards">
                <v-row>
                    <v-col
                    v-for="(logos, i) in empresas"
                    :key="i"
                    cols="6"
                    md="2"
                    lg="2"
                    >
                        <v-card>
                            <v-img
                                class="img"
                                v-bind:src="logos.src"
                            />
                        </v-card>    
                    </v-col>
                </v-row>        
            </div>
         </v-container>
    </div>
</template>
<script>
export default {
    name: 'Empresas',
    data() {
        return {
           empresas: [
               {src: require('@/assets/aero.png')},
               {src: require('@/assets/anses.png')},
               {src: require('@/assets/arcor.png')},
               {src: require('@/assets/dia.png')},
               {src: require('@/assets/ypf.png')},
               {src: require('@/assets/pyg.png')}

           ]
        }
    },
}
</script>
<style scoped>
.center{
    text-align: center;
}
.img{
    max-width: 100%;
    max-height: 100%; 
}
.v-card{
      border: 4px solid #000; 
      border-radius: 4px;
      width: 150px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
}


</style>
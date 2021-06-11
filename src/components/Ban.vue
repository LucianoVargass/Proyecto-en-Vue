<template>
    <div>
        <div
            v-for="(ban, i) in banner"
            :key="i"
        >
           <v-parallax
                v-bind:src="ban.src"
                height="300"
            >
                 <v-row
                      align="center"
                      justify="center"
                 >
                     <v-col
                       class="text-center"
                        cols="12"
                     >
                         <h1 class="text-h4 font-weight-thin mb-4">
                                {{ ban.title }}
                         </h1>
                         <p>
                             {{
                                 ban.description
                             }}
                         </p>
                     </v-col>
                 </v-row>    
           </v-parallax>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Ban',
    data() {
        return{
          banner:
          [
            {
                src: require('@/assets/banner.jpg'),
                title: 'BLABLA BLABLA ',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officiis consequuntur molestias?'
            }
          ]
        }
    },
}
</script>
<style scoped>

</style>
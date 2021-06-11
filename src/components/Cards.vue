<template>
    <v-container>
        <div>
            <h1 class="font-weight-thin text">Nosotros</h1>
        </div>
        <v-row>
            <v-col
             col="12"
             md="6"
             lg="3"
             v-for="(cards, i) in items"
             :key="i"
            >
            <v-hover
             v-slot="{ hover }"
              >
                <v-card
                   :elevation="hover ? 12 : 2"
                   :class="{ 'on-hover': hover }"
                    
                   
                >
                    <v-img
                        class="img"
                        v-bind:src="cards.src"
                    />
                    <v-card-title>
                        {{ cards.title }}
                    </v-card-title>
                    <v-card-text>
                        {{ cards.description }}
                    </v-card-text>
                </v-card>
            </v-hover>   
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'Cards',
    data() {
        return{
          items: [
              { 
                  src: require('@/assets/creati.jpg'),
                  title: 'lorem ipsum ',
                  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repudiandae ipsa neque ipsam, necessitatibus eligendi.'
              },
              { 
                  src: require('@/assets/idea.jpg'),
                  title: 'lorem ipsum ',
                  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repudiandae ipsa neque ipsam, necessitatibus eligendi.'
              },
              { 
                  src: require('@/assets/frame.jpg'),
                  title: 'lorem ipsum ',
                  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repudiandae ipsa neque ipsam, necessitatibus eligendi.'
              },
              { 
                  src: require('@/assets/team.jpg'),
                  title: 'lorem ipsum ',
                  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repudiandae ipsa neque ipsam, necessitatibus eligendi.'
              },
          ],
            transparent: 'rgba(255, 255, 255, 0)',
        }
    },
}
</script>
<style  scoped>
.img{
    width: 100%;
    height: 150px;
}
.text{
    text-align: center;
}

.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
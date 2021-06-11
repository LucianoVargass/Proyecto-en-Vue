<template>
  <div>
    <Carrousel id="home" />
    <Cards id="nosotros"/>
    <hr class="mt-3">
    <Realiza id="proyectos"/>
   <Banner class="mt-3" />
   <Empresas />
  </div>
</template>

<script>
import Carrousel from '../components/Carrousel.vue'
import Cards from '../components/Cards.vue'
import Banner from '../components/Ban.vue';
import Realiza from '../components/Realiza.vue';
import Empresas from '../components/Empresas.vue';
export default {
  name: "Home",
  components: {
   Carrousel,
   Cards,
  Banner,
  Realiza,
  Empresas
  },
  data() {
    return{
      
    }
  }
}
</script>
<style scoped>

</style>

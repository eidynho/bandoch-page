<script>
import Card from './Card.vue'

import cardHxh from '../assets/card-hxh.jpg'
import cardEidy from '../assets/card-eidy.jpg'
import cardAriana from '../assets/card-ariana.jpg'
import cardRobots from '../assets/card-robots.jpg'

export default {
  data() {
    return {
      cardHxh,
      cardEidy,
      cardAriana,
      cardRobots,
    }
  },
  components: {
    Card,
  },

}
</script>

<template>
  <main class="z-10 flex flex-col lg:flex-row justify-center py-8 mx-4 lg:mx-0 bg-[#16161C]">

    <div class="lg:mr-10">
      <router-link to="/cards/hxh">
        <Card
          id="two"
          :img="cardHxh"
          imgAlt="Hunter x Hunter card" 
          title="Hunter X Hunter" 
          tags="design"
          isWhite="true" 
        />
      </router-link>

      <router-link to="/cards/planet">
        <Card
          id="one"
          :img="cardEidy"
          imgAlt="Planet card" 
          title="Planets" 
          tags="design"
        />
      </router-link>
    </div>

    <div class="lg:mt-40">
      <router-link to="/cards/ariana">
        <Card
          id="three"
          :img="cardAriana"
          imgAlt="Ariana Grande card" 
          title="Ariana Grande" 
          tags="design"
        />
      </router-link>

      <router-link to="/cards/robots">   
        <Card
          id="four"
          :img="cardRobots"
          imgAlt="Robots card" 
          title="Robots" 
          tags="design"
          isWhite="true"
        />
      </router-link>
    </div>

  </main>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EEEAEA" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</template>
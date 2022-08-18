<script>
import Card from './Card.vue'

import cardAriana from '../assets/card-ariana.jpg'
import cardEidy from '../assets/card-eidy.jpg'
import cardHxh from '../assets/card-hxh.jpg'
import cardRobots from '../assets/card-robots.jpg'

export default {
  data() {
    return {
      cardAriana,
      cardEidy,
      cardHxh,
      cardRobots,
    }
  },
  components: {
    Card,
  },
}
</script>

<template>
  <main class="z-10 flex flex-col lg:flex-row justify-center py-8 mx-4 bg-[#16161C]">

    <div class="lg:mr-10">
      <Card
        id="two"
        :img="cardHxh"
        imgAlt="Hunter x Hunter card" 
        title="Hunter X Hunter" 
        tags="design"
        isWhite="true" 
      />
      <Card
        id="one"
        :img="cardEidy"
        imgAlt="Planet card" 
        title="Planets" 
        tags="design"
      />
    </div>

    <div class="lg:mt-40">
      <Card
        id="three"
        :img="cardAriana"
        imgAlt="Ariana Grande card" 
        title="Ariana Grande" 
        tags="design"
      />
      <Card
        id="four"
        :img="cardRobots"
        imgAlt="Robots card" 
        title="Robots" 
        tags="design"
        isWhite="true" 
      />
    </div>

  </main>
</template>
<script>
import { useRoute } from 'vue-router'

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

        cardName: '',
        title: '',
        type: '',
        year: 2022,
        country: '',
        cardImage: undefined,
        imageAlt: '',
      }
    },
    mounted() {
      const route = useRoute()
      this.cardName = route.params.name

      this.getData(this.cardName)
    },
    methods: {
      getData(cardName) {
        switch (cardName) {
          case "hxh":
            this.title = "HxH"
            this.type = "Design gráfico"
            this.year = 2022
            this.country = 'Brasil'
            this.cardImage = cardHxh
            this.imageAlt = 'Card Hunter x Hunter'
            break
          case "planet":
            this.title = "HxH"
            this.type = "Design gráfico"
            this.year = 2022
            this.country = 'Brasil'
            this.cardImage = cardEidy
            this.imageAlt = 'Card Planet'
            break
          case "ariana":
            this.title = "Ariana Grande"
            this.type = "Design gráfico"
            this.year = 2022
            this.country = 'Brasil'
            this.cardImage = cardAriana
            this.imageAlt = 'Card Ariana Grande'
            break
          case "robots":
            this.title = "Robots"
            this.type = "Design gráfico"
            this.year = 2022
            this.country = 'Brasil'
            this.cardImage = cardRobots
            this.imageAlt = 'Card Robots'
            break
        }
      },
    }
  }
</script>
  
<template>
  <div class="max-w-[1340px] mx-auto flex flex-col items-center justify-center">
    <h1 class="text-8xl mt-40 mb-20">{{ title }}</h1>

    <div class="w-1/2 flex justify-between">
      <div>
        <h3>Tipo</h3>
        <span>{{ type }}</span>
      </div>
      <div>
        <h3>Ano</h3>
        <span>{{ year }}</span>
      </div>
      <div>
        <h3>País</h3>
        <span>{{ country }}</span>
      </div>
    </div>

    <div class="z-10 relative mt-36 rounded-3xl max-w-3xl mx-auto cardDimensions">
      <img :src="cardImage" :alt="imageAlt" class="w-full h-full rounded-3xl">
    </div>

    <footer class="mt-40 w-full flex justify-between">
      <div class="flex flex-col">
        <h6>Redes sociais</h6>
        <ul>
          <li>Instagram</li>
          <li>Behance</li>
        </ul>
      </div>

      <div>
        <span>© MIGUEL BANDOCH, TODOS OS DIREITOS RESERVADOS</span>
      </div>

      <div>
        <h6>E-mail</h6>
        <span>email@gmail.com</span>

        <h6>Link</h6>
        <a href="" class="inline">{{ cardName }}</a>
      </div>
    </footer>

  </div>
</template>
  
  
<style scoped lang="scss">
.cardDimensions {
  width: 100%;

  @media(min-width: 1024px) {
    width: 460px;
    height: 651px;
  }

  @media(min-width: 1380px) {
    width: 630px;
    height: 891px;
  }
}
</style>
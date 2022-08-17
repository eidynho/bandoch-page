<script>
import gsap from 'gsap'

export default {
  props: {
    cardId: String,
  },
  data() {
    return {
      showCardViewProject: false,
    }
  },
  methods: {
    mouseOverCard() {
      setTimeout(this.showCardViewProject = true, 6000)
    },
    mouseLeaveCard() {
      setTimeout(this.showCardViewProject = false, 6000)
    }
  },
  watch: {
    showCardViewProject() {
      gsap.utils.toArray(`#${this.cardId}animationCardViewProject`).forEach(animation => {
        let hover = gsap.fromTo(`#${this.cardId}animationCardViewProject`, {
          y: 60,
          opacity: 0,
          stagger: {
            amount: 0.3
          }
        }, {
          y: 0,
          duration: 0.4,
          delay: 0,
          opacity: 1,
          ease: 'power1.out',
          stagger: {
            amount: 0
          }
        })
        animation.addEventListener("mouseenter", () => hover.play());
        animation.addEventListener("mouseleave", () => hover.reverse());
      })
    }
  },
}
</script>

<template>
  <div 
    @mouseover="showCardViewProject = true"
    class="z-10 relative mt-36 rounded-3xl bg-blue-200 max-w-3xl mx-auto cardDimensions cursor-pointer hover:brightness-75"
    style="transition-duration: 800ms;"
  >
    <div v-show="showCardViewProject" :id="`${cardId}animationCardViewProject`" class="marquee absolute w-full h-full flex items-center justify-center text-white overflow-hidden">
      <div>
        <span class="text-6xl w-full whitespace-nowrap">View Project - View Project - View Project - View Project - View Project - View Project</span>
      </div>
    </div>

    card
  </div>
  <div class="flex justify-between items-center mt-3 max-w-3xl mx-auto">
    <h6 class="text-3xl ml-1 mr-2">Título card</h6>
    <span class="text-md uppercase tracking-wider">Design - brand</span>
  </div>
</template>


<style scoped lang="scss">
.cardDimensions {
  width: 100%;
  height: 700px;

  @media(min-width: 1024px) {
    width: 460px;
    height: 560px;
  }

  @media(min-width: 1380px) {
    width: 630px;
    height: 750px;
  }
}
.cardDimensionsMd {
  width: 460px;
  height: 560px;
}
.cardDimensionsLg {
  width: 630px;
  height: 750px;
}

.marquee div {
  position: absolute;
  width: 200%;

  animation: marquee 10s linear infinite;
}
.marquee span {
  width: 100%;
}

@keyframes marquee {
  0% { left: 0%; }
  100% { left: -200%; }
}

</style>
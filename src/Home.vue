<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Welcome from './components/Welcome.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Section from './components/Section.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Welcome,
    Header,
    Main,
    Section,
    Footer,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#footerComponent', {
      opacity: 0.9,
      scrollTrigger: {
        trigger: '#sectionComponent',
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: true,
      }
    })

  }
}
</script>

<template>
  <div class="flex flex-col w-full">
    <Welcome />
    <Header />
    <Main />
    <Section id="sectionComponent" />
  </div>
  <div class="w-full h-[100vh] bg-[#EEEAEA]">
    <Footer id="footerComponent" style="opacity: 0;" />
  </div>
</template>


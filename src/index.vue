<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Header,
    Main,
    Footer,
  },
  data() {
    return {
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
     gsap.to('#footerComponent', {
        opacity: 0.9,
        scrollTrigger: {
          trigger: '#mainComponent',
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
  }
}
</script>

<template>
  <div class="flex flex-col w-full mx-auto max-w-[1340px]">
    <Navbar />
    <Header />
    <Main id="mainComponent" />
  </div>
  <div class="w-full h-[100vh] bg-[#EEEAEA]">
    <Footer id="footerComponent" style="opacity: 0;" />
  </div>
</template>


<script>
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
  }
}
</script>

<template>
  <div class="flex flex-col w-full mx-auto max-w-[1340px]">
    <Navbar />
    <Header />
    <Main />
  </div>
  <div class="w-full h-[100vh] bg-[#EEEAEA]">
    <Footer />
  </div>
</template>


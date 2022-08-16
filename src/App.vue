<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  components: {
    Navbar,
    Header,
    Main,
},

  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="flex flex-col w-full mx-auto" style="max-width: 1340px;">
    <Navbar />
    <Header />
    <Main />
  </div>
</template>


<script>
  import gsap from 'gsap'

  export default {
    mounted() {
      const tl = gsap.timeline()
      tl.fromTo('#headerTitle', {
        y: 60,
        opacity: 0,
        stagger: {
          amount: 0.3
        }
      }, {
        y: 0,
        duration: 0.4,
        delay: 0.5,
        opacity: 1,
        ease: 'power1.out',
        stagger: {
          amount: 0
        }
      })

    },
  }
</script>

<template>
  <header class="flex justify-between py-8 mx-4">
    <h1 id="headerTitle" class="mt-12 ml-auto text-8xl w-2/3" >Nerissa está ao vivo agora</h1>
  </header>
</template>
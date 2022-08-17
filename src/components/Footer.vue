<script>
  import gsap from 'gsap'

  export default {
    mounted() {
      const tl = gsap.timeline()
      tl.fromTo('#footerTitle', {
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
  <footer class="fixed flex justify-center items-center h-full w-full bottom-0">
    <div class="flex justify-between items-center w-[80%] -mt-72">
      <span class="text-[#16161C]">imagem</span>
      <h2 id="footerTitle" class=" text-6xl w-1/2 font-bold text-[#16161C]" >Nerissa está ao vivo agora</h2>
    </div>

    <div class="marquee absolute mt-auto w-full h-full flex items-end text-white overflow-hidden">
      <div>
        <span class="text-8xl w-full whitespace-nowrap text-[#16161C]">{{'MB '.repeat(40)}}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.marquee div {
  position: absolute;
  width: 200%;

  animation: marquee 24s linear infinite;
}
.marquee span {
  width: 100%;
}

@keyframes marquee {
  0% { left: 0%; }
  100% { left: -100%; }
}
</style>
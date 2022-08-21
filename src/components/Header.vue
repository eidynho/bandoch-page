<script>
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  export default {
    mounted() {
      gsap.registerPlugin(ScrollTrigger)
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
  <header id="headerComponent" class="h-[80vh] container flex items-center z-10 mx-auto lg:-mt-8 xl:mt-0">
    <div class="relative w-[90%] flex flex-col justify-center items-center gap-16 mx-auto mt-20 max-w-[1200px] lg:gap-0 lg:items-stretch xl:w-full">
      <h1 id="headerTitle" class="flex flex-col items-center lg:items-stretch text-6xl sm:text-[80px] md:text-[120px] lg:text-[140px] xl:text-[180px]">
        <span class="text-start lg:text-start mb-4">Miguel</span>
        <span class="text-end lg:text-end">Bandoch</span>
        <span class="font-light text-center text-3xl lg:text-end">Art Studio</span>
      </h1>
      
      <div class="relative lg:static w-full h-full flex justify-center">
        <svg class="rotating
          max-w-[200px]
          lg:max-w-[240px]
          lg:top-[200px] lg:left-[-20px] lg:absolute
          xl:top-[240px] xl:left-[80px]
          " viewBox="0 0 164 164" style="transform: rotate(0)">
          <path fill="transparent" id="curve" d="M 80, 80 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"/>
          <text class="fill-[#EEEAEA] tracking-[7.5px]">
            <textPath alignment-baseline="top" xlink:href="#curve">
              {{ ('Made by eidy • ').repeat(2) }}
            </textPath>
          </text>
        </svg>
      </div>
    </div>


  </header>
</template>

<style>

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 8s linear infinite;
  -moz-animation: rotating 8s linear infinite;
  -ms-animation: rotating 8s linear infinite;
  -o-animation: rotating 8s linear infinite;
  animation: rotating 8s linear infinite;
}
</style>
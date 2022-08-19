<script>
</script>

<template>
  <footer class="fixed flex justify-center items-center h-full w-full bottom-0">
    <div class="flex justify-between items-center w-[80%] -mt-72 overflow-hidden">
      <span class="text-[#16161C]">imagem</span>
      <h2 class=" text-6xl w-1/2 font-bold text-[#16161C]" >Nerissa está ao vivo agora</h2>
    </div>

    <div class="marquee absolute mt-auto w-full h-full flex items-end text-white overflow-hidden mb-8">
      <div>
        <span class="font-[DynaPuff] font-bold text-[160px] w-full whitespace-nowrap text-[#16161C] cursor-default select-none">{{'MB '.repeat(40)}}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.marquee div {
  position: absolute;
  width: 200%;
  animation: marquee 8s linear infinite;

  @media (min-width: 1024px) {
    animation: marquee 16s linear infinite;
  }
}
.marquee span {
  width: 100%;
}

@keyframes marquee {
  0% { left: 0%; }
  100% { left: -100%; }
}
</style>
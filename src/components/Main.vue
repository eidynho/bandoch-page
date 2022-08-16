<script>
import Card from './Card.vue'

export default {
  components: {
    Card,

  }
}
</script>

<template>
  <main class="flex flex-col lg:flex-row justify-center py-8 mx-4">

    <div class="lg:mr-10">
      <Card cardId="one" />
      <Card cardId="two" />
    </div>

    <div class="lg:mt-40">
      <Card cardId="three" />
      <Card cardId="four" />
    </div>

  </main>
</template>
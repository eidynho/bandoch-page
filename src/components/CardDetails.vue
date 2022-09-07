<script>
import { useRoute } from 'vue-router'

  export default {
    props: {
      id: String,
      img: String,
      imgAlt: String,
      title: String,
      tags: String,
      isWhite: String,
    },
    data() {
      return {
        cardName: '',
      }
    },
    mounted() {
      const route = useRoute()
      this.cardName = route.params.name
    }
  }
  </script>
  
  <template>
    <div>
      teste, {{ cardName }}
    </div>
  </template>
  
  
  <style scoped lang="scss">
  </style>
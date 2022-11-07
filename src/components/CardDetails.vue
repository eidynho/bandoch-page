<script>
import { useRoute } from 'vue-router'

import cardHxh from '../assets/card-hxh.jpg'
import cardEidy from '../assets/card-eidy.jpg'
import cardAriana from '../assets/card-ariana.jpg'
import cardRobots from '../assets/card-robots.jpg'

import behanceLogo from '../assets/behanceLogo.svg'
import instagramLogo from '../assets/instagramLogo.svg'
import linkedinLogo from '../assets/linkedinLogo.svg'

export default {
	data() {
		return {
			cardHxh,
			cardEidy,
			cardAriana,
			cardRobots,

			behanceLogo,
			instagramLogo,
			linkedinLogo,

			cardName: '',
			title: '',
			type: '',
			year: 2022,
			country: '',
			cardImage: undefined,
			cardImageHover: undefined,
			imageAlt: '',
		}
	},

	mounted() {
		const route = useRoute()
		this.cardName = route.params.name
		this.getData(this.cardName)

		// on load, return scroll to top of page
		this.$nextTick(() => {
			var element = document.getElementById("card-details")
			window.scrollTo(0, element.offsetTop)
		}, 0)
	},

	methods: {
		getData(cardName) {
			switch (cardName) {
				case "hxh":
					this.title = "HxH"
					this.type = "Design gráfico"
					this.year = 2022
					this.country = 'Brasil'
					this.cardImage = cardHxh
					this.cardImageHover = cardEidy
					this.imageAlt = 'Card Hunter x Hunter'
					break
				case "planet":
					this.title = "HxH"
					this.type = "Design gráfico"
					this.year = 2022
					this.country = 'Brasil'
					this.cardImage = cardEidy
					this.cardImageHover = cardAriana
					this.imageAlt = 'Card Planet'
					break
				case "ariana":
					this.title = "Ariana Grande"
					this.type = "Design gráfico"
					this.year = 2022
					this.country = 'Brasil'
					this.cardImage = cardAriana
					this.cardImageHover = cardRobots
					this.imageAlt = 'Card Ariana Grande'
					break
				case "robots":
					this.title = "Robots"
					this.type = "Design gráfico"
					this.year = 2022
					this.country = 'Brasil'
					this.cardImage = cardRobots
					this.cardImageHover = cardHxh
					this.imageAlt = 'Card Robots'
					break
			}
		},
	},

}
</script>
  
<template>
	<div id="card-details" class="mx-auto flex flex-col items-center justify-center">
		<h1 class="text-8xl mt-20 mb-10">{{ title }}</h1>

		<div class="w-1/2 flex justify-center">
			<div class="w-1/3 flex flex-col items-center">
				<h3>Tipo</h3>
				<span>{{ type }}</span>
			</div>
			<div class="w-1/3 flex flex-col items-center">
				<h3>Ano</h3>
				<span>{{ year }}</span>
			</div>
			<div class="w-1/3 flex flex-col items-center">
				<h3>País</h3>
				<span>{{ country }}</span>
			</div>
		</div>

		<!-- principal image -->
		<div class="cardDimensions mt-12 max-w-xl mx-auto">
			<img :src="cardImage" :alt="imageAlt" class="w-full h-full rounded-3xl">
		</div>

		<div class="mt-6">
			<span>© MIGUEL BANDOCH, TODOS OS DIREITOS RESERVADOS</span>
		</div>

		<footer class="mt-20 mb-4 w-full flex justify-center">
			<ul class="flex gap-3">
				<li>
					<a href="https://www.behance.net/miguelbandoch" target="_blank" rel="noopener noreferrer">
						<img :src="behanceLogo" alt="behance-logo" class="w-[36px]">
					</a>
				</li>

				<li>
					<a href="https://www.linkedin.com/in/miguel-bandoch-7269a518a/" target="_blank" rel="noopener noreferrer">
						<img :src="linkedinLogo" alt="linkedin-logo" class="w-[32px]">
					</a>
				</li>

				<li>
					<a href="https://www.instagram.com/bandochh/" target="_blank" rel="noopener noreferrer">
						<img :src="instagramLogo" alt="instagram-logo" class="w-[36px]">
					</a>
				</li>
			</ul>
		</footer>
	</div>
</template>
  
  
<style scoped lang="scss">
.cardDimensions {
	width: 90%;

	@media(min-width: 1024px) {
		width: 630px;
	}
}

ul {
	img {
        filter: invert(100%) sepia(0%) saturate(7485%) hue-rotate(244deg) brightness(103%) contrast(92%);
		transition: all 0.3s ease;

		&:hover {
        transform: translateY(-4px);
      }
    }
}

</style>
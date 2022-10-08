<script>
import { useRoute } from 'vue-router'

import Scene from "./Gooey/Scene.js";

import cardHxh from '../assets/card-hxh.jpg'
import cardEidy from '../assets/card-eidy.jpg'
import cardAriana from '../assets/card-ariana.jpg'
import cardRobots from '../assets/card-robots.jpg'

export default {
	data() {
		return {
			cardHxh,
			cardEidy,
			cardAriana,
			cardRobots,

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
	created() {
		let timer = null
		window.addEventListener("resize", () => {
			clearTimeout(timer)

			const canvaEl = document.querySelector('.canva-card-details')
			canvaEl.style.filter = 'blur(10px)'


			timer = setTimeout(function () {
				window.scene = new Scene()
				canvaEl.style.filter = 'blur(0px)'
			}, 400)

		})
	},
	mounted() {
		const route = useRoute()
		this.cardName = route.params.name
		this.getData(this.cardName)

		this.$nextTick(() => {
			window.scene = new Scene()

			var element = document.getElementById("card-details")
			window.scrollTo(0, element.offsetTop)
		}, 0)

		setTimeout(() => {
			window.scene = new Scene()
			document.querySelector('.canva-card-details').style.display = 'block'
		}, 2000)
	},

	destroyed() {
		window.removeEventListener("resize", window.scene = new Scene());
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
	}
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

		<!-- <div class="z-10 relative mt-36 rounded-3xl max-w-3xl mx-auto cardDimensions">
      <img :src="cardImage" :alt="imageAlt" class="w-full h-full rounded-3xl">
    </div> -->

		<section class="container-three">
			<article class="tile">
				<figure class="tile__figure">
					<img :src="cardImage" :data-hover="cardImageHover" class="tile__image" alt="My image" />
				</figure>
			</article>
		</section>
		<canvas id="stage" class="canva-card-details"></canvas>


		<footer class="mt-40 w-full flex justify-between">
			<div class="flex flex-col">
				<h6>Redes sociais</h6>
				<ul>
					<li>Instagram</li>
					<li>Behance</li>
				</ul>
			</div>

			<div>
				<span>© MIGUEL BANDOCH, TODOS OS DIREITOS RESERVADOS</span>
			</div>

			<div>
				<h6>E-mail</h6>
				<span>email@gmail.com</span>

				<h6>Link</h6>
				<a href="" class="inline">{{ cardName }}</a>
			</div>
		</footer>

	</div>
</template>
  
  
<style scoped lang="scss">
.cardDimensions {
	width: 100%;

	@media(min-width: 1024px) {
		width: 460px;
		height: 651px;
	}

	@media(min-width: 1380px) {
		width: 630px;
		height: 891px;
	}
}

.canva-card-details {
	transition: all 0.4s ease;
	display: none;
}

.container-three {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	z-index: 10;
	position: relative;
}

.tile {
	width: 85vmin;
	position: absolute;
	top: -24%;
}

.tile__figure {
	margin: 0;
	padding: 0;
	position: absolute;
	top: 0;
	left: 0;
}

.tile__image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
}

canvas {
	width: 100%;
	height: 100%;
	z-index: 9;
	position: absolute;
	top: 38%;
	left: 4.4%;
	overflow: visible;
}
</style>
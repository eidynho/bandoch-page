<script>
import gsap from 'gsap'

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
			showCardViewProject: false,
		}
	},
	watch: {
		showCardViewProject() {
			gsap.utils.toArray(`#${this.id}animationCardViewProject`).forEach(animation => {
				let hover = gsap.fromTo(`#${this.id}animationCardViewProject`, {
					y: 80,
					opacity: 0,
					stagger: {
						amount: 0.3
					}
				}, {
					y: 20,
					duration: 0.4,
					delay: 0,
					opacity: 1,
					ease: 'power1.out',
					stagger: {
						amount: 0
					}
				})
				animation.addEventListener("mouseenter", () => hover.play());
				animation.addEventListener("mouseleave", () => hover.reverse());
			})
		}
	},
}
</script>

<template>
	<div @mouseover="showCardViewProject = true"
		class="relative mt-36 rounded-3xl max-w-3xl mx-auto cardDimensions cursor-pointer hover:brightness-75"
		style="transition-duration: 800ms;">
		<div v-show="showCardViewProject" :id="`${id}animationCardViewProject`"
			class="marquee absolute rounded-3xl w-full h-[94%] flex items-center justify-center overflow-hidden"
			:class="isWhite ? 'text-black' : 'text-white' ">
			<div>
				<span class="text-6xl w-full whitespace-nowrap font-normal">
					View Project - View Project - View Project - View Project - View Project - View Project
				</span>
			</div>
		</div>
		<img :src="img" :alt="imgAlt" class="w-full h-full rounded-3xl">

	</div>
	<div class="flex justify-between items-center mt-3 max-w-3xl mx-auto">
		<h6 class="text-3xl ml-1 mr-2">{{ title }}</h6>
		<span class="text-md uppercase tracking-wider">{{ tags }}</span>
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

.marquee div {
	position: absolute;
	width: 200%;

	animation: marquee 10s linear infinite;
}

.marquee span {
	width: 100%;
}

@keyframes marquee {
	0% {
		left: 0%;
	}

	100% {
		left: -200%;
	}
}
</style>
<script>
import ContactModal from './ContactModal.vue'

export default {
	components: {
		ContactModal,
	},
	methods: {
		openContactModal() {
			console.log(this.$refs.contactModal)
			this.$refs.contactModal.toggleModal(true)
		}
	},
}

</script>

<template>
	<nav class="container py-8 mx-auto bg-[#16161C]">
		<ul class="flex justify-between mx-4">
			<li>
				<router-link to="/">Miguel</router-link>
			</li>
			<li @click="openContactModal" class="cursor-pointer font-bold">
				Contato
			</li>
		</ul>

		<ContactModal ref="contactModal" />
	</nav>
</template>
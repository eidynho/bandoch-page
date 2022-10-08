<script>
import Navbar from './components/Navbar.vue'

export default {
	name: "App",
	components: {
		Navbar,
	}
}

</script>

<template>
	<div>
		<Navbar />
		<router-view></router-view>
	</div>
</template>
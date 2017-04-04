<template>
	<div id="app">
		<my-header></my-header>
		<transition name="fade">
			<router-view></router-view>
		</transition>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import header  from './components/header.vue';
	import footer  from './components/footer.vue';

	export default {
		name: 'app',
		
		components: {
			'my-header' : header,
			'my-footer' : footer
		}
	}
</script>

<style lang="scss">
	body {
		margin: 0;
		padding: 0;
	}

	#app {
		background-color: #FFF;
		color: #000;

		.fade-enter-active, .fade-leave-active {
		  transition-property: opacity;
		  transition-duration: .25s;
		}

		.fade-enter-active {
		  transition-delay: .25s;
		}

		.fade-enter, .fade-leave-active {
		  opacity: 0
		}
	}
</style>
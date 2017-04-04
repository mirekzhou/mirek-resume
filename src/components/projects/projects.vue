<template>
	<div class="page projects-page">
		我是projects-page
	</div>
</template>

<script>
	export default {
		name: 'projects-page',
		
		data: function () {
			return {
			}
		},

		method: {
		}
	}
</script>

<style lang="scss" scoped>
	.projects-page {
		background-color: green;
		color: #FFF;
		height: 500px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
</style>
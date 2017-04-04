<template>
	<div class="header">
		<div class="top-section">
			<div class="p-wrapper top-section-wrapper">
				<div class="phonenumber left">0977-255-8942</div>

				<ul class="media right">
					<li class="facebook"><img src="../assets/facebook.png"></li>
					<li class="instagram"><img src="../assets/instagram.png"></li>
					<li class="twiter"><img src="../assets/twiter.png"></li>
				</ul>

				<div class="clear"></div>
			</div>
		</div>

		<div class="nav-section">
			<div class="p-wrapper nav-section-wrapper">
				<div class="mirek-section left">
					<img src="../assets/luffy.png">
					<span class="name">Mirek</span>
				</div>

				<ul class="pages-section right">
					<li><router-link to="/home">Home</router-link></li>
					<li><router-link to="/projects">Projects</router-link></li>
					<li><router-link to="/skills">Skills</router-link></li>
					<li><router-link to="/contact">Contact</router-link></li>
				</ul>

				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import '../scss/common.scss';

	export default {
		name: 'header',
		
		data: function () {
			return {
			}
		},

		method: {
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;

		.top-section {
			height: 70px;
			padding-top: 20px;
			box-sizing: border-box;
			border-bottom: 1px solid rgba(58, 59, 63, 0.15);

			.top-section-wrapper {
				.phonenumber {
					height: 50px;
					line-height: 50px;
				}

				.media {
					color: #3A3B3F;
					list-style-type: none;

					li {
						cursor: pointer;
						display: inline-block;
						margin-right: 5px;

						&:last-child {
							margin-right: 0px;							
						}
					}
				}
			}
		}

		.nav-section {
			height: 110px;
			width: 100%;
			padding-top: 12px;
			box-sizing: border-box;

			.nav-section-wrapper {
				.mirek-section {
					img {
					    display: inline-block;
					    vertical-align: middle;
					}

					.name {
						color: #3A3B3F;
						font: normal normal normal 24px/1.46em futura-lt-w01-book,sans-serif;
						margin-left: 10px;
					}
				}

				.pages-section {
					list-style-type: none;
					height: 80px;
					line-height: 80px;
					padding: 0;

					li {
						cursor: pointer;
						display: inline-block;
						margin-right: 20px;

						&:last-child {
							margin-right: 0px;							
						}

						a {
							color: #3A3B3F;
							font: normal normal normal 14px/1.4em georgia,palatino,'book antiqua','palatino linotype',serif;
							text-decoration: none;
						}
					}

					.active {
						a {
							color: #d5d5d5;
						}
					}
				}
			}
		}
	}
</style>
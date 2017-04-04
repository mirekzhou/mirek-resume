<template>
	<div class="page home-page">
		<div class="section section1">
			<div class="p-wrapper section1-wrapper">
				<div class="description">
					<div class="text big">HELLO. I'M MIREK</div>
					<div class="text small">A Stronger Online Presence</div>
				</div>

				<div class="picture">
					<img src="../../assets/big-pic.png">
				</div>
			</div>
		</div>

		<div class="section section2">
			<div class="p-wrapper section2-wrapper">
				<div class="f">
					<div class="f-c">
						<img src="../../assets/luffy.png">
						<div class="title">LANDING PAGE ANIMATION</div>
						<div class="time">APRIL 12,2023</div>
					</div>
				</div>

				<div class="f">
					<div class="f-c">
						<img src="../../assets/luffy.png">
						<div class="title">USER EXPERIENCE UPDATE</div>
						<div class="time">APRIL 12,2023</div>
					</div>
				</div>

				<div class="f">
					<div class="f-c">
						<img src="../../assets/luffy.png">
						<div class="title">APP CONCEPTUAL DESIGN</div>
						<div class="time">APRIL 12,2023</div>
					</div>
				</div>
			</div>
		</div>

		<div class="section section3">
			<div class="p-wrapper section3-wrapper">
				<ul>
					<li>
						<img src="../../assets/home-pic1.png">
						<div class="con">
							<div class="title">JAVASCRIPT</div>
							<p>Creating strong visual appeal is essential if you're looking to attract interest and attention with your target audience. At Mirek, my Javascript services can play an integral role in successfully promoting you and your business. From the initial design concept to the final outcome, I work diligently towards bringing your vision to life in the most professional manner.</p>
						</div>
					</li>
					<li>
						<img src="../../assets/home-pic2.png">
						<div class="con">
							<div class="title">CSS</div>
							<p>Since the early days of my career, I've had a strong passion for CSS. This skill is indispensible when it comes to leaving a lasting impression on a client, and ensuring their final product both looks and works great. With my CSS skills, I'm always working to ensure my clients' needs get the attention they deserve.</p>
						</div>
					</li>
					<li>
						<img src="../../assets/home-pic3.png">
						<div class="con">
							<div class="title">FRONT-END DEVELOPMENT</div>
							<p>At Mirek, I understand how important it is to create a lasting visual impact. My Front-End Development services are available and customizable to suit whatever your needs may be. I'll help place your brand one step ahead of the competition. Call me today to find out how I can start helping you today.</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home-page',
		
		data: function () {
			return {
			}
		},

		method: {
		}
	}
</script>

<style lang="scss" scoped>
	.home-page {
		.section1 {
			background-color: #3a3b3f;
			color: #FFF;
			height: 520px;
			width: 100%;

			.section1-wrapper {
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.description {
      				.big {
						font-family: 'Tangerine', serif;
						font-size: 48px;
      				}
				}
			}
		}

		.section2 {
			height: 440px;
			width: 100%;

			.section2-wrapper {
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.f {
					height: 380px;
					width: 300px;

					.f-c {
						background-color: #efece2;
						display: flex;
						height: 100%;
						width: 100%;
						padding: 20px 0;
						flex-direction: column;
						justify-content: space-around;
						align-items: center;
					}
				}
			}
		}

		.section3 {
			ul {
				list-style: none;

				li {
					height: 280px;
					width: 100%;
					padding: 10px 0;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					img {
						width: 47%;
					}

					.con {
						width: 47%;

						.title {
							color: #3A3B3F;
							font: normal normal normal 24px/1.46em futura-lt-w01-book,sans-serif;
						}

						p {
							color: #3A3B3F;
							font: normal normal normal 16px/1.55em avenir-lt-w01_35-light1475496,sans-serif;
							margin-top: 20px;
						}
					}
				}
			}
		}
	}
</style>
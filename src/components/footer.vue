<template>
	<div class="footer">
		<div class="footer-section1">
			<div class="p-wrapper footer-section1-wrapper">
				<div class="left information">
					<div class="title">Contact Me</div>
					<p>Are you interested in working with me? Contact me today for a free consultation.</p>
					<p>500 Terry Francois Street San Francisco, CA 94158</p>
					<p>mirek.zhou@gmail.com</p>
					<p>123-456-7890</p>
				</div>

				<div class="right optr">
					<my-input my-width="200" 
							  my-height="40" 
							  my-placeholder="Name" 
							  v-model="name">
					</my-input>

					<my-input my-width="200" 
					          my-height="40" 
					          my-placeholder="Email" 
					          v-model="email">
					</my-input>

					<my-input my-width="400" 
					          my-height="40" 
					          my-placeholder="Subject" 
					          v-model="subject">
					</my-input>

					<my-input my-width="400" 
					          my-height="40" 
					          my-placeholder="Phone" 
					          v-model="phone">
					</my-input>

					<my-input my-width="400" 
					          my-height="40" 
					          my-placeholder="Address" 
					          v-model="address">
					</my-input>
					
					<my-input my-width="400" 
					          my-height="100" 
					          my-placeholder="Message" 
					          v-model="message">
					</my-input>

					<div class="send">
						<div class="send-button" v-on:click="submit">Send</div>
						<div class="error-notice" v-show="errorNotice">Please provide valid information.</div>
					</div>
				</div>
			</div>
		</div>

		<div class="footer-section2">
			<div class="p-wrapper footer-section2-wrapper">
				<ul class="media">
					<li class="facebook"><img src="../assets/facebook.png"></li>
					<li class="instagram"><img src="../assets/instagram.png"></li>
					<li class="twiter"><img src="../assets/twiter.png"></li>
				</ul>
			</div>
		</div>

		<div class="footer-section3">
			<div class="p-wrapper footer-section3-wrapper">
				COPYRIGHTS @2017 BY MIREK. ALL RIGHTS RESERVED.
			</div>
		</div>
	</div>
</template>

<script>
	import input from '../plugins/input.vue';

	export default {
		name: 'footer',
		
		data: function () {
			return {
				name: '',
				email: '',
				subject: '',
				phone: '',
				address: '',
				message: '',
				errorNotice: false
			}
		},

		components: {
			'my-input' : input
		},

		methods: {
			submit: function () {
				var args = {
					name: this.name,
					email: this.email,
					subject: this.subject,
					phone: this.phone,
					address: this.address,
					message: this.message
				};

				alert(JSON.stringify(args));
				this.clearInputs();
				this.errorNotice = !this.errorNotice;
			},

			clearInputs: function () {
				this.name    = '';
				this.email   = '';
				this.subject = '';
				this.phone   = '';
				this.address = '';
				this.message = '';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footer {
		height: 610px;

		.footer-section1 {
		    background-color: rgba(239, 236, 226, 1);
		    border-bottom: 1px solid rgba(58, 59, 63, 0.15);
			height: 480px;
			padding-top: 80px;

			.footer-section1-wrapper {
				.information {
					width: 40%;

					.title {
						font: normal normal normal 56px/1.25em snellroundhandw01-scrip,cursive;
					}

					p {
						color: #3A3B3F;
						font: normal normal normal 16px/1.55em avenir-lt-w01_35-light1475496,sans-serif;
						line-height: 30px;
						margin-top: 20px
					}
				}

				.optr {
					width: 40%;

					.send {
						.send-button {
							color: #3A3B3F;
							cursor: pointer;
							height: 50px;
							line-height: 50px;
							width: 100%;
							text-align: center;
						}

						.error-notice {
							color: red;
							height: 50px;
							line-height: 50px;
							width: 100%;
							text-align: center;
						}
					}
				}
			}
		}

		.footer-section2 {
			background-color: rgba(239, 236, 226, 1);
			height: 90px;
			line-height: 90px;

			.footer-section2-wrapper {
				.media {
					width: 100%;
					text-align: center;	
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

		.footer-section3 {
			height: 40px;

			.footer-section3-wrapper {
				height: 40px;
				line-height: 40px;
				text-align: center;
			}
		}
	}
</style>
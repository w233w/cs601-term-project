<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {

		}
	}
}
</script>

<style>
/*PC Screen Size*/
@media only screen and (min-width:1000px) {

	/*Menu gose to top when screen become smaller*/
	header {
		height: 42px;
		width: 100%;
	}

	/*Avoid conflict with menu*/
	main {
		padding-top: 32px;
	}

	main,
	footer {
		padding-left: 20px;
		padding-right: 20px;
	}
}

/*Tablet Size*/
@media only screen and (max-width: 1000px) {

	/*Vertical menu when using large screen*/
	header {
		height: 100%;
		width: 150px;
	}

	/*Avoid conflict with menu*/
	main,
	footer {
		padding-left: 160px;
		padding-right: 20px;
	}
}

body {
	background-color: #F5F5DC;
}

/*Overall menu style*/
header {
	background-color: #E0E094;
	position: fixed;
	left: 0;
	top: 0;
}

footer {
	font-family: Arial, Helvetica, sans-serif;
}

/*Easier to read*/
p {
	font-family: Arial, Helvetica, sans-serif;
	line-height: 20px;
}

h1 {
	font-family: "Lucida Handwriting", Helvetica, sans-serif;
	font-size: 250%;
}

figure.in-text {
	margin: 16px 20px;
}

figure.in-text img {
	width: 70%;
	height: 100%;
	display: block;
	margin-left: auto;
	margin-right: auto;
}

.extra-links {
	padding-left: 20px;
	margin-top: -10px;
}

.extra-links a {
	text-decoration: none;
}
</style>

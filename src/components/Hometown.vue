<template>
	<header>
		<Menubar />
	</header>
	<main>
		<h1>Hangzhou</h1>
		<table class="info-table">
			<tr>
				<th>English Name</th>
				<td>Hangzhou</td>
			</tr>
			<tr>
				<th>Chinese Name</th>
				<td>杭州</td>
			</tr>
			<tr>
				<th>Location</th>
				<td>30.16°N, 120.12°E</td>
			</tr>
			<tr>
				<th>Average Tempture</th>
				<td>16.5°C / 61.7°F</td>
			</tr>
		</table>
		<p>
			&emsp;Hangzhou is the provincial capital of Zhejiang Province. 
			Zhejiang is located in the east of China and close to the East China Sea, the monsoon climate is humid and rainy. 
			So in Hangzhou, the weather becomes hot and rainy in summer, and little rain in winter. 
			I remember once the temperature was even raised to 40 C.
		</p>
		<p>
			&emsp;The most interesting thing about Hangzhou is that the city is built on the edge of a huge lake. 
			You can see how big this lake is from the satellite image.
		</p>
		<p>
			&emsp;The lower right corner of the satellite image is the Qiantang River running through Zhejiang which is also a giant body of water.
		</p>
		<figure class="in-text">
			<img src="../assets/hangzhou.png" alt="hangzhou">
		</figure>
	</main>
	<footer>
		<h3>Learn More about Hangzhou</h3>
		<ul class="extra-links">
			<li><a href="https://en.wikipedia.org/wiki/Hangzhou" target="_blank">Wikipedia</a></li>
			<li><a href="https://www.facebook.com/Hangzhou.China" target="_blank">Facebook</a></li>
			<li><a href="https://www.instagram.com/hangzhou_china/" target="_blank">Instagram</a></li>
		</ul>
	</footer>
</template>

<script>
import Menubar from './Menubar.vue'

export default {
	name: 'HometownVue',
	components: {
		Menubar
	}
}
</script>

<style scoped>
.info-table {
	border: 1px solid black;
	background-image: url("../assets/table_background.jpg");
}

.info-table th,  td{
	border: 1px solid black;
	padding: 3px 15px;
}
</style>
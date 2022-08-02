<template>
    <nav>
		<h2 class="nav-header">Contents</h2>
		<ul class="nav-ul">
			<li><a href="./Introduction.html">Introduction</a></li>
			<li><a href="./Hometown.html">Hometown</a></li>
			<li><a href="./Gaming.html">Game life</a></li>
            <li><router-link to="{path: 'Introduction' }">GG</router-link></li>
		</ul>
	</nav>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'Menu-bar',
        data() {
            return ;
        }
    }
</script>

<style>

</style>
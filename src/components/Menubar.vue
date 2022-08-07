<template>
    <nav>
        <h2 class="nav-header">Contents</h2>
        <ul class="nav-ul">
            <li>
                <router-link to="./Introduction">Introduction</router-link>
            </li>
            <li>
                <router-link to="./Hometown" ref="./Hometown">Hometown</router-link>
            </li>
            <li>
                <router-link to="./Gamelife" ref="./Gamelife">My Gamelife</router-link>
            </li>
            <li>
                <router-link to="./Resume" ref="./Resume">Resume</router-link>
            </li>
            <li>
                <router-link to="./Gallary" ref="./Gallary">Gallary</router-link>
            </li>
            <li>
                <router-link to="./Survey" ref="./Survey">Survey</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Menu-bar'
}
</script>

<style scoped>
/*PC Screen Size*/
@media only screen and (min-width:1000px) {
	.nav-header {
		float: left;
		margin: 4px 16px;
		text-align: center;
		font-family: "Arial Black", Helvetica, sans-serif;
	}

	.nav-ul li {
		float: left;
	}

	.nav-ul a {
		padding: 12px 12px;
	}
}

/*Tablet Size*/
@media only screen and (max-width: 1000px) {
	.nav-header {
		text-align: center;
		font-family: "Arial Black", Helvetica, sans-serif;
	}

	.nav-ul a {
		padding: 16px 12px;
	}
}

.nav-ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	background-color: #E0E094;
}

.nav-ul li {
	text-align: center;
}

.nav-ul a {
	color: #000000;
	text-decoration: none;
	display: block;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: bold;
}

.nav-ul a:hover {
	background-color: #EFEF94;
	color: #CC33CC;
}
nav a.router-link-exact-active {
    color: brown;
    background-color: #EFEF94;
}
</style>
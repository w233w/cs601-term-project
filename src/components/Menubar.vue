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
nav a.router-link-exact-active {
    color: brown;
    background-color: #EFEF94;
}
</style>
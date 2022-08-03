<template>
    <nav>
        <h2 class="nav-header">Contents</h2>
        <ul class="nav-ul">
            <li>
                <router-link to="./Introduction">Introduction</router-link>
            </li>
            <li>
                <router-link to="./Hometown">Hometown</router-link>
            </li>
            <li>
                <router-link to="./Gamelife">My Gamelife</router-link>
            </li>
            <li>
                <router-link to="./Resume">Resume</router-link>
            </li>
            <li>
                <router-link to="./Gallary">Gallary</router-link>
            </li>
            <li>
                <router-link to="./Survey">Survey</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Menu-bar'
}
</script>

<style>
</style>
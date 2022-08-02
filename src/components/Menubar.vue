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
                <router-link to="./Myform">Talk about yourself</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Menu-bar',
    data() {
        return;
    }
}
</script>

<style>
</style>
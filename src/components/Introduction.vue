<template>
    <header>
        <Menubar />
    </header>
    <main>
        <h1>Introduce Myself</h1>
        <p>
            &emsp;My name is Yang Ye, you can call me Yang and it is pronounced as 'Young' in Chinese.
            I'm coming from Hangzhou, Zhejiang, China. 
            Hangzhou is a beautiful city with a great lake inside the city called West Lake. 
            I believe you will like the lake when you visit Hangzhou. 
            I spent 20 years in my hometown until I came to America in 2017. 
            Then I finished my undergraduate program in Computer Science at UNH. 
            It was a good place, the whole university is a small town with lakes and mountains. 
            Yes, I love lakes.
        </p>
        <p>
            &emsp;This is the West Lake. A single picture can't show all its beauty.
        </p>
        <figure class="in-text">
            <img src="../assets/west_lake.jpg" alt="west lake">
        </figure>
        <p>
            &emsp;My favorite thing is games. 
            To be honest, no matter video games or table games, I can play games all day if there is no work or homework due. 
            Elder people always say the game is not good for your study, but the game really helps me relax and relieve anxiety. 
            I start playing computer games at a very young because my parent buys a computer in my bookroom. 
            It was not supposed to be used as a game computer but I still find a chance to play games on it. 
            Because of my childhood. 
            One of my dreams is to become a game designer or game programmer, and I'm currently working on it. 
            Additionally, I'm also doing game live streaming from time to time. 
            And if you are interested, you can find my live broadcast room in the link below.
        </p>
    </main>
    <footer>
        <h3>Contect Information</h3>
        <ul class="extra-links">
            <li><a href="mailto:ttlovemiku@gmail.com">Email me</a></li>
            <li><a href="https://www.linkedin.com/in/yangye1995/" target="_blank">Linked In</a></li>
            <li><a href="https://live.bilibili.com/24438" target="_blank">My live streaming site on bilibili.com</a>
            </li>
        </ul>
    </footer>
</template>

<script>
import Menubar from './Menubar.vue'

export default {
    name: 'IntroductionVue',
    components: {
        Menubar
    }
}
</script>

<style>
</style>
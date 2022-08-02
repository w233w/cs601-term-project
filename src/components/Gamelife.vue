<template>
    <header>
        <nav>
            <Menubar />
        </nav>
    </header>
    <main>
        <h1>My life about games</h1>
        <p>
            &emsp;As I said in the introduction, I love playing games.
            It's no exaggeration to say that I play games for an average of 4 hours a day.
            It is not only about relaxing or enjoying free time.
            I usually record my game progress and post it to bilibili (a video site) or live stream my gaming.
            I really hope one day I can make money from it, but it is just an imagine now.
        </p>
        <p>
            &emsp;I play almost any kind of game, video games, pc games, console games, and table games.
            I own a Nintendo Switch, Xbox One (I know it's old), and of course a gaming laptop.
            Mostly I play game on my laptop.
            If you want play with me you can click the link below or use my friend code "183720862" in add friend page.
            Also feel free to add my discord, my ID is "w233w#7402".
        </p>
        <figure class="in-text">
            <img src="../assets/steam.jpg" alt="my game collection">
        </figure>
    </main>
    <footer>
        <h3>Want play with me?</h3>
        <ul class="extra-links">
            <li><a href="https://steamcommunity.com/id/w233w/" target="_blank">Steam profile</a></li>
            <li><a href="https://live.bilibili.com/24438" target="_blank">My live streaming</a></li>
        </ul>
    </footer>
</template>

<script>
import Menubar from './Menubar.vue'

export default {
    name: 'GamelifeVue',
    components: {
        'Menubar': Menubar
    }
}
</script>
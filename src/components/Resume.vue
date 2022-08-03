<template>
    <header>
        <Menubar />
    </header>
    <main>
        <ResumeTitleBar :title="title1"/>
        <ul>
            <li>Having over 5 years of study abord experiences; fluenting in written and verbal English communication.</li>
        </ul>
    </main>
</template>

<script>
import Menubar from './Menubar.vue'
import ResumeTitleBar from './ResumeTitleBar.vue'

export default {
    name: 'ResumeVue',
    components: {
        "Menubar": Menubar,
        ResumeTitleBar
    },
    data() {
        return {
            title1: "ABILITY"
        }
    }
}
</script>
<template>
    <header>
        <Menubar />
    </header>
    <main>
        <ResumeTitleBar :title="title1"/>
    <div>
        <div v-for="data in resumeData" v-bind:key="data.title">{{data}}</div>
    </div>
    </main>
</template>

<script>
import Menubar from './Menubar.vue'
import ResumeTitleBar from './ResumeTitleBar.vue'
import resumejson from '../assets/resume.json'

export default {
    name: 'ResumeVue',
    components: {
    Menubar,
    ResumeTitleBar,
},
    data() {
        return {
            title1: "ABILITY",
            resumeData: resumejson
        }
    }
}
</script>
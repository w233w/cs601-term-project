<template>
    <header>
        <Menubar />
    </header>
    <main>
        <ResumeSection v-for="data in resumeData" :title="data.title" :breakline="data.breakline" :layout="data.layout"
            :content="data.content" v-bind:key="data.title" />
    </main>
</template>

<script>
import Menubar from './Menubar.vue'
import ResumeSection from './ResumeSection.vue'
import resumejson from '../assets/resume.json'

export default {
    name: 'ResumeVue',
    components: {
        Menubar,
        ResumeSection,
    },
    data() {
        return {
            title1: "ABILITY",
            resumeData: resumejson
        }
    }
}
</script>
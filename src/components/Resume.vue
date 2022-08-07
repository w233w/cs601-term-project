<template>
    <header>
        <Menubar />
    </header>
    <main>
        <ResumeSection v-for="data in resumeData" :title="data.title" :breakline="data.breakline"
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
            resumeData: resumejson
        }
    }
}
</script>

<style scoped>
/*PC Screen Size*/
@media only screen and (min-width:1000px) {
	/*Avoid conflict with menu*/
	main {
		margin-top: 16px;
        margin-bottom: 60px;
	}
}

/*Tablet Size*/
@media only screen and (max-width: 1000px) {

	/*Vertical menu when using large screen*/
	main {
        margin-left: 10px;
        margin-bottom: 60px;
	}
}
</style>
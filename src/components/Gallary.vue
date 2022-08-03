<template>
    <header>
        <Menubar />
    </header>
    <main>
        <Gallary :imageList="images" />
    </main>
</template>

<script>
import Menubar from './Menubar.vue'
import Gallary from './ImageGallary.vue'
import imageData from './imageData.js'

export default {
    name: 'GallaryVue',
    components: {
        Menubar,
        Gallary
    },
    data() {
        return {
            images: imageData
        }
    }
}
</script>

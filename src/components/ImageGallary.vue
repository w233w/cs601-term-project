<template>
    <div class="imgSize">
        <img :src="targetImage.src" alt="NoImage" @mouseover="nextImage()" @focus="nextImage()" />
    </div>
    <h2 id="description">Description:</h2>
    <p id="description">{{ targetImage.msg }}</p>
</template>

<script>

export default {
    name: 'PreImage',
    props: {
        imageList: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            imageIndex: 0,
        };
    },
    computed: {
        targetImage() {
            return this.imageList[this.imageIndex];
        },
    },
    methods: {
        nextImage() {
            this.imageIndex = this.imageIndex <= 0 ? this.imageList.length - 1 : this.imageIndex - 1;
        },
    },
};
</script>

<style scoped>
.imgSize {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 50%;
    margin-top: 32px;
}

.imgSize img {
    border: 6px solid #e0e094;
    height: 100%;
    width: 100%;
}

#description {
    text-align: center;
    font-size: 32px;
}
</style>
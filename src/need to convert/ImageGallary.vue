<template>
    <div class="imgSize">
        <img :src="targetImage" alt="NoImage" @mouseover="nextImage()" @focus="nextImage()" />
    </div>
    <h2>Description:</h2>
    <p>{{ msg }}</p>
</template>

<script>
let message = [
    "2022, I'm graduated!",
    "2013, In BeiJing, China",
    "2014, Trevel to Europe",
    "2015, My old social media photo.",
    "2021, My ID photo on BU ID card.",
];

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
            msg: message[0],
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
            this.msg = message[this.imageIndex];
        },
    },
};
</script>

<style scoped>
.imgSize {
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    height: 70%;
    border: 6px solid #e0e094;
}

.imgSize img {
    height: 100%;
    width: 100%;
}

h2, p {
    text-align: center;
    font-size: 32px;
}
</style>
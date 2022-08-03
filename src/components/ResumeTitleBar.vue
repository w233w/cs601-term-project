<template>
    <section>
        <h2 id="resumeSectionTitle">{{title}}</h2>
        <div class="breakline" :style="{ width: breaklineWidth, 'border-bottom': breakLine }"></div>
    </section>
</template>

<script>
    export default {
        name: 'ResumeTitleBar',
        props: {
            // title of section
            title: {
                type: String,
                required: true
            },
            // has breakline or not
            breakline: {
                type: Boolean,
                default() {
                    return true
                }
            },
        },
        data() {
            return {
                breaklineWidth: "100%",
            }
        },
        computed: {
            breakLine() {
                return this.breakline ? "1px solid #444" : "";
            }
        }
    }
</script>
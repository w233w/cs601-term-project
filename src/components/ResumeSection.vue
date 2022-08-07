<template>
    <section id="resumeSection">
        <h2 id="resumeSectionTitle">{{ title }}</h2>
        <div class="breakline" :style="{ width: breaklineWidth, 'border-top': breakLine }"></div>
        <div v-for="data in content" v-bind:key="data.detail[0]">
            <table id="innertitle">
                <tr>
                    <td class="left" id="subtitle">{{ data.subtitle }}</td>
                    <td class="right" id="data">{{ data.date }}</td>
                </tr>
                <tr>
                    <td class="left" id="description">{{ data.description }}</td>
                    <td class="right" id="sub_description">{{ data.sub_description }}</td>
                </tr>
            </table>
            <div v-if="data.detail_layout == hori">
                <ul v-for="row in data.detail" v-bind:key="row.length" id="hori">
                    <li>{{ row }}</li>
                </ul>
            </div>
            <div v-if="data.detail_layout != hori">
                <ul v-for="row in data.detail" v-bind:key="row.length" if="norm">
                    <li>{{ row }}</li>
                </ul>
            </div>
            <div style="clear:both;"></div>
        </div>
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
        content: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            breaklineWidth: "100%",
            hori: "horizontal"
        }
    },
    computed: {
        breakLine() {
            return this.breakline ? "1px solid #444" : "";
        },
        vert() {
            return this.layout == "horizontal";
        }
    }
}
</script>

<style scoped>
#resumeSection {
    font-family: "Times New Roman", Times, serif;
}

#innertitle {
    width: 100%;
}

#subtitle {
    font-size: 20px;
    font-weight: 800;
}

#description {
    font-style: oblique;
    font-size: 18px;
}

#hori {
    float: left;
}

.breakline {
    margin-top: -20px;
}

.left {
    text-align: left;
}

.right {
    text-align: right;
}

li {
    margin: -8px 12px -8px -12px;
}
</style>
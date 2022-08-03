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
            <div id="detail" v-for="row in data.detail" v-bind:key="row.length" :style="{DetailLayout}">
                <ul id="detailList">
                    <li>{{ row }}</li>
                </ul>
            </div>
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
            required: true,
            default() {
                return true
            }
        },
        layout: {
            type: Array,
            required: true
        },
        content: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            breaklineWidth: "100%",
            Layout: "{}"
        }
    },
    computed: {
        breakLine() {
            return this.breakline ? "1px solid #444" : "";
        },
        DetailLayout() {
            if(this.layout == "horizontal") {
                return "float : left";
            }
            else if(this.layout == "two_row") {
                return "{}";
            }
            else {
                return "{}";
            }
        }
    }
}
</script>

<style>
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
}

.breakline {
    margin-top: -10px;
}

.left {
    text-align: left;
}

.right {
    text-align: right;
}

</style>
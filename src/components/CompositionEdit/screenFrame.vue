<template>
    <div style="height: 100%;width: 100%" :key="dataFromParent.id" v-on:click="!dataFromParent.isParent ? selectModule(dataFromParent.id) : nothing()">

        <div v-if="dataFromParent.type === 'SplitHoriz'" style="height: 100%; width: 100%; display:inline-block">
            <div v-for="resource in dataFromParent.submodules" :key="resource.id" style="height: 50%; width: 100%; display:inline-block">
                <screen-frame :data-from-parent="resource"></screen-frame>
            </div>
        </div>

        <div v-if="dataFromParent.type === 'SplitVert'" style="height: 100%; width: 100%; display:inline-block">
            <div v-for="resource in dataFromParent.submodules" style="height: 100%; width: 50%; display:inline-block">
                <screen-frame :data-from-parent="resource"></screen-frame>
            </div>
        </div>

        <div v-if="dataFromParent.type === 'SplitFour'" style="height: 100%; width: 100%; display:inline-block">
            <div v-for="resource in dataFromParent.submodules" style="height: 50%; width: 50%; display:inline-block">
                <screen-frame :data-from-parent="resource"></screen-frame>
            </div>
        </div>

        <div v-if="dataFromParent.type === 'Slide'" style="height: 100%; width: 100%; display:inline-block">
            <v-carousel hide-controls height="100%" width="100%">
                <v-carousel-item
                    v-for="resource in dataFromParent.submodules"
                    :key="resource.id"
                    height="100%" width="100%"
                >
                    <screen-frame :data-from-parent="resource"></screen-frame>
                </v-carousel-item>
            </v-carousel>
        </div>

        <div v-if="dataFromParent.type === 'image'" style="height: 100%; width: 100%; display:inline-block">
            <img :src="dataFromParent.data" style="max-height: 100%; max-width: 100%"/>
        </div>

        <div v-if="dataFromParent.type === 'video'" style="height: 100%; width: 100%; display:inline-block">
            <video :autoplay="true" :loop="true">
                <source :src="dataFromParent.data" type="video/mp4"/>
            </video>
        </div>

    </div>
</template>

<script>
import { EventBus } from '../../Events.js';



export default {
    name: 'screenFrame',
    data() {
        return {
            value: 0,
            test: "blabla",
            path: null,
            items: [
                {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
                {src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
                {src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
                {src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
            ]
        }
    },
    mounted() {
        EventBus.$on('splitHorizontally', data => {
            this.value = data;
        });

    },
    props: ["dataFromParent"],

    components: {
    },
    computed: {
    },
    methods: {
        selectModule(id) {
            EventBus.$emit('provideCurrentModule', id);

        },
        nothing(){

        }
    }
};
</script>

<style scoped>

</style>

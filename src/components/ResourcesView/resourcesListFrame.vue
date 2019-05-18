<template>
    <div style="height: 100%">
        <v-card height="90%">
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Resources List</h3>
                </div>
            </v-card-title>
            <v-list v-for="resource in items" :key="resource.url">
                <v-list-tile @click="showImage(resource)">
                    <v-list-tile-content>
                        <v-list-tile-title v-html="resource.name"/>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-card>

    </div>
</template>

<script>
import * as apiResource from '../../actions/ressourceApi'
import { EventBus } from '../../Events.js';

let tvCounter = 4;

export default {
    name: 'resourcesListFrame',
    components: {
    },

    data() {
        return {
            id: null,
            items: [
                {name: "squirrel", file : "", url :'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
                {name: "sky", file : "", url :'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
                {name: "bird", file : "", url :'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
                {name: "planet", file : "", url :'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
            ]

        };
    },
    mounted() {
        EventBus.$on('passUrl', data => {
            this.addImageUrlToList(data);
        });
        EventBus.$on('passLocalImage', data => {
            this.addImageFromLocal(data);
        });

    },
    computed: {
    },
    methods: {
        getAllResources(){
            //todo...
        },
        addImageUrlToList(data){
            //todo...
        },
        addImageFromLocal(data){
            //todo...
        },
        showImage(image) {
            //todo...
        }

    }
};
</script>

<style scoped>

</style>

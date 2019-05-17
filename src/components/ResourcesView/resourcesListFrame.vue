<template>
    <div style="height: 100%">
        <v-card height="90%">
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Resources List</h3>
                </div>
            </v-card-title>
            <v-card-text>

            </v-card-text>
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
                'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
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

    }
};
</script>

<style scoped>

</style>

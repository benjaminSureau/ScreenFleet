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

export default {
    name: 'resourcesListFrame',
    components: {
    },

    data() {
        return {
            id: null,
            items: []

        };
    },
    async mounted() {

        let res = await apiResource.getRessources();
        for(const resource of res.data.resources) {
            console.log(resource);
            await this.items.push({
                name: resource.multimediaLink.small(),
                file: "",
                url: resource.multimediaLink
            });
        }

        EventBus.$on('passUrl', data => {
            this.addImageUrlToList(data);
        });
        /*EventBus.$on('passLocalImage', data => {
            this.addImageFromLocal(data);
        });*/
        EventBus.$on('addToList', data => {
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
            this.items.push(data);
        },
        showImage(image) {
            //todo...
        }

    }
};
</script>

<style scoped>

</style>

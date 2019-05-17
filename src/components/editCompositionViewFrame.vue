<template>
    <div style="height: 100%">

        <v-card height="70%" id="12345">
            <v-card height="100%">

                <span v-html="v5cdc0fe0943dbc31545d1ed9"></span>

            </v-card>

        </v-card>
    </div>
</template>

<script>
import { EventBus } from '../Events.js';



export default {
    name: 'editCompositionViewFrame',
    data() {
        return {
            value: 0,
            v5cdc0fe0943dbc31545d1ed9: null,
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
            this.splitHorizontally();

        });
        EventBus.$on('splitVertically', data => {
            this.value = data;
            this.splitVertically();

        });
        EventBus.$on('splitToFourth', data => {
            this.value = data;
            this.splitToFourth();

        });
        EventBus.$on('insertSlide', data => {
            this.value = data;
            this.insertSlide();

        });

        EventBus.$on('insertStream', data => {
            this.value = data;
            this.insertStream();

        });
        EventBus.$on('insertVideo', data => {
            this.value = data;
            this.insertVideo();

        });
        EventBus.$on('insertImage', data => {
            this.value = data;
            this.insertImage();

        });

        EventBus.$on('deleteContent', data => {
            this.value = data;
            this.deleteContent();

        });

    },
    components: {
    },
    computed: {
    },
    methods: {
// module creation
        splitHorizontally() {
            console.log(this.value);
            this.v5cdc0fe0943dbc31545d1ed9 = `
    	    <div style="height: 50%;width: 100%; background-color: red">
                <span v-html="testConnection"></span>
                </div>
    	    <div style="height: 50%;width: 100%; background-color: blue">
            </div>

	`;
        },

        splitVertically(){
            console.log(this.value);
            this.testConnection = `
                    <div style="display: inline-block;background-color:yellow; height:100%; width:50%; float: left;">
                    </div>
                    <div style="display: inline-block;background-color:green; height:100%; width:50%;float: left;">
                    </div>
	`;
        },
        splitToFourth(){
            this.v5cdc0fe0943dbc31545d1ed9 = `
                <div style="display: inline-block;background-color:yellow; height:50%; width:50%; float: left;">
                </div>
                <div style="display: inline-block;background-color:red; height:50%; width:50%;float: left;">
                </div>
                <div style="display: inline-block;background-color:green; height:50%; width:50%; float: left;">
                </div>
                <div style="display: inline-block;background-color:brown; height:50%; width:50%;float: left;">
                </div>
	`;

        },
        insertSlide(){
            this.v5cdc0fe0943dbc31545d1ed9 = `
        <v-carousel hide-controls>
            <v-carousel-item
            v-for="(item,i) in items"
                :key="i"
        :src="item.src"
                ></v-carousel-item>
                </v-carousel>
         `;

        },

// resources creation
        insertStream(){

        },
        insertVideo(){

        },
        insertImage(){

        },
// delete object

        deleteContent(){
        }
    }
};
</script>

<style scoped>

</style>

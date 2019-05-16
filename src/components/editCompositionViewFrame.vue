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
            v5cdc0fe0943dbc31545d1ed9: null
        }
    },
    mounted() {
        EventBus.$on('splitHorizontally', data => {
            this.value = data;
            this.splitHorizontally();

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
            </div>
    	    <div style="height: 50%;width: 100%; background-color: blue">
            </div>

	`;
        },

        splitVertically(){

        },
        splitToFourth(){

        },
        insertSlide(){

        },

// resources creation
        insertStream(){

        },
        insertVideo(){

        },
        insertImage(){

        },
// delete object

        deleteContent(id,type){
        }
    }
};
</script>

<style scoped>

</style>

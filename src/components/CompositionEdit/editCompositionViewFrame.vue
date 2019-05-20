<template>
    <div style="height: 100%">
        <v-card height="70%" id="12345">
            <v-card height="100%" >
                <screen-frame :data-from-parent="dataSend"></screen-frame>
            </v-card>

        </v-card>
    </div>
</template>

<script>
import { EventBus } from '../../Events.js';
import ScreenFrame from "./screenFrame";



export default {
    name: 'editCompositionViewFrame',
    data() {
        return {
            value: 0,
            dataSend: [],
            v5cdc0fe0943dbc31545d1ed9: null,
            items: [],
        }
    },
    mounted() {
        EventBus.$on('sendData', data => {
            console.log(data);
            this.dataSend = data;

        });

    },
    components: {
        ScreenFrame
    },
    computed: {
    },
    methods: {
        splitHorizontally() {
            console.log(this.value);

        },
    }
};
</script>

<style scoped>

</style>

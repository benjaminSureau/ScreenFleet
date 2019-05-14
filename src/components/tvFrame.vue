<template>
    <div>
        <v-card-title class="justify-center">
            <div>
                <h3 class="headline mb-0">TV</h3>
            </div>
        </v-card-title>

        <v-layout row wrap class="justify-center">
            <div class="list-tv" v-for="tv in tvList">
                <v-flex pa-3>
                    <v-card
                        v-on:click.native ="show(tv)"
                    >
                        <v-card-title class="justify-center">
                            <h3 class="headline mb-0" >{{tv.name}}</h3>
                        </v-card-title>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{typeof tv.composition==='undefined' ? 'null' : tv.composition.name}}</h3>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </div>
        </v-layout>

        <v-card-actions class="right">
            <v-btn fab dark small>
                <v-icon dark>remove</v-icon>
            </v-btn>

            <v-btn fab dark small v-on:click="addTv(tvList)">
                <v-icon dark>add</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
import { selectedComposition } from './compositionFrame'

const tvList =[
    { name: 'TV 1', },
    { name: 'TV 2', },
    { name: 'TV 3', },
    { name: 'TV 4', }
];

let tvCounter = 4;

export default {
    name: 'tvFrame',
    components: {
    },
    data() {
        return {
            tvList
        };
    },
    computed: {
    },
    methods: {
        addTv: function (tvList) {
            tvCounter++;
            tvList.push({_id: tvCounter, name: 'TV ' + tvCounter});
        },
        show: function (tv) {
            if (selectedComposition != null) {
                tv.composition = selectedComposition;
                console.log(tv.composition.name);
                this.$forceUpdate();
            }
        },
    }
};
</script>

<style scoped>

</style>

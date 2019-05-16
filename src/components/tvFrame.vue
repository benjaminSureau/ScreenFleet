<template>
    <div>
        <v-card-title class="justify-center">
            <div>
                <h3 class="headline mb-0">TVs</h3>
            </div>
        </v-card-title>

        <v-layout row wrap class="justify-center" @click="select(null)">
            <div class="list-tv" v-for="tv in tvList">
                <v-flex pa-3>
                    <v-card
                        v-bind:style="(selectedComposition === null && tv === selectedTv) ? 'background :#483D8B': 'background :#FFFFFF'"
                        v-on:click.native.stop="select(tv)"
                        v-on:dblclick.native ="show(tv)">
                        <v-card-title class="justify-center">
                            <h3 class="headline mb-0" >{{tv.name}}</h3>
                        </v-card-title>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{typeof tv.composition==='undefined' ? 'Vide' : tv.composition.name}}</h3>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </div>
        </v-layout>

        <v-card-actions class="right">
            <v-btn fab dark small v-on:click="removeTv(tvList)" v-bind:dark="selectedTv !== null" :disabled="selectedTv === null">
                <v-icon dark>remove</v-icon>
            </v-btn>

            <v-btn fab dark small v-on:click="addTv(tvList)">
                <v-icon dark>add</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
import { EventBus } from '../Events.js';

const tvList =[
    { name: 'TV 1', },
    { name: 'TV 2', },
    { name: 'TV 3', },
    { name: 'TV 4', }
];

let tvCounter = 4;
let selectedTv;
let selectedComposition = null;

export default {
    name: 'tvFrame',
    mounted() {
        EventBus.$on('selectComposition', composition => {
            this.selectedTv = null;
            this.selectedComposition = composition;
        });
    },
    components: {
    },
    data() {
        return {
            tvList,
            selectedTv,
            selectedComposition
        };
    },
    computed: {
    },
    methods: {
        addTv: function (tvList) {
            tvCounter++;
            tvList.push({_id: tvCounter, name: 'TV ' + tvCounter});
        },
        removeTv: function (tvList) {
            if (typeof selectedTv !== 'undefined' && selectedTv != null) {
                apiTV.deleteTV(selectedTv._id)
                    .then(() => {
                        tvCounter--;
                        for (let i = 0; i < tvList.length; i++) {
                            if (tvList[i] === selectedTv) {
                                tvList.splice(i,1);
                            }
                        }
                    })
                    .catch((err) => {
                        alert(err);
                    })
            }
        },
        select: function (tv) {
            if (this.selectedComposition === null) {
                if (tv === this.selectedTv) {
                    this.selectedTv = null;
                } else {
                    this.selectedTv = tv;
                }
            }
            if (this.selectedComposition !== null) {
                tv.composition = this.selectedComposition;
                console.log(tv.composition );
            }
            this.$forceUpdate();
        },
    }
};
</script>

<style scoped>
    .v-icon {
        display: inline-flex !important;
    }
</style>

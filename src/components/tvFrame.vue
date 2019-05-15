<template>
    <div>
        <v-card-title class="justify-center">
            <div>
                <h3 class="headline mb-0">TV</h3>
            </div>
        </v-card-title>

        <v-layout row wrap class="justify-center" @click="select(null)">
            <div class="list-tv" v-for="tv in tvList">
                <v-flex pa-3>
                    <v-card
                        v-bind:style="isSelected(tv) ? 'background :#483D8B': 'background :#FFFFFF'"
                        v-on:click.native.stop="select(tv); show(tv)"
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
            <v-btn fab dark small v-on:click="removeTv(tvList)">
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
let selectedTv;

export default {
    name: 'tvFrame',
    components: {
    },
    data() {
        return {
            tvList,
            selectedTv
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
            tvList.pop();
            if (tvCounter > 0) {
                tvCounter--;
            }
        },
        show: function (tv) {
            if (selectedComposition != null) {
                tv.composition = selectedComposition;
            }
            this.$forceUpdate();
        },
        select: function (tv) {
            if (selectedComposition === null) {
                if (tv === this.selectedTv) {
                    this.selectedTv = null;
                } else {
                    this.selectedTv = tv;
                }
            }
        },
        isSelected: function (tv) {
            console.log(selectedComposition);
            if (selectedComposition !== null) {
                return false;
            }
            return (selectedComposition !== undefined && tv === this.selectedTv);
        },
    }
};
</script>

<style scoped>

</style>

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
                        v-on:dblclick.native.stop ="show(tv)">
                        <v-card-title class="justify-center">
                            <h3 class="headline mb-0" >{{tv.name}}</h3>
                        </v-card-title>
                        <v-card-title primary-title class="justify-center">
                            <div>
                                <h3 class="headline mb-0">{{(typeof tv.composition==='undefined' || tv.composition === null)  ? 'Vide' : tv.composition.name}}</h3>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </div>
        </v-layout>

        <v-card-actions class="right">

            <v-btn fab dark small v-on:click="clearTv()" v-bind:dark="selectedTv !== null" :disabled="selectedTv === null">
                <v-icon dark>clear</v-icon>
            </v-btn>

            <v-btn fab dark small v-on:click="removeTv()" v-bind:dark="selectedTv !== null" :disabled="selectedTv === null">
                <v-icon dark>remove</v-icon>
            </v-btn>

            <v-btn fab dark small v-on:click="addTv()">
                <v-icon dark>add</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
import { EventBus } from '../Events.js';
import * as apiTV from '../actions/tvApi';
import * as compositionApi from '../actions/compositionApi';
import router from '../router/index';

let tvCounter = 0;
let selectedTv = null;
let selectedComposition = null;

export default {
    name: 'tvFrame',
    data() {
        return {
            tvList : [],
            selectedTv,
            selectedComposition
        };
    },
    mounted() {
        EventBus.$on('selectComposition', composition => {
            this.selectedTv = null;
            this.selectedComposition = composition;
        });
        apiTV.getTV().then(async (result) => {
            this.tvList = result.data.tvs;
            let tvIndex = [];
            let promises = [];
            this.tvList.forEach((tv, index) => {
                tv.name = 'TV ' + tv._id.slice(-4);
                tv.number = index + 1;
                let id = tv.compositionId === null ? "000000000000000000000000" : tv.compositionId;
                promises.push(compositionApi.getCompositionById(id));
                tvIndex.push(index);
            });
            let results = await Promise.all(promises);
            results.forEach((result, index) => {
                if (this.tvList[index].compositionId != null ) {
                    result.data.composition.name = 'Composition ' + result.data.composition._id.slice(-4);
                    this.tvList[index].composition = result.data.composition;
                }
            });
            this.$forceUpdate();
            this.tvCounter = this.tvList.length;
        }, error => {
            console.error(error);
        });
    },
    components: {
    },
    computed: {
    },
    methods: {
        addTv: function () {
            apiTV.createTV()
                .then((res) => {
                    this.tvCounter++;
                    this.tvList.push({_id: res.data._id, name: 'Tv ' + res.data._id.slice(-4), number: this.tvCounter});
                })
                .catch((err) => {
                    alert(err);
                });
        },
        removeTv: function () {
            if (typeof this.selectedTv !== 'undefined' && this.selectedTv != null) {
                apiTV.deleteTV(this.selectedTv._id)
                    .then(() => {
                        this.tvCounter--;
                        for (let i = 0; i < this.tvList.length; i++) {
                            if (this.tvList[i] === this.selectedTv) {
                                this.tvList.splice(i,1);
                            }
                        }
                        this.selectedTv = null;
                    })
                    .catch((err) => {
                        alert(err);
                    })
            }
        },
        select: function (tv) {
            if (this.selectedComposition === null) {
                if (tv === null || tv === this.selectedTv) {
                    this.selectedTv = null;
                } else {
                    this.selectedTv = tv;
                }
            }
            if (this.selectedComposition !== null && tv !== null) {
                tv.composition = this.selectedComposition;
                let data = {
                    compositionId : this.selectedComposition._id
                };
                apiTV.putTV(tv._id, data);
            }
            this.$forceUpdate();
        },
        clearTv: function () {
            if (this.selectedTv !== null) {
                this.selectedTv.composition = null;
                let data = {
                    compositionId : null
                };
                apiTV.putTV(this.selectedTv._id, data).then(() => {
                    this.$forceUpdate();
                });
            }
        },
        show: function (tv) {
            router.push({ name: 'ShowTv', params: { id: tv._id } })
        }
    }
};
</script>

<style scoped>
    .v-icon {
        display: inline-flex !important;
    }
</style>

<template>
    <div >
        <v-card-title class="justify-center">
            <div>
                <h3 class="headline mb-0">Compositions</h3>
            </div>
        </v-card-title>
        <v-layout row wrap class="justify-center" @click="select(null)">
            <div v-for="composition in compositions">
                <v-flex pa-3>
                    <v-card
                        v-bind:style="selectedComposition === composition ? 'background :#483D8B': 'background :#FFFFFF'"
                        v-on:dblclick.native ="modify(composition)"
                        v-on:click.native.stop ="select(composition)">
                        <v-card-title class="justify-center">
                            <h3 class="headline mb-0" >{{composition.number}}</h3>
                        </v-card-title>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{composition.name}}</h3>
                                </div>
                            </v-card-title>
                    </v-card>
                </v-flex>
            </div>
        </v-layout>

        <v-card-actions>
            <v-btn fab small v-on:click="removeComposition(compositions)" v-bind:dark="selectedComposition !== null" :disabled="selectedComposition === null">
                <v-icon dark>remove</v-icon>
            </v-btn>

            <v-btn fab dark small v-on:click="addComposition(compositions)">
                <v-icon dark>add</v-icon>
            </v-btn>
            <v-btn fab v-on:click="test()">
                <v-icon dark>star</v-icon>
            </v-btn>
        </v-card-actions>

        <!--<div class="list-group col-md-3">
            <pre>{{listString}}</pre>
        </div>-->
    </div>

</template>

<script>
let compoCounter = 1;
let selectedComposition = null;

import * as apiCompo from '../actions/compositionApi'
import * as apiModule from '../actions/moduleApi'
import router from '../router/index';

import { EventBus } from '../Events.js';

export default {
    name: 'compositionFrame',
    components: {
    },
    data() {
        return {
            selectedComposition,
            compositions : []
        };
    },
    mounted() {
        apiCompo.getCompositions().then((result) => {

            this.compositions = result.data.compositions;
            this.compositions.forEach((composition, index) => {
               composition.name = 'Composition ' + composition._id.slice(-4);
               composition.number = index + 1;
            });
            compoCounter = this.compositions.length;
        }, error => {
            console.error(error);
        });
    },
    methods: {
        addComposition: function (compositions) {
            apiCompo.createComposition()
                .then((res) => {
                    compoCounter++;
                    compositions.push({_id: res.data._id, name: 'Composition ' + res.data._id.slice(-4), number: compoCounter});
                })
                .catch((err) => {
                    alert(err);
                });
        },
        removeComposition: function (compositions) {
            if (typeof this.selectedComposition !== 'undefined' && this.selectedComposition !== null) {
                apiCompo.deleteComposition(this.selectedComposition._id)
                    .then(() => {
                        compoCounter--;
                        for (let i = 0; i < compositions.length; i++) {
                            if (compositions[i] === this.selectedComposition) {
                                compositions.splice(i,1);
                            }
                        }
                        this.selectedComposition = null;
                        EventBus.$emit('selectComposition', this.selectedComposition);
                    })
                    .catch((err) => {
                        alert(err);
                    })
            }
        },
        modify: function (composition) {
            /*apiCompo.putComposition(selectedComposition._id, {moduleId : '5cdbd39f8778ae0e18ca11d1'})
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })*/
        },
        select: function (composition) {
            if (composition === this.selectedComposition) {
                this.selectedComposition = null;
            } else {
                this.selectedComposition = composition;
            }
            EventBus.$emit('selectComposition', this.selectedComposition);
        },
        modify: function (composition) {
            router.push({ name: 'EditComposition', params: { id: composition._id } })
        },
        test: function () {
            apiModule.createModule(
                {
                    mode: "VIDEO",
                    nextModuleId: null,
                    numberOfSlides: 0,
                    resources: {multimediaLink: "https://www.youporn.com"},
                    splitMode: "VERTICAL",
                    type: "BASE",
                })
                .then((res) => {
                    console.log(res.data);
                })
        }

    },
    computed: {
    },
    watch: {
    }
};
</script>

<style scoped>
    .v-icon {
        display: inline-flex !important;
    }
</style>

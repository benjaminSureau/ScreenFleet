<template>
    <div @click="select(null)">
        <v-card-title class="justify-center">
            <div>
                <h3 class="headline mb-0">Composition</h3>
            </div>
        </v-card-title>
        <v-layout row wrap class="justify-center">
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
            <v-btn fab dark small v-on:click="removeComposition(compositions)">
                <v-icon dark>remove</v-icon>
            </v-btn>

            <v-btn fab dark small v-on:click="addComposition(compositions)">
                <v-icon dark>add</v-icon>
            </v-btn>
        </v-card-actions>

        <!--<div class="list-group col-md-3">
            <pre>{{listString}}</pre>
        </div>-->
    </div>

</template>

<script>

let compoCounter = 1;
export var selectedComposition = null;
import * as api from '../actions/compositionApi'

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
        api.getCompositions().then((result) => {

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
            api.createComposition()
                .then((res) => {
                    compoCounter++;
                    compositions.push({_id: res.data._id, name: 'Composition ' + res.data._id.slice(-4), number: compoCounter});
                })
                .catch((err) => {
                    alert(err);
                });
        },
        removeComposition: function (compositions) {
            if (typeof selectedComposition !== 'undefined' && selectedComposition != null) {
                api.deleteComposition(selectedComposition._id)
                    .then(() => {
                        compoCounter--;
                        for(let i = 0; i < compositions.length; i++) {
                            if (compositions[i] === selectedComposition) {
                                compositions.splice(i,1);
                            }
                        }
                    })
                    .catch((err) => {
                        alert(err);
                    })

            }
        },
        modify: function (composition) {
            /*api.putComposition(selectedComposition._id, {moduleId : '5cdbd39f8778ae0e18ca11d1'})
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })*/
        },
        select: function (composition) {
            if (composition === selectedComposition) {
                selectedComposition = null;
                this.selectedComposition = null;
            } else {
                selectedComposition = composition;
                this.selectedComposition = composition;
            }
        }
    },
    computed: {
    },
    watch: {
    }
};
</script>

<style scoped>
</style>

<template>
    <div>
        <v-card-title class="justify-center">
            <div>
                <h3 class="headline mb-0">Composition</h3>
            </div>
        </v-card-title>
        <v-layout row wrap class="justify-center">
            <div class="list-tv" v-for="composition in compositions">
                <v-flex pa-3>
                    <v-card
                        v-on:dblclick.native ="modify(composition)"
                        v-on:click.native ="select(composition)"
                    >
                        <v-card-title class="justify-center">
                            <h3 class="headline mb-0" >{{composition._id}}</h3>
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
            <v-btn fab dark small>
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
const compositions = [
    {_id: '1', name: 'Composition 1'},
    {_id: '2', name: 'Composition 2'},
    {_id: '3', name: 'Composition 3'},
    {_id: '4', name: 'Composition 4'}
];

let compoCounter = 4;
export var selectedComposition = null;


export default {
    name: 'compositionFrame',
    components: {
    },
    data() {
        return {
            compositions
        };
    },
    methods: {
        addComposition: function (compositions) {
            compoCounter++;
            compositions.push({_id: compoCounter, name: 'Composition ' + compoCounter});
        },
        modify: function (composition) {
        },
        select: function (composition) {
            selectedComposition = composition;
            console.log(selectedComposition.name);

        }
    },
    computed: {
    },
    watch: {
    }
};
</script>

<style scoped>
    .fade-transition {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave {
        opacity: 0;
    }
</style>

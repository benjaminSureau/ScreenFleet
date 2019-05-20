<template>
    <div style="height: 100%">
        <h3>{{ $route.params.id }}</h3>
        <br/>
        <v-card height="25%">
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Multi</h3>
                </div>
            </v-card-title>
            <v-layout row wrap>
                <v-flex xs6>
                    <div>Split horiz
                        <v-btn fab dark small v-on:click="splitHorizontally()">
                            <v-icon dark>more_horiz</v-icon>
                        </v-btn>
                    </div>
                </v-flex>
                <v-flex xs6>
                    <div>Split vertically
                        <v-btn fab dark small v-on:click="splitVertically()">
                            <v-icon dark>more_vert</v-icon>
                        </v-btn>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs6>
                    <div>Split in four
                        <v-btn fab dark small v-on:click="splitToFourth()">
                            <v-icon dark>fullscreen_exit</v-icon>
                        </v-btn>
                    </div>
                </v-flex>
                <v-flex xs6>
                    <div>Insert Slide
                        <v-btn fab dark small v-on:click="insertSlide()">
                            <v-icon dark>slideshow</v-icon>
                        </v-btn>
                        <v-dialog
                            v-model="dialog"
                            max-width="290"
                        >
                            <v-card>
                                <v-card-title class="headline">Use Google's location service?</v-card-title>

                                <v-card-text>
                                    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn
                                        color="green darken-1"
                                        flat="flat"
                                        @click="dialog = false"
                                    >
                                        Disagree
                                    </v-btn>

                                    <v-btn
                                        color="green darken-1"
                                        flat="flat"
                                        @click="dialog = false"
                                    >
                                        Agree
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-flex>
            </v-layout>

        </v-card>
        <v-card height="25%">
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Base</h3>
                </div>
            </v-card-title>
            <v-layout row wrap>
                <v-flex xs6>
                    <div>Insert Stream
                        <v-btn fab dark small v-on:click="insertStream()">
                            <v-icon dark>video_call</v-icon>
                        </v-btn>
                    </div>
                </v-flex>
                <v-flex xs6>
                    <div>Insert Video
                        <v-btn fab dark small v-on:click="insertVideo()">
                            <v-icon dark>video_library</v-icon>
                        </v-btn>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs6>
                    <div>Insert image
                        <v-btn fab dark small v-on:click="insertImage()">
                            <v-icon dark>image</v-icon>
                        </v-btn>
                    </div>
                </v-flex>
            </v-layout>

        </v-card>
        <br/>
        <v-card height="15%">
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Delete Element</h3>
                </div>
            </v-card-title>

            <div>Clean current element
                <v-btn fab dark small v-on:click="deleteContent()">
                    <v-icon dark>more_horiz</v-icon>
                </v-btn>
            </div>



        </v-card>

    </div>
</template>

<script>
import * as apiCompo from '../../actions/compositionApi'
import * as actionModule from '../../actions/moduleAction'
import { EventBus } from '../../Events.js';

let tvCounter = 4;

export default {
    name: 'editCompositionOptionFrame',
    components: {
    },

    data() {
        return {
            id: null,
            composition : null,
            firtsModule : null,
            dataToSend: [],
            currentData: 'a1',
            currentLenth: 0,
            count: 0,
            dialog: false


        };
    },
    mounted() {
        this.dataToSend = {id: 'a1',type: null, number: null, data: null, isParent: false, submodules: null};
        EventBus.$emit('sendData', this.dataToSend);


        apiCompo.getCompositions(this.$route.params.id)
            .then((res) => {
                this.composition = res.data.composition;
                console.log(this.composition);
                //console.log(this.composition.moduleId);


            })
            .catch((err) => {
                alert(err);
            });

        EventBus.$on('provideCurrentModule', data => {
            this.currentData = data;
            console.log(this.currentData);

        });
    },
    computed: {
    },
    methods: {

// module creation
        async splitHorizontally(){
            let res = actionModule.createSplitHorizontally(this.id);
            EventBus.$emit('sendData', this.dataToSend);

        },
        async splitVertically(){
            let res = actionModule.createSplitVertically(this.id);
            EventBus.$emit('sendData', this.dataToSend);

        },
        async splitToFourth(){
            let res = actionModule.createSplitToFourth(this.id);
            EventBus.$emit('sendData', this.dataToSend);

        },
        async insertSlide(){
            let res = actionModule.createSplitSlide(this.id);
            EventBus.$emit('sendData', this.dataToSend);

        },

// resources creation
        insertStream(){
            EventBus.$emit('sendData', this.dataToSend);


        },
        insertVideo(){
            EventBus.$emit('sendData', this.dataToSend);

        },
        insertImage(){
            this.dialog = true;
            EventBus.$emit('sendData', this.dataToSend);

        },
// delete object

        deleteContent(id,type){

        }
    }
};
</script>

<style scoped>
    .v-icon {
        display: inline-flex !important;
    }
</style>

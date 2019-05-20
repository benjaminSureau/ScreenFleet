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
import * as apiModule from '../../actions/moduleApi'
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
            dialog: false,
            firstModuleUrl: null

        };
    },
    mounted() {
        EventBus.$emit('sendData', this.dataToSend);


        apiCompo.getCompositionById(this.$route.params.id)
            .then((res) => {
                this.composition = res.data.composition;
                this.firstModuleUrl = this.composition.moduleId;
            })
            .catch((err) => {
                alert(err);
            });

        EventBus.$on('provideCurrentModule', data => {
            this.id = data;
            //console.log(this.currentData);

        });
        console.log("zddzddzd");
        this.generateJson();


        },
    computed: {
    },
    methods: {

// module creation
        async splitHorizontally(){
            let res = actionModule.createSplitHorizontally(this.id);
            this.generateJson();

        },
        async splitVertically(){
            let res = actionModule.createSplitVertically(this.id);
            this.generateJson();

        },
        async splitToFourth(){
            let res = actionModule.createSplitToFourth(this.id);
            this.generateJson();

        },
        async insertSlide(){
            let res = actionModule.createSplitSlide(this.id, 5);
            this.generateJson();

        },

// resources creation
        insertStream(){
            EventBus.$emit('sendData', this.dataToSend);


        },
        insertVideo(){
            EventBus.$emit('sendData', this.dataToSend);

        },
        async insertImage(){
            let result = await apiModule.getModule(this.id);

            let res = actionModule.putResourceInModule(result.data.module, 'https://www.noseo.fr/wp-content/uploads/2018/12/URL-Uniform-Resource-Locator.jpg');

            this.generateJson();

        },
// delete object

        deleteContent(id,type){

        },
        async generateJson(){
            let result = await actionModule.getModuleData(this.firstModuleUrl);
            console.log(result);
            this.dataToSend = result;
            EventBus.$emit('sendData', this.dataToSend);
        }
    }
};
</script>

<style scoped>
    .v-icon {
        display: inline-flex !important;
    }
</style>

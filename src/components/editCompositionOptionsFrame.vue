<template>
    <div style="height: 100%">
        <h3>{{ $route.params.id }}</h3>
        <br/>
        <v-card height="25%">
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Split Element</h3>
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
                    <div>Split in fourth
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
                    </div>
                </v-flex>
            </v-layout>

        </v-card>
        <v-card height="25%">
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Insert Element</h3>
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
import * as apiCompo from '../actions/compositionApi'
import * as apiModule from '../actions/moduleApi'

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
        };
    },
    mounted() {
        apiCompo.getCompositions("5cdc0fe1943dbc31545d1eda")
            .then((res) => {
                this.composition = res.data.composition;
                console.log(this.composition);
                console.log(this.composition.moduleId);

                /*if ( this.composition.moduleId == null) {
                    console.log("create module");
                    apiModule.createModule()
                        .then((res) => {
                            this.firtsModule = res.data.module;
                            console.log(this.firtsModule);

                            apiCompo.putComposition(this.composition._id, {
                                moduleId: this.firtsModule._id
                            })
                                .then((res) => {
                                    this.composition = res.data.composition;
                                })
                                .catch((err) => {
                                    alert(err);
                                });

                        })
                        .catch((err) => {
                            alert(err);
                        });
                }*/
            })
            .catch((err) => {
                alert(err);
            });
    },
    computed: {
    },
    methods: {

// module creation
        splitHorizontally(){
            /*apiModule.createModule()
                .then((res) => {
                    //todo...
                })
                .catch((err) => {
                    alert(err);
                });*/
        },
        splitVertically(){
            /*apiModule.createModule()
                .then((res) => {
                    //todo...
                })
                .catch((err) => {
                    alert(err);
                });*/
        },
        splitToFourth(){
            /*apiModule.createModule()
                .then((res) => {
                    //todo...
                })
                .catch((err) => {
                    alert(err);
                });*/
        },
        insertSlide(){
            /*apiModule.createModule()
                .then((res) => {
                    //todo...
                })
                .catch((err) => {
                    alert(err);
                });*/
        },

// resources creation
        insertStream(){

            /*apiMResource.createResource()
                .then((res) => {
                    //todo...
                })
                .catch((err) => {
                    alert(err);
                });*/
        },
        insertVideo(){
            /*apiMResource.createResource()
                .then((res) => {
                    //todo...
                })
                .catch((err) => {
                    alert(err);
                });*/
        },
        insertImage(){
            /*apiMResource.createResource()
                .then((res) => {
                    //todo...
                })
                .catch((err) => {
                    alert(err);
                });*/
        },
// delete object

        deleteContent(id,type){
            /*apiMResource.createResource()
                .then((res) => {
                    //todo...
                })
                .catch((err) => {
                    alert(err);
                });*/
        }
    }
};
</script>

<style scoped>

</style>

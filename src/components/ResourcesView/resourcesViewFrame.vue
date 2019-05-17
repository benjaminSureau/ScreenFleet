<template>
    <div style="height: 100%">
        <v-card height="70%">
            <!--<img style="width: 100%; height: auto" src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"/>-->

            <v-layout row wrap align-center>
                <v-flex xs12>
                    <img :src="localImageUrl" v-if="localImageUrl"/>
                    <img :src="fileUrl" style="max-height: 100%; max-width: 100%"/>
                </v-flex>
            </v-layout>

        </v-card>
        <br/>
        <v-card height="10%">

            <v-layout row wrap>
                <v-flex xs1>
                </v-flex>
                <v-flex xs9>
                    <v-text-field label="Select Image" @click='pickFile' v-model='localImageName' prepend-icon='attach_file'></v-text-field>
                    <input
                        type="file"
                        style="display: none"
                        ref="image"
                        accept="image/*"
                        @change="onFilePicked"
                    >
                </v-flex>
                <v-flex xs1>
                    <v-btn flat icon v-on:click="saveFromLocal()">
                        <v-icon>save</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-card>

        <v-card height="10%">


        <v-layout row wrap>
                <v-flex xs1>
                </v-flex>
                <v-flex xs9>
                    <v-text-field
                        v-model="url"
                        label="url"
                        single-line
                        solo
                    ></v-text-field>
                </v-flex>

                <v-flex xs2>
                    <v-btn flat icon v-on:click="previewFile()">
                        <v-icon>pageview</v-icon>
                    </v-btn>
                    <v-btn flat icon v-on:click="saveUrl()">
                        <v-icon>save</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>

        </v-card>
    </div>
</template>

<script>
import { EventBus } from '../../Events.js';

export default {
    name: 'resourcesViewFrame',
    data() {
        return {
            value: 0,
            url: null,
            currentView: '',
            localImageName: '',
            localImageUrl: '',
            localImageFile: '',
            fileUrl: '',
        }
    },
    mounted() {

    },
    components: {
    },
    computed: {
    },
    methods: {
        test(){
            console.log("test");
        },
        saveUrl(){
            EventBus.$emit('passUrl', this.url);
        },
        previewFile(){
            this.currentView = 'imageUrl';
            this.fileUrl = this.url;

        },
        saveFromLocal(){
            EventBus.$emit('passLocalImage', [this.localImageName, this.localImageFile, this.localImageUrl]);

        },
        pickFile () {
            this.$refs.image.click ()
        },
        onFilePicked (e) {
            this.currentView = 'local';
            const files = e.target.files;
            if(files[0] !== undefined) {
                this.localImageName = files[0].name;
                if(this.localImageName.lastIndexOf('.') <= 0) {
                    return
                }
                const fr = new FileReader ();
                fr.readAsDataURL(files[0]);
                fr.addEventListener('load', () => {
                    this.localImageUrl = fr.result;
                    this.localImageFile = files[0]; // this is an image file that can be sent to server...
                })
            } else {
                this.localImageName = '';
                this.localImageFile = '';
                this.localImageUrl = '';
            }
        }
    }
};
</script>

<style scoped>

</style>

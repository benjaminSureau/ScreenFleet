<template>
    <div style="height: 100%">
        <v-card height="70%">
            <!--<img style="width: 100%; height: auto" src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"/>-->

            <v-layout row wrap align-center style="height: 100%">
                <v-flex xs12>
                    <img :src="imageUrl" v-if="imageUrl" style="max-height: 100%; max-width: 100%"/>
                </v-flex>
            </v-layout>

        </v-card>
        <br/>
        <v-card height="10%">

            <v-layout row wrap>
                <v-flex xs1>
                </v-flex>
                <v-flex xs9>
                    <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'/>
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
                        v-on:keyup.enter="previewFile()"
                    />
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
            imageUrl: '',
            imageName: '',
        }
    },
    mounted() {

    },
    components: {
    },
    computed: {
    },
    methods: {
        saveUrl(){
            EventBus.$emit('passUrl', this.url);
        },
        previewFile(){
            this.currentView = 'imageUrl';
            this.imageUrl = this.url; // this is an image file that can be sent to server...
        },
        saveFromLocal(){
            EventBus.$emit('passLocalImage', [this.localImageName, this.localImageFile, this.localImageUrl]);
        },
        pickFile () {
            this.$refs.image.click();
        },
        onFilePicked (e) {
            this.currentView = 'local';
            const files = e.target.files;
            if(files[0] !== undefined) {
                const fr = new FileReader();
                fr.readAsDataURL(files[0]);
                fr.addEventListener('load', () => {
                    this.imageUrl = fr.result; // this is an image file that can be sent to server...
                    this.imageName = files[0].name;
                });
            } else {
                this.imageUrl = '';
                this.imageName = '';
            }
        }
    }
};
</script>

<style scoped>

</style>

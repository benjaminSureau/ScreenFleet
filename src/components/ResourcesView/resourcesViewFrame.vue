<template>
    <div style="height: 100%">
        <v-card height="70%">
            <!--<img style="width: 100%; height: auto" src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"/>-->

            <v-layout row wrap align-center style="height: 100%">
                <v-flex xs12>
                    <img alt="resource to add" :src="imageUrl" v-if="imageUrl" style="max-height: 100%; max-width: 100%"/>
                    <video :autoplay="true" :loop="true" v-if="videoUrl" >
                        <source :src="videoUrl" type="video/mp4"/>
                    </video>
                </v-flex>
            </v-layout>

        </v-card>
        <br/>
        <v-card height="10%">

            <v-layout row wrap>
                <v-flex xs1>
                </v-flex>
                <v-flex xs9>
                    <v-text-field label="Select Image" @click='pickFile' v-model='fileName' prepend-icon='attach_file'/>
                    <input
                        type="file"
                        style="display: none"
                        ref="image"
                        accept="image/*,video/*"
                        @change="onFilePicked">
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
import * as apiCloud from '../../actions/cloudApi'
import * as apiRessource from '../../actions/ressourceApi'

export default {
    name: 'resourcesViewFrame',
    data() {
        return {
            value: 0,
            url: null,
            file: '',
            currentView: '',
            imageUrl: '',
            fileName: '',
            videoUrl: '',
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
        async saveFromLocal(){
            this.file = this.$refs.image.files[0];
            let formData = new FormData();
            formData.append('file', this.file);
            let result = await apiCloud.postFile(formData);
            this.imageUrl = result.data.fileUrl;
            let resource =
                {
                    multimediaLink: this.imageUrl
                };
            console.log(resource);
            apiRessource.createRessource(resource)
                .then((res) => {
                    let myResource =
                        {
                            name: this.fileName,
                            file: "",
                            url: res.data.multimediaLink,
                            type: "image"
                        };
                    EventBus.$emit('addToList', myResource);
                })
                .catch((err) => {
                    console.log(err);
                });
            EventBus.$emit('passLocalImage', [this.localImageName, this.localImageFile, this.localImageUrl]);
        },
        pickFile () {
            this.$refs.image.click();
        },
        onFilePicked (e) {
            this.videoUrl = '';
            this.fileName = '';
            this.imageUrl = '';
            this.currentView = 'local';
            const files = e.target.files;
            if(files[0] !== undefined) {
                const fr = new FileReader();
                fr.readAsDataURL(files[0]);
                fr.addEventListener('load', () => {
                    if (files[0].type.slice(0, 5) === "image") {
                        this.imageUrl = fr.result; // this is an image file that can be sent to server...
                        this.fileName = files[0].name;
                    } else {
                        this.videoUrl = fr.result;
                        this.fileName = files[0].name;
                    }
                });
            }
        }
    }
};
</script>

<style scoped>

</style>

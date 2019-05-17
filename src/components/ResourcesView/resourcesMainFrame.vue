<template>
    <div id="app">
        <menu-bar></menu-bar>
        <v-app id="inspire">
            <v-layout row wrap>
                <v-flex pa-1 xs9>
                    <resources-view-frame/>

                </v-flex>
                <v-flex pa-1 xs3>
                    <resources-list-frame/>
                </v-flex>
            </v-layout>
        </v-app>
    </div>
</template>

<script>
    import MenuBar from '../menuBar.vue'
    import ResourcesViewFrame from "./resourcesViewFrame";
    import ResourcesListFrame from "./resourcesListFrame";


    export default {
        name: "resourcesMainFrame",

        components : {
            ResourcesListFrame,
            ResourcesViewFrame,
            'menuBar': MenuBar,
        },methods: {

        },
    }
</script>

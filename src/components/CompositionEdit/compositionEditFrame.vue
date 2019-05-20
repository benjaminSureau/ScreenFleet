<template>
    <div id="app">
        <menu-bar></menu-bar>
        <v-app id="inspire">
            <v-layout row wrap>
                <v-flex pa-1 xs9 style="border-right: black">
                    <edit-composition-view-frame/>

                </v-flex>
                <v-flex pa-1 xs3>
                    <edit-composition-option-frame/>
                </v-flex>
            </v-layout>
        </v-app>
    </div>
</template>

<script>
    import MenuBar from '../menuBar.vue'
    import EditCompositionViewFrame from "./editCompositionViewFrame";
    import EditCompositionOptionFrame from "./editCompositionOptionsFrame";


    export default {
        name: "EditComposition",

        components : {
            EditCompositionOptionFrame,
            EditCompositionViewFrame,
            'menuBar': MenuBar,
        },methods: {

        },
    }
</script>

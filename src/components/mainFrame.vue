<template>
    <div id="app">
        <menu-bar></menu-bar>
        <v-app id="inspire">
            <v-layout row wrap>
                <v-flex pa-1 xs6>
                    <composition-frame/>

                </v-flex>
                <v-flex pa-1 xs6>
                    <tv-frame/>
                </v-flex>
            </v-layout>
        </v-app>
    </div>
</template>

<script>
    import MenuBar from './menuBar.vue'
    import CompositionFrame from "./compositionFrame";
    import TvFrame from "./tvFrame";
    export default {
        components : {
            TvFrame,
            CompositionFrame,
            'menuBar': MenuBar,
        },
    }
</script>

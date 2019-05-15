<template>
    <div id="app" v-on:click.native ="resetSelect">
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
        methods: {
            resetSelect : function () {
                console.log("tetetetrezt");
                CompositionFrame.select(null);
            }
        }
    }
</script>

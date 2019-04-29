<template>
    <div id="app">
        <menu-bar></menu-bar>
        <v-app id="inspire">
            <v-layout row wrap>
                <v-flex pa-1 xs6>
                    <composition-frame></composition-frame>
                </v-flex>

                <v-flex pa-1 xs6>
                    <tv-frame></tv-frame>
                </v-flex>
            </v-layout>
        </v-app>
    </div>
</template>

<script>
    import MenuBar from '@/components/menuBar'
    import CompositionFrame from '@/components/compositionFrame'
    import TvFrame from '@/components/tvFrame';

    export default {
        components : {
            TvFrame,
            MenuBar,
            CompositionFrame
        },
        data () {
            return {
            card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
            }
        }
    }
</script>

<template>
    <div id="app">
        <menu-bar></menu-bar>
        <v-app id="inspire">
            <v-layout row wrap>

            </v-layout>
        </v-app>
    </div>
</template>

<script>
    import MenuBar from './menuBar.vue'

    export default {
        name: "EditComposition",

        components : {
            'menuBar': MenuBar,
        },methods: {
            orderList() {
                this.list = this.list.sort((one, two) => {
                    return one.order - two.order;
                });
            },
            onMove({ relatedContext, draggedContext }) {
                const relatedElement = relatedContext.element;
                const draggedElement = draggedContext.element;
                console.log("okokokokokoko");
                return (
                    (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
                );
            }
        },
    }
</script>

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
    import draggable from "vuedraggable";
    import MenuBar from './menuBar.vue'
    import CompositionFrame from "./compositionFrame";
    import TvFrame from "./tvFrame";
    export default {
        components : {
            TvFrame,
            CompositionFrame,
            'menuBar': MenuBar,
            draggable,
        },
        data() {
            return {
                list: message.map((name, index) => {
                    return { name, order: index + 1, fixed: false };
                }),
                list2: [],
                editable: true,
                isDragging: false,
                delayedDragging: false
            };
        },
        methods: {
            orderList() {
                this.list = this.list.sort((one, two) => {
                    return one.order - two.order;
                });
            },
            onMove({ relatedContext, draggedContext }) {
                const relatedElement = relatedContext.element;
                const draggedElement = draggedContext.element;
                return (
                    (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
                );
            }
        },
        computed: {
            dragOptions() {
                return {
                    animation: 0,
                    group: "description",
                    disabled: !this.editable,
                    ghostClass: "ghost"
                };
            },
            listString() {
                return JSON.stringify(this.list, null, 2);
            },
            list2String() {
                return JSON.stringify(this.list2, null, 2);
            }
        },
        watch: {
            isDragging(newValue) {
                if (newValue) {
                    this.delayedDragging = true;
                    return;
                }
                this.$nextTick(() => {
                    this.delayedDragging = false;
                });
            }
        }
    }
</script>

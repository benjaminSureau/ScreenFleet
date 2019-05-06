<template>
    <div>
        <v-card-title class="justify-center">
            <div>
                <h3 class="headline mb-0">Composition</h3>
            </div>
        </v-card-title>
        <v-layout row wrap class="justify-center">
            <div id="compositions" class="list-tv" v-for="composition in compositions">
                <v-flex pa-3>
                    <v-card>
                        <v-card-title class="justify-center">
                            <h3 class="headline mb-0" >{{composition._id}}</h3>
                        </v-card-title>
                        <draggable element="span" v-bind="dragOptions" :move="onMove">
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{composition.name}}</h3>
                                </div>
                            </v-card-title>
                        </draggable>
                    </v-card>
                </v-flex>
            </div>
        </v-layout>

        <v-card-actions>
            <v-btn fab dark small>
                <v-icon dark>remove</v-icon>
            </v-btn>

            <v-btn fab dark small v-on:click="addTv(compositions)">
                <v-icon dark>add</v-icon>
            </v-btn>
        </v-card-actions>

        <!--<div class="list-group col-md-3">
            <pre>{{listString}}</pre>
        </div>-->
    </div>

</template>

<script>
import draggable from "vuedraggable";

const message = [
    "vue.draggable",
    "draggable",
    "component",
    "for",
    "vue.js 2.0",
    "based",
    "on",
    "Sortablejs"
];

const compositions = [
    {_id: '1', name: 'compo1'},
    {_id: '2', name: 'compo2'},
    {_id: '3', name: 'compo3'},
    {_id: '4', name: 'compo4'}
];
    export default {
        name: 'compositionFrame',
    components: {
        draggable,
    },
    data() {
        return {
            list: message.map((name, index) => {
                return { name, order: index + 1, fixed: false };
            }),
            compositions,
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
        },
        addTv: function (compositions) {
            alert(compositions);
            compositions.add
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
};
</script>

<style scoped>

</style>

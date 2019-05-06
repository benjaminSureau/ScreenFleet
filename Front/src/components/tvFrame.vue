<template>
    <div>
        <v-card-title class="justify-center">
            <div>
                <h3 class="headline mb-0">TV</h3>
            </div>
        </v-card-title>

        <v-layout row wrap class="justify-center">
            <div class="list-tv" v-for="tv in tvList">
                <v-flex pa-3>
                    <v-card>
                        <v-card-title class="justify-center">
                            <h3 class="headline mb-0" >{{tv.name}}</h3>
                        </v-card-title>
                        <draggable element="span" v-bind="dragOptions" :move="onMove">
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{tv.composition.name}}</h3>
                                </div>
                            </v-card-title>
                        </draggable>
                    </v-card>
                </v-flex>
            </div>
        </v-layout>

        <v-card-actions class="right">
            <v-btn fab dark small>
                <v-icon dark>remove</v-icon>
            </v-btn>

            <v-btn fab dark small>
                <v-icon dark>add</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
import draggable from "vuedraggable";

const tvList =[
    { name: 'TV1', composition: { name: 'compo1'}},
    { name: 'TV2', composition: { name: 'compo2'}},
    { name: 'TV3', composition: { name: ''}}
];
export default {
    name: 'tvFrame',
    components: {
        draggable,
    },
    data() {
        return {
            tvList,
            list3: [],
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

<template>
    <div>
        <v-card>
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="3"
            ></v-img>

            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    <div> {{ card_text }} </div>
                </div>
            </v-card-title>

            <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
        </v-card>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <!--<div>
            <v-card style="background-color: grey; width: 90%; height: 30%">

            <draggable element="span" v-model="list2" v-bind="dragOptions" :move="onMove">
                <transition-group name="no" class="list-group" tag="ul">
                    <li class="list-group-item" v-for="element in list2" :key="element.order">
                        <v-card :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true">

                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{element.name}}</h3>
                                </div>
                            </v-card-title>
                        </v-card>
                    </li>
                </transition-group>
            </draggable>
            </v-card>

        </div>-->
            <v-card>
                <v-responsive :aspect-ratio="16/9">

                    <draggable element="span" v-model="list2" v-bind="dragOptions" :move="onMove">
                        <transition-group name="no" class="list-group" tag="ul">
                            <li class="list-group-item" v-for="element in list2" :key="element.order">
                                <v-card :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true">

                                    <v-card-title primary-title>
                                        <div>
                                            <h3 class="headline mb-0">{{element.name}}</h3>
                                        </div>
                                    </v-card-title>
                                </v-card>
                                <!--<span class="badge">{{element.order}}</span>-->
                            </li>
                        </transition-group>
                    </draggable>
                </v-responsive>
            </v-card>
        <!--<div class="list-group col-md-3">
            <pre>{{list2String}}</pre>
        </div>-->

    </div>
</template>

<script>
import draggable from "vuedraggable";


const message = [];

export default {
    name: 'tvFrame',
    components: {
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
};
</script>

<style scoped>

</style>

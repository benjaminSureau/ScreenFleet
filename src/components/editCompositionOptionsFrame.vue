<template>
    <div>


        <v-card-actions class="right">
            <v-btn fab dark small>
                <v-icon dark>remove</v-icon>
            </v-btn>

            <v-btn fab dark small v-on:click="addTv(tvList)">
                <v-icon dark>add</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>



const tvList =[
    { name: 'TV 1'},
    { name: 'TV 2'},
    { name: 'TV 3'},
    { name: 'TV 4'}
];

let tvCounter = 4;

export default {
    name: 'editCompositionOptionFrame',
    components: {
    },
    data() {
        return {
            tvList
        };
    },
    computed: {
    },
    methods: {
        addTv: function (tvList) {
            tvCounter++;
            tvList.push({_id: tvCounter, name: 'TV ' + tvCounter});
        },
        show: function (tv) {
            tv.name = selectedComposition.name;
        },
    }
};
</script>

<style scoped>

</style>

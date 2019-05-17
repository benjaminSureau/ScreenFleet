<template>
    <v-toolbar :dark=true>
        <v-toolbar-side-icon v-on:click="goHome()">
            <v-icon x-large>home</v-icon>
        </v-toolbar-side-icon>
        <v-toolbar-title>SORFYP</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat @click="seeResources">Resources</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import router from '../router/index';
	export default {
		name: 'menuBar',
        methods: {
            goHome: function () {
                router.push('/');
            },
            seeResources: function () {
                router.push('/ResourcesView');
            }
        }
	};
</script>

<style scoped>

</style>

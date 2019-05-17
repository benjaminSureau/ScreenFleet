<template>
    <v-toolbar :dark=true>
        <v-toolbar-side-icon v-on:click="goHome()">
            <v-icon x-large>home</v-icon>
        </v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
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
            }
        }
	};
</script>

<style scoped>

</style>

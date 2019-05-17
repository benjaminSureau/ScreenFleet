import Vue from 'vue';
import Router from 'vue-router';
import MainFrame from '@/components/mainFrame';
import EditComposition from '@/components/compositionEditFrame';
import ResourcesView from '@/components/ResourcesView/resourcesMainFrame';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'MainFrame',
			component: MainFrame
		},
		{
			path: '/EditComposition/:id',
			name: 'EditComposition',
			component: EditComposition,
            props: true
		},
		{
			path: '/ResourcesView',
			name: 'ResourcesView',
			component: ResourcesView,
		}
	]
});

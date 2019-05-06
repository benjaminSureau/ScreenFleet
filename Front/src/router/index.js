import Vue from 'vue';
import Router from 'vue-router';
import MainFrame from '@/components/mainFrame';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'MainFrame',
			component: MainFrame
		}
	]
});

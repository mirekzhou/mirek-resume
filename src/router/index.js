import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.debug = true;
Vue.use(VueRouter);

import home      from '../components/home/home.vue';
import projects  from '../components/projects/projects.vue';
import skills    from '../components/skills/skills.vue';
import contact   from '../components/contact/contact.vue';

export default new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			name: '1',
			component: home
		},
		{
			path: '/home',
			name: '1',
			component: home
		},
		{
			path: '/projects',
			name: '2',
			component: projects
		},
		{
			path: '/skills',
			name: '3',
			component: skills
		},
		{
			path: '/contact',
			name: '4',
			component: contact
		}
	]
});
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Db from '../db.json'
import Creates from '../views/CreateView.vue'
import '../style.css'
import Update from '../views/UpdateView.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/db',
			component: Db
		},
		{
			path: '/create',
			component: Creates
		},
		{
			path: '/update/:id',
			name: 'update',
			component: Update
		},
	],
})

export default router
import { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WelcomeView',
      component: (): Promise<Component> => import('@/views/WelcomeView.vue'),
      meta: { title: 'Welcome' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'DocsLayout',
      component: (): Promise<Component> => import('@/layout/DocsLayout.vue'),
      children: [
        {
          path: '/button',
          name: 'TSVueButtonDocs',
          meta: { title: 'Button' },
          component: (): Promise<Component> =>
            import('@/components/docs/TSButtonDocs.vue'),
        },
        {
          path: '/inputtext',
          name: 'TSVueInputTextDocs',
          meta: { title: 'Input Text' },
          component: (): Promise<Component> =>
            import('@/components/docs/TSInputTextDocs.vue'),
        },
      ],
    },
  ],
});

export default router;

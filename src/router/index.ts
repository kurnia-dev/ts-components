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
        {
          path: '/selectgroup',
          name: 'TSVueSelectGroupDocs',
          meta: { title: 'Input Text' },
          component: (): Promise<Component> =>
            import('@/components/docs/SelectGroupDocs.vue'),
        },
        {
          path: '/nametag',
          name: 'TSVueNameTagDocs',
          meta: { title: 'Name Tag' },
          component: (): Promise<Component> =>
            import('@/components/docs/NameTagDocs.vue'),
        },
        {
          path: '/filtercontainer',
          name: 'TSVueFilterContainerDocs',
          meta: { title: 'Filter Container' },
          component: (): Promise<Component> =>
            import('@/components/docs/FilterContainerDocs.vue'),
        },
      ],
    },
  ],
});

export default router;

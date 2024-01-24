/* eslint-disable promise/no-nesting */
/* eslint-disable promise/prefer-await-to-callbacks */
/* eslint-disable promise/always-return */
/* eslint-disable promise/prefer-await-to-then */
/// <reference types="cypress" />

before(() => {
  const stylesheets: string[] = [
    'node_modules/primeicons/primeicons.css',
    'node_modules/primevue/resources/primevue.min.css',
    'node_modules/primevue/resources/themes/lara-light-blue/theme.css',
    'node_modules/remixicon/fonts/remixicon.css',
    'src/assets/main.css',
  ];

  return cy.document().then((doc: Document) => {
    return Promise.all(
      stylesheets.map((stylesheet: string) => {
        return cy.readFile(stylesheet, 'utf-8').then((content: string) => {
          const style: HTMLStyleElement = doc.createElement('style');
          style.innerHTML = content;
          doc.querySelector('head')?.appendChild(style);
        });
      }),
    );
  });
});

/// <reference types="cypress" />
import DateText from '../../DateText.vue';

describe('DateText component', () => {
  beforeEach(() => {
    const user = {
      generalSetting: {
        timezone: 'America/New_York',
        dateFormat: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          weekday: 'short',
          locale: 'en-US',
        },
        timeFormat: true,
      },
    };
    localStorage.setItem('user', JSON.stringify(user));
  });

  it('displays a formatted date string based on general settings', () => {
    const date = new Date('2022-01-01T12:34:56Z');
    const useTime = true;
    cy.mount(DateText, {
      props: {
        date,
        useTime,
      },
    });

    cy.get('.date-text').should('have.text', 'Sat, Jan 1, 2022, 07:34:56 AM');
  });

  it('displays a formatted date string without time based on general settings', () => {
    const date = new Date('2022-01-01T12:34:56Z');
    cy.mount(DateText, {
      props: {
        date,
      },
    });

    cy.get('.date-text').should('have.text', 'Sat, Jan 1, 2022');
  });

  it('displays a formatted date string in a different locale based on general settings', () => {
    const user = {
      generalSetting: {
        timezone: 'America/New_York',
        dateFormat: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          weekday: 'short',
          locale: 'fr-FR',
        },
        timeFormat: true,
      },
    };
    localStorage.setItem('user', JSON.stringify(user));

    const date = new Date('2022-01-01T12:34:56Z');
    const useTime = true;
    cy.mount(DateText, {
      props: {
        date,
        useTime,
      },
    });

    cy.get('.date-text').should('have.text', 'sam. 1 janv. 2022, 07:34:56 AM');
  });

  it('displays a formatted date string based on default user settings when no user object is found in localStorage', () => {
    localStorage.removeItem('user');
    const date = new Date('2022-01-01T12:34:56Z');
    const useTime = true;
    cy.mount(DateText, {
      props: {
        date,
        useTime,
      },
    });

    cy.get('.date-text').should('have.text', 'Sat, 01/01/22, 07:34:56 AM');
  });
});

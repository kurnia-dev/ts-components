/// <reference types="cypress" />

import TSCalendar from '../TSCalendar.vue';
import { TSCalendarProps } from '../TSCalendar.vue.d';
import TSForm from '../../tsform/TSForm.vue';

const render = (props?: TSCalendarProps): void => {
  cy.mount(TSCalendar, {
    props,
  });
};

describe('TSCalendar.vue', () => {
  it('should render the component', () => {
    render();

    cy.get('.field_wrapper').should('be.visible');
  });

  it('should display the label', () => {
    render({ label: 'Test Label' });
    cy.get('[data-test="label"]').should('contain', 'Test Label');
  });

  describe('Display mandatory *', () => {
    it('should display the mandatory asterisk if mandatory prop is true', () => {
      const props = {
        label: 'Test Label',
        mandatory: true,
      };

      render(props);

      cy.get('.field_wrapper label .text-danger').should('be.visible');
    });

    it('should not display the mandatory asterisk if mandatory prop is false', () => {
      const props = {
        label: 'Test Label',
        mandatory: false,
      };

      render(props);

      cy.get('[data-test="mandatory"]').should('not.exist');
    });
  });

  it('should display the calendar input', () => {
    render();

    cy.get('.ts-dateinput').click();
    cy.get('.ts-datepicker').should('be.visible');
  });

  it('should display the placeholder text', () => {
    render();

    cy.get('.ts-dateinput').should('have.attr', 'placeholder', 'Select date');
  });

  it('should emit the "update:modelValue" on single date selected', () => {
    const dateModel: number | number[] = [];
    const props = {
      modelValue: dateModel,
      label: 'Test Label',
      mode: 'single',
    };

    cy.mount(TSCalendar, { props }).then(({ wrapper }) => {
      cy.get('.ts-dateinput').click();
      cy.get('.p-datepicker-today').click();

      cy.then(() => {
        cy.wrap(wrapper.emitted()['update:modelValue']).as('modelValue');

        cy.get('@modelValue').should('not.be.NaN');
      });
    });
  });

  it('should emit the "update:modelValue" on date range selected', () => {
    const dateModel: number | number[] = [];
    const props = {
      modelValue: dateModel,
      label: 'Test Label',
      mode: 'range',
    };

    cy.mount(TSCalendar, { props }).then(({ wrapper }) => {
      cy.get('.ts-dateinput').click();
      cy.get('.p-datepicker-today').click();
      cy.get('.p-datepicker-today').prev().click();

      cy.then(() => {
        expect(wrapper.emitted()['update:modelValue'][1][0]).to.have.length(2);
      });
    });
  });

  describe('Validation', () => {
    beforeEach(() => {
      cy.mount(TSForm, {
        props: {
          buttonsTemplate: ['submit'],
        },
        components: TSCalendar,
        slots: {
          fields:
            '<TSCalendar label="Date" use-validator field-name="date" mandatory mode="range" />',
        },
      });
    });

    it('should display validation message when field is empty and form is submitted', () => {
      cy.contains('Submit').click();
      cy.get('.validator-message').should('be.visible');
    });

    it('should not display validation message when field is not empty and form is submitted', () => {
      cy.get('.ts-dateinput').click();
      cy.get('.p-datepicker-today').click();
      cy.get('.p-datepicker-today').next().click();
      cy.contains('Submit').click();
      cy.get('[data-test="ts-calendar-validator-message"]').should(
        'not.be.visible',
      );
    });
  });

  it('should show given single date value on mounted', () => {
    const date = +new Date();

    render({
      dateValue: date,
      mode: 'single',
      useValidator: true,
    });

    cy.get('.ts-dateinput')
      .invoke('val')
      .then((textVal) => {
        expect(textVal).to.not.eq('');
      });
  });

  it('should show given date range value on mounted', () => {
    const date = [+new Date(), +new Date()];

    render({
      dateValue: date,
      mode: 'single',
      useValidator: true,
    });

    cy.get('.ts-dateinput')
      .invoke('val')
      .then((textVal) => {
        cy.wrap(textVal).should('not.eq', '').and('contains', '-');
      });
  });

  /*
   * It('should show given date range value with async data', () => {
   *   cy.clock();
   *   let date: number[] | undefined = undefined;
   *
   *   const TestComponent = {
   *     components: { TSCalendar },
   *     data(): { dateValue?: number[] } {
   *       return { dateValue: date };
   *     },
   *     template: `
   *       <TSCalendar
   *         :dateValue="dateValue"
   *         mode="single"
   *         useValidator
   *       />
   *     `,
   *   };
   *
   *   cy.mount(TestComponent).as('TestComponent');
   *
   *   cy.tick(2000).then(() => {
   *     date = [+new Date(), +new Date()];
   *     cy.get('@TestComponent')
   *       .its('wrapper')
   *       .invoke('setData', { dateValue: date });
   *   });
   *
   *   cy.get('.ts-dateinput')
   *     .invoke('val')
   *     .then((textVal) => {
   *       cy.wrap(textVal).should('not.eq', '').and('contains', '-');
   *     });
   * });
   */
});

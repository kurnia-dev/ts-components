import NameTag from '../../NameTag.vue';
import '../../style/NameTag.scss';

describe('NameTag', () => {
  it('displays hyphen if name prop is empty', () => {
    cy.mount(NameTag, {
      propsData: {
        name: '',
      },
    });
    cy.get('span[aria-label="invalid-name"]').should('contain', '-');
  });

  it('displays full name if name prop length <= 12', () => {
    cy.mount(NameTag, {
      propsData: {
        name: 'John Doe',
      },
    });
    cy.get('.name-tag-name').should('contain', 'John Doe');
  });

  it('truncates long name if name prop length > 12', () => {
    const longName = 'Johnathan Edward';
    cy.mount(NameTag, {
      propsData: {
        name: longName,
      },
    });
    cy.get('.name-tag-name').should('contain', 'Johna..dward');
  });

  it('formats user type name', () => {
    cy.mount(NameTag, {
      propsData: {
        name: 'Johnathan Edward',
        type: 'user',
      },
    });
    cy.get('.name-tag-name').should('contain', 'Johnatha.. E');
  });

  it('formats user name with single word and length more than 8', () => {
    cy.mount(NameTag, {
      propsData: {
        name: 'Johnathanedward',
        type: 'user',
      },
    });
    cy.get('.name-tag-name').should('contain', 'Johnatha..');
  });

  it('does not truncate status type name', () => {
    const longStatus = 'system_overloaded';
    cy.mount(NameTag, {
      propsData: {
        name: longStatus,
        type: 'status',
      },
    });
    cy.get('.name-tag-name').should('contain', longStatus);
  });

  it('applies style classes based on severity prop', () => {
    cy.mount(NameTag, { propsData: { severity: 'success', name: 'Test' } });
    cy.get('.name-tag').should('have.class', 'text-success');

    cy.mount(NameTag, { propsData: { severity: 'danger', name: 'Test' } });
    cy.get('.name-tag').should('have.class', 'text-danger');
  });

  it('shows remove button if removable prop true', () => {
    cy.mount(NameTag, { propsData: { removable: true, name: 'Test' } });
    cy.get('.remove-btn').should('be.visible');
  });

  it('emits remove event when remove button clicked', () => {
    const removeSpy = cy.spy().as('removeSpy');
    cy.mount(NameTag, {
      props: {
        removable: true,
        name: 'Test',
        onRemove: removeSpy,
      },
    });
    cy.get('button.remove-btn').click();
    cy.get('@removeSpy').should('have.been.calledOnce');
  });
});

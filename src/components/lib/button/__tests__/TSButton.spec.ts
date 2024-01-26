import { mount } from '@vue/test-utils';
import Button from '../TSButton.vue';

describe('Button', () => {
  it('renders a button with the correct label', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Click me',
      },
    });
    expect(wrapper.text()).toContain('Click me');
  });

  it('renders a button with the correct icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'fa fa-heart',
      },
    });
    expect(wrapper.find('.ts-button-icon').exists()).toBe(true);
    expect(wrapper.find('.fa.fa-heart').exists()).toBe(true);
  });

  it('renders a button with the correct severity', () => {
    const wrapper = mount(Button, {
      props: {
        severity: 'primary',
      },
    });
    expect(wrapper.classes()).toContain('ts-button-primary');
  });

  it('renders an outlined button', () => {
    const wrapper = mount(Button, {
      props: {
        outlined: true,
      },
    });
    expect(wrapper.classes()).toContain('outlined');
  });

  it('renders a text-only button', () => {
    const wrapper = mount(Button, {
      props: {
        textOnly: true,
      },
    });
    expect(wrapper.classes()).toContain('text-only');
  });

  it('renders an icon-only button', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'fa fa-heart',
      },
    });
    expect(wrapper.classes()).toContain('icon-only');
  });

  it('renders an icon on the right', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'fa fa-heart',
        iconPos: 'right',
      },
    });
    expect(wrapper.classes()).toContain('icon-right');
  });

  it('emits a click event when clicked', () => {
    const wrapper = mount(Button);
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });
});

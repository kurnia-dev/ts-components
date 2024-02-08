import { mount } from '@vue/test-utils';
import Breadcrumb from './Breadcrumb.vue';
import { nextTick } from 'vue';

describe('Breadcrumb.vue', () => {
  it('renders breadcrumb items correctly', async () => {
    const menus = [
      { name: 'Home', route: '/home' },
      { name: 'About', route: '/about' },
      { name: 'Contact', route: '/contact' }
    ];

    const wrapper = mount(Breadcrumb, {
      props: { menus }
    });

    await nextTick();

    const breadcrumbItems = wrapper.findAll('.breadcrumb-label');
    expect(breadcrumbItems.length).toBe(menus.length);

    breadcrumbItems.forEach((item, index) => {
      expect(item.text()).toBe(menus[index].name);
    });
  });

  it('renders the last breadcrumb item as text', async () => {
    const menus = [
      { name: 'Home', route: '/home' },
      { name: 'About', route: '/about' },
      { name: 'Contact', route: '/contact' }
    ];

    const wrapper = mount(Breadcrumb, {
      props: { menus }
    });

    await nextTick();

    const lastBreadcrumbItem = wrapper.find('.breadcrumb-label.text-muted');
    expect(lastBreadcrumbItem.text()).toBe(menus[menus.length - 1].name);
  });

  it('renders breadcrumb items with route as links', async () => {
    const menus = [
      { name: 'Home', route: '/home' },
      { name: 'About', route: '/about' },
      { name: 'Contact', route: '/contact' }
    ];

    const wrapper = mount(Breadcrumb, {
      props: { menus }
    });

    await nextTick();

    const breadcrumbLinks = wrapper.findAll('.breadcrumb-label a');
    expect(breadcrumbLinks.length).toBe(menus.length - 1);

    breadcrumbLinks.forEach((link, index) => {
      expect(link.attributes('href')).toBe(menus[index].route);
    });
  });
});
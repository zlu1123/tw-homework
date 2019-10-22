import {mount, createLocalVue, shallowMount} from '@vue/test-utils'
import DeleteItem from '@/views/home/Cruise/DeleteItem.vue'

describe('开始DeleteItem.vue', () => {
    const wrapper = mount(DeleteItem);

    it('DeleteItem包含item', () => {
        expect(wrapper.html()).toContain('<div class="icon-trash delete-item-icon"></div>')
    })
})

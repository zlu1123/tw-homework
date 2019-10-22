import {mount, createLocalVue, shallowMount} from '@vue/test-utils'
import Table from '@/views/home/TableSearch/Table.vue'

describe('开始Tabler.vue', () => {
    it('Table包含item', () => {
        const wrapper = mount(Table);
        expect(wrapper.html()).toContain('<div class="table-cotent-display">')
    })
})

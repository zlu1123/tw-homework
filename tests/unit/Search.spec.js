import {mount} from '@vue/test-utils'
import Search from '@/views/home/TableSearch/Search.vue'

describe('开始Search.vue', () => {
    const wrapper = mount(Search);

    it('Search包含item', () => {
        expect(wrapper.html()).toContain('<div class="search-content-list">')
    })
})

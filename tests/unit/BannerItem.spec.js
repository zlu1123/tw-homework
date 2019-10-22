import {mount} from '@vue/test-utils'
import BannerItem from '@/components/common/BannerItem.vue'

describe('开始BannerItem.vue', () => {
    const wrapper = mount(BannerItem);

    it('BannerItem包含item', () => {
        expect(wrapper.html()).toContain('<div class="item-content"><i class="icon-dashboard"></i> <span>DASHBOARD</span></div>')
    })
})

import {mount, createLocalVue, shallowMount} from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('开始Header.vue', () => {
    const wrapper = mount(Header);

    it('Header包含item', () => {
        expect(wrapper.html()).toContain('<i class="icon-angle-down header-user"></i>')
    })

    it('Header中退出页面不显示', () => {
        expect(wrapper.vm.signOutFlag).toBe(false);
        // .vm 可以获取当前实例对象，相当于拿到了 vue组件里的 this 对象
        // find()可以匹配各种类型的选择器，类似于选中 DOM, text() 就是获取其中的内容
        // toEqual 是一个断言，判断结果为 ‘title’ 时，通过测试，否则猜测是失败
    });


    it('Header点击事件以后，显示', () => {
        wrapper.find(".header-user-img").trigger('click')
        expect(wrapper.vm.signOutFlag).toBe(true)
    })


})

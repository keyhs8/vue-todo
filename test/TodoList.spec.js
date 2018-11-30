import { shallowMount } from '@vue/test-utils'
import TodoList from '@/src/components/TodoList.vue'

describe('TodoList.vue', () => {
    it('matches snapshot', () => {
        const todos = [ 
            {id: 1, title: '稟議書作成', 'isDone': True}, 
            {id: 2, title: '事業計画書', 'IsDone': False}
        ]
        const wrapper = shallowMount(TodoList, {
            propData: {todos}
        })
        console.log(warapp)
        expect(wapper.html()).toMatchSnapshot()
    })
})
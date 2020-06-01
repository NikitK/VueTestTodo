export default {
    actions:{
        async fetchTodos({commit}) {
            const res = await fetch(
               'http://jsonplaceholder.typicode.com/todos/1'
            )
            const todos = await res.json()
      
            commit('updateTodos', todos)
          },
    },
    mutations:{
        updateTodos(state, todos){
            state.todos = todos
        },
        addNewTodo(state, newTodo) {
            state.todos.push(newTodo)
          }
    },
    state:{
        todos:[]
    },
    getters:{
        allTodos(state){
            return state.todos;
        }
    }
}
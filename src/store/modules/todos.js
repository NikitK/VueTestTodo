// export default {
//     actions: {
//         createTodo({
//             commit
//         }, todo) {
//             commit('createTodo', todo)
//         },
//         removeTodoById({
//             commit
//         }, idToRemove) {
//             commit('removeTodo', idToRemove)
//         }

//     },
//     mutations: {
//         // createTodo(state) {
//         //     localStorage.setItem('todos',JSON.stringify(state.todos))
//         // },
//         removeTodoById(state, idToRemove) {
//             console.log(state.todos.length);
//             for(let i = 0;i++ ;i < state.todos.length){
//                 state.todos = state.todos[i].filter(todo => {
//                     return todo.id !== idToRemove;
//                 });
//             }
//             localStorage.setItem('todos',JSON.stringify(state.todos))
//         }
//     },
//     state: {
//         todos:JSON.parse(localStorage.getItem('todos') || '[]')
//     },
//     getters: {
//         allTodos(state) {
//             return state.todos;
//         }
//     }
// }
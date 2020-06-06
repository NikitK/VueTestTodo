export default {
    actions: {
        createCard({
            commit
        }, card) {
            commit('createCard', card)
        },
        updateStore({
            commit
        }) {
            commit('updateStore')
        },
        removeCardById({
            commit
        }, idToRemove) {
            commit('removeTodo', idToRemove)
        },
        removeAllCard({
            commit
        }) {
            commit('updateStore')
        },

    },
    mutations: {
        createCard(state, card) {
            state.cards.push(card)
            localStorage.setItem('cards', JSON.stringify(state.cards))
        },
        updateStore(state) {

            localStorage.setItem('cards', JSON.stringify(state.cards))
        },
        removeCardById(state, idToRemove) {
            state.cards = state.cards.filter(card => {
                return card.id !== idToRemove;
            });
            localStorage.setItem('cards', JSON.stringify(state.cards))
        },
        removeAllCard(state) {
            state.cards = [];
            localStorage.setItem('cards', JSON.stringify(state.cards))
        }
    },
    state: {
        cards: JSON.parse(localStorage.getItem('cards') || '[]')
    },
    getters: {
        allCards(state) {
            return state.cards;
        },
        allCompletedCard(state) {
            return state.cards.filter(item => {
                if (item.completed == true) {
                    return item
                }
            })

        }
    }
}
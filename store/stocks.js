    import stocks from '../data/stocks.js'

    export const state = () => ({
    stocks: stocks.appStocks()
    })

    export const mutations = {
        'SET_STOCKS' ({commit}, stocks) {
            state.stocks = stocks
        },

        'RND_STOCKS' (state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
            })
        }
    }

    export const actions = {
        
        initStocks:({commit}) => {
            commit('SET_STOCKS', stocks)
        },

        randomizeStocks: ({commit}) => {
            commit('RND_STOCKS')
        }

    }

    export const getters = {
        stocks:  state => state.stocks
    }

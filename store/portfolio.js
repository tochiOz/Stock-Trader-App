
export const state = () => ({
   funds: 100000,
   stocks: [],
   newlyBought: ''
})

export const mutations = {
    'BUY_STOCKS' (state, {stockId, quantity, price}) {
        const record = state.stocks.find(element => element.id == stockId)
        if (record) {
            let qty = parseInt(record.quantity)
            let formatNum = parseInt(quantity)
            qty = qty + formatNum
            record.quantity = qty
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.newlyBought = record
        state.funds -= price * quantity

    },

    'SELL_STOCKS' (state, {stockId, quantity, price}) {
        const record = state.stocks.find(element => element.id == stockId)
        if (record.quantity > quantity) {
            let buyFunds = this.funds
            record.quantity -= quantity
            buyFunds += quantity
        } else {
             state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += price * quantity
    },

    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
    }
}

export const actions = {
    sellStocks: ({commit}, order) => {
        commit('SELL_STOCKS', order)
    },

    buyStock: ({commit}, order) => {
        commit('BUY_STOCKS', order)
    }
}

export const getters = {
    stockPortfolio(state, getters, rootState) {
        return state.stocks.map(stock => {
            const record = rootState.stocks.stocks.find(element => element.id == stock.id)
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },

    funds: state => state.funds,
    newlyBought: state => state.newlyBought,
}

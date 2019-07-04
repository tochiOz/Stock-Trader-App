import axios from 'axios'

export const state = () => ({

})

export const mutations = {
    
}

export const actions = {
    async loadData ({commit}) {
        await axios.get('https://stock-trader-7af01.firebaseio.com/stocks.json')
        .then(res => {
            let data = res.data
            if(data) {
                const stocks = data.stocks
                const funds = data.funds
                const stockPortfolio = data.stockPortfolio

                const portfolio = {
                    stockPortfolio,
                    funds
                }

                commit('stocks/SET_STOCKS', stocks)
                commit('portfolio/SET_PORTFOLIO', portfolio)
            }
        })
    }
}
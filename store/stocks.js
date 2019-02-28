
export const state = () => ({
    stocks: [
        { id: 1, name: 'Dangote', price: 100},
        { id: 2, name: 'KodeHauz', price: 1000},
        { id: 3, name: 'ExxonMobil', price: 500},
        { id: 4, name: 'Unilever', price: 140},
        { id: 5, name: 'Total', price: 630},
        { id: 6, name: 'Shell', price: 940}
    ]
})

export const mutations = {
    
}

export const actions = {
    
}

export const getters = {
    stocks:  state => state.stocks
}

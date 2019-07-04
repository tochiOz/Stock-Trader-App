<template>
    <div class="font-sans antialiased shadow pin-t">
        <nav class="flex items-center justify-between flex-wrap bg-grey-darkest text-grey-lightest p-5 h-auto">
            <div class="flex items-center flex-no-shrink text-white mr-20">
                <svg class="h-12 w-12 mx-3 sm:h-6 sm:w-6 fill-current text-teal-dark inline-block" 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"/>
                </svg>
                
                <h1><span class="font-semibold tracking-tight my-auto ">
                    <nuxt-link to="/" class="leading-tight md:tracking-wide no-underline block text-white xs:text-sm">
                        Stock Trader
                    </nuxt-link> 
                </span></h1>
            </div>

            <div class="block sm:hidden">
                <button @click.prevent="toggle" class="flex items-center px-3 py-2 border 
                    rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        
            <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto my-auto">
                <div class="text-sm sm:flex-grow">
                    <nuxt-link to="/portfolio" 
                        class="no-underline block text-xl mt-4 sm:inline-block sm:mt-0 
                                text-teal-lighter hover:text-white mr-4">
                        Portfolio
                    </nuxt-link>
                    <nuxt-link to="/stocks" class="no-underline block text-xl mt-4 
                        sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4">
                        Stocks
                    </nuxt-link>
                </div>
                <div class="flex pt-1">
                    <div class="relative group" @click.prevent="toggleNav">
                        <div class="flex cursor-pointer md:mx-4 text-xl text-teal-lighter hover:text-white">
                            Save/Load
                            <svg class="fill-current h-6 mt-1 w-4" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                        <div class="items-center absolute border border-t-0 rounded-b-lg group-hover:visible w-full" 
                            :class="dialog ? 'block': 'hidden'">
                            <p class="no-underline text-xl hover:text-white cursor-pointer bg-white text-center px-4 py-2 block text-teal 
                                hover:bg-teal-dark hover:teal-white "
                                @click.prevent="saveDay">
                                Save
                            </p>
                            <p class="no-underline text-xl hover:text-white cursor-pointer bg-white text-center px-4 py-2 block text-teal 
                                hover:bg-teal-dark hover:teal-white "
                                @click.prevent="loadStocks">
                                Load
                            </p>
                        </div>
                    </div>                   
                </div>
                <div class="block sm:block">
                    <p href="#" 
                        class="text-xl py-2 cursor-pointer text-teal-lighter hover:text-white mt-4 sm:mt-0 md:mr-6"
                        @click.prevent="endDay">
                        End Day
                    </p>
                </div>
                <div class="block sm:block">
                    <a href="#" class="no-underline text-xl py-2 text-teal-lighter hover:text-white mt-4 sm:mt-0 md:mr-6">
                        Funds: ${{ funds }}
                    </a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

import axios from 'axios'
export default {

    data () {
        return {
            open: false,
            dialog: false
        }
    },

    computed: {
        funds () {
            return this.$store.getters['portfolio/funds']
        }
    },

    methods: {
        toggle () {
            this.open = !this.open
        },

        toggleNav() {
            this.dialog = !this.dialog
        },

        endDay () {
            this.$store.dispatch('stocks/randomizeStocks')
        },

        async saveDay() {
            const data = {
                funds: this.$store.getters['portfolio/funds'],
                stockPortfolio: this.$store.getters['portfolio/stockPortfolio'],
                stocks: this.$store.getters['stocks/stocks']
            }

            await axios.put('https://stock-trader-7af01.firebaseio.com/stocks' + '.json', data)
            .then(res => console.log(res.data))
            .catch(e => console.log(e))
        },

        async loadStocks() {
            return this.$store.dispatch('loadData')
        }
    }
}
</script>


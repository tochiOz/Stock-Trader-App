<template>
    <div>
        <div class="sm:w-full xs:w-full flex flex-wrap justify-between xs:mx-auto">
            <!-- <div class=""> -->
            <app-stock 
                v-for="stock in stocks" 
                :key="stock.id"
                :stock="stock"
                >
            </app-stock>
            <!-- </div> -->
        </div>
        <div class="bg-teal-darker text-center py-4 lg:px-4 my-32 ">
            <div class="p-2 bg-teal-dark items-center text-indigo-lightest leading-none lg:rounded-full 
                        flex lg:inline-flex" role="alert">
                <span class="flex rounded-full bg-white uppercase px-2 py-1 text-xs text-teal-darker font-bold mr-3">
                    New
                </span>
                <span class="font-semibold mr-2 text-center text-left flex-auto text-white">
                    Get the most affordable and cheapest shares from our Stocks, Invest Wisely
                </span>
                <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                </svg>
            </div>
        </div>
    </div>
    
</template>

<script>

import Stock from "../components/stocks/stock.vue"
export default {
    
    computed: {
        stocks () {
            return this.$store.getters['stocks/stocks']
        }
    },

    components: {
        appStock: Stock
    }
}
</script>

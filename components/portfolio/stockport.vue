<template>
    <div class="mt-5 max-w-sm sm:w-full xs:w-full">
        <div class=" rounded shadow-lg max-h-64">
            <div class="h-16 bg-teal-dark p-5 leading text-white ">
                <h2 class="font-bold text-xl">{{ stock.name }} <small>Price: ({{ stock.price }} | Quantity: {{ stock.quantity }})</small></h2>

            </div>
            <div class="px-6 py-6 flex justify-between">
                <div class="w-2/3">
                    <input 
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="number" 
                        min="0"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{danger: lessQuanity}">
                </div>
                <div class="w-1/3">
                    <button 
                        class="bg-red float-right hover:bg-white text-white py-2 
                        px-6 float-l rounded hover:text-teal-dark focus:outline-none focus:shadow-outline" 
                        @click.prevent="sellShares" 
                        :disabled="quantity <= 0 && !isNaN(quantity) && lessQuanity">
                        {{ lessQuanity ? 'Error' : 'Sell' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],

    data() {
        return {
            quantity: 0
        }
    },

    computed: {
        lessQuanity() {
            return this.quantity > this.stock.quantity
        }
    },

    methods: {
        sellShares () {
            const order = {
                stockId: this.stock.id,
                quantity: this.quantity,
                price: this.stock.price
            }
            // alert(isNaN(order.quantity))
            // alert(JSON.stringify(order))
            this.$store.dispatch('portfolio/sellStocks', order)
            this.quantity = 0
        }
    }
}
</script>

<style scoped>
    danger{
        border: 1px solid red;
    }
</style>

<template>
    <div class="h-screen">
        <!-- <div class="xs:flex xs:flex-wrap mx-auto invisible">
            <transition >
                <img src="~assets/image/user.png" alt="user" >
                <h1 class="text-5xl">
                    You Dont Have any Stocks available
                </h1>
            </transition>
        </div> -->
        
        <div class="sm:w-full xs:w-full flex flex-wrap justify-between xs:mx-auto">
            <!-- <div class=""> -->
           <app-portfolio 
                v-for="stock in stocks" 
                :key="stock.id"
                :stock="stock"></app-portfolio>
            <!-- </div> -->
        </div>
    </div>
    
</template>

<script>

import Portfolio from "../components/portfolio/stockport.vue"

export default {

    computed: {
        stocks () {
            return this.$store.getters['portfolio/stockPortfolio']
        },
        newlyBought() {
            return this.$store.getters['portfolio/newlyBought']
        }
    },

    watch: {
        newlyBought: function (newVal) {
            alert('this is new val: ' + JSON.stringify(newVal) )
        }
    },

    components: {
        appPortfolio: Portfolio
    }
}
</script>

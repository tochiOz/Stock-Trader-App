<template>
    <div class="font-sans antialiased shadow pin-t" id="app">
        <nav class="flex items-center justify-between flex-wrap bg-grey-darkest text-grey-lightest p-6 h-auto">
            <div class="flex items-center flex-no-shrink text-white mr-20">
                <svg class="h-12 w-12 mx-3 fill-current text-teal-dark inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"/>
                </svg>
                
                <h1><span class="font-semibold tracking-tight my-auto">Stock Trader</span></h1>
            </div>

            <div class="block sm:hidden">
                <button @click.prevent="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
        
            <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto my-auto">
                <div class="text-sm sm:flex-grow">
                    <a href="#responsive-header" class="no-underline block text-xl mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4">
                        Docs
                    </a>
                    <a href="#responsive-header" class="no-underline block text-xl mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4">
                        Examples
                    </a>
                    <a href="#responsive-header" class="no-underline block text-xl mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white">
                        Blog
                    </a>
                </div>
                <div>
                    <a href="#" class="no-underline inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0">Download</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

    data () {
        return {
            open: false
        }
    },

    methods: {
        toggle () {
            this.open = !this.open
        }
    }
}
</script>


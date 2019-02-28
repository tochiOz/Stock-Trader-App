<template>
<div >
  <div class="md:w-1/3 sm:w-full xs:w-full rounded shadow-lg max-h-64">
      <div class="h-16 bg-teal-dark p-5 leading text-white font-bold text-lg">
        <h3>Name <small>Price: (PRICE)</small></h3>
      </div>
      <div class="px-6 py-6 flex justify-between">
        <div class="w-2/3">
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Quantity">
        </div>
        <div class="w-1/3">
           <button class="bg-teal-dark float-right hover:bg-white text-white py-2 px-6 float-l rounded hover:text-teal-dark focus:outline-none focus:shadow-outline" type="button">
            Buy
          </button>
        </div>
      </div>
    </div>
</div>
    

</template>

<script>
import Logo from '~/components/templates1/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
 
  min-height: 83.2vh;
 
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

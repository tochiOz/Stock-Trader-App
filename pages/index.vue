<template>
  <div class=" xs:m-10 xs:flex xs:flex-wrap justify-around">
      <div class="border sm:px-16 sm:py-16 border-teal-dark 
          rounded bg-auto bg-white sm:mb-100">
        <p class="text-teal-dark md:text-6xl">
          <span>Trade or View Your Portfolio</span>
        </p>
        <br><br>
        <p class="mb-2 text-xl">
          <span>You may save & load your Data</span>
        </p>
        <p class="mb-2 text-xl">
          <span>Click on 'End Day' to begin a New Day</span>
        </p>
        <br>
        <hr>
        <p class="mb-1 text-2xl">
          <span>Your Funds: ${{ funds }}</span>
        </p>
      </div>
  </div>
</template>

<script>
import Logo from '~/components/templates1/Logo.vue'

export default {
  components: {
    Logo
  },

  computed: {
    funds () {
      return this.$store.getters['portfolio/funds']
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


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

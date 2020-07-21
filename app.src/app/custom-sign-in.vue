<template>
  <sign-in>
    <template v-slot:header>
      <h2 class="text-center">HELLO!</h2>
    </template>
  </sign-in>
</template>
<script>
  import SignIn from '../../src/pages/sign-in.vue'

  export default {
    components: {
      SignIn
    }
  }
</script>
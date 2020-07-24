<template>
  <sign-in>
    <template v-slot:splash>
      <div class="mx-auto w-max-5">
        <h1 class="text-center mb-5 text-info">TUTU</h1>
      </div>
    </template>
    <template v-slot:header>
      Sign in
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
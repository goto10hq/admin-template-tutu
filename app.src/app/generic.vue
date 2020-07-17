<template>
  <div>
    <h1>{{ headline }}</h1>
  </div>
</template>
<script>
  import config from '../core/config'

  export default {
    computed: {
      headline () {
        let name = this.$route.name
        for (let m of config.menu) {
          if (name == m.name) {
            return m.text
          }
          if (m.subs != undefined && m.subs != null && m.subs.length > 0) {
            for (let m2 of m.subs) {
              if (name == m2.name) {
                return m2.text
              }
            }
          }          
        }

        return '?'
      }
    }
  }
</script>
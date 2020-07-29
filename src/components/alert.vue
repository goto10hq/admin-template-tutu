<template>
  <div v-show="isVisible" :id="id" role="alert" :class="alertClass">
    <button v-if="closable" type="button" class="close" aria-label="Close" @click="closeAlert">
      <span aria-hidden="true">
        <slot name="close">&times;</slot>
      </span>
    </button>
    <slot></slot>    
    <span v-html="errorMessage"></span>
  </div>
</template>
<script>
  import getErrorHtml from '../js/errors.js'

  export default {    
    props: {
      id: {
        type: String,
        default: function () {
          return 'alert-id-' + this._uid
        }
      },
      closable: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 0
      },
      type: {
        type: String,
        default: 'danger'
      },
      className: {
        type: String,
        default: null
      },
      errors: {
        type: [Object, Array],
        required: false,
        default: null
      }
    },
    data () {
      return {
        timeout: 0
      }
    },
    computed: {
      alertClass () {
        if (this.className != null) {
          return this.className
        }
        return `alert alert-${this.type}`
      },
      isVisible () {
        if (this.errorMessage != null) {
          return true
        }

        if (this.$slots.default != null && this.$slots.default != '') {
          return true
        }

        return false
      },
      errorMessage () {
        return getErrorHtml(this.errors)
      }
    },
    mounted () {
      if (this.duration > 0) {
        this.timeout = setTimeout(this.closeAlert, this.duration)
      }
    },
    destroyed () {
      clearTimeout(this.timeout)
    },
    methods: {
      closeAlert () {
        clearTimeout(this.timeout)
        this.$emit('close')
      }
    }
  }
</script>